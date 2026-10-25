# Editorial notes: Spanish (es)

Edited with the `blog-editor-es` skill (procedure from `.claude/skills/blog-editor-core/REFERENCE.md`).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** mejores apps de diario de viaje
**Summary:** A well-structured comparison with an honest framing (private journal vs. route map) and good local examples. The problems were sourcing language throughout («según su centro de ayuda», «su página dice»), a wrong plan name for Day One, a few overclaims and straight quotes.

**What changed**
- Removed every «según su centro de ayuda / su página dice / indica en su web» framing; facts now read as plain statements or as the vendor's own claim («FindPenguins dice que…»).
- FAQ 1 «la opción más conocida» (unverifiable superlative) → «la opción de referencia». Lede: «casi todas las malas reseñas vienen de…» → «muchas decepciones vienen de…»; «las apps que más se usan en viajes reales» (unverifiable) → «Repasamos seis apps». Disclosure made plainer: «en esa parte no somos neutrales».
- Table header «Lo que sabemos de su página» → «Datos clave»; cells aligned with verified facts.
- Battery FAQ: «usan lo mismo que una app de notas» (untestable) → «no gastan batería en seguirte»; the trackers' own battery-saving claim added for fairness.
- Polarsteps: «crear y seguir un viaje» → «planear y registrar un viaje» (people can follow a trip through a secret link without an account, so «seguir» was misleading).
- Pro paragraph now mentions exports, as en.js does. «emitirlos» → «retransmitirlos». «pesa lo mismo» (ambiguous) → «no exige más esfuerzo».
- All straight quotes → «…».

**Facts verified**
- Polarsteps: sign-up with Google, Apple ID or email before planning and tracking (support.polarsteps.com/hc/en-us/articles/29049619141266, via search excerpt; page behind Cloudflare); free core plus optional Polarsteps Plus (news.polarsteps.com/news/polarsteps-launches-polarsteps-plus-a-new-subscription-for-its-most-dedicated-travelers); automatic route, works offline, hardback book, follow along (polarsteps.com); steps can be added by hand and the tracker is off by default (support.polarsteps.com Help Center, tracking articles); secret link viewable without account (support.polarsteps.com/article/92-how-does-following-work, via search excerpt); Spanish in the app (apps.apple.com/es/app/polarsteps/id947925763).
- Day One: Basic (free), Silver, Gold; iPhone, Android, iPad, Mac, web; end-to-end encryption; printed journals (dayoneapp.com/pricing/).
- FindPenguins: free to plan, track and share; tracker automatic, battery-saving, offline; photo book (findpenguins.com).
- Journi: hardcover, softcover, layflat; created on phone, tablet or computer (journiapp.com).
- Journey: Android, iOS, Mac, Windows, Web, Chrome OS, Linux; end-to-end encryption with Journey Cloud; export to ePUB and DOCX (journey.cloud).
- «Cronología» as Google's Spanish name for Timeline (support.google.com/maps/answer/6258979?hl=es).

**Removed or generalized**
- «plan Gold opcional» (Day One) → «dos de pago (Silver y Gold)»: the original suggested a single paid plan.
- «casi todas las malas reseñas…», «las apps que más se usan»: unverifiable, generalized.
- «usan lo mismo que una app de notas» (battery): untestable, rephrased.
- Day One «no hay valoraciones ni listas de lo mejor»: not checked feature by feature, softened to «no está hecha para valorar lugares ni para ordenar listas de lo mejor».

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1707 words, updated unchanged (already 2026-10-24), title unchanged

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** países visitados
**Summary:** Clear, practical and honest piece with good border cases (Andorra, Tijuana, Irún, Leticia) and a worked example. Needed only one product-claim fix, a few calques and house-style fixes.

