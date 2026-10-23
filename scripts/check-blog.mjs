// Lints blog articles against the editorial checklist in docs/seo-plan.md.
//   node scripts/check-blog.mjs          # all posts
//   node scripts/check-blog.mjs en/slug  # one post
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { localeKeys } from '../src/content.js';

const BANNED = [
  /in today'?s fast-paced world/i, /\bunlock(s|ed|ing)?\b/i, /\bseamless(ly)?\b/i, /\belevate\b/i, /\bdelve\b/i,
  /game-?changer/i, /\bdünyasına adım/i, /\bkeşfedin\b/i, /\bbenzersiz\b/i, /\bnahtlos\b/i, /entdecke die welt/i,
  /—/, /!(?!\[)/,
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
    const words = content.replace(/\{\{cta\}\}/g, '').split(/\s+/).filter(Boolean).length;
    const min = lang === 'en' ? 1500 : 1300;
    if (words < min || words > 2800) warn(id, `body is ${words} words (expected ${min}-2800)`);
    if (!data.title || data.title.length > 70) warn(id, `title missing or > 70 chars (${data.title?.length})`);
    if (!data.description || data.description.length < 120 || data.description.length > 165)
      warn(id, `description length ${data.description?.length ?? 0} (expected 120-165)`);
    if (!data.key) warn(id, 'missing key');
    if (data.lang !== lang) warn(id, `lang field "${data.lang}" does not match folder`);
    const faq = Array.isArray(data.faq) ? data.faq : [];
    if (faq.length < 3) warn(id, `only ${faq.length} FAQ items`);
    for (const item of faq) {
      const n = String(item.a ?? '').split(/\s+/).length;
      if (n < 18 || n > 110) warn(id, `FAQ answer "${String(item.q).slice(0, 40)}" is ${n} words`);
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
    const external = (content.match(/\]\(https?:\/\//g) ?? []).length;
    if (!external) warn(id, 'no external link to a source');
    for (const pattern of BANNED) {
      const hit = content.match(pattern) ?? data.description?.match(pattern) ?? data.title?.match(pattern);
      if (hit) warn(id, `banned pattern ${pattern}: "${hit[0]}"`);
    }
    console.log(`${id}: ${words} words, ${h2} H2, ${faq.length} FAQ, ${sameLang.length} internal, ${external} external`);
  }
}
console.log(problems ? `\n${problems} problem(s)` : '\nall clear');
process.exitCode = problems ? 1 : 0;
