window.TypingGimContent.exercises.push({
  "id": "002-home-row-dk",
  "title": "Home Row - D and K",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "keys": ["d", "k", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["d", "k"], "groups": 8 },
    { "generator": "alternate", "keys": ["d", "k"], "pattern": "same-first", "groups": 8 },
    { "generator": "alternate", "keys": ["d", "k"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["d", "k", "f", "j"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
