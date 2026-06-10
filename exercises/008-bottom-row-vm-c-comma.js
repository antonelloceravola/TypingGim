window.TypingGimContent.exercises.push({
  "id": "008-bottom-row-vm-c-comma",
  "title": "Bottom Row - V M C ,",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
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
