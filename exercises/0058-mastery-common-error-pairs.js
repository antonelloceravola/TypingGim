window.TypingGimContent.exercises.push({
  "id": "0058-mastery-common-error-pairs",
  "title": "Mastery - Common Error Pairs",
  "phase": "Phase 9 - Mastery Review",
  "level": 9,
  "goal": "Practice pairs that commonly cause slips.",
  "instructions": "These pairs mix neighboring keys, same-finger reaches, and cross-row changes. Slow down when two movements feel similar.",
  "keys": ["r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m", "e", "i", "d", "k", "c", ",", "w", "o", "s", "l", "x", ".", "q", "p", "a", ";", "z", "/"],
  "layoutKeyOverrides": { "it": ["r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m", "e", "i", "d", "k", "c", ",", "w", "o", "s", "l", "x", ".", "q", "p", "a", "ò", "z", "-"] },
  "steps": [
    { "generator": "alternate", "keys": ["r", "t", "f", "g", "v", "b"], "pattern": "forward", "groups": 14 },
    { "generator": "alternate", "keys": ["y", "u", "h", "j", "n", "m"], "pattern": "forward", "groups": 14 },
    { "generator": "alternate", "keys": ["e", "i", "d", "k", "c", ","], "pattern": "mirror", "groups": 14 },
    { "generator": "random-pairs", "groups": 20 },
    { "generator": "weak-key-boost", "groups": 20 }
  ]
});
