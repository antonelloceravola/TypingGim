window.TypingGimContent.generators.push({
  id: "random-sentences",
  name: "Random Sentences",
  type: "randomSentences",
  sentenceCount: 2,

  generate(context) {
    const sentences = context.exercise.sentences?.[context.language] ||
                      context.exercise.sentences?.en || [];
    const h = context.helpers;

    return h.pickMany(sentences, context.config.sentenceCount || 2)
            .join(" ");
  }
});