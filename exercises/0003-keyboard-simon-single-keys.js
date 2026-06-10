window.TypingGimContent.exercises.push({
  "id": "0003-keyboard-simon-single-keys",
  "title": "Keyboard Simon - Single Keys",
  "phase": "Phase 0 - Screen Keyboard Orientation",
  "level": 0,
  "goal": "Imitate keys shown on the virtual keyboard.",
  "instructions": "Watch the keyboard flash the next key, then press the same key. Start with one key at a time.",
  "keys": ["f", "j", "d", "k", "s", "l", "a", ";"],
  "layoutKeyOverrides": { "it": ["f", "j", "d", "k", "s", "l", "a", "ò"] },
  "steps": [
    { "generator": "keyboard-sequence", "sequenceLength": 1, "count": 12, "previewKeyboard": true }
  ]
});
