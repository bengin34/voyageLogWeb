import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import {
  APP_STORE_URL,
  DOMAIN,
  GOOGLE_PLAY_URL,
  SUPPORT_EMAIL,
  absoluteUrl,
  blogIndexPath,
  localeKeys,
  locales,
} from '../src/content.js';

const contentDir = 'content/blog';
const DEFAULT_OG = '/assets/og.png';

function coverFor(lang, slug, explicit) {
  if (explicit) return explicit;
  const generated = `/assets/blog/og/${lang}/${slug}.png`;
  return existsSync(join('public', generated)) ? generated : DEFAULT_OG;
}

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function escapeXml(value) {
  return escapeHtml(value).replaceAll("'", '&apos;');
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatDate(date, lang) {
  return new Intl.DateTimeFormat(locales[lang].htmlLang, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
}

function isoDate(value) {
  return new Date(value).toISOString().slice(0, 10);
}

function readingMinutes(markdown) {
  const words = markdown.replace(/[#*_`>|\-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function createMarked(headings) {
  const marked = new Marked({ gfm: true });
  const seen = new Map();
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]+>/g, '');
        let id = slugify(plain) || `section-${headings.length + 1}`;
        const count = seen.get(id) ?? 0;
        seen.set(id, count + 1);
        if (count) id = `${id}-${count + 1}`;
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      table({ header, rows }) {
        const th = header.map((cell) => `<th>${this.parser.parseInline(cell.tokens)}</th>`).join('');
        const body = rows
          .map((row) => `<tr>${row.map((cell) => `<td>${this.parser.parseInline(cell.tokens)}</td>`).join('')}</tr>`)
          .join('\n');
        return `<div class="table-wrap"><table><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>\n`;
      },
    },
  });
  return marked;
}

