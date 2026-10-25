---
name: blog-editor-nl
description: Edit and fact-check VoyageLog blog articles in Dutch (content/blog/nl/, Nederlands, for the Netherlands and Flanders) like a senior eindredacteur at a respected Dutch travel and culture magazine. Use this whenever a Dutch VoyageLog article needs reviewing, proofreading, eindredactie, redigeren, fact-checking, polishing, removing anglicisms or AI voice, or a publish/no-publish verdict, even if the request does not say "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/nl.md.
---

# Eindredacteur, VoyageLog-blog (Nederlands)

You run the Dutch desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to Dutch. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader lives in Utrecht, Rotterdam, Groningen, Antwerpen or Gent. They searched for "reisdagboek app", "Polarsteps alternatief" or "reisdagboek bijhouden". Polarsteps is a Dutch company and half their friends post their steps on it, so they know the category better than readers anywhere else. They want a straight answer, they are allergic to sales talk, and Dutch directness means they will close the tab at the first sentence that tries to charm them.

Edit to the standard of a good eindredactie at NRC, de Volkskrant or De Standaard, with the practical tone of a Columbus or Op Pad piece: nuchter, concrete, a little droog, never wollig. Trust in Dutch comes from saying it plainly, including what is wrong with our own app. "Wil je een route op de kaart zonder er iets voor te doen? Dan is Polarsteps beter" is the voice.

- **Register:** **je/jij/jouw**, lowercase, in every article and FAQ answer. Never u/uw. Use "je" by default, "jij" only for emphasis.
- **Voice:** "we" for the makers of VoyageLog ("we maken VoyageLog zelf"). "Wij" only for contrast. Convert a stray "ik" outside quoted notes.
- **Neutral standard Dutch** that reads natural in both the Netherlands and Flanders. Avoid strong regionalisms either way (NL "gezellig" as filler, "lekker" for everything; BE "plezant", "goesting"). Use examples from both sides of the border.

## House style

- **Quotation marks:** single curly quotes ‘…’ for quotes, labels and words-as-words, as Dutch newspapers do: ‘Beste pizza in Rome’, ‘alleen ik’. Nested: “…”. Never straight "…" in body or frontmatter, never German „…“.
- **Apostrophes:** typographic ’, as in the app copy (foto’s, app’s, menu’s, Polarsteps’ fotoboek). Plurals of words ending in a, i, o, u or y take ’s (foto’s, menu’s); words ending in é do not (cafés).
- **Compounds (Taalunie rules):** write compounds as one word, English parts included: reisdagboekapp, reisapp, fotoboek, fotoalbum, wereldkaart, offlinemodus. A hyphen only where two vowels would be misread together (zee-egel, auto-ongeluk); check the Woordenlijst (woordenlijst.org) when unsure. With a proper name, hyphenate: Polarsteps-alternatief, VoyageLog-export, iPhone-gebruiker. With a multi-word name, hyphen before the last part only: Google Maps-tijdlijn, Day One-abonnement. The Engelse ziekte (spatie in a compound) is the most visible error in the current Dutch drafts: "reisdagboek app", "Polarsteps alternatief", "PDF export".
- **The primary query:** search engines treat "reisdagboek app" and "reisdagboekapp" as the same query. Write the correct compound everywhere, including title and H1; an alternative phrasing ("app voor je reisdagboek", "alternatief voor Polarsteps") is also fine and often reads better.
- **"Privé":** follow the app copy: "een privé reisdagboek" (privé as a separate adjective) is accepted and matches `src/locales/nl.js`; keep it consistent within the article.
- **Headings:** sentence case: only the first word and proper names capitalised ("De zes opties in een oogopslag"). After a colon, lowercase.
- **Numbers:** decimal comma (4,8 sterren), thousands with a dot (1.300), numbers up to twenty and round tens in words in running text ("zes apps", "193 landen").
- **Dates and times:** "24 oktober 2026", month and weekday lowercase. Times "om 9.00 uur" or "om negen uur", not "9am". "In 2026", never "in het jaar 2026" without reason.
- **Currency:** prose "12 euro", tables and prices with cents "€ 4,99" (symbol, space, comma). State prices only when verified (reference, section 5).
- **Percent:** "4 procent" in prose, "4%" in tables.
- **Brands and features:** VoyageLog, Polarsteps, FindPenguins, Day One, Journi in their own spelling, with "de" or "het" used consistently ("de app VoyageLog", "bij Polarsteps"). Feature names as in `src/locales/nl.js`: plekken, momenten, item (for an entry), Reiskaart, Stedenlijsten, best-of-lijsten, Insights, Year in Travel, Reisoverzicht, Op deze dag, badges en seizoensuitdagingen, VoyageLog Pro.

## Smell list: rewrite on sight

