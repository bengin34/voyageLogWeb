# Editorial notes: Polish (pl)

Edited with the `blog-editor-pl` skill (procedure from `blog-editor-core/REFERENCE.md`).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** aplikacja do dziennika podróży (title: „Aplikacja do dziennika podróży: 6 najlepszych w 2026 roku”)
**Summary:** A fair, well-structured comparison with an honest „zły wybór” paragraph and a clear disclosure. The raw search string „aplikacja dziennik podróży” ran through title, H1, H2s and FAQ, the capitalised Ty-forms read like UI copy, and a few competitor lines went beyond what the vendors' pages say.

**What changed**
- Keyword in grammatical form everywhere: „Aplikacja dziennik podróży: 6 najlepszych na 2026 rok” → „Aplikacja do dziennika podróży: 6 najlepszych w 2026 roku” (title, H1, lede, FAQ). Keyword H2s reduced: „Aplikacja dziennik podróży: jak je porównać” → „Jak porównać aplikacje do dziennika podróży”; „Którą aplikację dziennik podróży zainstalować” → „Którą aplikację zainstalować”.
- All Ty/Twój/Ciebie forms lowercased; straight quotes → „…”; list name set as „Najlepsza pizza we Włoszech”; „4 procent” → „4%”.
- Sourcing language removed: „według strony aplikacji”, „strona deklaruje” → „producent podaje”, „producent zapewnia”.
- Smell list: „Warto powiedzieć to głośno” → „Powiedzmy to wprost”; „Oto cztery, które warto sprawdzić” → „Te cztery sprawdź jeszcze w domu”; „wskazuje zły cel” → „pracuje na próżno”; „zapomniało się” (impersonal, awkward) → „którego nazwa dawno wyleciała ci z głowy”; „Powstał, bo…” → „Zrobiliśmy go, bo…” (we-voice).
- Pricing section tightened and given one verified fact: FindPenguins is free, the printed book is paid.
- Disclosure „(robimy go my)” added to FAQ 1, which recommends VoyageLog and is read standalone in search results.

