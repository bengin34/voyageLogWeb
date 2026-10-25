# Editorial notes: Brazilian Portuguese (pt)

Edited with the `blog-editor-pt` skill (procedure from `.claude/skills/blog-editor-core/REFERENCE.md`).

## best-travel-journal-apps, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** melhor aplicativo de diário de viagem
**Summary:** Clear, honest comparison with the right lede and a fair "who should not choose VoyageLog" paragraph. It had one wrong VoyageLog claim (only places can be rated), one misleading competitor contrast (Portuguese interface as a FindPenguins advantage, although Polarsteps has it too) and sourcing language ("segundo a página de planos", "o site cita").

**What changed**
- VoyageLog rating fixed: "Só o lugar recebe uma avaliação de 0 a 5" → both entry types can be rated; the moment "pode ficar sem" (advice, not an app rule).
- Feature names aligned with `src/locales/pt.js`: "listas de melhores" → "listas best-of".
- Sourcing language removed: "Segundo a página de planos", "O site afirma", "O site diz" → plain statements or "O Polarsteps diz que…".
- Comparison table: Polarsteps free-tier cell ("o site cita um plano Plus") → "Uso básico grátis e sem anúncios; plano pago Plus"; FindPenguins "Conta: Sim" → "Tem cadastro"; Journey "Para sincronizar" → "Tem login"; FindPenguins "com interface em português" removed from the cell (both trackers have it).
- Decision list: "FindPenguins se você prefere uma interface em português e a comunidade" → "FindPenguins se quiser a detecção de voos".
- FAQ: offline answer no longer claims trackers "sincronizam depois"; sign-up answer no longer claims Journey works on one device without an account; export answer no longer generalizes that route apps "costumam ser mais fechados".
- Disclosure sharpened ("o que conferimos nas páginas oficiais e nas lojas de aplicativos"); meta sentence about Journey's languages cut.
- Straight quotes → “…”; "barraca de Sampa" → "barraca da feira em São Paulo"; repeated "Muita gente" opener varied.

