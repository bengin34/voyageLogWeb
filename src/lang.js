import { LANG_STORAGE_KEY, locales, matchLocale } from './content.js';

export function savedLang() {
  try {
    const value = window.localStorage.getItem(LANG_STORAGE_KEY);
    return value && locales[value] ? value : null;
  } catch {
    return null;
  }
}

export function rememberLang(lang) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // storage blocked, the choice just is not remembered
  }
}

// On the root URL only: send visitors to the locale they chose before, or
// failing that to the best match for their browser languages. Locale URLs
// (/de/, /en/ ...) are always served as asked, so shared links and crawlers
// are never redirected.
export function redirectToPreferredLang() {
  if (window.location.pathname !== '/') return false;
  const preferred = savedLang() ?? matchLocale(window.navigator.languages ?? [window.navigator.language]);
  if (!preferred || preferred === 'en') return false;
  window.location.replace(`${locales[preferred].path}${window.location.search}${window.location.hash}`);
  return true;
}
