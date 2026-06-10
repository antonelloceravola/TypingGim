window.TypingGimContent.exercises.push({
  "id": "0007-home-row-fj",
  "title": "Home Row - F and J",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "goal": "Place both index fingers on the anchor keys.",
  "instructions": "Type F and J while keeping your eyes on the virtual keyboard. Let the highlighted key guide each finger.",
  "keys": ["f", "j"],
  "steps": [
    { "generator": "repeat" },
    { "generator": "alternate", "pattern": "same-first", "groups": 8 },
    { "generator": "alternate", "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "pattern": "mirror", "groups": 10 },
    { "generator": "random-pairs" }
  ]
});
