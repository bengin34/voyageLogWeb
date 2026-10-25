# Editorial notes: Italian (it)

Edited with the `blog-editor-it` skill (procedure from `blog-editor-core/REFERENCE.md`).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** app diario di viaggio
**Summary:** A sound comparison with an honest frame (manual journal vs tracker) and a useful table. The problems were a few overstated or unverifiable competitor details, sourcing phrasing ("Sul sito l’azienda scrive che…", "Nella scheda dell’App Store…") and some calques.

**What changed**
- Keyword juxtaposition made grammatical in the description, two FAQ questions, the lede and the VoyageLog H2: « app diario di viaggio » → « app per il diario di viaggio »; title and H1 keep the search label.
- Sourcing phrasing turned into plain vendor claims: « Sul sito l’azienda scrive che il consumo… » → « L’azienda dichiara un consumo… ».
- Calques and slips: « leggi con il sale » → « prendi tutto con le pinze »; « Lascialo se vuoi » → « Lascia perdere se vuoi »; « Primo/Secondo » for two domande → « La prima/La seconda »; « Qualunque app scelga » → « Qualunque app tu scelga »; « Funziona tutta offline » → « del tutto ».
- Paper notebook « non si rompe se cade in acqua » (false for paper) → « se cade per terra »; « perdi la borsa a Napoli » (stereotype) → « dimentichi lo zaino su un regionale ».
- Lede: unprovable « la maggior parte delle recensioni deluse » → « molte delusioni ».
- FAQ: dropped the unverifiable « Per le altre funzioni conviene sempre una connessione » and « pesa come un’app di note »; export answer no longer claims Polarsteps/FindPenguins offer no data file.
- Straight quotes → caporali.

