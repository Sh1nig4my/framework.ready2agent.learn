# Exercises Ready2Agent Learn

## Filosofia degli esercizi

Gli esercizi di Learn non servono a produrre output "belli". Servono a prendere decisioni sotto vincoli, misurare la qualita e governare un coding agent.

Baseline consigliata prima dei livelli 1-4: completa la First Mission e produci un `First Mission Dossier`.

- guida: `documentation/first-mission/README.md`
- template: `documentation/first-mission/first-mission-dossier-template.md`

## Differenza tra playground ed esercizi

- Playground: primo impatto, risultati veloci, bassa frizione.
- Esercizi: progressione didattica, valutazione, tracker, autocorrezione.

## Livelli 1-4

- Livello 1 - Foundations: da idea vaga a oggetti verificabili.
- Livello 2 - Agent Workflow: controllo output agente e gestione drift.
- Livello 3 - Practical Builds: output frontend/didattici concreti.
- Livello 4 - Case Study: sfida Auth/IAM complessa e rigorosa.

## Come usare Codex/OpenCode

1. Leggi `.agents/skills/README.md`.
2. Leggi `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`.
3. Leggi `.agents/skills/ready2agent-learn-core/SKILL.md`.
4. Avvia con `prompts/00-agent-onboarding.md`.
5. Leggi l'esercizio selezionato.
6. Usa il prompt consigliato dell'esercizio.
7. Valida l'output con i criteri indicati.
8. Aggiorna il tracker.

## Come aggiornare `tracker.md`

Dopo ogni esercizio, aggiorna:

- stato
- output prodotto
- quality check
- decisioni e correzioni

## Come usare soluzioni e rubriche

- Soluzioni complete: solo livelli 1 e 2 (`exercises/solutions/`).
- Livelli 3 e 4: usa rubriche e checklist, senza soluzione completa.

Rubrica e template condivisi:

- `exercises/rubrics/standard-rubric.md`
- `exercises/rubrics/scorecard-template.md`
- `exercises/templates/retrospective-template.md`
- `exercises/examples/README.md`

## Rubriche numeriche livelli 3-4

Ogni esercizio livello 3 e 4 include una rubrica docente `0-3` su 6 dimensioni (totale `0-18`).

- `0-7`: insufficiente
- `8-12`: base
- `13-16`: buono
- `17-18`: eccellente

Registra il punteggio in `exercises/tracker.md` subito dopo la correzione.

## Baseline obbligatoria consigliata

Prima di affrontare il percorso completo livelli 1-4, completa la First Mission:

- `documentation/first-mission/README.md`
- `documentation/first-mission/first-mission-dossier-template.md`

## Come evitare output passivi

- non accettare output senza criteri
- chiedi sempre assunzioni e rischi
- correggi prompt al primo segnale di drift
- valida con quality gate prima di chiudere
