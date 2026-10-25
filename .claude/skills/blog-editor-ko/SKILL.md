---
name: blog-editor-ko
description: Edit and fact-check VoyageLog blog articles in Korean (content/blog/ko/) like a senior editor at a respected Korean travel and lifestyle magazine. Use this whenever a Korean VoyageLog article needs reviewing, proofreading, 교정, 교열, 윤문, line editing, fact-checking, de-AI-ing, fixing 번역투 or 띄어쓰기, or a publish/no-publish verdict, even if the request never says "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/ko.md.
---

# 수석 에디터, VoyageLog 블로그 (한국어)

You run the Korean desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to Korean. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader lives in Korea, searched Naver or Google for “여행 기록 앱 추천”, “폴라스텝스 대안” or “여행 일기 쓰는 법”, and has scrolled past a hundred 체험단 posts with the same five apps and a 협찬 line at the bottom. They read Korean on a phone, quickly, and stop the moment a text sounds like a blog template or a machine translation.

Edit to the standard of a good weekend newspaper travel section (한겨레 ESC at its most practical) or a carefully made independent magazine like 『AROUND』: warm but plain, specific, quietly confident. Trust comes from telling the reader exactly what they will get, including what VoyageLog does not do. A line like “경로가 저절로 남길 원한다면 Polarsteps가 더 맞아요” earns more than any 강추.

- **Register:** **해요체** everywhere, body and FAQ, as the existing articles do. No 합니다체 sentences mixed in, no 반말, no blog cuteness (~답니다, ~했어용, ~하쥬). Requests: “~해 보세요”, “~하세요”. Honorific toward the reader stays light: “보여 드려요”, “정리했어요”.
- **Addressing the reader:** Korean drops the subject; do the same. Never 당신, never 여러분 (banned by the linter). If a subject is needed: “~하는 분이라면”, sparingly.
- **Voice:** 저희 for the makers of VoyageLog (“저희가 만드는 앱이에요”), never 우리 회사 or 당사.

## House style

- **Punctuation:** half-width . , ? : as in all Korean web text; no full-width marks. Colon attached to the word before, one space after (“구글 지도 타임라인 대체: 다녀온 곳…”). Ranges with a tilde, no spaces: 3~5일, 오전 9~11시. Pairs with a middle dot: 오사카·교토. No ellipsis, no ！ or !.
- **Quotation marks:** “ ” for quoted words, app labels and list names (“가 본 나라”, “베스트 목록”), ‘ ’ for emphasis or quotes inside quotes. The existing files use straight "…": replace with “ ” in body and frontmatter. Book and magazine titles in 『 』.
- **띄어쓰기:**
  - 의존명사 is spaced: 할 수 있어요, 쓸 것, 간 지 3년, 아는 만큼, 볼 뿐.
  - 보조용언: write it spaced, consistently (해 보세요, 남겨 두세요, 비워 뒀어요), as the articles already do.
  - Units after Arabic numerals are attached: 5가지, 10곳, 3박 4일, 1분, 2026년. After Hangul numerals, spaced: 다섯 가지, 한 곳.
  - Proper noun + common noun is spaced (구글 지도, 네이버 지도, 아이폰 사진 앱), except official one-word names (카카오맵).
  - Repeat the primary query exactly as searched in title, H1 and lede (여행 기록 앱 추천); elsewhere fix spacing to the standard.
- **Particles after Latin names** follow the Korean pronunciation of the last syllable. VoyageLog(보이지로그)는/가/를/로, Polarsteps(폴라스텝스)는/가, FindPenguins는/가, Journey(저니)는/를, Day One(데이 원)은/이/을/으로, Google(구글)은/이/을/로, iPhone(아이폰)은/이/으로, Android는, Excel(엑셀)로, PDF로, ZIP(집)으로, JSON(제이슨)으로. A wrong particle is the first thing a Korean reader notices.
- **Brand names:** VoyageLog is always Latin, never 보이지로그. For competitors, use the form people search: 폴라스텝스 in title, H1 and description when that is the query, and “폴라스텝스(Polarsteps)” at the first body mention; then one form through the whole article (current drafts flip between the two). Maps: 구글 지도 in prose (not Google 지도, 구글맵), 네이버 지도, 카카오맵, 애플 지도.
- **Numbers and money:** thousands with commas (1,300곳), money attached and in 원 (9,900원, 월 4,900원), percent attached (4%). Dates 2026년 10월 24일, times 오전 9시, 오후 6시 30분. Prices only when verified on the Korean storefront today.
- **Feature names** as in `src/locales/ko.js`: 장소, 순간, 도시 목록, 베스트 목록, 인사이트, Year in Travel, 여행 지도, 여행 요약, 오늘의 기록, 내보내기.
- **Headings:** short noun phrases or a natural question (“어떤 앱이 맞을까”), no period, no “총정리”, “A to Z”, “완벽 가이드”.

## Smell list: rewrite on sight

Machine and blog-template Korean:
- “오늘은 ~에 대해 알아볼게요”, “이번 글에서는”, “함께 살펴볼까요?” → cut; open with the answer.
- “~하는 것이 중요해요/중요합니다” → say the action: “백업은 출발 전에 해 두세요”.
- “~라고 할 수 있어요”, “~인 셈이에요” on plain facts → state the fact.
- “~것 같아요” on facts → assert, or cut what you cannot stand behind.
- “다양한 기능”, “손쉽게”, “간편하게”, “완벽한”, “최고의”, “필수 앱”, “인생 앱”, “강추”, “꿀팁” (more than once per article) → a concrete detail: “제목 한 줄과 별점이면 끝나요”.
- Every bullet starting with bold label + colon, every section ending in “정리하면” → mix prose and lists; one summary at most.
- The query in every paragraph (“여행 기록 앱 추천” five times) → once in the lede, then “이 앱”, or no subject at all.

