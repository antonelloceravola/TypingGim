window.TypingGimContent.exercises.push({
  "id": "0026-bottom-row-home-row",
  "title": "Bottom Row + Home Row",
  "phase": "Phase 4 - Bottom Row",
  "level": 4,
  "goal": "Combine bottom-row reaches with home-row control.",
  "instructions": "Mix bottom-row and home-row keys. Focus on returning to home position after every reach.",
  "keys": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò"] },
  "steps": [
    { "generator": "alternate", "pattern": "forward", "groups": 12 },
    { "generator": "random-pairs", "groups": 16 },
    { "generator": "weak-key-boost", "groups": 16 },
    { "generator": "random-pairs", "groups": 18 }
  ]
});
