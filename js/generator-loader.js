export function buildPrompt({ exercise, step, generator, state, layout, profile, weakKeys }) {
  const keys = resolveKeys(exercise, step, layout);
  const language = layout.language || "en";

  if (generator.type === "sentenceDrill") {
    return sentenceDrill(exercise, step, language);
  }

  if (exercise.sentences) {
    return pickMany(exercise.sentences[language] || exercise.sentences.en || [], 2).join(" ");
  }

  switch (generator.type) {
    case "repeat":
      return repeat(keys, generator);
    case "alternate":
      return alternate(keys, generator);
    case "randomPairs":
      return randomPairs(keys, generator);
    case "weakKeyBoost":
      return weakKeyBoost(keys, generator, weakKeys);
    case "wordMixer":
      return wordMixer(exercise, generator, language, keys);
    case "sentenceDrill":
      return sentenceDrill(exercise, step, language);
    default:
      return randomPairs(keys, generator);
  }
}

export function resolveKeys(exercise, step = {}, layout) {
  const overridden = exercise.layoutKeyOverrides?.[layout.id] || exercise.keys || [];
  return step.keys || overridden;
}

function repeat(keys, generator) {
  const groupSize = generator.groupSize || 3;
  const groups = generator.groups || 8;
  return Array.from({ length: groups }, (_, index) => {
    const key = keys[index % keys.length];
    return key.repeat(groupSize);
  }).join(" ");
}

function alternate(keys, generator) {
  const groups = generator.groups || 10;
  const pairs = [];
  for (let i = 0; i < groups; i += 1) {
    const a = keys[i % keys.length];
    const b = keys[(keys.length - 1 - i + keys.length) % keys.length];
    pairs.push(`${a}${b}`);
  }
  return pairs.join(" ");
}

function randomPairs(keys, generator) {
  const groups = generator.groups || 12;
  return Array.from({ length: groups }, () => `${pick(keys)}${pick(keys)}`).join(" ");
}

function weakKeyBoost(keys, generator, weakKeys) {
  const boosted = weakKeys.length ? [...weakKeys, ...weakKeys, ...keys] : keys;
  return randomPairs(boosted, generator);
}

function wordMixer(exercise, generator, language, keys) {
  const source = exercise.words?.[language] || exercise.words?.en;
  const words = source?.length ? source : synthesizeWords(keys);
  return pickMany(words, generator.wordsPerRound || 8).join(" ");
}

export function getSentenceDrillItems(exercise, language = "en") {
  const direct = exercise.sentences?.[language] || exercise.sentences?.en;
  if (direct?.length) return direct;

  const text = exercise.longText?.[language] || exercise.longText?.en || "";
  return text
    .replace(/\s+/g, " ")
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
}

function sentenceDrill(exercise, step, language) {
  const sentences = getSentenceDrillItems(exercise, language);
  if (!sentences.length) return "";
  const index = Math.min(step.sentenceIndex || 0, sentences.length - 1);
  return sentences[index];
}

function synthesizeWords(keys) {
  return Array.from({ length: 12 }, () => {
    const length = 3 + Math.floor(Math.random() * 3);
    return Array.from({ length }, () => pick(keys)).join("");
  });
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)] || "";
}

function pickMany(items, count) {
  return Array.from({ length: count }, () => pick(items));
}
