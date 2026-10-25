# Off-page authority: earned links, listings, communities, PR

_Audit dimension: off-page authority for getvoyagelog.app. Prepared 2026-10-24. Skills followed: `.agents/skills/link-building`, `.agents/skills/directory-submissions`. Inputs: `.agents/product-marketing.md`, `docs/seo-plan.md` §6, `MARKETING_TODO.md`._
_Verification: web search, WebFetch and curl on 2026-10-24. "Verified" means the page or rule was read on that date. "Unverified" means it was not checked or the page blocked us. No DR/DA, traffic or price figures are given unless a source states them; none come from this audit. The owner does all submitting, posting and emailing._

## 1. Summary

- **The biggest authority leak is the owner's own setup.** Both store listings send their "Developer Website" link to `https://qrodesk.com/voyagelog/`, not getvoyagelog.app (checked with curl on the App Store US page and the Google Play page). That qrodesk page is a duplicate VoyageLog landing page. It has `rel="canonical"` pointing to itself, links only to the stores and never to getvoyagelog.app. The qrodesk.com home lists the other apps (berufsdeutsch, workenglish, wortjagd) but not VoyageLog. So brand signals are split across two domains. Fix this before any outreach.
- **The brand name is shared with other products.** Product Hunt already has a product called "VoyageLog" (`producthunt.com/products/voyagelog`: a different maker, links to voyagelog.streamlit.app, launched 2025, 13 points). Search also turns up "Voyager Logs" (a sailing log) and "VGP Voyage Log". Every listing should say "VoyageLog travel journal" and link to getvoyagelog.app so search engines and AI tools treat ours as a separate entity.
- **There is room on AlternativeTo.** VoyageLog is not listed there. The Journi Blog alternatives page lists only 2 apps (Pebbls, Breadcrumbs). On the Polarsteps page, the top 12 alternatives are mostly self-hosted trackers. A private, no-account phone journal fills a real gap on both.
- **One listing already exists: Mergeek.** The owner listed the app on Mergeek (`mergeek.com/en/latest/37y9Pm5Ezgdm4wZj`), a Chinese app-discovery community. It shows iOS only, no reviews, and its CTA goes through a Mergeek redirect. Updating it is cheap.
- **Privacy directories mostly don't fit.** VoyageLog is not described as open source. F-Droid requires FLOSS. The cached r/degoogle showcase rules require open source. tycrek/degoogle was archived in Nov 2025. Privacy Guides favours open source, requires a self-submission process and has no journaling category. Reach privacy-minded readers through communities and the Google Timeline guide, not these lists.
- **Each priority market has a verified, rules-based channel for makers:** Korea has GeekNews Show GN, Disquiet and Clien 개발한당. China has sspai Matrix "开发者说", V2EX and Mergeek. Japan has editorial "おすすめ" lists (Appliv, Amebaチョイス), but their submission routes are unverified and both disclose affiliate ads, so a free editorial ask is the only acceptable route.
- **Is authority really the bottleneck?** We can't tell yet. There is no GSC, Bing or backlink data in the repo (`.agents/product-marketing.md`). Per the link-building skill, treat this as a foundation gap: owned properties, listings and reclamation first, outreach second, and measure from week 1.

## 2. Evidence and opportunity table

Impact, effort and risk are rated H/M/L. "V" = verified 2026-10-24 with source; "U" = unverified.

