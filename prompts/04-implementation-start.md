# Prompt 04 - Implementation Start

## A cosa serve

Esegue un task specifico senza espandere lo scope.

## Quando usarlo

- quando hai un task definito
- quando vuoi implementazione incrementale controllata

## File da leggere prima

- task corrente
- requirement master
- file tecnici del task

## Prompt da copiare nell'agente

```text
Implementa solo il task selezionato nel repository Ready2Agent Learn.

Vincoli:
- un task alla volta
- nessuna feature extra
- non reintrodurre componenti enterprise
- aggiornare documentazione se cambia comportamento

Al termine esegui:
npm run lint
npm run build
npm run typecheck
```

## Output atteso

- diff coerente con task
- riepilogo tecnico
- esito quality gate

## Checklist per l'umano

- scope rispettato
- nessun side effect inatteso
- docs aggiornate quando necessario

## Errori comuni

- implementare anche task futuri
- saltare verifiche finali

## Passaggio successivo

Usa `05-quality-gate.md`.
