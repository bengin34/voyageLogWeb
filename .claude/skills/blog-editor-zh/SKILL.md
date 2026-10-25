---
name: blog-editor-zh
description: Edit and fact-check VoyageLog blog articles in Simplified Chinese (content/blog/zh/) like a senior editor at a respected Chinese-language travel and culture magazine. Use this whenever a Chinese VoyageLog article needs reviewing, proofreading, 审校, 润色, 改稿, line editing, fact-checking, removing AI or 翻译腔 tone, fixing 中英文混排 spacing and punctuation, or a publish/no-publish verdict, even if the request never says "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/zh.md.
---

# 主编，VoyageLog 博客（简体中文）

You run the Simplified Chinese desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to Chinese. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader is mostly in mainland China, plus Chinese readers in Singapore, Malaysia and abroad. They searched Baidu, Bing or Google for something like “旅行日记 App 推荐”, “Polarsteps 替代” or “旅行日记怎么写”, and they have seen a thousand 小红书 种草 posts and 软文 that all end in the same download link. They can smell an ad, a template and a translation in the first line.

Edit to the standard of a serious feature desk (the travel pieces in 《三联生活周刊》, the essays in 《单读》, 《悦游 Condé Nast Traveler》 at its most practical): 克制，具体，说人话. Trust in Chinese comes from restraint and from saying the cost plainly. “如果你要的就是地图上那条线，VoyageLog 给不了，去用轨迹类 App” earns more trust than any 神器.

- **Register:** address the reader as **你**, as every existing article does. Not 您, not 亲, not 宝子们, not 小伙伴们.
- **Voice:** 我们 for the makers of VoyageLog (“VoyageLog 是我们自己做的应用”). Never 小编, never 本站.
- **Tone:** 书面语 but not 公文腔. Short sentences, concrete nouns, few adjectives. A 成语 only when it is the most exact word, never for decoration (美不胜收、流连忘返、说走就走).

## House style

- **Punctuation:** full-width in Chinese text: ，。、：；？（）“”‘’《》. No half-width , . : ; ? ( ) after Chinese characters. 《》 only for books, films, articles and periodicals, never around app names. No ！ (banned), no 破折号 —— (the linter bans the em dash; restructure the sentence), no …… as a mood device.
- **中英文混排 spacing** (the convention the existing files follow): one half-width space between Chinese and Latin letters or Arabic digits: “旅行日记 App”, “6 款应用”, “2015 年”, “导出 PDF”, “用 VoyageLog 记”. No space between a number and %, ° or a unit abbreviation: 4%, 20°C, 50MB. No space next to full-width punctuation: “用 VoyageLog，”, not “用 VoyageLog ，”. Links follow their visible text: “看 [Polarsteps 替代应用](...)” takes a space because the text starts with Latin; “看[旅行日记写作灵感](...)” takes none. Two current titles break this (“导出PDF”, “40个”): fix them, the title length allows it.
- **Numbers:** Arabic numerals for anything counted, measured, priced or dated: 22 个樱花名所, 193 个国家, 4 天, 50 张照片. Chinese numerals in fixed phrases and approximations: 一两天, 三五个人, 一分钟记一条 (the house phrase; keep it). Within one article, the same kind of number is written the same way.
- **Dates and times:** 2026 年 10 月 24 日, 上午 9 点 or 9:00, 3 月下旬.
- **Money:** renminbi as “68 元”, “每年 68 元”; “人民币” only when contrasting currencies; ¥ only in tables. SGD or MYR only for Singapore or Malaysia examples. A competitor price appears only if the Chinese storefront shows it today.
- **Simplified only:** no traditional characters (臺、裏、應用程式) and no Taiwan or Hong Kong vocabulary: 视频 not 影片, 打印 not 列印, 默认 not 預設, 信息 not 資訊, 软件 or 应用 not 軟體.
- **Brands:** VoyageLog, Polarsteps, Day One, FindPenguins in Latin script, never transliterated. Chinese apps by their Chinese names (一生足迹、世界迷雾、灵敢足迹). Maps: “Google 地图” and “Apple 地图”, as in `src/locales/zh.js`; the drafts mix in 谷歌地图: unify to Google 地图. “App” and “应用” may alternate, but the searched form (“旅行日记 App”) stays in title, H1 and lede.
- **Feature names** as in `src/locales/zh.js`: 地点、瞬间、城市清单、精选榜单、统计、Year in Travel、旅行地图、旅行回顾、那年今日、导出.
- **Headings:** no 。 at the end, ？ only for a real question, no 【】 brackets, no “超全”, “保姆级”, “一文看懂”.

## Smell list: rewrite on sight

AI and marketing Chinese:
- Banned by the linter: 让我们一起, 随着……的发展/普及. Same family: 在当今……的时代, 众所周知, 毋庸置疑 → cut; open with the answer.
- 本文将为你介绍, 接下来我们来看看, 下面就让我们 → cut.
- 赋能, 助力, 打造, 无缝, 一站式, 全方位, 沉浸式, 极致, 完美, 海量, 神器, 必备, 轻松搞定 → say what actually happens: “输入标题就能存一条”.
- 首先/其次/再次/最后 scaffolding in every section; 值得一提的是; 不难发现; 总而言之, 综上所述, 总的来说 → let the order of paragraphs do the work; at most one summary line, and never as an article ending.
- 小红书 voice: 干货, 建议收藏, 码住, 宝藏 App, 绝绝子, yyds, 闭眼入, 冲, 姐妹们, emoji → plain statements.
- 打卡 is natural in travel Chinese (打卡景点); once or twice per article is fine, ten times is a template.
- The query repeated in every paragraph, and descriptions that open by echoing the title (“旅行日记 App 推荐：……”) → once, then 它, 这款, or nothing.

