# Playground Ready2Agent Learn

## Cos'e il playground

Il playground e la libreria di trasformazioni rapide di Ready2Agent Learn. Ogni scenario mostra la differenza tra output mediocre e output agent-ready.

L'agente accelera cio che hai chiarito.

Prima del playground completo, esegui la golden path iniziale:

- `documentation/first-mission/README.md`
- `documentation/first-mission/first-mission-dossier-template.md`

## Prima missione consigliata

Prima del playground completo, esegui la golden path iniziale:

- `documentation/first-mission/README.md`
- `documentation/first-mission/first-mission-dossier-template.md`

## Come usarlo con ChatGPT, Codex, OpenCode o altri agenti

Prima di usare i prompt playground con OpenCode, carica il contesto skills-first:

1. `.agents/skills/README.md`
2. `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`
3. `.agents/skills/ready2agent-learn-core/SKILL.md`

1. Scegli uno scenario.
2. Parti da input confuso e prova il prompt debole.
3. Valuta output mediocre con checklist.
4. Usa il prompt migliorato Ready2Agent.
5. Confronta delta qualitativo e registra apprendimenti.

## Differenza tra playground ed esercizi

- Playground: velocita, orientamento, primi risultati.
- Esercizi: progressione, valutazione, disciplina, tracker.

Se vuoi allenamento reale, dopo il playground apri subito `exercises/README.md`.

## Struttura standard di ogni scenario

Ogni file playground deve contenere:

1. Input confuso
2. Prompt debole
3. Output mediocre
4. Prompt migliorato (Ready2Agent)
5. Output buono/eccellente
6. Perche migliora
7. Checklist validazione
8. Collegamento First Mission
9. Collegamento prompt `00-06`
10. Next step verso exercises

## Come scegliere lo scenario giusto

- Se parti da un'idea confusa: `02-chaotic-idea-to-requirement.md`
- Se devi generare una pagina/struttura: `01-company-to-landing-page.md`
- Se devi pianificare sviluppo con Codex: `03-feature-to-codex-plan.md`
- Se hai contesto business ma prompt debole: `04-business-context-to-agent-prompt.md`
- Se devi migliorare documentazione: `05-doc-review-and-improvement.md`

## Come validare un output

Controlla sempre:

- chiarezza dell'obiettivo
- confini espliciti
- output verificabile
- prossimi step pratici

Checklist minima comparativa:

- il prompt migliorato riduce ambiguita?
- l'output eccellente include confini e criteri verificabili?
- la versione debole mostra rischi reali di drift?

## Cosa fare dopo il primo risultato

1. Apri un esercizio livello 1 in `exercises/level-01-foundations/`.
2. Aggiorna `exercises/tracker.md`.
3. Usa `prompts/00-agent-onboarding.md` per entrare in un workflow completo.
4. Se non l'hai ancora fatto, completa un `First Mission Dossier`.

## Scenari disponibili

- `playground/01-company-to-landing-page.md`
- `playground/02-chaotic-idea-to-requirement.md`
- `playground/03-feature-to-codex-plan.md`
- `playground/04-business-context-to-agent-prompt.md`
- `playground/05-doc-review-and-improvement.md`
