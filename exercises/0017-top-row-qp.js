window.TypingGimContent.exercises.push({
  "id": "0017-top-row-qp",
  "title": "Top Row - Q P",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for Q, and P, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["q", "p", "w", "o", "e", "i", "r", "u", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["q", "p"], "groups": 8 },
    { "generator": "alternate", "keys": ["q", "p"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["q", "p"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["q", "p", "w", "o", "e", "i", "r", "u"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
