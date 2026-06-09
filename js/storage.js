const STORAGE_KEY = "typinggim.state.v1";

export function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefaultState();
  } catch {
    return createDefaultState();
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return createDefaultState();
}

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
