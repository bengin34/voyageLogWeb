import { Globe } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  SUPPORT_EMAIL,
  absoluteUrl,
  appLanguages,
  appScreen,
  blogIndexPath,
  createHomeStructuredData,
  getRouteAlternates,
  getRouteCanonical,
  getRouteFromPath,
  hasBlog,
  localeKeys,
  locales,
} from './content';
import featuredPosts from 'virtual:blog-featured';
import { rememberLang } from './lang';

const OG_IMAGE = '/assets/og.png';
const SCREEN_W = 1206;
const SCREEN_H = 2622;

function upsertMeta(selector, attr, value) {
  const node = document.head.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

function updateAlternates() {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  const icon = document.head.querySelector('link[rel="icon"]');

  getRouteAlternates().forEach((alternate) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = alternate.lang;
    link.href = alternate.href;
    document.head.insertBefore(link, icon);
  });
}

function updateHead(route) {
  const content = locales[route.lang];
  const canonical = getRouteCanonical(route);
  const ogImage = absoluteUrl(OG_IMAGE);

  document.documentElement.lang = content.htmlLang;
  document.documentElement.dir = content.dir ?? 'ltr';
  document.title = content.metaTitle;
  upsertMeta('meta[name="description"]', 'content', content.metaDescription);
  upsertMeta('link[rel="canonical"]', 'href', canonical);
  upsertMeta('meta[property="og:title"]', 'content', content.metaTitle);
  upsertMeta('meta[property="og:description"]', 'content', content.metaDescription);
  upsertMeta('meta[property="og:url"]', 'content', canonical);
  upsertMeta('meta[property="og:image"]', 'content', ogImage);
  upsertMeta('meta[property="og:locale"]', 'content', content.ogLocale);
  upsertMeta('meta[name="twitter:title"]', 'content', content.metaTitle);
  upsertMeta('meta[name="twitter:description"]', 'content', content.metaDescription);
  upsertMeta('meta[name="twitter:image"]', 'content', ogImage);
  updateAlternates();

  const sd = document.getElementById('structured-data');
  if (sd) sd.textContent = JSON.stringify(createHomeStructuredData(route), null, 2);
}

function fold(value, lang) {
  return value
    .toLocaleLowerCase(lang)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ß/g, 'ss');
}

function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll('.rv'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('in'));
      return undefined;
    }
    root.classList.add('js');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -4% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useActiveChapter(count) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const nodes = Array.from(document.querySelectorAll('[data-chapter]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.chapter));
        });
      },
      { rootMargin: '-42% 0px -48% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [count]);

  return active;
}

