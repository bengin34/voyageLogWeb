export const DOMAIN = 'https://getvoyagelog.app';
export const SUPPORT_EMAIL = 'support@qrodesk.com';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758159402';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.voyagelog.app';

export const localeKeys = ['en', 'de', 'tr'];

export const appLanguages =
  'العربية · Català · Čeština · Dansk · Deutsch · Ελληνικά · English · Español · Suomi · Français · עברית · हिन्दी · Hrvatski · Magyar · Bahasa Indonesia · Italiano · 日本語 · 한국어 · Bahasa Melayu · Nederlands · Norsk · Polski · Português · Română · Русский · Slovenčina · Svenska · ไทย · Türkçe · Українська · Tiếng Việt · 简体中文';

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
      'VoyageLog is a private, offline-first travel journal. Keep trips, places, moments, photos and notes in one searchable timeline. No account needed.',
    nav: { home: 'VoyageLog home', language: 'Language', features: 'Features', search: 'Search', privacy: 'Privacy', faq: 'Questions' },
    hero: {
      title: 'Every trip, one calm timeline.',
      lead: 'VoyageLog is a private travel journal for your phone. Save places, moments, photos and notes on each trip, then find any of them again in seconds. No account. No feed. Works offline.',
      appStore: 'Download on the App Store',
      googlePlay: 'Get it on Google Play',
    },
    chapters: [
      {
        id: 'timeline',
        screen: 'timeline',
        alt: 'VoyageLog trips screen: every journey in one timeline with dates, duration and tags.',
        title: 'All your journeys, in date order.',
        body: [
          'Winter rail through Prague and Vienna, a long weekend in Barcelona, ten days in Italy. Each trip is a card on one timeline with its dates, length, countries and tags.',
          'Scroll back a year and the story is still there, in order, the way you lived it.',
        ],
      },
      {
        id: 'journal',
        screen: 'journal',
        alt: 'A trip with a place entry and a moment entry, each with photos, notes, tags and a rating.',
        title: 'Places and moments, kept apart.',
        body: [
          'A café stop is a place. A sunrise on a bridge is a moment. Each gets its own entry with photos, a note, tags and a rating out of five.',
          'Later you can tell what you liked from what simply happened.',
        ],
      },
      {
        id: 'cities',
        screen: 'entries',
        alt: 'A two-city trip split into Prague and Vienna with entry counts and share buttons.',
        title: 'Long trips, city by city.',
        body: [
          'Add every stop of a longer journey as its own city. Each city carries its dates and entries, can be collapsed, and can be shared on its own as a card, a PDF or a file.',
        ],
      },
      {
        id: 'details',
        screen: 'details',
        alt: 'An entry with a large photo, a rating, a map location and notes.',
        title: 'The whole entry, one tap away.',
        body: [
          'Open an entry and everything is there: the photo, your rating, the trip it belongs to, a place you can open in Apple or Google Maps, and the note you wrote while you were still standing there.',
          'Paste a map link and the place fills itself in.',
        ],
      },
      {
        id: 'capture',
        screen: 'capture',
        alt: 'The new entry form with place or moment, city, title, location, date, rating and notes.',
        title: 'Save it before the day moves on.',
        body: [
          'A new entry is a title and a tap. Everything else is optional: location, date, rating, notes, tags, photos and video. The places you saved most recently are one tap away.',
          'Swiped the wrong entry away? Undo is right there for five seconds.',
        ],
      },
    ],
    more: {
      title: 'More in the app',
      items: [
        { t: 'Trip map.', b: 'Every place with coordinates appears on a map of the trip, and on one map of everywhere you have been.' },
        { t: 'Year in Travel.', b: 'A month-by-month look back at your year, with a card you can share.' },
        { t: 'City lists.', b: 'Plan the cities you want to see, tick them off as you go, or start from a ready-made list like Christmas markets or cherry blossom season.' },
        { t: 'Badges and seasonal challenges.', b: 'Fifty-plus badges for what you actually do, plus short challenges that only run for a season.' },
        { t: 'Trip recap.', b: 'A single card with your top-rated places, cities and numbers, ready to send to a friend.' },
        { t: 'On this day.', b: 'A quiet reminder when you saved a place on this very date in an earlier year.' },
      ],
    },
    search: {
      title: ['Find it', 'again.'],
      label: 'Search your trips',
      placeholder: 'Try pizza, sunrise or Vienna',
      hintLabel: 'Or tap one:',
      hints: ['pizza', 'sunrise', 'vienna', 'bar'],
      resultsLabel: 'Results',
      matched: { title: 'Matched in title', notes: 'Matched in notes', tags: 'Matched in tags', trip: 'Matched in trip' },
      place: 'Place',
      moment: 'Moment',
      inTrip: 'in',
      empty: 'Nothing saved with that word yet.',
      note: 'Sample trips, searched live in your browser. In the app it works on your own entries, with filters for type, rating and tags.',
      entries: [
        { title: 'Old Town Square Morning Walk', trip: 'Winter Rail: Prague & Vienna', kind: 'place', rating: 4.8, notes: 'Astronomical clock, light snow, and empty streets before 9am.', tags: ['history', 'landmark'] },
        { title: 'Sunrise at Charles Bridge', trip: 'Winter Rail: Prague & Vienna', kind: 'moment', rating: 0, notes: 'Freezing cold but worth it for near-empty views over the Vltava.', tags: ['sunrise', 'viewpoint'] },
        { title: 'Belvedere Museum Visit', trip: 'Winter Rail: Prague & Vienna', kind: 'place', rating: 4.7, notes: 'Klimt collection highlight, manageable weekday queues.', tags: ['culture', 'museum', 'vienna'] },
        { title: 'Café Central', trip: 'Winter Rail: Prague & Vienna', kind: 'place', rating: 4.6, notes: 'Melange and apple strudel while the snow came down on Vienna.', tags: ['coffee', 'vienna'] },
        { title: 'Sagrada Família Tower Tour', trip: 'Spring Colors: Barcelona & Seville', kind: 'place', rating: 4.9, notes: 'Book the morning slot. The stained glass is best before noon.', tags: ['architecture', 'barcelona'] },
        { title: 'Bar Cañete', trip: 'Spring Colors: Barcelona & Seville', kind: 'place', rating: 4.7, notes: 'Tapas at the counter: croquetas, anchovies and cold vermouth.', tags: ['food', 'tapas', 'bar'] },
        { title: 'Pizzarium Bonci', trip: 'Italian Escape: Milan, Rome & Amalfi', kind: 'place', rating: 4.9, notes: 'Pizza by the slice, worth the queue every single time.', tags: ['pizza', 'food', 'rome'] },
        { title: 'Da Michele Roma', trip: 'Italian Escape: Milan, Rome & Amalfi', kind: 'place', rating: 4.8, notes: 'Classic Neapolitan pizza, margherita only.', tags: ['pizza', 'food', 'rome'] },
        { title: 'Brera District Aperitivo', trip: 'Italian Escape: Milan, Rome & Amalfi', kind: 'place', rating: 4.6, notes: 'Spritz hour with a plate of snacks in the Brera backstreets.', tags: ['bar', 'milan'] },
        { title: 'Marina Grande Beach Afternoon', trip: 'Italian Escape: Milan, Rome & Amalfi', kind: 'moment', rating: 0, notes: 'Laid-back beach stop before the last ferry.', tags: ['coastal', 'beach'] },
      ],
    },
    stats: {
      title: 'Your numbers, and your favourites.',
      body: [
        'The Insights tab counts what you have done: trips, cities, countries, photos and days away, along with your most visited country and your average rating.',
        'Best-of lists turn the entries you loved into rankings you can reorder and share as an image or a PDF. Best pizza in Italy. Best coffee in Lisbon. Your list, your order.',
      ],
      alt: 'The Insights screen with trip, city, country and photo counts, best-of lists and top tags.',
      alt2: 'A best-of list called Best Pizzas in Italy with three ranked places.',
    },
    privacy: {
      id: 'privacy',
      title: 'Yours alone. On your phone.',
      body: [
        'VoyageLog works completely offline. There is no account to create, no feed to scroll and nobody to follow. Your trips, notes and photos are stored on your device.',
        'When you want a copy, you take it yourself.',
      ],
      formats: [
        { t: 'JSON', b: 'a full backup you can import again on a new phone, with duplicates skipped, overwritten or merged as you choose' },
        { t: 'Excel', b: 'every trip and entry as a spreadsheet' },
        { t: 'ZIP', b: 'the same data with all your photos and videos bundled in' },
        { t: 'PDF and image', b: 'a trip, a city or a best-of list as a card to share' },
      ],
    },
    languages: {
      title: 'Speaks your language.',
      body: 'VoyageLog is translated into more than thirty languages, including right-to-left layouts for Arabic and Hebrew.',
    },
    plans: {
      title: 'Free to start. Pro when you need more.',
      body: [
        'The free version is a complete travel journal with a limited number of trips: places, moments, ratings, notes, basic search and offline access.',
        'VoyageLog Pro removes the limits. Unlimited trips, entries, city lists and best-of lists, up to 50 photos per entry, advanced search filters, the full Year in Travel and exports of everything you have saved. Choose a yearly subscription or pay once for lifetime. Both include the same features.',
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        { q: 'Do I need an account?', a: 'No. There is nothing to sign up for. Open the app and start your first trip.' },
        { q: 'Does it work without internet?', a: 'Yes. Everything is stored on your phone, so you can write entries on a plane, in a tunnel or abroad without roaming.' },
        { q: 'Where is my data stored?', a: 'On your device only. We have no server holding your trips. Export a backup whenever you like, and the app reminds you every ten trips.' },
        { q: 'Can I move to a new phone?', a: 'Yes. Export a JSON or ZIP backup, install VoyageLog on the new phone and import it.' },
        { q: 'Is it a trip planner?', a: 'No. VoyageLog is for remembering trips, not planning them. City lists are the one exception, for the places you hope to see.' },
        { q: 'Which phones does it run on?', a: 'iPhone and Android phones.' },
        { q: 'Is it free?', a: 'You can use it for free with a limited number of trips. Pro is optional and adds unlimited use, advanced search and exports.' },
        { q: 'How do I get help?', a: 'Write to us and a person will answer.' },
      ],
    },
    cta: { sentence: 'Start your first trip in under a minute. It is free to try, and it stays on your phone.', button: 'Download on the App Store', secondary: 'Google Play' },
    footer: { tagline: 'A private travel journal', terms: 'Terms', privacy: 'Privacy', support: 'Support', eula: 'Apple EULA', impressum: 'Impressum', contact: 'Email us' },
  },

  de: {
    label: 'Deutsch',
    shortLabel: 'DE',
    htmlLang: 'de',
    assetLocale: 'de-DE',
    ogLocale: 'de_DE',
    path: '/de/',
    metaTitle: 'VoyageLog - Privates Reisetagebuch und Reise-Timeline',
    metaDescription:
      'VoyageLog ist ein privates Reisetagebuch, das ohne Internet funktioniert. Reisen, Orte, Momente, Fotos und Notizen in einer durchsuchbaren Timeline. Kein Konto nötig.',
    nav: { home: 'VoyageLog Startseite', language: 'Sprache', features: 'Funktionen', search: 'Suche', privacy: 'Datenschutz', faq: 'Fragen' },
    hero: {
      title: 'Jede Reise, eine ruhige Timeline.',
      lead: 'VoyageLog ist ein privates Reisetagebuch für dein Handy. Speichere Orte, Momente, Fotos und Notizen zu jeder Reise und finde sie in Sekunden wieder. Kein Konto. Kein Feed. Funktioniert offline.',
      appStore: 'Im App Store laden',
      googlePlay: 'Bei Google Play laden',
    },
    chapters: [
      {
        id: 'timeline',
        screen: 'timeline',
        alt: 'VoyageLog Reiseübersicht: alle Reisen in einer Timeline mit Datum, Dauer und Tags.',
        title: 'Alle Reisen, nach Datum geordnet.',
        body: [
          'Mit dem Zug durch Prag und Wien, ein langes Wochenende in Barcelona, zehn Tage Italien. Jede Reise ist eine Karte in einer Timeline, mit Datum, Dauer, Ländern und Tags.',
          'Auch ein Jahr später ist die Geschichte noch da, in der Reihenfolge, in der du sie erlebt hast.',
        ],
      },
      {
        id: 'journal',
        screen: 'journal',
        alt: 'Eine Reise mit einem Ort und einem Moment, jeweils mit Foto, Notiz, Tags und Bewertung.',
        title: 'Orte und Momente, getrennt gespeichert.',
        body: [
          'Ein Café ist ein Ort. Ein Sonnenaufgang auf einer Brücke ist ein Moment. Beides bekommt einen eigenen Eintrag mit Fotos, Notiz, Tags und einer Bewertung von null bis fünf.',
          'So weißt du später, was dir gefallen hat und was einfach passiert ist.',
        ],
      },
      {
        id: 'cities',
        screen: 'entries',
        alt: 'Eine Reise nach Städten gegliedert: Prag und Wien mit Anzahl der Einträge und Teilen-Buttons.',
        title: 'Lange Reisen, Stadt für Stadt.',
        body: [
          'Lege jeden Stopp einer längeren Reise als eigene Stadt an. Jede Stadt hat ihre Daten und Einträge, lässt sich einklappen und einzeln teilen, als Karte, PDF oder Datei.',
        ],
      },
      {
        id: 'details',
        screen: 'details',
        alt: 'Ein Eintrag mit großem Foto, Bewertung, Kartenstandort und Notizen.',
        title: 'Der ganze Eintrag, ein Tipp entfernt.',
        body: [
          'Öffne einen Eintrag und alles ist da: das Foto, deine Bewertung, die Reise, zu der er gehört, ein Ort, den du in Apple oder Google Maps öffnen kannst, und die Notiz, die du direkt vor Ort geschrieben hast.',
          'Füge einen Kartenlink ein, und der Ort füllt sich von selbst.',
        ],
      },
      {
        id: 'capture',
        screen: 'capture',
        alt: 'Das Formular für einen neuen Eintrag mit Ort oder Moment, Stadt, Titel, Standort, Datum, Bewertung und Notizen.',
        title: 'Festhalten, bevor der Tag weiterzieht.',
        body: [
          'Ein neuer Eintrag besteht aus einem Titel und einem Tipp. Alles andere ist optional: Standort, Datum, Bewertung, Notizen, Tags, Fotos und Videos. Die zuletzt gespeicherten Orte sind einen Tipp entfernt.',
          'Den falschen Eintrag weggewischt? Fünf Sekunden lang kannst du es rückgängig machen.',
        ],
      },
    ],
    more: {
      title: 'Mehr in der App',
      items: [
        { t: 'Reisekarte.', b: 'Jeder Ort mit Koordinaten erscheint auf einer Karte der Reise und auf einer Karte von allem, was du besucht hast.' },
        { t: 'Year in Travel.', b: 'Ein Rückblick auf dein Jahr, Monat für Monat, mit einer Karte zum Teilen.' },
        { t: 'Städtelisten.', b: 'Plane die Städte, die du sehen willst, hake sie unterwegs ab oder starte mit einer fertigen Liste wie Weihnachtsmärkte oder Kirschblüte.' },
        { t: 'Abzeichen und Saison-Challenges.', b: 'Über fünfzig Abzeichen für das, was du wirklich tust, dazu kurze Challenges, die nur eine Saison lang laufen.' },
        { t: 'Reise-Rückblick.', b: 'Eine Karte mit deinen bestbewerteten Orten, Städten und Zahlen, bereit für Freunde.' },
        { t: 'An diesem Tag.', b: 'Eine leise Erinnerung, wenn du an genau diesem Datum in einem früheren Jahr einen Ort gespeichert hast.' },
      ],
    },
    search: {
      title: ['Wiederfinden,', 'sofort.'],
      label: 'Durchsuche deine Reisen',
      placeholder: 'Probiere Pizza, Sonnenaufgang oder Wien',
      hintLabel: 'Oder tippe eins an:',
      hints: ['pizza', 'sonnenaufgang', 'wien', 'bar'],
      resultsLabel: 'Ergebnisse',
      matched: { title: 'Treffer im Titel', notes: 'Treffer in den Notizen', tags: 'Treffer in den Tags', trip: 'Treffer in der Reise' },
      place: 'Ort',
      moment: 'Moment',
      inTrip: 'in',
      empty: 'Dazu ist noch nichts gespeichert.',
      note: 'Beispielreisen, live im Browser durchsucht. In der App suchst du in deinen eigenen Einträgen, mit Filtern für Typ, Bewertung und Tags.',
      entries: [
        { title: 'Morgenspaziergang Altstädter Ring', trip: 'Winterreise: Prag & Wien', kind: 'place', rating: 4.8, notes: 'Astronomische Uhr, leichter Schnee und leere Straßen vor neun Uhr.', tags: ['geschichte', 'wahrzeichen'] },
        { title: 'Sonnenaufgang an der Karlsbrücke', trip: 'Winterreise: Prag & Wien', kind: 'moment', rating: 0, notes: 'Eiskalt, aber der fast leere Blick über die Moldau war es wert.', tags: ['sonnenaufgang', 'aussicht'] },
        { title: 'Besuch im Belvedere', trip: 'Winterreise: Prag & Wien', kind: 'place', rating: 4.7, notes: 'Highlight: die Klimt-Sammlung, unter der Woche überschaubare Schlangen.', tags: ['kultur', 'museum', 'wien'] },
        { title: 'Café Central', trip: 'Winterreise: Prag & Wien', kind: 'place', rating: 4.6, notes: 'Melange und Apfelstrudel, während es über Wien schneite.', tags: ['kaffee', 'wien'] },
        { title: 'Sagrada Família Turmführung', trip: 'Frühlingsfarben: Barcelona & Sevilla', kind: 'place', rating: 4.9, notes: 'Den Vormittagstermin buchen. Die bunten Fenster sind vor Mittag am schönsten.', tags: ['architektur', 'barcelona'] },
        { title: 'Bar Cañete', trip: 'Frühlingsfarben: Barcelona & Sevilla', kind: 'place', rating: 4.7, notes: 'Tapas am Tresen: Kroketten, Sardellen und kalter Vermut.', tags: ['essen', 'tapas', 'bar'] },
        { title: 'Pizzarium Bonci', trip: 'Italien-Auszeit: Mailand, Rom & Amalfi', kind: 'place', rating: 4.9, notes: 'Pizza vom Blech, das Anstehen lohnt sich jedes Mal.', tags: ['pizza', 'essen', 'rom'] },
        { title: 'Da Michele Roma', trip: 'Italien-Auszeit: Mailand, Rom & Amalfi', kind: 'place', rating: 4.8, notes: 'Klassische neapolitanische Pizza, nur Margherita.', tags: ['pizza', 'essen', 'rom'] },
        { title: 'Aperitivo im Brera-Viertel', trip: 'Italien-Auszeit: Mailand, Rom & Amalfi', kind: 'place', rating: 4.6, notes: 'Spritz-Stunde mit einem Teller Snacks in den Gassen von Brera.', tags: ['bar', 'mailand'] },
        { title: 'Nachmittag am Marina Grande', trip: 'Italien-Auszeit: Mailand, Rom & Amalfi', kind: 'moment', rating: 0, notes: 'Entspannter Strandstopp vor der letzten Fähre.', tags: ['küste', 'strand'] },
      ],
    },
    stats: {
      title: 'Deine Zahlen und deine Favoriten.',
      body: [
        'Der Insights-Tab zählt, was du erlebt hast: Reisen, Städte, Länder, Fotos und Tage unterwegs, dazu dein meistbesuchtes Land und deine Durchschnittsbewertung.',
        'Mit Best-of-Listen machst du aus deinen liebsten Einträgen Ranglisten, die du umsortieren und als Bild oder PDF teilen kannst. Beste Pizza in Italien. Bester Kaffee in Lissabon. Deine Liste, deine Reihenfolge.',
      ],
      alt: 'Der Insights-Bildschirm mit Zahlen zu Reisen, Städten, Ländern und Fotos, Best-of-Listen und Top-Tags.',
      alt2: 'Eine Best-of-Liste „Beste Pizzen in Italien“ mit drei platzierten Orten.',
    },
    privacy: {
      id: 'privacy',
      title: 'Nur deins. Auf deinem Handy.',
      body: [
        'VoyageLog funktioniert komplett offline. Es gibt kein Konto, keinen Feed und niemanden, dem du folgen musst. Deine Reisen, Notizen und Fotos liegen auf deinem Gerät.',
        'Wenn du eine Kopie willst, machst du sie selbst.',
      ],
      formats: [
        { t: 'JSON', b: 'ein vollständiges Backup, das du auf einem neuen Handy wieder importierst, Duplikate wahlweise überspringen, überschreiben oder zusammenführen' },
        { t: 'Excel', b: 'jede Reise und jeder Eintrag als Tabelle' },
        { t: 'ZIP', b: 'dieselben Daten mit allen Fotos und Videos' },
        { t: 'PDF und Bild', b: 'eine Reise, eine Stadt oder eine Best-of-Liste als Karte zum Teilen' },
      ],
    },
    languages: {
      title: 'Spricht deine Sprache.',
      body: 'VoyageLog ist in über dreißig Sprachen übersetzt, einschließlich Rechts-nach-links-Layouts für Arabisch und Hebräisch.',
    },
    plans: {
      title: 'Kostenlos starten, Pro für mehr.',
      body: [
        'Die kostenlose Version ist ein vollständiges Reisetagebuch mit einer begrenzten Zahl von Reisen: Orte, Momente, Bewertungen, Notizen, einfache Suche und Offline-Zugriff.',
        'VoyageLog Pro hebt die Grenzen auf. Unbegrenzt Reisen, Einträge, Städtelisten und Best-of-Listen, bis zu 50 Fotos pro Eintrag, erweiterte Suchfilter, das vollständige Year in Travel und Exporte von allem, was du gespeichert hast. Wähle ein Jahresabo oder zahle einmal für Lifetime. Beide enthalten dieselben Funktionen.',
      ],
    },
    faq: {
      title: 'Fragen',
      items: [
        { q: 'Brauche ich ein Konto?', a: 'Nein. Es gibt nichts zu registrieren. App öffnen und die erste Reise anlegen.' },
        { q: 'Funktioniert es ohne Internet?', a: 'Ja. Alles liegt auf deinem Handy, du kannst im Flugzeug, im Tunnel oder im Ausland ohne Roaming schreiben.' },
        { q: 'Wo werden meine Daten gespeichert?', a: 'Nur auf deinem Gerät. Wir haben keinen Server, auf dem deine Reisen liegen. Exportiere jederzeit ein Backup, die App erinnert dich alle zehn Reisen daran.' },
        { q: 'Kann ich auf ein neues Handy umziehen?', a: 'Ja. Exportiere ein JSON- oder ZIP-Backup, installiere VoyageLog auf dem neuen Handy und importiere es.' },
        { q: 'Ist es ein Reiseplaner?', a: 'Nein. VoyageLog dient dazu, Reisen festzuhalten, nicht sie zu planen. Eine Ausnahme sind die Städtelisten für Orte, die du noch sehen willst.' },
        { q: 'Auf welchen Handys läuft es?', a: 'Auf iPhone und Android.' },
        { q: 'Ist es kostenlos?', a: 'Du kannst es kostenlos mit einer begrenzten Zahl von Reisen nutzen. Pro ist optional und bringt unbegrenzte Nutzung, erweiterte Suche und Exporte dazu.' },
        { q: 'Wie bekomme ich Hilfe?', a: 'Schreib uns, ein Mensch antwortet.' },
      ],
    },
    cta: { sentence: 'Starte deine erste Reise in unter einer Minute. Kostenlos zum Ausprobieren, und alles bleibt auf deinem Handy.', button: 'Im App Store laden', secondary: 'Google Play' },
    footer: { tagline: 'Ein privates Reisetagebuch', terms: 'Nutzungsbedingungen', privacy: 'Datenschutz', support: 'Support', eula: 'Apple EULA', impressum: 'Impressum', contact: 'E-Mail schreiben' },
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
      'VoyageLog, internet olmadan çalışan özel bir seyahat günlüğüdür. Geziler, yerler, anlar, fotoğraflar ve notlar tek bir aranabilir zaman çizelgesinde. Hesap gerekmez.',
    nav: { home: 'VoyageLog ana sayfa', language: 'Dil', features: 'Özellikler', search: 'Arama', privacy: 'Gizlilik', faq: 'Sorular' },
    hero: {
      title: 'Her gezi, tek sakin zaman çizelgesi.',
      lead: 'VoyageLog, telefonunuz için özel bir seyahat günlüğü. Her gezideki yerleri, anları, fotoğrafları ve notları kaydedin, sonra saniyeler içinde yeniden bulun. Hesap yok. Akış yok. Çevrimdışı çalışır.',
      appStore: "App Store'dan indir",
      googlePlay: "Google Play'den indir",
    },
    chapters: [
      {
        id: 'timeline',
        screen: 'timeline',
        alt: 'VoyageLog gezi ekranı: tüm geziler tarih, süre ve etiketlerle tek bir zaman çizelgesinde.',
        title: 'Tüm gezileriniz, tarih sırasıyla.',
        body: [
          'Prag ve Viyana arasında bir tren yolculuğu, Barselona’da uzun bir hafta sonu, İtalya’da on gün. Her gezi, tarihleri, süresi, ülkeleri ve etiketleriyle tek bir zaman çizelgesinde bir kart.',
          'Bir yıl geriye gidin; hikâye hâlâ orada, yaşadığınız sırayla.',
        ],
      },
      {
        id: 'journal',
        screen: 'journal',
        alt: 'Bir yer ve bir anı kaydı olan gezi; her kayıtta fotoğraf, not, etiket ve puan var.',
        title: 'Yerler ve anlar ayrı ayrı.',
        body: [
          'Bir kafe bir yerdir. Köprüde gün doğumu ise bir andır. İkisi de kendi kaydını alır: fotoğraflar, bir not, etiketler ve beş üzerinden bir puan.',
          'Sonra neyi sevdiğinizi, neyin sadece yaşandığından ayırabilirsiniz.',
        ],
      },
      {
        id: 'cities',
        screen: 'entries',
        alt: 'Şehirlere bölünmüş bir gezi: Prag ve Viyana, kayıt sayıları ve paylaş düğmeleriyle.',
        title: 'Uzun geziler, şehir şehir.',
        body: [
          'Uzun bir yolculuğun her durağını ayrı bir şehir olarak ekleyin. Her şehrin kendi tarihleri ve kayıtları olur, kapatılıp açılabilir ve tek başına kart, PDF ya da dosya olarak paylaşılabilir.',
        ],
      },
      {
        id: 'details',
        screen: 'details',
        alt: 'Büyük fotoğraf, puan, harita konumu ve notları olan bir kayıt.',
        title: 'Kaydın tamamı, bir dokunuş uzakta.',
        body: [
          'Bir kaydı açın, her şey orada: fotoğraf, puanınız, ait olduğu gezi, Apple veya Google Haritalar’da açabileceğiniz bir yer ve henüz orada dururken yazdığınız not.',
          'Bir harita bağlantısı yapıştırın, yer kendiliğinden dolsun.',
        ],
      },
      {
        id: 'capture',
        screen: 'capture',
        alt: 'Yer veya an, şehir, başlık, konum, tarih, puan ve notlarla yeni kayıt formu.',
        title: 'Gün geçip gitmeden kaydedin.',
        body: [
          'Yeni bir kayıt, bir başlık ve bir dokunuştur. Gerisi isteğe bağlı: konum, tarih, puan, notlar, etiketler, fotoğraf ve video. En son kaydettiğiniz yerler bir dokunuş uzakta.',
          'Yanlış kaydı mı kaydırdınız? Beş saniye boyunca geri al hazır.',
        ],
      },
    ],
    more: {
      title: 'Uygulamada daha fazlası',
      items: [
        { t: 'Gezi haritası.', b: 'Koordinatı olan her yer gezinin haritasında ve gittiğiniz her yerin tek haritasında görünür.' },
        { t: 'Year in Travel.', b: 'Yılınıza ay ay geri bakış ve paylaşabileceğiniz bir kart.' },
        { t: 'Şehir listeleri.', b: 'Görmek istediğiniz şehirleri planlayın, gittikçe işaretleyin ya da Noel pazarları veya kiraz çiçeği mevsimi gibi hazır bir listeyle başlayın.' },
        { t: 'Rozetler ve sezonluk görevler.', b: 'Gerçekten yaptıklarınız için elliden fazla rozet ve yalnızca bir sezon süren kısa görevler.' },
        { t: 'Gezi özeti.', b: 'En yüksek puanlı yerleriniz, şehirleriniz ve sayılarınızla tek bir kart, bir arkadaşa göndermeye hazır.' },
        { t: 'Bugün, yıllar önce.', b: 'Önceki yıllarda tam bu tarihte bir yer kaydettiyseniz sessiz bir hatırlatma.' },
      ],
    },
    search: {
      title: ['Yeniden bul,', 'hemen.'],
      label: 'Gezilerinizde arayın',
      placeholder: 'Pizza, gün doğumu ya da Viyana deneyin',
      hintLabel: 'Ya da birine dokunun:',
      hints: ['pizza', 'gün doğumu', 'viyana', 'bar'],
      resultsLabel: 'Sonuçlar',
      matched: { title: 'Başlıkta eşleşti', notes: 'Notlarda eşleşti', tags: 'Etiketlerde eşleşti', trip: 'Gezide eşleşti' },
      place: 'Yer',
      moment: 'An',
      inTrip: 'gezi:',
      empty: 'Bu kelimeyle henüz bir şey kaydedilmemiş.',
      note: 'Örnek geziler, tarayıcınızda canlı aranıyor. Uygulamada kendi kayıtlarınızda arar; tür, puan ve etikete göre filtreleyebilirsiniz.',
      entries: [
        { title: 'Eski Şehir Meydanı Sabah Yürüyüşü', trip: 'Kış Treni: Prag ve Viyana', kind: 'place', rating: 4.8, notes: 'Astronomik saat, hafif kar ve dokuzdan önce bomboş sokaklar.', tags: ['tarih', 'simge yapı'] },
        { title: 'Charles Köprüsü’nde Gün Doğumu', trip: 'Kış Treni: Prag ve Viyana', kind: 'moment', rating: 0, notes: 'Dondurucu soğuk ama Vltava üzerindeki bomboş manzara buna değdi.', tags: ['gün doğumu', 'manzara'] },
        { title: 'Belvedere Müzesi Ziyareti', trip: 'Kış Treni: Prag ve Viyana', kind: 'place', rating: 4.7, notes: 'Klimt koleksiyonu öne çıkıyor, hafta içi kuyruklar makul.', tags: ['kültür', 'müze', 'viyana'] },
        { title: 'Café Central', trip: 'Kış Treni: Prag ve Viyana', kind: 'place', rating: 4.6, notes: 'Viyana’ya kar yağarken melange ve elmalı strudel.', tags: ['kahve', 'viyana'] },
        { title: 'Sagrada Família Kule Turu', trip: 'Bahar Renkleri: Barselona ve Sevilla', kind: 'place', rating: 4.9, notes: 'Sabah seansını ayırtın. Vitraylar öğleden önce en güzel hâlinde.', tags: ['mimari', 'barselona'] },
        { title: 'Bar Cañete', trip: 'Bahar Renkleri: Barselona ve Sevilla', kind: 'place', rating: 4.7, notes: 'Tezgâhta tapas: kroket, hamsi ve soğuk vermut.', tags: ['yemek', 'tapas', 'bar'] },
        { title: 'Pizzarium Bonci', trip: 'İtalya Kaçamağı: Milano, Roma ve Amalfi', kind: 'place', rating: 4.9, notes: 'Dilimle pizza, her seferinde kuyruğa değer.', tags: ['pizza', 'yemek', 'roma'] },
        { title: 'Da Michele Roma', trip: 'İtalya Kaçamağı: Milano, Roma ve Amalfi', kind: 'place', rating: 4.8, notes: 'Klasik Napoliten pizza, yalnızca margherita.', tags: ['pizza', 'yemek', 'roma'] },
        { title: 'Brera Semti Aperitivo', trip: 'İtalya Kaçamağı: Milano, Roma ve Amalfi', kind: 'place', rating: 4.6, notes: 'Brera sokaklarında bir tabak atıştırmalıkla spritz saati.', tags: ['bar', 'milano'] },
        { title: 'Marina Grande Plaj Öğleden Sonrası', trip: 'İtalya Kaçamağı: Milano, Roma ve Amalfi', kind: 'moment', rating: 0, notes: 'Son vapurdan önce rahat bir plaj molası.', tags: ['kıyı', 'plaj'] },
      ],
    },
    stats: {
      title: 'Sayılarınız ve favorileriniz.',
      body: [
        'Insights sekmesi yaptıklarınızı sayar: geziler, şehirler, ülkeler, fotoğraflar ve yolda geçen günler; en çok gittiğiniz ülke ve ortalama puanınız da var.',
        'En iyi listeleri, sevdiğiniz kayıtları sıralamaya dönüştürür; sırayı değiştirebilir, görsel ya da PDF olarak paylaşabilirsiniz. İtalya’nın en iyi pizzası. Lizbon’un en iyi kahvesi. Sizin listeniz, sizin sıranız.',
      ],
      alt: 'Gezi, şehir, ülke ve fotoğraf sayıları, en iyi listeler ve popüler etiketlerle Insights ekranı.',
      alt2: 'İtalya’nın En İyi Pizzaları adlı, üç yerin sıralandığı en iyi listesi.',
    },
    privacy: {
      id: 'privacy',
      title: 'Yalnızca sizin. Telefonunuzda.',
      body: [
        'VoyageLog tamamen çevrimdışı çalışır. Hesap açmak, bir akışı kaydırmak ya da kimseyi takip etmek yok. Gezileriniz, notlarınız ve fotoğraflarınız cihazınızda saklanır.',
        'Bir kopya istediğinizde onu kendiniz alırsınız.',
      ],
      formats: [
        { t: 'JSON', b: 'yeni telefonda yeniden içe aktarabileceğiniz tam yedek; kopyaları atlamayı, üzerine yazmayı ya da birleştirmeyi siz seçersiniz' },
        { t: 'Excel', b: 'her gezi ve kayıt bir tablo olarak' },
        { t: 'ZIP', b: 'aynı veriler, tüm fotoğraf ve videolarla birlikte' },
        { t: 'PDF ve görsel', b: 'bir gezi, bir şehir ya da bir en iyi listesi, paylaşılacak kart olarak' },
      ],
    },
    languages: {
      title: 'Sizin dilinizi konuşur.',
      body: 'VoyageLog otuzdan fazla dile çevrildi; Arapça ve İbranice için sağdan sola düzen de dahil.',
    },
    plans: {
      title: 'Ücretsiz başlayın. Daha fazlası gerekince Pro.',
      body: [
        'Ücretsiz sürüm, sınırlı sayıda gezi içeren eksiksiz bir seyahat günlüğüdür: yerler, anlar, puanlar, notlar, temel arama ve çevrimdışı erişim.',
        'VoyageLog Pro sınırları kaldırır. Sınırsız gezi, kayıt, şehir listesi ve en iyi listesi, kayıt başına 50 fotoğrafa kadar, gelişmiş arama filtreleri, tam Year in Travel ve kaydettiğiniz her şeyin dışa aktarımı. Yıllık abonelik seçin ya da bir kez ödeyip ömür boyu kullanın. İkisi de aynı özellikleri içerir.',
      ],
    },
    faq: {
      title: 'Sorular',
      items: [
        { q: 'Hesap gerekli mi?', a: 'Hayır. Kayıt olunacak bir şey yok. Uygulamayı açın ve ilk gezinizi başlatın.' },
        { q: 'İnternetsiz çalışır mı?', a: 'Evet. Her şey telefonunuzda saklanır; uçakta, tünelde ya da yurt dışında dolaşım olmadan kayıt yazabilirsiniz.' },
        { q: 'Verilerim nerede saklanıyor?', a: 'Yalnızca cihazınızda. Gezilerinizi tutan bir sunucumuz yok. İstediğiniz zaman yedek alın; uygulama her on gezide bir hatırlatır.' },
        { q: 'Yeni telefona geçebilir miyim?', a: 'Evet. Bir JSON ya da ZIP yedeği dışa aktarın, yeni telefona VoyageLog’u kurun ve içe aktarın.' },
        { q: 'Bir gezi planlayıcı mı?', a: 'Hayır. VoyageLog gezileri planlamak için değil, hatırlamak için. Görmeyi umduğunuz yerler için şehir listeleri tek istisna.' },
        { q: 'Hangi telefonlarda çalışır?', a: 'iPhone ve Android telefonlarda.' },
        { q: 'Ücretsiz mi?', a: 'Sınırlı sayıda gezi ile ücretsiz kullanabilirsiniz. Pro isteğe bağlıdır; sınırsız kullanım, gelişmiş arama ve dışa aktarım ekler.' },
        { q: 'Nasıl yardım alırım?', a: 'Bize yazın, bir insan yanıtlar.' },
      ],
    },
    cta: { sentence: 'İlk gezinizi bir dakikadan kısa sürede başlatın. Denemek ücretsiz ve her şey telefonunuzda kalır.', button: "App Store'dan indir", secondary: 'Google Play' },
    footer: { tagline: 'Özel bir seyahat günlüğü', terms: 'Kullanım Şartları', privacy: 'Gizlilik', support: 'Destek', eula: 'Apple EULA', impressum: 'Impressum', contact: 'E-posta gönder' },
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

export function appScreen(assetLocale, name) {
  return `/assets/app/${assetLocale}/${name}.jpg`;
}
