window.TypingGimContent.exercises.push({
  "id": "0046-punctuation-hyphen-underscore",
  "title": "Punctuation - - and _",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice hyphen and underscore.",
  "instructions": "Type hyphen directly and underscore with Shift. Keep your right pinky controlled and return to home row.",
  "keys": ["-", "_", "0", "p", ";", "l", "a", "s", "d", "f"],
  "layoutKeyOverrides": { "it": ["-", "_", "0", "p", "ò", "l", "a", "s", "d", "f"] },
  "steps": [
    { "generator": "repeat", "keys": ["-", "_"], "groups": 8 },
    { "generator": "alternate", "keys": ["-", "_"], "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
