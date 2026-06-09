export class GamesEngine {
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
    this.stop();
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
    this.area.innerHTML = `<div id="gameMessage">${message}</div>`;
  }

  spawn() {
    const keys = this.engine.exercise.keys || ["f", "j"];
    const letter = keys[Math.floor(Math.random() * keys.length)] || "f";
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
