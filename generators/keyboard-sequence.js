window.TypingGimContent.generators.push({
  id: "keyboard-sequence",
  name: "Keyboard Sequence",
  type: "keyboardSequence",
  description: "Shows small sequences that the learner imitates on the keyboard.",
  count: 8,
  sequenceLength: 2,

  generate(context) {
    const h = context.helpers;
    const source = context.config.keys?.length ? context.config.keys : context.keys;
    const keys = source.length ? source : context.layout.rows.flat().filter((key) => key !== "space");
    const count = context.config.count || 8;
    const sequenceLength = context.config.sequenceLength || 2;

    return Array.from({ length: count }, () => h.pickMany(keys, sequenceLength).join("")).join(" ");
  }
});
