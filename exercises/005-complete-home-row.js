window.TypingGimContent.exercises.push({
  "id": "005-complete-home-row",
  "title": "Complete Home Row",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "keys": ["a", "s", "d", "f", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["a", "s", "d", "f", "j", "k", "l", "ò"] },
  "steps": [
    { "generator": "alternate", "pattern": "forward", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 16 },
    { "generator": "random-pairs", "groups": 18 }
  ]
});
