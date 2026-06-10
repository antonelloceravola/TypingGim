window.TypingGim.generatorHelpers = {};

function buildPrompt({ exercise, step, generator, state, layout, profile, weakKeys }) {
  const keys = resolveKeys(exercise, step, layout);
  const language = layout.language || "en";
  const config = { ...generator, ...step };

  if (typeof generator.generate === "function") {
    return generator.generate({
      exercise,
      step,
      generator,
      config,
      state,
      layout,
      profile,
      weakKeys,
      keys,
      language,
      helpers: window.TypingGim.generatorHelpers
    });
  }

  throw new Error(`Generator '${generator.id}' does not define a generate(context) function.`);
}
window.TypingGim.buildPrompt = buildPrompt;

function resolveKeys(exercise, step = {}, layout) {
  const stepOverride = step.layoutKeyOverrides?.[layout.id];
  const exerciseOverride = exercise.layoutKeyOverrides?.[layout.id];

  return stepOverride || step.keys || exerciseOverride || exercise.keys || [];
}
window.TypingGim.resolveKeys = resolveKeys;

function getSentenceDrillItems(exercise, language = "en") {
  const direct = exercise.sentences?.[language] || exercise.sentences?.en;
  if (direct?.length) return direct;

  const text = exercise.longText?.[language] || exercise.longText?.en || "";
  return text
    .replace(/\s+/g, " ")
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
}
window.TypingGim.generatorHelpers.getSentenceDrillItems = getSentenceDrillItems;

function synthesizeWords(keys) {
  return Array.from({ length: 12 }, () => {
    const length = 3 + Math.floor(Math.random() * 3);
    return Array.from({ length }, () => pick(keys)).join("");
  });
}
window.TypingGim.generatorHelpers.synthesizeWords = synthesizeWords;

function pick(items) {
  return items[Math.floor(Math.random() * items.length)] || "";
}
window.TypingGim.generatorHelpers.pick = pick;

function pickMany(items, count) {
  return Array.from({ length: count }, () => pick(items));
}
window.TypingGim.generatorHelpers.pickMany = pickMany;
