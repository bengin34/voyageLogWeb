# Conversion and ASO findings: VoyageLog

_Audit date: 2026-10-24. Scope: site visitor → store click → install, plus the App Store (id6758159402) and Google Play (com.voyagelog.app) listings. Skills used: `.agents/skills/cro`, `.agents/skills/aso`. Read-only; nothing deployed, no tracking added._

**Data caveat.** There is no site analytics, App Store Connect or Play Console data in the repo, so this report has no conversion rates, install counts or keyword volumes. Store data comes from public pages fetched on 2026-10-24:
- iTunes Lookup API: `https://itunes.apple.com/lookup?id=6758159402&country={us,jp,kr,cn,de,tr}`, plus `&lang=tr_tr`.
- App Store pages via WebFetch: `apps.apple.com/{us,jp,kr,cn,de}/app/id6758159402` and `apps.apple.com/tr/app/id6758159402?l=tr`.
- Google Play HTML via curl: `play.google.com/store/apps/details?id=com.voyagelog.app&hl={en_US,de,tr,ja,ko,zh_CN}&gl=US`.
- Site measurements: `npx vite preview --port 4317` on the fresh `dist/`, read in Chrome inside 390x844 iframes. The server was stopped afterwards.

## 1. Summary

- **What works on the site:** the hero is clear in every sampled locale (en, de, ja, ko, zh, tr). The H1 is followed by a lead that names the category and the three differentiators: private, no account, offline. At 390x844 both store links sit above the fold (en: App Store at 447px, Play at 517px; ja: 517/587px). The site makes no rating claims, which is correct.
- **The biggest problems are on the store side and in measurement, not in the hero copy:**
  - Several store subtitles promise "Routes", which the product does not do.
  - The Japanese first screenshot shows a loading spinner.
  - Two Google Play titles are broken.
  - Both stores send their "developer website" traffic to `qrodesk.com/voyagelog/`, not to getvoyagelog.app.
  - None of the site's store links carry tokens that App Store Connect can attribute. With no analytics on the site, store tokens are the only way to measure blog→install, and today that measurement does not work.
- **Mobile:** the App Store is the filled button for everyone, Android visitors included. There is no Smart App Banner. On phones, the home page has no store link between the hero and the final CTA (about 11,000px). Blog articles show their first CTA 4,360 to 6,179px down.
- **ASO score:** the US App Store listing scores **53/100 (C)**, Challenger tier. Ratings are the weakest dimension: no displayable rating in US, JP, KR or CN. Google Play was only partly scorable (see section 4).

## 2. Evidence table (ranked by impact × confidence ÷ effort)

