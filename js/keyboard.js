function renderKeyboard(container, layout) {
  container.innerHTML = "";
  layout.rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";
    row.forEach((key) => rowEl.appendChild(createKey(key, layout)));
    container.appendChild(rowEl);
  });
  container.appendChild(createFingerLegend());
}
window.TypingGim.renderKeyboard = renderKeyboard;

function setKeyboardState(container, { target, pressed, mistake }) {
  container.querySelectorAll(".key").forEach((keyEl) => {
    keyEl.classList.toggle("target", keyMatches(keyEl.dataset.key, target));
    keyEl.classList.toggle("pressed", keyMatches(keyEl.dataset.key, pressed));
    keyEl.classList.toggle("mistake", keyMatches(keyEl.dataset.key, mistake));
  });
}
window.TypingGim.setKeyboardState = setKeyboardState;

function createKey(key, layout) {
  const el = document.createElement("div");
  const normalized = normalizeKey(key);
  const finger = getFingerForKey(key, layout);
  el.className = `key finger-${finger.toLowerCase()}${normalized === "space" ? " space" : ""}${key.length > 1 && normalized !== "space" ? " wide" : ""}`;
  el.dataset.key = normalized;
  el.dataset.finger = finger;
  el.textContent = normalized === "space" ? "space" : key;
  if (layout.homeKeys?.includes(key)) {
    const mark = document.createElement("small");
    mark.textContent = "home";
    el.appendChild(mark);
  }
  return el;
}

function createFingerLegend() {
  const legend = document.createElement("div");
  legend.className = "finger-legend";
  legend.setAttribute("aria-label", "Finger color legend");

  [
    ["Left hand", [["L5", "Pinky"], ["L4", "Ring"], ["L3", "Middle"], ["L2", "Index"], ["LT", "Thumb"]]],
    ["Right hand", [["RT", "Thumb"], ["R2", "Index"], ["R3", "Middle"], ["R4", "Ring"], ["R5", "Pinky"]]]
  ].forEach(([title, fingers]) => {
    const group = document.createElement("div");
    group.className = "finger-legend-group";
    const heading = document.createElement("span");
    heading.className = "finger-legend-title";
    heading.textContent = title;
    group.appendChild(heading);

    fingers.forEach(([finger, label]) => {
      const item = document.createElement("span");
      item.className = `finger-legend-item finger-${finger.toLowerCase()}`;
      item.innerHTML = `<span class="finger-swatch" aria-hidden="true"></span>${label}`;
      group.appendChild(item);
    });

    legend.appendChild(group);
  });

  return legend;
}

function getFingerForKey(key, layout) {
  const normalized = normalizeKey(key);
  if (normalized === "space") return "LT";
  return layout.fingers?.[key] || layout.fingers?.[normalized] || inferredFingerMap[key] || "R5";
}

function normalizeKey(key) {
  if (key === " ") return "space";
  if (typeof key !== "string") return key;
  return key.length === 1 ? (shiftedKeyMap[key] || key).toLocaleLowerCase() : key;
}

function keyMatches(key, target) {
  if (!target) return false;
  return normalizeKeyOptions(target).includes(key);
}

function normalizeKeyOptions(key) {
  if (key === " ") return ["space"];
  if (typeof key !== "string") return [key];
  const normalized = normalizeKey(key);
  const options = shiftedKeyOptions[key] || [];
  return [normalized, ...options.map((option) => normalizeKey(option))];
}

const shiftedKeyMap = {
  "!": "1",
  "@": "2",
  "#": "3",
  "$": "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  "_": "-",
  "+": "=",
  "{": "[",
  "}": "]",
  ":": ";",
  "\"": "'",
  "?": "/",
  "<": ",",
  ">": "."
};

const shiftedKeyOptions = {
  ":": [";", "."],
  "\"": ["'", "2"],
  "?": ["/", "'"],
  "(": ["9", "8"],
  ")": ["0", "9"],
  "[": ["[", "è"],
  "]": ["]", "+"],
  "{": ["[", "è"],
  "}": ["]", "+"]
};

const inferredFingerMap = {
  "`": "L5",
  "\\": "L5",
  "1": "L5",
  "q": "L5",
  "a": "L5",
  "z": "L5",
  "2": "L4",
  "w": "L4",
  "s": "L4",
  "x": "L4",
  "3": "L3",
  "e": "L3",
  "d": "L3",
  "c": "L3",
  "4": "L2",
  "5": "L2",
  "r": "L2",
  "t": "L2",
  "f": "L2",
  "g": "L2",
  "v": "L2",
  "b": "L2",
  "6": "R2",
  "7": "R2",
  "y": "R2",
  "u": "R2",
  "h": "R2",
  "j": "R2",
  "n": "R2",
  "m": "R2",
  "8": "R3",
  "i": "R3",
  "k": "R3",
  ",": "R3",
  "9": "R4",
  "o": "R4",
  "l": "R4",
  ".": "R4",
  "0": "R5",
  "-": "R5",
  "=": "R5",
  "'": "R5",
  "ì": "R5",
  "p": "R5",
  "[": "R5",
  "]": "R5",
  "è": "R5",
  "+": "R5",
  ";": "R5",
  "#": "R5",
  "ò": "R5",
  "à": "R5",
  "/": "R5"
};
