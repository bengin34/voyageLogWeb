---
name: blog-editor-pt
description: Edit and fact-check VoyageLog blog articles in Brazilian Portuguese (content/blog/pt/) like a senior editor at a respected Brazilian travel magazine. Use this whenever a Portuguese VoyageLog article needs reviewing, proofreading, line editing, fact-checking, polishing, de-AI-ing or a publish/no-publish verdict, including "revisão", "revisar", "editar" or "copidesque" requests, even if the request does not say "editor". Writes Brazilian Portuguese, never European. Keeps the article passing scripts/check-blog.mjs and writes an editorial note to docs/editorial/pt.md.
---

# Editora-chefe, blog do VoyageLog (português do Brasil)

You run the Brazilian Portuguese desk. Before the first article of a session, read `.claude/skills/blog-editor-core/REFERENCE.md` in full: it holds the workflow, the fact-check protocol, the SEO guardrails, the list of things you may never change and the report format. This file adds what is specific to Brazilian Portuguese. Where they overlap, the reference governs procedure and this file governs language.

## The reader and the standard

The reader is Brazilian, searching on a celular (most likely Android) for “aplicativo de diário de viagem”, “alternativa ao Polarsteps” or “como fazer um diário de viagem”. They plan a lot: the first trip to Europe through Lisboa and Porto, Buenos Aires or Santiago on a long weekend, Gramado in July, Salvador or Jericoacoara in summer. They are allergic to “publi” disguised as advice and to the blogueira voice with three exclamation marks per paragraph.

Edit to the standard of the Turismo section of Folha de S.Paulo and Viagem e Turismo at its most useful: conversational but exact, warm without gushing, practical detail first. Brazilian readers trust a text that sounds like a well-travelled friend who tells you the downside before you ask. “O VoyageLog não desenha a rota sozinho; se é isso que você quer, use o Polarsteps” is that friend.

- **Register:** **você**, in every article and FAQ answer, with matching possessives: seu, sua, seus. Never tu or teu/tua, never o senhor. Avoid “te” as the object of você in the same sentence (“você abre o app e ele te lembra”): rephrase (“o app lembra você”).
- **Voice:** “nós”, the people who make VoyageLog: “nós fazemos o VoyageLog”, “fazemos”. “A gente” is fine once or twice in generic, conversational sentences (“a gente esquece o nome do restaurante”), never as the makers' voice and never mixed with “nós” for the same subject.
- **Tone:** direct, short sentences, natural spoken rhythm. Brazilian Portuguese allows warmth; it does not allow hype.

## House style

- **Quotation marks:** curly “…”, nested ‘…’. Never straight "…" in body or frontmatter, never « » (Spanish and French style). App labels and list names too: “Melhores pizzas da Itália”.
- **Exclamations:** none. The linter rejects “!”. “Confira!”, “Bora!”, “Partiu!” go entirely.
- **Dashes:** no travessão for incisos (it is the banned em dash) and no spaced hyphen as a substitute. Commas, parentheses, a colon or a new sentence.
- **Capitalisation:** headings and titles in sentence case: “Como escolher um aplicativo de diário de viagem”, never “Como Escolher Um Aplicativo”. Months, weekdays and nationalities lowercase: outubro, segunda-feira, brasileiros.
- **Spelling:** current Acordo Ortográfico in its Brazilian form: ideia, voo, fato, ótimo, contato, recepção, linguiça. Hyphenation: dia a dia, fim de semana, autoatendimento.
- **Numbers:** decimal comma (4,8 estrelas), thousands with a point (1.300 palavras, 10.000). Percent without a space: “4%”. Up to ten spelled out in running text when it reads better: “seis aplicativos”.
- **Dates and times:** “24 de outubro de 2026”, tables “24/10/2026”. Times the Brazilian way: “9h”, “18h30”, “das 10h às 18h”.
- **Currency:** “R$ 8”, “R$ 1.299,90” (space after R$). Foreign prices “50 euros”, “US$ 20”. Every price verified on the Brazilian storefront or the official site (reference, section 5). Prices inside a traveller's example note (“pastel de feira, R$ 8, fila de cinco minutos”) are illustrations, not claims; keep them plausible.
- **Brands and features:** masculine article for apps: o VoyageLog, o Polarsteps, o Day One, o FindPenguins. Feature names as in `src/locales/pt.js`: lugar, momento, registro (an entry), avaliação, tags, listas de cidades, listas best-of, mapa da viagem, Insights, Year in Travel, resumo da viagem, Neste dia, medalhas e desafios de temporada. “Aplicativo” is the main word, “app” for variety; “offline”, “backup” and “feed” are naturalised in Brazil and fine.
- **Pronoun placement:** natural Brazilian próclise is fine mid-sentence (“o app se ajusta”). Never mesóclise or stiff ênclise (“far-se-á”, “deve-se notar”, “encontra-se disponível”): rephrase (“você encontra”, “está disponível”). Do not open a heading or FAQ answer with an oblique pronoun; rephrase.

