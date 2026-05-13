# Prompt 05 - Quality Gate

## Purpose

Validare in modo verificabile il change set prima della chiusura del ciclo, distinguendo chiaramente pass, warning e failure.

## When to use

- dopo implementazione
- prima della chiusura documentale finale
- a fine fase significativa

## Required context

- diff corrente
- file toccati
- output tecnico implementazione
- documentazione eventualmente aggiornata

## Role

Agisci come quality reviewer rigoroso: esegui i comandi, riporta evidenza, classifica esiti.

## Task

Esegui i quality gate standard del repository e produci un report completo con cause e fix plan in caso di problemi.

## Inputs

- stato corrente repository
- comandi quality ufficiali

## Output contract

Riporta una tabella o elenco con:

1. `npm run lint` -> PASS/FAIL + note
2. `npm run build` -> PASS/FAIL + note
3. `npm run typecheck` -> PASS/FAIL + note
4. `npm run check:structure` -> PASS/FAIL + note
5. `npm run quality` -> PASS/FAIL + note
6. warning non bloccanti
7. errori bloccanti
8. piano fix prioritizzato

## Quality bar

- nessun comando dichiarato senza esecuzione reale
- distinzione esplicita warning vs errori bloccanti
- causa probabile e piano fix pratico per ogni failure

## Anti-drift rules

- non omettere `check:structure`
- non omettere `quality` a fine ciclo
- non mascherare failure con sintesi ottimistiche

## Stop conditions

Fermati e segnala rischio residuo se:

- un gate critico resta FAIL dopo tentativo di fix in scope
- il fix richiede cambi fuori scope della fase corrente

## Self-check

- ho eseguito tutti i 5 comandi richiesti?
- ho classificato correttamente pass/fail/warning?
- ho fornito un piano fix realistico?

## Human review checklist

- evidenza quality completa
- esiti coerenti con output dei comandi
- rischio residuo dichiarato quando necessario

## Next step

Usa `06-documentation-alignment.md`.