**What changed**
- VoyageLog claim tightened: «cuenta países a partir de las entradas» / «cada lugar y cada momento pertenece a una ciudad y a un país» → countries counted per trip in Insights; en.js puts countries on the trip, not on each entry.
- «días de viaje» → «días fuera de casa» (es.js wording); «un mapa… se alimenta de las entradas que tienen coordenadas» → «de los lugares que tienen coordenadas» (en.js).
- Calques and smell: «Aquí es donde» → «Aquí»; «salvaste la frontera» → «cruzaste la frontera»; «de forma lenta» → «poco a poco»; «No lo uses como medida de nada más que de lo que es» → «Úsalo para lo que mide y nada más».
- «80 por ciento» → «80 %»; straight quotes → «…».

**Facts verified**
- 193 UN member states (un.org/es/about-us/member-states).
- Countries, cities, days away, most visited country and average rating in Insights; trip map and all-time map from places with coordinates; Year in Travel; long trips split into cities (src/locales/en.js).

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1335 words, updated unchanged (already 2026-10-24), title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** diario de viaje, cómo hacerlo
**Summary:** The strongest piece of the set: a small, repeatable system, concrete notes (Bar Cañete, the tacos al pastor note, the Lisbon example) and a lede that answers at once. Needed a smoother headline, house-style quotes, one rating sentence that read like an app rule, and a home link.

**What changed**
- Title and H1: «cómo hacerlo y que no se abandone al tercer día» (clumsy construction) → «cómo hacerlo sin abandonarlo al tercer día». Primary query kept.
- «Esta guía explica…» (announces the article) → «Abajo tienes…»; «lo usamos» → «la usamos» (la app is feminine).
- «Los momentos no se puntúan» → «Los momentos, mejor sin nota»: in VoyageLog moments can carry a rating; leaving them unrated is advice, not an app rule.
- Example note fixes: «Bacalhau a bras» → «Bacalhau à brás»; «una hora antes del sol» (ambiguous) → «una hora antes de la puesta de sol».
- Anchors made descriptive (places-vs-moments, offline guide); added one natural link to /es/ at the end.
- 23 pairs of straight quotes → «…», with final periods moved outside the closing quote (RAE).

**Facts verified**
- Ratings out of five with decimals, cities shareable on their own, search by word and filter by rating (src/locales/en.js).
- Pastéis de Belém, Miradouro da Senhora do Monte, tram 28 through Graça and Alfama: well-known Lisbon landmarks, kept as the traveller's own notes; tram 28 route checked (klm.com travel guide only, no Carris page found; route uncontroversial).

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1432 words, updated unchanged (already 2026-10-24), title changed: OG image stale

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** app de diario de viaje sin conexión
**Summary:** Useful piece: the three meanings of «sin conexión», the airplane-mode test and the honest backup trade-off are exactly what the reader needs. Fixes were sourcing language around Polarsteps, a buried disclosure and some loose phrasing.

**What changed**
- Disclosure moved into the lede («VoyageLog, la app que hacemos, funciona así»); the later one shortened to «Como VoyageLog es nuestra…».
- Polarsteps (FAQ and body): «según su centro de ayuda… para crear y seguir un viaje» → «pide… antes de planear y registrar un viaje»; «Algunos ejemplos reales de la diferencia» → «Un ejemplo concreto».
- Roaming made market-accurate without prices: «Fuera de la Unión Europea, mucha gente lo desactiva…» (EU readers roam at home prices).
- Smaller fixes: «no hay nada que iniciar» → «no hay sesión que iniciar»; «se usa con mucha laxitud» → «se usa para cosas muy distintas»; «Siempre nos encontramos con…» (implied first-hand testing) → «Son casi siempre…»; «lo hace quien tiene el control» → «la copia la controlas tú»; «un túnel de Santiago de Chile» → «el metro de Santiago de Chile».
- Straight quotes → «…».

**Facts verified**
- Polarsteps sign-up with Google, Apple or email before planning and tracking (support.polarsteps.com/hc/en-us/articles/29049619141266, via search excerpt).
- VoyageLog: fully offline, no account, no server, exports JSON/Excel/ZIP/PDF and image, JSON re-import with duplicates skipped/overwritten/merged, backup reminder every ten trips, exports of everything in Pro, paste a map link to fill a place (src/locales/en.js).

