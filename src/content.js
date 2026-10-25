export const DOMAIN = 'https://getvoyagelog.app';
export const SUPPORT_EMAIL = 'support@qrodesk.com';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758159402';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.voyagelog.app';


export const appLanguages =
  'العربية · Català · Čeština · Dansk · Deutsch · Ελληνικά · English · Español · Suomi · Français · עברית · हिन्दी · Hrvatski · Magyar · Bahasa Indonesia · Italiano · 日本語 · 한국어 · Bahasa Melayu · Nederlands · Norsk · Polski · Português · Română · Русский · Slovenčina · Svenska · ไทย · Türkçe · Українська · Tiếng Việt · 简体中文';

import en from './locales/en.js';
import de from './locales/de.js';
import tr from './locales/tr.js';
import es from './locales/es.js';
import fr from './locales/fr.js';
import it from './locales/it.js';
import pt from './locales/pt.js';
import nl from './locales/nl.js';
import pl from './locales/pl.js';
import ru from './locales/ru.js';
import ja from './locales/ja.js';
import ko from './locales/ko.js';
import ar from './locales/ar.js';
import zh from './locales/zh.js';

export const locales = { en, de, tr, es, fr, it, pt, nl, pl, ru, ja, ko, ar, zh };
export const localeKeys = Object.keys(locales);

// Languages that have blog articles (every locale now). Blog index pages only exist for these.
export const blogLocaleKeys = localeKeys;

export const LANG_STORAGE_KEY = 'vl-lang';

// Picks the best site locale for a browser language list (navigator.languages).
// Returns null when nothing matches, so the caller keeps the default English page.
export function matchLocale(languages = []) {
  for (const tag of languages) {
    const primary = String(tag).toLowerCase().split('-')[0];
    if (localeKeys.includes(primary)) return primary;
  }
  return null;
}


export function absoluteUrl(path) {
  return DOMAIN ? `${DOMAIN}${path}` : path;
}

export function getRouteFromPath(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const lang = localeKeys.includes(firstSegment) ? firstSegment : 'en';
  return {
    kind: 'home',
    lang,
    isRoot: !localeKeys.includes(firstSegment),
  };
}

export function getRouteCanonical(route) {
  return absoluteUrl(locales[route.lang].path);
}

export function blogIndexPath(lang) {
  return `/${lang}/blog/`;
}

export function hasBlog(lang) {
  return blogLocaleKeys.includes(lang);
}

export function createHomeStructuredData(route) {
  const content = locales[route.lang];
  const canonical = getRouteCanonical(route);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: 'VoyageLog',
        url: absoluteUrl('/'),
        logo: absoluteUrl('/assets/icon-512.png'),
        email: SUPPORT_EMAIL,
        sameAs: [APP_STORE_URL, GOOGLE_PLAY_URL],
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        name: 'VoyageLog',
        url: absoluteUrl('/'),
        inLanguage: localeKeys.map((lang) => locales[lang].htmlLang),
        publisher: { '@id': absoluteUrl('/#organization') },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${canonical}#app`,
        name: 'VoyageLog',
        applicationCategory: 'TravelApplication',
        operatingSystem: 'iOS, Android',
        description: content.metaDescription,
        url: canonical,
        image: absoluteUrl('/assets/icon-512.png'),
        sameAs: [APP_STORE_URL, GOOGLE_PLAY_URL],
        installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': absoluteUrl('/#organization') },
        inLanguage: localeKeys.map((lang) => locales[lang].htmlLang),
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        inLanguage: content.htmlLang,
        mainEntity: content.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export function getRouteAlternates() {
  return [
    ...localeKeys.map((lang) => ({
      lang: locales[lang].htmlLang,
      href: absoluteUrl(locales[lang].path),
    })),
    {
      lang: 'x-default',
      href: absoluteUrl('/'),
    },
  ];
}

export function appScreen(assetLocale, name) {
  return `/assets/app/${assetLocale}/${name}.webp`;
}
