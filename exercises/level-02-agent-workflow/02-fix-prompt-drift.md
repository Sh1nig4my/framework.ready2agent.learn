# Fix Prompt Drift
## Livello
2 - Agent Workflow
## Obiettivo
Correggere deviazioni dell'agente rispetto a scope e vincoli.
## Perche e importante
Il drift e il principale costo nascosto del lavoro con agenti.
## Scenario
L'agente ha introdotto feature non richieste.
## Input disponibili
Prompt originale, output driftato, requirement.
## Task richiesto
Scrivi prompt di riallineamento e criteri di stop.
## Vincoli
Nessuna nuova feature.
## Prompt consigliato
`prompts/04-implementation-start.md`
## Output atteso
Prompt correttivo + checklist anti-drift.
## Criteri di valutazione
Riduzione scope creep.
## Errori comuni
Correzioni troppo ampie.
## Aggiorna il tracker
Registra decisione di rollback o fix incrementale.
## Variante avanzata
Definisci policy "drift escalation".

## Checklist di completamento

- [ ] prompt correttivo focalizzato sullo scope
- [ ] stop conditions esplicite
- [ ] strategia anti-drift verificabile
- [ ] scorecard compilata

## Rubrica e scorecard

- Rubrica standard: `exercises/rubrics/standard-rubric.md`
- Scorecard: `exercises/rubrics/scorecard-template.md`
- Retrospettiva: `exercises/templates/retrospective-template.md`
- Esempi: `exercises/examples/README.md`
## Prossimo esercizio consigliato
`03-task-breakdown.md`
