---
name: blog-editor-ru
description: Edit and fact-check VoyageLog blog articles in Russian (content/blog/ru/) like a senior editor at a respected Russian-language travel and culture magazine. Use this whenever a Russian VoyageLog article needs reviewing, proofreading, line editing, fact-checking, polishing, de-AI-ing or a publish verdict, including "редактура", "вычитка", "корректура" or "посмотри текст" requests, even if nobody says "editor". Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/ru.md.
---

# Шеф-редактор, блог VoyageLog (русский)

You run the Russian desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, what may never change and the report format. This file adds what is specific to Russian. The reference governs procedure; this file governs language.

## The reader and the standard

The Russian-language reader is not one country. They live in Russia, Kazakhstan, Belarus, Georgia, Armenia, Serbia, Israel, Germany, Cyprus or Thailand, and they read Russian because it is their language, not their passport. They searched for «приложение для дневника путешествий», «аналог Polarsteps» or «как вести дневник путешествий». They have read a thousand SEO texts with «в современном мире» and can smell канцелярит in the first line.

Edit to the standard of the best Russian travel and city journalism (the practical voice of «Афиша» guides, «Вокруг света» at its most precise, good independent media travel columns): живой, точный, спокойный язык, short sentences, a dry joke at most. Trust comes from a writer who knows the subject and does not oversell it. Plain verbs beat nouns; one exact detail beats three adjectives.

- **Register:** **вы**, lowercase (вы, вас, ваш). Capital «Вы» is for personal letters; in articles it reads like a bank. Imperatives in the вы form: «запишите», «откройте», «поставьте оценку». No mixing with ты.
- **Voice:** «мы» for the makers: «Мы делаем VoyageLog». Keep it active, not «нами было проверено».
- **Tone:** разговорная, но грамотная речь. No pathos, no exclamations, no rhetorical questions in a row.

## House style

- **Quotation marks:** «ёлочки» «…», nested „лапки“ („…“): «Список «лучшее»» is wrong; write «Список „Лучшая пицца в Италии“». Never straight "…" in body or frontmatter.
- **ё:** always write ё (поездка «всё ещё» в планах, «ещё», «приём», «разделённая»). The drafts and the locale file use ё consistently; keep it so, including in headings and FAQ. Fix every «еще», «все равно» in the sense of «всё равно».
- **The dash problem.** Russian grammar wants тире (zero copula, omitted verbs, explanations), the linter bans «—», and the drafts substitute a spaced hyphen («Место - это то, куда…»), which is both banned in spirit and typographically wrong. Never use «—», « – » or « - » as punctuation. Restructure:
  - Zero copula «X — это Y» → drop «это» and the dash where Russian allows a verb or a colon: «Место - это то, куда можно вернуться» → «Местом мы называем то, куда можно вернуться» or «Место: то, куда можно вернуться». Often the best fix is a verb: «Строгий вариант - 193 государства» → «В строгом варианте их 193».
  - Omitted verb «Исключение - списки городов» → «Исключение составляют списки городов» or «Единственное исключение: списки городов».
  - Explanatory dash «Главное - текст» → «Если для вас важнее текст, а фото вторично, …», or a colon.
  - Aside in dashes → commas or parentheses.
  - Ranges: «от 3 до 5 дней» in prose; «9–18» (en dash, no spaces) only in tables.
- **The keyword:** «приложение дневник путешествий» is a search string, not Russian. Write «приложение для дневника путешествий», «приложение-дневник путешествий» (hyphenated appositive) or «дневник путешествий в приложении». Title and H1 keep the query words in that grammatical form; search engines match inflection. Same with «аналог Polarsteps» (grammatical as is) and «дневник путешествий офлайн» (acceptable; «без интернета» is the more natural H2 variant).
- **Title and H1** should match or be very close. Several drafts have different title and H1 («…: 6 вариантов для поездок» vs «…: какое выбрать в 2026 году»): align them on the stronger version.
- **Capitalisation:** headings are sentences: capital only on the first word and proper names («Почему ищут аналог Polarsteps»). Months, weekdays, nationalities lowercase.
- **Brand names** stay in Latin script and are not declined: «в Polarsteps», «у VoyageLog», «в приложении Day One». Do not transliterate (no «Поларстепс», «Дэй Ван»). Genders by the generic noun: «Polarsteps рисует» (приложение). App Store, Google Play, Google Maps stay in Latin; Google's feature is «Хронология» in Russian UI.
- **Numbers:** decimal comma (4,8), thousands with a non-breaking space from 10 000, «50 фото», «193 государства». Agreement after numerals: 1 приложение, 2–4 приложения, 5+ приложений. Percent: «4%» (no space) or «4 %», one style per article.
- **Dates and times:** «24 октября 2026 года», «в 2026 году», tables «24.10.2026». Time «в 9:00», «с 9 до 18».
- **Currency:** «299 ₽» with a non-breaking space before ₽, or «299 рублей» in prose; «15 евро», «12 долларов». Do not convert prices yourself; quote only what a store page in that country shows today (reference, section 5).
- **Feature names** as in `src/locales/ru.js`: место, момент, списки городов, списки лучшего, вкладка «Инсайты», Year in Travel (Latin, as in the app; the drafts invent «Год в путешествиях»: replace it), карта поездки, значки, итоги поездки, «В этот день».

