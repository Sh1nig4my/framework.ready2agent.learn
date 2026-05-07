# Agent Start Here

Questa guida definisce il comportamento atteso per un coding agent che lavora su Ready2Agent Learn.

## Sequenza iniziale obbligatoria

1. leggi `README.md`
2. leggi `documentation/R2A_LEARN_full-ai-context.md`
3. leggi `prompts/README.md`
4. leggi `workflow/README.md`
5. leggi il requirement master
6. identifica se il task e di implementazione o workflow maintenance

## Distinzione operativa fondamentale

- Prompt principali (`prompts/00` -> `06`): per analizzare, progettare, implementare e validare.
- Prompt workflow-maintenance (`prompts/workflow-maintenance/`): per generare/aggiornare workflow, tracker e consistenza del processo.

## Regole di esecuzione

- produrre un piano prima di modificare file
- non reintrodurre codice enterprise
- non inventare feature fuori scope
- implementare un task alla volta
- mantenere documentazione allineata

## Quality gate obbligatori

```bash
npm run lint
npm run build
npm run typecheck
```

## Output finale richiesto

- file modificati
- motivazione tecnica delle scelte
- risultati dei quality gate
- eventuali rischi residui
- prossimi step consigliati
