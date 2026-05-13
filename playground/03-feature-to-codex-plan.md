# Feature to Codex Plan

## Input confuso

"Dobbiamo aggiungere gestione ruoli e protezione route, fai un piano veloce."

## Prompt debole

```text
Fammi un piano per implementare la feature.
```

## Output mediocre

- task troppo grandi
- dipendenze implicite
- quality gate non esplicitati

## Prompt migliorato (Ready2Agent)

```text
Agisci come technical lead per coding agent.

Feature: <...>
Contesto repository: <...>
File coinvolti: <...>
Vincoli: <...>
Quality gate: lint, build, typecheck, check struttura

Genera un piano operativo per Codex/OpenCode con:
1) Analisi requisito sintetica.
2) Task breakdown incrementale (task piccoli, ordine chiaro).
3) Dipendenze tra task.
4) Rischi per task.
5) Definizione di done per ogni task.
6) Sequenza comandi di validazione finale.

Vincoli:
- Non introdurre backend o dipendenze fuori scope.
- Nessun task monolitico.
- Priorita prima sicurezza/coerenza, poi estetica.
```

## Output buono/eccellente

- piano incrementale riusabile
- DoD per task
- quality gate finali chiari

## Perche migliora

- trasforma richiesta vaga in piano eseguibile
- rende review e handoff piu semplici
- riduce regressioni da task monolitici

## Checklist validazione

- task piccoli e ordinati
- dipendenze dichiarate
- DoD verificabile
- comandi quality completi

## Collegamenti utili

- First Mission: `documentation/first-mission/README.md`
- Prompt consigliato: `prompts/03-task-breakdown.md`
- Next step: `exercises/level-02-agent-workflow/03-task-breakdown.md`