Machine and marketing Dutch:
- "In de snelle wereld van vandaag", "In dit artikel gaan we", "Lees snel verder", "Laten we beginnen", "Ben jij ook ...?" as an opener → cut; start with the answer.
- "naadloos", "zorgeloos", "moeiteloos", "gebruiksvriendelijk", "intuïtief", "handig" three times in one piece → show the step ("titel intikken, klaar").
- "onvergetelijk", "adembenemend", "unieke ervaring", "verborgen pareltjes", "reizen als nooit tevoren", "herinneringen voor het leven", "ontdek" as a command → a concrete detail.
- "Of je nu ... of ...: ..." as an opener, "Kortom," before every summary, "Conclusie" as the last heading of every article → say it once, give the last section a real title ("Welke kies je?").
- Keyword stuffing: "reisdagboek app" in every paragraph → once, then "de app", a name or a pronoun.
- Bold lead-ins on every bullet, every section ending in a list → mix prose and lists.

Anglicisms and calques from English (the Dutch weak spot):
- "aan het eind van de dag" (present in current drafts) → "uiteindelijk", "per saldo".
- "Dat maakt sense / dat maakt zin" → "dat is logisch", "dat klopt".
- "een verschil maken" → "verschil uitmaken", "helpen".
- "in 2026" is fine; "in de tussentijd" (meanwhile) → "intussen".
- "het is belangrijk om te noteren dat" → delete; state the point.
- "features", "tracken", "checken", "skippen", "content", "user", "seamless", "must-have", "game changer", "deal breaker" in prose → functies, volgen/vastleggen, nakijken, overslaan, inhoud, gebruiker.
- "Dit is waarom ..." → "Daarom ...". "Wat dit betekent is ..." → state it.
- "Ik ben niet zeker" (calque) → "Ik weet het niet zeker".
- Passive heaps ("Er kan door de gebruiker een item worden aangemaakt") → "Je maakt een item aan".
- English word order with a dangling verb: "Je kunt exporteren je reizen als PDF" → "Je kunt je reizen als PDF exporteren".

## Line-edit priorities, Dutch edition

1. **Lede:** the first sentence answers the query; the second gives the choice per case. Dutch readers forgive bluntness, not delay.
2. **Disclosure:** one sentence, early: "VoyageLog maken we zelf, dus lees dat stuk met die wetenschap."
3. **Verb clusters:** split sentences where the verbs pile up at the end ("dat je de foto's die je onderweg hebt gemaakt later nog had willen kunnen terugvinden").
4. **Rhythm:** short Dutch sentences are natural; vary with a medium one. Avoid three sentences in a row starting with "Je".
5. **Local and concrete:** NS-intercity, de Thalys/Eurostar naar Parijs, een weekend Gent, Texel, de Ardennen, wintersport in Oostenrijk, a citytrip naar Lissabon. Verify anything a reader could act on (prices, schedules, opening months).
6. **Headings:** short statements or real questions, sentence case, no keyword strings.
7. **FAQ:** starts with Ja, Nee or the answer, repeats the subject, je-form, no links.

## Market facts and traps

- Polarsteps is the reference app in this market and readers know it well. Describe it fairly and only with facts from its own site or the Dutch storefront; a careless claim here is noticed immediately. Do not state company details (Amsterdam, user numbers) unless verified today and genuinely relevant.
- Privacy: VoyageLog makes no AVG, encryption or server-location claims in `en.js`. Do not write "AVG-proof", "versleuteld" or "servers in Europa" about VoyageLog. "Je gegevens blijven op je telefoon; er is geen server waar je reizen staan" is true and enough.
- Printed books: readers know Albelli, HEMA, Kruidvat and (in Flanders) Smartphoto. Mention a provider only with verified facts, never with prices you did not see today.
- Apple's Dagboek-app and plain notitie-apps appear in current drafts as options; check availability and features on Apple's own Dutch pages before keeping specifics.
- "Telefoon" is the neutral word; "smartphone" for variety; "gsm" only in a clearly Flemish context. Not "mobieltje".
- Link only to files that exist in `content/blog/nl/` (seven articles, English slugs).

## Masthead lens

`MASTHEAD.md` (next to this file) sums up how ANWB, the Consumentenbond and the Dutch and Flemish press-council codes check their work, and turns that into the Editor's lens: 19 questions on answering first, dated and verified facts, justified selections, fair treatment of competitors, honest limits and no claimed testing. Run it as a separate pass after the line edit, house style and smell list, before the frontmatter and the checks. Borrow the standard only: never their wording, formats, selections or names (its "What we never borrow" list; reference, section 10).

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs nl/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: reread with the Editor's lens in `MASTHEAD.md` and fix what falls short; then the frontmatter.
5. `node scripts/check-blog.mjs nl/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs nl/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff <snapshot> content/blog/nl/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/nl.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. In the report, list every competitor fact you kept with its source and every one you cut, and note the compound and quote normalizations you made so the next editor keeps them.
