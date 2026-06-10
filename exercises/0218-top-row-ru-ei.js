window.TypingGimContent.exercises.push({
  "id": "0018-top-row-ru-ei",
  "title": "Top Row - R U E I",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for R, U, E, and I, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["r", "u", "e", "i", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["r", "u"], "groups": 8 },
    { "generator": "alternate", "keys": ["r", "u"], "pattern": "forward", "groups": 10 },
    { "generator": "repeat", "keys": ["e", "i"], "groups": 8 },
    { "generator": "alternate", "keys": ["e", "i"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["r", "u", "e", "i"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
