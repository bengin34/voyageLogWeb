// Converts the app's raw screen captures into the WebP files the site serves.
//
//   node scripts/screens.mjs [capture-dir]
//
// capture-dir defaults to the app repo's store-screenshot captures
// (voyageLog/tools/screenshots/screens_i18n), one folder per App Store locale
// named like each site locale's assetLocale. They are the same captures the
// fastlane store screenshots are composited from, so the site and the store
// listing always show the same app build. Re-run after every capture run.
//
// Output: public/assets/app/<assetLocale>/<name>.webp (1206 wide, for 2x
// screens) and <name>@1x.webp (603 wide).
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { locales as siteLocales } from '../src/content.js';

export const SCREEN_W = 1206;
export const SCREEN_H = 2622;

// site screen -> capture file. Screens with no capture (journal, capture,
// insights) keep their older WebP; a locale that never had one gets
// the en-US copy so no image 404s.
const CAPTURES = {
  timeline: 'trips_hero.png',
  cities: 'trip_italy.png',
  details: 'entry_duomo.png',
  bestof: 'bestof_detail.png',
};
const UNCAPTURED = ['journal', 'capture', 'insights'];

const source = process.argv[2] ?? join('..', '..', 'APPS', 'voyageLog', 'tools', 'screenshots', 'screens_i18n');
if (!existsSync(source)) {
  console.error(`no capture dir at ${source}\nusage: node scripts/screens.mjs [capture-dir]`);
  process.exit(1);
}

const outRoot = join('public', 'assets', 'app');
const assetLocales = [...new Set(Object.values(siteLocales).map((l) => l.assetLocale))];

for (const locale of assetLocales) {
  const outDir = join(outRoot, locale);
  mkdirSync(outDir, { recursive: true });
  for (const [name, file] of Object.entries(CAPTURES)) {
    const input = join(source, locale, file);
    if (!existsSync(input)) {
      console.warn(`skip ${locale}/${name}: no ${input}`);
      continue;
    }
    const screen = sharp(input);
    await screen.clone().resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).webp({ quality: 82 }).toFile(join(outDir, `${name}.webp`));
    await screen.clone().resize(SCREEN_W / 2, SCREEN_H / 2, { fit: 'cover' }).webp({ quality: 82 }).toFile(join(outDir, `${name}@1x.webp`));
    console.log(`${locale}/${name}`);
  }
  for (const name of UNCAPTURED) {
    for (const suffix of ['', '@1x']) {
      const target = join(outDir, `${name}${suffix}.webp`);
      if (!existsSync(target)) copyFileSync(join(outRoot, 'en-US', `${name}${suffix}.webp`), target);
    }
  }
}
