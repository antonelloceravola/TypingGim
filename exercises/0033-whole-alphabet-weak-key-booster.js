window.TypingGimContent.exercises.push({
  "id": "0033-whole-alphabet-weak-key-booster",
  "title": "Whole Alphabet - Weak Key Booster",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Spend extra time on the keys that are currently causing trouble.",
  "instructions": "The exercise uses your local statistics to repeat weak or slow keys more often. Stay patient and type each target cleanly.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-"] },
  "steps": [
    { "generator": "weak-key-boost", "groups": 16 },
    { "generator": "weak-key-boost", "groups": 20 },
    { "generator": "random-pairs", "groups": 18 }
  ]
});
