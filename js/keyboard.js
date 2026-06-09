export function renderKeyboard(container, layout) {
  container.innerHTML = "";
  layout.rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";
    row.forEach((key) => rowEl.appendChild(createKey(key, layout)));
    container.appendChild(rowEl);
  });
}

export function setKeyboardState(container, { target, pressed, mistake }) {
  container.querySelectorAll(".key").forEach((keyEl) => {
    keyEl.classList.toggle("target", keyEl.dataset.key === normalizeKey(target));
    keyEl.classList.toggle("pressed", keyEl.dataset.key === normalizeKey(pressed));
    keyEl.classList.toggle("mistake", keyEl.dataset.key === normalizeKey(mistake));
  });
}

function createKey(key, layout) {
  const el = document.createElement("div");
  const normalized = normalizeKey(key);
  el.className = `key${normalized === "space" ? " space" : ""}${key.length > 1 && normalized !== "space" ? " wide" : ""}`;
  el.dataset.key = normalized;
  el.textContent = normalized === "space" ? "space" : key;
  if (layout.homeKeys?.includes(key)) {
    const mark = document.createElement("small");
    mark.textContent = "home";
    el.appendChild(mark);
  }
  return el;
}

function normalizeKey(key) {
  return key === " " ? "space" : key;
}