| # | Finding | Evidence | Impact | Confidence | Effort | Proposed change |
|---|---|---|---|---|---|---|
| 1 | The store subtitles promise routes, but the product has no route tracking. | Subtitles: EN "Trip Map, Routes & Memories", KR "여행 기록, 지도 & 루트", CN "地图、路线与回忆", TR "Günlük, Rota & Gezi Notları" (App Store pages above). `.agents/product-marketing.md` says the honest trade-off is "no route tracking". | High: users who want routes will be disappointed, which risks reviews and refunds. Apple 2.3.1 risk (misleading marketing). | High | <1h per locale, ships with the next metadata update | Remove "Routes/루트/路线/Rota" from all subtitles. See section 4 for replacements. |
| 2 | The first Japanese App Store screenshot shows a loading spinner instead of the map. | First iPhone screenshot in `lookup?country=jp` ("01_world"): headline 「行った場所すべて。」 over a blank screen with a spinner. The US/DE/KR/CN/TR versions show a rendered map. | High: Japan is a priority market, and the first screenshot shows in search results. | High | <1h (re-capture and upload) | Re-render the JA world-map screenshot. Then check the first three screenshots in all 16 localizations. |
| 3 | Store links carry no tokens that App Store Connect can attribute, so blog→install cannot be measured. | Home: `src/App.jsx:161-171,392-397` uses bare `APP_STORE_URL`/`GOOGLE_PLAY_URL` (`src/content.js:3-4`). Blog: `scripts/blog.mjs:233` appends `utm_source/utm_medium/utm_campaign`, which App Store Connect ignores (it needs `pt`+`ct`, ct ≤30 chars per developer.apple.com "Manage campaigns"). DE slug `reisetagebuch-app-offline-ohne-konto` is 36 chars. ja/ko/zh/… use the same EN slugs: each campaign appears 24× in `dist` (12 locales × 2 CTAs), so language and CTA position cannot be told apart. | High: every other decision in this report depends on it. | High (Apple), Medium (Play) | 2-3h | Generate a provider token in App Store Connect (Analytics > Campaigns). Build App Store links as `?pt=<token>&ct=<code>&mt=8`, with a short `ct` such as `b-en-bestapps-mid` or `web-ja-hero` (≤30 chars). For Play, use the documented `&referrer=utm_source%3Dsite%26utm_campaign%3D<code>` form (URL-encoded, ≤512 chars), then confirm it shows in Play Console's acquisition reports. These are link parameters only, not tracking scripts. |
| 4 | Both stores' "developer website" points to `https://qrodesk.com/voyagelog/`, not getvoyagelog.app. | Lookup `sellerUrl`. Play page "Website https://qrodesk.com/voyagelog/". `curl` on that page returns its own page ("VoyageLog - Your private travel history") that links to the App Store and not to getvoyagelog.app. `docs/seo-plan.md` §6.2 planned store→site links. | Medium-High: lost referral visits and links, and two competing VoyageLog sites. | High | <30 min | Set the Marketing URL / Support URL (ASC) and Website (Play) to `https://getvoyagelog.app/`. 301 `qrodesk.com/voyagelog/` to it. Keep the privacy URL wherever the stores need it. |
| 5 | Google Play titles are broken in DE and zh-CN and inconsistent in EN. | `og:title` from Play HTML: DE "Reisetagebuch: Reisetagebuch" (brand missing, word repeated). zh_CN "航海日志：旅行日记" (brand replaced by "nautical logbook"). EN "VoyageLog: Trip Journal" vs App Store "VoyageLog: Travel Journal". | High for DE (top paying market; brand searches miss). Medium for zh. | High | <30 min | DE → "VoyageLog: Reisetagebuch" (24). zh-CN → "VoyageLog：旅行日记" (14). Keep EN as a deliberate keyword split or align it, and decide on purpose. |
| 6 | Google Play short descriptions are underused and leave out the differentiators. | DE "Organisieren Sie Ihre Reiseerinnerungen." 40/80 chars, in *Sie* form (site and App Store use *du*). JA 32, KO 59, ZH 25, TR 64, EN 80/80. None says no account or offline. | Medium: the short description is indexed and visible above the fold. | High | <1h | Use the proposals in section 4. No "free", "best" or "no ads" (Play policy). |
| 7 | The language claim is inconsistent. | Site: "more than thirty languages" (`src/locales/en.js:132`, same in de/ja/ko/zh/tr), plus 32 names incl. Hebrew, Hindi and Thai (`src/content.js:7-8`). Every storefront lists **16** (AR CS NL EN FR DE IT JA KO PL PT RU ZH ES SV TR; no Hebrew), CN included. | Medium: a visitor checking the store sees half the claim. Credibility risk. | High that they differ; unknown which side is right | <1h | Owner to verify. If the app really ships 32 in-app languages, declare all of them in the binary (CFBundleLocalizations/lproj) so the App Store lists them. Otherwise change the site copy to the real number in all 14 locale files. |
| 8 | The mobile CTA is iOS-first for everyone, with no OS detection and no Smart App Banner. | `StoreLinks` (`src/App.jsx:161-171`) shows the App Store as `.btn` and Play as `.text-link` for every visitor. `grep apple-itunes-app` in `index.html`, `dist/`, `scripts/` and live `getvoyagelog.app/` finds 0 matches. | Medium-High: Android visitors get the weaker, secondary path. iOS Safari users get no native install banner. | Medium (direction clear, size unknown) | 2-4h | Add a small inline user-agent check: on iOS or Android, show the matching store as the single primary button and the other as a small link; desktop unchanged. Add `<meta name="apple-itunes-app" content="app-id=6758159402">` to home and blog heads, with campaign data per Apple's Smart Banner docs once a provider token exists. Test it (E1). |
| 9 | Long stretches without a CTA on phones. | 390x844 measurement. Home: store links at about 447px and then about 11,259px (en). The sticky `.stage-bar` store links are hidden ≤900px (`src/styles.css:1061`). Blog: first `.cta` at 4,360px (en best-apps), 6,179px (ja best-apps), 4,857px (tr), 6,129px (de polarsteps). No store link in the blog header. | Medium | High | 1-3h | Add a slim CTA after the chapters on home. On blog articles, add a one-line contextual CTA after the intro, or a slim sticky bottom bar on mobile only. Test it (E2). |
| 10 | Real trust signals exist but the site does not use them. | App Store privacy label "Data Not Collected" (US page). Play data safety "No data collected / No data shared with third parties". DE 5.0 (7 ratings), TR 5.0 (14), with real review titles e.g. "Perfekt für Vielreisende. 100% Privat". The site has no rating or label mention (grep `src/locales/en.js`). | Medium | High (signals are real) | <1h | Near the final CTA, add "App Store privacy label: Data Not Collected" (verifiable, all locales). Do **not** add `aggregateRating` or star counts yet: 7-14 ratings in two storefronts only, and the score is per territory. |
| 11 | No displayable rating in US, JP, KR or CN. | Lookup `userRatingCount: 0` for us/jp/kr/cn. The pages say there are not enough ratings to show. | High for store conversion over time | High | App work, 2-4h | Check that `SKStoreReviewController` and the Play In-App Review API are triggered after a positive moment (e.g. after a trip recap or the 10th entry), at most 3×/year on iOS. Reply to reviews. |
| 12 | The Play EN description leaves out features the site sells and is thin on keywords. | 398 words. "travel journal" 2× (~1.0%), "travel diary" 2×. No mention of PDF, Year in Travel, countries count, trip map, JSON/ZIP backup or languages. | Medium: Play indexes the full description. | High | 1-2h | Add a feature block covering city-by-city trips, trip map, Year in Travel with countries count, PDF export of a trip/city/best-of, JSON/ZIP backup and languages. Aim for about 2% for "travel journal" and "travel diary", written naturally. |
| 13 | Subtitle space unused in CJK, and the TR subtitle repeats a title word. | JA 「プライベートな旅の記録」 11/30. KO 14/30. CN 8/30. TR "Günlük" is already in the title "Seyahat Günlüğü" (Apple indexes each word once). | Medium | High | <1h | See section 4. |
| 14 | No in-app events or Play promotional content found for the seasonal features. | Release notes 4.6.0 (Christmas markets / cherry blossom lists, "Snow explorer" challenge). No event shown on the fetched pages. A WebFetch extract may miss events, so verify in App Store Connect. | Medium: events are indexed in App Store search and shown on the product page. | Medium | 2-3h | Run an App Store in-app event "Christmas Market Season" (≤30 chars name, ≤31 days, submit 14 days ahead) and a Play Promotional Content "Event". Link to them from the matching blog articles. |
| 15 | Small sources of friction. | Home store links use `target="_blank"` and `rel="noreferrer"` (`src/App.jsx:164,167`), which opens an extra tab on mobile and strips the Referer that App Analytics "Web Referrer" relies on. The blog uses `rel="noopener"`. Locale keys `cta.button`/`cta.secondary` exist but are unused. | Low | Medium | <15 min | Drop `target`/`noreferrer` on store links (keep `noopener` if `target` stays). |

