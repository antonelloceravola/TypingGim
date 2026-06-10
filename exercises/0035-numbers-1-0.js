window.TypingGimContent.exercises.push({
  "id": "0035-numbers-1-0",
  "title": "Numbers - 1 and 0",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Begin reaching to the number row without losing home position.",
  "instructions": "Reach for 1 with the left pinky and 0 with the right pinky. Return to home row after every number.",
  "keys": ["1", "0", "a", ";", "f", "j"],
  "layoutKeyOverrides": { "it": ["1", "0", "a", "ò", "f", "j"] },
  "steps": [
    { "generator": "repeat", "keys": ["1", "0"], "groups": 8 },
    { "generator": "alternate", "keys": ["1", "0"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["1", "0", "a", ";"], "layoutKeyOverrides": { "it": ["1", "0", "a", "ò"] }, "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
