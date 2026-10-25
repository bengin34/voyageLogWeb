# Content strategy, keyword clusters, competitor pages, pSEO and free tools

_Audit date: 2026-10-24. Dimension: content strategy. Read-only review; this file is the only output. No traffic, ranking or volume data exists in the repo, so every demand claim below is "to verify in GSC/Keyword Planner" (Naver Search Advisor for ko, Baidu/Xiaohongshu checks for zh)._

Skills applied: `.agents/skills/content-strategy`, `programmatic-seo` (+ `references/playbooks.md`), `competitors` (+ `references/content-architecture.md`), `free-tools`. Context: `.agents/product-marketing.md`, `docs/seo-plan.md`, `docs/blog-brief.md`, `docs/editorial/*.md`, `src/locales/en.js`.

## 1. Summary

- **111 articles, 12 topic keys, 14 languages.** Only 5 keys exist in all 14 languages (best-apps, countries-visited, how-to-journal, polarsteps-alternative, print-pdf). Four keys exist in 1 to 4 languages. The language desks only write what `docs/blog-brief.md` lists, and that table omits `christmas-markets` and `journi-vs-polarsteps` and has a single `seasonal` slot.
- **One cluster from `docs/seo-plan.md` §3 has zero articles:** "year in travel" (cluster 5, half of it). The app's Year in Travel feature is mentioned in 41 articles, but no article targets a year-in-review query. The window for that intent is December to mid-January, so it is the most time-critical gap.
- **Competitor coverage is plural-only.** Every language has "Polarsteps alternatives" (plural format) and EN has one three-way comparison. There are no singular or head-to-head pages for Day One (223 mentions across articles), FindPenguins (205) or Journi (140), and none for the local competitors that the ja/ko/zh desks already fact-checked (経県値, 旅行思い出マップ, notabi, 디로그, 포토로그, 一生足迹, 世界迷雾, 灵敢足迹). The verified facts already sit in `docs/editorial/{ja,ko,zh}.md`, so these pages are cheap to build honestly.
- **Seasonal = 2 events, and the honest tie-in is limited to them.** The app ships ready-made city lists only for Christmas markets and cherry blossom season (`src/locales/en.js:75`). New seasonal pages beyond these two should be paired with a new in-app ready-made list, otherwise the CTA is weak.
- **Missing intent types:** templates/printables, paper notebook hybrids (ja 旅ノート, zh 旅行手账), personas (kids/family, couples, long stays), year-in-review. EN already has mild cannibalization around "travel journal ideas" and "what to write in a travel journal".
- **Internal linking is cluster-blind.** The "more articles" block is the first 4 other posts by date (`scripts/blog.mjs:359-363`); all posts share two dates, so every article links to the same arbitrary set. There is no hub.
- **Programmatic SEO: mostly no.** Per-city checklists and country pages fail the skill's unique-value bar for a zero-authority domain. The scalable lever that does pass is the "Translations" playbook (fill missing keys in existing languages) plus a small, data-file-driven set of competitor pages.
- **Free tool: build one.** A private, no-sign-up "countries visited map" generator scores highest (32/40) and fits the product's privacy positioning; a localized printable journal template is second (29/40).
- **WebSearch worked but is US-region only.** ja/ko/zh results are therefore indicative, not the local Google/Naver/Baidu SERP. In all three, results for the head query were App Store listings and app aggregators (mwm.ai, app-liv.jp, choice.ameba.jp), not strong editorial pages, which supports the existing priority on these markets.

## 2. Current inventory and coverage

