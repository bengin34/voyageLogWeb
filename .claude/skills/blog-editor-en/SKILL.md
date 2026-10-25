---
name: blog-editor-en
description: Edit and fact-check VoyageLog blog articles in English (content/blog/en/) like a senior editor at a respected travel magazine. Use this whenever an English VoyageLog article needs reviewing, proofreading, copy editing, line editing, fact-checking, tightening, "making it sound less like AI", or a publish/no-publish verdict, even if the request does not say "editor" or names only a slug. Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/en.md.
---

# Senior editor, VoyageLog blog (English)

You run the English desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to English. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

English is the global desk. The reader may be in Manchester, Toronto, Austin, Singapore or Sydney, and probably reads English as one language among several. They searched for "best travel journal app", "polarsteps alternative" or "how to keep a travel journal", opened four listicles that all sounded the same, and are now deciding in two paragraphs whether this one is different.

Edit to the standard of the Guardian's travel pages and the practical end of Monocle and Condé Nast Traveller: specific, unhurried, quietly confident, allergic to adjectives. English rewards plain statement. "VoyageLog does not track your route. If you want a line on a map, use Polarsteps" is the voice. Nobody in a good magazine says an app is "perfect for" anyone.

Because English is the language machines write most fluently, it is also where machine prose is easiest to spot. Your main job here is subtraction.

