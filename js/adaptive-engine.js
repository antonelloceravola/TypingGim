import { getKeySummary } from "./statistics.js";

export function findWeakKeys(state, lessonKeys, profile) {
  const params = profile.adaptive || {};
  return lessonKeys
    .map((key) => ({ key, ...getKeySummary(state, key) }))
    .filter((entry) => entry.errorRate >= (params.weakKeyErrorRate || 0.12) || entry.avgReactionMs >= (params.slowKeyMs || 900))
    .sort((a, b) => (b.errorRate + b.avgReactionMs / 4000) - (a.errorRate + a.avgReactionMs / 4000))
    .map((entry) => entry.key);
}

export function getAdaptiveHint(state, lessonKeys, profile) {
  const weakKeys = findWeakKeys(state, lessonKeys, profile);
  if (!weakKeys.length) return "Balanced practice";
  return `Boosting ${weakKeys.slice(0, 3).join(" ")}`;
}

export function shouldRepeatWrongKey(profile) {
  return Boolean(profile.adaptive?.repeatWrongKeyImmediately);
}
