window.TypingGimContent.exercises.push({
  "id": "007-top-row-ru-ei",
  "title": "Top Row - R U E I",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "keys": ["r", "u", "e", "i", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["r", "u"], "groups": 8 },
    { "generator": "alternate", "keys": ["r", "u"], "pattern": "forward", "groups": 10 },
    { "generator": "repeat", "keys": ["e", "i"], "groups": 8 },
    { "generator": "alternate", "keys": ["e", "i"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["r", "u", "e", "i"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
