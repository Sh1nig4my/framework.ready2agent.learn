# Policy Server-Side Design
## Livello
4 - Case Study
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
| Chiarezza obiettivo | assente | parziale | chiaro ma incompleto | chiaro e completo |
| Confini scope/out-of-scope | assenti | ambigui | quasi completi | espliciti e rigorosi |
| Qualita prompt/brief | vago | parzialmente utile | operativo con lacune | operativo e riusabile |
| Verificabilita output | non verificabile | poco misurabile | misurabile in parte | misurabile con criteri chiari |
| Rischi e trade-off | assenti | superficiali | presenti ma incompleti | prioritizzati con mitigazione |
| Allineamento metodo/gate | assente | parziale | buono | completo |

Punteggio totale: 0-18.
## Prossimo esercizio consigliato
`03-role-permission-matrix.md`
