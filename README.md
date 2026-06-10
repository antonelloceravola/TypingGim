# TypingGim - Adaptive Touch Typing Trainer

TypingGim is a browser-based touch typing trainer designed to help complete beginners learn to type without looking at the keyboard.

The application runs entirely in the browser:

- No server required for the application logic
- No account required
- No internet connection required after download
- All progress stored locally
- Fully client-side HTML, CSS, and JavaScript

The primary goal is to maximize learning speed through adaptive exercises that continuously adjust to the user's weaknesses while maintaining motivation through small games and challenges.

## Main Principles

### Learn Without Looking Down

The application always displays a visual keyboard at the bottom of the screen.

The keyboard:

- Shows the current keyboard layout
- Highlights the next target key
- Highlights pressed keys
- Shows mistakes
- Optionally shows recommended finger positions

This allows the user to keep their eyes on the screen instead of looking at the physical keyboard.

### Adaptive Learning

The application continuously measures:

- Accuracy
- Reaction time
- Typing speed
- Error frequency per key
- Error frequency per finger
- Error frequency per exercise

Exercises dynamically adapt based on performance.

Examples:

- If the user struggles with `j`, more exercises containing `j` are generated.
- If the user types `f` slowly, additional reaction drills are introduced.
- If a lesson is mastered, difficulty automatically increases.
- If a lesson is difficult, additional practice is proposed.

### Content Driven Design

The application engine should remain stable.

New content should be added by creating content files. No engine modifications should be required for:

- New lessons
- New generators
- New games
- New keyboard layouts

## Architecture

```text
typinggim/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── engine.js
│   ├── keyboard.js
│   ├── exercise-loader.js
│   ├── generator-loader.js
│   ├── adaptive-engine.js
│   ├── games-engine.js
│   ├── storage.js
│   └── statistics.js
├── layouts/
│   ├── us.js
│   ├── uk.js
│   └── it.js
├── exercises/
│   ├── 0001-keyboard-mirror-free-press.js
│   ├── 0007-home-row-fj.js
│   └── ...
├── generators/
│   ├── free-press.js
│   ├── key-discovery.js
│   ├── keyboard-sequence.js
│   ├── repeat.js
│   └── word-mixer.js
├── games/
│   ├── falling-letters.js
│   ├── typing-race.js
│   ├── repair-the-word.js
│   └── keyboard-simon.js
└── profiles/
    └── beginner.js
```

## Current Implementation

This first implementation includes:

- A usable browser app in `index.html`
- US, UK, and Italian keyboard layouts
- Beginner lessons for screen-keyboard orientation, home row, top row, bottom row, words, and sentences
- JavaScript-defined content files that work when `index.html` is opened directly
- LocalStorage-backed progress and statistics
- Per-key accuracy and reaction time tracking
- Adaptive weak-key practice injection
- Sentence drills that repeat a sentence until it is typed cleanly a configured number of times
- Visual keyboard highlighting for target, pressed, and mistake states
- Lesson navigation, layout switching, game insertion, and reset controls

## Sentence Drill Example

Advanced exercises can present long text one sentence at a time with the `sentence-drill` generator.

```json
{
  "generator": "sentence-drill",
  "repeatUntilCorrect": 2,
  "advance": "sequential"
}
```

If the learner makes any mistake while typing the sentence, the sentence is shown again. It advances only after the sentence is typed cleanly the configured number of times.

## Running

Open `index.html` directly in a browser. No local web server is required.

## Future Ideas

- Finger heatmap
- AI lesson builder
- More language packs
- Achievement system
- Richer adaptive lesson scheduling
- Detailed content schemas for layouts, exercises, generators, games, and profiles