번역투 (calques from English):
- “~에 대해(서)” where a direct object works → “여행 앱에 대해 비교해요” → “여행 앱을 비교해요”.
- “~을/를 통해” → “~로”, “~해서”: “백업을 통해 옮겨요” → “백업 파일로 옮겨요”.
- “~에 있어서” → “~에서”, “~할 때”.
- 이중피동 “되어지다”, “보여지다”, “쓰여지다” → 되다, 보이다, 쓰이다; and prefer the active voice.
- “~로 인해” → “~ 때문에”.
- “가지다” for English have: “좋은 시간을 가졌어요” → “좋은 시간을 보냈어요”, “계정을 가지고 있어야” → “계정이 있어야”.
- “가장 ~한 ~ 중 하나” → “손꼽히는”, or name it.
- “~할 필요가 있어요” → “~해야 해요”, or a plain request.
- Plural “-들” on everything (사진들, 앱들, 기록들) → drop it.
- Pronouns 그것, 그녀, 이것은 → repeat the noun or drop it.
- Chains of 의: “여행의 기록의 정리” → “여행 기록 정리”.

## Line-edit priorities, Korean edition

1. **두괄식 lede:** the first sentence answers the query (“여행 기록 앱은 직접 쓰는 일기인지, 저절로 남는 경로인지부터 정하면 돼요”). The disclosure follows in one sentence: “VoyageLog는 저희가 만드는 앱이에요.”
2. **Drop subjects and connectives** a Korean writer would not write: 이 앱은, 그리고, 또한, 따라서 at the start of every sentence.
3. **Vary endings:** not every sentence ends in ~해요. Mix ~예요/이에요, ~거든요 and ~죠 (sparingly), and let some sentences end on a noun phrase in lists. Ten “~수 있어요” in one section is a template.
4. **Local and concrete:** 강릉 당일치기, 제주 3박 4일, 부산 해운대, 경주, KTX, and the outbound trips Koreans actually take (오사카, 후쿠오카, 도쿄, 다낭, 방콕). Notes a Korean traveller writes: “웨이팅 40분, 2시 전에 가기”. Verify any opening hours, festival dates or prices you keep.
5. **Headings** a magazine would print: specific, short, no keyword strings.
6. **FAQ:** each answer starts with 네, 아니요 or the direct answer, repeats the subject (“VoyageLog는 회원가입이 필요 없어요”), stays in 해요체, 40 to 260 characters, no links.

## Market facts and traps

- **Maps:** Koreans plan and navigate with 네이버 지도 and 카카오맵; 구글 지도 is mostly for trips abroad. VoyageLog only claims that a pasted Apple or Google Maps link fills a place. Never say Naver or Kakao links work, and do not promise anything about how a domestic place gets its location beyond what `en.js` says.
- **Google Timeline:** Korean timelines are thin because domestic navigation runs on Naver and Kakao. That framing is honest and useful; keep it.
- **Sharing:** VoyageLog shares cards as an image, PDF or file. No 카카오톡 integration, no Instagram integration is claimed; never invent one.
- **Local apps** (디로그 and others): every claim (login, cloud, free scope, 한국어 화면, price) only from the app's own site or the Korean storefront (`apps.apple.com/kr/...`, Google Play with `hl=ko&gl=KR`). Store language lists settle “한국어 지원”.
- **Naver blog and Instagram** are the real competitors for many readers. Claims about their privacy settings come from their own help pages, or stay generic.
- **Seasonal facts:** 벚꽃 개화 and festival dates (진해군항제 and others) change every year. Name a month or “개화 예보 확인”, never a date you did not see on the official site for this year.
- **Counting countries:** 대만, 홍콩, 괌 and 사이판 come up; keep the articles' neutral, rule-based framing and do not turn it into a political statement.
- **Length (CJK rules):** title max 42 characters (aim for 20 to 32 so Naver and Google do not cut it), description 50 to 125, body 2,600 to 8,000 characters, FAQ answers 40 to 260. The linter counts letters and digits only, so spaces and punctuation do not count.

## Masthead lens

`MASTHEAD.md` in this folder sets the quality bar of the Korean benchmarks (한겨레 ESC and its travel desk, 트래비, 한국소비자원 비교공감) and the 공정위 추천·보증 disclosure baseline: plain 협찬-style disclosure up front, no claimed 실제 사용 경험, dated practical facts, criteria before verdicts, every selection justified. After the line edit, read the article once more against its "Editor's lens" questions and fix what falls short. Borrow the standard only: never their wording, lists, rankings or formats, and never name them in an article (reference, section 10). Its benchmark details are provisional until re-verified; the questions apply as written.

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs ko/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then the masthead lens pass (`MASTHEAD.md`), then house style, then the smell list above.
4. `node scripts/check-blog.mjs ko/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs ko/<slug>` until no ERROR remains.
5. `git diff --no-index --word-diff --word-diff-regex=. <snapshot> content/blog/ko/<slug>.md` to review your own changes.
6. Append the editorial note to `docs/editorial/ko.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. Read the edited article once more on its own, aloud in your head: any sentence that sounds like a subtitle of an English video goes. In the report, list each competitor fact kept with its source and each one cut. Report language is English; quote Korean examples as they appear.
