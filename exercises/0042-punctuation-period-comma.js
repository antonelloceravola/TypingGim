window.TypingGimContent.exercises.push({
  "id": "0042-punctuation-period-comma",
  "title": "Punctuation - . and ,",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice the most common sentence punctuation keys.",
  "instructions": "Use the right-hand fingers for period and comma. Keep the punctuation light and return to home row.",
  "keys": [".", ",", "m", "k", "l", "a", "s", "d", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": [".", ","], "groups": 8 },
    { "generator": "alternate", "keys": [".", ","], "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
