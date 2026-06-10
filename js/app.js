const els = {
  layoutSelect: document.querySelector("#layoutSelect"),
  resetProgress: document.querySelector("#resetProgress"),
  prevLesson: document.querySelector("#prevLesson"),
  repeatLesson: document.querySelector("#repeatLesson"),
  nextLesson: document.querySelector("#nextLesson"),
  lessonBanner: document.querySelector("#lessonBanner"),
  lessonTitle: document.querySelector("#lessonTitle"),
  phaseLabel: document.querySelector("#phaseLabel"),
  stepLabel: document.querySelector("#stepLabel"),
  adaptiveHint: document.querySelector("#adaptiveHint"),
  prompt: document.querySelector("#prompt"),
  typingInput: document.querySelector("#typingInput"),
  progressBar: document.querySelector("#progressBar"),
  accuracyStat: document.querySelector("#accuracyStat"),
  accuracyHistory: document.querySelector("#accuracyHistory"),
  wpmStat: document.querySelector("#wpmStat"),
  wpmHistory: document.querySelector("#wpmHistory"),
  cpmStat: document.querySelector("#cpmStat"),
  cpmHistory: document.querySelector("#cpmHistory"),
  weakKeyStat: document.querySelector("#weakKeyStat"),
  lessonList: document.querySelector("#lessonList"),
  keyboard: document.querySelector("#keyboard"),
  gameArea: document.querySelector("#gameArea"),
  startGame: document.querySelector("#startGame")
};

let content;
let state;
let engine;
let games;
let currentLessonId = null;
let lessonBannerTimer = null;

async function main() {
  content = await window.TypingGim.loadContent();

  // Load Resources
  state = window.TypingGim.loadState();
  engine = new window.TypingGim.TypingEngine({ content, state });
  games = new window.TypingGim.GamesEngine({ area: els.gameArea, content, engine });

  // Initialize app
  renderLayoutOptions();
  bindEvents();
  engine.startCurrentStep();
  els.typingInput.focus();
}

function bindEvents() {
  engine.addEventListener("change", render);
  engine.addEventListener("lessoncomplete", maybeStartGame);

  els.typingInput.addEventListener("keydown", (event) => {
    if (games?.isRunning()) {
      event.preventDefault();
      els.typingInput.value = "";
      return;
    }
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "Backspace") {
      event.preventDefault();
      return;
    }
    if (event.key.length === 1 || event.key === " ") {
      event.preventDefault();
      engine.handleCharacter(event.key);
      els.typingInput.value = "";
      recordMetricSnapshot();
      window.TypingGim.saveState(state);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (handleLessonArrowNavigation(event)) return;

    window.TypingGim.setKeyboardState(els.keyboard, {
      target: engine.getTargetKey(),
      pressed: event.key === " " ? "space" : event.key,
      mistake: engine.lastMistake
    });
  });

  window.addEventListener("keyup", () => {
    window.TypingGim.setKeyboardState(els.keyboard, { target: engine.getTargetKey(), pressed: null, mistake: engine.lastMistake });
  });

  els.prevLesson.addEventListener("click", () => {
    goToPreviousLesson();
  });
  els.nextLesson.addEventListener("click", () => {
    goToNextLesson();
  });
  els.repeatLesson.addEventListener("click", () => {
    repeatCurrentExercise();
  });
  els.layoutSelect.addEventListener("change", () => {
    engine.setLayout(els.layoutSelect.value);
    window.TypingGim.saveState(state);
  });
  els.resetProgress.addEventListener("click", () => {
    state = window.TypingGim.resetState();
    engine.state = state;
    engine.startCurrentStep();
    window.TypingGim.saveState(state);
  });
  els.startGame.addEventListener("click", () => games.start());
}

function render() {
  window.TypingGim.renderKeyboard(els.keyboard, engine.layout);
  window.TypingGim.setKeyboardState(els.keyboard, { target: engine.getTargetKey(), pressed: null, mistake: engine.lastMistake });
  renderPrompt();
  renderLessonList();
  renderStats();

  els.layoutSelect.value = state.layoutId;
  els.lessonTitle.textContent = engine.exercise.title;
  els.phaseLabel.textContent = engine.exercise.phase || `Level ${engine.exercise.level}`;
  els.stepLabel.textContent = `Step ${state.stepIndex + 1} of ${engine.exercise.steps.length}`;
  els.adaptiveHint.textContent = engine.getAdaptiveHint();
  els.progressBar.style.width = `${Math.round(engine.getProgress() * 100)}%`;
  handleLessonChangeNotice();
}

function renderPrompt() {
  els.prompt.innerHTML = "";
  [...engine.prompt].forEach((char, index) => {
    const span = document.createElement("span");
    span.className = "prompt-char";
    if (index < engine.position) span.classList.add("done");
    if (index === engine.position) span.classList.add("current");
    if (index === engine.position && engine.lastMistake) span.classList.add("error");
    if (char === " ") {
      span.classList.add("space");
      span.setAttribute("aria-label", "space");
    } else {
      span.textContent = char;
    }
    els.prompt.appendChild(span);
  });
}

