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
    { id: "word-mixer", type: "wordMixer", wordsPerRound: 8 }
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
    }
  ]
};
