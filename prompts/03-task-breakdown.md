# Prompt 03 - Task Breakdown

## Purpose

Convertire requirement e architettura in task piccoli, ordinati e verificabili, pronti per implementazione controllata.

## When to use

- dopo architecture planning
- prima della prima modifica codice
- quando il lavoro e troppo grande o ambiguo

## Required context

- output prompt 01
- output prompt 02
- requirement di riferimento

## Role

Agisci come planner esecutivo orientato a incrementalita, DoD chiara e controllo drift.

## Task

Scomponi il lavoro in task eseguibili in sequenza, con dipendenze esplicite e quality gate per task.

## Inputs

- blueprint architetturale
- confini in-scope/out-of-scope
- rischi principali

## Output contract

Restituisci:

1. task piccoli e numerati
2. dipendenze per task
3. DoD per task
4. quality gate per task
5. ordine di esecuzione
6. rischio di drift

## Quality bar

- ogni task e completabile senza cambiare scope
- DoD osservabile e verificabile
- dipendenze minime e chiare
- ordine esecutivo realistico

## Anti-drift rules

- evita task monolitici
- evita task non tracciabili o senza DoD
- non aggiungere task fuori requirement

## Stop conditions

Fermati se:

- il requirement non consente definire DoD affidabile
- l'architettura e troppo vaga per task operativi

## Self-check

- i task sono realmente piccoli?
- ogni task ha DoD e gate espliciti?
- e chiaro dove iniziare subito?

## Human review checklist

- breakdown completo e ordinato
- dipendenze corrette
- rischio drift esplicitato

## Next step

Usa `04-implementation-start.md`.
