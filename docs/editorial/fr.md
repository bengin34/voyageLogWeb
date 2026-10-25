# Editorial notes: French (fr)

Edited with the `blog-editor-fr` skill (procedure from `blog-editor-core/REFERENCE.md`).

Applies to every article below: full French typography pass (typographic apostrophe ’ throughout, U+00A0 before « : » and inside « », U+202F before « ; » and « ? », U+00A0 between numbers and units, U+202F as thousands separator). Because the titles contain a colon or a question mark, the guard flags every title as changed even when only the space before the punctuation changed; in those cases the visible text is identical and the OG image does not need regenerating unless the wording changed (stated per article).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** application(s) de carnet de voyage
**Summary:** A well-built comparison with an honest disclosure, the paper carnet treated with respect, and a clear "who is it for" ending. Several competitor lines were framed as citations ("D'après sa page de tarifs", "Ce que nous avons pu vérifier sur le site et la fiche de l'application"), one Journi claim was contradicted by its store page, and the Google Maps feature carried the wrong French name.

**What changed**
- Title and H1: « Application carnet de voyage : les 6 meilleures en 2026 » → « Les 6 meilleures applications de carnet de voyage en 2026 » (raw keyword string turned into a headline; query kept). Description and FAQ questions: « application carnet de voyage » → « application de carnet de voyage ».
- Citation framings removed: « D'après sa page de tarifs », « Sa page d'accueil présente », « Sa page annonce », « Ce que nous avons pu vérifier sur le site et la fiche », « sa fiche App Store précise ». Vendor promises kept as theirs (« L'éditeur annonce un suivi qui continue sans réseau »).
- Lede: « six applications que l'on utilise vraiment en voyage » → « six applications » (unsupported usage claim).
- App vocabulary aligned with `src/locales/fr.js`: entrée → fiche, note sur cinq → évaluation sur cinq, frise → chronologie, classements « meilleurs de » → listes « meilleurs de »; added that only the title is required.
- « la Chronologie de Google Maps » → « « Vos trajets », l'historique de position de Google Maps » (Google's French name).
- Polarsteps section rewritten from verified facts: planning features, travel book, three visibility levels, free download with optional Plus subscription, account required. The unverifiable « l'application la plus connue dans les pays francophones, et la presse de voyage française en parle régulièrement » was cut.
- Priority list: bold lead-ins removed (every item opened in bold).
- FAQ: answers now open with the direct answer; Day One offline claim dropped; Q4 states Polarsteps' account requirement instead of "reposent sur un profil".