**Removed or generalized**
- none

**Still uncertain, for the owner**
- The list «Todo lo siguiente funciona sin conexión» includes «Ver el mapa del viaje con los lugares que tienen coordenadas». en.js says the app works completely offline, so it stays, but please confirm the map tiles actually render with no connection (if they need data, cut that bullet).

**Checks:** check-blog all clear, guard clean, 1343 words, updated unchanged (already 2026-10-24), title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** notas de viaje
**Summary:** A clear system with two good worked examples (Madrid and Toledo, CDMX and Oaxaca). The VoyageLog section stated a wrong app rule (only places carry a rating), «nota» was used for both rating and text note, and one place example could not be confirmed.

**What changed**
- VoyageLog section corrected: both places and moments accept photos or video, note, tags, date, location and a rating out of five; leaving moments unrated is presented as our advice. Filters by type, rating and tags no longer described as Pro-only (en.js only says Pro adds «advanced» filters). Added a natural link to /es/.
- «nota» meaning rating → «valoración» (the in-app term) wherever it could be confused with the text note, including FAQ 2 and 4. FAQ 2 question «¿Por qué no se valoran los momentos?» → «¿Por qué no conviene valorar los momentos?» (advice, not app behaviour).
- Search paragraph no longer claims a result order («primero los lugares»).
- Closing heading «La regla, una vez más» → «Un lugar lleva valoración, un momento no» (heading states the conclusion); «con un ejemplo real» → «con dos ejemplos».
- 16 pairs of straight quotes → «…», periods outside.

**Facts verified**
- Chocolatería San Ginés, Pasadizo de San Ginés 5, Madrid, chocolate con churros since 1894 (chocolateriasangines.com).
- Cerro San Cristóbal viewpoints, Santiago de Chile (chile.travel/atractivos/cerro-san-cristobal/).
- Tlacolula market at its biggest on Sundays (oaxaca.gob.mx/sectur, tourism product sheet PT-OAX003-2017).
- Museo Nacional de Antropología open Tuesday to Sunday; Sala Mexica exists (lugares.inah.gob.mx/en/node/4955).
- Entry fields, optional everything except title, map links, search and filters, best-of lists shared as image or PDF (src/locales/en.js).

**Removed or generalized**
- «la churrería junto al Mercado de la Boquería»: no specific venue could be identified or verified → replaced with Chocolatería San Ginés (verified).
- «el mirador de San Cristóbal» → «el cerro San Cristóbal» (the name the official tourism site uses).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1419 words, updated unchanged (already 2026-10-24), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** alternativas a Polarsteps
**Summary:** Fair to Polarsteps, with a real «cuándo VoyageLog no es la mejor opción» section and a useful complaint-to-app table. The lede did not answer the query, and almost every competitor fact was framed as «según su centro de ayuda / su página dice / su política de privacidad explica».

**What changed**
- Lede now answers the query in the first sentence (names the kinds of alternatives); disclosure kept and made plainer: «en esa parte no somos neutrales».
- Description: dropped the «¿Buscas…?» opener and the claim that all five are «sin cuenta, sin rastreo»; now «de diarios de viaje privados y sin cuenta a otras apps de ruta».
- All sourcing framing removed; vendor promises kept as the vendor's own claim («la empresa dice que no agota la batería», «FindPenguins dice que ese rastreo funciona sin conexión»).
- FAQ 2 rebuilt on verified facts (steps can be added by hand; tracker must be switched on). FAQ 3 now opens «En parte.» and adds offline editing.
- Day One: «plan Gold opcional» → «dos de pago (Silver y Gold)»; «bloqueo con huella o código» → «código o biometría»; flat «No hay valoraciones…» softened to what the app is built for. Same softening for Journey.
- VoyageLog: «gasta lo mismo que una app de notas» → «no gasta batería en seguirte»; «a tiempo real» → «en tiempo real»; Journi added to the «wrong choice» section for printed books; added a link to /es/.

