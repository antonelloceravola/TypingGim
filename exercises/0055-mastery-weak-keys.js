window.TypingGimContent.exercises.push({
  "id": "0055-mastery-weak-keys",
  "title": "Mastery - Weak Keys",
  "phase": "Phase 9 - Mastery Review",
  "level": 9,
  "goal": "Focus practice on keys with higher error rates.",
  "instructions": "This adaptive review boosts keys that your local stats mark as weak. Type patiently and let the weak spots become visible.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] },
  "steps": [
    { "generator": "weak-key-boost", "groups": 18 },
    { "generator": "weak-key-boost", "groups": 22 },
    { "generator": "random-pairs", "groups": 20 }
  ]
});