**Facts verified**
- Polarsteps: automatic tracking, keeps tracking off-grid, "typically less than 4% battery per day", three audiences (only you / friends & family / the entire world), planning features, hardback Travel Book (https://www.polarsteps.com/); tracker can be switched off in trip settings (https://support.polarsteps.com/hc/en-us/articles/24266585115026)
- Day One: end-to-end encryption, code/Touch ID/Face ID, free = unlimited entries, unlimited photos/video/audio need a membership, export (https://apps.apple.com/it/app/day-one-diario-e-giornale/id1044867788); iPhone, iPad, Mac, Android, web (https://dayoneapp.com/); Windows app (https://dayoneapp.com/blog/introducing-day-one-for-windows/)
- FindPenguins: automatic tracker, battery-saving, offline, detects flights, "entirely free", Italian site (https://www.findpenguins.com/); hardcover photo book, paid (https://findpenguins.com/travelbook)
- Journi: photobooks « da 22,99 € », copertina rigida/morbida/layflat, AI tool arranging photos in a timeline, Italian site (https://www.journiapp.com/it/)

**Removed or generalized**
- Journi « in cinque formati » → cut (not stated on the site).
- Journi « in ordine cronologico » → « in una timeline » (the site's own wording).
- Journi table cell « Diario per foto e libri stampati » / « Non descritto sul sito » → « App per fotolibri » / « Non dichiarato » (the site presents a photobook service).
- Day One « foto, video e audio richiedono un abbonamento » → only unlimited photos/video/audio require it (store text).
- FAQ « l’uscita naturale è il libro stampato, più che un file di dati » → generalized: FindPenguins also lists a PDF eBook in its help centre, which I could not open.

**Still uncertain, for the owner**
- The Journi price (22,99 €) is verified today but will go stale; consider dropping the number at the next update.
- Title carries « nel 2026 »: needs changing in January.

**Checks:** check-blog all clear, guard clean, 1356 words, updated unchanged (already 2026-10-24), title unchanged

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** paesi visitati
**Summary:** A clear, honest method piece with good local examples (Lugano, San Marino, Nizza) and a worked Insights example that adds up. Needed one inconsistent number, a misplaced Italian example, a vague heading, a bare-link anchor and the quote pass.

**What changed**
- UN sentence tightened: « I membri dell’ONU sono 193, che salgono a 195 con i due osservatori » → « Gli Stati membri dell’ONU sono 193; con i due Stati osservatori, Santa Sede e Palestina, si arriva a 195 ».
- Example that made no sense for an Italian reader (« cinque giorni a Roma » vs « un mese in Francia ») → « tre giorni a Parigi e un mese in giro per la Francia valgono uno ».
- FAQ on Vaticano/San Marino: « li raggiunge spesso senza accorgersene » → the concrete reason (no passport control from Italy).
- H2 « Dove registrare un viaggio breve » (the section is not about where) → « Anche le gite brevi vanno nel diario ».
- Search example « Svizzera » → « Lugano » with « il grotto sul lago », which a search on a city name would actually find.
- Anchor « questo metodo » → « come tenere un diario di viaggio »; « In pratica: non devi fare altro » merged into the sentence it contradicted.
- « Ljubljana » → « Lubiana »; « resti nel posto giusto » → « sei »; all “…” and "…" → « … ».

**Facts verified**
- 193 UN member states (https://www.un.org/en/about-us/member-states); Holy See and State of Palestine as non-member observer states (https://www.un.org/en/about-us/non-member-states)
- VoyageLog Insights (trips, cities, countries, photos, days away, most visited country, average rating), Year in Travel, ready-made city lists, Excel export: `src/locales/en.js`

**Removed or generalized**
- FAQ « un’altra superare i 240 tra territori e dipendenze » → « superare i 200 », matching the body; 240 had no source.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1362 words, updated unchanged (already 2026-10-24), title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** diario di viaggio, come farlo
**Summary:** The strongest of the Italian set: one clear rule (a voce under a minute, written on the spot), good concrete examples and an honest "when it fails" list. One structural fault, one wrong figure and one implied price.

**What changed**
- Structure: the unnumbered prep section « Cosa mettere in valigia, o meglio nel telefono » sat before step 1 but already assumed the reader had chosen an app. Folded into step 1, now « 1. Scegli il formato e prepara il viaggio »; the seven steps promised in the description stay seven.
- Bologna example made consistent with that advice (« il viaggio l’hai creato a casa ») and the San Luca figure corrected (below).
- Ravello note « sette euro il caffè » (an implied price claim) → « tramonto da Ravello alle 19.40, panchina di pietra ancora calda, un vecchio con la fisarmonica »: keeps the number-and-object lesson without an unverifiable price.
- FAQ « Un’app costa più abitudine » → « chiede un po’ di abitudine ».
- Anchors: « queste alternative » → « alternative a Polarsteps senza account »; « migliori app diario di viaggio » → « migliori app per il diario di viaggio ».
- « Piazza San Marco » → « piazza San Marco »; all straight quotes → caporali.

**Facts verified**
- Tamburini, via Caprarie 1, Bologna, trading (https://www.tamburini.com/)
- Portico di San Luca about 3.6 km (city site, https://portici.comune.bologna.it/en/la-serie/san-luca/portico-di-san-luca), 3,796 m in the Bologna Welcome brochure: « quasi quattro chilometri »
- Up to 50 photos per entry in Pro, JSON/ZIP/Excel/PDF exports, backup reminder every ten trips: `src/locales/en.js`

**Removed or generalized**
- « 5 chilometri fino a San Luca » → « quasi quattro chilometri » (contradicted by the city's own figures).
- « sette euro il caffè » at Ravello → removed (unverifiable price).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1324 words, updated unchanged (already 2026-10-24), title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** diario di viaggio offline
**Summary:** A useful explainer: the three meanings of "offline" are clear and the backup responsibility is stated honestly. Edits fixed one piece of advice that could cost a reader photos, cut a paragraph the next section repeated and did the house-style pass.

**What changed**
- Risky advice: « conviene esportare lo ZIP ogni tanto e liberare spazio, tenendo l’archivio sul computer » (reads as "delete photos from the app") → « anche lo ZIP esportato occupa spazio: … sposta ogni ZIP sul computer appena l’hai creato ».
- Structure: the « Non è adatto a chi… » paragraph in « Per chi è e per chi no » repeated the next section (« Quando un diario solo offline non basta ») and pointed to « guide che trovi qui sotto »; cut. The following section's filler opener « Non esiste l’app perfetta per tutti » cut too.
- Local roaming example sharpened: « fuori dall’Unione Europea, anche solo in Svizzera o in Ticino ».
- Sourcing phrasing « Polarsteps … scrive sul suo sito che » → « dichiara che ».
- « La sera basta poco » (the scene is outside the pizzeria, not in the evening) → « Basta poco »; « Il ZIP » → « Lo ZIP »; « richiede due minuti » → « pochi minuti »; « Nessuna rete serve per nessuno di questi passaggi » → « Nessuno di questi passaggi richiede la rete ».
- « VoyageLog è gratuito » → « si usa gratis » (avoids the gender clash with « l’app » used elsewhere).
- Turin example: « Bicerin, Piazza della Consolata » → « Al Bicerin, piazza della Consolata »; straight quotes → caporali; anchor « migliori app per il diario di viaggio ».

**Facts verified**
- Caffè Al Bicerin, piazza della Consolata, Turin (https://www.bicerin.it/)
- L’Antica Pizzeria da Michele, via Cesare Sersale 1, Naples (https://www.damichele.net/)
- Polarsteps keeps tracking off-grid (https://www.polarsteps.com/)
- Switzerland is outside the EU, so EU roaming rules do not cover it (general fact; phrased as « può costare »)
- All VoyageLog claims (offline, no account, four export formats, duplicate handling on import, 50 photos per entry in Pro, backup reminder every ten trips, yearly or lifetime): `src/locales/en.js`

**Removed or generalized**
- « richiede due minuti » for a phone move → « pochi minuti » (not something we can promise).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1343 words, updated unchanged (already 2026-10-24), title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** appunti di viaggio (luoghi e momenti)
**Summary:** A clear method piece with a good Naples example and honest limits. The example miscounted its own entries, two lines claimed app behaviour that `en.js` does not support, and one place example was risky.

**What changed**
- Naples example: « Ecco come si presentano… Sono dieci voci » (the list has seven) → « Dopo tre giorni gli appunti hanno questo aspetto: sette voci… ».
- In questo giorno: « ti ricorda cosa avevi salvato… e lì capita spesso di riaprire proprio un momento » → it reminds you of a saved place (as `en.js` says), which leads you back to the trip and its moments.
- Removed « Cambiarlo dopo costa un tocco » (changing an entry's type after saving is not documented in `en.js`).
- « Meglio quattro tag » followed by a list of five → « cinque »; bold lead « Usare quattro stelle per tutto » → « Dare lo stesso voto a tutto »; « il posto da tornare » → « in cui tornare ».
- Lecce example: a pasticciotto lesson from « il nonno di un’osteria » → « un vecchio pasticcere ».
- Added the missing `/it/` home link where the article describes the entry form and search, which the home page shows.
- Straight quotes → caporali.

**Facts verified**
- L’Antica Pizzeria da Michele, via Cesare Sersale 1 (https://www.damichele.net/)
- Gran Caffè Gambrinus, piazza Trieste e Trento / via Chiaia 1, Naples, with a pasticceria section showing sfogliatella riccia (https://grancaffegambrinus.com/)
- Entry form (place or moment, title required, rest optional), recent places one tap away, map-link autofill, open in Apple/Google Maps, search over title/notes/tags/trip with type/rating/tag filters, collapsible and shareable cities, reorderable best-of lists: `src/locales/en.js`

**Removed or generalized**
- « Sfogliatella Mary, Galleria Umberto I » → replaced with Gambrinus: no official site for Sfogliatella Mary, only blogs and aggregators.
- « la Scala dei Turchi vicino ad Agrigento » as a beach → « Mondello a Palermo »: access to the Scala dei Turchi has been restricted in recent years and I could not confirm the current rules on an official site.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1331 words, updated unchanged (already 2026-10-24), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** alternative a Polarsteps
**Summary:** Fair to Polarsteps, clear about why people switch, with a good Sicily example and a decision table. The title promised options « senza tracciamento » while option 2 is a tracker; several competitor sentences used sourcing phrasing or overstated details.

**What changed**
- Title and H1: « 5 opzioni private, senza tracciamento » → « 5 opzioni, dai diari privati ai tracker » (FindPenguins, option 2, is a tracker). Query unchanged at the start.
- FAQ « Posso usare Polarsteps senza tracciamento GPS? »: now gives the verified direct answer (tracker can be switched off in trip settings, and the gap is not filled in later) before recommending a manual journal.
- FAQ « Polarsteps funziona offline? »: removed the unverified « per guardare e modificare i contenuti più ricchi serve in genere una connessione »; kept the vendor claim and the logical point that followers see updates only when you are back online.
- Sourcing phrasing removed: « Sul sito leggiamo che », « Secondo il sito », « Nella scheda italiana dell’App Store », « Sul sito, i fotolibri… » → plain vendor claims (« FindPenguins dichiara che… »).
- Overclaim cut: the how-to method as « l’unico che regge davvero in viaggio » → « regge anche nelle giornate più piene »; « pesa quanto un’app di note » removed.
- Small Italian fixes: « un taccuino che non va a nessuno » → « che non mostri a nessuno »; table header ellipsis removed; anchor « migliori app per il diario di viaggio »; straight quotes → caporali.

**Facts verified**
- Polarsteps: planning, automatic tracking, tracking off-grid, "typically less than 4% battery per day", three visibility levels, hardback Travel Book (https://www.polarsteps.com/); tracker toggle in trip settings, gap not filled when switched back on (https://support.polarsteps.com/hc/en-us/articles/24266585115026)
- FindPenguins: automatic, battery-saving, offline, detects flights, "entirely free", Italian site (https://www.findpenguins.com/); paid hardcover book with texts, dates, maps, photos, stats (https://findpenguins.com/travelbook)
- Day One: E2EE, code/Touch ID/Face ID, free unlimited entries, unlimited photos/video/audio on paid plans (https://apps.apple.com/it/app/day-one-diario-e-giornale/id1044867788); Android, Mac, web (https://dayoneapp.com/); Windows (https://dayoneapp.com/blog/introducing-day-one-for-windows/)
- Journi: from 22,99 €, rigida/morbida/layflat, AI timeline tool (https://www.journiapp.com/it/)

**Removed or generalized**
- Journi « in cinque formati » → cut (not on the site); « in ordine cronologico » → « in una timeline ».
- Day One « foto, video e audio richiedono un abbonamento » / « le foto sono a pagamento » → only the unlimited versions are paid.
- FindPenguins book « storie » → « testi » (the site's wording), and marked as paid.

**Still uncertain, for the owner**
- Journi price will go stale; consider dropping the figure later.

**Checks:** check-blog all clear, guard clean, 1390 words, updated unchanged (already 2026-10-24), title changed: OG image stale (public/assets/blog/og/it/polarsteps-alternatives.png)

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** stampare il diario di viaggio in PDF
**Summary:** Practical and well paced, with sensible paper and format advice and honesty that VoyageLog does not print books. It described the exported PDF in more detail than `en.js` supports, promised costs it never gave, lacked the disclosure its photobook comparison needs, and ended on a summary.

**What changed**
- Lede promised « i costi in ordine di grandezza », which the article never gives (it rightly says to ask for a quote) → promise removed. Added the one-line disclosure before the photobook comparison: « VoyageLog lo facciamo noi… ».
- PDF claims trimmed to what `en.js` says (a trip, a city or a best-of list as a PDF/card): cut « classifica, foto, note. Si stampa in due pagine », « stampare dal telefono », « un libretto da una trentina di pagine ».
- Sicily example: « togli le voci che non ti convincono » (from a PDF, or by deleting entries from the journal) → pick the fifteen entries for a best-of list, export that, correct titles or notes in the app and re-export.
- Final « Riassunto in cinque righe » (a summary of the article) → « Prima di andare in copisteria », a five-point checklist of what to bring and decide at the counter.
- FAQ paper weight aligned with the body (100 g → 120 g or more for photos); « una sola cartella » → « un solo file »; straight quotes → caporali.

**Facts verified**
- Polarsteps hardback Travel Book (https://www.polarsteps.com/)
- FindPenguins paid hardcover book with texts, maps, photos, stats (https://findpenguins.com/travelbook)
- Journi: rigida/morbida/layflat from 22,99 € (https://www.journiapp.com/it/)
- VoyageLog exports (PDF and image for a trip, a city or a best-of list; JSON re-importable; ZIP with photos and videos; Excel), no printing service, backup reminder every ten trips: `src/locales/en.js`

**Removed or generalized**
- Journi « in cinque formati » and « con prezzi indicati sul sito » → cut (format count not on the site; the second was sourcing language).
- FindPenguins « storie » → « testi » (site wording).

**Still uncertain, for the owner**
- What the VoyageLog PDF actually contains. `en.js` calls it "a card to share"; the article still assumes a multi-page document with entries, notes and photos you check page by page. Please confirm. If the PDF is a single summary card, the article needs a rewrite of steps 2 to 5 and the Sicily example.

**Checks:** check-blog all clear, guard clean, 1391 words, updated unchanged (already 2026-10-24), title unchanged
