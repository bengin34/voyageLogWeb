// Guard for blog edits: checks that an edited article kept everything an editor may not change.
//
//   node .claude/skills/blog-editor-core/guard.mjs <lang>/<slug> --save   # before the first edit
//   node .claude/skills/blog-editor-core/guard.mjs <lang>/<slug>          # after editing, compare
//
// --save copies the untouched article to <tmpdir>/voyagelog-blog-editor/<lang>/<slug>.md
// (only if no snapshot exists yet; add --force to overwrite). The compare run reads that snapshot.
// It complements scripts/check-blog.mjs (lengths, banned patterns); it does not replace it.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import matter from 'gray-matter';

const [id, ...flags] = process.argv.slice(2);
if (!id || !/^[a-z]{2}\/[a-z0-9-]+$/.test(id)) {
  console.log('usage: node .claude/skills/blog-editor-core/guard.mjs <lang>/<slug> [--save [--force]]');
  process.exit(2);
}
const [lang, slug] = id.split('/');
const file = join('content/blog', lang, `${slug}.md`);
const snap = join(tmpdir(), 'voyagelog-blog-editor', lang, `${slug}.md`);
if (!existsSync(file)) {
  console.log(`not found: ${file} (run from the repo root; slug = file name without .md)`);
  process.exit(2);
}

if (flags.includes('--save')) {
  if (existsSync(snap) && !flags.includes('--force')) {
    console.log(`snapshot already exists, kept: ${snap}`);
  } else {
    await mkdir(dirname(snap), { recursive: true });
    await writeFile(snap, await readFile(file, 'utf8'));
    console.log(`snapshot saved: ${snap}`);
  }
  process.exit(0);
}

const errors = [];
const notes = [];
const err = (m) => errors.push(m);
const note = (m) => notes.push(m);

let now;
try {
  now = matter(await readFile(file, 'utf8'));
} catch (e) {
  console.log(`FRONTMATTER DOES NOT PARSE: ${e.message}`);
  process.exit(1);
}
const before = existsSync(snap) ? matter(await readFile(snap, 'utf8')) : null;
if (!before) note(`no snapshot at ${snap}; only absolute checks ran (run --save before editing next time)`);

const iso = (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ''));
const body = now.content;
const lines = body.split('\n');