| # | Opportunity | Market | Evidence / verified? | Impact | Effort | Risk | Next action |
|---|---|---|---|---|---|---|---|
| 1 | Point the store "Developer Website" to getvoyagelog.app | all | V: curl of `apps.apple.com/us/app/id6758159402` and `play.google.com/...com.voyagelog.app` shows `href="https://qrodesk.com/voyagelog/"` | H | L | L | App Store Connect: set the field that feeds "Developer Website" (Marketing URL; confirm in ASC). Play Console: store listing > Website. Also put the URL in the description text. |
| 2 | Merge qrodesk.com/voyagelog/ into getvoyagelog.app | all | V: self-canonical, no link to getvoyagelog.app, 9.6 KB duplicate page on GitHub Pages | H | L | L | Set canonical to `https://getvoyagelog.app/`, add a visible link, or use a meta refresh (GitHub Pages can't 301). Keep privacy/terms URLs working, since the stores reference them. |
| 3 | Same-developer cross-links (seo-plan §6.3) | all | V: qrodesk.com home lists other apps, not VoyageLog | M | L | L | Add VoyageLog to the qrodesk.com app list, linked to getvoyagelog.app. Optionally add "More apps by the developer" in the getvoyagelog.app footer. This is a real relationship, so it is not a link scheme. |
| 4 | AlternativeTo listing + alternative-of links | en, global | V: not on alternativeto.net/software/polarsteps/ or /journi-blog/ (2 entries). Route: "Suggest new application" (alternativeto.net/faq via search snippet; FAQ returns 403 to curl). A third-party report says the website link is nofollow and offers a $5 priority review (saascity.io, U) | H | L | L | Submit once: Proprietary, Freemium, iPhone + Android. Add as an alternative to Polarsteps, Journi Blog, FindPenguins, Day One and Google Maps Timeline (that page's slug 404'd; find the right one). Use variant A below. Don't pay for priority. |
| 5 | Product Hunt launch under a distinct name | en, global | V: name collision at producthunt.com/products/voyagelog. PH guide: makers may post their own product, no asking for upvotes (producthunt.com/launch/guide) | M | M | M | Create a new product named "VoyageLog: Travel Journal" with getvoyagelog.app as the site. Don't touch the other product. 3-week warm-up, launch Tue–Thu, ask for feedback. No email list exists, so expect a small day. |
| 6 | Update the existing Mergeek listing | zh | V: owner-created, iOS only, no reviews, CTA via `/official_site` redirect | M | L | L | Confirm official site = getvoyagelog.app, add Android, the zh copy (variant G) and current screenshots. |
| 7 | Show HN | en | V: news.ycombinator.com/showhn.html: must be tryable, no signup gate (we fit), no asking friends for votes, no landing pages | M | L | M | One post, as yourself: "Show HN: VoyageLog, a travel journal with no account and no server". Link the store pages or the site (judgment call: the rules exclude landing pages, so the post must be about trying the app). Answer every comment. Never repost. |
| 8 | "Best travel journal apps" listicles (EN) | en | V: maketecheasier.com/best-travel-journal-apps/ (Crystal Crowder, May 2024; Day One, TravelMap, Journey, Penzu, Polarsteps, Diarium; doesn't cover offline or no-account). travelchinacheaper.com/best-travel-journal-app-guide/ (Josh Summers, Jan 2026, affiliate disclosure, contact page). frostandsun.com/best-travel-journal-apps/ (Meg Frost, dates conflict, has a "Work with me" page) | H (AI citations) | M | M | One email each (draft O1). If anyone asks for payment, it must be rel=sponsored/nofollow and disclosed, or decline. Don't post comments on the article. |
| 9 | German listicles + app press | de | V: futurezone.at "beste Reise-Tagebuch-Apps 2025" (Journi, 1SE, Mark O'Travel, FindPenguins, DayOne). appgefahren.de covered Travler and Polarsteps. netzwelt.de has Polarsteps/FindPenguins download pages. promobil.de (2018) and macwelt.de iPad test (old) are low value. Live, contact routes U: iphone-ticker.de, stadt-bremerhaven.de (Caschy), mobiflip.de | H | M | L | Pitch futurezone for its 2026 update and appgefahren as an app tip (draft O2). Before emailing, read each site's own contact/tip page. |
| 10 | Turkish tech press | tr | V: webrazzi.com/girisim-formu/ (startup review form; news tips to bulten@webrazzi.com, per search snippet; the page returns 403 to curl). Tamindir lists Day One, Journi, Journeys & Notes (V); its submission route is U. Live, routes U: shiftdelete.net, donanimhaber.com, technopat.net/sosyal | M | M | L | Webrazzi form with the angle "a solo developer's travel journal with no account". Tamindir: find a developer route. Don't use paid "haber" packages. |
| 11 | Japanese "おすすめ" lists | ja | V: app-liv.jp/maps/traveling/1683/ "旅行記録アプリおすすめ8選" (updated 2025-10-09, affiliate notice, includes Journi). choice.ameba.jp/travel-log-app/ (2026-07-21, PR/affiliate disclosed, general inquiry form only). The Appliv review_request page now returns 404, so its route is U | H | M | M | Find Appliv's current developer contact. Send one Japanese email per list (draft O3). Refuse paid inclusion unless it is labelled PR and the link is sponsored. |
| 12 | Japanese maker channels: note, Zenn, Qiita | ja | V: sites live. Posting rules U | M | M | L | Write one honest 開発ストーリー on note in Japanese. Post on Zenn only if there is real technical content (offline-first storage, export). Don't cross-post the same text. |
| 13 | GeekNews Show GN | ko | V: news.hada.io/guidelines + /blog/show: own work, tryable, apps allowed, no list articles | H | L | L | One Korean Show GN post (variant F), written as the developer. Reply to comments. |
| 14 | Disquiet (디스콰이엇) | ko | V: disquiet.io is live and shows consumer iOS/Android apps from makers. Registration steps U | M | L | L | Create a maker profile and register the product. Post one maker log in Korean. |
| 15 | Clien 개발한당 | ko | V: clien.net/service/board/cm_app has a 직접홍보 sub-board plus pinned "홍보에 관한 공지" and a code of conduct (text not read) | M | L | M | Read both notices first. Post only in 직접홍보, with a development story, not just a link. |
| 16 | sspai Matrix "开发者说" | zh | V: sspai.com/post/40262 (official, 2017): open to indie devs, apply at sspai.com/apply/writing, write as the maker, no posing as a user, no press releases. Current status U | H | M | L | Apply, then write one original Chinese article about why the app has no account and stays offline. Disclose that you are the developer. |
| 17 | V2EX 分享创造 | zh | V: node is live. The 独立开发者 node rules (per search) allow promotion if the post shares the process, not a bare link. 分享创造's own rules U | M | L | M | One post with the build story and honest trade-offs. Reply to replies. |
| 18 | 小红书 (Xiaohongshu) | zh | V: site live. Rules on external links and promotion U. Notes give brand searches, not backlinks | M | H | M | Optional and slow. Post travel-journal notes (such as a cherry blossom checklist) as a disclosed developer account. Never buy engagement. |
| 19 | App Store China availability | zh | V: apps.apple.com/cn/app/id6758159402 resolves to "VoyageLog: 旅行日记". Google Play is not a mainland channel | n/a | n/a | n/a | In mainland-facing copy, lead with iPhone. Taiwan/HK (PTT live, Dcard 403; rules U) need Traditional Chinese copy, so defer. |
| 20 | Reddit (r/travel, r/solotravel, r/onebag, r/privacy, r/GoogleMaps) | en | U: sidebars couldn't be fetched (403). The cached r/degoogle rules require open source for showcase posts, so we are not eligible | M | H (ongoing) | H | Read each sub's rules. Answer real questions only, disclose "I make VoyageLog", and prefer linking a guide over the app. Max 1 self-link per 10 helpful comments. Never use alt accounts. |
| 21 | Indie Hackers product page, SaaSHub | en | V: saashub.com live, indiehackers.com 403. A secondary source (saascity.io, Apr 2026) says SaaSHub suits mobile apps (U) | L | L | L | List on both once the copy is ready. Low priority. |
| 22 | Mobile-app directories from saascity's list (AppAdvice, AppPicker, IndieAppsCatalog, HackingWithSwift app announcements) | en | U: secondary list. appadvice.com and indieappscatalog.com didn't respond to curl. 148apps.com is live but game-led, with no submission route visible | L | L | L | Verify one at a time. Skip anything that charges for a followed link. |
| 23 | BetaList | en | V: betalist.com/criteria wants products launched within the last few weeks. The app has been live since at least 2026-08 (Mergeek changelog v4.2.0, 2026-08-04) | L | L | L | Skip unless a major relaunch. |
| 24 | Privacy Guides / switching.software / F-Droid / degoogle lists | en | V: F-Droid requires FLOSS. Privacy Guides favours open source, requires self-submission, disclosure and a threat model, and has no journaling category. tycrek/degoogle archived 2025-11-08. switching.software criteria not stated on its About page | L | M | M | Not now. If the app ever goes open source, revisit all four. You could email switching.software to ask whether proprietary apps qualify. |
| 25 | Indie "badge" launch sites, paid submission packages, G2/Capterra | en | V (skill catalog): badge-swap DR, reciprocal badges; G2/Capterra are B2B | L | L | H | Skip. A footer badge wall doesn't fit a calm brand and sits close to a link scheme. |
| 26 | In-app share-card / PDF "getvoyagelog.app" mark (seo-plan §6.8) | all | V: planned in seo-plan §6.8. The app code is not in this repo | M (brand search) | M | L | Next app release: small text mark on shared images and in the PDF footer. In the PDF, make it a real link without tracking parameters, to keep the privacy promise. Make it easy to turn off. Not a link scheme: users choose to share. |
| 27 | Linkable assets already on the site | all | V: `content/blog/en/google-maps-timeline-alternative.md` (export steps; also ja/ko/zh), `countries-visited-tracker.md` (counting rules: 193/195/330, layovers), `christmas-markets-europe-checklist.md` (en/de/tr), `cherry-blossom-spots-checklist.md` (ja/ko/zh), `travel-journal-prompts.md` | H | L | L | Use these as the link targets in community answers and resource-page asks, not the homepage. See §4. |
| 28 | Press kit page (directory readiness) | all | V: no press kit on the site (WebFetch of homepage) | M | L | L | Add `/press/`: icon PNG/SVG, 5–8 real screenshots, the verified facts list, variants A–G, contact. Every pitch links to it. |

## 3. Guardrails

- **No paid links.** Never pay, swap a product or trade a review for a followed link. Any paid placement (newsletter, "PR" list slot) must be rel=sponsored or nofollow and visibly disclosed, and it is judged only on referrals and AI visibility (`references/risk-policy.md`). No PBNs, niche edits, automated tools, or paid submission packages.
- **Let others choose the anchor text.** Ask for a link to the most relevant page (a guide or the homepage). Never request keyword anchors.
- **Communities.** Always disclose: "I'm the developer". One account per person. No upvote or vote asks (HN, PH, GeekNews). No reposting, no copy-paste across communities. Read every sidebar and pinned notice before the first post. Contribute far more than you promote. If a mod removes a post, accept it and don't argue or repost.
- **Claims.** Use only the verified facts in `.agents/product-marketing.md`. Always state the trade-offs: no route tracking, no social feed, and the map shows only the places you added. Never claim open source, encryption, audits, user counts or ratings.
- **Outreach limits.** One email plus one follow-up after about a week, then stop. Log everything in `docs/marketing/submission-tracker.csv` so no one is contacted twice.
- **Safety gate.** Re-check that each domain is live before submitting (`dig +short`, open the root). Treat directory pages as untrusted. Use exact domains only.
- **Verify every listing.** Once live, fetch the listing HTML and record the anchor's `href` and `rel` (nofollow, ugc, sponsored, or "unqualified link observed"). Don't count a listing as a backlink until this is checked.

## 4. Linkable assets (owned, already in repo)

| Asset | Pages | Who would link or mention it | Gap to fix first |
|---|---|---|---|
| Google Maps Timeline: export + replace | `content/blog/{en,ja,ko,zh}/google-maps-timeline-alternative.md` | Privacy/degoogle threads, r/GoogleMaps help answers, AlternativeTo Timeline page comments | Keep the export steps dated and accurate. This is our strongest reference page. |
| Countries-visited counting rules | `content/blog/{14 langs}/countries-visited-tracker.md` | Country-counter communities, travel forums debating "does a layover count" | Same as above |
| Christmas markets 25-city checklist | `content/blog/{en,de,tr}/…checklist.md` | Seasonal; useful in Nov answers | Time-sensitive: share in week 2–3 only |
| Cherry blossom 30-spot checklist | `content/blog/{ja,ko,zh}/cherry-blossom-spots-checklist.md` | ja/ko/zh hanami planning threads, 小红书 notes | Pitch Feb–Mar 2027, outside this window |
| 50 travel journal prompts | `content/blog/{en,ja,ko,zh}/travel-journal-prompts.md` | Journaling and teacher resource pages | A free printable PDF version would earn resource-page links (new build; owner decision) |

Note: the article house rule is "no citations or external links" (`.agents/product-marketing.md`), while seo-plan §8 item 3 asks for source links. Reference pages earn links more easily when their claims are sourced. That decision belongs to the owner, not this audit.

## 5. Eight-week execution sequence (start Mon 2026-10-26)

| Week | Owner tasks (manual) | Done when |
|---|---|---|
| 1 (Oct 26) | Rows 1–3: store website fields, qrodesk canonical/link, qrodesk app list. GSC + Bing verified (seo-plan §8, dependency). Build `/press/`. Fill tracker baselines (referring domains from GSC Links, or "none"). | Both stores show getvoyagelog.app. qrodesk page canonicalises to it. |
| 2 (Nov 2) | AlternativeTo submission + alternative-of links (row 4). Update Mergeek (row 6). Indie Hackers + SaaSHub (row 21). Decide on the share-card mark (row 26) for the next release. | Listings submitted, logged "submitted" |
| 3 (Nov 9) | EN listicle emails O1 ×3 (row 8). DE: futurezone + appgefahren (row 9). TR: Webrazzi form (row 10). Start the PH warm-up (row 5): create the new product page, comment on other launches as yourself. | 6 emails/forms logged |
| 4 (Nov 16) | KR: GeekNews Show GN, Disquiet profile + product, read the Clien notices and post if allowed (rows 13–15). | 2–3 KR posts live, comments answered |
| 5 (Nov 23) | ZH: apply to sspai Matrix, post on V2EX 分享创造 (rows 16–17). JA: note.com story, Appliv + Amebaチョイス emails (rows 11–12). One follow-up for week-3 emails. | Applications sent, follow-ups done |
| 6 (Nov 30) | Product Hunt launch, Tue–Thu (Dec 1–3), 12:01 PT. First comment = maker story. Reply to everything. No vote asks. | Launch done; recap noted in the tracker |
| 7 (Dec 7) | Show HN (row 7), a different week from PH. Zenn article only if technical. Follow-ups for weeks 4–5 (one each). | HN post done or skipped with reason |
| 8 (Dec 14) | Verify every live listing's anchor and rel. Check GSC Links. Ask ChatGPT, Perplexity and Gemini "best private travel journal app" / "Polarsteps alternative" in en/ja/ko/zh and log citations. Plan cherry-blossom outreach for Feb. Update the MARKETING_TODO run log. | Tracker statuses updated with evidence |

Targets (honest): there are no baselines, so the targets are activity targets. By day 56: about 15 listings or posts live, 10+ outreach asks sent, every live link checked. Measure referring domains and AI mentions from week 8 onward. Don't promise rankings.

## 6. Positioning variants (verified facts only; vary per surface)

**A. SaaS/alternative directories (AlternativeTo, SaaSHub). EN**
- Tagline: A private travel journal that lives on your phone.
- Short (≤60): Private trip journal. No account, works offline.
- Medium: VoyageLog is a travel journal for iPhone and Android that keeps every trip on your phone. There is no account and no server, and it works without internet. Log rated places and moments city by city, search your notes, and export a trip as a PDF.
- Long: VoyageLog is a private alternative to Polarsteps, Journi and Google Maps Timeline for people who want to remember trips without an account, a feed or live tracking. Everything stays on your phone and works offline. Places get a rating; moments can be rated too. Long trips split city by city, and you can search titles, notes, tags and trips. The trip map works offline but shows only the places you added, not a full base map. Back up as JSON or ZIP; the app reminds you every ten trips. Export a trip, a city or a best-of list as a PDF. What it does not do: no route tracking and no social sharing feed. Free with a limited number of trips; Pro adds unlimited use, advanced search and exports. Built by a solo developer who answers support mail personally.
- Tags: travel journal, trip diary, offline, no account, privacy, Polarsteps alternative, trip timeline, memory keeping

**B. Launch (Product Hunt, Indie Hackers). EN:** "Every trip, one calm timeline. Yours alone, on your phone." Medium: I built VoyageLog because I wanted to remember trips without handing them to a server. No sign-up, works offline, places and moments sorted city by city, PDF export when you want paper. It doesn't track your route and has no feed, on purpose.

**C. Show HN. EN:** "Show HN: VoyageLog, a travel journal with no account and no server". Body: data lives only on the device; backups are JSON/ZIP files you own; the offline map shows only places you added; the trade-offs (no sync service, no tracking) and why. Invite criticism of the design.

**D. TR**
- Slogan: Telefonunda kalan, sana özel gezi günlüğü.
- Kısa: Hesapsız, internetsiz çalışan gezi günlüğü.
- Orta: VoyageLog, iPhone ve Android için özel bir seyahat günlüğü. Hesap yok, sunucu yok, internet olmadan çalışır ve her şey telefonunda kalır. Puanladığın yerleri ve anları şehir şehir kaydet, notlarında ara, bir geziyi PDF olarak dışa aktar.
- Uzun: Polarsteps, Journi ve Google Maps Zaman Çizelgesi'ne özel bir alternatif. Kayıt olmadan, akış ve canlı konum takibi olmadan gezilerini hatırla. Uzun geziler şehir şehir bölünür; başlık, not, etiket ve gezi içinde arama yapılır. Harita çevrimdışı çalışır ama yalnızca eklediğin yerleri gösterir. JSON veya ZIP yedek alırsın, uygulama her on gezide hatırlatır. Rota takibi ve sosyal akış yok. Sınırlı sayıda gezi ücretsiz; Pro sınırsız kullanım, gelişmiş arama ve dışa aktarma ekler. Tek kişilik bir geliştirici yapıyor ve destek e-postalarını kendisi yanıtlıyor.

**E. JA**
- タグライン: スマホの中だけに残る、自分だけの旅行日記。
- 短文: アカウント不要、オフラインで使える旅行日記
- 中文: VoyageLogはiPhoneとAndroid向けの旅行日記アプリです。アカウント登録は不要で、インターネットがなくても使えます。記録は端末の中に保存され、サーバーには送られません。評価をつけた「場所」と「瞬間」を都市ごとに記録し、メモを検索し、旅をPDFで書き出せます。
- 長文: 長い旅は都市ごとに分けて記録でき、タイトル・メモ・タグ・旅を横断して検索できます。地図はオフラインで動きますが、表示されるのは自分で追加した場所だけです。JSONまたはZIPでバックアップでき、10回の旅ごとにアプリが知らせます。ルートの自動記録やSNSのようなフィード機能はありません。無料版は旅の数に上限があり、Proでは無制限の利用、高度な検索、書き出しが使えます。個人開発で、サポートメールには開発者本人が返信します。

**F. KO**
- 태그라인: 내 휴대폰에만 남는 나만의 여행 일기.
- 짧은 소개: 계정 없이, 오프라인으로 쓰는 여행 일기
- 중간: VoyageLog는 iPhone과 Android용 여행 일기 앱입니다. 계정이 필요 없고 인터넷 없이도 작동하며, 모든 기록은 서버가 아닌 내 기기에 저장됩니다. 별점을 매긴 장소와 순간을 도시별로 기록하고, 메모를 검색하고, 여행을 PDF로 내보낼 수 있습니다.
- 긴 소개: 긴 여행은 도시별로 나눠 기록하고 제목, 메모, 태그, 여행 전체에서 검색할 수 있습니다. 지도는 오프라인에서도 작동하지만 내가 추가한 장소만 보여 줍니다. JSON 또는 ZIP으로 백업할 수 있고, 여행 10개마다 앱이 백업을 알려 줍니다. 경로 자동 추적과 소셜 피드는 없습니다. 무료 버전은 여행 수에 제한이 있고, Pro에서는 무제한 사용, 고급 검색, 내보내기를 쓸 수 있습니다. 1인 개발자가 만들고 지원 메일에 직접 답합니다.

**G. ZH (Simplified; mainland surfaces lead with iPhone)**
- 标语: 只留在你手机里的私人旅行日记。
- 短介绍: 无需账号、离线可用的旅行日记
- 中等: VoyageLog 是一款适用于 iPhone 和 Android 的旅行日记 App。无需注册账号,没有网络也能使用,所有记录都保存在你的设备上,不经过任何服务器。按城市记录带评分的地点和瞬间,搜索笔记,并可将一次旅行导出为 PDF。
- 长介绍: 长途旅行可以按城市拆分,标题、笔记、标签和旅行都能搜索。地图可离线使用,但只显示你自己添加的地点。可导出 JSON 或 ZIP 备份,每记录十次旅行 App 会提醒你备份。没有路线追踪,也没有社交动态。免费版旅行数量有限,Pro 提供无限使用、高级搜索和导出。由一位独立开发者制作,支持邮件由开发者本人回复。

## 7. Outreach drafts (owner edits per page, then sends)

**O1 (EN, best-X list):** Subject: VoyageLog for your "[list title]". Hi [name], your "[list title]" covers Day One and Polarsteps but not apps that work with no account at all. VoyageLog is a travel journal for iPhone and Android that keeps trips on the phone and works offline. No route tracking and no feed, so it suits a different reader than Polarsteps. If you update the list, screenshots and facts are at getvoyagelog.app/press/. [Name]

**O2 (DE, Liste/App-Tipp):** Betreff: Reisetagebuch ohne Konto für „[Titel]“. Hallo [Name], in „[Titel]“ stellen Sie Journi, FindPenguins und Day One vor. VoyageLog ist ein Reisetagebuch für iPhone und Android, das ohne Konto und ohne Internet funktioniert; alle Einträge bleiben auf dem Gerät. Routenaufzeichnung und Feed gibt es bewusst nicht. Falls Sie die Liste aktualisieren, finden Sie Screenshots und Fakten unter getvoyagelog.app/press/. Viele Grüße, [Name]

**O3 (JA, おすすめ記事):** 件名: 「[記事タイトル]」更新時のご参考に。[ご担当者]様、「[記事タイトル]」を拝見しました。VoyageLogはiPhoneとAndroid向けの旅行日記アプリで、アカウント登録なしで、オフラインでも使えます。記録は端末内に保存されます。ルートの自動記録やSNS機能はありません。記事を更新される際の候補として、概要とスクリーンショットをお送りできます。[名前]（VoyageLog 開発者）
