# Prompt 00 - Agent Onboarding

## A cosa serve

Serve a far partire l'agente con il contesto corretto prima di toccare il codice.

## Quando usarlo

- inizio di una nuova sessione
- cambio di area funzionale
- task complesso con molte dipendenze

## File da leggere prima

- `README.md`
- `documentation/R2A_LEARN_full-ai-context.md`
- `documentation/quickstart/agent_start_here.md`
- `workflow/README.md`
- requirement master del caso studio

## Prompt da copiare nell'agente

```text
Agisci come coding agent su Ready2Agent Learn.
Prima di modificare file, leggi i documenti source-of-truth del repository.
Non implementare nulla in questa fase.

Output richiesto:
1) scope compreso
2) confini (in-scope / out-of-scope)
3) rischi principali
4) piano operativo in step
```

## Output atteso

- piano operativo iniziale
- elenco file chiave
- rischi e assunzioni

## Checklist per l'umano

- l'agente cita i file letti
- dichiara vincoli Learn
- non propone implementazioni fuori scope

## Errori comuni

- saltare la lettura del full context
- partire subito con codice

## Passaggio successivo

Usa `01-requirement-analysis.md`.
