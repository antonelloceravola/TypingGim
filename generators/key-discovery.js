window.TypingGimContent.generators.push({
  id: "key-discovery",
  name: "Key Discovery",
  type: "keyDiscovery",
  description: "Prompts single keys from across the keyboard.",
  count: 18,

  generate(context) {
    const h = context.helpers;
    const source = context.config.keys?.length ? context.config.keys : context.keys;
    const keys = source.length ? source : flattenLayoutKeys(context.layout);
    const count = context.config.count || 18;

    return h.pickMany(keys, count).join(" ");
  }
});

function flattenLayoutKeys(layout) {
  return layout.rows
    .flat()
    .map((key) => key === "space" ? " " : key)
    .filter((key) => key.length === 1 || key === " ");
}