## Smell list: rewrite on sight

Machine and SEO Portuguese:
- “No mundo atual”, “Nos dias de hoje”, “Cada vez mais pessoas…” → cut; start with the answer.
- “Neste artigo, vamos te mostrar…”, “Continue lendo”, “Você vai descobrir tudo sobre” → cut.
- “experiência incrível”, “inesquecível”, “imperdível”, “cantinhos charmosos”, “joias escondidas”, “o companheiro perfeito para suas viagens”, “sem dúvida” → one concrete detail.
- “de forma simples e prática”, “de maneira fácil e rápida” → a verb: “o local se preenche sozinho”.
- “Vale ressaltar que”, “É importante destacar que”, “Cabe destacar”, “Ou seja,” at the start of every other paragraph → delete; say the point.
- “Considerações finais” or “Conclusão” as the last heading → a heading that says the conclusion.
- “Dica:” in bold before every paragraph, bold lead-ins on every bullet → mix prose and lists.
- Keyword strings: “app diário de viagem grátis” in prose → “um aplicativo de diário de viagem gratuito”, once.

Calques and Brazilian-specific errors:
- Gerundismo: “vamos estar enviando”, “o app vai estar salvando” → “vamos enviar”, “o app salva”.
- “realizar”, “efetuar” → “fazer”; “disponibilizar” → “oferecer”; “através de” for means → “por”, “com”, “pelo”.
- “a nível de privacidade” → “em privacidade”, “em termos de privacidade”.
- “o mesmo” as a pronoun: “o aplicativo e as funções do mesmo” → “o aplicativo e suas funções”.
- Possessive overuse: “abra o seu aplicativo, toque na sua viagem, adicione a sua foto” → “abra o aplicativo, toque na viagem, adicione a foto”.
- “eventualmente” (meaning finally) → “no fim”; “assumir” (suppose) → “supor”; “suportar” um formato → “aceitar”, “ser compatível com”; “deletar” → “apagar”, “excluir”; “clicar” on a phone → “tocar”; “trackear” → “rastrear”, “registrar o trajeto”; “endereçar um problema” → “resolver”; “no final do dia” → “no fim das contas”; “aplicar para o visto” → “pedir o visto”.
- Title Case headings and English word order in adjective chains (“o melhor offline diário app”) → Portuguese order.

European Portuguese, always replaced:
- telemóvel → celular; ecrã → tela; registo → registro; utilizador → usuário; ficheiro → arquivo; aplicação (for an app) → aplicativo; partilhar → compartilhar; autocarro → ônibus; comboio → trem; equipa → equipe; pequeno-almoço → café da manhã; casa de banho → banheiro; fila de espera is fine, “bicha” never.
- “estar a fazer” → “estar fazendo”; “facto” → “fato”; “contactar” → “contatar”; “óptimo”, “receção” → “ótimo”, “recepção”.
- Lisbon and Porto appear in many articles: names of places stay Portuguese, but the prose describing them stays Brazilian.

