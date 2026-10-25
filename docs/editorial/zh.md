# Editorial notes: Simplified Chinese (zh)

Edited with the `blog-editor-zh` skill (read from `.claude/skills/blog-editor-zh/SKILL.md` plus `blog-editor-core/REFERENCE.md`, including section 11). No `MASTHEAD.md` existed for zh during this session, so the section 10 masthead pass ran against the skill's own standard only.

**Cross-article style decisions (two writers, now one house style)**
- Trip = **旅行** (一次旅行、旅行数量有限、每记满十次旅行), matching `zh.js`. **行程** is kept only for itineraries (规划行程、排行程、改了行程). Writer A had used 行程 for trips throughout, which clashed with "不是行程规划工具" in the same articles.
- Feature names follow `zh.js`: 旅行地图 (was 行程地图), Year in Travel (was 年度旅行回顾 / 年度回顾, which collided with 旅行回顾 = trip recap), 精选榜单, 统计页, 信息流 (was 动态流), 城市清单, 那年今日.
- Category nouns take **App** (旅行日记 App、足迹记录 App、点亮地图 App、地图 App). Standalone references use **应用** (这款应用、其他应用、应用会提醒). Trackers are now always 足迹记录 App, never 轨迹类 App, 足迹类应用 or 轨迹记录类 App. Scratch-map apps stay 点亮地图类 App.
- Search variants kept on purpose: 旅行记录, 旅游日记, 旅游笔记 and 旅行笔记 appear in titles and H2s as secondary queries.
- 谷歌地图 became Google 地图, and 安卓 became Android. Google advice is framed for readers abroad ("如果你在境外…").
- Disclosure everywhere: "先说明一点：VoyageLog 是我们自己做的应用。" Non-comparison pieces say "我们做的 VoyageLog" at first mention.
- Scores in Arabic numerals (4 分、4.5 分、5 分), with 五分制 kept as a fixed phrase. 长线旅行 became 长途旅行 throughout.
- Link spacing: a space only when the link text starts or ends with Latin letters ("看 [Polarsteps 替代 App](…)"; "看[怎么写旅行日记](…)里"). Both writers had this wrong in opposite directions.
- Moments: "瞬间可以不打分" / "按这套方法不打分" is advice. Sentences implying an app rule ("瞬间两样都没有", "只给地点") were corrected.
- Offline map (owner fact, REFERENCE §11): wherever map and offline use meet, the articles now say the 旅行地图 opens offline but shows only saved places, with no streets, POIs or navigation.
- PDF length (owner fact, REFERENCE §11): PDFs are described as one card page for short content and several pages for long trips. No article promises a photo-book layout or a whole-journal PDF (print-travel-journal-pdf, offline-travel-journal-app, polarsteps-alternatives).

---

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 旅行日记 App 推荐
**Summary:** A strong comparison: honest "不适合谁" section, sensible split between trackers and diaries, and good local detail (冒菜, 玉林路, 鹤鸣茶社). The competitor facts were mostly right. The problems were wrong trip terminology, a Polarsteps visibility claim, a Day One table cell that named a feature instead of a storage location, and some template phrasing.

**What changed**
- Description no longer echoes the title ("旅行日记 App 推荐：先想清楚…" → "选旅行日记 App 之前先想清楚：…").
- Lede: cut "看完就知道哪款适合你". The disclosure now names the source: "App Store 中国区的商店页".
- Terminology: 行程 → 旅行; 行程地图 → 旅行地图; 年度旅行回顾 → Year in Travel; "自己排序的榜单" → 精选榜单; 动态流 → 信息流; 足迹类应用 → 足迹记录 App.
- Day One: "写作体验是这几款里最好的" (unprovable) → "它本来就是为每天写字设计的". Table cell "端到端加密" → "自动备份，支持端到端加密".
- Polarsteps: 谷歌 → Google, plus the note that Google 登录在国内基本用不上. Visibility "只有自己、亲友或所有人" → "只有自己、关注者或所有人".
- The trip map bullet now says it opens offline and shows only saved places (§11).
- Link spacing fixed in 3 places; FAQ wording tightened.

