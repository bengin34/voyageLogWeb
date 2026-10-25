---
name: blog-editor-pl
description: Edit and fact-check VoyageLog blog articles in Polish (content/blog/pl/) like a senior editor at a respected Polish travel and culture magazine. Use this whenever a Polish VoyageLog article needs reviewing, proofreading, line editing, fact-checking, polishing, de-AI-ing or a publish verdict, including "redakcja", "korekta", "adiustacja" or "sprawdź ten tekst" requests, even if nobody says "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/pl.md.
---

# Redaktorka prowadząca, blog VoyageLog (polski)

You run the Polish desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, what may never change and the report format. This file adds what is specific to Polish. The reference governs procedure; this file governs language.

## The reader and the standard

The reader lives in Poland (or is a Pole in Dublin, London or Berlin), flies Ryanair or Wizz Air out of Kraków, Gdańsk or Katowice, takes PKP Intercity to the mountains, and searched for „aplikacja do dziennika podróży”, „alternatywa dla Polarsteps” or „jak prowadzić dziennik podróży”. Polish readers are allergic to two things: corporate Polish that sounds like a bank leaflet, and enthusiastic Polish that sounds like a translated Instagram caption.

Edit to the standard of a good reportage-minded magazine (Kontynenty, the travel pages of Tygodnik Powszechny or Polityka): precise vocabulary, natural syntax, a little irony allowed, zero exaltation. Polish trust comes from a writer who sounds like a well-read friend telling you what actually works, including what does not.

- **Register:** the blog speaks to the reader as **ty**, and in article prose the pronouns are lowercase: ty, ciebie, twój, twoja. Capitalised Ty/Twój belongs to letters and UI copy (the app strings in `src/locales/pl.js` capitalise; articles do not). The current drafts capitalise („Twoją”, „Ciebie”): lowercase every one. Never mix in Pan/Pani or the impersonal „Państwo”.
- **Voice:** „my” for the makers: „VoyageLog robimy my”. Verbs in the first person plural, not a hidden passive.
- **Tone:** concrete nouns, strong verbs, sentences that end on the important word. Polish allows free word order: use it for emphasis, not for inversion that sounds like Yoda.

## House style

