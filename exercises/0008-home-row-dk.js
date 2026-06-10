window.TypingGimContent.exercises.push({
  "id": "0008-home-row-dk",
  "title": "Home Row - D and K",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "goal": "Add the middle fingers to the home row.",
  "instructions": "Practice D and K, then combine them with F and J. Return your fingers to the home position after every reach.",
  "keys": ["d", "k", "f", "j"],
  "steps": [
    { "generator": "repeat", "keys": ["d", "k"], "groups": 8 },
    { "generator": "alternate", "keys": ["d", "k"], "pattern": "same-first", "groups": 8 },
    { "generator": "alternate", "keys": ["d", "k"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["d", "k", "f", "j"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
