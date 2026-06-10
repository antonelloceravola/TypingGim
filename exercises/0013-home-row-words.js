window.TypingGimContent.exercises.push({
  "id": "0013-home-row-words",
  "title": "Home Row Words",
  "phase": "Phase 2 - Home Row Words",
  "level": 2,
  "goal": "Connect home-row letters into word-like movement.",
  "instructions": "Type short words made from known keys. Keep your eyes on the screen and let the virtual keyboard support you.",
  "keys": ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
  "layoutKeyOverrides": { "it": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ò"] },
  "words": {
    "words": {
      "en": [
        "sad", "lad", "fall", "ask", "flag",  "salad", "all", "flask",
        "gas", "gag", "glad", "glass", "lash", "hash", "has",
        "had", "hag", "gash", "flash", "half", "shall", "dash", "shag",
        "slag", "gala",
      ],

      "it": [
        "sala", "alla", "falla", "salda", "dalla",
        "galla", "gassa", "gala", "daga", 
        "gass", "sala", "da",
      ]
    }
  },
  "steps": [
    { "generator": "word-mixer", "wordsPerRound": 6 },
    { "generator": "word-mixer", "wordsPerRound": 10 },
    { "generator": "weak-key-boost", "groups": 14 }
  ]
});
