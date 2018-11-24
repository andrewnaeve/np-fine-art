export const slugToTitle = slug =>
  slug
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
