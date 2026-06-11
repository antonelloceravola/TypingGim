const scriptLoadPromises = new Map();

window.TypingGim.loadContent = async function loadContent() {
  const manifest = window.TypingGimContentManifest;

  if (!manifest) {
    throw new Error("TypingGimContentManifest not found. Make sure content-manifest.js is loaded before js/exercise-loader.js.");
  }

  await loadCategoryScripts("layouts", manifest.layouts);
  await loadCategoryScripts("generators", manifest.generators);
  await loadCategoryScripts("games", manifest.games);
  await loadCategoryScripts("profiles", manifest.profiles);
  await loadCategoryScripts("exercises", manifest.exercises);

  return normalize(window.TypingGimContent, manifest);
};

function loadCategoryScripts(category, names) {
  return Promise.all(names.map((name) => loadScript(`${category}/${name}.js`)));
}

function loadScript(src) {
  if (scriptLoadPromises.has(src)) {
    return scriptLoadPromises.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-typinggim-src="${src}"]`);
    if (existing) {
      if (existing.dataset.typinggimLoaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`Failed to load script: ${src}`)), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.typinggimSrc = src;
    script.onload = () => {
      script.dataset.typinggimLoaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });

  scriptLoadPromises.set(src, promise);
  return promise;
}

function normalize(content, manifest) {
  const exercisesById = new Map(content.exercises.map((exercise) => [exercise.id, exercise]));
  const result = {
    ...content,
    exercises: manifest.exercises.map((id) => exercisesById.get(id)).filter(Boolean),
    layoutsById: Object.fromEntries(content.layouts.map((item) => [item.id, item])),
    generatorsById: Object.fromEntries(content.generators.map((item) => [item.id, item])),
    gamesById: Object.fromEntries(content.games.map((item) => [item.id, item])),
    profile: content.profiles[0]
  };

  return result;
}
