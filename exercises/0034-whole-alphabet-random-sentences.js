window.TypingGimContent.exercises.push({
  "id": "0034-whole-alphabet-random-sentences",
  "title": "Whole Alphabet - Random Sentences",
  "phase": "Phase 5 - Whole Alphabet",
  "level": 5,
  "goal": "Move from key drills into real full-alphabet sentence flow.",
  "instructions": "Type varied sentences that use the whole alphabet. Keep a relaxed rhythm and correct each sentence with care.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-"] },
  "sentences": {
    "en": [
      "The quick brown fox jumps over the lazy dog.",
      "A focused typist keeps both hands relaxed.",
      "Every new sentence improves keyboard control.",
      "The brave explorer found a quiet valley.",
      "Typing the whole alphabet builds confidence.",
      "A smooth rhythm helps difficult letters connect.",
      "The keyboard becomes familiar through steady practice.",
      "Accuracy today creates speed tomorrow."
    ],
    "it": [
      "La pratica costante rende la tastiera familiare.",
      "Ogni nuova frase aiuta il controllo delle dita.",
      "Un ritmo calmo rende più facile scrivere.",
      "La volpe veloce attraversa il campo tranquillo.",
      "Scrivere tutto l'alfabeto aumenta la fiducia.",
      "Le mani restano leggere e rilassate.",
      "La precisione di oggi crea velocità domani.",
      "Ogni tasto diventa più chiaro con esercizio."
    ]
  },
  "steps": [
    { "generator": "random-sentences", "sentenceCount": 1 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 },
    { "generator": "random-sentences", "sentenceCount": 2 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 2 }
  ]
});
