window.TypingGimContent.exercises.push({
  "id": "0011-complete-home-row",
  "title": "Complete Home Row",
  "phase": "Phase 1 - Home Row",
  "level": 1,
  "goal": "Build rhythm across the full home row.",
  "instructions": "Type mixed home-row patterns. Prioritize accuracy and smooth finger movement over speed.",
  "keys": ["a", "s", "d", "f", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["a", "s", "d", "f", "j", "k", "l", "ò"] },
  "steps": [
    { "generator": "alternate", "pattern": "forward", "groups": 12 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 16 },
    { "generator": "random-pairs", "groups": 18 }
  ]
});
