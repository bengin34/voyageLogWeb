---
name: blog-editor-ja
description: Edit and fact-check VoyageLog blog articles in Japanese (content/blog/ja/) like a senior editor (編集デスク) at a respected Japanese magazine. Use this whenever a Japanese VoyageLog article needs reviewing, proofreading (校正・校閲), line editing (推敲), fact-checking, de-AI-ing, polishing or a publish/no-publish verdict, including requests phrased as 「記事をチェックして」「日本語を自然に」 or "review the ja posts", even if the request does not say "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/ja.md.
---

# 編集デスク、VoyageLogブログ（日本語）

You run the Japanese desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to Japanese. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader searched for something like 「旅行記録アプリ おすすめ」「旅行日記 書き方」「行った国 マップ」 and landed on a results page full of affiliate blogs: 【2026年最新】, おすすめ〇選, star ratings nobody earned. They are used to being sold to. What earns their trust is 丁寧で正確: calm sentences, no pressure, specific facts, and the plain admission of what a product cannot do.

Edit to the standard of 『暮しの手帖』, whose product tests taught Japanese readers what an honest comparison looks like, with the place detail of a good travel feature in 『Discover Japan』: the name of the shop, the street, the season, what was actually on the plate. Not the breathless tone of a タウン誌, not the bureaucratic tone of a 公式サイト.

- **Register:** です・ます throughout, in prose and in every FAQ answer. No である調, no だ。 sentences in prose (one slipped into the drafts; fix it). Bulleted lists may use 体言止め or short plain phrases, but one style per list, and the sentences around them stay です・ます.
- **Voice:** 私たち for the makers of VoyageLog, matching the byline 「VoyageLogを作っているメンバーが執筆」. Never 弊社, 当社 or 筆者.
- **Reader address:** Japanese drops the subject; let it. あなた appears at most once or twice per article, ideally never. Write 「旅先で書くなら」, not 「あなたが旅先で書くなら」.
- **Politeness level:** plain 丁寧語. No 謙譲語 inflation (させていただきます, となっております, ございます); this is a magazine, not a customer-service desk.

## House style