function renderStats() {
  const weakKey = Object.entries(state.keys)
    .filter(([, stats]) => stats.attempts >= 3)
    .sort(([, a], [, b]) => (b.errors / b.attempts) - (a.errors / a.attempts))[0]?.[0] || "-";

  const accuracy = Math.round(window.TypingGim.getAccuracy(state) * 100);
  const wpm = window.TypingGim.getWpm(state);
  const cpm = window.TypingGim.getCpm(state);

  els.accuracyStat.textContent = `${accuracy}%`;
  els.wpmStat.textContent = String(wpm);
  els.cpmStat.textContent = String(cpm);
  els.weakKeyStat.textContent = weakKey;

  renderHistory(els.accuracyHistory, getHistoryValues("accuracy"), { max: 100, suffix: "%" });
  renderHistory(els.wpmHistory, getHistoryValues("wpm"), { max: null, suffix: " WPM" });
  renderHistory(els.cpmHistory, getHistoryValues("cpm"), { max: null, suffix: " CPM" });
}

function recordMetricSnapshot() {
  state.history ||= { metrics: [] };
  state.history.metrics ||= [];
  const attempts = state.totals.attempts;
  const previous = state.history.metrics.at(-1);

  if (attempts < 3) return;
  if (previous && attempts - previous.attempts < 5) return;

  state.history.metrics.push({
    attempts,
    accuracy: Math.round(window.TypingGim.getAccuracy(state) * 100),
    wpm: window.TypingGim.getWpm(state),
    cpm: window.TypingGim.getCpm(state),
    at: Date.now()
  });

  if (state.history.metrics.length > 36) {
    state.history.metrics = state.history.metrics.slice(-36);
  }
}

function getHistoryValues(key) {
  const history = state.history?.metrics || [];
  const values = history.map((entry) => entry[key]).filter((value) => Number.isFinite(value));
  if (values.length) return values;

  if (key === "accuracy") return [Math.round(window.TypingGim.getAccuracy(state) * 100)];
  if (key === "wpm") return [window.TypingGim.getWpm(state)];
  if (key === "cpm") return [window.TypingGim.getCpm(state)];
  return [];
}

function renderHistory(container, values, options) {
  if (!container) return;
  container.innerHTML = "";
  const barCount = 18;
  const visibleValues = values.slice(-barCount);
  const max = options.max || Math.max(1, ...visibleValues);
  const chartHeight = 24;
  const paddedValues = visibleValues.length
    ? Array.from({ length: barCount }, (_, index) => visibleValues[Math.max(0, visibleValues.length - barCount + index)] ?? visibleValues[0])
    : [];

  paddedValues.forEach((value, index) => {
    const bar = document.createElement("span");
    const height = Math.max(4, Math.min(chartHeight, Math.round((value / max) * chartHeight)));
    bar.className = "stat-history-bar";
    bar.style.height = `${height}px`;
    bar.title = `${value}${options.suffix}`;
    if (index < barCount - visibleValues.length) {
      bar.classList.add("estimated");
    }
    container.appendChild(bar);
  });
}

function renderLessonList() {
  els.lessonList.innerHTML = "";
  window.TypingGimContent.exercises.forEach((exercise, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.classList.toggle("active", index === state.lessonIndex);
    button.innerHTML = `<span class="done-mark">${state.completedLessons.includes(exercise.id) ? "✓" : index + 1}</span><span>${exercise.title}</span>`;
    button.addEventListener("click", () => {
      engine.goToLesson(index);
      window.TypingGim.saveState(state);
    });
    item.appendChild(button);
    els.lessonList.appendChild(item);
  });
  scrollCurrentLessonIntoView();
}

function handleLessonArrowNavigation(event) {
  if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return false;
  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return false;
  if (games?.isRunning()) return false;
  if (event.target?.matches?.("select, button")) return false;

  event.preventDefault();
  if (event.key === "ArrowLeft") {
    goToPreviousLesson();
  } else if (event.key === "ArrowRight") {
    goToNextLesson();
  } else {
    repeatCurrentExercise();
  }
  return true;
}

function goToPreviousLesson() {
  engine.previousLesson();
  window.TypingGim.saveState(state);
  els.typingInput.focus();
}

function goToNextLesson() {
  engine.nextLesson();
  window.TypingGim.saveState(state);
  els.typingInput.focus();
}

function repeatCurrentExercise() {
  engine.repeatLesson();
  window.TypingGim.saveState(state);
  showLessonBanner(`Exercise restarted: ${engine.exercise.title}`);
  els.typingInput.focus();
}

function handleLessonChangeNotice() {
  const lesson = engine.exercise;
  if (!lesson) return;

  if (currentLessonId === null) {
    currentLessonId = lesson.id;
    return;
  }

  if (currentLessonId === lesson.id) return;
  currentLessonId = lesson.id;
  showLessonBanner(`Exercise changed: ${lesson.title}`);
}

function showLessonBanner(message) {
  if (!els.lessonBanner) return;
  clearTimeout(lessonBannerTimer);
  els.lessonBanner.textContent = message;
  els.lessonBanner.classList.add("visible");
  els.lessonBanner.setAttribute("aria-hidden", "false");
  lessonBannerTimer = setTimeout(() => {
    els.lessonBanner.classList.remove("visible");
    els.lessonBanner.setAttribute("aria-hidden", "true");
  }, 2600);
}

function scrollCurrentLessonIntoView() {
  const activeButton = els.lessonList.querySelector("button.active");
  if (!activeButton) return;
  activeButton.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function renderLayoutOptions() {
  els.layoutSelect.innerHTML = "";
  window.TypingGimContent.layouts.forEach((layout) => {
    const option = document.createElement("option");
    option.value = layout.id;
    option.textContent = layout.name;
    els.layoutSelect.appendChild(option);
  });
}

function maybeStartGame() {
  const every = window.TypingGimContent.profiles.gameEveryCompletedLessons || 2;
  if (state.completedLessons.length && state.completedLessons.length % every === 0) {
    games.showReadyMessage?.("Mini game ready. Press Start when you want to play.");
  }
}

main();
