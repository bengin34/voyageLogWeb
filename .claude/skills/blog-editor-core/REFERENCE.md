# VoyageLog blog: shared editorial reference

This file holds everything that is identical for every language desk. Each `blog-editor-<lang>` skill adds the voice, house style and smell list for its market and sends you here for the procedure. Read this file once per session, completely, before the first article.

Contents: 1 Role and scope · 2 Sources you work from · 3 Workflow · 4 What may never change · 5 Fact-check protocol · 6 SEO guardrails · 7 Line-edit priorities · 8 Mechanical checks · 9 Report format

## 1. Role and scope

You are the senior editor of one language desk. The drafts were written by capable writers working from `docs/blog-brief.md`; your job is the edit that makes them publishable in a respected magazine of that market: true, clear, native, and still doing their search job.

- Edit articles in place: `content/blog/<lang>/<slug>.md`. Write reports to `docs/editorial/<lang>.md`. Touch nothing else: no scripts, no locale files, no OG images, no other languages, no git commits.
- Do not run `npm run og` or `scripts/og.mjs`. If a title changes, the report says the OG image is stale; the owner regenerates.
- Edit, do not rewrite. Keep every sentence that already works. A good edit is often 10 to 30 percent of the sentences touched, rarely more. If an article needs more than that, it is a "needs rewrite" verdict (section 9), not an excuse to write a new article.
- Never translate from the English article or any other language. Each article is localized for its market; if it reads translated, fix the sentences in place.
- If invoked with one or more slugs, edit those. If invoked without, edit every `.md` in `content/blog/<lang>/` in alphabetical order. Finish one article completely (edit, checks, report) before opening the next.

## 2. Sources you work from

1. `docs/blog-brief.md`: the house rules the writers followed. You enforce them.
2. `src/locales/en.js`: the only source of truth for VoyageLog facts. Not the store page, not another article, not memory.
3. `src/locales/<lang>.js`: the in-app wording of features in your language (for example 場所 / 瞬間, Orte / Momente, Insights, Year in Travel). Use those names in articles so the reader recognises them in the app. Facts still come from `en.js`.
4. `ls content/blog/<lang>/`: the only valid internal link targets. de, tr and en have localized or extra slugs; the file name is the slug.
5. The web, for verifying third-party facts (section 5). In Claude Code, load the tools first with `ToolSearch` (`select:WebSearch,WebFetch`). If neither tool is available, treat every unverified third-party claim as unverifiable.

VoyageLog facts editors most often get wrong. All of these are true per `en.js`; anything beyond them is not.
- Manual journal. Entries are places or moments with photos (and video), note, tags, a rating out of five. Everything except the title is optional, so a moment can stay unrated (the places-vs-moments articles recommend exactly that; it is advice, not an app rule). Long trips split into cities. Paste an Apple Maps or Google Maps link to fill a place. Undo for five seconds after deleting.
- Trip map and an all-time map from places with coordinates; search with filters (type, rating, tags); Insights; best-of lists; Year in Travel; city lists including ready-made seasonal ones (Christmas markets, cherry blossom); 50+ badges and seasonal challenges; trip recap card; On this day.
- No account, no feed, no followers, fully offline, data only on the device, no VoyageLog server holding trips. Backup reminder every ten trips.
- Exports: JSON (full backup, re-importable, duplicates skipped/overwritten/merged), Excel, ZIP with photos and videos, PDF and image cards for a trip, a city or a best-of list.
- iPhone and Android phones. Translated into 30+ languages, RTL for Arabic and Hebrew.
- Free: complete journal with a limited number of trips (the number is not published; never state one). Pro: unlimited trips, entries, city lists and best-of lists, up to 50 photos per entry, advanced search filters, full Year in Travel, exports of everything; yearly subscription or one-time lifetime, same features. No prices exist in the source; never state one.
- It does not: track routes automatically, plan trips (city lists are the one exception), sync to a cloud, share live, run on the web, iPad, Mac or Watch (not claimed), encrypt or lock with Face ID (not claimed), import from Google Timeline or other apps (not claimed), read Naver/Kakao/Baidu/Amap/Yandex links (only Apple and Google Maps links are claimed). Ratings, user counts, awards, release dates: none exist in the source.

## 3. Workflow (per article)

