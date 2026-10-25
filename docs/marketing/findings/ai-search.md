# AI search / answer engine visibility audit

_Run: 2026-10-24. Scope: ChatGPT, Perplexity, Gemini / AI Overviews, Copilot, Claude, plus ja/ko/zh assistants. Repo state: working tree incl. uncommitted changes, fresh `dist/` (144 HTML pages). Method: `.agents/skills/ai-seo/SKILL.md` and references (agent-readiness, content-patterns, citations-vs-recommendations, multilingual-and-commerce, prompt-portfolio, positioning-and-consensus, platform-ranking-factors)._

**Evidence labels.** **Verified** = I checked it in the repo, in `dist/`, or with a live fetch or search today. **Hypothesis** = an inference that needs testing. Live checks used the WebSearch tool (one US search backend, one run per query) and WebFetch (which does not run JavaScript). I could not query ChatGPT, Perplexity, Gemini, Copilot or any CJK assistant directly. Nothing below is a measured AI citation rate, and the repo has no analytics or Search Console data.

## 1. Summary

The articles are well built for AI extraction. Openings answer the question first, comparison tables carry real columns ("Account needed / Works offline / Where data lives / Best for"), every article has 5 FAQ items with FAQPage JSON-LD, and every page shows a visible updated date. Four problems sit around that content:

1. **Most of the content is not live.** 86 of 111 articles, including every ja/ko/zh article, are untracked files. The live blog is EN/DE/TR only.
2. **The official page is almost empty to agents.** Without JavaScript, the home page has about 36 words of body text.
3. **No third party mentions VoyageLog,** and the brand name collides with look-alike apps. In live searches the own domain never came up, and AlternativeTo's Polarsteps page does not list VoyageLog.
4. **There is no single definition of VoyageLog in body copy,** and one product fact contradicts itself: whether backup export is free or Pro.

Owned-content fixes (items 1, 2 and 4) are cheap and fully in our control. Third-party consensus (item 3) is what moves "recommended" answers, and it will take months.

## 2. Findings (ranked by impact x confidence / effort)

