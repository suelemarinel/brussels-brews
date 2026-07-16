// Un café doit porter TOUS les tags actifs (intersection).
// Aucun tag actif = tous les cafés.
export function filterCafes(cafes, activeTags) {
  if (activeTags.length === 0) return cafes;
  return cafes.filter((cafe) =>
    activeTags.every((tag) => cafe.tags.includes(tag))
  );
}

// Ajoute ou retire un tag (toggle immuable)
export function toggleTag(activeTags, tag) {
  return activeTags.includes(tag)
    ? activeTags.filter((t) => t !== tag)
    : [...activeTags, tag];
}