# Prompts

## Perche esiste questa cartella

I prompt sono contratti operativi agent-safe. Ogni prompt principale `00-06` usa la stessa struttura verificabile.

Il prompt non e la richiesta: e il contratto operativo.

## Struttura standard (Prompt Contract)

Ogni prompt principale include sempre:

1. `Purpose`
2. `When to use`
3. `Required context`
4. `Role`
5. `Task`
6. `Inputs`
7. `Output contract`
8. `Quality bar`
9. `Anti-drift rules`
10. `Stop conditions`
11. `Self-check`
12. `Human review checklist`
13. `Next step`

## Relazione con playground

Il playground ti da il primo risultato rapido. I prompt `00-06` trasformano quel risultato in processo controllato.

## Relazione con exercises

Gli esercizi richiedono uso disciplinato dei prompt e aggiornamento tracker.

Prima di usare la sequenza completa `00-06`, e consigliato completare la First Mission:

- `documentation/first-mission/README.md`
- `documentation/first-mission/first-mission-dossier-template.md`

## Come usare i prompt

1. leggi `README.md` e il contesto del repository
2. leggi `AGENTS.md` per guardrail e confini
3. leggi le skills in `.agents/skills/`
4. scegli il prompt della fase corrente
5. copia il prompt e incollalo nell'agente
6. verifica l'output rispetto a checklist e confini
7. passa al prompt successivo solo quando il risultato e chiaro

## Quando usare i prompt principali 00-06

| Prompt | Quando usarlo | Cosa produce | Input consigliati | Output atteso |
|---|---|---|---|---|
| `00-agent-onboarding.md` | Avvio sessione | allineamento operativo | source-of-truth + richiesta | scope, confini, rischi, piano, stop conditions |
| `01-requirement-analysis.md` | Analisi richiesta | requirement chiarito | richiesta raw + vincoli | objective, scope, rischi, acceptance criteria |
| `02-architecture-planning.md` | Prima dei task | blueprint didattico | output 01 + boundary | confini, componenti, trade-off, quality risks |
| `03-task-breakdown.md` | Prima del codice | task plan incrementale | output 01-02 | task, dipendenze, DoD, gate, rischio drift |
| `04-implementation-start.md` | Task in corso | implementazione scoped | task + file target | cambi, file toccati, trade-off, gate |
| `05-quality-gate.md` | Fine iterazione | validazione completa | diff + stato repo | lint/build/typecheck/check:structure/quality |
| `06-documentation-alignment.md` | Chiusura ciclo | riallineamento docs | output 05 + docs | update coerenti, gap residui, boundary check |

## Sequenza consigliata

Onboarding -> Requirement Analysis -> Architecture Planning -> Task Breakdown -> Implementation -> Quality Gate -> Documentation Alignment

Collegamento consigliato:

`First Mission` -> Prompt `00 -> 06` -> Exercises/Workflow.

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

Leggi anche:
- .agents/skills/README.md
- .agents/skills/READY2AGENT_LEARN_ADAPTER.md
- .agents/skills/ready2agent-learn-core/SKILL.md

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
- esegui lint, build, typecheck, check:structure, quality

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
- usare prompt senza rispettare il contratto completo

## Come valutare output

- e coerente con requirement e scope?
- e verificabile con gate?
- lascia traccia di decisioni e rischi?

## Cosa fare prima di implementare

1. chiarire requirement
2. definire task breakdown
3. confermare vincoli
4. dichiarare quality gate
