const MAX_ACTIVE_REACTION_MS = 5000;

function recordKey(state, payload) {
  const key = normalizeKey(payload.expected);
  if (!key) return;

  state.keys[key] ||= {
    attempts: 0,
    errors: 0,
    correct: 0,
    totalReactionMs: 0,
    slowHits: 0
  };

  const keyStats = state.keys[key];
  keyStats.attempts += 1;
  state.totals.attempts += 1;

  if (payload.correct) {
    keyStats.correct += 1;
    state.totals.correct += 1;
    state.totals.speedCorrect = (state.totals.speedCorrect || 0) + 1;
  } else {
    keyStats.errors += 1;
    state.totals.errors += 1;
  }

  if (Number.isFinite(payload.reactionMs)) {
    keyStats.totalReactionMs += payload.reactionMs;
    if (payload.reactionMs > 900) keyStats.slowHits += 1;
    state.totals.practiceMs = (state.totals.practiceMs || 0) + Math.min(Math.max(payload.reactionMs, 0), MAX_ACTIVE_REACTION_MS);
  }
}
window.TypingGim.recordKey = recordKey;

function recordExerciseResult(state, exerciseId, correct) {
  state.exercises[exerciseId] ||= { attempts: 0, errors: 0, completions: 0 };
  state.exercises[exerciseId].attempts += 1;
  if (!correct) state.exercises[exerciseId].errors += 1;
}
window.TypingGim.recordExerciseResult = recordExerciseResult;

function markLessonComplete(state, lessonId) {
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
  }
  updateStreak(state);
}
window.TypingGim.markLessonComplete = markLessonComplete;

function getAccuracy(state) {
  if (!state.totals.attempts) return 1;
  return state.totals.correct / state.totals.attempts;
}
window.TypingGim.getAccuracy = getAccuracy;

function getWpm(state) {
  const elapsedMinutes = getPracticeMinutes(state);
  if (!elapsedMinutes) return 0;
  return Math.round(((state.totals.speedCorrect || 0) / 5) / elapsedMinutes);
}
window.TypingGim.getWpm = getWpm;

function getCpm(state) {
  const elapsedMinutes = getPracticeMinutes(state);
  if (!elapsedMinutes) return 0;
  return Math.round((state.totals.speedCorrect || 0) / elapsedMinutes);
}
window.TypingGim.getCpm = getCpm;

function getPracticeMinutes(state) {
  const practiceMs = state.totals.practiceMs || 0;
  if (!practiceMs) return 0;
  return Math.max(practiceMs / 60000, 1 / 60);
}

function getKeySummary(state, key) {
  const stats = state.keys[normalizeKey(key)];
  if (!stats || !stats.attempts) return { accuracy: 1, avgReactionMs: 0, errorRate: 0 };
  return {
    accuracy: stats.correct / stats.attempts,
    avgReactionMs: stats.totalReactionMs / stats.attempts,
    errorRate: stats.errors / stats.attempts
  };
}
window.TypingGim.getKeySummary = getKeySummary;

function updateStreak(state) {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastPracticeDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastPracticeDate === yesterday ? state.streak + 1 : 1;
  state.lastPracticeDate = today;
}

function normalizeKey(key) {
  return key === " " ? "space" : key;
}
