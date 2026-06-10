window.TypingGimContent.generators.push({
  "id": "random-pairs",
  "name": "Random Pairs",
  "type": "randomPairs",
  "description": "Prevents memorization with mixed key pairs.",
  "groups": 12,

  generate(context) {
    const keys = context.keys;
    const groups = context.config.groups || 12;
    const h = context.helpers;
    
    return Array.from({ length: groups }, () => `${h.pick(keys)}${h.pick(keys)}`).join(" ");
  }
});
