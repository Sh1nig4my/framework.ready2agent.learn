# Route Protection Strategy
## Livello
4 - Case Study
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
| Chiarezza obiettivo | assente | parziale | chiaro ma incompleto | chiaro e completo |
| Confini scope/out-of-scope | assenti | ambigui | quasi completi | espliciti e rigorosi |
| Qualita prompt/brief | vago | parzialmente utile | operativo con lacune | operativo e riusabile |
| Verificabilita output | non verificabile | poco misurabile | misurabile in parte | misurabile con criteri chiari |
| Rischi e trade-off | assenti | superficiali | presenti ma incompleti | prioritizzati con mitigazione |
| Allineamento metodo/gate | assente | parziale | buono | completo |

Punteggio totale: 0-18.
## Prossimo esercizio consigliato
`05-auth-iam-task-breakdown.md`
