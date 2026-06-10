window.TypingGimContent.exercises.push({
  "id": "0057-mastery-slow-keys",
  "title": "Mastery - Slow Keys",
  "phase": "Phase 9 - Mastery Review",
  "level": 9,
  "goal": "Practice keys that take longer to find.",
  "instructions": "The adaptive engine treats slow reaction time as weakness. Type deliberately and let repeated exposure reduce hesitation.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] },
  "steps": [
    { "generator": "weak-key-boost", "groups": 20 },
    { "generator": "keyboard-sequence", "sequenceLength": 2, "count": 10, "previewKeyboard": true },
    { "generator": "weak-key-boost", "groups": 22 }
  ]
});
