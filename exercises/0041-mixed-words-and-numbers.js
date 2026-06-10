window.TypingGimContent.exercises.push({
  "id": "0041-mixed-words-and-numbers",
  "title": "Mixed Words and Numbers",
  "phase": "Phase 6 - Numbers",
  "level": 6,
  "goal": "Use numbers inside realistic typing.",
  "instructions": "Type short sentences with words and numbers. Keep number-row reaches controlled and return to normal typing rhythm.",
  "keys": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", "."],
  "layoutKeyOverrides": { "it": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", "."] },
  "sentences": {
    "en": [
      "Room 101 is ready.",
      "The train leaves at 8.",
      "Type 5 words and rest.",
      "The code is 4729.",
      "We practiced for 10 minutes.",
      "There are 3 boxes on shelf 6."
    ],
    "it": [
      "La stanza 101 è pronta.",
      "Il treno parte alle 8.",
      "Scrivi 5 parole e riposa.",
      "Il codice è 4729.",
      "Abbiamo praticato per 10 minuti.",
      "Ci sono 3 scatole sul ripiano 6."
    ]
  },
  "steps": [
    { "generator": "random-sentences", "sentenceCount": 1 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 },
    { "generator": "random-sentences", "sentenceCount": 2 }
  ]
});