| # | Finding | Evidence | Impact | Conf. | Effort | Proposed change |
|---|---|---|---|---|---|---|
| 1 | 86 of 111 articles and 11 of 14 blog languages are not deployed. ja/ko/zh, the priority markets, have zero retrievable pages | `git ls-files content/blog \| wc -l` gives 25 (de 7, en 11, tr 7). `git status` shows 11 untracked language dirs. Live `getvoyagelog.app/en/blog/` lists 11 articles, all dated 22 Oct. The live home page fallback links only EN/DE/TR | Critical: no engine can cite a page that does not exist | Verified | S | After owner review, deploy in priority order (ja, ko, zh, then the rest). Before deploy, set real `date` values. Today 86 files share `date: 2026-10-24` and all 111 share `updated: 2026-10-24` (frontmatter scan). A same-day bulk drop in 11 languages may look like scaled content (hypothesis) |
| 2 | Home page body is React-only. A non-JS agent sees 36 words: title, language links, "Blog", legal links. Features, privacy, free vs Pro and the visible FAQ are missing | `dist/index.html` body text minus scripts = 36 words. ja/ko/zh/de/tr homes have about 215-275 characters. `scripts/postbuild.mjs` `renderFallbackLinks()` injects only nav. WebFetch of live `/` returned only the nav list. The FAQ exists only as JSON-LD, with no visible text in the initial HTML | High: the home page is the "official" page that engines increasingly fetch for brand and fact questions (skill: ChatGPT 5.6 shift to `site:`/official retrieval) | Verified | M | Extend the postbuild fallback into a real static version of the home content from `src/locales/<lang>.js`. Include the H1, the definitional sentence (#4), a features list, free vs Pro text and the FAQ as `<dl>`, with React hydrating over it. Alternative: prerender `App.jsx` with `react-dom/server` at build time |
| 3 | No third-party consensus. VoyageLog is absent from the list pages assistants pull for "Polarsteps alternative" and "private offline journal" | WebFetch `alternativeto.net/software/polarsteps/` lists 12 alternatives (Dawarich, TREK, GeoPulse, Journey, AdventureLog, ...). VoyageLog is not among them. WebSearch "best private travel journal app no account offline" named TraveLog, Triplax, Map Diary, JournalBook. A DE search ("Reisetagebuch App ohne Konto offline") said it found no app that is both offline and account-free, citing Journi, appgefahren, futurezone, promobil, macwelt. A JA search cited app-liv, smartlog, choice.ameba, aumo | High: governs rung 4 (recommended). The DE answer shows an empty slot VoyageLog fits exactly | Verified (one run each) | M-L, ongoing | Create listings with the same one-line definition: AlternativeTo (as alternative to Polarsteps, Journi, FindPenguins, Day One, Google Maps Timeline, Journey), Product Hunt, and Mergeek (already lists us, so check its text). Send short pitches to the pages cited above (futurezone, promobil, appgefahren, app-liv, smartlog). Answer real Reddit and forum questions honestly, in our own name. Store listings must link getvoyagelog.app (ASO dimension) |
| 4 | Entity ambiguity. A brand search does not return the own domain, and several similarly named apps compete for the name | WebSearch "VoyageLog travel journal app" returned mergeek.com (third party) plus Voyager Logs (sailing log), Voyage Journal, VGP Voyage Log, AdventureLog. WebSearch "getvoyagelog.app" returned no own page and surfaced VoyaGO, VoyLog, Voyager Logs | High: assistants may merge us with a sailing logbook, or say they cannot find the app | Verified (single backend; Google may differ) | S | (a) Use one disambiguating definition everywhere (#5). (b) Add an `Organization` node with `@id`, `logo` and `sameAs` (both stores, plus AlternativeTo and Product Hunt once they exist), and link `SoftwareApplication.publisher` to it. (c) Submit the sitemap to Bing Webmaster Tools, which feeds ChatGPT and Copilot, and ping IndexNow on deploy. Check whether Brave (Claude) indexes the domain |
| 5 | No consistent definitional sentence in body copy. Articles disclose ("VoyageLog is our app") but rarely define | Regex scan of the first "VoyageLog is/ist/は/는/是" sentence per article. EN: 1/11 defines (journi-vs, "a third thing: a private journal..."), and best-apps says only "VoyageLog is our app." TR: 0/7 matches. JA/KO/ZH: mostly "私たちが作っているアプリです" / "저희가 만드는 앱이에요" / "我们自己做的应用". Platform named in only 2-6 articles per language (`grep -l -i 'iphone\|android'`). Meta descriptions are consistent but sit in `<head>`, not in the extractable body | High: an assistant asked "what is VoyageLog" has no quotable sentence on most pages | Verified | S | Add `entity.definition` to each locale file, e.g. EN: "VoyageLog is a private travel journal app for iPhone and Android: trips, places and moments stay on your phone, it works offline and needs no account." Render it in `blog.mjs` as a short "About VoyageLog" box under the CTA on every article, and on the home fallback. One edit propagates to 111 pages, with no external links |
| 6 | Contradictory product fact: is backup export free or Pro? | `src/locales/en.js:146` "Export a backup whenever you like". `:147` "Export a JSON or ZIP backup" (no tier). `:138` and `:150` "Pro ... adds ... exports". `content/blog/ja/offline-travel-journal-app.md` FAQ: full JSON/ZIP export is a Pro feature. Of 67 articles that mention JSON, only 7 state it is Pro in the same sentence. `.agents/product-marketing.md` lists both "Backups: JSON or ZIP" and "Pro adds exports" | High for trust: assistants will repeat whichever version they retrieve. A wrong "free backups" claim produces bad reviews | Verified conflict; true rule unknown | S | Owner states the exact rule once (which exports are free, which are Pro). Fix `en.js` FAQ plus the 13 locales, then sweep the articles with a grep list |
| 7 | No `llms.txt` and no explicit AI-crawler policy | `public/robots.txt` = `User-agent: * / Allow: /` + sitemap. `ls dist/llms*` finds nothing. Live `/llms.txt` returns 404 | Medium: access is already open (nothing blocked; GitHub Pages has no WAF). Discovery files are a cheap bonus for non-Google engines (Google says none are needed) | Verified | S | Add `public/llms.txt` (draft in section 4). Optionally have `blog.mjs` generate `llms-full.txt` and a per-article `index.md` from the markdown sources; GitHub Pages cannot do content negotiation, so static files are the route. Make robots explicit: allow `OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`, `meta-webindexer`, `Bingbot`. Decide separately on `GPTBot`, `ClaudeBot`, `Google-Extended`. For an unknown brand, allowing training may help the name enter model memory (hypothesis; owner decision) |
| 8 | Self-ranked #1 in 23 listicles | `grep -l '^## 1\.? \**VoyageLog'` matches 23 files; exceptions are ar/it best-apps and ar/ko/zh polarsteps | Medium: per the skill (Lily Ray study), emerging brands' self-promotional lists get cited while competitors get recommended. Our honest disclosure and "who should not pick it" sections reduce this risk | Hypothesis | S | Keep the pages. In 2-3 test articles, try "leader first, then where VoyageLog goes further" ordering, or a "Best for" ordering. Track the mention framing per section 3. Do not mass-edit before measuring |
| 9 | Authorship is anonymous and contradicts the "solo developer" fact | Byline `src/locales/en.js:169` "Written by the people who make VoyageLog"; zh "由 VoyageLog 团队撰写" (team). `scripts/blog.mjs:273` author = `Organization`. `.agents/product-marketing.md`: "Built by a solo developer" | Medium: named first-hand authors are an E-E-A-T and AI-trust signal. "Team" vs "solo" is an entity inconsistency | Verified | S | Add an `/about/` page per main locale (who builds it, why, what the app will never do). Set `author` to `Person` with that page as `url`. Use one consistent "made by an independent developer" phrase in bylines |
| 10 | Topic coverage gaps against high-intent prompts | Key matrix from frontmatter: `journi-vs-polarsteps` EN only. `google-timeline` en/ja/ko/zh (no de/tr). `offline-private` lacks tr. `places-vs-moments` lacks de. No page for "VoyageLog vs Polarsteps", "VoyageLog vs Day One", "is VoyageLog free / safe". No Pro price anywhere in repo (`grep` for currency: no hit) | Medium | Verified | M | Priority adds: DE + TR offline/Google-Timeline articles; a brand facts page per locale (what it is, free vs Pro, privacy, platforms, what it does not do). Pro prices only if the owner supplies them; never estimate |
| 11 | Provenance without citations | Brief bans links and "according to" lines (`docs/blog-brief.md`). Competitor claims are already phrased as "we checked their store pages". `docs/seo-plan.md` §5 still says "1-2 dış bağlantı", which conflicts with the house rule | Medium: GEO research rewards sourced, dated claims. We can add dating without links | Verified (rule conflict); lift is hypothesis | S | Add a dated check line per comparison table ("Checked on the apps' own store pages, October 2026"), with no URL. Add first-party data we own (e.g. "a new entry is a title and one tap"; real feature counts from `en.js`). Update `seo-plan.md` §5 to match the no-link rule |
| 12 | Schema graph is not linked | `blog.mjs:280` `about` = SoftwareApplication with name/url but no `@id` to `https://getvoyagelog.app/#app`. No `Organization` node on home. `offers` is only `price: 0 USD` | Low-Med | Verified | S | Use `about: {"@id": ".../#app"}`, add the Organization node (#4) and an `isAccessibleForFree`-style free + Pro description. Add no `aggregateRating` until real store ratings exist |
| 13 | zh/ko/ja local source markets are unmeasured. Chinese assistants and Naver likely cite domestic platforms (Xiaohongshu, Zhihu, Naver Blog, note.com), and mainland China may not reach Google Play or GitHub Pages reliably | zh best-apps already discusses 小红书. The CTA always shows Google Play (`blog.mjs:231-244`) | Medium for priority markets | Hypothesis | M | Run the ja/ko/zh prompts in section 3 natively (ChatGPT, Gemini, plus Doubao/Kimi/DeepSeek for zh and Naver for ko), classify cited sources, then choose local channels only where they show up. Ask the owner about mainland Android distribution before promising zh Android installs |
| 14 | No way to see AI-driven visits | No analytics in repo (`.agents/product-marketing.md`). CTA UTMs exist for the blog but nothing reads them on site | Medium for measurement | Verified | S | With owner approval, add privacy-respecting analytics that keeps referrers (chatgpt.com, perplexity.ai, copilot, gemini). Track branded search in GSC/Bing as the AI-influence proxy |

## 3. Prompt portfolio v1 (stable core + controls)

Run each prompt 3-5 times per engine. Record mentioned / recommended / cited and the framing. Keep markets separate. "Live?" refers to the page that should win the prompt.

| # | Prompt (as typed) | Lang | Intent family | Page that should win | Live? | Gap |
|---|---|---|---|---|---|---|
| 1 | What's the best travel journal app that doesn't need an account? | en | Best-for / constraint | `/en/blog/offline-travel-journal-app/` + `/en/blog/best-travel-journal-apps/` | Yes | Search run named TraveLog, Triplax, Map Diary, not us (#3) |
| 2 | Polarsteps alternative that doesn't track my location | en | Alternatives | `/en/blog/polarsteps-alternatives/` | Yes | AlternativeTo has no listing for us; vendor pages (Vakantio, TravelFeed) rank |
| 3 | Is there a private travel diary app for iPhone that works offline? | en | Best-for | `/` (home) | Yes | Home body empty without JS (#2) |
| 4 | Journi vs Polarsteps, which one should I use? | en | Comparison | `/en/blog/journi-vs-polarsteps-vs-voyagelog/` | Yes | Comparison exists in EN only |
| 5 | What is VoyageLog and is it free? | en | Brand / price | `/` + proposed facts page | Partly | Name collision; export free/Pro conflict (#4, #6) |
| 6 | Google Maps Timeline alternative that keeps my history on my phone | en | Alternatives | `/en/blog/google-maps-timeline-alternative/` | Yes | No de/tr version |
| 7 | Which app can count the countries I've visited without GPS tracking? | en | Best-for | `/en/blog/countries-visited-tracker/` | Yes | Third-party lists not checked yet |
| 8 | 登録不要でオフラインで使える旅行日記アプリは？ | ja | Best-for | `/ja/blog/offline-travel-journal-app/` | No | Not deployed. Search cited app-liv, smartlog, ameba, aumo |
| 9 | Googleマップのタイムラインの代わりになるアプリは？ | ja | Alternatives | `/ja/blog/google-maps-timeline-alternative/` | No | Not deployed |
| 10 | 회원가입 없이 쓰는 여행 일기 앱 추천해줘 | ko | Best-for | `/ko/blog/best-travel-journal-apps/` | No | Not deployed. Naver sources unmeasured (#13) |
| 11 | 폴라스텝스 대안 앱 뭐가 있어? | ko | Alternatives | `/ko/blog/polarsteps-alternatives/` | No | Not deployed |
| 12 | 有没有不用注册、离线能用的旅行日记App？ | zh | Best-for | `/zh/blog/best-travel-journal-apps/` | No | Not deployed; mainland access hypothesis (#13) |
| 13 | 一生足迹和旅行日记App有什么区别？ | zh | Problem / category | `/zh/blog/best-travel-journal-apps/` | No | Not deployed |
| 14 | Reisetagebuch App ohne Konto und offline? | de | Best-for | `/de/blog/reisetagebuch-app-offline-ohne-konto/` | Yes | Search answer said no such app exists: open slot. Pitch the cited outlets |
| 15 | Polarsteps Alternative ohne Tracking | de | Alternatives | `/de/blog/polarsteps-alternative/` | Yes | Same consensus gap |
| 16 | Hesap açmadan kullanılan seyahat günlüğü uygulaması var mı? | tr | Best-for | `/tr/blog/en-iyi-seyahat-gunlugu-uygulamalari/` | Yes | No TR offline article (key `offline-private` lacks tr) |
| 17 | Polarsteps alternatifi önerir misin? | tr | Alternatives | `/tr/blog/polarsteps-alternatifi/` | Yes | Third-party TR coverage missing (Webrazzi/ShiftDelete idea in `docs/seo-plan.md` §6) |
| C1 | VoyageLog app | en | Control: must appear | `/` | Yes | Currently fails in one backend (#4) |
| C2 | Best hiking route planner app | en | Control: must not appear | none | n/a | If we appear, measurement is broken |

Multi-turn follow-ups to test after #1 and #2: "Which of these keep data only on my phone?", "What do people complain about with VoyageLog?", "Can I move my trips to a new phone?" The last one depends on the #6 fact.

## 4. Draft `llms.txt` (proposal only; not created in `public/`)

Uses only facts from `.agents/product-marketing.md` and `src/locales/en.js`. Before shipping, the owner resolves the export tier (#6) and every URL is checked against the live sitemap. Only list deployed languages.

```markdown
# VoyageLog

> VoyageLog is a private travel journal app for iPhone and Android. Trips, places and moments are stored only on your phone, the app works offline, and there is no account to create. It is for remembering trips, not planning or tracking them.

Not to be confused with sailing or ship logbook apps with similar names. Website: https://getvoyagelog.app

## Key facts
- Platforms: iPhone (App Store id6758159402) and Android (Google Play com.voyagelog.app)
- No account, no sign-up, no social feed, no followers
- Works fully offline; data stays on the device; no server holds trips
- Entries are places (rated) or moments; long trips split city by city
- Search across title, notes, tags and trip; advanced filters are Pro
- Trip map works offline and shows only the places you added (no full base map)
- Backup: JSON or ZIP export and import; the app reminds you every ten trips  [owner: state free vs Pro]
- PDF export of a trip, a city or a best-of list (not a whole-journal PDF, not a photo book)
- Free with a limited number of trips; Pro adds unlimited use, advanced search and exports; yearly subscription or one-time lifetime purchase
- Does not do: automatic route/GPS tracking, live sharing, trip planning (city lists of places you hope to see are the exception)
- Built by an independent solo developer who answers support mail personally

## Main pages
- [Home (English)](https://getvoyagelog.app/): features, privacy, free vs Pro, FAQ
- [Support](https://getvoyagelog.app/support/)
- [Privacy policy](https://getvoyagelog.app/privacy/)

## Guides (English)
- [Best travel journal apps compared](https://getvoyagelog.app/en/blog/best-travel-journal-apps/): 7 apps by account, offline, tracking, data location
- [Polarsteps alternatives](https://getvoyagelog.app/en/blog/polarsteps-alternatives/): private, manual options
- [Journi vs Polarsteps vs VoyageLog](https://getvoyagelog.app/en/blog/journi-vs-polarsteps-vs-voyagelog/)
- [Offline travel journal app with no account](https://getvoyagelog.app/en/blog/offline-travel-journal-app/)
- [Google Maps Timeline alternative](https://getvoyagelog.app/en/blog/google-maps-timeline-alternative/)
- [Countries visited tracker](https://getvoyagelog.app/en/blog/countries-visited-tracker/)
- [Print a travel journal as PDF](https://getvoyagelog.app/en/blog/print-travel-journal-pdf/)
- [How to keep a travel journal](https://getvoyagelog.app/en/blog/how-to-keep-a-travel-journal/)

## Other languages
- Deutsch: https://getvoyagelog.app/de/ (blog: /de/blog/)
- Türkçe: https://getvoyagelog.app/tr/ (blog: /tr/blog/)
- 日本語 / 한국어 / 简体中文 and others: add /ja/, /ko/, /zh/ ... once deployed

## Optional
- [RSS (English blog)](https://getvoyagelog.app/en/blog/feed.xml)
- [Sitemap](https://getvoyagelog.app/sitemap.xml)
```

## 5. Suggested order

1. **This week:**
   - Resolve the export fact (#6).
   - Add `entity.definition` and render it in the home fallback and article box (#5).
   - Add `llms.txt` and an explicit robots policy (#7).
   - Bing Webmaster Tools and IndexNow (#4).
2. **Next deploy:** static home content (#2), then staged ja/ko/zh deploy with real dates (#1).
3. **Ongoing:**
   - AlternativeTo, Product Hunt and outreach to the outlets cited in the DE/JA answers (#3).
   - About page and named author (#9).
   - Run the prompt portfolio monthly; version it here.
