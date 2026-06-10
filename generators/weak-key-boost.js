window.TypingGimContent.generators.push({
  "id": "weak-key-boost",
  "name": "Weak Key Booster",
  "type": "weakKeyBoost",
  "description": "Generates more content containing problematic keys.",
  "groups": 10,

  generate(context) {
    const keys = context.keys;
    const weakKeys = context.weakKeys;
    const boosted = weakKeys.length ? [...weakKeys, ...weakKeys, ...keys] : keys;
    const groups = context.config.groups || 12;
    const h = context.helpers;

    return Array.from({ length: groups }, () => `${h.pick(boosted)}${h.pick(boosted)}`).join(" ");
  }
});
