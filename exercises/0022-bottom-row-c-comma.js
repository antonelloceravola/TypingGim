window.TypingGimContent.exercises.push({
  "id": "0022-bottom-row-c-comma",
  "title": "Bottom Row - C and ,",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Add middle-finger bottom-row reaches.",
  "instructions": "Reach down for C and comma. Let your fingers return to D and K after each bottom-row key.",
  "keys": ["c", ",", "v", "m", "d", "k", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["c", ","], "groups": 8 },
    { "generator": "alternate", "keys": ["c", ","], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["c", ",", "v", "m"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