**Facts verified**
- Polarsteps: tracking keeps running off-grid, "typically less than 4% battery per day while tracking", visibility Only you / Friends & Family / the entire world, hardback travel book, trip planning (https://www.polarsteps.com/)
- Polarsteps FR App Store: « Gratuit · Achats intégrés », Plus subscriptions, French supported, AI route planner and transport planner (https://apps.apple.com/fr/app/polarsteps/id947925763)
- Polarsteps requires an account to plan and track (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- FindPenguins: "Plan, track, and share your trip — entirely free", tracker "works offline", "detects flights" (https://findpenguins.com/); travel book is paid and built from the travel profile (https://findpenguins.com/travelbook)
- Day One Basic: unlimited entries and journals, 1 photo per entry, one device, end-to-end encryption, passcode and biometric lock; Silver adds photos and multi-device, Gold adds AI features (https://dayoneapp.com/pricing/)
- Journey: Android, iOS, Mac, Windows, Web (and Chrome OS, Linux), passcode/biometric lock, Journey Cloud sync (https://journey.cloud/); free version usable indefinitely, membership adds cross-platform sync with end-to-end encryption (https://journey.cloud/membership)
- Journi: built around printed photo books (https://www.journiapp.com/); Journi Blog app: timelines with photos, notes, maps, one-click book order, « Utilisez Journi hors-ligne » (https://apps.apple.com/fr/app/id884030844)
- Google Maps Timeline French name « Vos trajets » (https://support.google.com/maps/answer/6258979?hl=fr)

**Removed or generalized**
- Journi « Si vous voulez écrire hors ligne et garder une copie locale de vos données, regardez ailleurs » → contradicted (the app advertises offline use); now « Si vous ne comptez rien imprimer, l'essentiel de son intérêt disparaît ».
- « Polarsteps est l'application la plus connue dans les pays francophones » and FAQ « Polarsteps est le plus connu » → unverifiable, cut.
- « La fiche App Store prévient aussi que la localisation peut diminuer l'autonomie » → the FR store page only says the app may use location when closed; cut.
- FAQ « Les carnets d'écriture comme Day One se prêtent aussi à l'usage hors ligne » → no primary source for mobile offline use; cut. « synchronisent ensuite » → not stated by the vendors; cut.
- Day One « Passez votre chemin si vous voulez des évaluations sur cinq, des classements » → no primary source on whether Day One has ratings; now « si vous voulez comparer des adresses entre elles ».
- Journey « Elle mentionne aussi une version Premium » → replaced by the verified free version / membership split; E2E encryption moved to the paid membership where the vendor lists it.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1436 words, updated unchanged (already 2026-10-24), title changed: OG image stale

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** pays visités
**Summary:** A useful, well-structured piece with the right local angle (outre-mer, Schengen, Québec). The two figures written from memory both hold up on the primary sources, but several sentences claimed what "most apps" or "the majority" do, the scratch-map apps paragraph admitted it had not checked anything, and one border example (Montréal to Plattsburgh) was wrong.

**What changed**
- UN and TCC figures re-anchored on the sources: 195 is now described as the 193 members plus the two observer states, not as "what most apps show"; added the TCC's 100-place membership rule and that the club is based in Los Angeles.
- TCC description: « territoires éloignés de leur pays de rattachement » → « de nombreux territoires et grandes îles » (Sicily and Sardinia are not remote).
- « La règle du milieu est celle où atterrit la majorité » → « la plus facile à défendre » (no data behind "majority").
- Table row « Train traversant sans arrêt | Compte si vous posez le pied sur un quai » (self-contradictory) → « Pays traversé en train, sans descendre | Compte ».
- Schengen: « a supprimé les contrôles aux frontières » → « les contrôles systématiques aux frontières intérieures »; tram named (ligne D). « Un train qui traverse la Belgique en dormant » (the train sleeps) → « Un pays traversé de nuit pendant que vous dormiez dans le train ».
- Scratch-map apps: « Nous n'avons pas vérifié leurs conditions actuelles… » removed; replaced by the verified fact that both apps sell regions and cities as paid add-ons.
- Border cases: Montréal-Plattsburgh removed from « frontières sans contrôle »; added that Québec readers always cross the US border at a customs post; « Bâle côté allemand » → « Weil-am-Rhein, juste de l'autre côté de la frontière bâloise ». The last bullet (business trips) became a paragraph to break a run of bold-led bullets.
- VoyageLog vocabulary: entrées → fiches, note → évaluation, « onglet de statistiques » → « onglet « Statistiques » », « jours de voyage » → « jours passés loin de chez vous » (fr.js wording).
- FAQ: direct first sentences (« Non, pas si vous restez en zone de transit », « Non dans la liste à 195 pays, oui dans celle du Travelers' Century Club »); « la liste se remplit toute seule » softened.

**Facts verified**
- UN: 193 member states (count of the official list, https://www.un.org/en/about-us/member-states); two non-member observer states, Holy See and State of Palestine (https://www.un.org/en/about-us/non-member-states). Kosovo and Taiwan are not on the member list.
- Travelers' Century Club: 330 countries and territories "as of January 2022"; Hawaiian Islands, Alaska, Canary Islands, Sicily, Sardinia, Azores, Greenland, Guadeloupe, Martinique, Réunion and French Polynesia each listed separately; eligibility at 100 places (https://travelerscenturyclub.org/countries-and-territories); based in Los Angeles, founded 1954 (https://travelerscenturyclub.org/)
- Strasbourg tram line D runs to Kehl (https://www.strasbourg.eu/extension-de-la-ligne-de-tram-d-vers-kehl, CTS timetables on cts-strasbourg.eu)
- Visited sells « Unlock Cities » and « Unlock Regions » in-app (https://apps.apple.com/app/id846983349); Been: visited countries map, free with in-app purchases unlocking regions and cities (https://apps.apple.com/fr/app/id680148327)
- VoyageLog: trips carry countries, Insights counts trips, cities, countries, photos, days away, most visited country (`src/locales/en.js`)

**Removed or generalized**
- « le chiffre que la plupart des applications affichent » / « celle que la plupart des outils affichent et celle que les gens ont en tête » → unverifiable, cut.
- « un aller-retour de Montréal à Plattsburgh » as a border without control → contradicted (Canada-US border has customs), replaced.

**Still uncertain, for the owner**
- The TCC list is dated January 2022 on the club's own page; if the club adds territories the 330 figure will need updating.

**Checks:** check-blog all clear, guard clean, 1414 words, updated unchanged (already 2026-10-24), title unchanged in wording (only no-break space before the colon; OG image text is visually identical)

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** tenir un carnet de voyage
**Summary:** The best-written of the set: a clear one-minute method, concrete notes (« Croquetas de jambon, 9 €, au comptoir, à Séville »), a good worked example in Prague. The title repeated « voyage » and led with a bare keyword; a few generalisations about "most people" had nothing behind them.

**What changed**
- Title and H1: « Carnet de voyage : comment le tenir jusqu'au bout du voyage » → « Comment tenir un carnet de voyage jusqu'au bout » (repetition removed, the phrase readers type now leads). Description rewritten without the « Carnet de voyage, comment faire ? » keyword opener.
- « une note » for the rating → « une note sur cinq » in the lede and FAQ, so it cannot be read as the text note.
- H2 « Pourquoi la plupart des carnets… » → « Pourquoi tant de carnets… »; FAQ « le format que la plupart des gens abandonnent » → « le format qu'on abandonne le plus vite ».
- Paper treated more fairly: FAQ « impossible à fouiller » → « agréable à tenir et à feuilleter, mais il ne se fouille pas », and both sections now suggest combining phone and paper (« le papier pour dessiner »).
- Rereading list: bold lead-ins removed; the "same date a year later" step now names the app's « Ce jour-là » reminder.
- Line edits: « qui vous donne l'impression d'une tâche » → « qui transforme le carnet en corvée »; « Vous aurez toujours la possibilité de le relire » → « il se relit aussi bien qu'un autre ».
- FAQ 5: direct opening, « sans roaming » → « à l'étranger sans forfait de données », adds « sans compte ».

**Facts verified**
- VoyageLog: title-only entry, everything else optional, offline, no account, exports JSON / Excel / ZIP / PDF, On this day reminder (`src/locales/en.js`; names from `src/locales/fr.js`)
- No third-party facts in the article.

**Removed or generalized**
- « Beaucoup de voyageurs font les deux » (FAQ) → unverifiable generalisation, now « Rien n'empêche de combiner ».

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1351 words, updated unchanged (already 2026-10-24), title changed: OG image stale

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** carnet de voyage hors ligne (et sans compte)
**Summary:** Strong on the trade-off (backup is your job) and honest about VoyageLog's limits. It carried the citation framings the skill names as typical (« Le site de Polarsteps indique », « d'après sa page d'accueil », « Nous ne détaillons pas davantage les cas où nous n'avons pas pu vérifier »), an article-announcing sentence, a roaming paragraph that lumped Swiss plans in with EU ones, and a Brussels-to-Lisbon example where roaming would in fact be free.

**What changed**
- Title: « … : l'application » (unfinished) → « … : comment ça marche », now identical to the H1.
- Lede: « Cet article explique ce que cela change… » → « La contrepartie existe, et il vaut mieux la connaître avant de partir : la sauvegarde devient votre affaire. »
- Roaming rewritten by market: EU/EEA rules for French and Belgian plans, not guaranteed elsewhere (Switzerland included), Swiss plans outside the regime, Québec plans not always covering the US.
- « Le TGV dans les tunnels entre Lyon et Turin » → « Un train qui enchaîne les tunnels dans les Alpes » (the Paris-Lyon-Turin service has had long interruptions; the example was not worth a fact we would have to keep current).
- Lisbon example: « Vous arrivez de Bruxelles avec le roaming coupé » → a traveller from Geneva whose Swiss plan does not cover Portugal at home rates; « entrée de lieu » → « fiche lieu », « sans note » → « sans évaluation ».
- H2 « Pourquoi les applications « cloud d'abord » s'en sortent mal sans réseau » (calque, and contradicted by its own paragraph) → « Applications de voyage pensées autour du cloud : que se passe-t-il sans réseau ? ».
- Citation framings removed in two places; the bold competitor bullet list became two short paragraphs ending on a concrete airplane-mode test.
- VoyageLog vocabulary: fiche, évaluation, « à portée de doigt », « Plans ou Google Maps », liste « meilleurs de » (was « classement »).
- FAQ 1 and 2: vendor promises framed as theirs; « reposent sur un profil » → Polarsteps asks for an account.

**Facts verified**
- EU roaming at domestic prices covers the EU and the EEA (Iceland, Liechtenstein, Norway), also Moldova and Ukraine; other countries are not covered (https://europa.eu/youreurope/citizens/consumers/internet-telecoms/mobile-roaming-costs/index_fr.htm)
- Polarsteps tracking "keeps tracking even when you're offgrid" (https://www.polarsteps.com/); account required (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- FindPenguins tracker "works offline" (https://findpenguins.com/)
- Day One Basic limited to one device; multi-device on Silver and Gold (https://dayoneapp.com/pricing/)
- Journey platforms and Journey Cloud sync with membership (https://journey.cloud/, https://journey.cloud/membership)
- Trip map offline: kept in the offline list and qualified per the owner-confirmed fact (REFERENCE.md section 11): « Cette carte s'affiche sans réseau, mais elle montre seulement les lieux que vous avez enregistrés : ce n'est pas un plan complet, sans rues ni itinéraire hors ligne », plus advice to keep a maps app with downloaded maps for navigation.
- VoyageLog: offline, device-only storage, no server, backup reminder every ten trips, JSON / Excel / ZIP / PDF and image exports, duplicate handling on import, undo for five seconds, map-link fill from Apple or Google Maps, iPhone and Android only, not a planner (`src/locales/en.js`)

**Removed or generalized**
- « Le TGV … entre Lyon et Turin » → generalised (see above).
- « Les données sont ensuite synchronisées » for Polarsteps and FindPenguins → neither vendor says so in those words; now « le voyage finit sur leurs serveurs, rattaché à votre compte ».
- « beaucoup de voyageurs coupent le roaming pour éviter une facture à trois chiffres » → unverifiable; now general advice.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1410 words, updated unchanged (already 2026-10-24), title changed: OG image stale

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** notes de voyage (organiser ses notes de voyage)
**Summary:** A clear, persuasive method with good local examples (a Lyon page of notes, Prague and Vienna, a day in Barcelona). The edit was mostly vocabulary and a few generalisations; the closing section only restated the rules and became a next step.

**What changed**
- Closing H2 « La règle, une dernière fois » (recap) → « Commencer au prochain voyage », with a concrete first step and a test of whether the system works; the internal links that ended the section are kept.
- VoyageLog vocabulary: entrée → fiche, « une note sur cinq » → « une évaluation sur cinq » in the FAQ, « onglet de statistiques » → « onglet « Statistiques » », « jours de voyage » → « jours passés loin de chez vous ».
- Statistics claim: « Cette moyenne n'a de sens que parce qu'elle ne porte que sur des lieux » (the app lets you rate a moment) → « Cette moyenne garde un sens tant que vous ne notez que des lieux ».
- « Un repas inoubliable » → « Un excellent dîner »; « le Gothique » → « le quartier gothique »; « Vous serez surpris de ce que vous retrouvez » → « une bonne partie du voyage revient ».
- Paper: « nul pour la recherche » → « parfait pour le plaisir de la page, le croquis et le billet collé, mais il ne se fouille pas ».
- « Une conversation dans le train de nuit » between Prague and Vienna (implies a night service on a four-hour run) → « avec une voisine de siège, dans le train pour Vienne ».
- « Beaucoup de voyageurs combinent les deux » → « Rien n'empêche de combiner les deux ».

**Facts verified**
- Place examples taken from the app's sample data exist: L'Antica Pizzeria da Michele has Rome branches (https://www.turismoroma.it/it/accoglienza/lantica-pizzeria-da-michele); Pizzarium Bonci, Café Central, the Belvedere's Klimt collection, Bar Cañete are the app's own sample entries (`src/locales/en.js`).
- VoyageLog: places and moments, rating out of five optional, tags, best-of lists reorderable and shareable as image or PDF, search with type / rating / tag filters, Insights with average rating and most visited country (`src/locales/en.js`)

**Removed or generalized**
- « Beaucoup de voyageurs combinent les deux » → unverifiable, softened.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1424 words, updated unchanged (already 2026-10-24), title unchanged in wording (only no-break space before the colon; OG image text is visually identical)

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** alternative à Polarsteps
**Summary:** Fair to Polarsteps (it tells satisfied users to stay) and well organised by reason for leaving. It relied on « la plupart des gens » claims and citation framings, claimed Journey was the only app with real desktop apps (Day One has Mac, Windows and web), called the Google feature « Chronologie », and the FAQ on using Polarsteps without GPS did not answer the question.

**What changed**
- Lede: « La plupart des gens qui cherchent une alternative à Polarsteps n'ont rien contre l'application » → « Chercher une alternative à Polarsteps ne veut pas dire qu'on lui reproche quelque chose »; « Les gens partent rarement à cause d'un défaut » → « On la quitte moins pour un défaut que… ».
- Battery: App Store framing cut; the 4 % figure kept as the vendor's claim.
- VoyageLog section: fiche, évaluation sur cinq, chronologie, Year in Travel (was « un bilan de l'année »), listes « meilleurs de »; « Pas de localisation en arrière-plan » → « Pas de suivi de position : chaque lieu, c'est vous qui l'ajoutez » (stated the way `en.js` supports it); « pas de notification de visite » (unclear) replaced. Added the missing `/fr/` home link.
- Day One: « d'après sa page de tarifs » removed; « Pas de notes sur cinq ni de classements » → « Pensé pour l'écriture, pas pour comparer des adresses entre elles ».
- FindPenguins: « publications qui fonctionnent hors ligne puis se synchronisent » → « suivi qui fonctionne hors ligne »; « Sa page d'accueil présente » removed.
- Journey: « la seule de la liste avec de vraies applications pour ordinateur » → « elle vous suit sur Windows comme dans un navigateur »; E2E encryption tied to the paid sync where the vendor lists it.
- Google section: H2 « 5. Google Maps Chronologie » → « 5. « Vos trajets » de Google Maps »; added the verified fact that the history now lives on the phone and no longer shows in Maps on a computer; dropped the unverified list of what it lacks.
- Paper and final sections: « Beaucoup de lecteurs francophones / Beaucoup de voyageurs » → direct address; « la seule qui survit à un vrai voyage » → « tient jusqu'au dernier jour ».
- FAQ: Q2 now opens « Oui, le suivi se désactive dans les réglages du voyage… »; Q3 « En partie »; Q1 and Q4 tightened to verified facts.

**Facts verified**
- Polarsteps: tracker can be switched on and off in trip settings, steps can be added manually (https://support.polarsteps.com/hc/en-us/articles/24002431857682-How-to-turn-on-and-off-your-Travel-Tracker-video, https://support.polarsteps.com/hc/en-us/articles/23760478173586-What-are-steps-and-how-do-I-add-or-edit-them); offline tracking, under 4 % battery per day, privacy levels (https://www.polarsteps.com/); account required (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps)
- Day One: free Basic with E2E encryption and biometric lock, one photo per entry, one device (https://dayoneapp.com/pricing/); runs on iPhone, iPad, Apple Watch, Mac, Android, Windows and the web (https://dayoneapp.com/features/multiple-platform-support/); Android app on Google Play (https://play.google.com/store/apps/details?id=com.dayoneapp.dayone)
- FindPenguins: free planning, tracking and sharing; offline tracking; flight detection (https://findpenguins.com/); paid travel book built from the travel profile (https://findpenguins.com/travelbook); Android and iOS apps linked from the homepage
- Journey: Android, iOS, Mac, Windows, web; passcode and biometric lock; Journey Cloud sync (https://journey.cloud/); free version, membership adds cross-platform sync with E2E encryption (https://journey.cloud/membership)
- Google Maps « Vos trajets »: data comes from the device and cannot be viewed in Maps on a computer (https://support.google.com/maps/answer/6258979?hl=fr)
- VoyageLog: no account, offline, device-only data, exports, free with a limited number of trips, Pro yearly or lifetime, iPhone and Android, no web version claimed (`src/locales/en.js`)

**Removed or generalized**
- Journey as the only app with desktop apps → contradicted (Day One runs on Mac, Windows and web), rewritten.
- « La fiche App Store … indique elle-même que la localisation peut diminuer l'autonomie » → not what the FR store page says; cut.
- « les données se synchronisent au retour de la connexion » (FAQ 3) → not stated by Polarsteps; cut.
- « Day One et Journey … leur synchronisation passe par un compte » → account requirement not verified; now « passe par leurs services en ligne ».
- Google Maps « il n'y a pas d'endroit pour écrire, pas de photos organisées, pas de note » → unverified; cut.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1359 words, updated unchanged (already 2026-10-24), title unchanged in wording (only no-break space before the colon; OG image text is visually identical)

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** imprimer son carnet de voyage (en PDF ou en livre)
**Summary:** Practical and honest (it tells readers who want an effortless book to use another app). It promised VoyageLog PDFs of « huit à quinze pages » per city, a figure with no source, described FindPenguins' lay-flat book as a different cover type, and used « D'après sa page » framings for FindPenguins and Day One.

**What changed**
- VoyageLog PDF described per the owner-confirmed fact (REFERENCE.md section 11): PDF per trip, city or best-of list; length follows the content (a short list fits on one page as a card, a full trip runs to several pages); explicitly not a photo-book layout and not a whole-journal PDF. FAQ 1 and 4 updated the same way; FAQ 4 now ends « envoyer à un imprimeur » rather than implying a photo-book service will take it as is.
- Italy example: « trois fichiers, de huit à quinze pages chacun » → « plus ou moins longs selon le nombre de fiches ».
- Lede: « Cet article compare les trois, explique… » → « Le reste tient en quelques réglages : le format, le papier, l'ordre des pages. »
- FindPenguins: « couverture rigide ou à plat » → « couverture rigide classique ou reliure à plat » (both are hardcovers); « D'après sa page » removed; sizes typeset 21 × 21 cm.
- Polarsteps: unverified « il dépend de la taille » replaced by the verified pricing factors (pages, binding, number of copies), final price shown at checkout, free shipping with possible import taxes.
- Day One: « avec une remise sur les formules payantes d'après sa page de tarifs » → « une remise de 25 à 35 % selon la formule payante ».
- « La plupart des boutiques de reprographie… en quelques minutes » and « Beaucoup de services en ligne acceptent des pages au format PDF » → generalised without the "most / many" claims.
- « ni d'un service qui existera encore dans dix ans » (logic reversed) → « qui aura peut-être fermé dans dix ans ».
- Vocabulary: entrée → fiche, classement → liste « meilleurs de »; final choice list without bold lead-ins.

**Facts verified**
- FindPenguins travel book: built from the travel profile, automatic layout, includes texts, dates, maps, photos, stats; Premium Hardcover and Premium Lay Flat, 21 × 21 cm and 30 × 30 cm; prices in EUR incl. VAT, shipping extra (https://findpenguins.com/travelbook)
- Polarsteps Travel Book: price depends on pages, binding and quantity; final price at checkout; free worldwide shipping, import taxes not covered; preview and layout editing before ordering (https://support.polarsteps.com/hc/en-us/articles/24003935464466-What-is-the-price-of-a-Travel-Book, https://support.polarsteps.com/hc/en-us/articles/24004788343954-What-about-shipping-costs-or-other-additional-expenses, https://support.polarsteps.com/hc/en-us/articles/24004039312530-Generating-and-editing-a-Travel-Book-a-step-by-step-guide); hardback book (https://www.polarsteps.com/)
- Day One: printed journals, 25 % off on Silver, 35 % off on Gold, full price on Basic (https://dayoneapp.com/pricing/)
- VoyageLog: PDF and image for a trip, a city or a best-of list, Excel and ZIP exports, no book printing (`src/locales/en.js`); PDF length per REFERENCE.md section 11

**Removed or generalized**
- « trois fichiers, de huit à quinze pages chacun » → unverifiable product detail, generalised.
- « Le prix … dépend de la taille » (Polarsteps) → not what the vendor lists; replaced by verified factors.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1436 words, updated unchanged (already 2026-10-24), title unchanged in wording (only no-break space before the colon; OG image text is visually identical)

## Desk summary

- 7 articles: 0 Publish, 7 Publish after edits, 0 Needs rewrite.
- Titles reworded (OG images stale, owner to regenerate): best-travel-journal-apps, how-to-keep-a-travel-journal, offline-travel-journal-app. The other four titles changed only by the no-break space before the colon.
- Open items from the brief, resolved: Travelers' Century Club 330 verified on the club's own list (dated January 2022); UN 193 members and the two observer states (Holy See, State of Palestine) verified on un.org. The "195 is what most apps show" framing was removed as unverifiable.
- Owner-confirmed facts from REFERENCE.md section 11 applied: trip map offline (offline-travel-journal-app), PDF length (print-travel-journal-pdf); the other PDF mentions already fit.
- No `MASTHEAD.md` exists yet in `.claude/skills/blog-editor-fr/`, so the masthead pass of REFERENCE.md section 10 could not be run against it.
- `updated` was already 2026-10-24 (today) in every file, so it stays as is.
