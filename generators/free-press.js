window.TypingGimContent.generators.push({
  id: "free-press",
  name: "Free Press",
  type: "freePress",
  description: "Lets the learner press any keys while watching the virtual keyboard react.",
  count: 20,

  generate(context) {
    return " ".repeat(context.config.count || 20);
  }
});
