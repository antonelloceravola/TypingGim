const els = {
  layoutSelect: document.querySelector("#layoutSelect"),
  practiceFocus: document.querySelector("#practiceFocus"),
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

const PRACTICE_FOCUS_KEY = "typinggim.practiceFocus";
const KEYBOARD_LAYOUT_KEY = "typinggim.keyboardLayout";

let content;
let state;
let engine;
let games;
let currentLessonId = null;
let lessonIntroActive = false;
let lastPreviewKey = null;
let previewTimers = [];
let practiceFocusActive = localStorage.getItem(PRACTICE_FOCUS_KEY) === "true";
let typingInputContext = null;

async function main() {
  content = await window.TypingGim.loadContent();

  // Load Resources
  state = window.TypingGim.loadState();
  state.layoutId = getSavedLayoutId(state.layoutId);
  saveLayoutId(state.layoutId);
  engine = new window.TypingGim.TypingEngine({ content, state });
  games = new window.TypingGim.GamesEngine({ area: els.gameArea, content, engine });

  // Initialize app
  applyPracticeFocus();
  renderLayoutOptions();
  bindEvents();
  engine.startCurrentStep();
  els.typingInput.focus();
}

function bindEvents() {
  engine.addEventListener("change", render);
  engine.addEventListener("lessoncomplete", maybeStartGame);

  els.typingInput.addEventListener("keydown", (event) => {
    if (lessonIntroActive) {
      return;
    }

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
      clearStepPreview();
      const contextBefore = getTypingInputContext();
      els.typingInput.value = formatTypedInput(event.key);
      engine.handleCharacter(event.key);
      const contextAfter = getTypingInputContext();
      typingInputContext = contextAfter;
      els.typingInput.classList.toggle("typed-mistake", Boolean(engine.lastMistake));
      if (contextAfter !== contextBefore || (engine.position === 0 && !engine.lastMistake)) {
        clearTypingInput(contextAfter);
      }
      recordMetricSnapshot();
      window.TypingGim.saveState(state);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (lessonIntroActive) {
      return;
    }

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
    saveLayoutId(state.layoutId);
    window.TypingGim.saveState(state);
  });
  els.practiceFocus.addEventListener("click", () => {
    setPracticeFocus(!practiceFocusActive);
  });
  els.resetProgress.addEventListener("click", () => {
    state = window.TypingGim.resetState();
    state.layoutId = getSavedLayoutId(state.layoutId);
    engine.state = state;
    engine.startCurrentStep();
    window.TypingGim.saveState(state);
  });
  els.startGame.addEventListener("click", () => games.start());
  els.lessonBanner.addEventListener("click", (event) => {
    if (event.target.closest("[data-start-exercise]")) {
      dismissLessonIntro();
    }
  });
}

function setPracticeFocus(active) {
  practiceFocusActive = active;
  localStorage.setItem(PRACTICE_FOCUS_KEY, String(active));
  applyPracticeFocus();
  els.typingInput.focus();
}

function applyPracticeFocus() {
  document.body.classList.toggle("practice-focus", practiceFocusActive);
  els.practiceFocus.setAttribute("aria-pressed", String(practiceFocusActive));
  els.practiceFocus.textContent = practiceFocusActive ? "Full" : "Focus";
  els.practiceFocus.title = practiceFocusActive ? "Show full layout" : "Show focused practice layout";
  els.practiceFocus.setAttribute("aria-label", els.practiceFocus.title);
}

function getSavedLayoutId(fallbackId) {
  const savedLayoutId = localStorage.getItem(KEYBOARD_LAYOUT_KEY);
  if (content.layoutsById[savedLayoutId]) return savedLayoutId;
  if (content.layoutsById[fallbackId]) return fallbackId;
  return content.layouts[0]?.id || "us";
}

function saveLayoutId(layoutId) {
  if (content.layoutsById[layoutId]) {
    localStorage.setItem(KEYBOARD_LAYOUT_KEY, layoutId);
  }
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
  clearTypingInputOnContextChange();
  handleLessonChangeNotice();
  handleStepPreview();
}

function getTypingInputContext() {
  return `${engine.exercise.id}:${state.stepIndex}:${engine.sentenceDrill?.sentenceIndex || 0}`;
}

function clearTypingInputOnContextChange() {
  const context = getTypingInputContext();
  if (typingInputContext === context) return;
  clearTypingInput(context);
}

function clearTypingInput(context = getTypingInputContext()) {
  typingInputContext = context;
  els.typingInput.value = "";
  els.typingInput.classList.remove("typed-mistake");
}

function formatTypedInput(key) {
  return key === " " ? "Space" : key;
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
  content.exercises.forEach((exercise, index) => {
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
  showLessonIntro(engine.exercise, "Exercise restarted");
  els.typingInput.focus();
}

function showLessonBanner() {
  const lesson = engine.exercise;
  if (!lesson) return;
  showLessonIntro(lesson, "New exercise");
}

function handleLessonChangeNotice() {
  const lesson = engine.exercise;
  if (!lesson) return;

  if (currentLessonId === null) {
    currentLessonId = lesson.id;
    showLessonIntro(lesson, "New exercise");
    return;
  }

  if (currentLessonId === lesson.id) return;
  currentLessonId = lesson.id;
  showLessonIntro(lesson, "Exercise changed");
}

function showLessonIntro(lesson, label = "Exercise") {
  if (!els.lessonBanner) return;
  clearStepPreview();
  lessonIntroActive = true;
  lastPreviewKey = null;
  els.lessonBanner.innerHTML = `
    <p class="lesson-banner-label">${label}</p>
    <h3>${escapeHtml(lesson.title)}</h3>
    ${lesson.goal ? `<p><strong>Goal:</strong> ${escapeHtml(lesson.goal)}</p>` : ""}
    ${lesson.instructions ? `<p><strong>Instructions:</strong> ${escapeHtml(lesson.instructions)}</p>` : ""}
    <button type="button" data-start-exercise>Press SPACE to start</button>
  `;
  els.lessonBanner.classList.add("visible");
  els.lessonBanner.setAttribute("aria-hidden", "false");

  // Delay key capture to avoid last key capturing
  setTimeout( registerLessonIntroKey, 1000 );
}

function registerLessonIntroKey() {
  window.addEventListener("keydown", (event) => {
    const isSpace = event.key === " " ||
                    event.key === "Space" ||
                    event.key === "Spacebar";

    if (lessonIntroActive && isSpace) {
      window.removeEventListener("keydown", registerLessonIntroKey);
      event.preventDefault();
      event.stopPropagation();
      dismissLessonIntro();
      return;
    }
  });
}

function dismissLessonIntro() {
  if (!lessonIntroActive) return;
  lessonIntroActive = false;
  els.lessonBanner.classList.remove("visible");
  els.lessonBanner.setAttribute("aria-hidden", "true");
  els.typingInput.focus();
  handleStepPreview(true);
}

function scrollCurrentLessonIntoView() {
  const activeButton = els.lessonList.querySelector("button.active");
  if (!activeButton) return;
  activeButton.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function handleStepPreview(force = false) {
  if (lessonIntroActive) return;
  const previewKey = `${engine.exercise.id}:${state.stepIndex}:${engine.prompt}`;
  if (!force && lastPreviewKey === previewKey) return;
  lastPreviewKey = previewKey;
  clearStepPreview();

  if (!engine.step.previewKeyboard) return;
  const keys = [...engine.prompt].filter((key) => key !== " ").slice(0, 36);
  keys.forEach((key, index) => {
    previewTimers.push(setTimeout(() => {
      window.TypingGim.setKeyboardState(els.keyboard, {
        target: engine.getTargetKey(),
        pressed: key,
        mistake: null
      });
    }, index * 170));
  });

  previewTimers.push(setTimeout(() => {
    window.TypingGim.setKeyboardState(els.keyboard, {
      target: engine.getTargetKey(),
      pressed: null,
      mistake: engine.lastMistake
    });
  }, keys.length * 170 + 220));
}

function clearStepPreview() {
  previewTimers.forEach((timer) => clearTimeout(timer));
  previewTimers = [];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLayoutOptions() {
  els.layoutSelect.innerHTML = "";
  content.layouts.forEach((layout) => {
    const option = document.createElement("option");
    option.value = layout.id;
    option.textContent = layout.name;
    els.layoutSelect.appendChild(option);
  });
}

function maybeStartGame() {
  const every = content.profile?.gameEveryCompletedLessons || 2;
  if (state.completedLessons.length && state.completedLessons.length % every === 0) {
    games.showReadyMessage?.("Mini game ready. Press Start when you want to play.");
  }
}

main();
