# Review Incomplete Agent Output

## Livello
2 - Agent Workflow
## Obiettivo
Rilevare gap in output incompleto e richiedere integrazioni corrette.
## Perche e importante
Accettare output incompleti crea debito decisionale.
## Scenario
L'agente consegna analisi senza rischi e senza criteri di done.
## Input disponibili
Output agente parziale, requirement, prompt usato.
## Task richiesto
Esegui review strutturata e genera richiesta di revisione.
## Vincoli
Feedback concreto, nessun giudizio generico.
## Prompt consigliato
`prompts/05-quality-gate.md`
## Output atteso
Lista gap + prompt di correzione.
## Criteri di valutazione
Gap prioritizzati e azioni chiare.
## Errori comuni
Dire solo "manca qualcosa".
## Aggiorna il tracker
Aggiorna errori/correzioni.
## Variante avanzata
Classifica gap per severita.
## Prossimo esercizio consigliato
`02-fix-prompt-drift.md`
