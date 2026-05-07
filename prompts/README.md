# Prompts

## Perche esiste questa cartella

I prompt di Ready2Agent Learn sono strumenti operativi per guidare agenti di coding. Non sono frasi magiche e non sostituiscono il pensiero architetturale: servono a fornire contesto, vincoli, output atteso e criteri di validazione.

## Come usare i prompt

1. leggi `README.md` e il contesto del repository
2. scegli il prompt della fase corrente
3. copia il prompt e incollalo nell'agente
4. verifica l'output rispetto a checklist e confini
5. passa al prompt successivo solo quando il risultato e chiaro

## Tabella dei prompt principali

| Prompt | Quando usarlo | Cosa produce | Input consigliati | Output atteso |
|---|---|---|---|---|
| `00-agent-onboarding.md` | Inizio lavoro | piano operativo iniziale | README + full context | scope, rischi, piano |
| `01-requirement-analysis.md` | Dopo onboarding | comprensione del requisito | requirement master | summary, assunzioni, rischi |
| `02-architecture-planning.md` | Dopo analisi | architettura target | analisi + docs method | layer, confini API, modello |
| `03-task-breakdown.md` | Dopo architettura | lista task eseguibili | architettura + requirement | task ordinati, dipendenze, DoD |
| `04-implementation-start.md` | Fase esecutiva | modifica di un task | task corrente + file target | codice + riepilogo tecnico |
| `05-quality-gate.md` | Fine iterazione | verifica tecnica | diff + docs aggiornate | esito gate + piano fix |
| `06-documentation-alignment.md` | Dopo validazione | docs coerenti | codice + workflow + README | docs riallineate |

## Sequenza consigliata

Onboarding -> Requirement Analysis -> Architecture Planning -> Task Breakdown -> Implementation -> Quality Gate -> Documentation Alignment

## Prompt standard di avvio

```text
Agisci come coding agent su Ready2Agent Learn.
Prima di qualsiasi modifica leggi, in ordine:
1) README.md
2) documentation/R2A_LEARN_full-ai-context.md
3) documentation/quickstart/agent_start_here.md
4) workflow/README.md
5) prompts/README.md

Poi:
- identifica lo scope del task
- non implementare fuori scope
- non reintrodurre codice enterprise
- mantieni documentazione allineata
- se il task riguarda workflow usa prompts/workflow-maintenance/
- se il task riguarda implementazione usa i prompt principali 00-06

Output richiesto prima delle modifiche:
- piano operativo
- file coinvolti
- rischi principali
```

## Prompt standard per implementazione puntuale

```text
Task: <descrizione task>

Leggi prima:
- workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md
- prompts/04-implementation-start.md
- file sorgente coinvolti

Vincoli:
- implementa solo questo task
- nessuna feature extra
- aggiorna documentazione se cambia comportamento
- esegui lint, build, typecheck

Output:
- modifiche fatte
- motivazione tecnica
- esito quality gate
```

## Prompt standard per revisione documentazione

```text
Agisci come technical writer per Ready2Agent Learn.

Leggi:
- README.md
- documentation/README.md
- workflow/README.md
- prompts/README.md

Obiettivo:
- riallineare documentazione e codice
- migliorare chiarezza per non tecnici e coding agent
- correggere link rotti o riferimenti incoerenti

Output:
- elenco file aggiornati
- miglioramenti principali
- eventuali gap residui
```

## Differenza tra prompt principali e workflow-maintenance

- Prompt principali: guidano il percorso completo dalla comprensione all'implementazione.
- Workflow-maintenance: aiutano a generare, mantenere e validare requisiti, task e tracking di processo.

## Errori comuni

- copiare un prompt senza allegare contesto
- saltare requirement analysis
- chiedere implementazioni troppo grandi in un colpo
- ignorare quality gate
- non aggiornare documentazione
- non definire output atteso