## 3. Experiments (max 3)

No baseline exists. **Prerequisite for all three: finding 3** (pt/ct links and Play referrer). App Store Connect hides any campaign metric below 5 in the chosen date range, so with today's volume each test may need weeks. Report observed counts only, and stop early only when a guardrail is breached.

**E1. OS-aware primary CTA on phones (home and blog)**
- *Hypothesis:* when the visitor's own store is the only primary button, more mobile visitors click through and install, especially on Android, where the current primary button leads to the wrong store.
- *Control:* the current layout (App Store button, Play text link).
- *Variant:* on iOS/Android user agents, one primary button for the matching store and the other as a small link. Desktop unchanged.
- *Assignment:* random per page view in the browser, with no cookies or storage. The arm goes into the link only: `ct=web-<lang>-e1a|e1b`, Play `utm_content=e1a|e1b`.
- *Primary metric:* first-time downloads per arm (App Store Connect > Analytics > Campaigns; Play Console acquisition by UTM).
- *Guardrails:* total store product page views from site campaigns do not drop; App Store page→download conversion per arm stays the same or better; desktop is unchanged.
- *Decision:* ship once both arms have downloads above the console's display threshold and the variant is not worse on either platform.

**E2. Early contextual CTA in blog articles**
- *Hypothesis:* most mobile readers never reach the first CTA (4.4k-6.2k px). A one-line CTA right after the intro, matched to the article ("No account, works offline" for privacy articles), raises store clicks without hurting rankings.
- *Control:* the current mid and end CTAs (`{{cta}}` plus the end block, `scripts/blog.mjs:356-390`).
- *Variant:* the same, plus a compact CTA after the first paragraph.
- *Split:* alternate by article (even and odd `key`, balanced across en/de/tr/ja) for 4 weeks, then swap.
- *Primary metric:* product page views and first-time downloads per `ct`. Positions get separate tokens: `-intro`, `-mid`, `-end`.
- *Guardrails:* Search Console clicks, CTR and average position for the tested URLs stay flat; `npm run check:blog` passes (update its "exactly one `{{cta}}`" rule first).

