# Prompt 01 - Requirement Analysis

## A cosa serve

Trasforma il requirement master in comprensione operativa concreta.

## Quando usarlo

- dopo onboarding
- prima di proporre architettura o task

## File da leggere prima

- requirement master
- `documentation/method/README.md`
- `documentation/R2A_LEARN_full-ai-context.md`

## Prompt da copiare nell'agente

```text
Analizza il requirement master del caso studio Auth/IAM in Ready2Agent Learn.
Non scrivere codice.

Restituisci:
- summary
- assumptions
- open questions
- risks
- implementation boundaries
- suggested task groups
```

## Output atteso

Analisi strutturata, con confini chiari e rischi espliciti.

## Checklist per l'umano

- l'analisi rispetta out-of-scope
- i rischi non sono generici
- i task groups sono realistici

## Errori comuni

- confondere requirement con implementazione
- ignorare vincoli di sicurezza

## Passaggio successivo

Usa `02-architecture-planning.md`.