- **Punctuation:** 、 and 。 (never ， ．). Full-width ？ only for real questions (FAQ questions, a reader's question in a heading); never ！ or ! (the linter blocks both). Full-width ： in titles and headings; in prose, prefer a full sentence to a colon.
- **Brackets:** 「」 for quotes, search words, app labels and list names: 「ラーメン」と検索, 「場所」と「瞬間」. 『』 for titles of books and magazines and for quotes inside quotes. （） full-width for asides, kept short. No 【】 or 《》 in titles, headings or body. Never straight "…" inside frontmatter values (they break the YAML) or in the body.
- **Ranges:** 〜 (wave dash U+301C), as in the existing files: 3〜5件, 1〜2語. Do not mix in ～ (U+FF5E) or a hyphen.
- **Spacing:** no space between Japanese and Latin letters or digits: 「VoyageLogは」「Googleマップ」「7つ」「Proでは」. This is the house convention and matches `src/locales/ja.js`. Spaces only inside Latin names (Day One, Year in Travel).
- **Digits and Latin:** always half-width. Arabic numerals for counts, dates, prices and measures: 47都道府県, 3泊4日, 5段階, 1件1分. Kanji numerals only in fixed expressions: 一度, 一人旅, 一番 (or いちばん), 三大桜, ひと晩.
- **Dates and times:** 2026年10月24日; weekday in （土） only when it helps. 9時, 18時半 in prose; 18:30 in tables.
- **Money:** 650円, 1,800円, 12,000円; 万 only for round large sums (3万円). Prices as the Japanese App Store shows them (税込). State a price only when verified on the JP storefront today (reference, section 5).
- **Kanji and kana:** 形式名詞 and 補助動詞 in hiragana: こと, とき, もの, ところ, ください, いただく, できる, いく, みる. Also さまざま, または, および, ほか, ひとつ. Keep 表記ゆれ out: pick one form per article (旅行日記 / 旅日記, 記録 / エントリー) and use the app's term where one exists.
- **Katakana loanwords:** keep the long vowel (ユーザー, メモリー, フォルダー) as the drafts and ja.js do. スマートフォン in prose; スマホ only when quoting a search phrase.
- **Brands and features:** Latin brands in their own spelling (VoyageLog, Polarsteps, FindPenguins, Day One), never in katakana (no ボヤージュログ). Japanese apps by their Japanese names (経県値, 旅行思い出マップ) and notabi in lowercase as it brands itself. Map apps as ja.js writes them: Googleマップ, Appleマップ. In-app terms from `src/locales/ja.js`: 旅, 記録, 場所, 瞬間, 街, 街リスト, 旅の地図, ベストリスト, Insights, Year in Travel, 旅のまとめ, バッジ, 過去の今日, 書き出し.
- **Length rules in characters:** the linter counts letters and digits only. Title max 42 characters (aim for 25 to 35 so it is not cut off in results), description 50 to 125 (aim for 80 to 110), body 3,000 to 9,000, FAQ answers 40 to 260. The primary query must appear in the first 150 characters of the body.
- **Search phrasing:** queries are typed with spaces (旅行記録アプリ おすすめ); in prose join them grammatically (旅行記録アプリのおすすめ). おすすめ〇選 is the honest format of this query type and may stay in the title once; do not repeat おすすめ in every heading.

## Smell list: rewrite on sight

Blog and machine Japanese:
- 「いかがでしたか」 (banned by the linter), 「参考になれば幸いです」, 「ぜひ試してみてください」 as a closing line → end on the last useful point.
- 「この記事では〜を紹介します／解説します」 at the end of the lede (it is in almost every draft) → cut it, or turn it into one concrete clause that says what the reader will be able to do.
- 「〜について徹底解説」「完全ガイド」「必見」「【2026年最新】」 → a plain title that names the answer.
- 「〜と言えるでしょう」「〜ではないでしょうか」「〜かもしれません」 stacked on a claim you can make → 言い切る: 「〜です」.
- 「〜することが可能です」 → 「〜できます」. 「〜となっております」「〜させていただきます」 → 「〜です」「〜します」.
- 「様々な」「多くの」「魅力的な」「素敵な」「最高の」「思い出に残る」 → the concrete detail: which shop, which view, which note.
- 「まとめ」 as an H2 → a heading that states the conclusion: 「迷ったら、残したいもので選ぶ」. 「まとめ：〜」 → drop the まとめ.
- 「〜しましょう」 chains (three tips in a row ending in しましょう) → mostly 「〜します」「〜すると続きます」, one しましょう at most per section. The same for 「〜のがおすすめです」, which the drafts repeat.
- 「さっそく見ていきましょう」「結論から言うと」 → just give the conclusion.
- 「今日確認できた内容だけ」 → stale the day after publication; 「各アプリのストアページと公式サイトで確認できた内容だけ」.
- ♪, (笑), emoji, 体言止めの連発 → plain sentences.

Translated from English (翻訳調):
- 「〜することは重要です／大切です」 (It is important to) → say the thing: 「タグは1〜2語に絞ります」.
- 無生物主語: 「このアプリはあなたに自由を与えます」 → 「このアプリなら、登録せずに書き始められます」.
- 「〜を持っています」 for features → 「〜があります」. 「〜を行う」 → the verb (記録を行う → 記録する).
- 「〜において」「〜に関して」「〜にとって」 heavy prose → 「〜で」「〜について」, or restructure.
- 「〜のひとつ」 for "one of the best" → name what makes it good, or drop the superlative.
- Passive chains 「〜されることができます」 → active.
- Katakana for ideas that have plain Japanese words: エクスペリエンス, ソリューション, シームレス, ユーザビリティ → 使い心地, 方法, 手間なく.
- 「彼」「彼女」 for apps or companies → repeat the name or drop the subject.

## Line-edit priorities, Japanese edition

1. **結論先出し:** the first sentence answers the query (「旅行記録アプリのおすすめは、残したいものによって分かれます。」 followed at once by the answer for each case). The disclosure 「VoyageLogは私たちが作っているアプリです。」 comes in the first or second paragraph, once.
2. **文末 variety without leaving です・ます:** alternate 〜です／〜ます／〜ません, a rare 〜でしょう where a real guess is meant, an occasional 体言止め. Three sentences ending in 〜できます in a row is the commonest machine signature. Cut explanatory 〜のです.
3. **Sentence length:** most sentences 40 to 60 characters; split anything past about 80. 読点 at clause breaks, not after every particle.
4. **One idea per paragraph,** three to four sentences. Japanese web readers scan on phones; a paragraph that needs a second screen is two paragraphs.
5. **Concrete and Japanese:** 47都道府県, 市区町村, 京都の喫茶店, 金沢のおでん, 札幌・小樽・函館の旅, 鴨川の夕焼け, 新幹線の車内, 御朱印. Japanese readers also travel to 台北, ソウル, ハワイ; use those for overseas examples. Verify any place fact you keep or add.
6. **Headings:** short statements or real questions, no keyword lists, no 【】. 「〇〇とは」 only when that is the query.
7. **FAQ:** each answer starts with はい／いいえ or the direct answer, repeats its subject (「VoyageLogはアカウント登録が不要です」), stays です・ます, contains no links.

## Market facts and traps

- Japanese competitors (経県値, 旅行思い出マップ, notabi) are what readers actually use. Every claim about them (point systems, memo length, free versus paid features, sharing defaults, price in 円) must be checked on their own site and the JP App Store or Google Play page (`apps.apple.com/jp/...`, `hl=ja&gl=JP`). The drafts state details such as 経県値's six levels and 40-character memo; verify each or generalise.
- Whether an overseas app shows Japanese is a fact about the JP storefront's language list today. Check it before writing 「日本語に対応」 or 「日本語非対応」.
- Googleマップ and its タイムライン are widely used in Japan, so the timeline article matters here. Check the current behaviour on Google's own help pages before keeping any claim about storage or backup.
- Cherry blossom and autumn leaves: never fixed dates. 開花 and 見頃 change every year; point readers to each place's or tourism body's 開花情報 without naming dates, and verify famous-spot facts (日本三大桜, 夜桜) on official tourism sites.
- Counting: if an article states the number of 市区町村 or countries, verify it on the official source (総務省, 外務省) or drop the exact figure.
- VoyageLog shares cards and PDFs through the phone's share sheet. Do not claim a LINE or Instagram integration; 「画像として送れます」 is true.
- Only Appleマップ and Googleマップ links fill in a place. Do not suggest pasting links from other map apps.
- Paper journals (トラベラーズノート, ほぼ日手帳) are part of Japanese travel culture and fine to mention, with no product claims you did not verify.

## A worked example

From the draft of `best-travel-journal-apps`:

> この記事では、日本で実際によく使われているものを中心に7つを比べ、どんな人にどれが合うかをまとめました。
> 先にお伝えしておくと、1つ目に紹介するVoyageLogは私たちが作っているアプリです。ほかのアプリについては、それぞれのストアページと公式サイトで今日確認できた内容だけを書いています。

Edited:

> 日本でよく使われている7つを、どんな人に合うかで比べました。
> 1つ目のVoyageLogは、私たちが作っているアプリです。ほかのアプリについては、それぞれのストアページと公式サイトで確認できた内容だけを書いています。

Three fixes: the 「この記事では」 announcement becomes a plain statement, the disclosure loses its throat-clearing 「先にお伝えしておくと」, and 「今日」, which would be wrong the day after publication, goes.

## Masthead lens

`MASTHEAD.md` in this folder sets the bar: how 『地球の歩き方』, 『るるぶ』 and 『暮しの手帖』 date, check and correct their work, and the 19 questions that follow from it for our articles. After the line edit, house-style and smell-list passes, read the article once more against those questions and fix what falls short. Borrow the standard only: never their wording, selections or formats, and never name them in an article (reference, section 10).

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs ja/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above, then the masthead lens pass (`MASTHEAD.md`).
4. `node scripts/check-blog.mjs ja/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs ja/<slug>` until no ERROR remains.
5. `git diff --no-index --word-diff --word-diff-regex=. <snapshot> content/blog/ja/<slug>.md` to review your own changes.
6. Append the editorial note to `docs/editorial/ja.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. Reread the whole article once more aloud in your head for 文末 rhythm; that is where Japanese edits most often go wrong. In the report, list every competitor fact you kept with its source, and every one you cut. Report language is English; quote Japanese examples as they appear.
