window.TypingGimContent.exercises.push({
  "id": "0050-real-text-paragraphs",
  "title": "Real Text - Paragraphs",
  "phase": "Phase 8 - Real Text",
  "level": 8,
  "goal": "Move from individual sentences into paragraph flow.",
  "instructions": "Type several connected sentences. Keep your eyes on the screen and maintain a steady rhythm across punctuation.",
  "keys": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "!", "'", "\"", "-", "(", ")"],
  "layoutKeyOverrides": { "it": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "!", "'", "\"", "(", ")"] },
  "sentences": {
    "en": [
      "A good typing session begins with a relaxed posture.",
      "The hands stay near home row while the eyes stay on the screen.",
      "Mistakes are useful because they show what needs more practice.",
      "Short pauses help the rhythm become smooth again.",
      "After a few minutes, the keyboard starts to feel familiar."
    ],
    "it": [
      "Una buona sessione inizia con una postura rilassata.",
      "Le mani restano vicino alla riga centrale mentre gli occhi guardano lo schermo.",
      "Gli errori sono utili perché mostrano cosa praticare ancora.",
      "Piccole pause aiutano il ritmo a tornare fluido.",
      "Dopo alcuni minuti, la tastiera diventa più familiare."
    ]
  },
  "steps": [
    { "generator": "random-sentences", "sentenceCount": 2 },
    { "generator": "random-sentences", "sentenceCount": 3 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 }
  ]
});
