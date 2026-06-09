(async function () {
  const STORAGE_KEY = "typinggim.state.v1";
  const fallbackContent = {
    layouts: [
      {
        id: "us",
        name: "US Keyboard",
        language: "en",
        rows: [
          ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
          ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
          ["space"]
        ],
        homeKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
      },
      {
        id: "uk",
        name: "UK Keyboard",
        language: "en",
        rows: [
          ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "#"],
          ["\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
          ["space"]
        ],
        homeKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
      },
      {
        id: "it",
        name: "Italian Keyboard",
        language: "it",
        rows: [
          ["\\", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "ì"],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "è", "+"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "à"],
          ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-"],
          ["space"]
        ],
        homeKeys: ["a", "s", "d", "f", "j", "k", "l", "ò"]
      }
    ],
    generators: [
      { id: "repeat", type: "repeat", groupSize: 3, groups: 8 },
      { id: "alternate", type: "alternate", groups: 10 },
      { id: "random-pairs", type: "randomPairs", groups: 12 },
      { id: "weak-key-boost", type: "weakKeyBoost", groups: 10 },
      { id: "word-mixer", type: "wordMixer", wordsPerRound: 8 }
    ],
    games: [
      { id: "falling-letters", name: "Falling Letters", type: "fallingLetters", durationSeconds: 20, spawnEveryMs: 1100 }
    ],
    profiles: [
      {
        id: "beginner",
        adaptive: {
          enabled: true,
          repeatWrongKeyImmediately: true,
          increaseDifficultyAboveAccuracy: 0.96,
          decreaseDifficultyBelowAccuracy: 0.85,
          weakKeyErrorRate: 0.12,
          slowKeyMs: 900
        },
        gameEveryCompletedLessons: 2
      }
    ],
    exercises: [
      {
        id: "001-home-row-fj",
        title: "Home Row - F and J",
        phase: "Phase 1 - Home Row",
        level: 1,
        keys: ["f", "j"],
        steps: [{ generator: "repeat" }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "002-home-row-dk",
        title: "Home Row - D and K",
        phase: "Phase 1 - Home Row",
        level: 1,
        keys: ["d", "k", "f", "j"],
        steps: [{ generator: "repeat", keys: ["d", "k"] }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "003-home-row-sl",
        title: "Home Row - S and L",
        phase: "Phase 1 - Home Row",
        level: 1,
        keys: ["s", "l", "d", "k", "f", "j"],
        steps: [{ generator: "repeat", keys: ["s", "l"] }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "004-home-row-a-anchor",
        title: "Home Row - A and Anchor",
        phase: "Phase 1 - Home Row",
        level: 1,
        keys: ["a", ";", "s", "l", "d", "k", "f", "j"],
        layoutKeyOverrides: { it: ["a", "ò", "s", "l", "d", "k", "f", "j"] },
        steps: [{ generator: "repeat", keys: ["a", ";"] }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "005-complete-home-row",
        title: "Complete Home Row",
        phase: "Phase 1 - Home Row",
        level: 1,
        keys: ["a", "s", "d", "f", "j", "k", "l", ";"],
        layoutKeyOverrides: { it: ["a", "s", "d", "f", "j", "k", "l", "ò"] },
        steps: [{ generator: "random-pairs" }, { generator: "weak-key-boost" }]
      },
      {
        id: "006-home-row-words",
        title: "Home Row Words",
        phase: "Phase 2 - Home Row Words",
        level: 2,
        keys: ["a", "s", "d", "f", "j", "k", "l", ";"],
        layoutKeyOverrides: { it: ["a", "s", "d", "f", "j", "k", "l", "ò"] },
        words: { en: ["sad", "lad", "fall", "ask", "flag", "salad"], it: ["sala", "alla", "falla", "salda"] },
        steps: [{ generator: "word-mixer" }, { generator: "weak-key-boost" }]
      },
      {
        id: "007-top-row-ru-ei",
        title: "Top Row - R U E I",
        phase: "Phase 3 - Top Row",
        level: 3,
        keys: ["r", "u", "e", "i", "f", "j", "d", "k"],
        steps: [{ generator: "repeat", keys: ["r", "u", "e", "i"] }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "008-bottom-row-vm-c-comma",
        title: "Bottom Row - V M C ,",
        phase: "Phase 4 - Bottom Row",
        level: 4,
        keys: ["v", "m", "c", ",", "f", "j", "d", "k"],
        steps: [{ generator: "repeat", keys: ["v", "m", "c", ","] }, { generator: "alternate" }, { generator: "random-pairs" }]
      },
      {
        id: "009-real-sentences",
        title: "Real Sentences",
        phase: "Phase 5 - Real Sentences",
        level: 5,
        keys: ["a", "s", "d", "f", "j", "k", "l", "r", "u", "e", "i", "v", "m", "c", ",", "."],
        sentences: { en: ["The dog is fast.", "I like typing.", "A small task is done."], it: ["Io amo scrivere.", "La casa è alta.", "Il sole è caldo."] },
        steps: [{ generator: "word-mixer" }]
      }
    ]
  };

  async function loadContent() {
    try {
      const manifest = await fetchJson("content-manifest.json");
      const [layouts, exercises, generators, games, profiles] = await Promise.all([
        loadAll(manifest.layouts),
        loadAll(manifest.exercises),
        loadAll(manifest.generators),
        loadAll(manifest.games),
        loadAll(manifest.profiles)
      ]);
      return normalizeContent({ layouts, exercises, generators, games, profiles });
    } catch (error) {
      console.warn("Using bundled TypingGim content fallback.", error);
      return normalizeContent(fallbackContent);
    }
  }

  async function loadAll(paths) {
    return Promise.all(paths.map(fetchJson));
  }

  async function fetchJson(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return response.json();
  }

  function normalizeContent(content) {
    return {
      ...content,
      layoutsById: Object.fromEntries(content.layouts.map((item) => [item.id, item])),
      generatorsById: Object.fromEntries(content.generators.map((item) => [item.id, item])),
      gamesById: Object.fromEntries(content.games.map((item) => [item.id, item])),
      profile: content.profiles[0]
    };
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefaultState();
    } catch {
      return createDefaultState();
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function resetState() {
    localStorage.removeItem(STORAGE_KEY);
    return createDefaultState();
  }

  function createDefaultState() {
    return {
      layoutId: "us",
      lessonIndex: 0,
      stepIndex: 0,
      completedLessons: [],
      totals: { attempts: 0, errors: 0, correct: 0, startedAt: Date.now(), practiceMs: 0 },
      keys: {},
      exercises: {},
      lastPracticeDate: null,
      streak: 0
    };
  }

  function recordKey(state, payload) {
    const key = normalizeKey(payload.expected);
    if (!key) return;
    state.keys[key] ||= { attempts: 0, errors: 0, correct: 0, totalReactionMs: 0, slowHits: 0 };
    const keyStats = state.keys[key];
    keyStats.attempts += 1;
    state.totals.attempts += 1;
    if (payload.correct) {
      keyStats.correct += 1;
      state.totals.correct += 1;
    } else {
      keyStats.errors += 1;
      state.totals.errors += 1;
    }
    if (Number.isFinite(payload.reactionMs)) {
      keyStats.totalReactionMs += payload.reactionMs;
      if (payload.reactionMs > 900) keyStats.slowHits += 1;
    }
  }

  function recordExerciseResult(state, exerciseId, correct) {
    state.exercises[exerciseId] ||= { attempts: 0, errors: 0, completions: 0 };
    state.exercises[exerciseId].attempts += 1;
    if (!correct) state.exercises[exerciseId].errors += 1;
  }

  function markLessonComplete(state, lessonId) {
    if (!state.completedLessons.includes(lessonId)) state.completedLessons.push(lessonId);
    const today = new Date().toISOString().slice(0, 10);
    if (state.lastPracticeDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastPracticeDate === yesterday ? state.streak + 1 : 1;
    state.lastPracticeDate = today;
  }

  function getAccuracy(state) {
    return state.totals.attempts ? state.totals.correct / state.totals.attempts : 1;
  }

  function getWpm(state) {
    const elapsedMinutes = Math.max((Date.now() - state.totals.startedAt) / 60000, 1 / 60);
    return Math.round((state.totals.correct / 5) / elapsedMinutes);
  }

  function getCpm(state) {
    const elapsedMinutes = Math.max((Date.now() - state.totals.startedAt) / 60000, 1 / 60);
    return Math.round(state.totals.correct / elapsedMinutes);
  }

  function getKeySummary(state, key) {
    const stats = state.keys[normalizeKey(key)];
    if (!stats || !stats.attempts) return { accuracy: 1, avgReactionMs: 0, errorRate: 0 };
    return {
      accuracy: stats.correct / stats.attempts,
      avgReactionMs: stats.totalReactionMs / stats.attempts,
      errorRate: stats.errors / stats.attempts
    };
  }

  function findWeakKeys(state, lessonKeys, profile) {
    const params = profile.adaptive || {};
    return lessonKeys
      .map((key) => ({ key, ...getKeySummary(state, key) }))
      .filter((entry) => entry.errorRate >= (params.weakKeyErrorRate || 0.12) || entry.avgReactionMs >= (params.slowKeyMs || 900))
      .sort((a, b) => b.errorRate + b.avgReactionMs / 4000 - (a.errorRate + a.avgReactionMs / 4000))
      .map((entry) => entry.key);
  }

  function getAdaptiveHint(state, lessonKeys, profile) {
    const weakKeys = findWeakKeys(state, lessonKeys, profile);
    return weakKeys.length ? `Boosting ${weakKeys.slice(0, 3).join(" ")}` : "Balanced practice";
  }

  function resolveKeys(exercise, step = {}, layout) {
    return step.keys || exercise.layoutKeyOverrides?.[layout.id] || exercise.keys || [];
  }

  function buildPrompt({ exercise, step, generator, layout, weakKeys }) {
    const keys = resolveKeys(exercise, step, layout);
    const language = layout.language || "en";
    if (exercise.sentences) return pickMany(exercise.sentences[language] || exercise.sentences.en || [], 2).join(" ");
    switch (generator.type) {
      case "repeat":
        return repeat(keys, generator);
      case "alternate":
        return alternate(keys, generator);
      case "randomPairs":
        return randomPairs(keys, generator);
      case "weakKeyBoost":
        return randomPairs(weakKeys.length ? [...weakKeys, ...weakKeys, ...keys] : keys, generator);
      case "wordMixer":
        return wordMixer(exercise, generator, language, keys);
      default:
        return randomPairs(keys, generator);
    }
  }

  function repeat(keys, generator) {
    return Array.from({ length: generator.groups || 8 }, (_, index) => (keys[index % keys.length] || "").repeat(generator.groupSize || 3)).join(" ");
  }

  function alternate(keys, generator) {
    return Array.from({ length: generator.groups || 10 }, (_, index) => {
      const a = keys[index % keys.length] || "";
      const b = keys[(keys.length - 1 - index + keys.length) % keys.length] || "";
      return `${a}${b}`;
    }).join(" ");
  }

  function randomPairs(keys, generator) {
    return Array.from({ length: generator.groups || 12 }, () => `${pick(keys)}${pick(keys)}`).join(" ");
  }

  function wordMixer(exercise, generator, language, keys) {
    const source = exercise.words?.[language] || exercise.words?.en;
    const words = source?.length ? source : Array.from({ length: 12 }, () => Array.from({ length: 3 + Math.floor(Math.random() * 3) }, () => pick(keys)).join(""));
    return pickMany(words, generator.wordsPerRound || 8).join(" ");
  }

  function pick(items) {
    return items[Math.floor(Math.random() * items.length)] || "";
  }

  function pickMany(items, count) {
    return Array.from({ length: count }, () => pick(items));
  }

  function renderKeyboard(container, layout) {
    container.innerHTML = "";
    layout.rows.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "keyboard-row";
      row.forEach((key) => {
        const normalized = normalizeKey(key);
        const el = document.createElement("div");
        el.className = `key${normalized === "space" ? " space" : ""}${key.length > 1 && normalized !== "space" ? " wide" : ""}`;
        el.dataset.key = normalized;
        el.textContent = normalized === "space" ? "space" : key;
        if (layout.homeKeys?.includes(key)) {
          const mark = document.createElement("small");
          mark.textContent = "home";
          el.appendChild(mark);
        }
        rowEl.appendChild(el);
      });
      container.appendChild(rowEl);
    });
  }

  function setKeyboardState(container, { target, pressed, mistake }) {
    container.querySelectorAll(".key").forEach((keyEl) => {
      keyEl.classList.toggle("target", keyEl.dataset.key === normalizeKey(target));
      keyEl.classList.toggle("pressed", keyEl.dataset.key === normalizeKey(pressed));
      keyEl.classList.toggle("mistake", keyEl.dataset.key === normalizeKey(mistake));
    });
  }

  class TypingEngine extends EventTarget {
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
      this.prompt = buildPrompt({ exercise: this.exercise, step: this.step, generator, layout: this.layout, weakKeys });
      this.position = 0;
      this.lastTargetAt = Date.now();
      this.lastMistake = null;
      this.dispatchEvent(new Event("change"));
    }

    handleCharacter(rawInput) {
      if (!rawInput || this.position >= this.prompt.length) return;
      const typed = rawInput === "Space" ? " " : rawInput;
      const expected = this.prompt[this.position];
      const correct = typed === expected;
      recordKey(this.state, { expected, typed, correct, reactionMs: Date.now() - this.lastTargetAt });
      recordExerciseResult(this.state, this.exercise.id, correct);
      if (correct) {
        this.position += 1;
        this.lastMistake = null;
      } else {
        this.lastMistake = expected;
        if (this.content.profile.adaptive?.repeatWrongKeyImmediately) {
          this.prompt = `${this.prompt.slice(0, this.position)}${expected}${this.prompt.slice(this.position)}`;
        }
      }
      this.lastTargetAt = Date.now();
      if (this.position >= this.prompt.length) this.advanceAfterCompletion();
      this.dispatchEvent(new Event("change"));
    }

    advanceAfterCompletion() {
      const completedLessonId = this.exercise.id;
      if (this.state.stepIndex < this.exercise.steps.length - 1) {
        this.state.stepIndex += 1;
        this.startCurrentStep();
        return;
      }
      markLessonComplete(this.state, completedLessonId);
      if (this.state.lessonIndex < this.content.exercises.length - 1) this.state.lessonIndex += 1;
      this.state.stepIndex = 0;
      this.startCurrentStep();
      this.dispatchEvent(new CustomEvent("lessoncomplete", { detail: { lessonId: completedLessonId } }));
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
  }

  class GamesEngine {
    constructor({ area, content, engine }) {
      this.area = area;
      this.content = content;
      this.engine = engine;
      this.active = null;
      this.score = 0;
      this.fallingLetters = [];
      this.onKeydown = this.onKeydown.bind(this);
    }

    start() {
      this.stop("");
      const game = this.content.games[0];
      this.active = game;
      this.score = 0;
      this.fallingLetters = [];
      this.area.innerHTML = "";
      window.addEventListener("keydown", this.onKeydown);
      this.spawn();
      this.spawnTimer = setInterval(() => this.spawn(), game.spawnEveryMs || 1100);
      this.tickTimer = setInterval(() => this.tick(), 60);
      this.endTimer = setTimeout(() => this.stop(`Game complete. Score ${this.score}.`), (game.durationSeconds || 20) * 1000);
    }

    stop(message = "A short challenge appears between lessons.") {
      clearInterval(this.spawnTimer);
      clearInterval(this.tickTimer);
      clearTimeout(this.endTimer);
      window.removeEventListener("keydown", this.onKeydown);
      this.active = null;
      this.area.innerHTML = `<div id="gameMessage">${message || "A short challenge appears between lessons."}</div>`;
    }

    spawn() {
      const keys = this.engine.exercise.keys || ["f", "j"];
      const letter = pick(keys);
      const el = document.createElement("div");
      el.className = "falling-letter";
      el.textContent = letter;
      el.dataset.key = letter;
      el.style.left = `${20 + Math.random() * 60}%`;
      this.area.appendChild(el);
      this.fallingLetters.push({ el, y: 0, speed: 1.2 + Math.random() * 1.4 });
    }

    tick() {
      const bottom = this.area.clientHeight - 44;
      this.fallingLetters = this.fallingLetters.filter((item) => {
        item.y += item.speed;
        item.el.style.transform = `translate(-50%, ${item.y}px)`;
        if (item.y < bottom) return true;
        item.el.remove();
        return false;
      });
    }

    onKeydown(event) {
      if (!this.active || event.key.length !== 1) return;
      const match = this.fallingLetters.find((item) => item.el.dataset.key === event.key);
      if (!match) return;
      event.preventDefault();
      this.score += 1;
      match.el.remove();
      this.fallingLetters = this.fallingLetters.filter((item) => item !== match);
    }
  }

  function normalizeKey(key) {
    return key === " " ? "space" : key;
  }

  const els = {
    layoutSelect: document.querySelector("#layoutSelect"),
    resetProgress: document.querySelector("#resetProgress"),
    prevLesson: document.querySelector("#prevLesson"),
    repeatLesson: document.querySelector("#repeatLesson"),
    nextLesson: document.querySelector("#nextLesson"),
    lessonTitle: document.querySelector("#lessonTitle"),
    phaseLabel: document.querySelector("#phaseLabel"),
    stepLabel: document.querySelector("#stepLabel"),
    adaptiveHint: document.querySelector("#adaptiveHint"),
    prompt: document.querySelector("#prompt"),
    typingInput: document.querySelector("#typingInput"),
    progressBar: document.querySelector("#progressBar"),
    accuracyStat: document.querySelector("#accuracyStat"),
    wpmStat: document.querySelector("#wpmStat"),
    cpmStat: document.querySelector("#cpmStat"),
    weakKeyStat: document.querySelector("#weakKeyStat"),
    lessonList: document.querySelector("#lessonList"),
    keyboard: document.querySelector("#keyboard"),
    gameArea: document.querySelector("#gameArea"),
    startGame: document.querySelector("#startGame")
  };

  const content = await loadContent();
  let state = loadState();
  const engine = new TypingEngine({ content, state });
  const games = new GamesEngine({ area: els.gameArea, content, engine });

  renderLayoutOptions();
  bindEvents();
  engine.startCurrentStep();
  els.typingInput.focus();

  function bindEvents() {
    engine.addEventListener("change", render);
    engine.addEventListener("lessoncomplete", maybeStartGame);
    els.typingInput.addEventListener("keydown", (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Backspace") {
        event.preventDefault();
        return;
      }
      if (event.key.length === 1 || event.key === " ") {
        event.preventDefault();
        engine.handleCharacter(event.key);
        els.typingInput.value = "";
        saveState(state);
      }
    });
    window.addEventListener("keydown", (event) => {
      setKeyboardState(els.keyboard, { target: engine.getTargetKey(), pressed: event.key === " " ? "space" : event.key, mistake: engine.lastMistake });
    });
    window.addEventListener("keyup", () => {
      setKeyboardState(els.keyboard, { target: engine.getTargetKey(), pressed: null, mistake: engine.lastMistake });
    });
    els.prevLesson.addEventListener("click", () => {
      engine.previousLesson();
      saveState(state);
    });
    els.nextLesson.addEventListener("click", () => {
      engine.nextLesson();
      saveState(state);
    });
    els.repeatLesson.addEventListener("click", () => {
      engine.repeatLesson();
      saveState(state);
    });
    els.layoutSelect.addEventListener("change", () => {
      engine.setLayout(els.layoutSelect.value);
      saveState(state);
    });
    els.resetProgress.addEventListener("click", () => {
      state = resetState();
      engine.state = state;
      engine.startCurrentStep();
      saveState(state);
    });
    els.startGame.addEventListener("click", () => games.start());
  }

  function render() {
    renderKeyboard(els.keyboard, engine.layout);
    setKeyboardState(els.keyboard, { target: engine.getTargetKey(), pressed: null, mistake: engine.lastMistake });
    renderPrompt();
    renderLessonList();
    renderStats();
    els.layoutSelect.value = state.layoutId;
    els.lessonTitle.textContent = engine.exercise.title;
    els.phaseLabel.textContent = engine.exercise.phase || `Level ${engine.exercise.level}`;
    els.stepLabel.textContent = `Step ${state.stepIndex + 1} of ${engine.exercise.steps.length}`;
    els.adaptiveHint.textContent = engine.getAdaptiveHint();
    els.progressBar.style.width = `${Math.round(engine.getProgress() * 100)}%`;
  }

  function renderPrompt() {
    els.prompt.innerHTML = "";
    [...engine.prompt].forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "prompt-char";
      if (index < engine.position) span.classList.add("done");
      if (index === engine.position) span.classList.add("current");
      if (index === engine.position && engine.lastMistake) span.classList.add("error");
      if (char === " ") {
        span.classList.add("space");
        span.setAttribute("aria-label", "space");
      } else {
        span.textContent = char;
      }
      els.prompt.appendChild(span);
    });
  }

  function renderStats() {
    const weakKey = Object.entries(state.keys)
      .filter(([, stats]) => stats.attempts >= 3)
      .sort(([, a], [, b]) => b.errors / b.attempts - a.errors / a.attempts)[0]?.[0] || "-";
    els.accuracyStat.textContent = `${Math.round(getAccuracy(state) * 100)}%`;
    els.wpmStat.textContent = String(getWpm(state));
    els.cpmStat.textContent = String(getCpm(state));
    els.weakKeyStat.textContent = weakKey;
  }

  function renderLessonList() {
    els.lessonList.innerHTML = "";
    content.exercises.forEach((exercise, index) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.classList.toggle("active", index === state.lessonIndex);
      button.innerHTML = `<span class="done-mark">${state.completedLessons.includes(exercise.id) ? "✓" : index + 1}</span><span>${exercise.title}</span>`;
      button.addEventListener("click", () => {
        engine.goToLesson(index);
        saveState(state);
      });
      item.appendChild(button);
      els.lessonList.appendChild(item);
    });
  }

  function renderLayoutOptions() {
    els.layoutSelect.innerHTML = "";
    content.layouts.forEach((layout) => {
      const option = document.createElement("option");
      option.value = layout.id;
      option.textContent = layout.name;
      els.layoutSelect.appendChild(option);
    });
  }

  function maybeStartGame() {
    const every = content.profile.gameEveryCompletedLessons || 2;
    if (state.completedLessons.length && state.completedLessons.length % every === 0) games.start();
  }
})();
