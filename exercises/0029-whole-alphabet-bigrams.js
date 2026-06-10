window.TypingGimContent.exercises.push({
  "id": "0029-whole-alphabet-bigrams",
  "title": "Whole Alphabet - Common Bigrams",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Build fluency with common two-letter patterns.",
  "instructions": "Practice common bigrams such as th, he, in, er, and an. Type each pair as a smooth movement, then return to home position.",
  "keys": ["t", "h", "e", "i", "n", "r", "a", "f", "j", "d", "k", "s", "l"],
  "words": {
    "en": ["th", "he", "in", "er", "an", "the", "then", "there", "inner", "near", "hand", "learn", "heart", "rather"],
    "it": ["ch", "he", "in", "er", "an", "che", "anche", "bene", "terra", "niente", "andare", "tenere", "restare"]
  },
  "steps": [
    { "generator": "repeat", "keys": ["t", "h", "e", "i", "n", "r", "a"], "groupSize": 2, "groups": 10 },
    { "generator": "word-mixer", "wordsPerRound": 8 },
    { "generator": "word-mixer", "wordsPerRound": 12 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