**Facts verified**
- Polarsteps: Google/Apple/email sign-up before planning and tracking (support.polarsteps.com/hc/en-us/articles/29049619141266, via search excerpt); steps added manually, tracker off until enabled, offline editing and photos (support.polarsteps.com/hc/en-us/articles/24266379026066-Does-Polarsteps-work-offline, via search excerpt); private trips or secret link (apps.apple.com/es/app/polarsteps/id947925763; support.polarsteps.com/article/92-how-does-following-work); «No agota la batería, funciona sin conexión», hardback book (App Store ES description; polarsteps.com).
- Day One plans, platforms, encryption, printing (dayoneapp.com/pricing/); passcode, Touch ID, Face ID lock (apps.apple.com/es/app/day-one-daily-journal-diary/id1044867788).
- FindPenguins free, automatic, offline, photo book, Android (findpenguins.com).
- Journi books and Google Play app (journiapp.com).
- Journey platforms, Journey Cloud encryption, ePUB/DOCX (journey.cloud).
- Museo Nacional de Antropología open on Tuesdays (lugares.inah.gob.mx/en/node/4955).

**Removed or generalized**
- «Su política de privacidad explica…» (Polarsteps): not verified in the privacy policy itself → replaced with facts from the help centre.
- «En un móvil con unos años… el gasto se nota»: untestable → generalized.
- «La mayoría de quienes buscan… no están descontentos»: unverifiable majority → «Casi nunca se cambia por descontento…» as a reasoned observation.

**Still uncertain, for the owner**
- support.polarsteps.com blocks direct fetches (Cloudflare); its articles were read through search-engine excerpts of the official pages.

**Checks:** check-blog all clear, guard clean, 1465 words, updated unchanged (already 2026-10-24), title unchanged

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** imprimir un diario de viaje
**Summary:** Practical and honest (VoyageLog «no imprime libros» is said early and again in the comparison). Needed sourcing language removed from the print-service section, one unverified claim about route maps in printed books, a missing VoyageLog export option and a Spain-only assumption about copisterías.

**What changed**
- Route 1 rewritten as plain facts: «Su web explica… / Su página indica… / Esto es lo que dice cada una en su propia página» → «Esto es lo que ofrece cada una» and direct statements.
- «Si lo que quieres es un libro con la ruta dibujada» (not verified that the books print the route) → «Si la ruta es lo que quieres ver en papel, elige Polarsteps o FindPenguins».
- VoyageLog PDF export now includes best-of lists, as en.js says.
- Latin American readers: «una copistería de barrio (en México, un centro de copiado o una papelería con impresión)».
- Smell and register: «Esta guía repasa» → «Repasamos»; «se coge en una sobremesa» → «se hojea» (coger); «pulsas un botón» → «tocas un botón»; reason for not giving prices made concrete («dependen del tamaño, las páginas y el envío»).
- Straight quotes → «…».

**Facts verified**
- Polarsteps hardback Travel Book with photos and stories (polarsteps.com; apps.apple.com/es/app/polarsteps/id947925763).
- Journi hardcover, softcover, layflat, created on phone, tablet or computer; photo prints and calendars (journiapp.com).
- FindPenguins photo book delivered home (findpenguins.com).
- VoyageLog PDF and image cards for a trip, a city or a best-of list; Excel; ZIP with photos and videos; exports of everything in Pro (src/locales/en.js).

**Removed or generalized**
- «Parte de la ruta…» (Polarsteps book content) → «con las fotos y las historias de los pasos»: the route in the book could not be confirmed.
- «Muchos servicios de fotolibros aceptan imágenes o PDF» → «trabajan con tus imágenes, y algunos aceptan también un PDF ya maquetado» (no single service named, kept generic).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1307 words (close to the 1300 floor; any future cut needs added substance), updated unchanged (already 2026-10-24), title unchanged
