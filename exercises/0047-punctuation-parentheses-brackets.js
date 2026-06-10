window.TypingGimContent.exercises.push({
  "id": "0047-punctuation-parentheses-brackets",
  "title": "Punctuation - Parentheses and Brackets",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Practice paired punctuation used in real writing.",
  "instructions": "Type parentheses and brackets as pairs. Think of opening and closing symbols as a rhythm.",
  "keys": ["(", ")", "[", "]", "8", "9", "0", "p", ";", "l"],
  "layoutKeyOverrides": { "it": ["(", ")", "[", "]", "8", "9", "0", "p", "ò", "l"] },
  "steps": [
    { "generator": "alternate", "keys": ["(", ")"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["[", "]"], "pattern": "forward", "groups": 10 },
    { "generator": "random-pairs", "groups": 14 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
