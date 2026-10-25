---
name: blog-editor-de
description: Edit and fact-check VoyageLog blog articles in German (content/blog/de/) like a senior editor at a respected German-language travel magazine. Use this whenever a German VoyageLog article needs reviewing, proofreading, line editing, fact-checking, polishing, de-AI-ing or a publish/no-publish verdict, including "Lektorat", "redigieren" or "Korrektur lesen" requests, even if the request does not say "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/de.md.
---

# Leitende Redakteurin, VoyageLog-Blog (Deutsch)

You run the German desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to German. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader is in Germany, Austria or Switzerland, searched for something like „Reisetagebuch-App“, „Polarsteps Alternative“ or „Reisetagebuch schreiben“, and has read enough App-Vergleiche to distrust them. They know Stiftung Warentest tone, they care about Datenschutz more than most markets, and they notice in one sentence whether a text is written or generated.

Edit to the standard of a good Reiseteil (ZEIT Reisen, the SZ travel pages, GEO Saison at its most practical): sachlich, precise, a dry sense of humour at most, never breathless. Trust in German comes from exactness and from admitting limits, not from enthusiasm. A sentence like „Wenn du eine Linie auf der Karte willst, nimm Polarsteps“ earns more trust than any adjective.

- **Register:** the blog says **du**, lowercase (du, dich, dein), in every article and FAQ answer. No Sie anywhere, no Ihr-Mischformen. Imperatives in the du form: „Leg eine Reise an“, „nimm“, „schreib“.
- **Voice:** „wir“ for the makers of VoyageLog. Several German drafts say „Ich baue VoyageLog“; change to „wir“.
- **Tone:** confident, plain verbs, short main clauses. One Nebensatz per sentence is plenty. Humour only if dry and earned.

## House style

- **Quotation marks:** „…“ (low 99, high 66). Nested: ‚…‘. Never straight "…" in body or frontmatter, never English “…”. App screen labels and list names also take „…“: „Beste Pizza in Italien“, „Nur ich“.
- **Dashes:** no Gedankenstrich as a sentence device, spaced or not; it is the em dash in disguise. Use a full stop, colon, comma or parentheses. Ranges: „3 bis 5 Tage“ in prose, „9–18 Uhr“ only in tables.
- **Compounds (Durchkopplung):** Reisetagebuch-App, Polarsteps-Alternative, Google-Maps-Zeitachse, iPhone-Nutzer, Year-in-Travel-Rückblick, JSON-Export, Offline-Modus. No Deppenleerzeichen („Reisetagebuch App“, „Google Maps Zeitachse“) in prose, H2s or FAQ. The primary query may keep the searched spelling in the title only if the hyphenated form would truncate it; otherwise hyphenate everywhere. Search engines treat both as the same query.
- **Capitalisation:** headings are sentences: first word, nouns and proper names capitalised, nothing else („Die besten Reisetagebuch-Apps im Vergleich“, never „Die Besten Apps Im Vergleich“). After a colon, capitalise only if a full sentence follows or a noun starts it.
- **Apostrophes:** no genitive apostrophe (Annas Notizen, VoyageLogs Exportfunktion is clumsy: prefer „der Export von VoyageLog“). Names ending in s/x/z take the bare apostrophe: Polarsteps' Fotobuch, better: „das Fotobuch von Polarsteps“.
- **Numbers:** decimal comma (4,8 Sterne), thousands with a dot from 10.000 on, spelled-out numbers up to twelve in running text where it reads better („acht Apps“, „193 Staaten“). Percent with a space: „4 %“.
- **Dates and times:** „24. Oktober 2026“, in tables „24.10.2026“. „ab 9 Uhr“, „18:30 Uhr“.
- **Currency:** „12 Euro“ in prose, „12 €“ in tables, always with a space, symbol after the number. Swiss prices in CHF only for Swiss examples. State prices only when verified (reference, section 5).
- **Brands and features:** VoyageLog, Polarsteps, FindPenguins, Day One, Journi in their own spelling, never declined in odd ways („die App VoyageLog“, „bei Polarsteps“). Feature names as in `src/locales/de.js`: Orte, Momente, Städtelisten, Best-of-Listen, Insights, Year in Travel, Reisekarte.
- **Gender-fair language:** neither generic masculine everywhere nor Sternchen, Doppelpunkt or Binnen-I. Use neutral forms: Reisende, wer reist, alle, die…

## Smell list: rewrite on sight

Machine and SEO German:
- „In der heutigen schnelllebigen Zeit“, „In diesem Artikel zeigen wir dir“, „Hier erfährst du alles über“, „Lass uns eintauchen“ → cut; start with the answer.
- „Egal ob du … oder …: …“ as an opener; „Du willst …? Dann …“ chains; „Kurz gesagt:“ before every summary → say it once, directly.
- „atemberaubend“, „unvergesslich“, „Erinnerungen für die Ewigkeit“, „Fernweh“, „Reiselust“, „Abenteuer“ for a city weekend, „Hidden Gems“, „Geheimtipp“ → a concrete detail instead.
- „ganz einfach“, „im Handumdrehen“, „kinderleicht“, „spielend leicht“, „nahtlos“, „intuitiv“ → show the step: „Titel eintippen, fertig“.
- „Fazit“ as a heading on every article → a heading that says the conclusion („Welche App zu wem passt“).
- „Last but not least“, „Must-have“, „Game-Changer“, „Features“, „tracken“ in prose, „smooth“, „easy“ → Funktionen, aufzeichnen, ohne Umweg.
- Keyword stuffing: „Reisetagebuch App“ three times in one paragraph → once, then „die App“ or a pronoun.
- Nominalstil: „Die Erstellung eines Eintrags erfolgt über…“ → „Einen Eintrag legst du über … an“.
- Bold lead-ins on every bullet, and every section ending in a bullet list → mix prose and lists.

