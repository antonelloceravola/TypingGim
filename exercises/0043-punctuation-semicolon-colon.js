window.TypingGimContent.exercises.push({
  "id": "0043-punctuation-semicolon-colon",
  "title": "Punctuation - ; and :",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice semicolon and colon control.",
  "instructions": "Type semicolon directly and colon with Shift. Watch the virtual keyboard for the physical key position.",
  "keys": [";", ":", "l", "k", "j", "a", "s", "d", "f"],
  "layoutKeyOverrides": { "it": ["ò", ":", "l", "k", "j", "a", "s", "d", "f"] },
  "steps": [
    { "generator": "repeat", "keys": [";", ":"], "layoutKeyOverrides": { "it": ["ò", ":"] }, "groups": 8 },
    { "generator": "alternate", "keys": [";", ":"], "layoutKeyOverrides": { "it": ["ò", ":"] }, "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
