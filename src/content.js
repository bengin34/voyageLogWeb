export const DOMAIN = ''; // TODO: set this when the final VoyageLog domain is decided.
export const SUPPORT_EMAIL = 'support@qrodesk.com';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758159402';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.voyagelog.app';

export const screenshotFiles = [
  {
    id: 'timeline',
    files: {
      'en-US': '01_01-timeline.png',
      'de-DE': '01_01-timeline.png',
      tr: '01_01-timeline.png',
    },
  },
  {
    id: 'journal',
    files: {
      'en-US': '02_02-journal.png',
      'de-DE': '02_02-journal.png',
      tr: '02_02-journal.png',
    },
  },
  {
    id: 'cities',
    files: {
      'en-US': '03_03-cities.png',
      'de-DE': '03_03-cities.png',
      tr: '03_03-cities.png',
    },
  },
  {
    id: 'entries',
    files: {
      'en-US': '04_04-entries.png',
      'de-DE': '04_04-entries.png',
      tr: '04_04-entries.png',
    },
  },
  {
    id: 'details',
    files: {
      'en-US': '05_05-details.png',
      'de-DE': '05_05-details.png',
      tr: '05_05-details.png',
    },
  },
  {
    id: 'places',
    files: {
      'en-US': '06_06-places.png',
      'de-DE': '06_06-places.png',
      tr: '06_06-places.png',
    },
  },
  {
    id: 'search',
    files: {
      'en-US': '07_07-search.png',
      'de-DE': '07_07-search.png',
      tr: '07_07-search.png',
    },
  },
  {
    id: 'filters',
    files: {
      'en-US': '08_08-filters.png',
      'de-DE': '08_08-filters.png',
      tr: '08_08-filters.png',
    },
  },
  {
    id: 'capture',
    files: {
      'en-US': '09_09-capture.png',
      'de-DE': '09-09-capture.png',
      tr: '09_09-capture.png',
    },
  },
  {
    id: 'bestof',
    files: {
      'en-US': '10_10-bestof.png',
      'de-DE': '10_10-bestof.png',
      tr: '10_10-bestof.png',
    },
  },
];

export const heroScreens = ['timeline', 'search', 'capture'];
export const localeKeys = ['en', 'de', 'tr'];