async function loadPosts() {
  const posts = [];
  for (const lang of localeKeys) {
    const dir = join(contentDir, lang);
    let files = [];
    try {
      files = (await readdir(dir)).filter((name) => name.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = await readFile(join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = file.replace(/\.md$/, '');
      if (!data.title || !data.description) throw new Error(`Missing title/description in ${lang}/${file}`);
      const headings = [];
      const marked = createMarked(headings);
      const body = marked.parse(content.replace(/^#\s+.*\n/, '')).trim();
      posts.push({
        lang,
        slug,
        key: data.key ?? slug,
        title: data.title,
        description: data.description,
        date: isoDate(data.date ?? Date.now()),
        updated: isoDate(data.updated ?? data.date ?? Date.now()),
        cover: coverFor(lang, slug, data.cover),
        faq: Array.isArray(data.faq) ? data.faq.filter((item) => item?.q && item?.a) : [],
        path: `/${lang}/blog/${slug}/`,
        headings,
        html: body,
        minutes: readingMinutes(content),
      });
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function alternatesFor(post, posts) {
  const siblings = posts.filter((other) => other.key === post.key);
  const links = siblings.map((other) => ({ lang: other.lang, href: absoluteUrl(other.path) }));
  const fallback = siblings.find((other) => other.lang === 'en') ?? post;
  links.push({ lang: 'x-default', href: absoluteUrl(fallback.path) });
  return links;
}

function renderAlternates(alternates) {
  return alternates.map((alt) => `<link rel="alternate" hreflang="${alt.lang}" href="${escapeHtml(alt.href)}" />`).join('\n    ');
}

function stylesheetFrom(baseHtml) {
  const match = baseHtml.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
  return match ? match[0] : '';
}

const blogCss = `
.blog-shell { max-width: 46rem; margin: 0 auto; padding: 0 var(--m) 3rem; }
.blog-shell .read-top { padding-top: clamp(1.25rem, 3vh, 2rem); }
.post { background: var(--paper); border-radius: var(--r); padding: clamp(1.5rem, 1rem + 3vw, 3.5rem) var(--pad) clamp(2.5rem, 6vh, 4rem); margin-top: var(--m); }
.post h1 { font-size: var(--step-head); margin-bottom: 0.75rem; }
.post .meta { color: var(--muted); font-size: var(--step-small); margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.35rem 1rem; }
.post .lead { font-size: var(--step-lead); font-weight: 300; line-height: 1.35; margin-bottom: 1.5rem; }
.post h2 { font-size: clamp(1.5rem, 1.2rem + 1vw, 1.9rem); font-weight: 400; margin: 2.5rem 0 0.9rem; }
.post h3 { font-size: 1.1em; font-weight: 600; margin: 1.75rem 0 0.5rem; }
.post p, .post li { max-width: 40rem; }
.post p { margin: 0 0 1rem; }
.post ul, .post ol { margin: 0 0 1rem; padding-left: 1.4rem; }
.post li { margin-bottom: 0.4rem; }
.post li > p { margin: 0; }
.post a { color: var(--ink); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 0.25em; text-decoration-color: var(--coral); }
.post strong { font-weight: 600; }
.post hr { border: 0; border-top: 1px solid var(--paper-2); margin: 2rem 0; }
.post blockquote { margin: 1rem 0; padding-left: 1rem; border-left: 3px solid var(--coral); color: var(--muted); }
.table-wrap { overflow-x: auto; margin: 1.25rem 0 1.5rem; }
.post table { border-collapse: collapse; width: 100%; font-size: 0.82rem; line-height: 1.4; }
.post th, .post td { text-align: left; padding: 0.5rem 0.55rem; border-bottom: 1px solid var(--paper-2); vertical-align: top; min-width: 6.5rem; }
.post td:first-child, .post th:first-child { font-weight: 600; min-width: 5.5rem; }
.post th { font-weight: 600; background: var(--paper-2); }
.toc { background: var(--paper-2); border-radius: 14px; padding: 1rem 1.25rem; margin: 0 0 2rem; font-size: var(--step-small); }
.toc strong { display: block; margin-bottom: 0.4rem; }
.toc ul { margin: 0; padding-left: 1.1rem; }
.toc li { margin-bottom: 0.2rem; }
.cta { background: var(--ink); color: var(--paper); border-radius: 16px; padding: 1.5rem 1.5rem 1.6rem; margin: 2.25rem 0; }
.cta p { color: inherit; margin: 0 0 0.6rem; }
.cta .cta-title { font-size: 1.35rem; font-weight: 500; line-height: 1.2; }
.cta p { font-size: var(--step-small); max-width: none; }
.cta .actions { margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.75rem 1.25rem; align-items: center; }
.cta .btn { background: var(--coral); color: var(--ink); }
.cta .text-link { color: var(--paper); }
.faq dt { font-weight: 600; margin-top: 1.1rem; }
.faq dd { margin: 0.3rem 0 0; max-width: 40rem; }
.post-end { margin-top: 2rem; font-size: var(--step-small); color: var(--muted); }
.post-list { list-style: none; padding: 0; margin: 1.5rem 0 0; display: grid; gap: var(--m); }
.post-list li { background: var(--paper); border-radius: 16px; padding: 1.25rem 1.4rem; }
.post-list a { font-size: 1.2rem; font-weight: 500; color: var(--ink); text-decoration: none; }
.post-list a:hover { text-decoration: underline; text-decoration-color: var(--coral); }
.post-list p { margin: 0.4rem 0 0; color: var(--muted); font-size: var(--step-small); }
.post-list time { display: block; margin-top: 0.5rem; font-size: 0.8rem; color: var(--muted); }
.blog-head { padding: clamp(2rem, 6vh, 4rem) 0 0.5rem; }
.blog-head h1 { font-size: var(--step-head); }
.blog-head p { margin-top: 0.75rem; color: var(--muted); }
.blog-shell .foot { margin-top: 2rem; padding-left: 0; padding-right: 0; }
@media (max-width: 560px) { .blog-shell .foot { grid-template-columns: 1fr; text-align: center; } }
`;

function renderHeader(lang, langLinks) {
  const content = locales[lang];
  const langs = localeKeys
    .map((key) => {
      const href = langLinks[key] ?? locales[key].path;
      const current = key === lang ? ' aria-current="true"' : '';
      return `<a href="${escapeHtml(href)}" hreflang="${locales[key].htmlLang}" lang="${locales[key].htmlLang}"${current}>${locales[key].shortLabel}</a>`;
    })
    .join('');
  return `<header class="read-top">
      <a class="brand" href="${content.path}" aria-label="${escapeHtml(content.nav.home)}">
        <img src="/assets/icon-192.png" alt="" width="36" height="36" />
        <span>VoyageLog</span>
      </a>
      <div class="top-right">
        <a class="top-link" href="${blogIndexPath(lang)}">${escapeHtml(content.blog.label)}</a>
        <nav class="langs" aria-label="${escapeHtml(content.nav.language)}">${langs}</nav>
      </div>
    </header>`;
}

function renderFooter(lang) {
  const content = locales[lang];
  const legal = [
    [blogIndexPath(lang), content.blog.label],
    ['/privacy/index.html', content.footer.privacy],
    ['/terms/index.html', content.footer.terms],
    ['/support/index.html', content.footer.support],
    ...(lang === 'de' ? [['/impressum/index.html', content.footer.impressum]] : []),
  ]
    .map(([href, label]) => `<a href="${href}">${escapeHtml(label)}</a>`)
    .join('');
  return `<footer class="foot">
      <span>${escapeHtml(content.footer.tagline)}</span>
      <nav aria-label="Footer">${legal}</nav>
      <span class="foot-end"><a href="mailto:${SUPPORT_EMAIL}">${escapeHtml(content.footer.contact)}</a> <span>© ${new Date().getFullYear()}</span></span>
    </footer>`;
}

function renderCta(lang, slug) {
  const content = locales[lang];
  const utm = `utm_source=blog&utm_medium=web&utm_campaign=${encodeURIComponent(slug)}`;
  const join = (url) => `${url}${url.includes('?') ? '&' : '?'}${utm}`;
  return `<aside class="cta">
  <p class="cta-title">${escapeHtml(content.blog.ctaTitle)}</p>
  <p>${escapeHtml(content.blog.ctaBody)}</p>
  <div class="actions">
    <a class="btn" href="${escapeHtml(join(APP_STORE_URL))}" rel="noopener">${escapeHtml(content.hero.appStore)}</a>
    <a class="text-link" href="${escapeHtml(join(GOOGLE_PLAY_URL))}" rel="noopener">${escapeHtml(content.hero.googlePlay)}</a>
  </div>
</aside>`;
}

function renderToc(post) {
  if (post.headings.length < 3) return '';
  const content = locales[post.lang];
  const items = post.headings.map((h) => `<li><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`).join('');
  return `<nav class="toc" aria-label="${escapeHtml(content.blog.contents)}"><strong>${escapeHtml(content.blog.contents)}</strong><ul>${items}</ul></nav>`;
}

function renderFaq(post) {
  if (!post.faq.length) return '';
  const content = locales[post.lang];
  const items = post.faq.map((item) => `<dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.a)}</dd>`).join('');
  return `<section class="faq" aria-labelledby="faq-title"><h2 id="faq-title">${escapeHtml(content.blog.faq)}</h2><dl>${items}</dl></section>`;
}

function structuredData(post, posts) {
  const url = absoluteUrl(post.path);
  const content = locales[post.lang];
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.description,
      inLanguage: content.htmlLang,
      datePublished: post.date,
      dateModified: post.updated,
      mainEntityOfPage: url,
      image: absoluteUrl(post.cover),
      author: { '@type': 'Organization', name: 'VoyageLog', url: absoluteUrl('/') },
      publisher: {
        '@type': 'Organization',
        name: 'VoyageLog',
        url: absoluteUrl('/'),
        logo: { '@type': 'ImageObject', url: absoluteUrl('/assets/icon-512.png') },
      },
      about: { '@type': 'SoftwareApplication', name: 'VoyageLog', url: absoluteUrl(content.path) },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'VoyageLog', item: absoluteUrl(content.path) },
        { '@type': 'ListItem', position: 2, name: content.blog.label, item: absoluteUrl(blogIndexPath(post.lang)) },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: content.htmlLang,
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }
  void posts;
  return { '@context': 'https://schema.org', '@graph': graph };
}

function renderHead({ lang, title, description, canonical, alternates, image, stylesheet, jsonLd, type, published, modified }) {
  const content = locales[lang];
  const fullTitle = title.includes('VoyageLog') ? title : `${title} | VoyageLog`;
  const articleMeta =
    type === 'article'
      ? `<meta property="article:published_time" content="${published}" />
    <meta property="article:modified_time" content="${modified}" />`
      : '';
  return `<!doctype html>
<html lang="${content.htmlLang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#ff6848" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    ${renderAlternates(alternates)}
    <link rel="icon" type="image/png" href="/assets/icon-192.png" />
    <link rel="apple-touch-icon" href="/assets/icon-192.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="alternate" type="application/rss+xml" title="VoyageLog ${escapeHtml(content.blog.label)}" href="${blogIndexPath(lang)}feed.xml" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="VoyageLog" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(absoluteUrl(image))}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:locale" content="${content.ogLocale}" />
    ${articleMeta}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(absoluteUrl(image))}" />
    ${stylesheet}
    <style>${blogCss}</style>
    <script type="application/ld+json">
      ${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>`;
}

function renderPost(post, posts, stylesheet) {
  const content = locales[post.lang];
  const alternates = alternatesFor(post, posts);
  const langLinks = Object.fromEntries(
    posts.filter((other) => other.key === post.key).map((other) => [other.lang, other.path]),
  );
  const cta = renderCta(post.lang, post.slug);
  let body = post.html;
  body = body.includes('{{cta}}') ? body.replace(/<p>\{\{cta\}\}<\/p>|\{\{cta\}\}/, cta) : body.replace('</h2>', `</h2>${cta}`);
  const more = posts
    .filter((other) => other.lang === post.lang && other.slug !== post.slug)
    .slice(0, 4)
    .map((other) => `<li><a href="${other.path}">${escapeHtml(other.title)}</a><p>${escapeHtml(other.description)}</p></li>`)
    .join('');

  const head = renderHead({
    lang: post.lang,
    title: post.title,
    description: post.description,
    canonical: absoluteUrl(post.path),
    alternates,
    image: post.cover,
    stylesheet,
    jsonLd: structuredData(post, posts),
    type: 'article',
    published: post.date,
    modified: post.updated,
  });

  return `${head}
  <body>
    <div class="blog-shell">
    ${renderHeader(post.lang, langLinks)}
    <main>
      <article class="post">
        <h1>${escapeHtml(post.title)}</h1>
        <p class="meta"><span>${escapeHtml(content.blog.byline)}</span><span>${escapeHtml(content.blog.updated)} <time datetime="${post.updated}">${formatDate(post.updated, post.lang)}</time></span><span>${post.minutes} ${escapeHtml(content.blog.readTime)}</span></p>
        ${renderToc(post)}
        ${body}
        ${renderFaq(post)}
        ${cta}
      </article>
      ${more ? `<section class="blog-head"><h2>${escapeHtml(content.blog.more)}</h2><ul class="post-list">${more}</ul></section>` : ''}
    </main>
    ${renderFooter(post.lang)}
    </div>
  </body>
</html>
`;
}

function renderIndex(lang, posts, stylesheet) {
  const content = locales[lang];
  const mine = posts.filter((post) => post.lang === lang);
  const alternates = [
    ...localeKeys
      .filter((key) => posts.some((post) => post.lang === key))
      .map((key) => ({ lang: key, href: absoluteUrl(blogIndexPath(key)) })),
    { lang: 'x-default', href: absoluteUrl(blogIndexPath('en')) },
  ];
  const items = mine
    .map(
      (post) =>
        `<li><a href="${post.path}">${escapeHtml(post.title)}</a><p>${escapeHtml(post.description)}</p><time datetime="${post.updated}">${formatDate(post.updated, lang)}</time></li>`,
    )
    .join('');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl(blogIndexPath(lang))}#blog`,
    name: content.blog.title,
    description: content.blog.description,
    url: absoluteUrl(blogIndexPath(lang)),
    inLanguage: content.htmlLang,
    publisher: { '@type': 'Organization', name: 'VoyageLog', url: absoluteUrl('/') },
    blogPost: mine.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: absoluteUrl(post.path), datePublished: post.date })),
  };
  const head = renderHead({
    lang,
    title: content.blog.metaTitle,
    description: content.blog.description,
    canonical: absoluteUrl(blogIndexPath(lang)),
    alternates,
    image: DEFAULT_OG,
    stylesheet,
    jsonLd,
    type: 'website',
  });
  return `${head}
  <body>
    <div class="blog-shell">
    ${renderHeader(lang, Object.fromEntries(localeKeys.map((key) => [key, blogIndexPath(key)])))}
    <main>
      <section class="blog-head">
        <h1>${escapeHtml(content.blog.title)}</h1>
        <p>${escapeHtml(content.blog.description)}</p>
      </section>
      <ul class="post-list">${items}</ul>
      ${renderCta(lang, 'blog-index')}
    </main>
    ${renderFooter(lang)}
    </div>
  </body>
</html>
`;
}

