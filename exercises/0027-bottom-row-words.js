window.TypingGimContent.exercises.push({
  "id": "0027-bottom-row-words",
  "title": "Bottom Row Words",
  "phase": "Phase 4 - Bottom Row Words",
  "level": 4,
  "goal": "Use bottom-row keys inside word movement.",
  "instructions": "Type short words that combine bottom-row, home-row, and top-row keys. Keep accuracy ahead of speed.",
  "keys": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  "layoutKeyOverrides": { "it": ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] },
  "words": {
    "en": ["move", "come", "name", "calm", "back", "bring", "never", "voice", "mix", "zone", "quick", "brown", "market", "number", "change", "between"],
    "it": ["cane", "bene", "mano", "cena", "nome", "zona", "voce", "banca", "vicino", "mondo", "cambio", "numero", "verde", "strano"]
  },
  "steps": [
    { "generator": "word-mixer", "wordsPerRound": 7 },
    { "generator": "word-mixer", "wordsPerRound": 10 },
    { "generator": "weak-key-boost", "groups": 16 }
  ]
});
