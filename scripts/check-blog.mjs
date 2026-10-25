// Lints blog articles against the editorial checklist in docs/seo-plan.md.
//   node scripts/check-blog.mjs          # all posts
//   node scripts/check-blog.mjs en/slug  # one post
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { localeKeys } from '../src/content.js';
import { CJK_LANGS, textLength, wordCount } from './text.mjs';

const BANNED = [
  /in today'?s fast-paced world/i, /\bunlock(s|ed|ing)?\b/i, /\bseamless(ly)?\b/i, /\belevate\b/i, /\bdelve\b/i,
  /game-?changer/i, /\bdünyasına adım/i, /\bkeşfedin\b/i, /\bbenzersiz\b/i, /\bnahtlos\b/i, /entdecke die welt/i,
  /—/, /!(?!\[)/, /！/, /いかがでしたか/, /让我们一起/, /随着.{0,10}的(发展|普及)/, /여러분/,
];
const only = process.argv[2];
let problems = 0;

function warn(file, msg) {
  problems += 1;
  console.log(`  ${file}: ${msg}`);
}

for (const lang of localeKeys) {
  let files = [];
  try {
    files = (await readdir(join('content/blog', lang))).filter((f) => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const file of files) {
    const id = `${lang}/${file.replace(/\.md$/, '')}`;
    if (only && id !== only) continue;
    const raw = await readFile(join('content/blog', lang, file), 'utf8');
    const { data, content } = matter(raw);
    const cjk = CJK_LANGS.has(lang);
    // CJK is measured in characters, everything else in words.
    const limits = {
      ja: { min: 3000, max: 9000 },
      ko: { min: 2600, max: 8000 },
      zh: { min: 2200, max: 7000 },
    };
    const size = cjk ? textLength(content) : wordCount(content);
    const unit = cjk ? 'characters' : 'words';
    const { min, max } = limits[lang] ?? { min: lang === 'en' ? 1500 : lang === 'ar' ? 1100 : 1300, max: 2800 };
    if (size < min || size > max) warn(id, `body is ${size} ${unit} (expected ${min}-${max})`);
    const maxTitle = cjk ? 42 : 70;
    if (!data.title || data.title.length > maxTitle) warn(id, `title missing or > ${maxTitle} chars (${data.title?.length})`);
    const [dMin, dMax] = cjk ? [50, 125] : [120, 165];
    if (!data.description || data.description.length < dMin || data.description.length > dMax)
      warn(id, `description length ${data.description?.length ?? 0} (expected ${dMin}-${dMax})`);
    if (!data.key) warn(id, 'missing key');
    if (data.lang !== lang) warn(id, `lang field "${data.lang}" does not match folder`);
    const faq = Array.isArray(data.faq) ? data.faq : [];
    if (faq.length < 3) warn(id, `only ${faq.length} FAQ items`);
    for (const item of faq) {
      const answer = String(item.a ?? '');
      const n = cjk ? textLength(answer) : answer.split(/\s+/).length;
      const [lo, hi] = cjk ? [40, 260] : [18, 110];
      if (n < lo || n > hi) warn(id, `FAQ answer "${String(item.q).slice(0, 40)}" is ${n} ${unit}`);
    }
    const ctas = (content.match(/\{\{cta\}\}/g) ?? []).length;
    if (ctas !== 1) warn(id, `{{cta}} appears ${ctas} times (expected 1)`);
    if (/^#\s/m.test(content.replace(/^\s*#\s+.*\n/, ''))) warn(id, 'body contains an H1 beyond the leading one');
    const h2 = (content.match(/^##\s/gm) ?? []).length;
    if (h2 < 4) warn(id, `only ${h2} H2 sections`);
    const internal = [...content.matchAll(/\]\((\/[a-z]{2}\/[^)\s]+)\)/g)].map((m) => m[1]);
    const sameLang = internal.filter((href) => href.startsWith(`/${lang}/`) && href.includes('/blog/'));
    if (sameLang.length < 2) warn(id, `only ${sameLang.length} internal blog links`);
    const wrongLang = internal.filter((href) => !href.startsWith(`/${lang}/`));
    if (wrongLang.length) warn(id, `links to other language: ${wrongLang.join(', ')}`);
    // Slugs get localized, so every blog link must point at an article that exists.
    const broken = sameLang.filter((href) => {
      const slug = href.split('/blog/')[1].split(/[/#]/)[0];
      return slug && !existsSync(join('content/blog', lang, `${slug}.md`));
    });
    if (broken.length) warn(id, `links to missing articles: ${broken.join(', ')}`);
    // The English home page lives at /, and /en/ only canonicalizes to it.
    if (lang === 'en' && /\]\(\/en\/(#[^)]*)?\)/.test(content)) warn(id, 'links home as /en/ (use /)');
    // House rule since 2026-10-22: new articles carry no citations or source links.
    // Older en/de/tr posts still have a few, so this is reported, not flagged.
    const external = (content.match(/\]\(https?:\/\//g) ?? []).length;
    for (const pattern of BANNED) {
      const hit = content.match(pattern) ?? data.description?.match(pattern) ?? data.title?.match(pattern);
      if (hit) warn(id, `banned pattern ${pattern}: "${hit[0]}"`);
    }
    console.log(`${id}: ${size} ${unit}, ${h2} H2, ${faq.length} FAQ, ${sameLang.length} internal, ${external} external`);
  }
}
console.log(problems ? `\n${problems} problem(s)` : '\nall clear');
process.exitCode = problems ? 1 : 0;
