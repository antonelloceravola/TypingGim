window.TypingGimContent.exercises.push({
  "id": "0016-top-row-wo",
  "title": "Top Row - W O",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for W, and O, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["w", "o", "e", "i", "r", "u", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["w", "o"], "groups": 8 },
    { "generator": "alternate", "keys": ["w", "o"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["w", "o"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["w", "o", "e", "i", "r", "u"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
