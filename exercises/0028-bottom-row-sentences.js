window.TypingGimContent.exercises.push({
  "id": "0028-bottom-row-sentences",
  "title": "Bottom Row Sentences",
  "phase": "Phase 4 - Bottom Row Sentences",
  "level": 4,
  "goal": "Bring bottom-row control into real sentences.",
  "instructions": "Type complete sentences with bottom-row letters. If a sentence feels unstable, slow down and watch the target key.",
  "keys": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  "layoutKeyOverrides": { "it": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] },
  "sentences": {
    "en": [
      "Move back and come again.",
      "The brown box is on the table.",
      "Never rush the next movement.",
      "A calm voice can help.",
      "The quick change was correct.",
      "Bring the number back soon."
    ],
    "it": [
      "La voce calma aiuta molto.",
      "Il cane torna vicino alla casa.",
      "Il numero cambia ancora.",
      "La zona verde è vicina.",
      "Cammina piano e resta comodo.",
      "La mano cerca il tasto giusto."
    ]
  },
  "steps": [
    { "generator": "sentence-drill", "repeatUntilCorrect": 1 },
    { "generator": "random-sentences", "sentenceCount": 2 },
    { "generator": "sentence-drill", "repeatUntilCorrect": 2 }
  ]
});
