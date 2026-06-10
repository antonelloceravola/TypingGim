window.TypingGimContent.exercises.push({
  "id": "004-home-row-a-anchor",
  "title": "Home Row - A and Anchor",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "keys": ["a", ";", "s", "l", "d", "k", "f", "j"],
  "layoutKeyOverrides": { "it": ["a", "ò", "s", "l", "d", "k", "f", "j"] },
  "steps": [
    { "generator": "repeat", "keys": ["a", ";"], "layoutKeyOverrides": { "it": ["a", "ò"] }, "groups": 8 },
    { "generator": "alternate", "keys": ["a", ";"], "layoutKeyOverrides": { "it": ["a", "ò"] }, "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
