# Editorial notes: Arabic (ar)

Edited with the `blog-editor-ar` skill (procedure from `blog-editor-core/REFERENCE.md`).

Desk-wide fixes, applied to all seven articles: every straight `"…"` in the body converted to « … » (the guard flagged 14 to 24 per article); the feature name «عامك في السفر» replaced with «Year in Travel» as in `src/locales/ar.js`; all sourcing language about competitors («بحسب صفحته الرسمية»، «تذكر صفحة…»، «وفق صفحة الدعم في Google»، «تقول الأسئلة الشائعة») removed and reframed as plain statements or the vendor's own claim («يقول Polarsteps إن…»). No links added; no legacy source links were present.

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** أفضل تطبيق يوميات السفر
**Summary:** Strong lede that answers the query and an honest "wrong choice" section. The comparison table had three cells reading «غير محدد في الصفحة» and leaned on sourcing language throughout.

**What changed**
- Rebuilt the table on verified columns only: النوع، الأجهزة، واجهة عربية، كتاب مطبوع. Dropped the unverifiable "registration" and "offline" columns.
- Added market substance: Polarsteps has no Arabic interface in the Saudi App Store, Day One does; a practical test for RTL notes mixed with Latin hotel names.
- Disclosure opener «تنبيه قبل أن نبدأ:» → «للأمانة:»; sentence-initial Latin names given an Arabic head word («تطبيق VoyageLog…»، «تطبيق Day One…»).
- Unsupported generalisation «كثير من المسافرين يستخدمون أداتين» → «ولا عيب في هذا الجمع…».
- Pro paragraph now says both payment options carry the same features (per en.js).

