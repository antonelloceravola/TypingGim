const STORAGE_KEY = "typinggim.state.v1";

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefaultState());
  } catch {
    return createDefaultState();
  }
}
window.TypingGim.loadState = loadState;

 function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
window.TypingGim.saveState = saveState;

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return createDefaultState();
}
window.TypingGim.resetState = resetState;

function createDefaultState() {
  return {
    layoutId: "us",
    lessonIndex: 0,
    stepIndex: 0,
    completedLessons: [],
    totals: {
      attempts: 0,
      errors: 0,
      correct: 0,
      startedAt: Date.now(),
      practiceMs: 0,
      speedCorrect: 0
    },
    history: {
      metrics: []
    },
    keys: {},
    exercises: {},
    lastPracticeDate: null,
    streak: 0
  };
}

function normalizeState(state) {
  const defaultState = createDefaultState();
  state.layoutId ||= defaultState.layoutId;
  state.lessonIndex = Number.isFinite(state.lessonIndex) ? state.lessonIndex : defaultState.lessonIndex;
  state.stepIndex = Number.isFinite(state.stepIndex) ? state.stepIndex : defaultState.stepIndex;
  state.completedLessons ||= [];
  state.totals ||= {};
  state.totals.attempts = Number.isFinite(state.totals.attempts) ? state.totals.attempts : 0;
  state.totals.errors = Number.isFinite(state.totals.errors) ? state.totals.errors : 0;
  state.totals.correct = Number.isFinite(state.totals.correct) ? state.totals.correct : 0;
  state.totals.startedAt ||= Date.now();
  state.totals.practiceMs = Number.isFinite(state.totals.practiceMs) ? state.totals.practiceMs : 0;
  state.totals.speedCorrect = Number.isFinite(state.totals.speedCorrect) ? state.totals.speedCorrect : 0;
  state.history ||= defaultState.history;
  state.history.metrics ||= [];
  state.keys ||= {};
  state.exercises ||= {};
  state.lastPracticeDate ??= null;
  state.streak = Number.isFinite(state.streak) ? state.streak : 0;
  return state;
}