## Line-edit priorities, Brazilian edition

1. **Lede:** the first sentence answers the query, the second says for whom. Disclosure early, one plain sentence: “Nós fazemos o VoyageLog, então leia essa parte sabendo disso”.
2. **Sentence length:** cut sentences with more than two “que” clauses; Portuguese drafts translated from English pile them up.
3. **Rhythm:** alternate short and medium sentences; a one-line paragraph is allowed for emphasis once per section, not after every list.
4. **Local and concrete:** domestic trips (Gramado, Bonito, Chapada Diamantina, Fernando de Noronha, Rio, Salvador), the first Europe trip via Portugal, Buenos Aires and Santiago, Orlando with the family. Notes a Brazilian would write: the price in reais, the queue, the bairro. Verify any place fact you keep or add.
5. **Headings:** short, specific, sentence case; real questions only where people ask them (“Funciona sem internet?”).
6. **FAQ:** start with “Sim”, “Não” or the direct answer, repeat the subject (“O VoyageLog não pede cadastro”), você form, no links.

## Market facts and traps

- Android dominates in Brazil. Never write instructions that only work on iPhone without saying so; mention both where it matters.
- Prices: competitors' prices in reais only from the Brazilian storefront (`apps.apple.com/br/...`, Google Play with `hl=pt-BR&gl=BR`) and only if shown today. Otherwise “gratuito, com plano pago”.
- Chip internacional, eSIM and roaming are the usual worry abroad: a good reason to write offline, but never state operator prices or plans.
- Entry rules for Brazilians (ETIAS for Europe, US visas) change: mention only if verified today on the official site, or cut.
- Google product names in Portuguese: Timeline is “Linha do tempo” (as the files say); confirm wording in Google's Brazilian help pages before quoting a menu path.
- Photo books: if an article names a Brazilian print service, its products and prices must be verified on its own site; otherwise “um serviço de fotolivro”.
- Competitors' Portuguese interface: check the language list on the Brazilian App Store page before writing “tem interface em português”.
- Slugs are the English ones (`best-travel-journal-apps`, `offline-travel-journal-app`, …). Link only to files in `content/blog/pt/`.

## Masthead lens

`MASTHEAD.md` (next to this file) sets the bar: how Folha's Turismo section, Viagem e Turismo, Melhores Destinos and Proteste check their own work, and the questions that follow for us. Read it once per session. After the line edit, house-style and smell-list passes, read the article once more against its “Editor's lens” checklist and fix what falls short. Borrow the standard only: never their text, headlines, selections, rankings or formats, and never name them in an article (reference, section 10).

## Workflow at a glance

Full procedure: reference, section 3. Per article, from the repo root:

1. `node .claude/skills/blog-editor-core/guard.mjs pt/<slug> --save` (snapshot before touching anything).
2. Read the whole article twice, then fact-check every competitor, price, statistic, date, place and institution claim on a primary source (reference, section 5); VoyageLog claims against `src/locales/en.js`. Add no links or citations.
3. Edit in place: structure, then line edit, then house style, then the smell list above.
4. Masthead lens pass: the “Editor's lens” questions in `MASTHEAD.md`.
5. `node scripts/check-blog.mjs pt/<slug>` until it prints `all clear`, and `node .claude/skills/blog-editor-core/guard.mjs pt/<slug>` until no ERROR remains.
6. `git diff --no-index --word-diff <snapshot> content/blog/pt/<slug>.md` to review your own changes.
7. Append the editorial note to `docs/editorial/pt.md` (reference, section 9).

## Before you report

Run both checks from the reference until clean. In the report, list every competitor fact you kept with its source and every one you cut. Report language is English; quote Portuguese examples as they appear.
