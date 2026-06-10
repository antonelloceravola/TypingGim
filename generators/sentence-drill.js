window.TypingGimContent.generators.push({
  "id": "sentence-drill",
  "name": "Sentence Drill",
  "type": "sentenceDrill",
  "description": "Presents one sentence at a time and can repeat it until it is typed correctly.",

  generate(context) {
    const exercise = context.exercise;
    const step = context.step;
    const language = context.language;
    const h = context.helpers;

    const sentences = h.getSentenceDrillItems(exercise, language);
    if (!sentences.length) return "";
    const index = Math.min(step.sentenceIndex || 0, sentences.length - 1);
    return sentences[index];
  }
});
