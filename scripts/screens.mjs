// Converts raw app screenshots into the WebP files the site serves.
//
//   node scripts/screens.mjs <source-dir>
//
// <source-dir> holds one folder per locale (en-US, de-DE, tr) with the raw
// full-screen captures named 1.png … 10.png (or 01_*.png … 10_*.png) in the order of SCREEN_ORDER.
// Output: public/assets/app/<locale>/<name>.webp (1206 wide, for 2x screens)
// and <name>@1x.webp (603 wide). Re-run whenever new captures arrive.
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { locales as siteLocales } from '../src/content.js';

export const SCREEN_ORDER = ['timeline', 'journal', 'trips', 'cities', 'details', 'search', 'filters', 'capture', 'bestof', 'insights'];
export const SCREEN_W = 1206;
export const SCREEN_H = 2622;

// A raw capture is used as it is. An App Store marketing frame (1320×2868, the
// screen drawn inside a device on an orange field) is cropped to its screen.
const MARKETING = { width: 1320, height: 2868, left: 161, top: 606, width_: 998, height_: 2169 };

async function extractScreen(input) {
  const image = sharp(input);
  const { width, height } = await image.metadata();
  if (width === MARKETING.width && height === MARKETING.height) {
    return image.extract({ left: MARKETING.left, top: MARKETING.top, width: MARKETING.width_, height: MARKETING.height_ });
  }
  return image;
}

const source = process.argv[2];
if (!source || !existsSync(source)) {
  console.error('usage: node scripts/screens.mjs <source-dir with en-US/, de-DE/, tr/>');
  process.exit(1);
}

const outRoot = join('public', 'assets', 'app');
const wanted = new Set(Object.values(siteLocales).map((l) => l.assetLocale));
const locales = readdirSync(source, { withFileTypes: true })
  .filter((d) => d.isDirectory() && wanted.has(d.name))
  .map((d) => d.name);

for (const locale of locales) {
  const outDir = join(outRoot, locale);
  mkdirSync(outDir, { recursive: true });
  for (const [index, name] of SCREEN_ORDER.entries()) {
    const number = index + 1;
    const padded = String(number).padStart(2, '0');
    const input = readdirSync(join(source, locale))
      .filter((file) => file === `${number}.png` || file.startsWith(`${padded}_`))
      .map((file) => join(source, locale, file))[0];
    if (!input || !existsSync(input)) {
      console.warn(`skip ${locale}/${name}: no ${number}.png or ${padded}_*.png`);
      continue;
    }
    const screen = await extractScreen(input);
    await screen.clone().resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).webp({ quality: 82 }).toFile(join(outDir, `${name}.webp`));
    await screen.clone().resize(SCREEN_W / 2, SCREEN_H / 2, { fit: 'cover' }).webp({ quality: 82 }).toFile(join(outDir, `${name}@1x.webp`));
    console.log(`${locale}/${name}`);
  }
}