**Facts verified**
- 一生足迹: free with IAP (年度会员), 无账号登录, 备份采用 iCloud, 无后端数据服务, GPX export, 按年份导出, background-location battery notice (https://apps.apple.com/cn/app/id1225520399)
- 世界迷雾: no user account, data on device, optional sync to cloud, background GPS, achievements, paid download (¥198 today, not stated in the article), battery notice (https://apps.apple.com/cn/app/id505367096)
- 灵敢足迹: free with IAP; trajectory, dwell time, travel mode, city lighting, photo import, running/cycling/driving analysis, wallpapers; no account or storage statement; privacy label lists identifiers and usage data for tracking plus third-party advertising data (https://apps.apple.com/cn/app/id1539411511)
- Day One: Simplified Chinese supported, free forever with unlimited entries, end-to-end encryption, passcode/Touch ID/Face ID lock, premium adds unlimited photos, video and audio, Google sign-in (https://apps.apple.com/cn/app/id1044867788)
- Polarsteps: on the China storefront, free with Plus IAP, 13 languages and no Chinese, "离线也能使用", "不会耗费很多电量", hardcover travel book, battery notice (https://apps.apple.com/cn/app/id947925763); sign-up with Google, Apple or email (https://support.polarsteps.com/hc/en-us/articles/29049619141266); trip visibility Only me / Followers / Everyone (https://support.polarsteps.com/hc/articles/24267891448850)
- VoyageLog claims checked against `src/locales/en.js`.

**Removed or generalized**
- "Polarsteps 离线记录，联网后再同步" → "离线也能用" (the store page says only that).
- "开发者各自说做了省电优化" → names only the three that say so (一生足迹, 灵敢足迹, Polarsteps). 世界迷雾's page makes no such claim.
- "耗电和备忘录差不多" → "不会因为定位多耗电" (the comparison was unprovable).
- Polarsteps "亲友" visibility tier → contradicted; it is 关注者.

**Still uncertain, for the owner**
- VoyageLog's China App Store page (id6758159402) lists 16 languages; `en.js` says 30+. No zh article states a number, but the two sources disagree.

**Checks:** check-blog all clear, guard clean, 3115 characters, updated 2026-10-24 (unchanged value), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** Polarsteps 替代
**Summary:** It frames the search intent well for a market where Polarsteps is little known, and it has a clear "什么时候 VoyageLog 不是好选择" section. It contained one unverifiable claim about user reviews and repeated the wrong visibility tiers.

**What changed**
- FAQ 1: cut "早年就有中文用户在评论里请求加中文"; now states the store lists 13 languages with no Chinese.
- FAQ 2 now opens with the direct answer "要。"; FAQ 4 names which developers claim battery optimisation.
- Disclosure standardised; "出发时建一个行程" → "建一次旅行"; Polarsteps "亲友" → "关注者"; Google sign-in note added.
- 一生足迹: dropped "无需操作" (not confirmed on the page).
- "VoyageLog 能导出 PDF 卡片" → "能把一次旅行导出成 PDF，内容多就是好几页" (§11).
- Trip terminology, 旅行地图, 信息流, 足迹记录 App throughout; link spacing fixed. The anchor "去过的国家怎么记" now matches that article's title ("怎么算").

**Facts verified**
- Same Polarsteps, 一生足迹, 世界迷雾, 灵敢足迹 and Day One sources as best-travel-journal-apps.
- Polarsteps sells a printed book ("精装本") (https://apps.apple.com/cn/app/id947925763)

**Removed or generalized**
- "早年就有中文用户在评论里请求加中文" → removed; unverifiable.
- "界面以英文和几种欧洲语言为主" → "界面以英文为主"; the full language list was not checked.
- "联网后再同步" → removed; not on the store page.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 2694 characters, updated 2026-10-24, title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 不用注册、离线可用的旅行日记 App
**Summary:** It answers the query in the first sentence, gives a good airplane-mode test, and is honest about the cost of having no cloud. Two lines overclaimed: a UI detail and a tablet-sync sentence that implied an iPad version.

**What changed**
- Cut the announcing sentence "下面讲清楚…"; disclosure standardised.
- "第一屏就是新建行程" (UI detail not in en.js) → "不用先填任何资料".
- "手机和平板之间不会自动同步" → "两部手机之间不会自动同步" (iPad is not claimed).
- "这些信息不在任何服务器上，也就不存在被泄露的问题" (an overclaim) → "这些信息不在我们的服务器上，因为我们根本没有存放旅行数据的服务器".
- "丢手机也只会损失下一次旅行之前的内容" (illogical) → "只会损失最近一次旅行的内容".
- Export list: PDF "做成卡片分享" → short content is one card page, longer PDFs run several pages (§11).
- Added to the offline list (§11): the trip map opens offline and shows only your saved points, with no streets, search or navigation.
- Terminology (旅行, 信息流, 精选榜单, Android), table intro names the China storefront, link spacing fixed.

**Facts verified**
- Polarsteps offline (https://apps.apple.com/cn/app/id947925763); 一生足迹 iCloud/no account (https://apps.apple.com/cn/app/id1225520399); 世界迷雾 device storage/sync (https://apps.apple.com/cn/app/id505367096); Day One offline not stated (https://apps.apple.com/cn/app/id1044867788)

**Removed or generalized**
- Polarsteps "离线也能记录" → "离线也能用" (store wording).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 2436 characters, updated 2026-10-24, title unchanged

## google-maps-timeline-alternative, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 记录去过的地方
**Summary:** The framing is localized well: Google is aimed at SG/MY and overseas readers, and the 南京 and 曼谷 examples work. One place example contradicted the venue's booking rules, and the map-link instruction did not say which map apps work.

**What changed**
- 中山陵 note "早上七点半到，台阶上几乎没人" → "约了最早的时段，台阶上人还不多". Third-party sources show the site needs advance booking and opens around 8:30.
- "在地图应用里找到那家店" → "在 Apple 地图或 Google 地图里找到那家店". Mainland readers use 高德/百度, and only Apple/Google links are claimed.
- Google Timeline: "网页上已经不能查看" → "电脑上的 Google 地图已经看不到时间轴". FAQ 1 is framed for readers abroad, and "换机就没了" was softened to "可能找不回来".
- §11 added: the trip map opens without internet, with only saved places and no streets or navigation; navigation is handed to the map app.
- Scores 四分/四点五分 → 4 分/4.5 分; trip terminology; link spacing.

**Facts verified**
- Timeline data comes from the device, has an optional encrypted backup, and desktop Google Maps cannot show it (https://support.google.com/maps/answer/14169818?hl=zh-Hans)
- 一生足迹 and 世界迷雾 claims (store pages as above)

**Removed or generalized**
- 中山陵 7:30 arrival → generalized; it contradicts the opening and booking rules. No official 中山陵 page was reachable, so the new note asserts no times.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 2332 characters (minimum 2200; no net cuts), updated 2026-10-24, title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 旅行日记怎么写
**Summary:** The best-written piece in the set: concrete, specific to 京都, with a worked day at the end. The edits were mostly 翻译腔 calques.

**What changed**
- "从那个地方里面发出的一张便条" → "在现场随手写的一张便条"; "5 分告诉你一切" → "5 分只说一件事：再去"; "保持无聊" → "越朴素越好"; "从过去的自己那里得到的东西" → "以后你最想知道的"; "它才活得下来" → "才坚持得下去"; "你会惊讶于…" → "你会发现发生过的事，比记得的多得多"; "它真的被写下来了" → "它真的写出来了".
- FAQ 5 adds the disclosure "我们做的 VoyageLog"; the anchor "40个" became "40 个".

**Facts verified**
- 金阁寺 opens 9:00 (https://www.shokoku-ji.jp/kinkakuji/)
- Bangkok Grand Palace bans short pants (https://www.royalgrandpalace.th/en/visit/practical-information)
- Gyeongbokgung is free in hanbok (Korea Heritage Service policy since 2013, reported by The Korea Herald; the official royal.khs.go.kr page could not be loaded)

**Removed or generalized**
- none

**Still uncertain, for the owner**
- 景福宫 free admission in hanbok is confirmed only through press reports, and 2026 coverage mentions disputes over which outfits qualify. The sentence is kept as is.

**Checks:** check-blog all clear, guard clean, 3233 characters, updated 2026-10-24, title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 旅行笔记整理方法
**Summary:** It has a clear system and an excellent 成都/重庆 table. It presented "moments have no rating or location" as an app rule and generalized all trackers as cloud-based.

**What changed**
- Table "内置五分制，只给地点" → "瞬间可以不打"; "瞬间两样都没有" → "瞬间按这套方法不打分，留一句话和一张照片就够" (en.js does not say moments lack location or rating).
- "数据多半存在对方的服务器上" → "有的还要注册账号、把数据存在云端" (一生足迹 and 世界迷雾 contradict the original).
- H2 "两样都会坏掉" → "两样都吃亏"; the closing recap heading "规则再说一遍" → "下次出门，只带这一个问题", and it now ends with a home link.
- 谷歌地图 → Google 地图 framed for readers abroad; 轨迹类 → 足迹记录 App; 本文 → 这里; link spacing; the FAQ uses quotation marks around “地”/“瞬”.

**Facts verified**
- VoyageLog features against en.js; tracker claims as above.

**Removed or generalized**
- Blanket "trackers keep your data on their servers" → generalized; contradicted by store pages.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 3701 characters, updated 2026-10-24, title unchanged

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 去过的国家怎么算
**Summary:** Useful rules-first piece with a domestic 省/城市 section. It was missing the 国家和地区 convention and had an outdated passport-stamp tip; it also inferred how the Insights numbers are calculated.

**What changed**
- Added a two-sentence note: 香港、澳门、台湾 are counted as “地区”, hence “去过多少个国家和地区”, with a reminder to stay consistent (neutral wording, per the skill).
- Passport tip: added that since April 2026 Schengen uses electronic entry/exit registration and no longer stamps passports.
- Cut the en.js-external inference about how Insights calculates numbers ("在外天数是每次旅行天数的总和…") → "从你记下的旅行里算出来的".
- "Year in Travel 回顾会告诉你这一年去了几个国家" (not in en.js) → "按月把这一年翻一遍".
- Calques: "数字就是全部产品", "被设计强制执行了", "点亮地图只能耸耸肩".
- The mid-article disclosure was made plain; 谷歌 → Google; "数据多半在云端" → "有的还要注册账号"; added a home link.

**Facts verified**
- UN has 193 members, and the Holy See and Palestine are non-member observer states (common knowledge; not re-fetched this session)
- EES fully operational on 10 April 2026, passports no longer stamped (https://singapur.diplo.de/sg-en/service/05-visaeinreise/2763524-2763524)
- 灵敢足迹 description (https://apps.apple.com/cn/app/id1539411511)

**Removed or generalized**
- Insights calculation details → generalized; not in en.js.
- Year in Travel country count → generalized; not in en.js.

**Still uncertain, for the owner**
- The owner should approve the 港澳台 = 地区 sentence, since it is market-sensitive. It follows the skill's instruction and avoids any political statement.

**Checks:** check-blog all clear, guard clean, 3566 characters, updated 2026-10-24, title unchanged

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 旅行日记导出 PDF
**Summary:** Practical, with sound print-shop advice (骑马钉/胶装/铁圈装, 微信原图). It claimed a few export details that en.js does not state.

**What changed**
- Title spacing "导出PDF" → "导出 PDF" (per the skill).
- Excel export: removed the invented column list (标题、日期、评分、笔记、标签).
- PDF length (§11): FAQ 1 and the VoyageLog export section now say a PDF runs as long as its content (one card page for a short list, several pages for a long trip). They also say it is not a designed photo-book layout and cannot combine the whole journal into one PDF. "一整次旅行" → "一次旅行"; "在导出或排版之前定好尺寸" → "在排版之前" (VoyageLog page size is not documented).
- "地点旁边的五颗星" (the PDF's rendering is unknown) → "地点旁边的 4 分、5 分".
- "完美的图注" → "现成的图注"; "一份印好的 PDF…像一个真正的东西" → "印好、装订好的一册…像一本真正的书"; lede split.
- Disclosure added at the first VoyageLog mention; 轨迹类 → 足迹记录 App; link spacing.

**Facts verified**
- PDF/image cards per trip, city and best-of list; JSON, Excel and ZIP; exports of everything in Pro (en.js)

**Removed or generalized**
- Excel column names → removed; not in en.js.

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 2660 characters, updated 2026-10-24, title changed: OG image stale

## travel-journal-prompts, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 旅行日记写什么
**Summary:** Good prompts and natural Chinese. It needed the title spacing fix, a shorter lede, a few calques fixed, and a disclosure.

**What changed**
- Title "40个" → "40 个".
- Lede: the nine-item section list became one sentence.
- "如果这种分法对你是新的" → "第一次接触这种分法的话"; "判决" → "判断"; "伸手去拿对应的那一部分" → "翻到对应的那一部分".
- "第 15 题是人们最常跳过、事后最后悔的一题" (an unprovable statistic) → "最容易跳过，事后也最容易后悔".
- Cut a sentence that repeated the H2; added "我们做的 VoyageLog" and a home link.

**Facts verified**
- No checkable third-party claims beyond general travel notes (Tokyo taxi doors, 八桥).

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 3045 characters, updated 2026-10-24, title changed: OG image stale

## cherry-blossom-spots-checklist, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** 赏樱地点清单
**Summary:** A solid seasonal list with careful wording on 武大 and 造币局 bookings. The headline count was wrong: the article lists 24 spots (10 domestic, 14 in Japan), not 22.

**What changed**
- 22 → 24 in title, description, H1, lede and the "years of springs" line ("七八年" → "差不多要十年").
- "本文不写具体日期" → "这里不写具体日期"; "最有名的…之一" ×2 → "名气数得上的", "很有名的".
- "在 VoyageLog 里，地点打分，瞬间不打分" (presented as an app rule) → "按我们的记法…"; the first VoyageLog mention now carries the disclosure.
- Trip terminology (一次旅行, 旅行记录); scores 五分/三分 → 5 分/3 分; link spacing (4 places).

**Facts verified**
- 新宿御苑 charges admission (500 yen) (https://policies.env.go.jp/national-garden/shinjukugyoen/guide/information/)
- 平安神宫 神苑 is paid separately (600 yen) (https://www.heianjingu.or.jp/map/garden/)
- 造币局 桜の通り抜け used online advance registration in 2026, as reported by Kumanichi/Kyodo. The article's wording "近年采用事先申请…以官方当年公告为准" stands.
- City lists with ready-made cherry blossom list; Pro unlimited city lists (en.js)

**Removed or generalized**
- none

**Still uncertain, for the owner**
- Japanese and Chinese spot descriptions (醍醐寺 history, 吉野山 sections, 龙王塘 location and others) are well-established, but they were checked only against general knowledge, not each venue's site.

**Checks:** check-blog all clear, guard clean, 2412 characters, updated 2026-10-24, title changed: OG image stale
