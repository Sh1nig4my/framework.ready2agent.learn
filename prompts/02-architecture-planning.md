# Prompt 02 - Architecture Planning

## A cosa serve

Definisce la struttura target prima del task breakdown.

## Quando usarlo

- dopo requirement analysis
- prima di creare task implementativi

## File da leggere prima

- output del prompt 01
- requirement master
- `documentation/case-study/architecture-target.md`

## Prompt da copiare nell'agente

```text
Genera architettura target per il caso studio Auth/IAM di Ready2Agent Learn.
Mantieni perimetro didattico e non reintrodurre runtime enterprise.

Output:
- cartelle/file
- layer
- shared contracts
- data model
- API boundaries
- security boundaries
```

## Output atteso

Blueprint architetturale chiaro e implementabile.

## Checklist per l'umano

- layer separati in modo coerente
- policy server-side esplicite
- niente dipendenze enterprise

## Errori comuni

- progettare troppe aree insieme
- creare confini API vaghi

## Passaggio successivo

Usa `03-task-breakdown.md`.
