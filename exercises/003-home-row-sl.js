window.TypingGimContent.exercises.push({
  "id": "003-home-row-sl",
  "title": "Home Row - S and L",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "keys": ["s", "l", "d", "k", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["s", "l"], "groups": 8 },
    { "generator": "alternate", "keys": ["s", "l"], "pattern": "same-first", "groups": 8 },
    { "generator": "alternate", "keys": ["s", "l"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["s", "l", "d", "k"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
