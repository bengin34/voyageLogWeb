// Length helpers shared by the blog builder, the OG image script and the linter.
// CJK text has no spaces, so it is measured in characters instead of words.
export const CJK_LANGS = new Set(['ja', 'ko', 'zh']);
const CHARS_PER_MINUTE = { ja: 500, ko: 500, zh: 400 };

function plain(markdown) {
  return markdown
    .replace(/\{\{cta\}\}/g, ' ')
    .replace(/\]\([^)]*\)/g, ' ')
    .replace(/[#*_`>|\-]/g, ' ');
}

export function textLength(markdown) {
  return [...plain(markdown).matchAll(/[\p{L}\p{N}]/gu)].length;
}

export function wordCount(markdown) {
  return plain(markdown).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(markdown, lang) {
  const minutes = CJK_LANGS.has(lang) ? textLength(markdown) / CHARS_PER_MINUTE[lang] : wordCount(markdown) / 220;
  return Math.max(1, Math.round(minutes));
}