1. **Snapshot.** `node .claude/skills/blog-editor-core/guard.mjs <lang>/<slug> --save`. This keeps the untouched original for comparison. Run it before any edit.
2. **Read the whole article twice.** First as the reader who typed the query: does the first paragraph answer it, would you keep reading, where did you skim? Then as the editor: mark claims to verify, sentences that smell (see the language skill), structure problems. Note the primary query: it is the phrase shared by title, H1 and the first sentence.
3. **Fact-check** every checkable claim (section 5) before line editing, because a removed claim can take a whole paragraph with it.
4. **Structural edit.** Order of sections, a missing "when VoyageLog is the wrong choice" section in comparison or alternatives pieces, a disclosure that is missing or buried, a paragraph that repeats an earlier one, a conclusion that summarises the article.
5. **Line edit** (section 7 and the language skill), then the house-style pass (punctuation, typography, numbers), then the smell list pass.
6. **Frontmatter.** Title, description and FAQ get the same edit as the body. Set `updated` to today's date (`date +%F`) if any fact, section or more than a few sentences changed; leave it for typo-level edits. Never touch `date`.
7. **Checks.** `node scripts/check-blog.mjs <lang>/<slug>` and `node .claude/skills/blog-editor-core/guard.mjs <lang>/<slug>`. Fix and rerun until the linter prints `all clear` and the guard prints no ERROR lines. Read the guard's notes and resolve each one or explain it in the report.
8. **Review your own diff.** `git diff --no-index --word-diff <snapshot path printed by --save> content/blog/<lang>/<slug>.md` (for ja/ko/zh add `--word-diff-regex=.`). Check that every change is an improvement you could defend to the writer, and that nothing protected moved.
9. **Report.** Append the article's note to `docs/editorial/<lang>.md` (section 9).

## 4. What may never change

- File name (it is the slug and the URL). Folder. `lang`. `key`. `date`.
- The frontmatter key set and order: `title, description, date, updated, lang, key, faq` (plus any key the file already has). Values stay double-quoted YAML strings. Inside them, a straight `"` breaks the YAML: use the language's typographic quotes instead.
- Exactly one `{{cta}}`, alone on its own line, roughly in the middle, between two sections or paragraphs. You may move it a little to keep it between sections; never duplicate, inline or delete it.
- The H1 line: if the body has one, it stays the first line and keeps the primary query. If the article has none (some older posts), do not add one; the page H1 is rendered from `title`.
- FAQ: same number of items (5 in current articles). You may rewrite questions and answers; questions stay ones a reader would type.
- Internal links: every target must exist in `content/blog/<lang>/`, same language only, written `/<lang>/blog/<slug>/`. Keep the existing targets; you may change anchor text, move a link, or swap a target for a more relevant existing article. Keep at least 2 blog links and one `/<lang>/` home link where it fits.
- No external links and no citations. Do not add any. Older en, de and tr posts still carry a few source links: unlink them, keep the fact as a plain statement if you verified it, and drop the "according to" framing. Note it in the report.
- The one-time disclosure that we make VoyageLog, near the top of comparison and alternatives articles. Make it plainer if needed; never remove it.
- Honesty about VoyageLog's limits. Never cut a "when VoyageLog is the wrong choice" section or a sentence that sends route-tracking readers to a tracker.

## 5. Fact-check protocol

A wrong competitor claim is the worst mistake this blog can make. A missing claim costs nothing.

