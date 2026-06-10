window.TypingGimContent.exercises.push({
  "id": "0044-punctuation-quotes",
  "title": "Punctuation - ' and \"",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice apostrophes and quotation marks.",
  "instructions": "Type apostrophe directly and quotation mark with Shift. Keep the sentence rhythm steady around punctuation.",
  "keys": ["'", "\"", ";", "l", "k", "j", "a", "s", "d", "f"],
  "layoutKeyOverrides": { "it": ["'", "\"", "ò", "l", "k", "j", "a", "s", "d", "f"] },
  "steps": [
    { "generator": "repeat", "keys": ["'", "\""], "groups": 8 },
    { "generator": "alternate", "keys": ["'", "\""], "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
