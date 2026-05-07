# Workflow Maintenance Prompts

## Perche questa sezione e separata

Questi prompt non servono a implementare feature direttamente. Servono a mantenere ordinato il processo: requisito, capitoli, task, tracker e consistenza documentale.

## Quando usarli

- quando devi generare capitoli workflow
- quando devi trasformare requisito in task
- quando devi aggiornare tracking e stato
- quando devi verificare coerenza tra requirement, prompt, task e documentazione

## Tabella prompt workflow

| Prompt | Quando usarlo | Input | Output |
|---|---|---|---|
| `01-generate-workflow-chapters.md` | Da requirement master a struttura capitoli | requirement master | capitoli workflow |
| `02-generate-workflow-tasks.md` | Da capitoli a task eseguibili | capitoli + requirement | task ordinati con dipendenze |
| `03-update-workflow-tracker.md` | Aggiornare avanzamento | stato lavori + risultati gate | tracker aggiornato |
| `04-review-workflow-consistency.md` | Audit di coerenza | requirement + workflow + prompt + documentazione | report gap e fix |

## Relazione con workflow/

`workflow/` contiene memoria e struttura del processo. `prompts/workflow-maintenance/` contiene gli strumenti per mantenerla affidabile nel tempo.
