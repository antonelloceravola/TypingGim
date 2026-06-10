window.TypingGimContent.exercises.push({
  "id": "0020-top-row-words",
  "title": "Top Row Words",
  "phase": "Phase 2 - Top Row Words",
  "level": 2,
  "goal": "Connect top-row letters into word-like movement.",
  "instructions": "Type short words made from known keys. Keep your eyes on the screen and let the virtual keyboard support you.",
  "keys": ["t", "y", "q", "p", "w", "o", "e", "i", "r", "u"],
  "words": {
    "words": {
      "en": [ "water", "power", "write", "quiet",  "writer",
              "forest", "read", "trade", "story", "later",
      ],
      "it": [ "porta", "quota", "autore", "potere", "teoria",
              "storia", "parole", "scritta", "fiore", "saluto", 
      ]
    }
  },
  "steps": [
    { "generator": "word-mixer", "wordsPerRound": 6 },
    { "generator": "word-mixer", "wordsPerRound": 10 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
