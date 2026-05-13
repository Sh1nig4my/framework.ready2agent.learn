# Workflow

## Cos'e un workflow in Ready2Agent Learn

Un workflow e la memoria ordinata del lavoro. Il workflow e memoria, non burocrazia: mantiene controllo umano e continuita operativa quando il lavoro passa attraverso un coding agent.

## Perche serve

- i task complessi non si gestiscono bene con un solo prompt
- spezza il lavoro in fasi verificabili
- lascia traccia delle decisioni importanti
- rende possibile audit, revisione e riallineamento

## Differenza tra requisito, workflow, prompt e task

| Elemento | Domanda a cui risponde | Esempio |
|---|---|---|
| Requisito | Cosa vogliamo ottenere? | Sistema login/logout con ruoli |
| Workflow | Come organizziamo il percorso? | Fasi 1-9 del caso studio |
| Prompt | Come istruiamo l'agente? | "Analizza requisito e proponi confini" |
| Task | Cosa facciamo ora? | Creare contratto `User` |

## Struttura della cartella

```text
workflow/
  README.md
  requirements/
    r2a-learn-auth-iam-case-study/
  trackers/
    auth-iam-case-study-tracker.md
```

## Caso studio presente

Il workflow attuale ruota intorno al caso Auth/IAM didattico. L'obiettivo non e consegnare una piattaforma completa, ma insegnare come costruire e validare un sistema progressivamente.

Modello esplicito del case study:

- Level A - Conceptual
- Level B - Mocked implementation
- Level C - Transfer to private runtime (concettuale)

## Come usare il workflow con Codex

1. leggi il master requirement
2. carica le regole skills da `.agents/skills/`
3. usa i prompt di `prompts/workflow-maintenance/` per generare capitoli o task
4. implementa con i prompt principali (`prompts/00` -> `06`)
5. aggiorna stato e decisioni nel workflow
6. valida con quality gate
7. riallinea la documentazione

## Errori comuni

- partire dal codice senza requisito
- saltare il task breakdown
- concentrare tutto in un unico prompt
- non aggiornare tracking e stato
- non verificare output dell'agente

## Relazione con prompts/workflow-maintenance

`workflow/` contiene la memoria del processo. `prompts/workflow-maintenance/` contiene gli strumenti per crearla, mantenerla e verificarla.

## Tracker

Per tracciare stato, decisioni e rischi usa `workflow/trackers/auth-iam-case-study-tracker.md`.
