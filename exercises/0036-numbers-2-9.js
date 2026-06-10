window.TypingGimContent.exercises.push({
  "id": "0036-numbers-2-9",
  "title": "Numbers - 2 and 9",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Add ring-finger number-row reaches.",
  "instructions": "Reach for 2 and 9, then return to S and L. Keep the movement small and accurate.",
  "keys": ["2", "9", "1", "0", "s", "l", "a", ";"],
  "layoutKeyOverrides": { "it": ["2", "9", "1", "0", "s", "l", "a", "ò"] },
  "steps": [
    { "generator": "repeat", "keys": ["2", "9"], "groups": 8 },
    { "generator": "alternate", "keys": ["2", "9"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["2", "9", "1", "0"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
