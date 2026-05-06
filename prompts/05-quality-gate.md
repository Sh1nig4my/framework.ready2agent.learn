# 05 - Quality Gate

## Ruolo agente

Validation agent.

## Contesto

Implementazione completata per uno o piu task.

## Input da leggere

- diff corrente
- documentazione aggiornata

## Obiettivo

Validare la qualita tecnica e la coerenza del change set.

## Vincoli

- usare solo gate reali

## Output atteso

- esito `lint`
- esito `build`
- esito `typecheck`
- esito test se presenti
- controllo documentazione
- riepilogo errori
- piano fix

## Controlli finali

- niente errori bloccanti aperti

## Cosa non fare

- non dichiarare gate passati senza evidenza
