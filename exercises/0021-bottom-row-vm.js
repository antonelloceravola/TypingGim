window.TypingGimContent.exercises.push({
  "id": "0021-bottom-row-vm",
  "title": "Bottom Row - V and M",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Start reaching down to the bottom row with the index fingers.",
  "instructions": "Reach down for V and M, then return to the home row. Keep the movement small and watch the highlighted key.",
  "keys": ["v", "m", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["v", "m"], "groups": 8 },
    { "generator": "alternate", "keys": ["v", "m"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["v", "m", "f", "j"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