**Facts verified**
- Polarsteps: automatic route, keeps tracking offline, "Typically less than 4% battery per day", "Proudly ad-free", privacy Only you / Friends & Family / The entire world, hardback travel book (https://www.polarsteps.com/)
- Polarsteps Plus is paid, core planning/tracking/sharing stays free, Plus adds 3D maps etc. (https://www.polarsteps.com/plus); Plus in-app purchases in BRL and Português in the language list (https://apps.apple.com/br/app/polarsteps/id947925763)
- Polarsteps sign-up with email, Google or Apple (support.polarsteps.com sign-up article, via search; the help centre returns 403 to direct fetches)
- FindPenguins: tracker works offline, battery-saving, detects flights, "entirely free" to plan, track and share, photo book, sign-up/login, Português in menu (https://www.findpenguins.com/); Português in the BR App Store language list (https://apps.apple.com/br/app/findpenguins-travel-tracker/id721334305)
- Day One Basic: 1 photo per entry, 1 device, end-to-end encryption; Silver/Gold 30 photos or videos per entry, unlimited devices (https://dayoneapp.com/pricing/); sync requires an account, Basic works as a standalone app (https://dayoneapp.com/guides/premium-subscription/day-one-faq/)
- Journey: Android, iOS, Mac, Windows, web; Journey Cloud Sync (https://journey.cloud/); Google, Apple and email sign-in (https://blog.journey.cloud/introducing-journey-email-sign-in/)
- VoyageLog claims checked against `src/locales/en.js`.

**Removed or generalized**
- "Só o lugar recebe uma avaliação" → corrected (contradicted by en.js).
- Polarsteps/FindPenguins "sincronizam depois" → cut (sync behaviour not stated on the official pages I could open).
- Journey "pode ser usado em um único aparelho" without account → cut (unverifiable; official pages only show that login exists).
- FindPenguins "preço não aparece na página principal" → cut (adds nothing).
- "Aplicativos centrados em rota e livro impresso costumam ser mais fechados" → generalized to advice (unverifiable).

**Still uncertain, for the owner**
- Whether Polarsteps and FindPenguins strictly require an account before creating a trip: both clearly have sign-up and login, and the article says so, but neither help centre could be opened directly.

**Checks:** check-blog all clear, guard clean, 1473 words, updated unchanged (already 2026-10-24), title unchanged

## countries-visited-tracker, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** países visitados
**Summary:** Useful, honest piece with a clear counting rule and a good worked example. The example's arithmetic was wrong, "nota" was used for the rating where the app says "avaliação", the territories paragraph was abstract, and it ended on a bullet summary.

**What changed**
- Example list: "quatro países, oito cidades" → "nove cidades" (Buenos Aires, Bariloche, Montevidéu, Colonia, Lisboa, Porto, Milão, Roma, Amalfi).
- Rating wording aligned with `src/locales/pt.js`: "sua nota média" → "sua avaliação média"; "com uma nota e uma frase" → "com uma avaliação e uma frase" (in this article "nota" was ambiguous with the note text).
- Territories made concrete: abstract "arquipélago de território ultramarino" → "a Guiana Francesa, vizinha do Amapá e parte da França"; "microestados cercados por um vizinho" → "o Vaticano a partir de Roma".
- Bullet "Viagens em grupo" retitled "Viagens de infância" to match its sentence; "O cidadão que passa…" → "Quem passa…"; "Ou seja," opener and "Este guia propõe" announcement cut.
- Final "Resumo" bullet list replaced by "Por onde começar hoje à noite", a short paragraph with the concrete first step.
- Insights map sentence tightened to "todos os lugares registrados com coordenadas" (matches en.js: only places with coordinates appear).
- Straight quotes → “…”.

**Facts verified**
- Insights counts trips, cities, countries, photos and days away, most visited country, average rating; trip map and all-time map from places with coordinates; ready-made city lists (Christmas markets, cherry blossom); not a planner except city lists (`src/locales/en.js`).
- French Guiana as part of France bordering Amapá, Vatican day visit from Rome, Foz do Iguaçu to Ciudad del Este crossing, Ezeiza as Buenos Aires' international airport: standard geography, used as illustrations.

**Removed or generalized**
- none

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1365 words, updated unchanged (already 2026-10-24), title unchanged

## how-to-keep-a-travel-journal, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** como fazer um diário de viagem
**Summary:** The strongest of the set: the lede answers the query, the method is concrete and the Lisbon day is the kind of example a Brazilian reader can copy. Edits were mostly vocabulary (rating vs note), app-field accuracy and house style.

**What changed**
- Rating vocabulary: the article says "nota" for the score, which is natural Brazilian ("dar nota"); added one bridge to the app term ("uma nota de 0 a 5 (no VoyageLog, a avaliação)") and removed the places where "notas" meant the text ("a busca olha título, notas e tags" → "título, texto e tags"; "complete notas" → "complete o que ficou pela metade").
- New-entry fields now match en.js: "local, data, nota, tags, fotos e vídeo" → "local, data, avaliação, texto, tags, fotos e vídeo".
- "Só lugares recebem nota" stated as an app-like rule → advice: "Nota em momento vira resenha. Deixe a nota para os lugares."
- "As melhores viram listas" → "Os favoritos viram listas best-of" (locale term); "o aplicativo lembra de fazer um backup" → "lembra você de fazer backup".
- "backup toda semana que houver Wi-Fi" → "backup toda semana" (the export is local and needs no connection).
- "Quando se mistura os dois" → "Quando você mistura"; "Você lembrará… Esquecerá…" → "Você vai lembrar… Vai esquecer…"; "O resto deste guia mostra" → "Abaixo estão".
- Straight and single quotes → “…”.

**Facts verified**
- New entry is a title and a tap, everything else optional; five-second undo; cities with own dates, collapsible; search by title, notes, tags with type/rating/tag filters; best-of lists; backup reminder every ten trips (`src/locales/en.js`).
- Lisbon and Vienna example details (Miradouro da Senhora do Monte, Time Out Market, Alfama, Café Central) are well-known places used as illustrations; the 1,20 euro pastel de nata is a traveller's-note illustration, not a claim.

**Removed or generalized**
- none

**Still uncertain, for the owner**
- House decision needed across pt articles: "nota" (natural for a score) vs "avaliação" (the app's word, while "notas" in the app means the text). I kept "nota" for scores in the method articles and used "avaliação" whenever the app's own fields are described.

**Checks:** check-blog all clear, guard clean, 1414 words, updated unchanged (already 2026-10-24), title unchanged

## offline-travel-journal-app, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** aplicativo de diário de viagem offline e sem conta
**Summary:** Well-built explainer: the three meanings of "offline" and the closing airplane-mode test are genuinely useful. It contained one logic slip (backup burden attributed to the cloud option), the wrong "only places are rated" claim, an unverifiable claim about roaming costs and competitor sync claims.

**What changed**
- Logic fix: "o custo da segunda opção é ser você o responsável pelo backup" → "o custo do aplicativo local é que o backup fica por sua conta".
- VoyageLog rating fixed: "só o lugar leva avaliação de 0 a 5" → "e, se você quiser, uma avaliação de 0 a 5".
- Roaming paragraph: "Para brasileiros, o roaming internacional costuma ser uma das contas mais caras da viagem" → "O roaming internacional pesa no orçamento, e muita gente nem ativa…", adding the local-chip habit; no operator prices.
- FAQ "foto e localização" rewritten: map-link pasting named as Apple Maps or Google Maps (as en.js says), the entry can be saved with only a title and completed later.
- Locale terms: "duplicados podem ser pulados, sobrescritos" → "duplicatas podem ser ignoradas, substituídas ou mescladas"; "lista de melhores" → "lista best-of"; "Para o plano, o uso gratuito aceita" → "No plano gratuito, cabe".
- "Um diário sem saída vira um beco" → "Um diário sem exportação vira um beco sem saída"; straight quotes → “…”.

**Facts verified**
- Polarsteps keeps tracking offline (https://www.polarsteps.com/); FindPenguins tracker works offline (https://www.findpenguins.com/).
- Day One Basic is a standalone single-device app; sync requires an account (https://dayoneapp.com/guides/premium-subscription/day-one-faq/, https://dayoneapp.com/pricing/).
- VoyageLog offline, on-device storage, no server, backup reminder every ten trips, JSON/Excel/ZIP/PDF and image exports, up to 50 photos per entry in Pro, not a planner except city lists (`src/locales/en.js`).

**Removed or generalized**
- Polarsteps/FindPenguins "sincronizam depois" → "dizem que o rastreador funciona sem sinal" (sync timing not on the pages I could open).
- "Day One e Journey funcionam em um aparelho sem sincronização" → Day One only; Journey dropped (no official statement that it works without login).
- Roaming "uma das contas mais caras da viagem" for Brazilians → generalized (unverifiable statistic-like claim).

**Still uncertain, for the owner**
- Whether pasting a map link into VoyageLog needs a connection to resolve the place. en.js does not say; the FAQ now only says copying the link usually needs the map app online.

**Checks:** check-blog all clear, guard clean, 1342 words, updated unchanged (already 2026-10-24), title unchanged

## places-vs-moments-travel-notes, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** anotações de viagem
**Summary:** A clear, persuasive method piece with good examples from Prague, Vienna and Italy. It promised "doze registros" and showed four, described the place/moment rating split as if it were an app rule, and suggested search features the app does not claim (filter by city, sort by rating).

**What changed**
- Heading and intro: "Praga e Viena em doze registros… Doze registros bastam" → "Um exemplo: inverno em Praga e Viena… Quatro registros já mostram" (the list has four).
- VoyageLog description fixed: "lugares recebem local e avaliação" → "qualquer um pode receber avaliação (o momento pode ficar sem)"; FAQ 5 likewise ("aceita local e avaliação de 0 a 5").
- Search examples kept to claimed features: "Filtre por tag bar e por cidade" → "Busque por Sevilha e filtre pela tag bar"; "ordene por nota" → "por nota 4,5 ou mais".
- Added the maker disclosure where VoyageLog is recommended ("No VoyageLog, que nós fazemos, …").
- "Um lugar tem o que um momento não tem: localização e nota" → "não precisa ter: endereço e nota" (a moment can have a location).
- "Oito semanas depois" → "Meses depois"; "vistos de São Paulo ou de Recife" → "a primeira viagem à Itália de muita gente"; "não vai fazer nenhuma das duas coisas" → "ninguém faz esse garimpo".
- "lista de melhores" → "lista best-of", "notas" (text) → "texto" in the search sentence; straight quotes → “…”.

**Facts verified**
- Entry types, rating out of five, search over title/notes/tags with type/rating/tag filters, reorderable best-of lists (`src/locales/en.js`).
- Da Michele has Rome locations (https://www.turismoroma.it/it/accoglienza/lantica-pizzeria-da-michele); Pizzarium Bonci, Via della Meloria, Rome (Gambero Rosso listing found via search; no official site checked). Belvedere's Klimt collection, Old Town Square astronomical clock, Charles Bridge over the Vltava/Moldava, Café Central, Brera, Amalfi's Marina Grande: well-known places, kept as illustrations matching the en.js sample entries.

**Removed or generalized**
- "Filtre por… cidade" and "ordene por nota" → replaced (not claimed in en.js).

**Still uncertain, for the owner**
- none

**Checks:** check-blog all clear, guard clean, 1389 words, updated unchanged (already 2026-10-24), title unchanged

## polarsteps-alternatives, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** alternativas ao Polarsteps
**Summary:** Fair to Polarsteps, with a strong "nota, não rota" argument, a real "quando o VoyageLog é a escolha errada" section and useful in-app fixes before switching. The title promised "5 apps privados, sem conta" although four of the five use an account; it also repeated the wrong rating claim, used sourcing language and implied that a Portuguese interface sets FindPenguins apart.

**What changed**
- Title and H1: "Alternativas ao Polarsteps: 5 apps privados, sem conta" → "Alternativas ao Polarsteps: 5 apps, com e sem conta" (the old title was false for FindPenguins, Day One sync, Journey and Google). Primary query unchanged.
- Sourcing language removed: "segundo o site do aplicativo", "Segundo o site", "segundo a página de planos", "O site do Polarsteps diz" → plain statements or "O Polarsteps diz que…".
- VoyageLog rating fixed ("só o lugar leva avaliação" → optional rating on any entry); "listas de melhores" → "listas best-of"; "Ou seja," cut.
- Google section updated to the current product: "Linha do tempo" → "Linha do Tempo" (Google's Brazilian spelling); "Se o histórico de localização está ligado" → "Se a Linha do Tempo estiver ativada (ela vem desativada por padrão)"; unverified "Não tem nota… a foto vive em outro aplicativo" → "foi feita para registrar onde você esteve, não o que você achou".
- FindPenguins: "outro idioma na interface" as its selling point → "outra comunidade ou a detecção de voos"; table note "Interface disponível em português" → "Livro de viagem impresso"; it now says both trackers have Portuguese.
- Migration step: "Não existe botão que transfira viagens do Polarsteps…" → "O VoyageLog não importa viagens do Polarsteps nem de outros aplicativos" (honest and checkable against en.js).
- "Deixe a viagem privada… O feed e o perfil continuam existindo" → "A conta continua existindo, mas ninguém mais vê a viagem".
- "quem já mantém um diário diário" → "quem já escreve um diário todos os dias"; "Uma declaração antes de seguir" → "Um aviso antes de seguir"; "Resumo rápido" → "Qual escolher, em três linhas"; straight quotes → “…”.

**Facts verified**
- Polarsteps: automatic route, keeps tracking offline, under 4% battery per day, ad-free, three privacy levels, hardback book (https://www.polarsteps.com/); Plus is paid and the core stays free (https://www.polarsteps.com/plus); Português in BR App Store languages (https://apps.apple.com/br/app/polarsteps/id947925763).
- Polarsteps tracker toggled in Trip settings, steps can be added manually; sign-up by email, Google or Apple (support.polarsteps.com articles, read via search results; direct fetch returns 403).
- FindPenguins offline tracker, flight detection, free planning/tracking/sharing, travel book (https://www.findpenguins.com/); Português (https://apps.apple.com/br/app/findpenguins-travel-tracker/id721334305).
- Day One Basic: E2E encryption, 1 photo per entry, 1 device; paid: 30 photos/videos per entry, unlimited devices (https://dayoneapp.com/pricing/); sync needs an account (https://dayoneapp.com/guides/premium-subscription/day-one-faq/).
- Journey platforms and Journey Cloud Sync (https://journey.cloud/); Google, Apple, email sign-in (https://blog.journey.cloud/introducing-journey-email-sign-in/).
- Google Maps Linha do Tempo: data from the device, off by default, optional encrypted backup on Google servers (https://support.google.com/maps/answer/6258979?hl=pt-BR).

**Removed or generalized**
- "sincroniza quando a conexão volta" (Polarsteps) → cut (not stated on the pages I could open).
- Journey "pode ser usado em um único aparelho" without account and "raízes fortes no Android" → cut (unverifiable).
- FindPenguins "sem preço na página principal" → cut; Day One "sem recipiente 'Itália 2026' nem mapa da viagem" → cut (Day One has separate journals and a map view, so the claim was at best misleading).
- Polarsteps "feed" → cut (unverified wording).

**Still uncertain, for the owner**
- Title changed: the OG image in `public/assets/blog/og/pt/` is stale and needs `npm run og`.
- Polarsteps now markets itself as a trip planner too (AI itineraries on its store listing). The article does not discuss planning; worth a line in a future update if the planning side becomes a reason people compare it.

**Checks:** check-blog all clear, guard clean (title-change note only), 1517 words, updated unchanged (already 2026-10-24), title changed: OG image stale

## print-travel-journal-pdf, 2026-10-24

**Verdict:** Publish after edits
**Primary query:** diário de viagem em PDF
**Summary:** Practical and honest about what the VoyageLog PDF is (a card, not a laid-out book), with good Brazilian detail (gráfica rápida, espiral, A4). A few sentences described PDF and ZIP contents beyond what en.js claims, and "nota" was used for both rating and note text.

**What changed**
- Export contents kept to en.js: city PDF "com as datas, os lugares e as notas daquele trecho" → "com o resumo daquele trecho"; best-of PDF "nota ao lado de cada lugar", "em ordem de nota" → "na ordem que você escolheu" (best-of lists are user-ordered); "Um ZIP da viagem inteira" → "Um ZIP com tudo" (the ZIP export is the whole dataset, not per trip), folder example "Italia-2026" → "Backup-2026-03".
- Locale terms: "lista de melhores" → "lista best-of" (6 places); "duplicados pulados, sobrescritos" → "duplicatas ignoradas, substituídas ou mescladas".
- "Complete as notas… uma nota onde faltava" → "Complete os registros… uma avaliação onde faltava".
- Paper weight "120 g" → "120 g/m²"; "Neste guia:" opener → "A seguir:"; straight quotes → “…”.

**Facts verified**
- Polarsteps sells hardback travel books (https://www.polarsteps.com/); FindPenguins sells a printed travel book (https://www.findpenguins.com/).
- VoyageLog exports: PDF and image cards for a trip, a city or a best-of list; Excel; ZIP with photos and videos; JSON full backup with skip/overwrite/merge; Pro includes exports of everything; offline; backup reminder every ten trips (`src/locales/en.js`).

**Removed or generalized**
- Per-trip ZIP and the exact content of the city PDF → generalized (not claimed in en.js).

**Still uncertain, for the owner**
- en.js says Pro adds "exports of everything" but does not say which exports, if any, the free version keeps. The article says only "A exportação de tudo está no plano Pro", which matches the source; confirm before anyone writes more specific free-tier export claims.

**Checks:** check-blog all clear, guard clean, 1426 words, updated unchanged (already 2026-10-24), title unchanged
