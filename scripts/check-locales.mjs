// Validates a locale file against the English source of truth.
//   node scripts/check-locales.mjs            # every file in src/locales except en
//   node scripts/check-locales.mjs es fr      # specific locales
// Errors (exit 1): shape mismatch, empty strings, bad identity fields, search hints with no result.
// Warnings: strings left identical to English, em dashes, meta lengths.
import { readdirSync } from 'node:fs';

const en = (await import('../src/locales/en.js')).default;
const requested = process.argv.slice(2);
const langs = requested.length
  ? requested
  : readdirSync('src/locales').filter((f) => f.endsWith('.js')).map((f) => f.replace(/\.js$/, '')).filter((l) => l !== 'en');

// Same normalisation as fold() in src/App.jsx.
function fold(value, lang) {
  return value.toLocaleLowerCase(lang).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/ß/g, 'ss');
}

const KEEP = new Set(['VoyageLog', 'JSON', 'Excel', 'ZIP', 'PDF', 'App Store', 'Google Play']);
let failed = false;

for (const lang of langs) {
  const errors = [];
  const warnings = [];
  let loc;
  try {
    loc = (await import(`../src/locales/${lang}.js`)).default;
  } catch (e) {
    console.log(`${lang}: cannot load (${e.message})`);
    failed = true;
    continue;
  }

  const walk = (a, b, path) => {
    if (Array.isArray(a)) {
      if (!Array.isArray(b)) return errors.push(`${path}: expected array`);
      if (a.length !== b.length) errors.push(`${path}: expected ${a.length} items, got ${b.length}`);
      a.forEach((item, i) => b[i] !== undefined && walk(item, b[i], `${path}[${i}]`));
    } else if (a && typeof a === 'object') {
      if (!b || typeof b !== 'object') return errors.push(`${path}: expected object`);
      for (const key of Object.keys(a)) {
        if (!(key in b)) errors.push(`${path}.${key}: missing`);
        else walk(a[key], b[key], `${path}.${key}`);
      }
      for (const key of Object.keys(b)) if (!(key in a)) errors.push(`${path}.${key}: unexpected key`);
    } else if (typeof a === 'string') {
      if (typeof b !== 'string' || !b.trim()) return errors.push(`${path}: empty or not a string`);
      const identity = /(^|\.)(id|screen|kind|assetLocale)$/.test(path);
      if (identity && a !== b) errors.push(`${path}: must stay "${a}"`);
      if (!identity && a === b && a.length > 25 && !KEEP.has(a)) warnings.push(`${path}: identical to English`);
      if (b.includes('—')) warnings.push(`${path}: contains an em dash`);
    } else if (typeof a === 'number') {
      if (a !== b) errors.push(`${path}: number must stay ${a}`);
    }
  };

  const { label, shortLabel, htmlLang, ogLocale, path, dir, assetLocale, ...rest } = loc;
  const { label: _l, shortLabel: _s, htmlLang: _h, ogLocale: _o, path: _p, assetLocale: _a, ...enRest } = en;
  walk(enRest, rest, lang);
  // Only en, de and tr have localized screenshots; every other locale reuses en-US.
  if (!['de', 'tr'].includes(lang) && assetLocale !== 'en-US') errors.push('assetLocale must be "en-US"');

  // htmlLang doubles as the hreflang value; zh targets mainland readers (Simplified script).
  const expectedHtmlLang = lang === 'zh' ? 'zh-Hans' : lang;
  if (htmlLang !== expectedHtmlLang) errors.push(`htmlLang must be "${expectedHtmlLang}"`);
  if (path !== `/${lang}/`) errors.push(`path must be "/${lang}/"`);
  if (!/^[a-z]{2}_[A-Z]{2}$/.test(ogLocale ?? '')) errors.push('ogLocale must look like es_ES');
  if (!label?.trim()) errors.push('label (native language name) missing');
  if (!/^[A-Z]{2,3}$/.test(shortLabel ?? '')) errors.push('shortLabel must be the uppercase code, e.g. ES');
  if (dir !== undefined && dir !== 'rtl') errors.push('dir may only be "rtl"');
  if (['ar', 'he'].includes(lang) && dir !== 'rtl') errors.push('right-to-left language needs dir: "rtl"');

  // Search demo: every hint must find something, as in the live component.
  const s = loc.search;
  if (s?.entries && s?.hints) {
    for (const hint of s.hints) {
      const tokens = fold(hint, lang).split(/\s+/).filter(Boolean);
      const hit = s.entries.some((e) => {
        const hay = fold([e.title, e.notes, e.tags.join(' '), e.trip].join(' '), lang);
        return tokens.every((t) => hay.includes(t));
      });
      if (!hit) errors.push(`search.hints: "${hint}" matches no entry`);
    }
    for (const [i, e] of s.entries.entries()) {
      if (!Array.isArray(e.tags) || e.tags.length !== en.search.entries[i].tags.length) errors.push(`search.entries[${i}].tags: wrong count`);
    }
  }

  if (loc.metaTitle?.length > 70) warnings.push(`metaTitle is ${loc.metaTitle.length} chars (max ~70)`);
  const dl = loc.metaDescription?.length ?? 0;
  if (dl < 60 || dl > 170) warnings.push(`metaDescription is ${dl} chars (aim 120-160, CJK/Arabic 60-110)`);

  console.log(`${lang}: ${errors.length} errors, ${warnings.length} warnings`);
  errors.forEach((e) => console.log(`  ERROR ${e}`));
  warnings.forEach((w) => console.log(`  warn  ${w}`));
  if (errors.length) failed = true;
}
process.exit(failed ? 1 : 0);
