window.TypingGimContent.exercises.push({
  "id": "0039-numbers-5-6",
  "title": "Numbers - 5 and 6",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Practice the central number-row reaches.",
  "instructions": "Reach for 5 and 6 with your index fingers. These keys sit near the center, so move carefully and return home.",
  "keys": ["5", "6", "4", "7", "f", "j", "g", "h"],
  "steps": [
    { "generator": "repeat", "keys": ["5", "6"], "groups": 8 },
    { "generator": "alternate", "keys": ["5", "6"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["5", "6", "4", "7"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
