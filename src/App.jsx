import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpenText,
  CalendarDays,
  Check,
  ChevronRight,
  Compass,
  Download,
  Filter,
  Globe2,
  Landmark,
  Languages,
  ListChecks,
  LockKeyhole,
  MapPinned,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from 'lucide-react';
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  SUPPORT_EMAIL,
  absoluteUrl,
  getRouteAlternates,
  getRouteCanonical,
  getRouteFromPath,
  getScreenshotPath,
  heroScreens,
  localeKeys,
  locales,
  screenshotFiles,
} from './content';

const featureIcons = [Plane, BookOpenText, MapPinned, Search, Filter, ShieldCheck];
const proofIcons = [CalendarDays, LockKeyhole, Download, Languages];
const privacyIcons = [LockKeyhole, WifiOff, ShieldCheck];
const exportIcons = [Download, ListChecks, Compass];

function useReveal(ref, options) {
  useEffect(() => {
    const targets = ref.current?.querySelectorAll?.('.anim') ?? [];
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...(options ?? {}) },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [ref, options]);
}

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

function createStructuredData(route, title, description) {
  const canonical = getRouteCanonical(route);

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VoyageLog',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'iOS, Android',
    description,
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

function updateHead(route) {
  const content = locales[route.lang];
  const title = content.metaTitle;
  const description = content.metaDescription;
  const canonical = getRouteCanonical(route);
  const ogImage = absoluteUrl(getScreenshotPath(content.assetLocale, screenshotFiles[0]));

  document.documentElement.lang = content.htmlLang;
  document.title = title;
  upsertMeta('meta[name="description"]', 'content', description);
  upsertMeta('link[rel="canonical"]', 'href', canonical);
  upsertMeta('meta[property="og:title"]', 'content', title);
  upsertMeta('meta[property="og:description"]', 'content', description);
  upsertMeta('meta[property="og:url"]', 'content', canonical);
  upsertMeta('meta[property="og:image"]', 'content', ogImage);
  upsertMeta('meta[property="og:locale"]', 'content', content.ogLocale);
  upsertMeta('meta[name="twitter:title"]', 'content', title);
  upsertMeta('meta[name="twitter:description"]', 'content', description);
  upsertMeta('meta[name="twitter:image"]', 'content', ogImage);
  updateAlternates();

  const sd = document.getElementById('structured-data');
  if (sd) {
    sd.textContent = JSON.stringify(createStructuredData(route, title, description), null, 2);
  }
}

function screenPath(content, screen) {
  return getScreenshotPath(content.assetLocale, screen);
}

function Header({ content, currentLang, onLanguageChange }) {
  const sectionHref = (section) => `${locales[currentLang].path}#${section}`;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand-link" href={locales[currentLang].path} aria-label="VoyageLog home">
          <img className="brand-icon" src="/assets/icon-192.png" alt="" />
          <span>VoyageLog</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href={sectionHref('features')}>{content.nav.features}</a>
          <a href={sectionHref('screens')}>{content.nav.screens}</a>
          <a href={sectionHref('privacy')}>{content.nav.privacy}</a>
          <a href={sectionHref('export')}>{content.nav.export}</a>
        </nav>

        <div className="language-segment" aria-label="Language">
          {localeKeys.map((lang) => (
            <button
              key={lang}
              type="button"
              className={currentLang === lang ? 'is-active' : ''}
              onClick={() => onLanguageChange(lang)}
              aria-pressed={currentLang === lang}
            >
              {locales[lang].shortLabel}
            </button>
          ))}
        </div>

        <select
          className="language-select"
          value={currentLang}
          onChange={(event) => onLanguageChange(event.target.value)}
          aria-label="Language"
        >
          {localeKeys.map((lang) => (
            <option key={lang} value={lang}>
              {locales[lang].shortLabel}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

function wrappedOffset(index, active, count) {
  let distance = index - active;
  if (distance > count / 2) distance -= count;
  if (distance < -count / 2) distance += count;
  return distance;
}

function heroPhoneStyle(offset) {
  if (offset === 0) {
    return {
      transform: 'translate3d(0, 0, 0) rotate(-2deg) scale(1)',
      opacity: 1,
      zIndex: 4,
    };
  }

  const direction = offset < 0 ? -1 : 1;
  return {
    transform: `translate3d(${direction * 180}px, ${Math.abs(offset) * 26}px, 0) rotate(${direction * 7}deg) scale(0.78)`,
    opacity: 0.52,
    zIndex: 3 - Math.abs(offset),
  };
}

function Hero({ content }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const heroItems = useMemo(
    () => heroScreens.map((id) => screenshotFiles.find((screen) => screen.id === id)).filter(Boolean),
    [],
  );
  useReveal(ref);

  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % heroItems.length), 3200);
    return () => clearInterval(timer);
  }, [heroItems.length]);

  return (
    <section id="top" ref={ref} className="hero-section">
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-pattern" aria-hidden="true" />

      <div className="hero-media" aria-hidden="true">
        {heroItems.map((screen, index) => {
          const offset = wrappedOffset(index, active, heroItems.length);
          return (
            <div
              key={screen.id}
              className={`hero-phone${offset === 0 ? ' is-active' : ''}`}
              style={heroPhoneStyle(offset)}
            >
              <img src={screenPath(content, screen)} alt="" width="1320" height="2868" />
            </div>
          );
        })}
      </div>

      <div className="hero-content">
        <div className="eyebrow-pill anim">
          <span className="eyebrow-dot" aria-hidden="true" />
          {content.hero.eyebrow}
        </div>
        <h1 className="anim anim-d1">VoyageLog</h1>
        <p className="hero-lead anim anim-d2">{content.hero.lead}</p>

        <div className="hero-actions anim anim-d3">
          <a className="button-primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            {content.hero.primaryCta}
            <ChevronRight aria-hidden="true" size={18} />
          </a>
          <a className="button-secondary" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
            {content.hero.secondaryCta}
            <ChevronRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="badge-row anim anim-d4">
          {content.hero.badges.map((badge) => (
            <span key={badge} className="trust-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="proof-strip">
      <div className="section-shell proof-grid">
        {content.proof.map((item, index) => {
          const Icon = proofIcons[index];
          return (
            <div key={item.label} className={`proof-item anim anim-d${index + 1}`}>
              <span className="proof-icon">
                <Icon aria-hidden="true" size={20} />
              </span>
              <span>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, body, align = 'left', dark = false }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'is-centered' : ''} ${dark ? 'is-dark' : ''}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Features({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="features" ref={ref} className="section-band paper-band">
      <div className="section-shell">
        <div className="anim">
          <SectionIntro {...content.intro} />
        </div>
        <div className="feature-grid">
          {content.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article key={feature.title} className={`feature-card anim anim-d${Math.min(index + 1, 5)}`}>
                <span className="feature-icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Screens({ content }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);
  useReveal(ref);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => setActive((current) => (current + 1) % screenshotFiles.length), 4200);
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  function goTo(index) {
    setActive(index);
    setPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 8000);
  }

  const activeScreen = content.screens[active];

  return (
    <section id="screens" ref={ref} className="screens-section">
      <div className="section-shell">
        <div className="anim">
          <SectionIntro align="center" dark eyebrow={content.nav.screens} title={activeScreen.title} body={activeScreen.body} />
        </div>
      </div>

      <div className="screens-viewport anim anim-d2">
        <div className="screens-track" style={{ '--active': active }}>
          {screenshotFiles.map((screen, index) => {
            const copy = content.screens[index];
            return (
              <button
                key={screen.id}
                type="button"
                className={`screen-slide${active === index ? ' is-active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={copy.title}
              >
                <img
                  src={screenPath(content, screen)}
                  alt={`${copy.title}. ${copy.body}`}
                  width="1320"
                  height="2868"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="screen-dots" aria-label="Screens">
        {screenshotFiles.map((screen, index) => (
          <button
            key={screen.id}
            type="button"
            className={active === index ? 'is-active' : ''}
            onClick={() => goTo(index)}
            aria-label={content.screens[index].title}
          />
        ))}
      </div>
    </section>
  );
}

function Privacy({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="privacy" ref={ref} className="section-band white-band">
      <div className="section-shell split-section">
        <div className="anim">
          <SectionIntro {...content.privacy} />
        </div>
        <div className="point-grid">
          {content.privacy.points.map((point, index) => {
            const Icon = privacyIcons[index];
            return (
              <div key={point} className={`point-card anim anim-d${index + 1}`}>
                <span>
                  <Icon aria-hidden="true" size={22} />
                </span>
                <strong>{point}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExportBlock({ content }) {
  const ref = useRef(null);
  useReveal(ref);
  const screen = screenshotFiles.find((item) => item.id === 'bestof') ?? screenshotFiles[0];

  return (
    <section id="export" ref={ref} className="section-band export-band">
      <div className="section-shell export-layout">
        <div className="anim">
          <SectionIntro dark {...content.exportBlock} />
          <div className="export-points">
            {content.exportBlock.points.map((point, index) => {
              const Icon = exportIcons[index];
              return (
                <span key={point} className={`export-pill anim anim-d${index + 2}`}>
                  <Icon aria-hidden="true" size={18} />
                  {point}
                </span>
              );
            })}
          </div>
        </div>

        <div className="phone-showcase anim anim-d2">
          <img
            src={screenPath(content, screen)}
            alt={content.screens[9].title}
            width="1320"
            height="2868"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function LanguagesBlock({ content, currentLang, onLanguageChange }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="section-band paper-band compact-band">
      <div className="section-shell language-layout">
        <div className="anim">
          <p className="section-eyebrow">{content.nav.features}</p>
          <h2>{content.languages.title}</h2>
          <p>{content.languages.body}</p>
        </div>
        <div className="language-buttons anim anim-d2">
          {localeKeys.map((lang) => (
            <button
              key={lang}
              type="button"
              className={currentLang === lang ? 'is-active' : ''}
              onClick={() => onLanguageChange(lang)}
            >
              {locales[lang].label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadBlock({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="download-section">
      <div className="section-shell download-inner">
        <div className="anim">
          <p className="section-eyebrow">{content.download.eyebrow}</p>
          <h2>{content.download.title}</h2>
          <p>{content.download.body}</p>
        </div>
        <div className="download-actions anim anim-d2">
          <a className="button-primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            {content.download.cta}
            <ChevronRight aria-hidden="true" size={18} />
          </a>
          <a className="button-secondary" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
            Google Play
            <ChevronRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ content }) {
  const year = new Date().getFullYear();
  const showGermanLegal = content.htmlLang === 'de';

  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/assets/icon-192.png" alt="" />
            <span>
              <strong>VoyageLog</strong>
              <small>{content.footer.tagline}</small>
            </span>
          </div>
          <p>
            &copy; {year} VoyageLog
            {showGermanLegal ? (
              <>
                <br />
                Mendi Tekstilwaren / Dilara Demir Caglar
              </>
            ) : null}
          </p>
        </div>

        <div>
          <strong>App</strong>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">App Store</a>
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">Google Play</a>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">{content.footer.eula}</a>
        </div>

        <div>
          <strong>Legal</strong>
          <a href="/privacy/index.html">Privacy Policy</a>
          <a href="/terms/index.html">Terms of Use</a>
          <a href="/support/index.html">Support</a>
          {showGermanLegal ? <a href="/impressum/index.html">Impressum</a> : null}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => getRouteFromPath(window.location.pathname));
  const content = useMemo(() => locales[route.lang], [route.lang]);

  useEffect(() => {
    const onPop = () => setRoute(getRouteFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    updateHead(route);
  }, [route]);

  function handleLanguageChange(nextLang) {
    const nextPath = locales[nextLang].path;
    window.history.pushState({}, '', nextPath);
    setRoute(getRouteFromPath(nextPath));
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <Header content={content} currentLang={route.lang} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero content={content} />
        <ProofStrip content={content} />
        <Features content={content} />
        <Screens content={content} />
        <Privacy content={content} />
        <ExportBlock content={content} />
        <LanguagesBlock content={content} currentLang={route.lang} onLanguageChange={handleLanguageChange} />
        <DownloadBlock content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
