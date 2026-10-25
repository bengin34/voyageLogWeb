// IndexNow: tells Bing, Yandex, Seznam, Naver and others which URLs changed, instead of waiting for a crawl.
//   node scripts/indexnow.mjs diff <live-sitemap-url> <new-sitemap-file>   # prints new or changed URLs
//   node scripts/indexnow.mjs submit <file-with-one-url-per-line>         # sends them
// The key file public/<KEY>.txt must be live before submitting.
import { readFile } from 'node:fs/promises';
import { DOMAIN } from '../src/content.js';

const KEY = '96211eef77ed11796b5639675464d814';

function entries(xml) {
  return new Map(
    [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]),
  );
}

const [mode, a, b] = process.argv.slice(2);

if (mode === 'diff') {
  const res = await fetch(a);
  const live = res.ok ? entries(await res.text()) : new Map();
  const next = entries(await readFile(b, 'utf8'));
  const changed = [...next].filter(([loc, lastmod]) => live.get(loc) !== lastmod).map(([loc]) => loc);
  if (changed.length) console.log(changed.join('\n'));
} else if (mode === 'submit') {
  const urls = (await readFile(a, 'utf8')).split('\n').map((line) => line.trim()).filter(Boolean);
  if (!urls.length) {
    console.log('IndexNow: nothing to submit');
    process.exit(0);
  }
  const host = new URL(DOMAIN).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key: KEY, keyLocation: `${DOMAIN}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
  });
  console.log(`IndexNow: ${urls.length} URLs, HTTP ${res.status}`);
  if (res.status >= 400) process.exit(1);
} else {
  console.error('usage: indexnow.mjs diff <live-sitemap-url> <sitemap-file> | submit <url-file>');
  process.exit(2);
}
