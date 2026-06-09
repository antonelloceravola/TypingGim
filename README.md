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

New content should be added by creating JSON files. No JavaScript modifications should be required for:

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
│   ├── us.json
│   ├── uk.json
│   └── it.json
├── exercises/
│   ├── 001-home-row-fj.json
│   ├── 002-home-row-dk.json
│   └── ...
├── generators/
│   ├── repeat.json
│   ├── alternate.json
│   ├── random-pairs.json
│   ├── weak-key-boost.json
│   └── word-mixer.json
├── games/
│   ├── falling-letters.json
│   ├── typing-race.json
│   ├── repair-the-word.json
│   └── keyboard-simon.json
└── profiles/
    └── beginner.json
```

## Current Implementation

This first implementation includes:

- A usable browser app in `index.html`
- US, UK, and Italian keyboard layouts
- Beginner lessons for home row, top row, bottom row, words, and sentences
- JSON-defined generators and games
- LocalStorage-backed progress and statistics
- Per-key accuracy and reaction time tracking
- Adaptive weak-key practice injection
- Visual keyboard highlighting for target, pressed, and mistake states
- Lesson navigation, layout switching, game insertion, and reset controls

## Running

Open `index.html` in a browser for the built-in content bundle fallback.

For loading the JSON files directly during development, run a static server from the project directory:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Future Ideas

- Finger heatmap
- AI lesson builder
- More language packs
- Achievement system
- Richer adaptive lesson scheduling
- Detailed JSON schemas for layouts, exercises, generators, games, and profiles