**Facts verified**
- Polarsteps: tracking keeps going off-grid, under 4% battery per day, hardback travel book, ad-free, friends and family can follow (https://www.polarsteps.com/)
- Polarsteps in the Saudi App Store: free with Plus in-app subscriptions, no Arabic among interface languages (https://apps.apple.com/sa/app/polarsteps/id947925763); Android app exists (https://news.polarsteps.com/news/automatic-travel-tracking-app-polarsteps-launches-on-android)
- Day One: iPhone, Android, iPad, Mac, Apple Watch, web; free plus Gold; end-to-end encryption; book printing; export (https://dayoneapp.com/); Windows app (https://dayoneapp.com/guides/day-one-windows/); Arabic interface in the Saudi store (https://apps.apple.com/sa/app/day-one-journal-private-diary/id1044867788)
- Google Timeline: device data, not on Maps for computer, off by default, encrypted backup on Google servers (https://support.google.com/maps/answer/6258979)

**Removed or generalized**
- «خطة Gold مدفوعة» → «مجاني مع خطط مدفوعة»: the Saudi store also sells Silver and Premium tiers, so naming one plan was incomplete.
- Table cells «غير محدد في الصفحة» for account and offline → columns removed (unverifiable).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1182 words, updated unchanged (already 2026-10-24), title unchanged

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** الدول التي زرتها
**Summary:** Practical and neutral, with no contested-border examples. A few overclaims about what Insights shows, and backup advice that contradicted the rest of the blog.

**What changed**
- «كل سنتين: صدّر نسخة احتياطية» → «كل بضعة أشهر… ولا تنتظر التذكير الذي يظهر كل عشر رحلات»: backing up every two years was bad advice.
- Insights overclaim (most-returned city, busiest year) → only what en.js lists (days away, most visited country), the rest from the timeline.
- Doha transit case now conditions leaving the airport on the reader's passport rules (no visa generalisation).
- Car-transit example no longer names a Jordan to Saudi route; kept generic.
- «هل تُحسب إسطنبول» → «هل تُحسب تركيا» (city vs country); «فلتره» (colloquial) → «صنّفه»; «اقض» → «اقضِ»; final heading «الخلاصة: …» → «الرقم الصادق عادة لا ذاكرة».
- FAQ: «القاعدة الصادقة الشائعة» (unsupported "common") → «ومن القواعد المعقولة».

**Facts verified**
- VoyageLog Insights, maps, badges, Year in Travel, exports, backup reminder (src/locales/en.js)
- No UN member count or disputed territory is mentioned; none needed checking.

**Removed or generalized**
- Insights claims beyond en.js → narrowed (not in source).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1186 words, updated unchanged, title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** كيف تكتب يوميات رحلتك
**Summary:** Clear, warm and practical. The numbered steps were broken up: steps 5 and 6 appeared after three unnumbered sections.

**What changed**
- Structural: moved «الخطوة الخامسة» and «الخطوة السادسة» to follow step four (right after `{{cta}}`), so the six steps read in order.
- Pseudo-science «يبدأ المخ في إهمال التفاصيل» → concrete «تكون قد نسيت السعر واسم الطبق».
- Family roles «الأم تدوّن المطاعم، والأب…» → «واحد يدوّن المطاعم، وآخر…».
- Added a short reading of the Istanbul day example (what makes each note useful) to keep the length after cuts.
- Small fixes: «مع أغلب الناس» cut; «ثلاثة أو خمسة» → «من ثلاثة إلى خمسة».

**Facts verified**
- Search across title, notes, tags and trip; filters for type, rating and tags; undo for five seconds; city split and per-city sharing (src/locales/en.js)

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1155 words, updated unchanged, title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** تطبيق يوميات السفر بدون إنترنت
**Summary:** Good explanation of what "offline" really means, with a usable checklist. One FAQ made a claim about maps that en.js does not support, and the Italy example had small logic slips.

**What changed**
- FAQ on maps: no longer claims VoyageLog's map "usually depends on the internet"; now says entries, search and browsing need no connection, and opening a place in Apple or Google Maps happens in that app and needs a connection unless the area was downloaded.
- Italy example: pizza at Da Michele moved from «صباحاً» to «ظهراً»; search for «بيتزا» now finds the two pizza places, not "a café in Milan".
- Photo paragraph: removed the illogical free-tier sentence; «حدّ أعلى لا هدف».
- «هذا المقال يشرح» → «نشرح هنا»; regional generalisation «من الخليج والشام» cut; «ماذا لو...» heading → «ماذا لو؟»; «يتظاهر بذلك» softened; Pro list matches en.js (city lists and best-of lists).
- Grammar: «أن لا» → «ألّا»، «لا يوجد خلاصة» → «لا توجد خلاصة».

**Facts verified**
- Fully offline, no account, data only on device, no server, exports JSON/Excel/ZIP/PDF and image, backup reminder every ten trips, iPhone and Android (src/locales/en.js)

**Removed or generalized**
- VoyageLog map needing internet → removed (not in en.js; en.js says the app works completely offline).

**Still uncertain, for the owner**
- Whether VoyageLog's trip map renders map tiles without a connection is not stated in en.js. The article now avoids the question; worth confirming for a future FAQ.

**Checks:** check-blog all clear, guard clean, 1138 words, updated unchanged, title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** ملاحظات السفر
**Summary:** The central idea is explained well. One FAQ stated a false app rule, and the Casablanca example rated a mosque and used a bar.

**What changed**
- FAQ: «ويظهر التقييم في الأماكن فقط» (false: in the app both types can carry a rating) → «والتقييم اختياري فتترك اللحظة بلا نجوم».
- Casablanca example: «مسجد الحسن الثاني، تقييم 5» and «مقهى ريك» (a bar-restaurant) → «حي الحبوس» and «مقهى على كورنيش عين الذئاب»; the adhan kept as a moment, phrased respectfully.
- Long-trip paragraph no longer describes a UI ("places on one side, moments on the other") that en.js does not claim; now uses the type filter.
- «رتّب الأماكن بحسب التقييم» → «اعرض الأماكن الأعلى تقييماً بمرشح التقييم» (sorting by rating is not claimed; the filter is).
- «الإفطار» → «الفطور» (avoids the Ramadan reading); «فقد فقد» → «فقد خسر»; question heading given «؟»; «غداء رائع» → «غداء طيب».

**Facts verified**
- Entry fields, rating out of five, map links that fill the place, filters for type/rating/tags, best-of lists shared as image or PDF (src/locales/en.js)

**Removed or generalized**
- "Rating shows on places only" → corrected (contradicted by en.js).
- Hassan II Mosque morning-tour tip → removed (religious site rated; tour detail unverified).

**Still uncertain, for the owner**
- Habous and the Ain Diab corniche are well-known Casablanca districts, used only as sample notes; I did not find them on an official Moroccan tourism page in this session.

**Checks:** check-blog all clear, guard clean, 1136 words, updated unchanged, title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** بدائل Polarsteps
**Summary:** Fair to Polarsteps, with a clear "when you don't need an alternative" section. Competitor facts were correct but almost every one was framed as a citation of a page.

**What changed**
- All «بحسب صفحته / تذكر الصفحة / تقول صفحة الدعم» framing → plain statements or «يقول Polarsteps إن…».
- Added verified market facts: Polarsteps is free with a Plus subscription in the Saudi App Store and has no Arabic interface; Day One has an Arabic interface; VoyageLog is in 30+ languages with RTL Arabic. Added an Arabic-interface question to the pre-install checklist.
- Lede no longer promises a comparison of trackers it does not make; «هذا المقال» removed.
- «مسارًا» → «مساراً»; «تقول أن» → «تقول إن» (twice); «لا يصل إلى كل مكان في حقيبتك» → «يشغل حيزاً في حقيبتك»; «وإن كنت» → «أو كنت».

**Facts verified**
- Same Polarsteps, Day One and Google Timeline sources as in best-travel-journal-apps above (polarsteps.com, apps.apple.com/sa, dayoneapp.com, support.google.com/maps/answer/6258979).

**Removed or generalized**
- «خطة Gold مدفوعة» → «مجاني مع خطط مدفوعة» (several paid tiers are listed).
- «تطبيق لتخطيط الرحلات وتتبعها واسترجاعها» → «لتخطيط الرحلات وتتبعها» ("relive" not found as such on the page).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1140 words, updated unchanged, title unchanged

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** طباعة يوميات السفر
**Summary:** Useful, honest about VoyageLog not printing books, with good RTL printing advice. Sourcing language on competitors, an aperitivo example, and one claim that every page exports ready-made.

**What changed**
- Competitor print services restated without «بحسب صفحة…»; added "check the service ships to your country at all".
- «حي بريرا وقت الأبيريتيف» → «فطور في حي بريرا» (cultural fit).
- Numbers page: «المدن والأيام والأماكن، مأخوذة من الإحصاءات» → cities, days and photos from Insights or the trip recap card (Insights does not count places).
- «هذه الصفحات كلها قابلة للتصدير» → «أغلب هذه الصفحات» (cover and last page are made by hand).
- «وارتّب الأماكن بحسب التقييم» → filter by rating; «بضغطة زر» cut; «قمت بها» calque removed.

**Facts verified**
- Polarsteps hardback book (https://www.polarsteps.com/); Day One book printing (https://dayoneapp.com/)
- VoyageLog exports PDF and image for a trip, city or best-of list; ZIP with photos and videos; no print service claimed (src/locales/en.js)

**Removed or generalized**
- none beyond the overclaims above

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1128 words, updated unchanged, title unchanged
