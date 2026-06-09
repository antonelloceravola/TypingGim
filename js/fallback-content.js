export const fallbackContent = {
  layouts: [
    {
      id: "us",
      name: "US Keyboard",
      language: "en",
      rows: [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
        ["space"]
      ],
      homeKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
    },
    {
      id: "uk",
      name: "UK Keyboard",
      language: "en",
      rows: [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
        ["space"]
      ],
      homeKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
    },
    {
      id: "it",
      name: "Italian Keyboard",
      language: "it",
      rows: [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "è"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "à"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-"],
        ["space"]
      ],
      homeKeys: ["a", "s", "d", "f", "j", "k", "l", "ò"]
    }
  ],
  generators: [
    { id: "repeat", type: "repeat", groupSize: 3, groups: 8 },
    { id: "alternate", type: "alternate", groups: 10 },
    { id: "random-pairs", type: "randomPairs", groups: 12 },
    { id: "weak-key-boost", type: "weakKeyBoost", groups: 10 },
    { id: "word-mixer", type: "wordMixer", wordsPerRound: 8 },
    { id: "sentence-drill", type: "sentenceDrill" }
  ],
  games: [
    { id: "falling-letters", name: "Falling Letters", type: "fallingLetters", durationSeconds: 20, spawnEveryMs: 1100 }
  ],
  profiles: [
    {
      id: "beginner",
      adaptive: {
        enabled: true,
        repeatWrongKeyImmediately: true,
        increaseDifficultyAboveAccuracy: 0.96,
        decreaseDifficultyBelowAccuracy: 0.85,
        weakKeyErrorRate: 0.12,
        slowKeyMs: 900
      },
      gameEveryCompletedLessons: 2
    }
  ],
  exercises: [
    {
      id: "001-home-row-fj",
      title: "Home Row - F and J",
      phase: "Phase 1 - Home Row",
      level: 1,
      keys: ["f", "j"],
      steps: [{ generator: "repeat" }, { generator: "alternate" }, { generator: "random-pairs" }]
    },
    {
      id: "002-home-row-dk",
      title: "Home Row - D and K",
      phase: "Phase 1 - Home Row",
      level: 1,
      keys: ["d", "k", "f", "j"],
      steps: [{ generator: "repeat", keys: ["d", "k"] }, { generator: "alternate" }, { generator: "random-pairs" }]
    },
    {
      id: "006-home-row-words",
      title: "Home Row Words",
      phase: "Phase 2 - Home Row Words",
      level: 2,
      keys: ["a", "s", "d", "f", "j", "k", "l", ";"],
      layoutKeyOverrides: { it: ["a", "s", "d", "f", "j", "k", "l", "ò"] },
      words: {
        en: ["sad", "lad", "fall", "ask", "flag"],
        it: ["sala", "alla", "falla"]
      },
      steps: [{ generator: "word-mixer" }, { generator: "weak-key-boost" }]
    },
    {
      id: "010-advanced-long-text",
      title: "Advanced Long Text",
      phase: "Advanced - Sentence Control",
      level: 6,
      keys: ["a", "s", "d", "f", "j", "k", "l", "r", "u", "e", "i", "o", "t", "y", "n", "m", "c", "v", "p", "g", "h", "b", "w", "q", "x", "z", ",", ".", ";"],
      longText: {
        en: "Typing well is not only a matter of speed. A calm rhythm helps the hands find each key without hesitation. When a mistake appears, the best practice is to slow down, repeat the sentence, and type it cleanly again.",
        it: "Scrivere bene non è solo una questione di velocità. Un ritmo calmo aiuta le mani a trovare ogni tasto senza esitazione. Quando appare un errore, la pratica migliore è rallentare, ripetere la frase e scriverla di nuovo con precisione."
      },
      steps: [{ generator: "sentence-drill", repeatUntilCorrect: 2, advance: "sequential" }]
    }
  ]
};
