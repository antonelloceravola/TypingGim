window.TypingGimContent.exercises.push({
  "id": "0030-whole-alphabet-alternating-hands",
  "title": "Whole Alphabet - Alternating Hands",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Develop rhythm by alternating between left and right hands.",
  "instructions": "Type patterns that move from one hand to the other. Aim for a steady beat instead of rushing.",
  "keys": ["f", "j", "d", "k", "s", "l", "a", ";", "r", "u", "e", "i", "w", "o", "q", "p", "v", "m", "c", ",", "x", ".", "z", "/"],
  "layoutKeyOverrides": { "it": ["f", "j", "d", "k", "s", "l", "a", "ò", "r", "u", "e", "i", "w", "o", "q", "p", "v", "m", "c", ",", "x", ".", "z", "-"] },
  "steps": [
    { "generator": "alternate", "pattern": "forward", "groups": 16 },
    { "generator": "alternate", "pattern": "mirror", "groups": 18 },
    { "generator": "random-pairs", "groups": 18 },
    { "generator": "weak-key-boost", "groups": 16 }
  ]
});
