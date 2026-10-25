# Editorial notes: Dutch (nl)

Edited with the `blog-editor-nl` skill (read from `.claude/skills/blog-editor-nl/SKILL.md` and `.claude/skills/blog-editor-core/REFERENCE.md`, including section 11 owner-confirmed facts). There is no `MASTHEAD.md` for nl yet, so the masthead pass (reference section 10) was skipped.

House-style normalizations applied to all seven articles, for the next editor to keep:
- Quotes: straight `"…"` in the body became Dutch single curly quotes ‘…’. Apostrophes became ’ (foto’s, zo’n, ’s avonds, baby’s). This applies inside the FAQ values too.
- Compounds (Taalunie): "reisdagboek app" → "reisdagboekapp", "reisdagboek-app" → "reisdagboekapp", "Polarsteps alternatief" → "Polarsteps-alternatief", "Brussel Zuid" → "Brussel-Zuid", "vier-en-een-half" → "vierenhalf". The "privé reisdagboek" spelling from `nl.js` is kept.
- In-app names from `src/locales/nl.js`: "entry/entries" → "item/items" (with the article changed from de to het). "Insights" → "Inzichten", because `nl.js` calls the tab "Het tabblad Inzichten" (the skill's feature list still says "Insights", so the owner may want to align it). "lijstjes van favorieten/favorietenlijst" → "best-of-lijst(en)", "kaart" → "Reiskaart", "stedenlijsten" → "Stedenlijsten". For Day One the articles use the app's own Dutch word, "bericht".
- VoyageLog ratings are described as "een beoordeling van nul tot vijf" (`nl.js`). The "moments get no rating" rule is now framed as our advice, not an app rule.
- Disclosures were made plainer to one pattern: "VoyageLog … maken we zelf."
- Closing headings like "Kort samengevat"/"Samengevat" were replaced with real titles.
- Numbers: round tens are spelled out in prose ("dertig foto’s"). Percentages stay as digits ("4 procent", "20 procent").

Shared competitor facts (verified 2026-10-24, used in several articles):
- Polarsteps founded 2015, HQ Amsterdam, idea born on a catamaran halfway across the Atlantic (https://www.polarsteps.com/about). Developer Polarsteps B.V., 1017 VA Amsterdam (https://play.google.com/store/apps/details?id=com.polarsteps&hl=nl&gl=NL).
- Polarsteps account: the help centre describes sign-up as the first step after opening the app ("tap 'Create a new account'"; Google, Apple ID or email) (https://support.polarsteps.com/hc/en-us/articles/29049619141266-How-do-I-sign-up-for-Polarsteps). No page says outright "an account is required", so the articles now describe the documented flow ("bij de start maak je een account aan") instead of "werkt met een account".
- Polarsteps free, no ads, revenue from Travel Books, Plus and affiliate bookings (https://support.polarsteps.com/hc/en-us/articles/29003435822866-Is-Polarsteps-free). Ad-free and "Typically less than 4% battery per day" (https://www.polarsteps.com/). The help centre says "about 4%" (https://support.polarsteps.com/hc/en-us/articles/24268094419474), so the articles say "ongeveer 4 procent".
- Tracker works without internet (but not in airplane mode). Steps can be edited offline and sync to Polarsteps' servers when connected (https://support.polarsteps.com/hc/en-us/articles/24266379026066-Does-Polarsteps-work-offline, https://support.polarsteps.com/hc/en-us/articles/24265918738322).
- Trip privacy has three levels: everyone, followers, only you. New accounts default to "Only people I accept" (https://support.polarsteps.com/hc/en-us/articles/24267891448850). The NL store words them "iedereen, alleen volgers of alleen jij zelf" (https://apps.apple.com/nl/app/polarsteps/id947925763).
- Travel Tracker is switched on or off in Trip Settings (https://support.polarsteps.com/hc/en-us/articles/24002431857682).
- Plus: 3D maps, more map styles, step stats; yearly members get 20% off Travel Books (https://www.polarsteps.com/plus).
- Travel Books: semi-matte hardcover, 29,7 × 21 cm (A4) (https://support.polarsteps.com/hc/en-us/articles/37414703433618).
- Data download as JSON with photos (https://support.polarsteps.com/hc/en-us/articles/24266264821138). There is no PDF export (https://support.polarsteps.com/hc/en-us/articles/24268063526802).
- Day One Basic: 1 photo per entry, 1 device. Silver and Gold: 30 photos or videos per entry, sync across unlimited devices, prices in USD (https://dayoneapp.com/pricing/). The NL store listing confirms locations, a map view and export (https://apps.apple.com/nl/app/day-one-dagboek/id1044867788).
- Journi Print: five formats; softcover, hardcover and "premium platliggende hardcover" (https://www.journiapp.com/nl/fotoboek/). Maps are added from photo locations (NL store: https://apps.apple.com/nl/app/journi-print/id1359161090).
- Journi: a Journi can be created in the mobile app without registration; checkout needs registration (https://support.journiapp.com/hc/en-us/articles/5272570466589-What-can-I-do-without-registration). There is a "Continue without Email" option (https://support.journiapp.com/hc/en-us/articles/35557475252637).
- Apple Dagboek: the Dutch iPhone guide lists "Dagboeknotities bekijken en doorzoeken", "Notities afdrukken en exporteren" and "Je dagboeknotities beschermen" (https://support.apple.com/nl-nl/guide/iphone/iph0e5ef5f3e/ios). A Dutch Mac guide exists (https://support.apple.com/nl-nl/guide/journal/welcome/mac).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Beste reisdagboekapp (title was "Beste reisdagboek app 2026")
**Summary:** The structure is clear and honest per use case, and the "Voor wie het niet is" paragraph works. Several competitor claims were wrong or stale (Apple Dagboek "alleen iPhone", Journi login, a Polarsteps price that no longer matches the store), and the article used sourcing language ("volgens de eigen website en helpcentrum", "Op de eigen prijspagina staat").

**What changed**
- Title, H1, description and FAQ questions: compound fixed, "6" → "zes".
- Lede: removed the unverifiable "die in Nederland en België echt gebruikt worden". Disclosure made plainer: "Eén ding vooraf: VoyageLog … maken we zelf. Lees dat stuk met die wetenschap."
- Removed sourcing framing throughout. Vendor claims are now plain statements, or "volgens Polarsteps zelf" for the battery figure.
- The table note now says what we actually did: "hebben we op de eigen pagina’s van de apps nagekeken".
- The VoyageLog section uses in-app names (items, Reiskaart, best-of-lijsten, Stedenlijsten) and a 0 to 5 rating. "Plekken krijgen een beoordeling, momenten niet" → "Wij geven plekken een cijfer en momenten bewust niet" (the app allows rating moments).
- Polarsteps: added that trips sync to Polarsteps' servers as the honest downside. "Eerlijk gezegd" cut. Fixed the broken construction "Wie liever … heeft, lees dan".
- Day One: "entries" → "berichten". "favorietenlijsten" → "ranglijsten", because Day One has a favourites feature.
- "Ga je ook na de reis doorschrijven?" → "Wil je er over een paar jaar nog in zoeken?". "geeft waarde" → "is vooral nuttig".

**Facts verified**
- Polarsteps: Amsterdam, free, ad-free, about 4% battery, offline tracking, three privacy levels, private-by-default account, tracker per trip, Plus features, 20% Travel Book discount, hardcover book, JSON data download (see shared list above).
- Day One Basic/Silver/Gold limits (https://dayoneapp.com/pricing/).
- Journi formats, covers, maps, account only needed at checkout (see above).
- Apple Dagboek features, and that it is on Mac (see above).

**Removed or generalized**
- "Polarsteps … de app waar de meeste mensen aan denken" → cut (unverifiable).
- Polarsteps Plus "8,99 euro per maand of 29,99 euro per jaar" → "per maand of per jaar". The NL App Store lists both "Plus Jaar € 29,99" and "Plus Jaar € 39,99", so a single yearly price cannot be stated.
- Journi "vanaf 22,99 euro" → removed. The Dutch Journi page shows both "vanaf € 22,99" and "vanaf slechts € 16,99".
- Journi "de site vraagt om in te loggen of te registreren" → corrected: you can start without registration and need an account to order.
- FAQ "Journi … minder gericht op bestanden die je zelf bewaart en opnieuw kunt inlezen" → removed. Journi Premium backs up to Dropbox/Google Drive (https://support.journiapp.com/hc/en-us/articles/5264811689629). Replaced with the verified Polarsteps JSON download.
- FAQ "Bij Day One hangt het af van of je synchroniseert" → removed (a hedged guess).
- Apple Dagboek "sinds iOS 17.2" → removed (no Apple NL page found that states it). "Alleen iPhone" → contradicted (there is a Mac guide); now "op Android bestaat hij niet". "een kaart van alles wat je gedaan hebt" as a missing feature → removed (not verified either way).

**Still uncertain, for the owner**
- Whether Polarsteps can be used at all without creating an account. The help centre only documents sign-up as step one.
- The guard flags the title change: the OG image for nl/best-travel-journal-apps is stale.

**Checks:** check-blog all clear, guard clean, 1387 words, updated 2026-10-24 (unchanged value, already today), title changed: OG image stale

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Bezochte landen bijhouden
**Summary:** The piece is practical and well localized (Curaçao/Aruba/Sint Maarten, Schiphol, Luxemburg/Aken). The example-year arithmetic was wrong, and one Year in Travel claim went beyond `en.js`.

**What changed**
- The example year was internally inconsistent: it said "vier landen en zes steden" while including a conditional Switzerland/Lugano stop. Simplified to Parijs; Italië (Milaan, Florence, Rome); and Praag/Wenen by train. That now adds up to four countries and six cities, five with Germany.
- "Insights" → "Inzichten" (`nl.js`). "dagen onderweg" → "dagen weg" (app copy). Added the Reiskaart name.
- Applied the owner-confirmed map fact: the map works offline and shows only your own places, so readers should not count on streets, POIs or navigation. "in een bepaalde straat in Lyon" → "waar in Lyon dat café lag", to avoid implying street detail.
- FAQ question had mixed persons ("Hoe tel je steden die ik bezocht heb?") → "Hoe tel ik de steden die ik bezocht heb?".
- "Een dagje Luxemburg of Aken. Dat telt wel" → names which country counts. "armoedig" → "mager". "Dat is wat een teller van een dagboek onderscheidt" (calque) → "Dat onderscheidt een dagboek van een teller". Closing heading "Kort samengevat" → "Vier gewoontes".

**Facts verified**
- The Kingdom of the Netherlands is four countries (Nederland, Aruba, Curaçao, Sint Maarten). Bonaire, Sint Eustatius and Saba are bijzondere gemeenten (https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/caribische-deel-van-het-koninkrijk/waaruit-bestaat-het-koninkrijk-der-nederlanden).
- VoyageLog Insights counts trips, cities, countries, photos and days away, plus most visited country and average rating (`en.js`).

**Removed or generalized**
- "in je jaaroverzicht … of je dit jaar meer of minder weg was dan vorig jaar" (Year in Travel) → removed. `en.js` only says "a month-by-month look back at your year".

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1341 words, updated 2026-10-24 (unchanged value), title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Reisdagboek bijhouden
**Summary:** This is the strongest piece of the set: concrete, well paced, with a good Vienna example. The fixes were mostly language (entries, a typo, calques) and two sample-note details a reader could act on.

**What changed**
- Typo "Slaat je een avond over" → "Sla je een avond over". "pak weer door" → "pak het weer op". "Hou" → "Houd" (consistency).
- "aan het eind van de dag" (twice) → "elke avond" / "’s avonds". "het grootste verschil maakt" → "het grootste voordeel is".
- "de ochtendslot" → "het ochtendslot". "Kasekrainer" → "Käsekrainer".
- Vienna tram note: "Verkeerd gelopen" contradicted taking a tram → "Bij de verkeerde poort uitgestapt". Tram 71 does stop at several Zentralfriedhof gates.
- "lijstjes van favorieten" → "best-of-lijsten". Disclosure → "VoyageLog, een reisdagboekapp, maken we zelf". "valkuilen die we vaak zien" → "valkuilen" (we do not observe users).

**Facts verified**
- Tram 71 serves Zentralfriedhof 1. to 4. Tor (https://www.wienerlinien.at/bf/lines/tram/71__1.html).
- Item model, title-plus-tap, map link fills a place, best-of lists shared as image or PDF (`en.js`).

**Removed or generalized**
- Belvedere note "De kassa nam alleen kaart" → replaced with "Twee uur was te kort" (an unverifiable payment claim a reader could act on).
- Würstelstand note "5,50 euro" → price removed (unverified).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1337 words, updated 2026-10-24 (unchanged value), title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Offline reisdagboekapp zonder account (title was "Reisdagboek app offline en zonder account")
**Summary:** The argument and backup section are honest and useful. The roaming facts were imprecise, and the train example had an impossible itinerary.

**What changed**
- Title/H1 rebuilt around the correct compound: "Offline reisdagboekapp zonder account: zo kies je".
- Roaming corrected: roam-like-at-home covers the EU plus Norway, Iceland and Liechtenstein. The old text put the Hardangervidda (Norway) "binnen de EU". Switzerland, UK, Turkey and Morocco are outside the regulation. The FAQ was fixed the same way.
- Train example: "met de trein van Amsterdam naar Wenen en slaapt een nacht in Praag … Bij het ontbijt in Wenen" did not hang together. Now: Amsterdam to Prague, then on to Vienna the next day. The unverifiable "Op het station van Praag heb je wifi" became "In je hotel heb je wifi". The "Neurenberg–Praag" leg became "het grensgebied tussen Duitsland en Tsjechië".
- Added the owner-confirmed map fact: the Reiskaart works offline and shows your own places, but it is not a Google Maps replacement.
- Polarsteps offline behaviour restated from its help centre: tracking offline, steps written offline, sync when back online.
- "maakt het verschil" (calque) → "gaat het bijna vanzelf". "sync" → "synchronisatie". "Zonder verbinding voeg je de locatie later toe" implied a connectivity requirement for map links that `en.js` does not state → "Heb je geen link bij de hand, vul de locatie dan later in". Closing heading → "Wat het je oplevert".

**Facts verified**
- EU/EEA roam like at home (https://europa.eu/youreurope/citizens/consumers/internet-telecoms/mobile-roaming-costs/index_nl.htm).
- Polarsteps offline and sync behaviour, and the documented sign-up flow (see shared list).
- VoyageLog: fully offline, device-only storage, backup reminder every ten trips, JSON/ZIP/Excel, duplicate handling, five-second undo (`en.js`). Offline trip map (REFERENCE section 11).

**Removed or generalized**
- "Polarsteps werkt wel met een account" → "Bij Polarsteps maak je bij de start wel een account aan" (documented flow; no explicit "required" statement found).

**Still uncertain, for the owner**
- The guard flags the title change: the OG image for nl/offline-travel-journal-app is stale.

**Checks:** check-blog all clear, guard clean, 1357 words, updated 2026-10-24 (unchanged value), title changed: OG image stale

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Reisnotities ordenen
**Summary:** The system is explained clearly with good Prague examples. Its arithmetic was wrong, and it presented "moments get no rating" as an app rule.

**What changed**
- Prague example: "Filter je op plekken met minimaal 4,5, dan houd je twee entries over", but only one place (4,8) met that bar, since Café Louvre is 4,3 → threshold changed to "minimaal een vier", which leaves two items.
- "Een moment krijgt geen cijfer. Dat is bewust." → "Dat is een bewuste keuze: de app laat het toe, maar wij raden het af." VoyageLog rating described as 0 to 5.
- "Oude Stadsplein" → "Oudestadsplein" (`nl.js`). "Dat is waarom…" (calque) → "Daarom schrijf je het op". "twee en een" → "twee en één". "vol houdt" → "volhoudt". "dagtrip" → "dagje Brussel". "trip" → "reis". "Favorietenlijsten" → "Best-of-lijsten".
- Train edge case: "Amsterdam naar Wenen … De wachtkamer in Praag" (Prague is not on that route) → generic overstap.
- Closing heading "Samengevat" → "Eén keuze per item".

**Facts verified**
- Café Louvre and the Žižkov TV tower babies are real, stable landmarks, used only in sample notes. The rating filter and search across titles, notes and tags come from `en.js`.

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1413 words, updated 2026-10-24 (unchanged value), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Polarsteps-alternatief (title was "Polarsteps alternatief")
**Summary:** Fair to Polarsteps, with good persona examples (Sanne, Bram, Els) and an honest "wrong choice" section. It carried the two open items (company origin, account) plus sourcing language and a Plus price that no longer matches the NL store.

**What changed**
- Title/H1/H2/description: compound fixed, "5" → "vijf". Disclosure made plainer.
- Open item 1, "komt uit Amsterdam en begon in 2015 als hobbyproject van een zeiler": verified on Polarsteps' own About page and its Play Store developer address. Rewritten to what the source says: "Polarsteps is opgericht in 2015 en zit in Amsterdam. Het idee ontstond op een catamaran halverwege de Atlantische Oceaan, waar een van de oprichters zijn locatie en dagelijkse updates met vrienden en familie deelde." The word "hobbyproject" is not in the source and was dropped.
- Open item 2, "Polarsteps werkt met een account": no Polarsteps page states the requirement outright. Rewritten everywhere to the documented flow, "Bij Polarsteps maak je bij de start een account aan, met Google, Apple of een e-mailadres". "Niets online" now rests on the verified fact that steps sync to Polarsteps' servers.
- Privacy labels now match the store and help centre: ‘alleen jij’, ‘volgers’, ‘iedereen’. The old "vrienden en familie" was a website label. Private-by-default is described precisely.
- "Een bestand in plaats van een boek": now acknowledges that Polarsteps offers a JSON data download, while noting that it has no PDF export.
- "Overstappen": added "VoyageLog leest geen gegevens uit Polarsteps in" (import is not claimed in `en.js`).
- Removed the duplicate "Dan is een dagboek met beoordelingen genoeg, en een tracker overbodig" (it repeated the Bram paragraph). "trip(s)" → "reis/reizen". "sync" → "een app die tussen apparaten synchroniseert".

**Facts verified**
- See the shared list: founding year and HQ, catamaran origin, sign-up flow, free/ad-free, about 4% battery, offline tracking and sync, privacy levels, private default, tracker setting, Plus features and 20% book discount, JSON export, no PDF export.
- Day One limits; Journi maps; Apple Dagboek features (see shared list).

**Removed or generalized**
- Plus "8,99 euro per maand of 29,99 euro per jaar" → "per maand of per jaar" (the NL App Store shows two different yearly prices, € 29,99 and € 39,99).
- Journi "vanaf 22,99 euro" → removed (Journi's NL page shows two different starting prices).
- "Volgens het helpcentrum van Polarsteps", "Volgens de eigen website", "Op de eigen prijspagina" → sourcing language removed.
- Apple Dagboek "sinds iOS 17.2" and "alleen op iPhone" → removed/corrected (Mac version exists; not on Android).
- "begon … als hobbyproject van een zeiler die zijn familie zijn route wilde laten volgen" → narrowed to the verified wording.

**Still uncertain, for the owner**
- Account: whether Polarsteps truly cannot be used without an account is not stated on its own pages. The articles now only describe the documented sign-up step. If the owner wants the stronger "account verplicht", someone should test the app first.
- The guard flags the title change: the OG image for nl/polarsteps-alternatives is stale.

**Checks:** check-blog all clear, guard clean, 1540 words, updated 2026-10-24 (unchanged value), title changed: OG image stale

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Reisdagboek afdrukken of als PDF bewaren
**Summary:** The backup/PDF/book distinction is useful and the five-page Rome example is concrete. The competitor prices and "staat daar online" were not accurate for Journi, and the PDF description needed the owner-confirmed length rule.

**What changed**
- Applied the owner-confirmed PDF fact: the PDF is as long as its content (a short list fits as a card on one page; a long trip runs to several pages). It is made per trip, city or best-of list, never for the whole journal at once. The FAQ on printing the whole journal was rewritten to match ("Ja, in delen").
- "De PDF is een nette kaart van je reis" → "een overzicht van je reis om te delen of te printen, geen drukklaar boek". "kaart" was also ambiguous next to the map.
- "Het nadeel: … je reis staat daar online" → only Polarsteps is said to keep your trip on its servers. Journi can be used without registration, so the claim was not true for it.
- "in haar eigen editor" (dienst is masculine) → "zijn". "zeggen er bij" → "erbij". "favorietenlijst" → "best-of-lijst". "entries" → "items".

**Facts verified**
- Polarsteps Travel Book: hardcover, A4 landscape (29,7 × 21 cm); 20% off with yearly Plus (see shared list).
- Journi: five formats, softcover/hardcover/platliggende hardcover, maps from photo locations (see shared list).
- VoyageLog exports JSON/Excel/ZIP/PDF and image (`en.js`). PDF length rule (REFERENCE section 11).

**Removed or generalized**
- Journi "vanaf 22,99 euro" (FAQ and body) → removed; the page shows two different starting prices. The FAQ "Wat kost een gedrukt reisboek?" now explains what drives the price, without numbers.
- "Op de eigen website staat dat…", "volgens de eigen pagina" → sourcing language removed.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1371 words, updated 2026-10-24 (unchanged value), title unchanged
