window.TypingGimContent.exercises.push({
  "id": "0012-home-row-gh",
  "title": "Home Row - G and H",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "goal": "Add the ring fingers to the home row.",
  "instructions": "Type G and H patterns slowly. Watch the target highlight and keep your hands relaxed.",
  "keys": ["g", "h", "s", "l", "d", "k", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["g", "h"], "groups": 8 },
    { "generator": "alternate", "keys": ["g", "h"], "pattern": "same-first", "groups": 8 },
    { "generator": "alternate", "keys": ["g", "h"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["g", "h", "s", "l"], "pattern": "mirror", "groups": 12 },
    { "generator": "alternate", "keys": ["g", "h", "s", "l", "d", "k"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