**E3. App Store Custom Product Page for privacy-intent traffic**
- *Hypothesis:* visitors from privacy and alternative articles (polarsteps-alternatives, offline-travel-journal-app, google-maps-timeline-alternative and their translations) install more often on a product page that leads with "No account", "Works offline" and "Data Not Collected" screenshots than on the default map-first page.
- *Control:* the default product page with `ct=b-<lang>-<code>-def`.
- *Variant:* a CPP (`&ppid=<id>`) with `ct=…-cpp`.
- *Primary metric:* product page conversion rate (downloads ÷ product page views), which App Analytics reports per campaign and per CPP.
- *Guardrails:* refund and cancellation requests do not rise; the review mix stays stable.
- *Optional Android counterpart:* a Play Custom Store Listing, if a listing-specific URL is available in your Console.

## 4. ASO: score and metadata proposals

### App Store US score (Challenger tier: 0 US ratings, 500+ Play downloads)

| Dimension | Score | Key issue |
|---|---|---|
| Title & Subtitle (20%) | 6 | 25/30 + 27/30 used, but "Routes" is misleading |
| Description (15%) | 7 | Strong first lines ("Every trip. Every place. Every memory..."), IAPs disclosed |
| Visual assets (25%) | 7 | 10 iPhone + 5 iPad screenshots with captions. No preview video detected (verify). JP #1 broken (JP alone would be about 4) |
| Ratings & reviews (20%) | 0 | No displayable rating in US/JP/KR/CN. DE 5.0 (7), TR 5.0 (14) |
| Metadata & freshness (10%) | 8 | v4.6.0 on 2026-10-19, 16 languages, Travel + Lifestyle, "Data Not Collected". In-app events not seen |
| Conversion signals (10%) | 5 | Free + IAP ($29.99/yr, $99.99 lifetime), no social proof, developer site on qrodesk.com |
| **Overall** | **53/100 (C)** | |

**Google Play EN (partial).** Title & short description 6. Description 5 (thin, ~1% keyword). Ratings 0 (none shown, 500+ downloads). Freshness 8 (updated 2026-10-05; data safety: no data collected or shared). Conversion 5 (developer shown as "Mendi Apps", while App Store seller is "Dilara Demir Caglar").
- Visual assets were **not assessed**: screenshot count, feature graphic and video could not be read reliably from HTML, so check them in Play Console.
- The Play "What's new" text is a version behind the App Store (Year in Travel vs seasonal lists).

### Keyword and metadata proposals (to verify; no search volumes available)

Rules applied:
- Apple: no word repeated across title, subtitle and keywords; commas without spaces; keywords ≤100 **bytes** (CJK takes 3 bytes per character); no competitor names (guideline 2.3.7), so "Polarsteps" stays in blog content only.
- Play: no "best", "free", "no ads" or calls to action.

The Apple keyword field is hidden, so first compare these proposals with what is in App Store Connect now.

