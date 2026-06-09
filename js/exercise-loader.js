import { fallbackContent } from "./fallback-content.js";

export async function loadContent() {
  try {
    const manifest = await fetchJson("content-manifest.json");
    const [layouts, exercises, generators, games, profiles] = await Promise.all([
      loadAll(manifest.layouts),
      loadAll(manifest.exercises),
      loadAll(manifest.generators),
      loadAll(manifest.games),
      loadAll(manifest.profiles)
    ]);
    return normalize({ layouts, exercises, generators, games, profiles });
  } catch (error) {
    console.warn("Using bundled TypingGim content fallback.", error);
    return normalize(fallbackContent);
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

function normalize(content) {
  return {
    ...content,
    layoutsById: Object.fromEntries(content.layouts.map((item) => [item.id, item])),
    generatorsById: Object.fromEntries(content.generators.map((item) => [item.id, item])),
    gamesById: Object.fromEntries(content.games.map((item) => [item.id, item])),
    profile: content.profiles[0]
  };
}
