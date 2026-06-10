window.TypingGimContent.exercises.push({
  "id": "0059-mastery-mixed-challenge",
  "title": "Mastery - Mixed Challenge",
  "phase": "Phase 9 - Mastery Review",
  "level": 9,
  "goal": "Combine keys, numbers, punctuation, words, and sentences.",
  "instructions": "This is a mixed review. Keep rhythm steady as the exercise moves between drills and real text.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "!", "'", "\"", "-", "(", ")"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "!", "'", "\"", "(", ")"] },
  "sentences": {
    "en": [
      "The mixed challenge includes words, numbers, and punctuation.",
      "Type 3 clean sentences, then relax your hands.",
      "Can you keep accuracy above 95%?",
      "A steady rhythm matters more than a sudden burst of speed."
    ],
    "it": [
      "La sfida mista include parole, numeri e punteggiatura.",
      "Scrivi 3 frasi pulite, poi rilassa le mani.",
      "Puoi mantenere la precisione sopra il 95%?",
      "Un ritmo stabile conta più di uno scatto improvviso."
    ]
  },
  "steps": [
    { "generator": "random-pairs", "groups": 18 },
    { "generator": "weak-key-boost", "groups": 18 },
    { "generator": "random-sentences", "sentenceCount": 2 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 }
  ]
});
