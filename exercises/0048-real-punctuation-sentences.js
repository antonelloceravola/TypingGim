window.TypingGimContent.exercises.push({
  "id": "0048-real-punctuation-sentences",
  "title": "Real Punctuation Sentences",
  "phase": "Phase 7 - Punctuation",
  "level": 7,
  "goal": "Use punctuation, capitalization, and rhythm in real sentences.",
  "instructions": "Type each sentence carefully. Watch for Shift characters, paired punctuation, and sentence endings.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?", "!", "'", "\"", "-", "_", "(", ")", "[", "]"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "?", "!", "'", "\"", "_", "(", ")", "[", "]"] },
  "sentences": {
    "en": [
      "Wait, are you ready?",
      "Yes, I am ready!",
      "The note said, \"Practice slowly.\"",
      "Use the file-name carefully.",
      "The list includes (one), (two), and (three).",
      "Save the value in [brackets].",
      "Accuracy first; speed later.",
      "The code is test_value-42."
    ],
    "it": [
      "Aspetta, sei pronto?",
      "Sì, sono pronto!",
      "La nota diceva, \"Pratica piano.\"",
      "Usa il nome-file con attenzione.",
      "La lista include (uno), (due) e (tre).",
      "Salva il valore in [parentesi].",
      "Precisione prima; velocità dopo.",
      "Il codice è valore_test-42."
    ]
  },
  "steps": [
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 },
    { "generator": "random-sentences", "sentenceCount": 2 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 2 }
  ]
});
