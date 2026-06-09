import { findWeakKeys, getAdaptiveHint, shouldRepeatWrongKey } from "./adaptive-engine.js";
import { buildPrompt, resolveKeys } from "./generator-loader.js";
import { markLessonComplete, recordExerciseResult, recordKey } from "./statistics.js";

export class TypingEngine extends EventTarget {
  constructor({ content, state }) {
    super();
    this.content = content;
    this.state = state;
    this.prompt = "";
    this.position = 0;
    this.lastTargetAt = Date.now();
    this.lastMistake = null;
  }

  get layout() {
    return this.content.layoutsById[this.state.layoutId] || this.content.layouts[0];
  }

  get exercise() {
    return this.content.exercises[this.state.lessonIndex] || this.content.exercises[0];
  }

  get step() {
    return this.exercise.steps[this.state.stepIndex] || this.exercise.steps[0];
  }

  startCurrentStep() {
    const generator = this.content.generatorsById[this.step.generator];
    const keys = resolveKeys(this.exercise, this.step, this.layout);
    const weakKeys = findWeakKeys(this.state, keys, this.content.profile);
    this.prompt = buildPrompt({
      exercise: this.exercise,
      step: this.step,
      generator,
      state: this.state,
      layout: this.layout,
      profile: this.content.profile,
      weakKeys
    });
    this.position = 0;
    this.lastTargetAt = Date.now();
    this.lastMistake = null;
    this.emitChange();
  }

  handleCharacter(rawInput) {
    if (!rawInput || this.isComplete()) return;

    const typed = rawInput === "Space" ? " " : rawInput;
    const expected = this.prompt[this.position];
    const correct = typed === expected;
    const reactionMs = Date.now() - this.lastTargetAt;

    recordKey(this.state, { expected, typed, correct, reactionMs });
    recordExerciseResult(this.state, this.exercise.id, correct);

    if (correct) {
      this.position += 1;
      this.lastMistake = null;
    } else {
      this.lastMistake = expected;
      if (shouldRepeatWrongKey(this.content.profile)) {
        this.prompt = `${this.prompt.slice(0, this.position)}${expected}${this.prompt.slice(this.position)}`;
      }
    }

    this.lastTargetAt = Date.now();

    if (this.isComplete()) {
      this.advanceAfterCompletion();
    }

    this.emitChange();
  }

  previousLesson() {
    this.state.lessonIndex = Math.max(0, this.state.lessonIndex - 1);
    this.state.stepIndex = 0;
    this.startCurrentStep();
  }

  nextLesson() {
    this.state.lessonIndex = Math.min(this.content.exercises.length - 1, this.state.lessonIndex + 1);
    this.state.stepIndex = 0;
    this.startCurrentStep();
  }

  repeatLesson() {
    this.state.stepIndex = 0;
    this.startCurrentStep();
  }

  goToLesson(index) {
    this.state.lessonIndex = Math.max(0, Math.min(this.content.exercises.length - 1, index));
    this.state.stepIndex = 0;
    this.startCurrentStep();
  }

  setLayout(layoutId) {
    this.state.layoutId = layoutId;
    this.state.stepIndex = 0;
    this.startCurrentStep();
  }

  getTargetKey() {
    return this.prompt[this.position] || "";
  }

  getProgress() {
    return this.prompt.length ? this.position / this.prompt.length : 0;
  }

  getAdaptiveHint() {
    return getAdaptiveHint(this.state, resolveKeys(this.exercise, this.step, this.layout), this.content.profile);
  }

  isComplete() {
    return this.position >= this.prompt.length;
  }

  advanceAfterCompletion() {
    if (this.state.stepIndex < this.exercise.steps.length - 1) {
      this.state.stepIndex += 1;
      this.startCurrentStep();
      return;
    }

    markLessonComplete(this.state, this.exercise.id);
    if (this.state.lessonIndex < this.content.exercises.length - 1) {
      this.state.lessonIndex += 1;
    }
    this.state.stepIndex = 0;
    this.startCurrentStep();
    this.dispatchEvent(new CustomEvent("lessoncomplete", { detail: { lesson: this.exercise } }));
  }

  emitChange() {
    this.dispatchEvent(new Event("change"));
  }
}
