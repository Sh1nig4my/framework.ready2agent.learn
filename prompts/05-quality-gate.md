# Prompt 05 - Quality Gate

## A cosa serve

Valida la qualita tecnica del change set prima di chiudere il task.

## Quando usarlo

- dopo implementazione
- prima del riallineamento documentale finale

## File da leggere prima

- diff corrente
- file toccati
- documentazione aggiornata

## Prompt da copiare nell'agente

```text
Esegui quality gate sul lavoro corrente in Ready2Agent Learn.

Comandi obbligatori:
- npm run lint
- npm run build
- npm run typecheck
- npm run check:structure

Se ci sono errori:
- elenca cause
- proponi piano fix
```

## Output atteso

- esito dei tre gate
- eventuali errori
- piano fix con priorita

## Checklist per l'umano

- output con evidenza reale dei comandi
- eventuali failure spiegate con chiarezza

## Errori comuni

- dichiarare "ok" senza eseguire i comandi
- non distinguere warning da errori bloccanti

## Passaggio successivo

Usa `06-documentation-alignment.md`.