Inventory command (scratchpad script, reads frontmatter with the repo's `gray-matter`): `node <scratchpad>/inv.mjs` and `node <scratchpad>/inv.mjs matrix`. Lengths: Latin/Arabic in words, ja/ko/zh in non-space characters.

### 2a. Key x language matrix (x = exists)

| key (seo-plan §3 cluster) | en | de | tr | es | fr | it | pt | nl | pl | ru | ar | ja | ko | zh | n |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| best-apps (2) | x | x | x | x | x | x | x | x | x | x | x | x | x | x | 14 |
| polarsteps-alternative (1) | x | x | x | x | x | x | x | x | x | x | x | x | x | x | 14 |
| journi-vs-polarsteps (1) | x | . | . | . | . | . | . | . | . | . | . | . | . | . | 1 |
| offline-private (3) | x | x | . | x | x | x | x | x | x | x | x | x | x | x | 13 |
| how-to-journal (4) | x | x | x | x | x | x | x | x | x | x | x | x | x | x | 14 |
| prompts (4) | x | . | . | . | . | . | . | . | . | . | . | x | x | x | 4 |
| places-vs-moments (4) | x | . | x | x | x | x | x | x | x | x | x | x | x | x | 13 |
| countries-visited (5) | x | x | x | x | x | x | x | x | x | x | x | x | x | x | 14 |
| year-in-review (5) | . | . | . | . | . | . | . | . | . | . | . | . | . | . | 0 |
| print-pdf (6) | x | x | x | x | x | x | x | x | x | x | x | x | x | x | 14 |
| christmas-markets (7) | x | x | x | . | . | . | . | . | . | . | . | . | . | . | 3 |
| seasonal = cherry blossom (7) | . | . | . | . | . | . | . | . | . | . | . | x | x | x | 3 |
| google-timeline (8) | x | . | . | . | . | . | . | . | . | . | . | x | x | x | 4 |
| **articles** | 11 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 7 | 10 | 10 | 10 | 111 |

### 2b. Priority markets: per-article detail (primary query from `docs/editorial/<lang>.md`)

| lang | key | title | primary query | length |
|---|---|---|---|---|
| ja | best-apps | 旅行記録アプリおすすめ7選：旅行日記派と地図派で比べる | 旅行記録アプリおすすめ | 5372 |
| ja | polarsteps-alternative | Polarstepsの代わりになるアプリ6選 | Polarstepsの代わりになるアプリ | 4671 |
| ja | offline-private | オフラインで使える旅行日記アプリ | オフラインで使える旅行日記アプリ | 3919 |
| ja | how-to-journal | 旅行日記の書き方 | 旅行日記の書き方 | 4279 |
| ja | prompts | 旅行日記に書くことが思いつかない人へ | 旅行日記に書くことが思いつかない | 3985 |
| ja | places-vs-moments | 旅のメモの整理法 | 旅のメモの整理法 | 4919 |
| ja | countries-visited | 行った国の数え方 | 行った国の数え方 | 4220 |
| ja | print-pdf | 旅行日記をPDF・フォトブックにする方法 | 同 | 4451 |
| ja | google-timeline | Googleマップのタイムラインの代わりに | Googleマップのタイムラインの代わり | 4148 |
| ja | seasonal | 桜の名所チェックリスト | 桜の名所チェックリスト | 4474 |
| ko | best-apps | 여행 기록 앱 추천 2026 | 여행 기록 앱 추천 | 4021 |
| ko | polarsteps-alternative | 폴라스텝스 대안 | 폴라스텝스 대안 | 3206 |
| ko | offline-private | 오프라인 여행 일기 앱 | 오프라인 여행 일기 앱 | 3345 |
| ko | how-to-journal | 여행 일기 쓰는 법 | 여행 일기 쓰는 법 | 4346 |
| ko | prompts | 여행 일기 질문 40개 | 여행 일기 질문 | 4276 |
| ko | places-vs-moments | 여행 기록 정리법 | 여행 기록 정리법 | 4637 |
| ko | countries-visited | 가본 나라 세는 법 | 가본 나라 세는 법 | 4632 |
| ko | print-pdf | 여행 일기 PDF와 포토북으로 만드는 법 | 여행 일기 PDF | 3647 |
| ko | google-timeline | 구글 지도 타임라인 대체 | 구글 지도 타임라인 대체 | 3162 |
| ko | seasonal | 벚꽃 명소 체크리스트 | 벚꽃 명소 체크리스트 | 3249 |
| zh | best-apps | 旅行日记 App 推荐 | 旅行日记 App 推荐 | 3710 |
| zh | polarsteps-alternative | Polarsteps 替代 | Polarsteps 替代 | 3188 |
| zh | offline-private | 不用注册、离线可用的旅行日记 App | 同 | 2990 |
| zh | how-to-journal | 旅行日记怎么写 | 旅行日记怎么写 | 4021 |
| zh | prompts | 旅行日记写什么 | 旅行日记写什么 | 3634 |
| zh | places-vs-moments | 旅行笔记整理方法 | 旅行笔记整理方法 | 4540 |
| zh | countries-visited | 去过的国家怎么算 | 去过的国家怎么算 | 4387 |
| zh | print-pdf | 旅行日记导出 PDF | 旅行日记导出 PDF | 3293 |
| zh | google-timeline | 记录去过的地方 | 记录去过的地方 | 2861 |
| zh | seasonal | 赏樱地点清单 | 赏樱地点清单 | 3056 |

Other languages: EN 1770-2547 words, DE/TR 1421-2280, es/fr/it/pt/nl/pl/ru 1341-1773 (floor 1300), ar 1152-1221 (floor 1100). Full list is reproducible with the script; titles match the matrix keys.

## 3. Evidence table of gaps

| # | Finding | Evidence | Impact | Confidence | Effort | Proposed change |
|---|---|---|---|---|---|---|
| G1 | Year-in-review intent has no article in any language, although the app has Year in Travel and seo-plan lists "year in travel" in cluster 5 | matrix above; `src/locales/en.js:74`; `grep -l -i "Year in Travel" content/blog/*/*.md` = 41 files; `docs/seo-plan.md` §3 row 5 | High (seasonal peak Dec-Jan, strong feature tie, shareable card) | High that the gap exists; demand to verify | M per language | New key `year-in-review`; ship ja/ko/zh/en first by early December, then de/tr |
| G2 | Coverage of existing keys is uneven; desks only write what the brief lists | matrix; `docs/blog-brief.md` topic table lists 10 keys, no `christmas-markets`, no `journi-vs-polarsteps`; `docs/seo-plan.md` §8 item 3b already lists missing de/tr pieces | Medium-High (cheapest new pages: brief, structure and facts already exist) | High | S-M each | Add missing keys to the brief; fill tr offline-private, de places-vs-moments, de/tr prompts and google-timeline, prompts in es/fr/it/pt/nl/pl/ru/ar |
| G3 | No singular "X alternative" or "you vs X" pages; Day One, FindPenguins and Journi only appear inside list articles | `grep -o -h -E "(Day One\|FindPenguins\|Journi)" content/blog/*/*.md \| sort \| uniq -c` = 223 / 205 / 140; only `en/journi-vs-polarsteps-vs-voyagelog.md` is head-to-head | High (consideration-stage intent closest to install) | Medium (volumes unverified; Day One has a large user base) | M | EN first: "Day One vs Polarsteps for travel" (WebSearch found no head-to-head page), FindPenguins alternatives, Day One for travel journaling; then localize where the competitor is known |
| G4 | Local competitors in ja/ko/zh are verified but have no dedicated pages | `docs/editorial/ja.md:19-21` (経県値, 旅行思い出マップ, notabi), `docs/editorial/ko.md:37-38` (디로그 needs login and cloud; 포토로그 no update since 2021), `docs/editorial/zh.md:36-38` (一生足迹, 世界迷雾, 灵敢足迹) | Medium-High in priority markets | Medium (brand query volume for small local apps may be tiny: verify) | S-M (facts already checked; re-verify on publish day) | zh: competitor-vs-competitor "一生足迹 / 世界迷雾 怎么选" with VoyageLog as the manual third option; ko: "포토로그 대안" (stale app, users searching for a replacement) and/or "디로그 대안"; ja: "Polarsteps 日本語" style page (verified: no Japanese UI in the JP store) |
| G5 | Polarsteps lacks the local UI language in ja/ko/zh stores; no page answers "is Polarsteps in Japanese/Korean/Chinese" | `docs/editorial/ja.md:23`, `ko.md:35`, `zh.md:40` (13 languages, none of ja/ko/zh) | Medium | Medium (question-type query; verify demand) | S | Short, factual pages per market: "Polarsteps 日本語", "폴라스텝스 한국어", "Polarsteps 中文"; link to the existing alternatives page |
| G6 | Seasonal coverage is 2 events, split by market; no EN cherry-blossom page and no ja/ko/zh Christmas page | matrix; `key: seasonal` in `content/blog/ja/cherry-blossom-spots-checklist.md:7`; ready-made lists only for these two events (`src/locales/en.js:75`) | Medium | High | M | EN cherry-blossom checklist by early February; ja Christmas-market checklist (domestic plus Europe) only if it ships by about Nov 6, else schedule for Sept 2027; future seasons only together with a new in-app ready-made list |
| G7 | The cherry-blossom group has no EN sibling, so each sibling's x-default points to itself (inconsistent hreflang x-default) | `scripts/blog.mjs:121-126` (fallback = EN sibling or the post itself) | Low-Medium | High | S | Adding the EN page (G6) fixes it; rename key `seasonal` to `cherry-blossom` before adding other seasonal keys (key only drives hreflang, URLs unchanged: `scripts/blog.mjs:103-117`) |
| G8 | No template / printable intent anywhere | no article or page; WebSearch "printable travel journal template free": top results were parasite pages on unrelated .edu/.gov hosts; ko "여행 일기 템플릿 양식": few Korean free files found; zh "旅行手账 模板": mostly title lists | Medium-High (implementation-stage intent, linkable) | Medium | M (one design, localized) | Free printable template page per language (see §5 tool C) plus ja 旅ノート, zh 旅行手账, ko 여행 일기 양식 articles |
| G9 | Persona intents only as H2s: kids/family is one H2 in EN prompts; couples, honeymoon, long stays (working holiday, study abroad) absent | `content/blog/en/travel-journal-prompts.md:125`; no other matches | Medium | Medium (demand to verify per market) | M | One persona page per priority market: ko couples (커플 여행 기록), zh family (亲子旅行日记), ja long stays (ワーホリ・留学の記録, city by city fits the product) |
| G10 | EN cannibalization: "travel journal ideas" in places-vs-moments title and H2s in how-to and prompts; "what to write in a travel journal" H2 in both how-to and prompts | `en/places-vs-moments-travel-notes.md:2,33`, `en/how-to-keep-a-travel-journal.md:82,114`, `en/travel-journal-prompts.md:23,53` | Medium | Medium (confirm in GSC which URL Google picks) | S | Assign one owner per query: prompts owns "ideas" and "what to write"; how-to owns "how to keep"; retitle places-vs-moments to "travel notes system"; change the duplicated H2s |
| G11 | No hub pages and cluster-blind related links | `scripts/blog.mjs:359-363` ("more" = first 4 other posts by date); blog index is a flat date list (`scripts/blog.mjs:401-440`); no `cluster` frontmatter | Medium (spreads authority evenly instead of into pillars) | High | S-M | Add `cluster` frontmatter and pick related posts from the same cluster; make best-apps the "apps" hub and how-to-journal the "journaling" hub with links to every spoke; optional compare hub listing all alternative/vs pages |
| G12 | Conflicting guidance on external links | `docs/seo-plan.md` §5 ("1-2 dış bağlantı") and §8 item 3 vs house rule in `docs/blog-brief.md` (no external links); `scripts/check-blog.mjs:73` reports external count | Low | High | S | Update seo-plan §5/§8 to match the house rule so future agents stop adding links |
| G13 | zh targets Simplified Chinese and China-store competitors, while Google zh traffic skews to users outside the mainland | `docs/editorial/zh.md` (China App Store facts, "Google 登录在国内基本用不上") | Unknown | Low (hypothesis) | - | Check GSC country split for /zh/ after 8 weeks before adding zh pages beyond the backlog; decide on Baidu submission or a zh-Hant variant then |
| G14 | No free tool or linkable asset; link-earning formats (tools, stats pages) unused | site has only home, blog and legal routes (`scripts/postbuild.mjs:189-205`); live search demo proves client-side interactivity already works (`src/locales/en.js:93`) | High for authority (new domain, no links) | Medium | M-L | Build tool A in §5 first |

## 4. Prioritized 12-week content backlog (W1 = week of 2026-10-26)

Order = time sensitivity, then fit to product, then cost. "Why now" explains the slot. Demand for every query: to verify in GSC/Keyword Planner (ko: Naver keyword tool).

| # | Wk | Lang | Working title | Target query | Intent | Cluster | Why now |
|---|---|---|---|---|---|---|---|
| 0 | W1 | all | (infra) add keys `year-in-review`, `christmas-markets`, `journi-vs-polarsteps`, `cherry-blossom` to the brief; `cluster` frontmatter + cluster-aware related links | - | - | all | Unblocks every desk and G11; S effort |
| 1 | W1 | ja | 一年の旅を振り返る：旅行記録のまとめ方と見返し方 | 旅行 振り返り | how-to | 5 year | Needs ~6 weeks to index before the December peak |
| 2 | W1 | ko | 올해 여행 결산: 1년 여행 기록 정리하는 법 | 여행 결산 | how-to | 5 year | Same; 결산 is the year-end framing |
| 3 | W1 | zh | 年度旅行总结怎么写：把一年的旅行整理成一页 | 年度旅行总结 | how-to | 5 year | Same |
| 4 | W2 | en | Travel year in review: how to look back on a year of trips | travel year in review | how-to | 5 year | Same; WebSearch shows only personal blog recaps, no method page |
| 5 | W2 | ja | クリスマスマーケット チェックリスト：国内と欧州 | クリスマスマーケット 一覧 | seasonal checklist | 7 | Ties to the in-app ready-made list; ship by ~Nov 6 or move to Sept 2027; WebSearch found no full domestic list |
| 6 | W2 | ja | Polarstepsは日本語で使える？表示言語と代わりのアプリ | Polarsteps 日本語 | question/alt | 1 | Verified fact in `docs/editorial/ja.md:23`; small, quick |
| 7 | W2 | ko | 폴라스텝스 한국어 지원될까: 설정과 대안 | 폴라스텝스 한국어 | question/alt | 1 | Verified in `docs/editorial/ko.md:35`; quick |
| 8 | W3 | zh | 一生足迹、世界迷雾、灵敢足迹怎么选：足迹 App 对比 | 一生足迹 世界迷雾 | A vs B (+us) | 1 | Facts verified in `docs/editorial/zh.md:36-38`; note 一生足迹 and 世界迷雾 also need no account, so the honest difference is manual journal vs auto-tracking; WebSearch found no direct comparison |
| 9 | W3 | en | Day One vs Polarsteps for travel: journal or tracker? | day one vs polarsteps | A vs B (+us) | 1 | WebSearch found no head-to-head page; both competitors heavily referenced already |
| 10 | W3 | de | Jahresrückblick Reisen: das Reisejahr festhalten | Reise Jahresrückblick | how-to | 5 year | DE payers; same seasonal window |
| 11 | W3 | tr | Yılın gezi özeti: bir yılın gezilerini toparlamak | yıllık gezi özeti | how-to | 5 year | TR SERPs rank fastest (seo-plan §0) |
| 12 | W4 | ko | 포토로그 대안: 업데이트 멈춘 앱에서 기록 옮기기 | 포토로그 대안 | alternative (singular) | 1 | 포토로그 last updated 2021 (`docs/editorial/ko.md:38`); switch intent |
| 13 | W4 | en | Free printable travel journal template (place and moment pages) | printable travel journal template | template | 4 | Pairs with tool C; SERP full of parasite pages |
| 14 | W4 | tr | Hesapsız ve internetsiz gezi günlüğü uygulaması | internetsiz gezi günlüğü | offline/privacy | 3 | Listed missing in seo-plan §8 3b; brief exists |
| 15 | W5 | ko | 여행 일기 양식 무료 PDF: 장소와 순간으로 나눈 한 장 | 여행 일기 양식 | template | 4 | Few Korean free files observed |
| 16 | W5 | zh | 旅行手账怎么做：模板、排版和手机记录配合 | 旅行手账 模板 | template / paper | 4 | Strong notebook culture; WebSearch: mostly title lists, few steps |
| 17 | W5 | ja | 旅ノートの書き方：紙とアプリの使い分け | 旅ノート 書き方 | how-to / paper | 4 | Distinct from 旅行日記の書き方 by format; avoids cannibalization |
| 18 | W6 | en | FindPenguins alternatives for private, manual trips | findpenguins alternative | alternatives (plural) | 1 | 205 mentions already, facts reusable from ja/en editorial notes |
| 19 | W6 | de | Reisetagebuch schreiben: 50 Fragen und Ideen | Reisetagebuch Ideen | prompts | 4 | seo-plan §8 3b; EN/ja/ko/zh versions exist |
| 20 | W6 | de | Google Zeitachse Alternative: eigene Reisehistorie behalten | Google Zeitachse Alternative | migration | 8 | Named in seo-plan §3 row 8; EN/ja/ko/zh exist |
| 21 | W7 | ko | 커플 여행 기록: 둘이 쓰는 여행 일기 정리법 | 커플 여행 기록 | persona | 4 | Persona gap (G9); be honest: no shared/co-editing in VoyageLog |
| 22 | W7 | zh | 亲子旅行日记怎么写：孩子也能记的方法 | 亲子旅行日记 | persona | 4 | Winter/spring break planning; G9 |
| 23 | W8 | ja | ワーホリ・留学の記録：都市ごとに分けて残す | ワーホリ 記録 アプリ | persona | 4 | City-by-city split is a verified feature |
| 24 | W8 | en | Cherry blossom in Japan: a checklist of spots to tick off | cherry blossom spots japan | seasonal checklist | 7 | Fixes G7; must be indexed by February for the March-April season |
| 25 | W9 | es/fr/it/pt/nl/pl/ru/ar | travel-journal-prompts localized (8 pages) | e.g. "qué escribir en un diario de viaje" | prompts | 4 | Cheapest coverage gain; one desk per language as in memory prefs |
| 26 | W10 | tr | Seyahat günlüğüne ne yazılır: 50 soru | gezi günlüğüne ne yazılır | prompts | 4 | seo-plan §8 3b |
| 27 | W10 | en | Day One for travel journaling: what it does well and where it stops | day one travel journal | single competitor | 1 | Consideration intent for a large competitor; verify Day One facts on publish day |
| 28 | W11 | ja/ko/zh | Cherry-blossom pages: 2027 refresh (updated date, re-verify spots) | existing queries | seasonal | 7 | Refresh before the season; `updated` must change only with real edits |
| 29 | W12 | all | GSC review: retitle/merge pages ranking 4-30; resolve G10 by data | - | maintenance | all | First 8 weeks of data after GSC setup |

Out of the 12-week window but scheduled: Christmas markets for fr/nl/pl/it/es and ja (Sept 2027), autumn leaves (ja 紅葉, ko 단풍) only if an in-app ready-made list is added (WebSearch: weathernews dominates 紅葉 SERPs).

## 5. Programmatic SEO and free-tool verdicts

### 5a. Programmatic ideas against the skill's quality bar (unique value per page, proprietary data, intent match, no doorway pages)

| Idea | Playbook | Data source | SERP reality | Verdict |
|---|---|---|---|---|
| Per-city "places to remember / checklist" pages (Prague, Rome, ... x 14 languages) | Locations + Curation | Public only; no user data (all data stays on device, so no product-derived data is possible) | Destination SERPs owned by TripAdvisor, Lonely Planet, big media (seo-plan §0 already rejects them) | **No.** Swapped city names = thin doorway pages on a zero-authority domain. Keep city content to hand-written seasonal lists that mirror in-app ready-made lists |
| Country pages ("how many countries in Europe", "does Hong Kong count as a country") | Glossary | Public lists (UN members, travel club lists; must be verified) | Head terms owned by reference sites; the counting-rules long tail is real (ko article already handles 괌/홍콩) | **Not as pages.** Fold the rules into the countries-visited articles and the map tool (a rules toggle). Revisit only if GSC shows country-specific queries |
| Competitor pages from one data file | Comparisons | Competitor YAML per `competitors/references/content-architecture.md`, facts already verified in `docs/editorial/*.md` | Thin competition in ja/ko/zh observed | **Yes, small.** Data file + about 5 pages per priority language. Not combinatorial: every claim needs a dated check per market |
| Missing keys in existing languages | Translations | Existing briefs and desks | n/a | **Yes, this is the real scale lever** (backlog #14, 19, 20, 25, 26). Localize, do not translate (`docs/blog-brief.md`) |
| Prompts by trip type (road trip, honeymoon, kids) | Personas | Editorial | Medium blogs | **Maybe, 3-4 hand-written pages**, only where a persona query shows in GSC |
| Seasonal city lists (Christmas markets, cherry blossom, next ones) | Curation + Locations | Mirrors the app's ready-made lists (product-derived) | Big media on generic terms; "checklist" angle is thinner | **Yes, manually, one per season per market**, gated on an in-app list existing |

### 5b. Free tools (scorecard from `free-tools` skill, 1-5 each, max 40; scores are judgment, demand to verify)

| Tool | Demand | Audience | Unique | Path to app | Build | Maint. | Links | Share | Total |
|---|---|---|---|---|---|---|---|---|---|
| A. Countries-visited map generator | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 5 | **32** |
| C. Printable travel journal template (14 languages) | 4 | 4 | 3 | 3 | 4 | 5 | 3 | 3 | **29** |
| D. Year in Travel card maker | 2 | 4 | 3 | 4 | 3 | 4 | 2 | 4 | 26 |
| B. Travel days calculator | 3 | 3 | 2 | 3 | 5 | 4 | 2 | 2 | 24 |

**A. Countries-visited map generator (build first).** Tap countries or tick a list, see the count and share a PNG. Stored only in the browser, no sign-up: the same promise as the app. WebSearch "countries visited map generator free" shows existing web tools (fla-shop.com, douwe.com) and several apps, so demand is real and the angle is privacy plus 14 languages incl. ja/ko/zh. Build in this repo: copy the `scripts/blog.mjs` pattern (static HTML strings, no React) into a `scripts/tools.mjs` called from `scripts/postbuild.mjs`, emitting `/<lang>/tools/countries-map/` with hreflang and sitemap entries; pre-render country SVG paths at build time from Natural Earth based world-atlas data with d3-geo (build-time dependency only), a small vanilla JS file for clicks, count and canvas PNG export; country names from `Intl.DisplayNames` so no name translation is needed; UI strings go in the 14 locale files (validated by `scripts/check-locales.mjs`). Estimate 3-5 days. **Risk:** disputed borders and territories (Taiwan, Kosovo, Western Sahara, small island disputes) are sensitive in zh/ko/ja; choose the base map and the "counts as a country" list deliberately and say which list it follows. Pair with the countries-visited articles in every language.

**C. Printable template.** One A4/Letter page for places (rating, note) and one for moments, plus a trip cover page, as a print-styled HTML page (browser print to PDF) in 14 languages. Low maintenance, supports backlog #13, 15, 16, 17. Estimate 1-2 days for the first design; CJK versions need a layout check. Honest CTA: paper for the trip, the app to search it later.

**D. Year in Travel card maker.** Seasonal (December to January) and close to an in-app feature; could become a "2026" mode inside tool A instead of a separate build.

**B. Travel days calculator.** Easy to build, but the high-volume variant is Schengen 90/180, which is a compliance intent with legal risk and an official EU calculator; the general "days abroad" variant has weak link potential. Do not build now.

## Open questions for the owner
- GSC and Naver/Bing verification status; country split for /ja/, /ko/, /zh/ once data exists.
- Will future app updates add ready-made city lists for other seasons? Seasonal content should follow them.
- OK to publish competitor-vs-competitor pages naming small local apps (ko 포토로그, zh 一生足迹)? Facts must be re-verified on publish day.