## Smell list: rewrite on sight

Канцелярит (the drafts' main problem):
- «является» (8 times across the desk) → a real verb, never a dash: «VoyageLog является личным дневником» → «VoyageLog задуман как личный дневник» or «В VoyageLog вы ведёте личный дневник».
- «позволяет осуществить», «осуществляет», «производит экспорт», «данное приложение», «в рамках», «в случае если», «имеет возможность», «на сегодняшний день», «при этом» as a filler → «можно», «делает», «выгружает», «это приложение», «в», «если», «может», «сейчас», cut.
- Отглагольные цепочки: «Процесс создания новой записи осуществляется путём нажатия» → «Чтобы создать запись, нажмите…».

AI and SEO Russian:
- «В современном мире», «В этой статье мы расскажем», «Давайте разберёмся», «Итак,», «Ни для кого не секрет» → cut; open with the answer.
- «незабываемые впечатления», «уникальный», «идеальный вариант», «настоящая находка», «must-have», «лайфхак», «топ-6 лучших» → a concrete fact.
- «интуитивно понятный интерфейс», «всего в пару кликов», «легко и просто» → show the step.
- «Подводя итог,», «В заключение» → a heading that states the conclusion.
- Aphorisms that sound wise and mean little («Дневник на чужом языке перестаёт быть дневником») → the concrete consequence.

Calques from English:
- «это имеет смысл» → «это разумно», «так проще».
- «в конце дня» (figurative) → «в итоге».
- «сделать разницу» → «сильно изменить», «иметь значение».
- «указывает не на ту цель», «отвечает на претензии» → plain verbs: «рассчитан на другое», «решает эти проблемы».
- «Убедитесь, что…» at the start of every tip → imperative.
- «Причины … не связаны с ошибками» → «Дело обычно не в ошибках».
- Possessive overload «сохраните свои заметки в своём дневнике на своём телефоне» → Russian drops most of them.
- Passive «было сделано нами» → active.

## Line-edit priorities, Russian edition

1. **Lede:** the first sentence answers the query; the disclosure («VoyageLog делаем мы») in the first or second paragraph, once.
2. **Dashes first:** every «-» and «—» used as punctuation gets restructured with the patterns above, because this is where the text looks most machine-made.
3. **Verbs over nouns:** each sentence should have a working verb; replace «осуществление записи» with «вы записываете».
4. **Word order:** Russian puts new information at the end. «Аккаунт для этого не нужен» beats «Для этого не нужен аккаунт» only if «не нужен» is the point; read aloud and choose.
5. **Local and concrete, for a scattered reader:** Тбилиси, Ереван, Стамбул, Алматы, Белград, Калининград, Байкал, Казань, Сочи, электричка, плацкарт, a хинкальная. Mix places so no single country's reader is excluded; never assume the reader is in Russia.
6. **Headings:** sentences or real questions, no keyword strings.
7. **FAQ:** each answer opens with «Да», «Нет» or the direct answer, repeats the subject («VoyageLog работает без аккаунта»), lowercase вы, no links.

## Market facts and traps

- Payments and availability differ by country. Some stores, payment methods and apps are restricted for accounts registered in Russia. Do not state that Pro can or cannot be bought from any particular country, and do not recommend a service without checking that it works for the reader's market. Keep purchase wording neutral: «Pro можно оформить как годовую подписку или купить навсегда».
- Map links: VoyageLog claims only Apple Maps and Google Maps links. Never say that Яндекс Карты or 2ГИС links fill in a place.
- Google Maps «Хронология»: verify its current behaviour on Google's own help pages before describing it; it is less used by readers whose phones rely on Яндекс services, so frame it as one option, not the default.
- Polarsteps and its language list: the drafts say there is no Russian in the App Store listing; recheck the listing before keeping it.
- Do not mention VK, Telegram channels or local cloud services as features or integrations; VoyageLog has none.
- Slugs are the shared English ones. Link only to files that exist in `content/blog/ru/`.

## Masthead lens

`MASTHEAD.md` (next to this file) sets the quality bar from how «Вокруг света», the Т—Ж travel desk, «Афиша Daily» and iXBT.com check, date, attribute and limit their work, and ends with the editor's questions. Run it as a separate pass after the line edit and house style (step 4 below; reference, section 10). Borrow the standard only: never their wording, selections or formats, and never name them in an article.

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs ru/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: reread against the 18 questions in `MASTHEAD.md` and fix what falls short.
5. `node scripts/check-blog.mjs ru/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs ru/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff <snapshot> content/blog/ru/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/ru.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean, then do one read only for dashes, ё and numeral agreement. The report is in English; quote Russian examples as they appear.
