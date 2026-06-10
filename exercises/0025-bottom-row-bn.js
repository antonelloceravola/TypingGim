window.TypingGimContent.exercises.push({
  "id": "0025-bottom-row-bn",
  "title": "Bottom Row - B and N",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Practice the central bottom-row reaches.",
  "instructions": "Reach for B and N with the index fingers. These keys sit near the center, so move carefully and return home.",
  "keys": ["b", "n", "v", "m", "g", "h", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["b", "n"], "groups": 8 },
    { "generator": "alternate", "keys": ["b", "n"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["b", "n", "v", "m"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
