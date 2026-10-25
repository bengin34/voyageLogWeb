# VoyageLog product marketing context

_Last updated: 2026-10-24. Read by every marketing skill before it asks questions._

## Product
- **What:** VoyageLog, a private travel journal and trip timeline for iPhone and Android.
- **Store links:** App Store id6758159402, Google Play com.voyagelog.app.
- **Site:** https://getvoyagelog.app (Vite + React landing page, static blog generator, GitHub Pages; deploys on push to `master`).
- **Category:** journaling / memory keeping for trips. It is NOT a trip planner (city lists are the single exception: places you hope to see).

## Verified product facts (owner-confirmed; do not invent others)
- No account, nothing to sign up for.
- Works without internet; data stays on the device; no server holds trips.
- The trip map works offline but shows only the places the user added, not a Google Maps-style base map.
- Places (rated) and moments are separate entry types; moments can also be rated.
- Long trips split city by city; full-text search across title, notes, tags and trip (advanced search is Pro).
- Backups: everyone can save a data-only backup (trips, entries, tags; no photos) to iCloud Drive/Files and restore it; reminder every ten trips. JSON, Excel and ZIP (with photos) exports are Pro only. Trip/city PDF or image share cards are free.
- The app ships 32 languages (app repo `src/localization/locales`, 944 keys each); the App Store currently shows 16 because the live iOS build predates the 2026-09-05 locale addition (inferred).
- PDF export of a trip, city or best-of list: one page or several, depending on content. Not a whole-journal PDF, not a photo book.
- Free with a limited number of trips; Pro adds unlimited use, advanced search, full Year in Travel history and JSON/Excel/ZIP exports.
- Built by a solo developer who answers support mail personally.

## Audience
- Travellers who want to remember trips privately: no social feed, no live tracking, no account.
- Strong segments: privacy-minded users (degoogle, Google Maps Timeline refugees), people leaving Polarsteps/Journi/FindPenguins, frequent city-trippers, country counters.

## Positioning
- One-liner: "Every trip, one calm timeline. Yours alone, on your phone."
- Main alternatives: Polarsteps, Journi, FindPenguins, Day One, Google Maps Timeline, paper journals.
- Honest trade-off we state: no route tracking, no social sharing feed.

## Acquisition constraints
- Organic only: SEO, AI search, ASO, earned links, community. **No paid ads.**
- Site languages (14): en, de, tr, es, fr, it, pt, nl, pl, ru, ja, ko, ar, zh. Japanese, Korean and Chinese are priority markets.
- Blog: content/blog/<lang>/*.md, 111 articles; shared brief docs/blog-brief.md; per-language editor skills in .claude/skills/blog-editor-*.
- House rules for articles: no citations or external links, no em dashes, no exclamation marks, verified competitor facts only.
- No analytics data is available in the repo. GSC/Bing status unknown. Never invent traffic, rankings or search volumes.

## Brand voice
Calm, concrete, short sentences, no hype words ("unlock", "seamless", "stunning"). Honest about what the app does not do.
