import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  APP_STORE_URL,
  DOMAIN,
  GOOGLE_PLAY_URL,
  SUPPORT_EMAIL,
  absoluteUrl,
  getRouteAlternates,
  getRouteCanonical,
  localeKeys,
  locales,
} from '../src/content.js';

const distDir = 'dist';
const baseHtml = await readFile(join(distDir, 'index.html'), 'utf8');

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function escapeXml(value) {
  return escapeAttribute(value).replaceAll("'", '&apos;');
}

function setTag(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function getRouteMeta(route) {
  const content = locales[route.lang];

  return {
    htmlLang: content.htmlLang,
    ogLocale: content.ogLocale,
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

function createStructuredData(route, meta, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VoyageLog',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'iOS, Android',
    description: meta.description,
    url: canonical,
    image: absoluteUrl('/assets/icon-512.png'),
    sameAs: [APP_STORE_URL, GOOGLE_PLAY_URL],
    installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: localeKeys,
  };
}

function renderAlternates() {
  return getRouteAlternates()
    .map((alternate) => `<link rel="alternate" hreflang="${alternate.lang}" href="${escapeAttribute(alternate.href)}" />`)
    .join('\n    ');
}

const fallbackLabels = {
  en: {
    homes: 'Localized home pages',
    legal: 'Support and legal',
  },
  de: {
    homes: 'Lokalisierte Startseiten',
    legal: 'Support und Rechtliches',
  },
  tr: {
    homes: 'Yerelleştirilmiş ana sayfalar',
    legal: 'Destek ve yasal sayfalar',
  },
};

const legalLinks = {
  en: [
    { href: '/privacy/', label: 'Privacy Policy' },
    { href: '/terms/', label: 'Terms of Use' },
    { href: '/support/', label: 'Support' },
  ],
  de: [
    { href: '/privacy/', label: 'Datenschutz' },
    { href: '/terms/', label: 'Nutzungsbedingungen' },
    { href: '/support/', label: 'Support' },
    { href: '/impressum/', label: 'Impressum' },
  ],
  tr: [
    { href: '/privacy/', label: 'Gizlilik Politikası' },
    { href: '/terms/', label: 'Kullanım Şartları' },
    { href: '/support/', label: 'Destek' },
  ],
};

function renderFallbackSection(title, links) {
  if (!links.length) return '';

  const items = links
    .map((link) => `          <li><a href="${escapeAttribute(link.href)}">${escapeHtml(link.label)}</a></li>`)
    .join('\n');

  return `        <section>
          <h2>${escapeHtml(title)}</h2>
          <ul>
${items}
          </ul>
        </section>`;
}

function renderFallbackLinks(route) {
  const lang = route.lang ?? 'en';
  const content = locales[lang] ?? locales.en;
  const labels = fallbackLabels[lang] ?? fallbackLabels.en;
  const homeLinks = localeKeys.map((locale) => ({
    href: locales[locale].path,
    label: locales[locale].label,
  }));

  return `
    <nav class="seo-fallback" aria-label="VoyageLog internal links">
      <h1>${escapeHtml(content.metaTitle)}</h1>
${renderFallbackSection(labels.homes, homeLinks)}
${renderFallbackSection(labels.legal, legalLinks[lang] ?? legalLinks.en)}
    </nav>
  `;
}

function localizeHtml(html, route) {
  const meta = getRouteMeta(route);
  const canonical = getRouteCanonical(route);
  const jsonLd = JSON.stringify(createStructuredData(route, meta, canonical), null, 8);
  const ogImage = absoluteUrl('/assets/screenshots/en-US/01_01-timeline.png');

  let next = html;
  next = setTag(next, /<html lang="[^"]*">/, `<html lang="${meta.htmlLang}">`);
  next = setTag(next, /<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  next = setTag(next, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeAttribute(canonical)}" />`);
  next = setTag(next, /    <link rel="alternate"[\s\S]*?    <link rel="icon"/, `    ${renderAlternates()}\n    <link rel="icon"`);
  next = setTag(next, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttribute(meta.title)}" />`);
  next = setTag(next, /<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${escapeAttribute(ogImage)}" />`);
  next = setTag(next, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escapeAttribute(canonical)}" />`);
  next = setTag(next, /<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${meta.ogLocale}" />`);
  next = setTag(next, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttribute(meta.title)}" />`);
  next = setTag(next, /<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${escapeAttribute(ogImage)}" />`);
  next = setTag(next, /<script type="application\/ld\+json" id="structured-data">[\s\S]*?<\/script>/, `<script type="application/ld+json" id="structured-data">\n      ${jsonLd}\n    </script>`);
  next = setTag(next, /<div id="root">\s*<\/div>/, `<div id="root">${renderFallbackLinks(route)}</div>`);

  return next;
}

function renderSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes.map((route) => {
    const alternates = getRouteAlternates()
      .map((alternate) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.lang)}" href="${escapeXml(alternate.href)}" />`)
      .join('\n');

    return `  <url>
    <loc>${escapeXml(getRouteCanonical(route))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`;
  });

  const staticUrls = ['/privacy/', '/terms/', '/support/', '/impressum/']
    .map((path) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
${staticUrls ? `\n${staticUrls}` : ''}
</urlset>
`;
}

const rootRoute = { kind: 'home', lang: 'en', isRoot: true };
const homeRoutes = localeKeys.map((lang) => ({ kind: 'home', lang, isRoot: false }));

await writeFile(join(distDir, 'index.html'), localizeHtml(baseHtml, rootRoute));

await Promise.all(
  homeRoutes.map(async (route) => {
    const localeDir = join(distDir, route.lang);
    await mkdir(localeDir, { recursive: true });
    await writeFile(join(localeDir, 'index.html'), localizeHtml(baseHtml, route));
  }),
);

if (DOMAIN) {
  await writeFile(join(distDir, 'sitemap.xml'), renderSitemap([rootRoute, ...homeRoutes]));
}

await writeFile(
  join(distDir, 'domain-todo.txt'),
  `Set DOMAIN in src/content.js when the final VoyageLog domain is ready.\nSupport email currently points to ${SUPPORT_EMAIL}.\n`,
);
