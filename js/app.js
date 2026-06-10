const els = {
  layoutSelect: document.querySelector("#layoutSelect"),
  resetProgress: document.querySelector("#resetProgress"),
  prevLesson: document.querySelector("#prevLesson"),
  repeatLesson: document.querySelector("#repeatLesson"),
  nextLesson: document.querySelector("#nextLesson"),
  lessonTitle: document.querySelector("#lessonTitle"),
  phaseLabel: document.querySelector("#phaseLabel"),
  stepLabel: document.querySelector("#stepLabel"),
  adaptiveHint: document.querySelector("#adaptiveHint"),
  prompt: document.querySelector("#prompt"),
  typingInput: document.querySelector("#typingInput"),
  progressBar: document.querySelector("#progressBar"),
  accuracyStat: document.querySelector("#accuracyStat"),
  wpmStat: document.querySelector("#wpmStat"),
  cpmStat: document.querySelector("#cpmStat"),
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
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "Backspace") {
      event.preventDefault();
      return;
    }
    if (event.key.length === 1 || event.key === " ") {
      event.preventDefault();
      engine.handleCharacter(event.key);
      els.typingInput.value = "";
      window.TypingGim.saveState(state);
    }
  });

  window.addEventListener("keydown", (event) => {
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
    engine.previousLesson();
    window.TypingGim.saveState(state);
  });
  els.nextLesson.addEventListener("click", () => {
    engine.nextLesson();
    window.TypingGim.saveState(state);
  });
  els.repeatLesson.addEventListener("click", () => {
    engine.repeatLesson();
    window.TypingGim.saveState(state);
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

  els.accuracyStat.textContent = `${Math.round(window.TypingGim.getAccuracy(state) * 100)}%`;
  els.wpmStat.textContent = String(window.TypingGim.getWpm(state));
  els.cpmStat.textContent = String(window.TypingGim.getCpm(state));
  els.weakKeyStat.textContent = weakKey;
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
  const every = window.TypingGimContent.profile.gameEveryCompletedLessons || 2;
  if (state.completedLessons.length && state.completedLessons.length % every === 0) {
    games.start();
  }
}

main();