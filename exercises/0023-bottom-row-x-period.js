window.TypingGimContent.exercises.push({
  "id": "0023-bottom-row-x-period",
  "title": "Bottom Row - X and .",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Add ring-finger bottom-row reaches.",
  "instructions": "Reach down for X and period. Keep the motion light and use the virtual keyboard to confirm the target.",
  "keys": ["x", ".", "c", ",", "v", "m", "s", "l", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["x", "."], "groups": 8 },
    { "generator": "alternate", "keys": ["x", "."], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["x", ".", "c", ","], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