**Facts verified**
- Polarsteps: tracks offline („Keeps tracking even when you're offgrid”), „typically less than 4% battery per day”, visibility Only you / Friends & Family / The entire world, ad-free, hardback Travel Book (https://www.polarsteps.com/); account sign-up via Google, Apple or e-mail (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- Day One Basic: unlimited entries and journals, end-to-end encryption, 1 photo per entry, 1 device; multi-device sync and more photos in Silver/Gold (https://dayoneapp.com/pricing/)
- FindPenguins: „entirely free”, tracker works offline and detects flights, photo book from the profile (https://findpenguins.com/, https://findpenguins.com/travelbook)
- Journey: Android, iOS, Mac, Windows, Web, Chrome OS, Linux; end-to-end encryption; passcode, Touch ID, Face ID, Android biometric lock (https://journey.cloud/)
- VoyageLog claims checked against `src/locales/en.js`.

**Removed or generalized**
- „Wpisy z opisami i zdjęciami wygodniej jednak przeglądać z internetem” (about Polarsteps/FindPenguins) → removed, unverifiable; replaced with the verified point that the trip lives on their service account.
- VoyageLog „zużywa tyle prądu co zwykłe notatki” → „nie śledzi lokalizacji w tle, więc tego kosztu nie ma” (battery figure not in en.js).
- Day One „wpisów tekstowych” → „wpisów” (pricing page says „Unlimited journal entries”). „Odpuść, jeśli chcesz oceny, listy best of…” (implied Day One lacks them, unverified) → framed as Day One not being built around trips.
- Journey „nie ma struktury podróży” → „to dziennik ogólny, nie podróżniczy”. Journey table cell „Zależnie od ustawień” (vague) → „Synchronizacja z szyfrowaniem end-to-end”.
- „roaming kosztuje więcej niż kolacja” → „potrafi kosztować” (no operator price stated).

**Still uncertain, for the owner**
- Title keeps „w 2026 roku”; it is current but will need changing in January.

**Checks:** check-blog all clear, guard clean, 1470 words, updated unchanged (2026-10-24 already today), title changed: OG image stale

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** odwiedzone kraje
**Summary:** The strongest idea in the set (rules before apps, the 193/195/330 lists, a Schengen section written for Polish readers) with a useful counting table. The app list was built from search snippets: two of five apps could not be found on primary sources and one description was contradicted. The VoyageLog disclosure was missing, and many sentences hid the subject behind impersonal forms („zrobiono”, „pojechano”, „liczono”).

**What changed**
- Disclosure added at the end of the lede: „Uczciwie: VoyageLog, który robimy, należy do tej trzeciej grupy.” Also „(robimy go my)” in FAQ 3.
- App section rewritten from verified store data (see below); H2 „Odwiedzone kraje: aplikacje z mapą” → „Aplikacje do zaznaczania odwiedzonych krajów”; „Ile krajów już odwiedzono” → „Ile krajów masz na koncie”.
- Impersonal forms → ty-forms or neutral constructions: „Jeśli do Pragi pojechano w 2009” → „Jeśli Praga była w 2009 i znowu w 2024 roku”; „postój w Dubaju liczono podwójnie” → „przesiadka w Dubaju trafiła na listę, choć nikt nie wyszedł z lotniska”.
- Description now opens with the primary query; „w Doha” → „w Dosze”; „placówki” (wrong word) → „odległe terytoria”; „państwa-obserwatora” agreement fixed → „dwóch państw ze statusem obserwatora”; „best of” → „best-of”; one „warto” kept, one cut.
- FAQ 5 now opens with the direct answer („Tak, zwykle się go wlicza…”).

**Facts verified**
- UN: 193 member states (https://www.un.org/en/about-us/member-states); Holy See and State of Palestine are the non-member observer states (https://www.un.org/en/about-us/non-member-states)
- Travelers’ Century Club: 330 countries and territories, membership from 100, a port of call or fuel stop counts if you set foot ashore; Hawaii, Alaska, Canary Islands, Azores, Greenland, Sicily, Sardinia listed separately (https://travelerscenturyclub.org/countries-and-territories)
- been (VINCI APPS): countries and US states with optional dates, visited ratio per continent, world map, Premium adds regions, cities, airports; free with in-app purchases; English only on the PL storefront (https://apps.apple.com/pl/app/id680148327)
- World Map: Visited Countries: cities and dates, reads location metadata from photos, widgets, „Country identification works without an internet connection”, iCloud sync, free with paid Plus (https://apps.apple.com/pl/app/id1551551412)
- TripProf: free browser map, no account, counts countries and territories, Polish version available (https://world.tripprof.com/)
- Polish land-border controls with Germany and Lithuania are in force (extended to March 2027 per government notification reported by RMF24), which is why „bez żadnej kontroli” was removed.
- VoyageLog Insights counts (trips, cities, countries, photos, days away, most visited country, average rating) per `src/locales/en.js`.

**Removed or generalized**
- „been: countries visited map” (a different, small app by Pham Van Huy) → replaced by the established „been” by VINCI APPS, described from its PL store page. The old line's „lista marzeń” is not in that app's description.
- „Visited Countries Map Tracker … tylko na iPhone’a” → removed: the app returns 404 on the Polish and US App Store.
- „CountryCount na Androida … w F-Droid” → removed: the F-Droid package page returns 404.
- TripProf „pokazuje, jaki procent lądów Ziemi odwiedzono” → contradicted: the tool's page says every place counts the same toward a share of 244 countries and territories. Now: counts countries and territories.
- „jeździmy do Niemiec, Czech, Słowacji i na Litwę bez żadnej kontroli” → contradicted by the temporary border controls; now „bez pieczątek w paszporcie”.
- „Pieczątki z Turcji, Egiptu, Maroka” → „Pieczątki i wizy z wyjazdów poza strefę Schengen” (stamping practice per country not verified).
- TCC „liczy terytoria osobno, jeśli są geograficznie oddalone” (criterion not verified) → „liczy osobno wiele terytoriów i wysp”. „195 … pokazuje większość aplikacji” → „wiele aplikacji”.
- VoyageLog „Kraj trafia na listę dlatego, że istnieje tam zapisany wpis” (mechanism not in en.js) → „Kraje biorą się z zapisanych podróży”.

**Still uncertain, for the owner**
- After the cuts, no verified native Android counter app remains; Android readers are pointed to the TripProf browser map. If you want an Android app named, verify one on Google Play (gl=PL) first.
- TripProf publishes competing blog content on the same query; naming it is a judgment call.

**Checks:** check-blog all clear, guard clean, 1370 words, updated unchanged (already 2026-10-24), title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** jak prowadzić dziennik podróży
**Summary:** The best-written piece of the set: a concrete one-minute system, good example notes („Zamów rybę, nie makaron.”), a realistic Prague and Vienna sample. The primary query was missing from the first paragraph, and the usual house-style issues (capitalised Ty-forms, straight quotes, a few missing commas) needed fixing.

**What changed**
- Lede now opens with the query: „Dziennik podróży, który naprawdę dokończysz, opiera się na jednej zasadzie” → „Jak prowadzić dziennik podróży, który naprawdę dokończysz? Trzymaj się jednej zasady…”.
- Commas: „na pytanie czy to miejsce” → „na pytanie, czy to miejsce”; „wskazówki co zapisywać” → „wskazówki, co zapisywać”; „zrobić stojąc w kolejce” → „zrobić, stojąc w kolejce”.
- Smell list: „Warto też pamiętać o jednej rzeczy. Tracker…” → „Pamiętaj też, że tracker…”; „Dopisz jeden wpis z dopiskiem” → „Dodaj jeden wpis z adnotacją”; „pozwala znaleźć wpis” (FAQ 4) → „W aplikacji znajdziesz wpis…”; „Chwil nie oceniamy” → „Chwil nie oceniaj” (advice, consistent imperative).
- The „On this day” bullet now uses the in-app name „W tym dniu”; list names set as titles („Najlepsza kawa w Lizbonie”).
- 54 straight quotes → „…”; all Ty-forms lowercased.

**Facts verified**
- VoyageLog features used (title-only entries with optional fields, best-of lists shared as image or PDF, „W tym dniu”, Year in Travel, search by word) against `src/locales/en.js`; Prague and Vienna sample entries match the app's own sample data.
- Gdańsk: Motława and Długi Targ are the city's riverside and main street (general knowledge, used only as setting).

**Removed or generalized**
- „gdy kawa kosztuje 14 zł” (Gdańsk, presented as a fact about local prices, unverified) → replaced with a setting detail („z kawą przy Długim Targu”). The 18 zł and 20 zł figures stay because they are example notes inside quotes, not price claims.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1338 words, updated unchanged (already 2026-10-24), title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** dziennik podróży offline
**Summary:** Clear on the three meanings of „offline”, honest about the backup burden and with a good „Czego VoyageLog nie ma” section. Several small claims overreached (Prague metro without signal, Apple Notes without tags, filters attributed to Pro), and one example heading contradicted its own text („bez roamingu” while the reader uses EU roaming in Portugal).

**What changed**
- Example H2 „Przykład: czterodniowy wyjazd do Lizbony bez roamingu” → „Przykład: Lizbona i dzień w Maroku bez transmisji danych” (the text says Portugal is covered by EU roaming).
- Throat-clearing cut: „Są trzy różne sytuacje i warto je rozróżniać” → „ale pod tym słowem kryją się trzy różne sytuacje”; „wymaga już oczywiście połączenia” → „zwykle potrzebne jest już połączenie”; „Różnica widoczna jest najlepiej w momencie, gdy” → „Różnicę najlepiej widać, gdy”.
- Storage paragraph reordered into plain advice (check space before, export ZIP after); „pozwala dodać” → „jeden wpis pomieści do 50 zdjęć”.
- „po przypadku” → „przez przypadek”; „żadnej subskrypcji w tle” dropped (VoyageLog does have an optional Pro subscription) → „żadnego logowania”.
- Sourcing language removed („Według strony aplikacji”, „Strona FindPenguins deklaruje”); Ty-forms lowercased; quotes typographic; FAQ 5 now opens with „Tak”.

**Facts verified**
- Polarsteps offline tracking and „less than 4% battery per day” (https://www.polarsteps.com/); account sign-up (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- FindPenguins tracker works offline and detects flights (https://findpenguins.com/)
- Day One Basic: end-to-end encryption, unlimited entries, 1 photo per entry, 1 device; sync in paid plans (https://dayoneapp.com/pricing/)
- Journey platforms and end-to-end encryption (https://journey.cloud/)
- VoyageLog offline storage, no server, backup reminder every ten trips, JSON/ZIP/Excel exports, five-second undo, 50 photos in Pro, human support („Write to us and a person will answer”) per `src/locales/en.js`.

**Removed or generalized**
- „w metrze w Pradze” as a no-signal example → removed (current coverage not verified); „w samolocie Ryanaira” → „w samolocie”.
- Albania in the roaming list → removed (EU and Western Balkans roaming arrangements are changing; not verified for today). Turkey, Georgia, Egypt stay: outside EU roaming rules.
- „z filtrami typu, oceny i tagów w wersji Pro” → „Zaawansowane filtry wyszukiwania należą do wersji Pro” (en.js says Pro has „advanced search filters”, not that all filters are Pro).
- „Notatki … bez ocen, tagów” → „bez ocen i podziału na podróże” (Apple Notes has tags).
- Polarsteps „tracker z synchronizacją po odzyskaniu zasięgu” and „kopia w chmurze” → „tracker, którego dane trafiają do serwisu” (sync timing not stated by the vendor).
- „Pierwsza podróż to kilka sekund i zero formularzy” → „Pierwszą podróż zaczniesz bez żadnej rejestracji” (there is an entry form).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1331 words, updated unchanged (already 2026-10-24), title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** notatki z podróży
**Summary:** A clear method piece with good hard cases (scenic train, hotel, layover, rained-out plan) and a sample table that matches the app's own sample data. It stated as an app fact that VoyageLog moments have no rating field, which `en.js` contradicts, and the description did not contain the primary query.

**What changed**
- VoyageLog section corrected: „Chwila ma tytuł, zdjęcia, notatkę i tagi, ale nie ma gwiazdek” → both types have a rating out of five, everything except the title is optional, „więc chwilę po prostu zostawiasz bez gwiazdek”. The Insights sentence now says the average means something „właśnie dlatego, że chwile zostają bez gwiazdek” (a result of the advice, not of the app).
- Description rewritten around the primary query: „Notatki z podróży porządkuje jedna reguła…”.
- Ending: H2 „Zasada jeszcze raz” (a recap) → „Jedno pytanie przy każdym wpisie”, with a concrete next step (the next weekend trip, rate only places).
- Headings: „Dlaczego tylko pięć gwiazdek, a nie opis” (did not match the section, which argues for rating plus one line) → „Dlaczego gwiazdki i jedno zdanie, a nie długi opis”; „Jak zapamiętać wyjazdy, których nie zapisano” → „Jak odtworzyć wyjazdy bez notatek”.
- Line edits: „jeśli się waha” (wrong person) → „jeśli się wahasz”; „Przeglądnij” → „Przejrzyj”; „zaletę nad zdaniem” (calque) → „przewagę nad zdaniem”; „czy obsługa spieszy się” → „czy obsługa się spieszy”; „co zrobiono w zamian” → „jaki był plan B”; a muddled sentence („właśnie rok od roku zaczynasz zbierać to, co ma wartość”) made plain; „Pizza z Neapolu” → „Pizza u Da Michele” (the entry is in Rome).
- FAQ 4: „Aplikacja robi to automatycznie” (best-of lists are user-ordered, not automatic) → „typ wpisu, wyszukiwanie i listy są wbudowane”.

**Facts verified**
- Entry types, rating out of five on each entry, optional fields, map-link autofill, search over titles, notes and tags, advanced filters in Pro, best-of lists shared as image or PDF, Insights counts and average rating, cities within trips: `src/locales/en.js`.

**Removed or generalized**
- „Miejsce ma pole oceny… Chwila… nie ma gwiazdek” → contradicted by en.js („Each gets its own entry with photos, a note, tags and a rating out of five”), corrected as above.
- „filtry typu, oceny i tagów należą do wersji Pro” → „zaawansowane filtry są w wersji Pro” (en.js only says Pro has advanced filters).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1419 words, updated unchanged (already 2026-10-24), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** alternatywa dla Polarsteps
**Summary:** Fair to Polarsteps (it opens by saying what the app does well and tells happy users to stay), with honest VoyageLog minuses and a useful „problem → choice” table. Competitor minuses had drifted beyond the vendors' own pages (Day One and Journey „lack” ratings, stats and maps; Google Timeline „lacks” photos), and one example note read as an unverified ticket-price fact.

**What changed**
- Sourcing language removed („Według jego strony”, „Strona deklaruje”) → „producent podaje / zapewnia”; vendor promises (battery, frugal tracker) framed as the vendor's claim.
- „Powody przesiadki rzadko są błędami. To raczej niedopasowanie…” → „Przesiadka rzadko wynika z błędów aplikacji. Częściej z niedopasowania…”; „nic poniżej jej w tym nie zastąpi” → „żadna z opcji poniżej nie zastąpi jej w tym zadaniu”; „Warto też zapytać siebie” → „Zapytaj też siebie”; „przesiadka miała sens” (calque) → „przesiadka się opłaciła”; „powstał” → „zrobiliśmy go” (we-voice).
- Account section made concrete with a verified detail: sign-up via Google, Apple or e-mail.
- FAQ: disclosure „(robimy go my)” in FAQ 1; FAQ 3 and FAQ 5 now open with the direct answer; „iPhone'a” → „iPhone’a”; keyword anchor „aplikacjach dziennik podróży” → „aplikacjach do dziennika podróży”.
- Example note „bilet do Belwederu we wtorek kosztował tyle samo co w sobotę” → „bar mleczny dwie ulice dalej miał najlepsze pierogi całego wyjazdu” (local, and no price claim).

**Facts verified**
- Polarsteps: offline tracking, „less than 4% battery per day”, visibility Only you / Friends & Family / The entire world, ad-free, hardback Travel Book (https://www.polarsteps.com/); sign-up with Google, Apple or e-mail (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- Day One: Basic plan with end-to-end encryption, unlimited entries and journals, 1 photo per entry, 1 device; sync in paid plans (https://dayoneapp.com/pricing/); rich text with Markdown, tags, multiple journals (https://dayoneapp.com/features/)
- FindPenguins: „entirely free”, offline tracker, flight detection (https://findpenguins.com/); Premium Hardcover and Premium Lay Flat books, 21 × 21 and 30 × 30 cm, paid (https://findpenguins.com/travelbook)
- Journey: Android, iOS, Mac, Windows, Web, Chrome OS, Linux; end-to-end encryption; passcode and biometric lock (https://journey.cloud/)
- Google Maps Timeline: data saved on the device, optional encrypted backup on Google servers (https://support.google.com/maps/answer/6258979?hl=pl)

**Removed or generalized**
- Day One „Brak ocen, list best of i statystyk podróży” and „Brak wbudowanej struktury podróży” → cut / „To dziennik ogólny” (negative claims not verifiable; Day One has a map view of entries).
- Journey „spokojny interfejs” (opinion) and „Brak automatycznej mapy, ocen i statystyk podróży” → removed (unverified).
- Google Timeline „Brak zdjęć, ocen i struktury podróży” → „Nie ma gdzie zapisać, co o miejscu sądzisz ani jak je oceniasz” (photos and trip grouping not verified either way).
- Polarsteps „Przeglądanie i edytowanie bogatszych treści jest wygodniejsze z internetem” (FAQ 3) → removed, unverifiable. „Polarsteps stawia na drukowane książki” (implied no file export) → „Polarsteps zamienia podróż w drukowaną książkę”.
- Day One „wpisów tekstowych” → „wpisów” (pricing page). VoyageLog „bateria jak przy zwykłych notatkach” → „nie ma związanego z nim zużycia baterii”.

**Still uncertain, for the owner**
- Polarsteps' Polish interface was not checked (the PL App Store page returned 404 to our fetch); the article makes no language claim, so nothing depends on it.

**Checks:** check-blog all clear, guard clean, 1383 words, updated unchanged (already 2026-10-24), title unchanged

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** jak wydrukować dziennik podróży
**Summary:** Practical and well organised (three routes, a table, a worked Italy example, print tips). The photo-book paragraph came from a search snippet and was partly wrong (brand name, laminated cover, 28-page minimum), the heading promised PDF upload to photo-book services that the text never delivered, and several tips implied VoyageLog lets you choose a PDF paper size or that ZIP holds print-resolution originals, neither of which `en.js` says.

**What changed**
- Photo-book H3 „Wgranie PDF do serwisu fotoksiążek” → „Fotoksiążka z wyeksportowanych zdjęć”; paragraph rewritten from Empik Foto's and CEWE's Polish sites (see below). Descriptions now come from the Excel export, not „z karty” (an image card cannot be pasted from).
- PDF export described per the owner-confirmed fact (REFERENCE §11): „PDF dla podróży, miasta albo listy best-of. Plik ma tyle stron, ile treści: krótka lista mieści się na jednej stronie, a podróż z wieloma wpisami zajmie ich kilka.” Same idea in FAQ 1.
- „Wybierz rozmiar przed eksportem” (implied a page-size setting in the app) → „Ustal rozmiar, zanim zaczniesz składać strony albo zamówisz druk”, plus a test page. Italy step 3 made printable as written: „jako zeszyt A5 (dwie strony na arkuszu A4)”.
- Impersonal forms removed: „z którymi jechano” → „towarzyszy podróży”; „jak sobie wymarzono” → „jak sobie wymarzyły”; „Jeśli prywatny dziennik offline wybrano świadomie” → „Jeśli świadomie wybierasz…”.
- Smell list: two „warto poprosić” → „Poproś”; „VoyageLog oferuje pełne dane” → „VoyageLog oddaje pełne dane”; „wg” → „według”; „na pendrive” → „na pendrivie”; „best of” → „best-of”; anchor „aplikacji dziennik podróży” → „aplikacji do dziennika podróży”.

**Facts verified**
- Polarsteps Travel Book is a hardback book made from the trip (https://www.polarsteps.com/)
- FindPenguins book: made from the travel profile with texts, dates, maps, photos, stats; Premium Hardcover and Premium Lay Flat; 21 × 21 and 30 × 30 cm; local printers; FSC-certified paper only (https://findpenguins.com/travelbook)
- Empik Foto: photo books designed „w aplikacji lub Edytorze online”; formats 20×20, 20×30 (portrait), 30×20 (landscape), 25×25, 30×30 cm; hardcover up to 160 pages (https://www.empikfoto.pl/fotoksiazki)
- CEWE: CEWE Fotoświat design software and mobile app, hard and soft covers, formats A4, A5, square (https://www.cewe.pl/cewe-fotoksiazka.html); order from your own PDF built on CEWE's InDesign template (https://www.cewe.pl/jak-zamawiac/z-pliku-pdf.html)
- VoyageLog: PDF and image cards for a trip, a city or a best-of list; JSON, Excel, ZIP with photos and videos; exports of everything in Pro (`src/locales/en.js`); PDF length per REFERENCE §11.

**Removed or generalized**
- „Empik Fotoksiążka” → „Empik Foto” (the service's name). „albumy od 28 do 160 stron” → „twardą oprawę do 160 stron” (minimum not stated on the product page). „twardą laminowaną” → removed (not listed; the page shows glossy and matte hard covers).
- Polarsteps „Zamawiasz ją w aplikacji lub w serwisie” → removed (ordering channel not verified).
- FAQ 1 „albo wgrasz [PDF] do serwisu fotoksiążek” → removed (CEWE's PDF route needs its InDesign template; a VoyageLog PDF is not that).
- „przy dużym druku wyeksportuj ZIP z mediami” (FAQ 4 and body; implies full-resolution originals in the ZIP, not in en.js) → „bierz oryginały z galerii telefonu”.
- „drukuje w kilka minut” (print shops) → removed.

**Still uncertain, for the owner**
- Whether the ZIP export keeps photos at original resolution. If it does, the „use the ZIP for large prints” tip can come back.

**Checks:** check-blog all clear, guard clean, 1388 words, updated unchanged (already 2026-10-24), title unchanged

## Follow-up across articles, 2026-10-24

- Owner-confirmed trip-map fact (REFERENCE §11) applied after the entries above were written: offline-travel-journal-app (FAQ 1 and the search/map paragraph: „Mapa podróży też działa bez internetu i pokazuje zapisane przez ciebie miejsca. To jednak nie pełna mapa z ulicami i nawigacją…”) and best-travel-journal-apps (feature list: „mapę podróży, która działa bez internetu i pokazuje zapisane przez ciebie miejsca (to nie pełna mapa z ulicami)”). Other map mentions in the desk (places-vs-moments, countries-visited-tracker) describe the map as showing saved places only and needed no change. Both files re-checked: all clear, guard clean.
- PDF-length fact applied in print-travel-journal-pdf (above). Other articles only say a trip, city or list can be sent „jako kartę albo PDF”, which is consistent.
- REFERENCE §10 asks for a masthead pass using `.claude/skills/blog-editor-pl/MASTHEAD.md`. That file does not exist yet, so no masthead pass was run on the Polish desk.
- Typographic convention used across the desk: „…” quotes, ’ in „iPhone’a” and „Travelers’ Century”, „best-of” hyphenated, „4%” without a space, lowercase ty-forms in body and FAQ.