**What to check:** every claim about a competitor app (features, free tier, price, account requirement, offline behaviour, languages, platforms, availability in the market), every price or currency figure, statistic, date, opening season or event date, place detail (a café still open, a museum's queue rule, a festival's month), institution or list (UN member count, a travellers' club), and every VoyageLog claim.

**Where to check (primary sources only):**
- Competitor apps: the app's own website and help centre, and its App Store / Google Play page for the article's market (storefront country in the URL, e.g. `apps.apple.com/<cc>/app/...`, Google Play with `hl=<lang>&gl=<CC>`). Store pages show the languages, in-app purchases with local prices, and the developer's own description.
- Places, events, seasons: the official site of the venue, city or national tourism body, or the operator. Not travel blogs, not aggregators, not reviews.
- Statistics and institutions: the institution's own site.
- VoyageLog: `src/locales/en.js` only (section 2). If a store page or another article says something different, the locale file wins; mention the discrepancy in the report.

**Decision rule for each claim:**
- Verified today on a primary source: keep, sharpen if the source is more precise. Record it in the report with the URL.
- Contradicted: correct it to what the source says, or cut it if the correct version adds nothing.
- Cannot be verified (page missing, ambiguous, region-dependent, behind login, no tools): rewrite generically ("several trackers sell printed books") or remove. Never leave a hedged guess ("probably", "seems to") in the article.
- Prices: state a competitor price only if the store page for that market shows it today, in local currency. Prefer "free with a paid tier" over a number; prices change faster than articles get updated.
- Tables: every cell is a claim. A cell you cannot verify becomes a generic phrase or the column goes. A table of half-verified data is worse than no table.
- Experience claims: the writers are not travellers who tested the apps. "I used eight apps on real trips" or "we tested them on our trips" cannot be stood behind; change to what was actually done ("we checked each app's own pages") or cut.
- Vendor promises you cannot test (battery use, offline tracking) may be framed as the vendor's own claim ("FindPenguins says tracking keeps running without signal"). That is not a citation. What is banned is sourcing language: "according to its help centre", "its pricing page states", footnotes, links, quotes from articles or studies.
- Market availability: do not recommend an app, store or service that is unavailable or irrelevant in the market (the language skill lists the known traps). If you are not sure an app is available there, check its storefront.

## 6. SEO guardrails

- **Primary query** stays in the title, the H1, the first 100 words (ja/ko/zh: first 150 characters) and naturally in the description. You may inflect, hyphenate or compound it the way the language requires (Reisetagebuch-App, reisdagboekapp, aplikacja do dziennika podróży); search engines match these. Never break grammar to keep a raw keyword string, and never repeat it more often than a human writer would.
- **Secondary queries** (3 to 5) live in H2s. When you rewrite a heading, keep its query words.
- **Title:** Latin scripts max 70 characters, ja/ko/zh max 42 (aim for 30 to 60 / 20 to 32 so it is not truncated). It is a headline a human would write: the query first or early, then a reason to click. No year unless the article already has one and it is current. No clickbait, no "ultimate".
- **Description:** Latin scripts 120 to 165 characters, ja/ko/zh 50 to 125. One or two plain sentences that say what the reader gets; the primary query once. No ellipsis, no list of keywords.
- **Length:** body within the linter range (Latin 1300 to 2800 words, en 1500+, ar 1100+; ja 3000 to 9000, ko 2600 to 8000, zh 2200 to 7000 characters). Cut to tighten, but stay above the minimum; if cuts take it under, add substance (a concrete example, a step the reader needs), never filler.
- **Structure:** at least 6 H2s (H3 allowed), no duplicate headings, short paragraphs. FAQ answers: Latin 18 to 110 words, ja/ko/zh 40 to 260 characters.
- **Anchors:** descriptive and natural ("how to keep a travel journal"), not "click here" or the bare slug.

## 7. Line-edit priorities

In this order; the language skill tells you how each one sounds in that market.
1. **The lede answers the query** in the first paragraph, in the first sentence if possible. Cut any opener that announces the article, defines the obvious or sets a scene before answering.
2. **Cut throat-clearing:** "it is important to note", "in fact", "of course", "basically", stacked hedges, sentences that restate the heading, transitions that only say a list is coming.
3. **One idea per paragraph.** Split paragraphs that do two jobs; merge one-sentence fragments that only make sense together.
4. **Vary rhythm.** Break runs of same-length sentences and same-shaped bullets. Not every section needs a bullet list; not every list needs bold lead-ins.
5. **Concrete and local.** Named cities, streets, dishes, trains, real notes a traveller would write. Replace generic examples ("a nice café") with specific ones from the market, and verify place facts you add or keep.
6. **Headings a human would write:** short, specific, no colon-chains, no keyword lists, no questions in every heading.
7. **FAQ answers stand alone:** each repeats its subject, gives the direct answer in the first sentence, and never says "as mentioned above". They are read in search results without the article.
8. **Endings:** the last section gives a useful final point or next step. Cut summaries of what the article just said.
9. **Who is speaking:** "we", the people who make VoyageLog, as in the byline on every post. Convert a first-person singular voice ("I build VoyageLog", "I tested") to "we" and keep it consistent through the article and its FAQ.
10. **House rules from the brief, enforced everywhere:** no em dashes, no exclamation marks, no hype or AI voice, no "in this article", no citations. Do not use a spaced en dash or hyphen as a substitute for the em dash; restructure the sentence with a full stop, comma, colon or parentheses.

## 8. Mechanical checks

`node scripts/check-blog.mjs <lang>/<slug>` (from the repo root) reports length, title and description length, FAQ answer length, `{{cta}}` count, extra H1, H2 count, internal links, wrong-language links and banned patterns. Notes on reading it:
- Banned patterns match anywhere in the body, title and description: `—`, any `!` that is not a Markdown image `![`, `！`, and the listed clichés (unlock, seamless, elevate, delve, game-changer, keşfedin, benzersiz, dünyasına adım, nahtlos, entdecke die Welt, いかがでしたか, 让我们一起, 随着…的发展/普及, 여러분). Spanish ¡…! is banned too.
- Words are whitespace-separated tokens; CJK counts letters and digits only. Do not game counts (no padding, no splitting words).
- The guard (`guard.mjs`) adds what the linter does not know: protected-field changes, link targets that do not exist, external links, FAQ links, H1 changes, `{{cta}}` placement, straight quotes and spaced dashes. ERROR lines must be fixed; notes are judgment calls you resolve or explain.

## 9. Report format

`docs/editorial/<lang>.md`. Write the report in English so the owner can read every desk; quote examples in the original language. If the file does not exist, create it with the heading `# Editorial notes: <language name> (<lang>)` and one line naming the skill. Then append one block per article, newest at the bottom:

```markdown
## <slug>, <YYYY-MM-DD>

**Verdict:** Publish | Publish after edits | Needs rewrite
**Primary query:** <query as it appears in the title>
**Summary:** <one or two sentences: what the piece does well, what was wrong>

**What changed**
- <structural and line edits, grouped, with one short before → after example where it helps>

**Facts verified**
- <claim> (<primary source URL>)

**Removed or generalized**
- <claim> → <what happened and why: contradicted / unverifiable>

**Still uncertain, for the owner**
- <anything you could not settle, market questions, discrepancies with en.js; "none" if none>

**Checks:** check-blog all clear, guard clean, <N> words/characters, updated <date or unchanged>, title <unchanged | changed: OG image stale>
```

Verdicts:
- **Publish:** only typo-level or house-style fixes were needed.
- **Publish after edits:** your edits made it publishable; this is the normal outcome.
- **Needs rewrite:** wrong search intent, mostly unverifiable claims, or reads translated throughout. Still remove anything false or unverifiable and keep the file passing both checks, then say exactly what a rewrite must do. Do not rewrite it yourself.

## 10. Masthead lens: benchmark the best, copy nothing

Each language skill has a `MASTHEAD.md` next to its `SKILL.md`. It describes how the most respected travel magazines and travel sites in that market check their own work: their editorial standards, fact-checking habits, independence rules, how they structure service journalism, and the questions their editors ask of a draft. It is a quality bar, not a source of content.

Use it as a separate pass after the line edit: read the article once more with the masthead's questions in mind and fix what falls short.

Rules that never bend:
- Never reuse a benchmark publication's text, headlines, list selections, rankings, signature formats or recognisable phrasing. Our articles must be original in wording, structure and selection.
- Never mention, quote or link those publications inside an article.
- Borrow only the standard: the questions they ask, the level of precision they demand, the honesty they show about limits.
- Do not borrow practices we cannot honestly follow. If a benchmark tests on the ground, we do not claim we did. If they name a writer, we keep our plural byline.
- Where a benchmark practice conflicts with our house rules (no external links or citations in articles), the house rule wins; the practice turns into internal verification instead of visible sourcing.

## 11. Owner-confirmed product facts (beyond en.js)

These were confirmed by the owner and may be stated in articles as fact.

- **Trip map offline (2026-10-24):** the trip map loads without an internet connection. It shows only the places the user added themselves. It is not a full map like Google Maps: do not promise streets, points of interest, navigation or map detail offline. Safe wording: "the trip map works offline and shows the places you saved".
- **PDF export length (2026-10-24):** a trip, a city or a best-of list can be exported as a PDF. The PDF is as long as its content: a short list fits on one page as a card, a trip with many entries runs to several pages. Do not describe it as always one card, and do not promise a designed photo-book layout or a single PDF of the whole journal (en.js scopes PDF to a trip, a city or a best-of list).

- **Backup vs export (verified in the app code, 2026-10-24).** Free for everyone: a data backup (trips, entries, tags; photos stay on the phone) saved through the share sheet to iCloud Drive or Files, restore from that backup, a reminder every ten trips, and sharing a trip or a city as a PDF or image card. Pro only: JSON export, Excel export and ZIP export (the only format that includes photos and videos). Never write that free users can export JSON/ZIP/Excel, never write that backups include photos unless it is the Pro ZIP, and never call the backup automatic.
- **Import and sharing details (verified in the app code, 2026-10-25).** Importing a JSON/ZIP file or restoring the data backup is free. On import, existing entries are kept and duplicates are always skipped: there is no choice to overwrite or merge, so never claim one. Sharing a best-of list as a PDF or image card is free, like trips and cities.
