const STORAGE_KEY = "typinggim.state.v1";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefaultState();
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
      practiceMs: 0
    },
    keys: {},
    exercises: {},
    lastPracticeDate: null,
    streak: 0
  };
}