export const locales = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
    assetLocale: 'en-US',
    ogLocale: 'en_US',
    path: '/en/',
    metaTitle: 'VoyageLog - Private travel journal and trip timeline',
    metaDescription:
      'VoyageLog is a private, offline-first travel journal for trips, places, notes, photos, search, filters, and exports.',
    nav: {
      features: 'Features',
      screens: 'Screens',
      privacy: 'Privacy',
      export: 'Export',
    },
    hero: {
      eyebrow: 'Private travel journal',
      title: 'VoyageLog',
      lead: 'Keep every journey in a calm, continuous travel timeline. Add trips, places, notes, photos, and memories without handing your history to another cloud.',
      primaryCta: 'Download on the App Store',
      secondaryCta: 'Get it on Google Play',
      imageAlt: 'VoyageLog app timeline screen showing trips in one clear timeline.',
      badges: ['Offline-first', 'No account', 'Searchable trips'],
    },
    proof: [
      { value: '1 timeline', label: 'for every journey' },
      { value: '0 accounts', label: 'needed to begin' },
      { value: 'PDF + CSV', label: 'exports when needed' },
      { value: '3 languages', label: 'on the website' },
    ],
    intro: {
      eyebrow: 'Built for travelers',
      title: 'A travel memory system that stays organized after the trip ends.',
      body: 'VoyageLog gives every trip a place to live: routes, cities, journal entries, favorite moments, photos, tags, and practical details stay together so you can find them later.',
    },
    features: [
      {
        title: 'Trip timelines',
        body: 'Keep long weekends, rail routes, road trips, and city breaks in one clear timeline with dates and context.',
      },
      {
        title: 'Journal entries',
        body: 'Capture quick notes, moods, memorable meals, and small details while they are still fresh.',
      },
      {
        title: 'Cities and places',
        body: 'Build a personal map of countries, cities, venues, and places you want to remember or revisit.',
      },
      {
        title: 'Fast search',
        body: 'Find a trip, city, tag, note, or detail later without scrolling through camera rolls and chats.',
      },
      {
        title: 'Filters and best-of views',
        body: 'Turn your travel archive into useful lists: favorites, tags, years, countries, cities, and standout moments.',
      },
      {
        title: 'Private by design',
        body: 'VoyageLog works offline-first, requires no account, and keeps your travel history local by default.',
      },
    ],
    screens: [
      { title: 'All your trips in one clear timeline', body: 'See journeys by date, duration, location, and tags without losing the story.' },
      { title: 'Journal the moments that matter', body: 'Add notes, reflections, and tiny details while the memory is still bright.' },
      { title: 'Track cities and countries', body: 'Build a travel archive that is easier to browse than a photo library.' },
      { title: 'Keep entries structured', body: 'Group places, notes, photos, and tags inside each trip.' },
      { title: 'Open the full trip story', body: 'Review dates, route details, places, memories, and highlights together.' },
      { title: 'Save places worth returning to', body: 'Restaurants, viewpoints, stations, museums, and hidden corners stay findable.' },
      { title: 'Search your travel memory', body: 'Look up a city, tag, place, or note in seconds.' },
      { title: 'Filter without friction', body: 'Narrow the archive by dates, countries, cities, tags, and favorites.' },
      { title: 'Capture while you travel', body: 'Add a quick memory before the day moves on.' },
      { title: 'Collect your best moments', body: 'Turn scattered highlights into a personal best-of travel list.' },
    ],
    privacy: {
      eyebrow: 'Your travel history belongs to you',
      title: 'Offline-first. No account. No tracking by default.',
      body: 'VoyageLog is made for personal travel memories, not public performance. Your trips live on your device by default, and exports are created only when you choose to share or back them up.',
      points: ['Local data on your device', 'No login required', 'No analytics or ads by default'],
    },
    exportBlock: {
      eyebrow: 'Portable archive',
      title: 'Take your trips with you when you need them.',
      body: 'Export trips to PDF or CSV for backups, sharing, planning, or turning past journeys into a searchable personal archive.',
      points: ['PDF trip summaries', 'CSV backup exports', 'Useful for planning repeat visits'],
    },
    languages: {
      title: 'A site ready for international travelers',
      body: 'The website is prepared in English, Deutsch, and Türkçe, matching the screen sets you added for the app.',
    },
    download: {
      eyebrow: 'Get VoyageLog',
      title: 'Start building your private travel history today.',
      body: 'Download VoyageLog on iOS or Android and keep trips, places, notes, photos, search, filters, and exports close at hand.',
      cta: 'Download on the App Store',
    },
    footer: {
      tagline: 'Private. Searchable. Ready for the next journey.',
      eula: 'Apple standard EULA',
    },
  },
  de: {
    label: 'Deutsch',
    shortLabel: 'DE',
    htmlLang: 'de',
    assetLocale: 'de-DE',
    ogLocale: 'de_DE',
    path: '/de/',
    metaTitle: 'VoyageLog - Privates Reisetagebuch und Trip-Timeline',
    metaDescription:
      'VoyageLog ist ein privates, offline-first Reisetagebuch für Reisen, Orte, Notizen, Fotos, Suche, Filter und Exporte.',
    nav: {
      features: 'Funktionen',
      screens: 'Screens',
      privacy: 'Datenschutz',
      export: 'Export',
    },
    hero: {
      eyebrow: 'Privates Reisetagebuch',
      title: 'VoyageLog',
      lead: 'Halte jede Reise in einer ruhigen, fortlaufenden Timeline fest. Reisen, Orte, Notizen, Fotos und Erinnerungen bleiben bei dir.',
      primaryCta: 'Im App Store laden',
      secondaryCta: 'Bei Google Play laden',
      imageAlt: 'VoyageLog App-Timeline mit Reisen in einer klaren Ansicht.',
      badges: ['Offline-first', 'Kein Konto', 'Durchsuchbare Reisen'],
    },
    proof: [
      { value: '1 Timeline', label: 'für jede Reise' },
      { value: '0 Konten', label: 'zum Start nötig' },
      { value: 'PDF + CSV', label: 'Exports bei Bedarf' },
      { value: '3 Sprachen', label: 'auf der Website' },
    ],
    intro: {
      eyebrow: 'Für Reisende gemacht',
      title: 'Ein Reisespeicher, der nach der Rückkehr organisiert bleibt.',
      body: 'VoyageLog gibt jeder Reise einen festen Platz: Routen, Städte, Tagebucheinträge, Lieblingsmomente, Fotos, Tags und praktische Details bleiben zusammen und später leicht auffindbar.',
    },
    features: [
      {
        title: 'Trip-Timelines',
        body: 'Wochenenden, Zugreisen, Roadtrips und Städtetrips bleiben mit Datum, Dauer und Kontext in einer klaren Timeline.',
      },
      {
        title: 'Reisejournal',
        body: 'Halte Notizen, Stimmungen, besondere Mahlzeiten und kleine Details fest, solange sie noch frisch sind.',
      },
      {
        title: 'Städte und Orte',
        body: 'Baue eine persönliche Karte aus Ländern, Städten, Locations und Orten, die du wiederfinden möchtest.',
      },
      {
        title: 'Schnelle Suche',
        body: 'Finde Reise, Stadt, Tag, Notiz oder Detail später, ohne durch Fotos und Chats zu scrollen.',
      },
      {
        title: 'Filter und Best-of',
        body: 'Mach aus deinem Archiv nützliche Listen: Favoriten, Tags, Jahre, Länder, Städte und besondere Momente.',
      },
      {
        title: 'Privat gestaltet',
        body: 'VoyageLog funktioniert offline-first, braucht kein Konto und speichert deine Reisegeschichte lokal.',
      },
    ],
    screens: [
      { title: 'Alle Reisen in einer klaren Timeline', body: 'Reisen nach Datum, Dauer, Ort und Tags sehen, ohne den roten Faden zu verlieren.' },
      { title: 'Momente im Journal festhalten', body: 'Notizen, Gedanken und kleine Details speichern, solange die Erinnerung hell ist.' },
      { title: 'Städte und Länder verfolgen', body: 'Ein Reisearchiv aufbauen, das leichter zu durchsuchen ist als die Fotomediathek.' },
      { title: 'Einträge strukturiert halten', body: 'Orte, Notizen, Fotos und Tags bleiben innerhalb jeder Reise geordnet.' },
      { title: 'Die ganze Reise öffnen', body: 'Daten, Route, Orte, Erinnerungen und Highlights zusammen prüfen.' },
      { title: 'Orte zum Wiederkommen speichern', body: 'Restaurants, Aussichtspunkte, Bahnhöfe, Museen und Ecken bleiben auffindbar.' },
      { title: 'Reiseerinnerungen durchsuchen', body: 'Stadt, Tag, Ort oder Notiz in Sekunden wiederfinden.' },
      { title: 'Filtern ohne Reibung', body: 'Archiv nach Datum, Land, Stadt, Tag und Favoriten eingrenzen.' },
      { title: 'Unterwegs schnell erfassen', body: 'Eine Erinnerung hinzufügen, bevor der Tag weiterzieht.' },
      { title: 'Die besten Momente sammeln', body: 'Aus verstreuten Highlights eine persönliche Best-of-Reiseliste machen.' },
    ],
    privacy: {
      eyebrow: 'Deine Reisegeschichte gehört dir',
      title: 'Offline-first. Kein Konto. Standardmäßig kein Tracking.',
      body: 'VoyageLog ist für persönliche Reiseerinnerungen gemacht, nicht für öffentliche Inszenierung. Deine Reisen bleiben lokal auf deinem Gerät; Exporte entstehen nur, wenn du sie teilen oder sichern möchtest.',
      points: ['Lokale Daten auf deinem Gerät', 'Kein Login nötig', 'Standardmäßig keine Analyse oder Werbung'],
    },
    exportBlock: {
      eyebrow: 'Mobiles Archiv',
      title: 'Nimm deine Reisen mit, wenn du sie brauchst.',
      body: 'Exportiere Reisen als PDF oder CSV für Backups, zum Teilen, für die Planung oder als durchsuchbares persönliches Archiv.',
      points: ['PDF-Zusammenfassungen', 'CSV-Backups', 'Hilfreich für Wiederbesuche'],
    },
    languages: {
      title: 'Bereit für internationale Reisende',
      body: 'Die Website ist in English, Deutsch und Türkçe vorbereitet und passt zu den Screen-Sets, die du für die App ergänzt hast.',
    },
    download: {
      eyebrow: 'VoyageLog laden',
      title: 'Baue ab heute deine private Reisegeschichte auf.',
      body: 'Lade VoyageLog für iOS oder Android und halte Reisen, Orte, Notizen, Fotos, Suche, Filter und Exporte griffbereit.',
      cta: 'Im App Store laden',
    },
    footer: {
      tagline: 'Privat. Durchsuchbar. Bereit für die nächste Reise.',
      eula: 'Apple Standard-EULA',
    },
  },
  tr: {
    label: 'Türkçe',
    shortLabel: 'TR',
    htmlLang: 'tr',
    assetLocale: 'tr',
    ogLocale: 'tr_TR',
    path: '/tr/',
    metaTitle: 'VoyageLog - Özel seyahat günlüğü ve gezi zaman çizelgesi',
    metaDescription:
      'VoyageLog geziler, yerler, notlar, fotoğraflar, arama, filtreler ve dışa aktarımlar için özel, çevrimdışı öncelikli bir seyahat günlüğüdür.',
    nav: {
      features: 'Özellikler',
      screens: 'Ekranlar',
      privacy: 'Gizlilik',
      export: 'Dışa aktar',
    },
    hero: {
      eyebrow: 'Özel seyahat günlüğü',
      title: 'VoyageLog',
      lead: 'Her yolculuğu sakin ve sürekli bir seyahat akışında tut. Geziler, yerler, notlar, fotoğraflar ve anılar başka bir buluta gitmeden sende kalsın.',
      primaryCta: "App Store'dan indir",
      secondaryCta: "Google Play'den indir",
      imageAlt: 'VoyageLog uygulamasında gezileri net bir zaman çizelgesinde gösteren ekran.',
      badges: ['Çevrimdışı öncelikli', 'Hesap yok', 'Aranabilir geziler'],
    },
    proof: [
      { value: '1 akış', label: 'her yolculuk için' },
      { value: '0 hesap', label: 'başlamak için yeterli' },
      { value: 'PDF + CSV', label: 'gerektiğinde dışa aktar' },
      { value: '3 dil', label: 'web sitesi hazır' },
    ],
    intro: {
      eyebrow: 'Gezginler için tasarlandı',
      title: 'Gezi bittikten sonra da düzenli kalan bir seyahat hafızası.',
      body: 'VoyageLog her geziye düzenli bir yer açar: rotalar, şehirler, günlük notları, favori anlar, fotoğraflar, etiketler ve pratik detaylar birlikte kalır.',
    },
    features: [
      {
        title: 'Gezi zaman çizelgeleri',
        body: 'Hafta sonu kaçamakları, tren rotaları, road tripler ve şehir gezileri tarih ve bağlamla tek akışta durur.',
      },
      {
        title: 'Seyahat günlüğü',
        body: 'Kısa notları, ruh halini, unutulmaz yemekleri ve küçük detayları hafıza tazeyken kaydet.',
      },
      {
        title: 'Şehirler ve yerler',
        body: 'Hatırlamak veya tekrar dönmek istediğin ülkeler, şehirler ve mekanlardan kişisel bir harita kur.',
      },
      {
        title: 'Hızlı arama',
        body: 'Bir geziyi, şehri, etiketi, notu veya detayı fotoğraf galerisinde kaybolmadan bul.',
      },
      {
        title: 'Filtreler ve en iyiler',
        body: 'Arşivini favoriler, etiketler, yıllar, ülkeler, şehirler ve öne çıkan anlarla kullanışlı listelere çevir.',
      },
      {
        title: 'Gizlilik merkezde',
        body: 'VoyageLog çevrimdışı öncelikli çalışır, hesap istemez ve seyahat geçmişini varsayılan olarak cihazında tutar.',
      },
    ],
    screens: [
      { title: 'Tüm gezilerin tek net akışta', body: 'Gezileri tarih, süre, konum ve etiketlerle hikayeyi kaybetmeden gör.' },
      { title: 'Önemli anları günlüğe ekle', body: 'Notları, düşünceleri ve küçük detayları anı hala canlıyken kaydet.' },
      { title: 'Şehirleri ve ülkeleri takip et', body: 'Fotoğraf galerisinden daha kolay taranan bir seyahat arşivi oluştur.' },
      { title: 'Kayıtları düzenli tut', body: 'Yerler, notlar, fotoğraflar ve etiketler her gezinin içinde gruplanır.' },
      { title: 'Gezinin tüm hikayesini aç', body: 'Tarihleri, rota detaylarını, yerleri, anıları ve öne çıkanları birlikte incele.' },
      { title: 'Dönmek isteyeceğin yerleri sakla', body: 'Restoranlar, manzaralar, istasyonlar, müzeler ve gizli köşeler bulunabilir kalır.' },
      { title: 'Seyahat hafızanda ara', body: 'Şehir, etiket, yer veya notu saniyeler içinde bul.' },
      { title: 'Zahmetsiz filtrele', body: 'Arşivi tarih, ülke, şehir, etiket ve favorilere göre daralt.' },
      { title: 'Yoldayken hızlı yakala', body: 'Gün akıp gitmeden kısa bir anı ekle.' },
      { title: 'En iyi anlarını topla', body: 'Dağınık öne çıkanları kişisel bir best-of seyahat listesine dönüştür.' },
    ],
    privacy: {
      eyebrow: 'Seyahat geçmişin sana ait',
      title: 'Önce çevrimdışı. Hesap yok. Varsayılan takip yok.',
      body: 'VoyageLog herkese açık performans için değil, kişisel seyahat anıları için tasarlandı. Gezilerin varsayılan olarak cihazında kalır; dışa aktarımlar sadece sen seçtiğinde oluşur.',
      points: ['Cihazında yerel veri', 'Giriş gerekmez', 'Varsayılan analiz veya reklam yok'],
    },
    exportBlock: {
      eyebrow: 'Taşınabilir arşiv',
      title: 'Gerektiğinde gezilerini yanında götür.',
      body: 'Gezileri yedekleme, paylaşma, planlama veya aranabilir kişisel arşiv için PDF ya da CSV olarak dışa aktar.',
      points: ['PDF gezi özetleri', 'CSV yedek dışa aktarım', 'Tekrar ziyaret planı için kullanışlı'],
    },
    languages: {
      title: 'Uluslararası gezginler için hazır',
      body: 'Web sitesi English, Deutsch ve Türkçe olarak hazırlandı; eklediğin uygulama ekran setleriyle uyumlu çalışıyor.',
    },
    download: {
      eyebrow: 'VoyageLog indir',
      title: 'Özel seyahat geçmişini bugün oluşturmaya başla.',
      body: "VoyageLog'u iOS veya Android için indir; geziler, yerler, notlar, fotoğraflar, arama, filtreler ve dışa aktarımlar elinin altında kalsın.",
      cta: "App Store'dan indir",
    },
    footer: {
      tagline: 'Özel. Aranabilir. Sıradaki yolculuğa hazır.',
      eula: 'Apple standart EULA',
    },
  },
};

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
  return absoluteUrl(route.isRoot ? '/' : locales[route.lang].path);
}

export function getRouteAlternates() {
  return [
    ...localeKeys.map((lang) => ({
      lang,
      href: absoluteUrl(locales[lang].path),
    })),
    {
      lang: 'x-default',
      href: absoluteUrl('/'),
    },
  ];
}

export function getScreenshotPath(assetLocale, screen) {
  return `/assets/screenshots/${assetLocale}/${screen.files[assetLocale] ?? screen.files['en-US']}`;
}
