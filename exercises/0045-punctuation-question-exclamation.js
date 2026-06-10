window.TypingGimContent.exercises.push({
  "id": "0045-punctuation-question-exclamation",
  "title": "Punctuation - ? and !",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice question and exclamation marks.",
  "instructions": "Use Shift for both marks. Notice how the highlighted physical key helps you locate the symbol.",
  "keys": ["?", "!", "/", "1", "a", "s", "d", "f", "j", "k", "l"],
  "layoutKeyOverrides": { "it": ["?", "!", "-", "1", "a", "s", "d", "f", "j", "k", "l"] },
  "steps": [
    { "generator": "repeat", "keys": ["?", "!"], "groups": 8 },
    { "generator": "alternate", "keys": ["?", "!"], "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
