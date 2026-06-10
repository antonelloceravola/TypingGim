window.TypingGimContent.exercises.push({
  "id": "0018-top-row-ty",
  "title": "Top Row - T Y",
  "phase": "Phase 3 - Top Row",
  "level": 3,
  "goal": "Start reaching from home row to the top row.",
  "instructions": "Reach up for T, and Y, then return to home row. Watch the finger colors to keep the movement organized.",
  "keys": ["t", "y", "q", "p", "w", "o", "e", "i", "r", "u", "f", "j", "d", "k"],
  "steps": [
    { "generator": "repeat", "keys": ["t", "y"], "groups": 8 },
    { "generator": "alternate", "keys": ["t", "y"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["t", "y"], "pattern": "forward", "groups": 10 },
    { "generator": "alternate", "keys": ["t", "y", "q", "p", "w", "o", "e", "i", "r", "u"], "pattern": "mirror", "groups": 12 },
    { "generator": "random-pairs" }
  ]
});