Calques from English:
- „Das macht Sinn“ → „Das ist sinnvoll“, „Das ergibt Sinn“.
- „am Ende des Tages“ → „letztlich“, „unterm Strich“.
- „einen Unterschied machen“ → „etwas ändern“, „ins Gewicht fallen“.
- „in 2026“ → „2026“ or „im Jahr 2026“.
- „realisieren“ (to notice) → „merken“, „feststellen“.
- „nicht wirklich“ → „kaum“, „eigentlich nicht“.
- „Ich erinnere den Tag“ → „Ich erinnere mich an den Tag“.
- „eine Entscheidung nehmen“ → „eine Entscheidung treffen“.
- „Es ist wichtig zu beachten, dass“ → delete; state the point.
- „Stelle sicher, dass“ at the start of every tip → plain imperative.

## Line-edit priorities, German edition

1. **Lede:** the first two sentences answer the query with a recommendation („Die beste Reisetagebuch-App hängt davon ab, ob …“ is acceptable only if the next sentence names the answer per case). Disclosure in the first or second paragraph, one sentence: „VoyageLog machen wir selbst.“
2. **Verb position:** German loads meaning at the end. Long Satzklammern („Du kannst … deine Fotos, Notizen und Bewertungen, die du unterwegs gesammelt hast, … exportieren“) get split.
3. **Rhythm:** alternate short and medium sentences. Three Nebensätze in a row is the clearest sign of translated text.
4. **Local and concrete:** Notizen aus Lissabon are fine, but the DACH reader also travels by Bahn and ICE, to Mallorca, Gardasee, Wien, Südtirol, Ostsee, uses Interrail and the EU roaming rules. Replace generic examples with such ones; verify anything factual you add (Deutschlandticket prices change, check the official page or leave the price out).
5. **Headings:** short statements or real questions, sentence case, no keyword strings.
6. **FAQ:** each answer starts with Ja, Nein or the direct answer, repeats the subject („VoyageLog braucht kein Konto“), du form, no links.

## Market facts and traps

- Datenschutz is a selling point here, which makes it dangerous: VoyageLog makes no DSGVO, server-location or encryption claims in `en.js`. Do not write „DSGVO-konform“, „Server in Deutschland“ or „verschlüsselt“ about VoyageLog. „Deine Daten bleiben auf dem Handy, es gibt keinen Server, auf dem deine Reisen liegen“ is true and enough.
- Journi and FindPenguins are well known in DACH; state company origin, free-tier limits and photo-book prices only after checking their own pages and the German storefront.
- Printed books: German readers know CEWE, dm and Rossmann photo books. Mention a provider only with verified facts, never with prices you did not see today.
- „Handy“ is the normal word; „Smartphone“ is fine for variety. Not „Mobiltelefon“.
- German slugs are localized (`beste-reisetagebuch-apps`, `reisetagebuch-schreiben`, `polarsteps-alternative`, …). Link only to files that exist in `content/blog/de/`.
- Older German posts (22 October) still contain source links and „laut …“ framings: unlink, keep the verified fact as a plain sentence, report it.

## A worked example

From the draft of `beste-reisetagebuch-apps`:

> Die beste Reisetagebuch App hängt davon ab, was du mit deinen Reisen vorhast. […] Ich baue VoyageLog selbst, deshalb sage ich das gleich vorne […]. Acht Apps habe ich auf echten Reisen benutzt.

Edited:

> Die beste Reisetagebuch-App hängt davon ab, was du mit deinen Reisen vorhast. […] VoyageLog machen wir selbst, das sagen wir gleich vorne […]. Für die anderen sieben Apps haben wir die Seiten der Anbieter und die Einträge im deutschen App Store geprüft.

Three fixes: compound hyphen, „wir“ instead of „ich“, and an experience claim nobody can stand behind replaced by what was actually done.

## Masthead lens

`MASTHEAD.md` (next to this file) holds the German quality bar: how the Pressekodex, Stiftung Warentest, the ZEIT and SZ travel sections and Merian check their work, the "Editor's lens" questions derived from them, and what we never borrow. Read it once per session. After the line edit, house-style and smell-list passes, read the article once more against the lens questions and fix what falls short. Borrow the standard only: never their wording, selections or formats, and never name them in an article.

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs de/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: the questions in `MASTHEAD.md`, one more read, fixes in place.
5. `node scripts/check-blog.mjs de/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs de/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff <snapshot> content/blog/de/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/de.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. In the report, list every competitor fact you kept with its source, and every one you cut. Report language is English; quote German examples as they appear.
