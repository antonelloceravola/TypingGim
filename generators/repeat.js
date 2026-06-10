window.TypingGimContent.generators.push({
  "id": "repeat",
  "name": "Repeat",
  "type": "repeat",
  "description": "Repeated practice of specific keys.",
  "groupSize": 3,
  "groups": 8,

  generate(context) {
    const keys = context.keys;
    const groups = context.config.groups || 8;
    const groupSize = context.config.groupSize || 3;

    return Array.from({ length: groups }, (_, index) => {
      const key = keys[index % keys.length];
      return key.repeat(groupSize);
    }).join(" ");
  }
});
