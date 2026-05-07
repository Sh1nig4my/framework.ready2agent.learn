# Workflow Maintenance 01 - Generate Workflow Chapters

## A cosa serve

Genera capitoli operativi a partire da un master requirement, cosi il percorso non resta astratto.

## File da leggere

- requirement master
- `workflow/README.md`
- `prompts/workflow-maintenance/README.md`

## Prompt pronto da copiare

```text
Partendo dal master requirement, genera i capitoli workflow necessari.
Per ogni capitolo indica: obiettivo, input, output, dipendenze, rischi, quality gate.
Mantieni scope didattico Ready2Agent Learn.
```

## Output atteso

- capitoli ordinati
- obiettivi e confini per capitolo

## Checklist umana

- capitoli coprono tutto lo scope
- no capitoli enterprise

## Errori comuni

- capitoli troppo vaghi
- salti logici tra fasi
