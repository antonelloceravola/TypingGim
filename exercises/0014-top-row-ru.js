window.TypingGimContent.exercises.push({
  "id": "0014-top-row-ru",
  "title": "Top Row - R U",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for R, U, E, and I, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["r", "u", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["r", "u"], "groups": 8 },
    { "generator": "alternate", "keys": ["r", "u"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["e", "i"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["r", "u", "f", "j"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
