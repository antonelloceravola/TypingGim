window.TypingGimContent.exercises.push({
  "id": "0015-top-row-ei",
  "title": "Top Row - E I",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for E, and I, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["e", "i", "r", "u", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["e", "i"], "groups": 8 },
    { "generator": "alternate", "keys": ["e", "i"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["e", "i"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["e", "i", "r", "u"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
