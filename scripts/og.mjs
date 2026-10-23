// Renders a 1200x630 Open Graph image for every blog post.
//
//   node scripts/og.mjs            # only posts without an image yet
//   node scripts/og.mjs --force    # redraw all
//
// Output: public/assets/blog/og/<lang>/<slug>.png. Commit the PNGs; the build
// does not run this (CI has no brand fonts). blog.mjs picks the file up
// automatically when it exists.
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';
import { localeKeys, locales } from '../src/content.js';

const W = 1200;
const H = 630;
const force = process.argv.includes('--force');
const contentDir = 'content/blog';
const outRoot = join('public', 'assets', 'blog', 'og');
const FONT = "'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const icon = await readFile(join('public', 'assets', 'icon-512.png'));
const iconUri = `data:image/png;base64,${icon.toString('base64')}`;

function esc(s) {
  return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

// Greedy wrap by estimated glyph width (0.52em average for a humanist sans).
function wrap(text, fontSize, maxWidth) {
  const perChar = fontSize * 0.52;
  const max = Math.floor(maxWidth / perChar);
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function fit(title) {
  for (const size of [64, 58, 52, 46, 42]) {
    const lines = wrap(title, size, W - 2 * 88);
    if (lines.length <= 4) return { size, lines };
  }
  const lines = wrap(title, 40, W - 2 * 88).slice(0, 4);
  return { size: 40, lines };
}

function svg({ title, lang, minutes }) {
  const { size, lines } = fit(title);
  const lineHeight = size * 1.08;
  const blockHeight = lines.length * lineHeight;
  const top = (H - blockHeight) / 2 + size * 0.1 + 20;
  const tspans = lines
    .map((line, i) => `<tspan x="88" y="${(top + i * lineHeight).toFixed(1)}">${esc(line)}</tspan>`)
    .join('');
  const label = `${locales[lang].blog.label} · ${minutes} ${locales[lang].blog.readTime}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#e1dfdd"/>
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="28" fill="#f4f4f3"/>
  <rect x="88" y="${(top - size * 0.95 - 34).toFixed(1)}" width="72" height="6" rx="3" fill="#ff6848"/>
  <image href="${iconUri}" x="88" y="64" width="56" height="56"/>
  <text x="160" y="104" font-family="${FONT}" font-size="30" font-weight="500" fill="#172331">VoyageLog</text>
  <text font-family="${FONT}" font-size="${size}" font-weight="300" letter-spacing="-1.5" fill="#172331">${tspans}</text>
  <text x="88" y="${H - 72}" font-family="${FONT}" font-size="24" fill="#465362">${esc(label)}</text>
  <text x="${W - 88}" y="${H - 72}" text-anchor="end" font-family="${FONT}" font-size="24" fill="#465362">getvoyagelog.app</text>
</svg>`;
}

function minutesOf(markdown) {
  const words = markdown.replace(/[#*_`>|\-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

let made = 0;
for (const lang of localeKeys) {
  const dir = join(contentDir, lang);
  if (!existsSync(dir)) continue;
  const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
  await mkdir(join(outRoot, lang), { recursive: true });
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const out = join(outRoot, lang, `${slug}.png`);
    if (existsSync(out) && !force) continue;
    const { data, content } = matter(await readFile(join(dir, file), 'utf8'));
    const image = svg({ title: data.title, lang, minutes: minutesOf(content) });
    await sharp(Buffer.from(image), { density: 144 }).resize(W, H).png({ compressionLevel: 9, palette: true }).toFile(out);
    made += 1;
    console.log('og', out);
  }
}
console.log(`${made} image(s) written`);