// Frontmatter: same keys, same order; lang/key/date untouched; updated is a valid date.
const keysNow = Object.keys(now.data).join(',');
if (before) {
  const keysBefore = Object.keys(before.data).join(',');
  if (keysNow !== keysBefore) err(`frontmatter keys changed: [${keysBefore}] -> [${keysNow}]`);
  for (const k of ['lang', 'key']) if (now.data[k] !== before.data[k]) err(`${k} changed: ${before.data[k]} -> ${now.data[k]}`);
  if (iso(now.data.date) !== iso(before.data.date)) err(`date changed: ${iso(before.data.date)} -> ${iso(now.data.date)}`);
  if (now.data.title !== before.data.title) note('title changed: the OG image (public/assets/blog/og/) is now stale; say so in the report, do not regenerate it');
  const faqBefore = (before.data.faq ?? []).length;
  if ((now.data.faq ?? []).length !== faqBefore) err(`FAQ count changed: ${faqBefore} -> ${(now.data.faq ?? []).length}`);
}
if (now.data.lang !== lang) err(`lang field "${now.data.lang}" does not match folder ${lang}`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(iso(now.data.updated))) err(`updated is not YYYY-MM-DD: ${iso(now.data.updated)}`);
if (iso(now.data.updated) < iso(now.data.date)) err('updated is earlier than date');
const faq = now.data.faq ?? [];
if (faq.length !== 5) note(`FAQ has ${faq.length} items (house rule is exactly 5)`);
for (const [i, item] of faq.entries()) {
  if (!item?.q || !item?.a) err(`FAQ item ${i + 1} is missing q or a`);
  if (/\]\(|https?:\/\//.test(String(item?.a))) err(`FAQ item ${i + 1} contains a link (FAQ answers are plain text)`);
}

// Body structure.
const ctaLines = lines.map((l, i) => [l, i]).filter(([l]) => l.includes('{{cta}}'));
if (ctaLines.length !== 1) err(`{{cta}} appears on ${ctaLines.length} lines (expected exactly 1)`);
else {
  const [l, i] = ctaLines[0];
  if (l.trim() !== '{{cta}}') err('{{cta}} must be alone on its line');
  const pos = i / lines.length;
  if (pos < 0.2 || pos > 0.8) note(`{{cta}} sits at ${Math.round(pos * 100)}% of the body (aim for roughly the middle)`);
}
// The page H1 is rendered from `title`. A body H1 exists in most articles (brief format), not in some older ones.
const h1 = lines.filter((l) => /^#\s/.test(l));
if (h1.length > 1) err(`${h1.length} H1 lines (at most 1, as the first line of the body)`);
if (h1.length === 1 && lines.find((l) => l.trim()) !== h1[0]) err('the H1 is not the first line of the body');
if (before) {
  const h1Before = before.content.split('\n').filter((l) => /^#\s/.test(l)).length;
  if (h1Before !== h1.length) err(`H1 line added or removed (${h1Before} -> ${h1.length}); keep the article's original structure`);
}
const h2 = lines.filter((l) => /^##\s/.test(l));
if (h2.length < 6) note(`${h2.length} H2 sections (brief asks for at least 6)`);
const dupes = h2.filter((h, i) => h2.indexOf(h) !== i);
if (dupes.length) err(`duplicate H2: ${dupes.join(' | ')}`);

// Links: same-language blog targets must exist; nothing to other languages; no external links.
const slugs = new Set((await readdir(join('content/blog', lang))).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3)));
const links = (text) => [...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
const hrefs = links(body);
for (const href of hrefs) {
  if (/^https?:\/\//.test(href)) err(`external link: ${href} (house rule: none; unlink it and keep the verified fact as plain prose)`);
  else if (href.startsWith('/')) {
    if (!href.startsWith(`/${lang}/`)) err(`link to another language: ${href}`);
    const m = href.match(/^\/[a-z]{2}\/blog\/([a-z0-9-]+)\/$/);
    if (href.includes('/blog/') && (!m || !slugs.has(m[1]))) err(`internal link target does not exist or is malformed: ${href}`);
    if (m && m[1] === slug) err(`article links to itself: ${href}`);
  }
}
const blogLinks = hrefs.filter((h) => h.startsWith(`/${lang}/blog/`));
if (new Set(blogLinks).size < 2) err(`only ${new Set(blogLinks).size} distinct same-language blog links (need at least 2)`);
if (!hrefs.includes(`/${lang}/`)) note(`no link to the app home page /${lang}/ (add one where natural)`);
if (before) {
  const gone = [...new Set(links(before.content).filter((h) => h.startsWith('/')))].filter((h) => !hrefs.includes(h));
  if (gone.length) note(`internal link targets removed: ${gone.join(', ')} (allowed only if replaced by an equally relevant target)`);
}

// Punctuation the linter does not catch.
const prose = lines
  .filter((l) => !/^\s*\|/.test(l))
  .map((l) => l.replace(/^\s*([-*+]|\d+\.)\s+/, ''))
  .join('\n');
const spacedDash = prose.match(/[^\s\n] [–-] (?=\S)/g);
if (spacedDash) note(`${spacedDash.length} spaced dash(es) " – " / " - " used as sentence punctuation; rewrite them`);
const straight = (prose.replace(/\]\([^)]*\)/g, '').match(/"/g) ?? []).length;
if (straight) note(`${straight} straight double quote(s) in the body; use the language's typographic quotes if the skill says so`);
const fmStraight = [now.data.title, now.data.description, ...faq.flatMap((f) => [f?.q, f?.a])].join(' ').match(/"/g);
if (fmStraight) note(`${fmStraight.length} straight double quote(s) inside frontmatter values; replace with typographic quotes`);

console.log(`${id}: title "${now.data.title}" (${String(now.data.title).length} chars)`);
console.log(`  H1: ${h1[0] ?? '(none)'}`);
for (const n of notes) console.log(`  note: ${n}`);
for (const e of errors) console.log(`  ERROR: ${e}`);
console.log(errors.length ? `\n${errors.length} error(s): fix before reporting` : '\nguard: no protected element changed');
process.exitCode = errors.length ? 1 : 0;
