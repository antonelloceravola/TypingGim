window.TypingGimContent.exercises.push({
  "id": "0032-whole-alphabet-review",
  "title": "Whole Alphabet Review",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Review all letters across the full keyboard.",
  "instructions": "Type mixed keys from every row. Keep your eyes on the screen, follow the highlight, and let accuracy lead.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-"] },
  "steps": [
    { "generator": "random-pairs", "groups": 20 },
    { "generator": "alternate", "pattern": "mirror", "groups": 20 },
    { "generator": "weak-key-boost", "groups": 20 },
    { "generator": "random-pairs", "groups": 24 }
  ]
});
