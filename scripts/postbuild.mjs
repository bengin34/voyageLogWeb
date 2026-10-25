import { execSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  DOMAIN,
  absoluteUrl,
  blogIndexPath,
  createHomeStructuredData,
  getRouteAlternates,
  getRouteCanonical,
  hasBlog,
  localeKeys,
  locales,
} from '../src/content.js';
import { buildBlog, loadPosts } from './blog.mjs';

function gitDate(paths) {
  try {
    const out = execSync(`git log -1 --format=%cs -- ${paths.join(' ')}`, { encoding: 'utf8' }).trim();
    if (out) return out;
  } catch {
    // not a git checkout, fall through
  }
  return new Date().toISOString().slice(0, 10);
}

const homeLastmod = gitDate(['src', 'index.html', 'public/assets']);
const legalLastmod = (path) => gitDate([`public${path}`]);

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
    dir: content.dir ?? 'ltr',
    ogLocale: content.ogLocale,
    title: content.metaTitle,
    description: content.metaDescription,
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

const allPosts = await loadPosts();

function renderFallbackLinks(route) {
  const lang = route.lang ?? 'en';
  const content = locales[lang] ?? locales.en;
  const labels = fallbackLabels[lang] ?? fallbackLabels.en;
  const homeLinks = localeKeys.map((locale) => ({
    href: locales[locale].path,
    label: locales[locale].label,
  }));
  const blogLinks = hasBlog(lang)
    ? [
        { href: blogIndexPath(lang), label: content.blog.allPosts },
        ...allPosts.filter((post) => post.lang === lang).map((post) => ({ href: post.path, label: post.title })),
      ]
    : [];

  return `
    <nav class="seo-fallback" aria-label="VoyageLog internal links">
      <h1>${escapeHtml(content.metaTitle)}</h1>
${renderFallbackSection(labels.homes, homeLinks)}
${renderFallbackSection(content.blog.label, blogLinks)}
${renderFallbackSection(labels.legal, legalLinks[lang] ?? legalLinks.en)}
    </nav>
  `;
}

function localizeHtml(html, route) {
  const meta = getRouteMeta(route);
  const canonical = getRouteCanonical(route);
  const jsonLd = JSON.stringify(createHomeStructuredData(route), null, 8);
  const ogImage = absoluteUrl('/assets/og.png');

  let next = html;
  next = setTag(next, /<html lang="[^"]*"[^>]*>/, `<html lang="${meta.htmlLang}" dir="${meta.dir}">`);
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

function renderUrl({ loc, lastmod, alternates = [] }) {
  const links = alternates
    .map((alternate) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.lang)}" href="${escapeXml(alternate.href)}" />`)
    .join('\n');
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
${links}${links ? '\n' : ''}  </url>`;
}

function renderSitemap(routes, blogEntries) {
  const seen = new Set();
  const homeEntries = routes
    .map((route) => ({ loc: getRouteCanonical(route), lastmod: homeLastmod, alternates: getRouteAlternates() }))
    .filter((entry) => (seen.has(entry.loc) ? false : seen.add(entry.loc)));
  const staticEntries = ['/privacy/', '/terms/', '/support/', '/impressum/'].map((path) => ({
    loc: absoluteUrl(path),
    lastmod: legalLastmod(path),
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...homeEntries, ...blogEntries, ...staticEntries].map(renderUrl).join('\n')}
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

const blogEntries = await buildBlog({ distDir, baseHtml });

if (DOMAIN) {
  await writeFile(join(distDir, 'sitemap.xml'), renderSitemap([rootRoute, ...homeRoutes], blogEntries));
}
