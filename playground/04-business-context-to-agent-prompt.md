# Business Context to Agent Prompt

## Input confuso

"L'obiettivo business e chiaro, ma l'agente continua a fare cose non richieste."

## Prompt debole

```text
Scrivi un prompt migliore per il nostro task.
```

## Output mediocre

- ruolo non definito
- output atteso ambiguo
- assenza di vincoli anti-drift

## Prompt migliorato (Ready2Agent)

```text
Agisci come orchestratore agent-native per un task software.

Contesto business:
- Obiettivo: <...>
- Target: <...>
- KPI/Risultato: <...>
- Vincoli: <...>
- Rischi: <...>

Produci un prompt pronto per coding agent con sezioni:
1) Ruolo agente.
2) Task specifico.
3) Input disponibili.
4) Output atteso.
5) Vincoli tecnici e di scope.
6) Quality check obbligatori.
7) Formato output finale richiesto.

Vincoli:
- Niente richieste vaghe.
- Niente obiettivi non verificabili.
- Inserisci anche cosa NON fare.
```

## Output buono/eccellente

- prompt completo e incollabile
- confini e non-obiettivi espliciti
- riduzione del rischio drift

## Perche migliora

- passa da desiderio a contratto operativo
- chiarisce controllo qualita e formato output
- facilita review umana

## Checklist validazione

- ruolo/task/input/output espliciti
- quality check verificabili
- presenza di non-obiettivi
- riduzione drift plausibile

## Collegamenti utili

- First Mission: `documentation/first-mission/README.md`
- Prompt consigliato: `prompts/04-implementation-start.md`
- Next step: `exercises/level-02-agent-workflow/02-fix-prompt-drift.md`
