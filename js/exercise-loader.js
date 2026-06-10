window.TypingGim.loadContent = async function loadContent() {
  const manifest = window.TypingGimContentManifest;

  if (!manifest) {
    throw new Error("TypingGimContentManifest not found. Make sure content-manifest.js is loaded before js/exercise-loader.js.");
  }

  await loadCategoryScripts("layouts", manifest.layouts);
  await loadCategoryScripts("generators", manifest.generators);
  await loadCategoryScripts("games", manifest.games);
  await loadCategoryScripts("profiles", manifest.profiles);
  await loadCategoryScripts("exercises", manifest.exercises.sort());

  return normalize(window.TypingGimContent);
};

function loadCategoryScripts(category, names) {
  return Promise.all(names.map((name) => loadScript(`${category}/${name}.js`)));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-typinggim-src="${src}"]`);

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.typinggimSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

function normalize(content) {
  return {
    ...content,
    layoutsById: Object.fromEntries(content.layouts.map((item) => [item.id, item])),
    generatorsById: Object.fromEntries(content.generators.map((item) => [item.id, item])),
    gamesById: Object.fromEntries(content.games.map((item) => [item.id, item])),
    profile: content.profiles[0]
  };
}