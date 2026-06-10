window.TypingGimContent.exercises.push({
  "id": "0038-numbers-4-7",
  "title": "Numbers - 4 and 7",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Add index-finger number-row reaches.",
  "instructions": "Reach up for 4 and 7. Return to F and J after each reach so the rest of the keyboard stays anchored.",
  "keys": ["4", "7", "3", "8", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["4", "7"], "groups": 8 },
    { "generator": "alternate", "keys": ["4", "7"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["4", "7", "3", "8"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 }
  ]
});
