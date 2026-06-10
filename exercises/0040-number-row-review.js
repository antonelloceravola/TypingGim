window.TypingGimContent.exercises.push({
  "id": "0040-number-row-review",
  "title": "Number Row Review",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Review all number-row reaches.",
  "instructions": "Type mixed numbers from the whole number row. Keep your hands anchored and return to home row after each reach.",
  "keys": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "s", "d", "f", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "s", "d", "f", "j", "k", "l", "ò"] },
  "steps": [
    { "generator": "random-pairs", "keys": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], "groups": 18 },
    { "generator": "alternate", "pattern": "mirror", "groups": 18 },
    { "generator": "weak-key-boost", "groups": 20 },
    { "generator": "random-pairs", "groups": 22 }
  ]
});
