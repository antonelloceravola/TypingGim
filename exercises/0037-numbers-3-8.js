window.TypingGimContent.exercises.push({
  "id": "0037-numbers-3-8",
  "title": "Numbers - 3 and 8",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Add middle-finger number-row reaches.",
  "instructions": "Reach for 3 and 8 from the home row. Watch the virtual keyboard and avoid looking down.",
  "keys": ["3", "8", "2", "9", "d", "k", "s", "l"],
  "steps": [
    { "generator": "repeat", "keys": ["3", "8"], "groups": 8 },
    { "generator": "alternate", "keys": ["3", "8"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["3", "8", "2", "9"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