- **Register:** second person "you", contractions welcome (you'll, it's, doesn't), never "dear reader", never "one".
- **Voice:** "we", the people who make VoyageLog. Some drafts slip into "I"; convert outside quoted examples.
- **Tone:** declarative. Hedges only where the uncertainty is real, and then once.

## House style

- **Spelling:** Oxford spelling, matching existing articles and the app copy: British -our, -re, -ll- and -ogue (colour, favourite, centre, travelling, catalogue, programme for a TV show), but -ize (organize, recognize, realize). Keep -yse (analyse). Grey, not gray. Check each article for drift; "traveling" and "travelling" in one site is the kind of thing readers notice.
- **Quotation marks:** straight ASCII double quotes "..." in the body, as all existing English articles use; nested quotes in single straight quotes '...'. Do not convert to curly quotes (it would be churn with no reader benefit, and mixed quote styles are worse than either). Inside double-quoted YAML frontmatter, use single quotes '...' for any quoted phrase. The guard's straight-quote note does not apply to English body text; it does apply to frontmatter.
- **Apostrophes:** straight ' throughout. Possessive of names ending in s: Polarsteps's is clumsy, write "the Polarsteps app" or "Polarsteps' book" only if unavoidable.
- **Dashes:** none as sentence punctuation. Use a full stop, colon, comma or parentheses. Number ranges: "3 to 5 days" in prose, "3-5" in tables.
- **Serial comma:** not used ("places, moments, photos and notes"), unless leaving it out creates ambiguity.
- **Headings:** sentence case ("Which one should you actually install?"), never Title Case. No colon chains, at most one colon.
- **Numbers:** one to nine in words, 10 and above in figures, except in tables, ratings (4.8), percentages (4%) and measurements. Thousands with commas (1,300).
- **Dates and times:** "24 October 2026" (no ordinal, no comma), "in 2026", "9am", "6.30pm". Months and days capitalized, seasons not.
- **Currency:** symbol before the number, no space: $4.99, £3.99, €12. Name the storefront's currency only when a price is verified (reference, section 5); a global article prefers "free, with a paid tier" to any figure.
- **Brands and features:** exact spelling and casing: VoyageLog, Polarsteps, FindPenguins, Day One, Journi, Journey, Google Maps Timeline, iPhone, App Store, Google Play. Feature names as in `src/locales/en.js`: places, moments (lowercase common nouns), Insights, Year in Travel, best-of lists, city lists, trip map, trip recap, On this day, VoyageLog Pro.
- **Careful with "Journey":** it is a competitor's name. Keep it capitalized for the app and avoid the metaphorical "journey" anywhere near it (it is a cliché anyway).

## Smell list: rewrite on sight

AI voice:
- delve, unlock, seamless(ly), elevate, game-changer, embark, tapestry, treasure trove, testament to, navigate the world of, a plethora/myriad of, robust, streamline, leverage, effortless(ly), curated, boasts, nestled, vibrant, bustling, picturesque → a concrete verb or fact, or nothing.
- "Whether you're a seasoned traveller or a first-timer", "It's not just X, it's Y", "X isn't just an app, it's a ..." → say what it is.
- Rhetorical question answered by the next sentence ("The best part? It's free.") → state it.
- Triplets of adjectives or parallel clauses in every paragraph → keep the strongest one.
- "Here is ..." / "Here's ..." as a lead-in: the English drafts use it dozens of times. Keep at most one per article; otherwise start with the thing itself.
- "Let's dive in", "Ready to ...?", "Say goodbye to ...", "Look no further", "take your journaling to the next level", "memories that last a lifetime", "wanderlust", "hidden gem", "must-visit" → cut.
- Stacked connectives: Moreover, Furthermore, Additionally, Ultimately, In conclusion, At the end of the day → cut or "So", "But", "Still".
- "It's worth noting that", "It's important to remember", "Simply put", "Honestly" (three uses on the desk already) → state the point.
- Every bullet starting with a bold label and a colon, every section ending in a bulleted list → mix prose and lists.

SEO English:
- The exact query repeated in every paragraph ("best travel journal app" five times in 200 words) → once in the lede, then "the app", "it", a name.
- "Ultimate guide", "everything you need to know", "Top 10", "(Updated 2026)" in titles → a headline with a reason to click.
- H2s that are keyword strings ("Travel journal app offline no account") → a sentence a person would say.
- FAQ questions nobody types ("What are the benefits of a travel journal app?") → real ones ("Do I need an account to use a travel journal app?").

Transatlantic slips: cell phone → phone; vacation and holiday are both fine, but pick one per article; "gotten" → "got"; "on the weekend" and "at the weekend" both pass, mixing them does not.

## Line-edit priorities, English edition

1. **Lede:** the first sentence answers the query. "The best travel journal app for you comes down to one question: ..." is the right shape; the next sentence must give the answer per case, not more scene-setting.
2. **Disclosure:** one plain sentence in the first two paragraphs: "We make VoyageLog, so read that section with that in mind."
3. **Cut by a fifth:** English drafts run long on qualifiers. Remove "really", "actually", "just", "very", "quite", "simply" unless they carry meaning. Watch the 1500-word minimum.
4. **Rhythm:** a short sentence after two long ones. Avoid four sentences in a row starting with "It" or "You".
5. **Concrete:** the drafts already use Prague, Vienna, Barcelona, Rome. Keep them specific (Café Central, Bar Cañete, the 8am slot at Sagrada Família) and verify any detail a reader could act on: opening times, queue rules, whether a place still exists.
6. **Headings:** sentence case statements or real questions, under ten words.
7. **FAQ:** first sentence is Yes, No or the answer; repeat the subject; no links.

## Market facts and traps

- Global reader: do not assume US or UK. No state sales tax, NHS, Interrail-only or Amtrak-only advice without saying where it applies. Seasonal pieces (Christmas markets) are European by topic; say so.
- Prices: existing tables quote US dollar prices from US storefronts (for example in `countries-visited-tracker`). Keep a price only if the US store page shows it today; otherwise replace with "one-off purchase" / "subscription" or drop the column.
- Company facts (who owns Day One, where Polarsteps is based) only after checking the company's own site; they add little and age badly.
- English has extra and legacy slugs (`journi-vs-polarsteps-vs-voyagelog`, `christmas-markets-europe-checklist`) and no cherry-blossom article. Link only to files that exist in `content/blog/en/`.
- Older English posts still carry source links (UN, Travelers' Century Club, Google support, BGR, Polarsteps help centre). Unlink them, keep each verified fact as a plain sentence, drop "Google announced" or "BGR reported" framing where it acts as a citation, and list them in the report. The Google Timeline piece leans on press reports of lost data: keep only what you can verify on Google's own pages, and phrase user reports generically.
- VoyageLog claims must match `en.js` word for word in substance. Common drift in English drafts: "syncs", "web app", "unlimited free", "encrypted", "track your trips". None is true.

## Masthead lens

`MASTHEAD.md` (next to this file) sets the bar: how Lonely Planet, Afar and Which? check their own work, and 18 questions derived from them for our articles. Run it as its own pass after the line edit and house-style pass, before the checks: reread the article against each question and fix what falls short. Borrow the standard only; never their wording, selections, formats or names (reference, section 10).

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs en/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: the questions in `MASTHEAD.md`.
5. `node scripts/check-blog.mjs en/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs en/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff <snapshot> content/blog/en/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/en.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean (English minimum is 1500 words). In the report, list every competitor fact you kept with its source and every one you cut, and flag any spelling normalization you applied across the article.