| Locale | Field | Current | Proposal (chars / bytes) |
|---|---|---|---|
| en | ASC subtitle | Trip Map, Routes & Memories | `Offline Trip Diary, No Account` (30) or `Private Trip Diary & Place Map` (30) |
| en | ASC keywords | hidden | `log,travelogue,vacation,holiday,memories,countries,visited,tracker,city,list,notes,pdf,places,map` (97 B). Drop `places,map` if the 2nd subtitle is used |
| en | Play title / short | VoyageLog: Trip Journal / "Keep your trip memories organized…" | Title: keep it, or align to `VoyageLog: Travel Journal` (25). Short: `Private travel diary. No account, works offline. Save places, find them fast.` (77) |
| de | ASC subtitle | Reisejournal & Reisekarte | Keep, or `Reisejournal, privat & offline` (30) |
| de | ASC keywords | hidden | `reise,urlaub,urlaubstagebuch,erinnerungen,länder,zählen,städte,liste,notizen,pdf,journal,log` (95 B). Remove anything already in the subtitle |
| de | Play title / short | Reisetagebuch: Reisetagebuch / 40 chars | `VoyageLog: Reisetagebuch` (24) / `Privates Reisetagebuch ohne Konto, auch offline. Orte merken, schnell finden.` (77) |
| tr | ASC subtitle | Günlük, Rota & Gezi Notları | `Hesapsız, Çevrimdışı Gezi Notu` (30) or `Gezi Notları ve Anı Defteri` (27) |
| tr | ASC keywords | hidden | `tatil,anı,defteri,gezi,notları,ülke,sayacı,şehir,listesi,harita,pdf,çevrimdışı,journal` (95 B). Drop any word that is in the chosen subtitle |
| tr | Play short | Seyahat anılarınızı düzenli tutun… (64) | `Hesap gerektirmeyen, internetsiz çalışan seyahat günlüğü. Yerleri kaydet, bul.` (78) |
| ja | ASC subtitle | プライベートな旅の記録 (11) | `旅の記録・思い出をオフラインで` (15 / 45 B) |
| ja | ASC keywords | hidden | `旅ログ,旅行記,思い出,トラベル,ノート,行った国,都市,リスト,オフライン` (98 B) |
| ja | Play short | 旅の思い出を整理整頓。… (32) | `アカウント不要、オフラインで使える旅行日記。行った場所と思い出をすぐ検索。` (37). Note: the Play title uses 旅日記 and the App Store title uses 旅行日記; keep the difference only if it is deliberate |
| ko | ASC subtitle | 여행 기록, 지도 & 루트 | `계정 없이 쓰는 비공개 기록장` (16 / 40 B) |
| ko | ASC keywords | hidden | `여행기록,여행로그,추억,다이어리,방문국가,도시,리스트,메모,오프라인,PDF` (99 B) |
| ko | Play short | 여행 추억을 체계적으로… (59) | `계정 없이 오프라인으로 쓰는 여행 일지. 다녀온 장소와 추억을 바로 찾아보세요.` (44) |
| zh | ASC subtitle (CN) | 地图、路线与回忆 (8) | `私密行程记录，离线可用，免注册` (15 / 45 B) |
| zh | ASC keywords | hidden | `游记,旅游日记,旅行记录,足迹,回忆,城市清单,去过的国家,笔记,离线,PDF` (93 B) |
| zh | Play title / short | 航海日志：旅行日记 / 25 chars | `VoyageLog：旅行日记` (14) / `无需账号、离线可用的私密旅行日记。保存去过的地点，几秒找回。` (30). Google Play is unavailable in mainland China, so this listing serves zh readers elsewhere |

### Owner checklist (cannot be verified from public pages)

1. App Store Connect > App Information / Version: the current **keyword field** and **promotional text** for en, de, tr, ja, ko, zh-Hans; whether a **preview video** exists; any **in-app events**.
2. App Store Connect > Analytics > Campaigns: create the **provider token** (needed for findings 3 and 8). Analytics > Sources: check whether "Web Referrer: getvoyagelog.app" shows up at all.
3. Play Console > Main store listing (per language): screenshot count (max 8), **feature graphic** 1024x500, video, the DE and zh-CN titles, and the DE *Sie*/*du* tone.
4. Play Console > Grow > store performance / acquisition: confirm that UTM data from a `referrer=`-encoded link appears (create one test link and click it once from an Android device).
5. In the app: when the review prompt fires on iOS and Android, and how many in-app languages actually ship (finding 7).
6. Re-check the first three screenshots in all 16 App Store localizations after fixing JA.
7. **Limits of this audit:** search volume, keyword ranks, conversion rates and past experiment results all need ASC/Play Console data or a paid tool (AppTweak, Sensor Tower). None of it was estimated here.