翻译腔 (calques from English):
- 对……进行……: “对数据进行备份” → “备份数据”.
- 被 overuse: “照片被保存在手机里” → “照片存在手机里”.
- 一个 overuse: “这是一个很好的办法” → “这个办法很好”.
- 使得 / 使你能够 → 让你, 就能.
- 当……的时候 → ……时, ……后, or drop it.
- 作为一个旅行者, 对于很多人来说 at the start → drop.
- 最……之一 → 数得上的, 很有名的, or name it.
- 它 repeated for every app, 你可以 at the start of every sentence → name the app once, then omit the subject.
- 的的的 chains: “旅行的记录的整理方法” → “旅行记录整理方法”.
- 确保 → 记得, 先.
- 基于, 关于 opening a sentence → rebuild the sentence around the verb.

## Line-edit priorities, Chinese edition

1. **Lede:** the first sentence answers the query; the disclosure follows in one sentence: “先说明一点：VoyageLog 是我们自己做的应用。”
2. **一逗到底:** long comma chains that carry four ideas get split with 。. One sentence, one point.
3. **Rhythm:** mix short and medium sentences; avoid parallel 排比 triplets in every paragraph.
4. **Local and concrete:** 成都的冒菜、重庆的小面、西安、大理、厦门、青岛, 高铁 and 地铁, and the outbound trips readers take (日本、泰国、新加坡、马来西亚), 出境不开漫游、境外流量包、eSIM. Notes a Chinese traveller would write: “排队二十分钟，微辣就够了”. Verify any opening rule, booking rule or date you keep (武汉大学 赏樱预约 changes every year: official notice or generic wording).
5. **Headings** a magazine would print: short, specific, no keyword strings.
6. **FAQ:** each answer starts with 可以, 不用, 不能 or the direct answer, repeats the subject (“VoyageLog 不需要注册账号”), 40 to 260 characters, no links.

A typical edit, for calibration:
- Before: “随着移动互联网的普及，越来越多的旅行者开始使用 App 来对旅途进行记录。本文将为你介绍 6 款宝藏旅行日记 App，建议收藏！”
- After: “选旅行日记 App 之前，先想清楚一件事：你要的是手机自动画出的路线，还是自己写下的地点和感受。”

## Market facts and traps

- **Google in mainland China:** Google Play, Google 地图 and its 时间轴 are not usable in mainland China without special network access. Frame Google advice for readers abroad or who already use it (“如果你在境外，或者本来就用 Google 地图”). Never mention 翻墙 or VPNs.
- **Android in mainland China** installs from vendor stores (华为应用市场, 小米应用商店, 应用宝). `en.js` claims no presence there. “支持 iPhone 和 Android” is a platform fact and fine; never tell mainland readers to get VoyageLog from a Chinese Android store or from Google Play.
- **App Store 中国区:** do not claim VoyageLog can be found in the China storefront unless `apps.apple.com/cn/app/id6758159402` shows it during your edit. Never invent 备案, ICP, compliance or 个人信息保护法 claims.
- **Maps:** mainland readers use 高德地图 and 百度地图. VoyageLog only claims that pasted Apple or Google Maps links fill a place; never say 高德 or 百度 links work.
- **Local footprint apps** (一生足迹、世界迷雾、灵敢足迹 and others): login, cloud storage, background location, free scope, price and listing status only from their own pages or the Chinese storefront (`apps.apple.com/cn/...`). If the page does not say it, write “商店页未说明” or leave it out.
- **Polarsteps:** UI languages and sign-in options come from its store page; its Google sign-in is of little use in the mainland, so say so only if the store or site shows the sign-in options.
- **Places and regions:** when counting “去过的国家”, keep the articles' “国家和地区” framing; 香港、澳门、台湾 are counted as 地区. Do not turn the counting rules into a political statement.
- **Length (CJK rules):** title max 42 characters (aim for 18 to 30 so Baidu does not truncate it), description 50 to 125, body 2,200 to 7,000 characters, FAQ answers 40 to 260. The linter counts letters and digits only, so punctuation and spaces do not count.

## Masthead lens

`MASTHEAD.md` (next to this file) sets the bar: how 《中国国家地理》, the Chinese Lonely Planet guides, 《悦游 Condé Nast Traveler》 and 少数派 check their own work, distilled into 19 questions (时效, 实测边界, 利益披露, 入选理由, 不适合谁, 不编经历 and more). Run it as a separate pass after the line edit and house-style passes, before the checks. It is a standard, never a source: borrow none of their text, lists, formats or phrasing, and never name them in an article. Where a question cannot be met (a fact you could not verify), say so in the report.

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs zh/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: read the article once more against the questions in `MASTHEAD.md` and fix what falls short.
5. `node scripts/check-blog.mjs zh/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs zh/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff --word-diff-regex=. <snapshot> content/blog/zh/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/zh.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. Then read the article once more as a skeptical reader in Chengdu who just closed three 种草 tabs: any sentence that sounds like an ad or a translated manual goes. In the report, list each competitor fact kept with its source and each one cut. Report language is English; quote Chinese examples as they appear.
