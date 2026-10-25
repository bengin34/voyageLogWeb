# Blog article brief (all languages)

Goal: organic search traffic that ends in an install of VoyageLog (private, offline-first travel journal for iPhone and Android, getvoyagelog.app). Articles are **localized, not translated**: write each one as a native author targeting what people in that language market actually search for.

## Before writing
1. Read `src/locales/en.js` (product facts: features, free vs Pro, FAQ). Use only facts found there about VoyageLog. Never invent prices, ratings, user counts, awards, release dates or features. VoyageLog is a manual journal (places and moments, photos, notes, ratings, search, filters, trip map, exports); it does **not** auto-track routes and is **not** a trip planner. Say so honestly where relevant. Owner-confirmed: the trip map works offline but shows only the user's own saved places, not a full Google Maps-style map. PDF export (trip, city or best-of list) is one page or several, depending on how much content there is.
2. Read one finished reference article for format and tone: `content/blog/en/best-travel-journal-apps.md` and `content/blog/tr/polarsteps-alternatifi.md`.
3. Run 2-3 web searches in your target language for the article's main query. See which sites and apps actually rank, and what people ask. Use that to pick the primary query and the competitors that matter in that market. State competitor facts (free tier, account needed, offline, price) **only if you verified them on the app's own page today**; otherwise leave them out or phrase generically. A wrong competitor claim is the worst mistake.

## Hard rules
- No citations, quotes from sources, "according to ..." lines, footnotes or external links. Internal links only.
- No em dashes (—), no exclamation marks (! or ！), no hype, no clichés or "AI voice" (unlock, seamless, elevate, delve, game-changer, "in today's fast-paced world", "いかがでしたか", "让我们一起", "여러분", and their equivalents in your language). Short, concrete sentences. Real examples (named cities, concrete notes).
- First paragraph answers the query directly. No "in this article we will" intro.
- Disclose once that we make VoyageLog, near the top of any comparison article. Include an honest "when VoyageLog is the wrong choice" section where it fits.
- Primary query in title, H1, first 100 words and naturally in the description. 3-5 secondary queries in H2s.
- Write for the local reader: local city examples, local currency/measures, local habits. Do not mention services that are unavailable or irrelevant in that market.

## File format (`content/blog/<lang>/<slug>.md`)
```
---
title: "..."            # Latin scripts <= 70 chars; ja/ko/zh <= 42 chars
description: "..."      # Latin scripts 120-165 chars; ja/ko/zh 50-125 chars
date: 2026-10-24
updated: 2026-10-24
lang: <lang>
key: <key>              # same key in every language for the same topic
faq:                    # exactly 5 items; answers 18-110 words (ja/ko/zh: 40-260 characters)
  - q: "..."
    a: "..."
---

# H1 (contains the primary query)

...body...
```
- Body: at least 6 `##` sections (H3 allowed), short paragraphs, a table only with verified data. Exactly one line containing only `{{cta}}` roughly in the middle (it becomes the store-button block).
- Length: Latin scripts 1300-2800 words (Arabic 1100+); ja 3000-9000 characters; ko 2600-8000; zh 2200-7000.
- At least 2 internal links to other blog articles of the **same language**, written `[anchor text](/<lang>/blog/<slug>/)`, using only slugs that already exist in `content/blog/<lang>/`. One link to the app home page `/<lang>/` where natural. Never link to other languages.
- File name = the slug. ASCII only, lowercase, hyphens. **Latin-script languages use a slug in their own language** built from the primary query (de, tr, es, fr, it, pt, nl, pl; see existing files in `content/blog/<lang>/`). en, ru, ja, ko, zh and ar use the English slug in the table below. Never rename a published slug.

## Topics: key -> English slug (en, ru, ja, ko, zh, ar; other languages localize it)
| key | slug | Intent |
|---|---|---|
| best-apps | best-travel-journal-apps | best travel journal / trip diary apps, market-localized comparison |
| polarsteps-alternative | polarsteps-alternatives | Polarsteps alternatives, private, no account (if Polarsteps is little known locally, frame as "route-tracking trip apps and private alternatives") |
| offline-private | offline-travel-journal-app | travel journal that works offline and never asks for an account |
| how-to-journal | how-to-keep-a-travel-journal | step-by-step: how to keep a travel journal you will reread |
| places-vs-moments | places-vs-moments-travel-notes | system for travel notes: places and moments are separate entry types (both can be rated) |
| countries-visited | countries-visited-tracker | counting and mapping countries/cities visited, keeping the number honest |
| print-pdf | print-travel-journal-pdf | turning a travel journal into a PDF / printed book |
| prompts | travel-journal-prompts | writing prompts and ideas before, during and after a trip |
| google-timeline | google-maps-timeline-alternative | Google Maps Timeline moved to the phone: keeping your own travel history |
| seasonal | cherry-blossom-spots-checklist | seasonal checklist article tied to VoyageLog's city lists (cherry blossom season) |

## Finish
Run `node scripts/check-blog.mjs <lang>/<slug>` for each article you wrote and fix every reported problem. Do not edit any file except your own `content/blog/<lang>/` articles. Final reply: max 5 lines in English (files written, check result, any competitor fact you left out because unverified).
