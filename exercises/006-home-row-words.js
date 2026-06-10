window.TypingGimContent.exercises.push({
  "id": "006-home-row-words",
  "title": "Home Row Words",
  "phase": "Phase 2 - Home Row Words",
  "level": 2,
  "keys": ["a", "s", "d", "f", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["a", "s", "d", "f", "j", "k", "l", "ò"] },
  "words": {
    "en": ["sad", "lad", "fall", "ask", "flag", "salad", "all", "flask"],
    "it": ["sala", "alla", "falla", "salda", "falsi", "dalla"]
  },
  "steps": [
    { "generator": "word-mixer", "wordsPerRound": 6 },
    { "generator": "word-mixer", "wordsPerRound": 10 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
