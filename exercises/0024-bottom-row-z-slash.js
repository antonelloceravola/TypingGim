window.TypingGimContent.exercises.push({
  "id": "0024-bottom-row-z-slash",
  "title": "Bottom Row - Z and /",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Add the outer bottom-row keys.",
  "instructions": "Use your pinkies for Z and the right outer bottom key. On Italian layout this lesson uses Z and hyphen.",
  "keys": ["z", "/", "x", ".", "a", ";", "s", "l"],
  "layoutKeyOverrides": { "it": ["z", "-", "x", ".", "a", "ò", "s", "l"] },
  "steps": [
    { "generator": "repeat", "keys": ["z", "/"], "layoutKeyOverrides": { "it": ["z", "-"] }, "groups": 8 },
    { "generator": "alternate", "keys": ["z", "/"], "layoutKeyOverrides": { "it": ["z", "-"] }, "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["z", "/", "x", "."], "layoutKeyOverrides": { "it": ["z", "-", "x", "."] }, "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
