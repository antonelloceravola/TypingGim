window.TypingGimContent.generators.push({
  "id": "word-mixer",
  "name": "Word Mixer",
  "type": "wordMixer",
  "description": "Generates words from known letters.",
  "wordsPerRound": 8,

  generate(context) {
    const exercise = context.exercise;
    const language = context.language;
    const wordsPerRound = context.config.wordsPerRound;
    const h = context.helpers;

    const source = exercise.words?.[language] || exercise.words?.en;
    const words = source?.length ? source : h.synthesizeWords(keys);
    return h.pickMany(words, wordsPerRound || 8).join(" ");
  }
});
