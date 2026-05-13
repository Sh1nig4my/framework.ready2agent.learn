# Policy Server-Side Design
## Livello
4 - Case Study

## Livello case study (A/B/C)
Level A - Conceptual
## Obiettivo
Progettare enforcement policy lato server in modo didattico.
## Perche e importante
La UI non e trusted boundary.
## Scenario
Accessi differenziati per ruolo.
## Input disponibili
Requirement master + analisi precedente.
## Task richiesto
Disegna strategia policy e punti di controllo.
## Vincoli
Niente auth enterprise completa.
## Prompt consigliato
`prompts/02-architecture-planning.md`
## Output atteso
Blueprint policy verificabile.
## Criteri di valutazione
Copertura casi autorizzati/non autorizzati.
## Errori comuni
Controlli solo frontend.
## Aggiorna il tracker
Registra decisioni policy.
## Variante avanzata
Aggiungi tabella threat -> mitigation.

## Rubrica valutazione docente (0-3)

| Dimensione | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Requirement clarity | assente | debole | buono | eccellente |
| Scope discipline | assente | debole | buono | eccellente |
| Prompt quality | assente | debole | buono | eccellente |
| Agent control | assente | debole | buono | eccellente |
| Validation | assente | debole | buono | eccellente |
| Documentation trace | assente | debole | buono | eccellente |

Punteggio totale: 0-18.

## Checklist di completamento

- [ ] policy con punti di controllo espliciti
- [ ] casi autorizzati/non autorizzati coperti
- [ ] confine didattico rispettato
- [ ] scorecard compilata

## Rubrica, scorecard e retro

- Rubrica standard: `exercises/rubrics/standard-rubric.md`
- Scorecard: `exercises/rubrics/scorecard-template.md`
- Retrospettiva: `exercises/templates/retrospective-template.md`
- Esempi: `exercises/examples/README.md`

## Prossimo esercizio consigliato
`03-role-permission-matrix.md`
