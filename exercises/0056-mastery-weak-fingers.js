window.TypingGimContent.exercises.push({
  "id": "0056-mastery-weak-fingers",
  "title": "Mastery - Finger Groups",
  "phase": "Phase 9 - Mastery Review",
  "level": 9,
  "goal": "Review key clusters by finger group.",
  "instructions": "This lesson rotates through pinky, ring, middle, and index-finger clusters. Notice which finger feels least stable.",
  "keys": ["q", "a", "z", "p", ";", "/", "w", "s", "x", "o", "l", ".", "e", "d", "c", "i", "k", ",", "r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m"],
  "layoutKeyOverrides": { "it": ["q", "a", "z", "p", "ò", "-", "w", "s", "x", "o", "l", ".", "e", "d", "c", "i", "k", ",", "r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m"] },
  "steps": [
    { "generator": "random-pairs", "keys": ["q", "a", "z", "p", ";", "/"], "layoutKeyOverrides": { "it": ["q", "a", "z", "p", "ò", "-"] }, "groups": 12 },
    { "generator": "random-pairs", "keys": ["w", "s", "x", "o", "l", "."], "groups": 12 },
    { "generator": "random-pairs", "keys": ["e", "d", "c", "i", "k", ","], "groups": 12 },
    { "generator": "random-pairs", "keys": ["r", "t", "f", "g", "v", "b", "y", "u", "h", "j", "n", "m"], "groups": 16 },
    { "generator": "weak-key-boost", "groups": 20 }
  ]
});
