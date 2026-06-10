window.TypingGimContent.exercises.push({
  "id": "0026-bottom-row-vm-c-comma",
  "title": "Bottom Row - V M C ,",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Start reaching from home row to the bottom row.",
  "instructions": "Reach down for V, M, C, and comma. Keep the movement small and return to home row after each key.",
  "keys": ["v", "m", "c", ",", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["v", "m"], "groups": 8 },
    { "generator": "alternate", "keys": ["v", "m"], "pattern": "forward", "groups": 10 },
    { "generator": "repeat", "keys": ["c", ","], "groups": 8 },
    { "generator": "alternate", "keys": ["c", ","], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["v", "m", "c", ","], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