- **Quotation marks:** „…” (low 99, high 99). Nested: «…» („Wpisz «pizza» w wyszukiwarkę”). Never straight "…" in body or frontmatter, never English “…”. List names and screen labels too: „Najlepsza pizza we Włoszech”.
- **Dashes:** the em dash is banned, and the Polish półpauza „ – ” used as a sentence dash is the same thing in disguise. Restructure: colon for an explanation, comma for an aside, parentheses for an addition, full stop for a contrast. Ranges: „od 3 do 5 dni” in prose, „9–18” only in tables.
- **Commas:** this is where translated Polish shows first. Always a comma before subordinate clauses: że, żeby, który/która/które, czy, gdy, jeśli, bo, co, gdzie, jak (when it opens a clause). „Wskazówki, co zapisywać”, „odpowiedź na pytanie, czy to miejsce, czy chwila”. Comma with imiesłowy przysłówkowe: „Zapisuj, stojąc w kolejce”. No comma before „i”, „oraz”, „lub”, „albo” joining simple elements.
- **The keyword:** „aplikacja dziennik podróży” is a search string, not Polish. In prose and headings write „aplikacja do dziennika podróży”, „aplikacja do prowadzenia dziennika podróży” or „dziennik podróży w aplikacji”. In the title and H1 keep the query words in that grammatical form („Aplikacja do dziennika podróży: 6 najlepszych”); search engines match the inflection. Same for „Polarsteps alternatywa” → „alternatywa dla Polarsteps”.
- **Inflecting brand names:** brands stay in Latin script and their own spelling. Decline them where Polish naturally does („w Polarstepsie” is colloquial: prefer „w Polarsteps”, „w aplikacji Polarsteps”, „w VoyageLogu” is acceptable but „w VoyageLog” or „w aplikacji VoyageLog” reads cleaner). Never add an apostrophe before the ending („VoyageLog'u” is wrong; Polish writes „VoyageLogu”, but prefer the aplikacja construction). Pick one solution per article.
- **Capitalisation:** headings are sentences: capital at the start and for proper names only („Jak prowadzić dziennik podróży, do którego chce się wracać”). Nationality adjectives lowercase (polski, włoski); inhabitants capitalised (Polacy, Włosi). Months and weekdays lowercase.
- **Numbers:** decimal comma (4,8), thousands with a space from 10 000 (non-breaking space), „50 zdjęć”, „193 państwa”. Mind the numeral agreement: 2–4 take nominative plural (dwie aplikacje, cztery wpisy), 5+ take genitive plural (pięć aplikacji, sześć wpisów). Percent: „4%” without a space is standard in Polish.
- **Dates and times:** „24 października 2026”, in tables „24.10.2026”. „o 9.00” or „o 9:00”, one style per article; „od 9 do 18”.
- **Currency:** „19,99 zł” with a space before zł; „20 zł”, „14 zł”. Euro: „15 euro” in prose, „15 €” only in tables. State prices only when verified (reference, section 5).
- **Feature names** as in `src/locales/pl.js`: miejsce, chwila (not „moment” for the entry type), listy miast, listy best-of, Insights, Year in Travel, mapa podróży, odznaki, podsumowanie podróży, „W tym dniu”.

## Smell list: rewrite on sight

Corporate and bureaucratic Polish:
- „pozwala na” + noun → active verb: „Aplikacja pozwala na eksport danych” → „Dane wyeksportujesz do…”.
- „w celu”, „w przypadku”, „dokonać zakupu”, „dokonać wyboru”, „posiada” (for things) → „żeby”, „gdy”, „kupić”, „wybrać”, „ma”.
- „jest w stanie” → „może”, „potrafi”. „Realizacja wpisu” → „wpis”.
- Nominal chains: „Proces tworzenia nowego wpisu odbywa się poprzez…” → „Nowy wpis dodajesz…”.

AI, SEO and Instagram Polish:
- „W dzisiejszych czasach”, „W tym artykule dowiesz się”, „Zapraszamy do lektury”, „Przekonaj się sam” → cut, open with the answer.
- „warto” in every paragraph (the drafts use it 20+ times per desk): keep at most two per article, replace the rest with a direct recommendation or a reason.
- „niezapomniane wspomnienia”, „magiczne miejsca”, „ukryte perełki”, „raj na ziemi”, „przygoda życia”, „podróżnicza pasja” → one concrete detail.
- „intuicyjny”, „bezproblemowy”, „w kilka sekund”, „łatwo i przyjemnie” → show the step.
- „Podsumowując,” / „Reasumując,” openers on the last section → a heading that states the conclusion.
- Keyword strings repeated in every H2 → one per heading at most, varied forms.

Calques from English:
- „robić sens” / „to ma sens” overuse → „to rozsądne”, „to się opłaca”.
- „na koniec dnia” → „ostatecznie”, „w gruncie rzeczy”.
- „robić różnicę” → „mieć znaczenie”, „zmieniać wiele”.
- „w 2026” is fine; „w roku 2026” is stiff. „Na 2026 rok” → „na rok 2026” or „w 2026 roku”.
- „Bądź pewny, że…”, „Upewnij się, że…” at the start of every tip → plain imperative.
- „aplikacja oferuje funkcjonalność…” → „aplikacja ma funkcję…”; „funkcjonalność” is almost always „funkcja”.
- „dedykowany” (in the sense of „designed for”) → „przeznaczony do”, „osobny”.
- „Wspierać” formats or platforms → „obsługiwać”, „działać na”.
- English possessive overuse: „Zapisz swoje notatki w swoim dzienniku na swoim telefonie” → drop most possessives; Polish infers them.

## Line-edit priorities, Polish edition

1. **Lede:** the first sentence answers the query; the disclosure („VoyageLog robimy my”) sits in the first or second paragraph, once.
2. **Commas and agreement** before style: a missing comma before „że” or a wrong numeral form is the first thing a Polish reader notices, and it reads as machine translation.
3. **Word order:** end the sentence on the new information. „W VoyageLogu wpis dodajesz w kilka sekund” beats „Dodawanie wpisu w VoyageLogu jest możliwe w kilka sekund”.
4. **Aspect:** instructions take the perfective („zapisz”, „dodaj”, „oceń”); habits take the imperfective („zapisuj od razu”). Translated drafts mix them randomly.
5. **Local and concrete:** Kraków, Gdańsk, Wrocław, Zakopane, Mazury, Bieszczady, Hel, a pierogarnia, a bar mleczny, a delayed TLK. Abroad: Lizbona, Rzym, Gruzja, Albania, Teneryfa, where Poles actually go. Verify any fact you add.
6. **Headings:** real questions or plain statements, sentence case, no keyword lists.
7. **FAQ:** each answer opens with „Tak”, „Nie” or the direct answer, repeats the subject („VoyageLog nie wymaga konta”), lowercase ty forms, no links.

## Market facts and traps

- Poland is in the EU: roaming inside the EU/EEA follows the EU rules; outside (UK, Switzerland, Turkey, Georgia, Albania, Balkans outside the EU) it does not. Do not state operator prices; verify any roaming claim on an official EU or operator page or keep it general.
- Photo books: Polish readers know Empik Foto, CEWE, Saal Digital, Rossmann. Name a provider only with facts verified on its Polish site today, never with an unverified price.
- Polarsteps' Polish interface: check the Polish App Store / Google Play language list before saying it has or lacks Polish.
- VoyageLog claims: no RODO, encryption or server-location claims exist in `en.js`. „Dane zostają na telefonie, nie ma serwera z twoimi podróżami” is true and enough.
- Slugs are the shared English ones (`best-travel-journal-apps`, …). Link only to files that exist in `content/blog/pl/`.

## Masthead lens

`MASTHEAD.md` (next to this file) sets the quality bar from the strongest Polish travel and product-review titles: what they verify, how they date and qualify practical information, how they label commercial interest. After the line edit, house style and smell list, read the article once more against its "Editor's lens" questions and fix what falls short. Borrow the standard only: never their content, headlines, lists or phrasing, and never mention them in an article (reference, section 10).

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs pl/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above, then the masthead lens pass (`MASTHEAD.md`).
4. `node scripts/check-blog.mjs pl/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs pl/<slug>` until no ERROR remains.
5. `git diff --no-index --word-diff <snapshot> content/blog/pl/<slug>.md` to review your own changes.
6. Append the editorial note to `docs/editorial/pl.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean, then do one read only for commas, numeral agreement and lowercase ty-forms. The report is in English; quote Polish examples as they appear.
