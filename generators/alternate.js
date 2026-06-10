window.TypingGimContent.generators.push({
  id: "alternate",
  name: "Alternate",
  type: "alternate",
  description: "Alternating finger rhythm.",
  groups: 10,
  pattern: "mirror",

  generate(context) {
    const keys = context.keys;
    const groups = context.config.groups || 10;
    const pattern = context.config.pattern || "mirror";
    const pairs = [];

    if (!keys.length) return "";

    for (let i = 0; i < groups; i += 1) {
      const a = keys[i % keys.length];
      const b = keys[(i + 1) % keys.length];

      switch (pattern) {
        case "same-first":
          pairs.push(`${a}${a}`);
          break;

        case "same-second":
          pairs.push(`${b}${b}`);
          break;

        case "forward":
          pairs.push(`${a}${b}`);
          break;

        case "reverse":
          pairs.push(`${b}${a}`);
          break;

        case "mirror":
        default:
          pairs.push(i % 2 === 0 ? `${a}${b}` : `${b}${a}`);
          break;
      }
    }

    return pairs.join(" ");
  }
});