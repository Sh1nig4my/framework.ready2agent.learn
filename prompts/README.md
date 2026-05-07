# Prompts

## Perche esiste questa cartella

I prompt sono strumenti operativi. Ogni prompt deve dire ruolo, input, output e controlli.

## Relazione con playground

Il playground ti da il primo risultato rapido. I prompt `00-06` trasformano quel risultato in processo controllato.

## Relazione con exercises

Gli esercizi richiedono uso disciplinato dei prompt e aggiornamento tracker.

## Come usare i prompt

1. leggi `README.md` e il contesto del repository
2. scegli il prompt della fase corrente
3. copia il prompt e incollalo nell'agente
4. verifica l'output rispetto a checklist e confini
5. passa al prompt successivo solo quando il risultato e chiaro

## Quando usare i prompt principali 00-06

| Prompt | Quando usarlo | Cosa produce | Input consigliati | Output atteso |
|---|---|---|---|---|
| `00-agent-onboarding.md` | Avvio sessione | piano operativo | source-of-truth | scope + rischi + piano |
| `01-requirement-analysis.md` | Analisi richiesta | requirement chiarito | requirement/input business | obiettivo + confini + rischi |
| `02-architecture-planning.md` | Prima dei task | piano architettura | analisi + metodo | confini + componenti + trade-off |
| `03-task-breakdown.md` | Prima del codice | backlog task | architettura + requisito | task + dipendenze + DoD |
| `04-implementation-start.md` | Task in corso | implementazione scoped | task + file target | cambi + motivazione + check |
| `05-quality-gate.md` | Fine iterazione | validazione | diff + output comandi | pass/fail + fix plan |
| `06-documentation-alignment.md` | Chiusura ciclo | documentazione allineata | codice + workflow | aggiornamenti coerenti |

## Sequenza consigliata

Onboarding -> Requirement Analysis -> Architecture Planning -> Task Breakdown -> Implementation -> Quality Gate -> Documentation Alignment

## Quando usare workflow-maintenance

Usa `prompts/workflow-maintenance/` quando il task riguarda:

- generazione capitoli workflow
- generazione backlog da requirement
- aggiornamento tracker
- review consistenza requirement/workflow/documentazione

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

## Come valutare output

- e coerente con requirement e scope?
- e verificabile con gate?
- lascia traccia di decisioni e rischi?

## Cosa fare prima di implementare

1. chiarire requirement
2. definire task breakdown
3. confermare vincoli
4. dichiarare quality gate