function renderFeed(lang, posts) {
  const content = locales[lang];
  const mine = posts.filter((post) => post.lang === lang);
  const items = mine
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(absoluteUrl(post.path))}</link>
      <guid isPermaLink="true">${escapeXml(absoluteUrl(post.path))}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(content.blog.title)}</title>
    <link>${escapeXml(absoluteUrl(blogIndexPath(lang)))}</link>
    <description>${escapeXml(content.blog.description)}</description>
    <language>${content.htmlLang}</language>
    <atom:link href="${escapeXml(absoluteUrl(`${blogIndexPath(lang)}feed.xml`))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

export async function buildBlog({ distDir, baseHtml }) {
  if (!DOMAIN) return [];
  const posts = await loadPosts();
  if (!posts.length) return [];
  const stylesheet = stylesheetFrom(baseHtml);
  const sitemapEntries = [];

  for (const post of posts) {
    const dir = join(distDir, post.path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), renderPost(post, posts, stylesheet));
    sitemapEntries.push({ loc: absoluteUrl(post.path), lastmod: post.updated, alternates: alternatesFor(post, posts) });
  }

  for (const lang of localeKeys) {
    if (!posts.some((post) => post.lang === lang)) continue;
    const dir = join(distDir, blogIndexPath(lang));
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), renderIndex(lang, posts, stylesheet));
    await writeFile(join(dir, 'feed.xml'), renderFeed(lang, posts));
    const latest = posts.filter((post) => post.lang === lang).map((post) => post.updated).sort().at(-1);
    sitemapEntries.push({ loc: absoluteUrl(blogIndexPath(lang)), lastmod: latest });
  }

  return sitemapEntries;
}
