window.TypingGimContent.exercises.push({
  "id": "0010-home-row-a-anchor",
  "title": "Home Row - A and Anchor",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "goal": "Complete the outer home-row anchors.",
  "instructions": "Use your pinkies for A and the right anchor key. Move lightly and return to home row.",
  "keys": ["a", ";", "s", "l", "d", "k", "f", "j"],
  "layoutKeyOverrides": { "it": ["a", "ò", "s", "l", "d", "k", "f", "j"] },
  "steps": [
    { "generator": "repeat", "keys": ["a", ";"], "layoutKeyOverrides": { "it": ["a", "ò"] }, "groups": 8 },
    { "generator": "alternate", "keys": ["a", ";"], "layoutKeyOverrides": { "it": ["a", "ò"] }, "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