function Phone({ src, alt, eager = false, className = '' }) {
  const src1x = src.replace(/\.webp$/, '@1x.webp');
  return (
    <div className={`device ${className}`} data-ui>
      <div className="device-body">
        <img
          className="device-screen"
          src={src1x}
          srcSet={`${src1x} 603w, ${src} 1206w`}
          sizes="(max-width: 900px) 280px, 360px"
          alt={alt}
          width={SCREEN_W}
          height={SCREEN_H}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}

function StagePhoto({ alt }) {
  return (
    <picture className="stage-photo">
      <source media="(min-width: 1400px)" srcSet="/assets/stage/sagrada.webp" />
      <img
        src="/assets/stage/sagrada@1x.webp"
        srcSet="/assets/stage/sagrada@1x.webp 720w, /assets/stage/sagrada.webp 1440w"
        sizes="50vw"
        alt={alt}
        width="1440"
        height="1920"
        decoding="async"
      />
    </picture>
  );
}

function StoreLinks({ content, size = 'lg' }) {
  return (
    <div className={`actions actions-${size}`}>
      <a className="btn" href={APP_STORE_URL} target="_blank" rel="noreferrer">
        {content.hero.appStore}
      </a>
      <a className="text-link" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
        {content.hero.googlePlay}
      </a>
    </div>
  );
}

function LangMenu({ content, currentLang }) {
  const menu = useRef(null);

  useEffect(() => {
    const close = (event) => {
      const node = menu.current;
      if (!node?.open) return;
      if (event.type === 'keydown' ? event.key === 'Escape' : !node.contains(event.target)) node.open = false;
    };
    document.addEventListener('click', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('keydown', close);
    };
  }, []);

  return (
    <details className="lang-menu" ref={menu}>
      <summary aria-label={content.nav.language}>
        <Globe size={16} strokeWidth={1.75} aria-hidden="true" />
        <span>{content.shortLabel}</span>
      </summary>
      <ul>
        {localeKeys.map((key) => (
          <li key={key}>
            <a
              href={locales[key].path}
              hrefLang={locales[key].htmlLang}
              lang={locales[key].htmlLang}
              aria-current={key === currentLang ? 'true' : undefined}
              onClick={() => rememberLang(key)}
            >
              {locales[key].label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Header({ content, currentLang }) {
  return (
    <header className="read-top">
      <a className="brand" href={content.path} aria-label={content.nav.home}>
        <img src="/assets/icon-192.png" alt="" width="36" height="36" />
        <span>VoyageLog</span>
      </a>
      <div className="top-right">
        {hasBlog(currentLang) ? (
          <a className="top-link" href={blogIndexPath(currentLang)}>
            {content.blog.label}
          </a>
        ) : null}
        <LangMenu content={content} currentLang={currentLang} />
      </div>
    </header>
  );
}

function Search({ content, lang }) {
  const s = content.search;
  const [query, setQuery] = useState(s.hints[0]);

  useEffect(() => setQuery(s.hints[0]), [s.hints]);

  const results = useMemo(() => {
    const tokens = fold(query, lang).split(/\s+/).filter(Boolean);
    if (!tokens.length) return s.entries.slice(0, 5).map((entry) => ({ entry, field: 'title', text: entry.title }));

    const out = [];
    s.entries.forEach((entry) => {
      const fields = {
        title: fold(entry.title, lang),
        notes: fold(entry.notes, lang),
        tags: fold(entry.tags.join(' '), lang),
        trip: fold(entry.trip, lang),
      };
      const haystack = Object.values(fields).join(' ');
      if (!tokens.every((token) => haystack.includes(token))) return;
      const first = tokens[0];
      const field = ['title', 'notes', 'tags', 'trip'].find((key) => fields[key].includes(first)) ?? 'title';
      const text = field === 'tags' ? entry.tags.join(', ') : entry[field];
      out.push({ entry, field, text });
    });
    return out.slice(0, 5);
  }, [query, lang, s.entries]);

  return (
    <section id="search" className="search" aria-labelledby="search-title">
      <h2 id="search-title" className="search-title">
        <span className="s-t1">{s.title[0]}</span>
        <span className="s-t2">{s.title[1]}</span>
      </h2>

      <div className="s-in">
        <label className="s-label" htmlFor="trip-search">
          {s.label}
        </label>
        <input
          id="trip-search"
          className="s-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={s.placeholder}
          autoComplete="off"
          spellCheck="false"
        />
        <p className="s-hints" aria-label={s.hintLabel}>
          {s.hints.map((hint) => (
            <button key={hint} type="button" className="chip" onClick={() => setQuery(hint)}>
              {hint}
            </button>
          ))}
        </p>
      </div>

      <div className="s-out" data-ui>
        <ul className="results" aria-label={s.resultsLabel} aria-live="polite">
          {results.length === 0 ? (
            <li className="res res-empty">{s.empty}</li>
          ) : (
            results.map(({ entry, field, text }) => (
              <li className="res" key={entry.title}>
                <span className={`kind kind-${entry.kind}`}>
                  {entry.kind === 'place' ? s.place : s.moment}
                  {entry.rating ? ` ${entry.rating.toFixed(1)}` : ''}
                </span>
                <strong className="res-title">{entry.title}</strong>
                <span className="res-trip">
                  {s.inTrip} {entry.trip}
                </span>
                <span className="res-match">
                  {s.matched[field]}: {text}
                </span>
              </li>
            ))
          )}
        </ul>
        <p className="s-note">{s.note}</p>
      </div>
    </section>
  );
}

export default function App() {
  const route = useMemo(() => getRouteFromPath(window.location.pathname), []);
  const currentLang = route.lang;
  const content = locales[currentLang];
  const assetLocale = content.assetLocale;
  const active = useActiveChapter(content.chapters.length);

  useEffect(() => updateHead(route), [route]);
  useReveal();

  const showGermanLegal = currentLang === 'de';

  return (
    <>
      <div className="shell">
        <main className="read">
          <Header content={content} currentLang={currentLang} />

          <section id="top" className="hero" data-chapter="0">
            <h1 className="rv">{content.hero.title}</h1>
            <p className="lead rv">{content.hero.lead}</p>
            <div className="rv">
              <StoreLinks content={content} />
            </div>
          </section>

          <div id="features">
            {content.chapters.map((chapter, index) => (
              <article className="chapter" key={chapter.id} data-chapter={index} id={chapter.id}>
                <figure className="tile chapter-fig rv">
                  <Phone src={appScreen(assetLocale, chapter.screen)} alt={chapter.alt} eager={index === 0} />
                </figure>
                <h2 className="rv">{chapter.title}</h2>
                {chapter.body.map((paragraph) => (
                  <p className="rv" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            <section className="more">
              <h2 className="rv">{content.more.title}</h2>
              <dl>
                {content.more.items.map((item) => (
                  <div className="more-row rv" key={item.t}>
                    <dt>{item.t}</dt>
                    <dd>{item.b}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </main>

        <aside className="stage" aria-label="VoyageLog screens">
          <StagePhoto alt={content.stage?.photoAlt ?? ''} />
          <div className="stage-phones">
            {content.chapters.map((chapter, index) => (
              <Phone
                key={chapter.id}
                className={index === active ? 'is-on' : ''}
                src={appScreen(assetLocale, chapter.screen)}
                alt={index === active ? chapter.alt : ''}
                eager={index === 0}
              />
            ))}
          </div>
          <div className="stage-bar">
            <span>{content.footer.tagline}</span>
            <span className="stage-links">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
                App Store
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
                Google Play
              </a>
            </span>
          </div>
        </aside>
      </div>

      <Search content={content} lang={currentLang} />

      <section className="panel insights" aria-labelledby="insights-title">
        <div className="insights-copy">
          <h2 id="insights-title" className="rv">
            {content.stats.title}
          </h2>
          {content.stats.body.map((paragraph) => (
            <p className="rv" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="insights-phones">
          <Phone src={appScreen(assetLocale, 'insights')} alt={content.stats.alt} />
          <Phone src={appScreen(assetLocale, 'bestof')} alt={content.stats.alt2} />
        </div>
      </section>

      <section id="privacy" className="panel privacy" aria-labelledby="privacy-title">
        <div className="privacy-copy">
          <h2 id="privacy-title" className="rv">
            {content.privacy.title}
          </h2>
          {content.privacy.body.map((paragraph) => (
            <p className="rv" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="formats">
          {content.privacy.formats.map((format) => (
            <div className="format rv" key={format.t}>
              <dt>{format.t}</dt>
              <dd>{format.b}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="panel plans" aria-labelledby="plans-title">
        <div className="plans-col">
          <h2 id="plans-title" className="rv">
            {content.plans.title}
          </h2>
          {content.plans.body.map((paragraph) => (
            <p className="rv" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="plans-col">
          <h2 className="rv">{content.languages.title}</h2>
          <p className="rv">{content.languages.body}</p>
          <p className="lang-list rv" dir="ltr">
            {appLanguages.split(' · ').map((name, index) => (
              <span key={name} dir="auto">
                {index > 0 ? ' · ' : ''}
                {name}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section id="faq" className="panel faq" aria-labelledby="faq-title">
        <h2 id="faq-title" className="rv">
          {content.faq.title}
        </h2>
        <div className="faq-text">
          {content.faq.items.map((item) => (
            <p key={item.q}>
              <strong>{item.q}</strong> {item.a}{' '}
              {item.q === content.faq.items[content.faq.items.length - 1].q ? (
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              ) : null}
            </p>
          ))}
        </div>
      </section>

      {featuredPosts[currentLang]?.length ? (
        <section className="panel faq reads" aria-labelledby="reads-title">
          <h2 id="reads-title" className="rv">
            {content.blog.more}
          </h2>
          <div className="faq-text">
            {featuredPosts[currentLang].map((post) => (
              <p key={post.path}>
                <a href={post.path}>{post.title}</a>
                <br />
                {post.description}
              </p>
            ))}
            <p>
              <a href={blogIndexPath(currentLang)}>{content.blog.allPosts}</a>
            </p>
          </div>
        </section>
      ) : null}

      <section className="panel cta" aria-label="VoyageLog">
        <div className="cta-copy">
          <p className="cta-sentence rv">{content.cta.sentence}</p>
          <div className="rv">
            <StoreLinks content={content} size="sm" />
          </div>
        </div>
        <figure className="tile cta-fig">
          <Phone src={appScreen(assetLocale, 'journal')} alt={content.chapters[1].alt} />
        </figure>
      </section>

      <footer className="foot">
        <span>{content.footer.tagline}</span>
        <nav aria-label="Footer">
          {hasBlog(currentLang) ? <a href={blogIndexPath(currentLang)}>{content.blog.label}</a> : null}
          <a href="/privacy/">{content.footer.privacy}</a>
          <a href="/terms/">{content.footer.terms}</a>
          <a href="/support/">{content.footer.support}</a>
          {showGermanLegal ? <a href="/impressum/">{content.footer.impressum}</a> : null}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">{content.footer.eula}</a>
        </nav>
        <span className="foot-end">
          <a href={`mailto:${SUPPORT_EMAIL}`}>{content.footer.contact}</a>
          <span>© {new Date().getFullYear()}</span>
        </span>
        <span className="foot-credit">
          <a href="https://commons.wikimedia.org/wiki/File:Light_inside_Sagrada_Fam%C3%ADlia.jpg">{content.footer.credit}</a>
        </span>
      </footer>
    </>
  );
}
