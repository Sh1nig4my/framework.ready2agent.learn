# Route Protection Strategy
## Livello
4 - Case Study

## Livello case study (A/B/C)
Level B - Mocked implementation
## Obiettivo
Definire strategia protezione route e API.
## Perche e importante
Evita bypass di controlli.
## Scenario
Area riservata con pagine multi-ruolo.
## Input disponibili
Matrice permessi + blueprint policy.
## Task richiesto
Mappa route pubbliche/protette e criteri accesso.
## Vincoli
Niente integrazioni esterne.
## Prompt consigliato
`prompts/02-architecture-planning.md`
## Output atteso
Strategia route protection.
## Criteri di valutazione
Coerenza con matrice ruoli.
## Errori comuni
Protezione solo client-side.
## Aggiorna il tracker
Segna gap residui.
## Variante avanzata
Aggiungi casi edge (sessione scaduta, ruolo revocato).

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

- [ ] route pubbliche/protette mappate
- [ ] criteri accesso coerenti con matrice ruoli
- [ ] edge case essenziali considerati
- [ ] scorecard compilata

## Rubrica, scorecard e retro

- Rubrica standard: `exercises/rubrics/standard-rubric.md`
- Scorecard: `exercises/rubrics/scorecard-template.md`
- Retrospettiva: `exercises/templates/retrospective-template.md`
- Esempi: `exercises/examples/README.md`

## Prossimo esercizio consigliato
`05-auth-iam-task-breakdown.md`
