window.TypingGimContent.exercises.push({
  "id": "0031-whole-alphabet-same-finger-patterns",
  "title": "Whole Alphabet - Same-Finger Patterns",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Control difficult patterns that use the same finger twice.",
  "instructions": "These combinations are intentionally awkward. Slow down, return to home position, and keep the finger movement precise.",
  "keys": ["r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m", "e", "d", "c", "i", "k", ",", "w", "s", "x", "o", "l", ".", "q", "a", "z", "p", ";", "/"],
  "layoutKeyOverrides": { "it": ["r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m", "e", "d", "c", "i", "k", ",", "w", "s", "x", "o", "l", ".", "q", "a", "z", "p", "ò", "-"] },
  "steps": [
    { "generator": "alternate", "keys": ["r", "t", "f", "g", "v", "b"], "pattern": "forward", "groups": 12 },
    { "generator": "alternate", "keys": ["y", "u", "h", "j", "n", "m"], "pattern": "forward", "groups": 12 },
    { "generator": "alternate", "keys": ["e", "d", "c", "i", "k", ","], "pattern": "forward", "groups": 12 },
    { "generator": "random-pairs", "groups": 18 },
    { "generator": "weak-key-boost", "groups": 18 }
  ]
});
