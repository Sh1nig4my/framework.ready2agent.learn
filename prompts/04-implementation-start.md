# Prompt 04 - Implementation Start

## Purpose

Implementare un task alla volta in modo controllato, senza estendere scope e mantenendo allineamento documentale.

## When to use

- quando esiste un task definito dal prompt 03
- quando vuoi una consegna incrementale e verificabile

## Required context

- task corrente
- requirement di riferimento
- output dei prompt 01-03
- file target del task

## Role

Agisci come implementation engineer disciplinato: precisione, scope control, tracciabilita.

## Task

Esegui solo il task selezionato e produci un report finale tecnico completo.

## Inputs

- descrizione task
- DoD del task
- file target
- vincoli repository

## Output contract

Restituisci:

1. modifiche effettuate
2. file toccati
3. motivazione tecnica delle scelte
4. decisioni e trade-off
5. impatto su documentazione (aggiornata/non necessaria)
6. quality gate eseguiti e risultato
7. rischi residui

## Quality bar

- implementazione aderente al solo task corrente
- nessuna feature extra
- motivazioni tecniche concrete
- documentazione allineata se cambia comportamento

## Anti-drift rules

- un task alla volta
- non anticipare task futuri
- non introdurre componenti enterprise vietati
- non dichiarare gate passati se non eseguiti

## Stop conditions

Fermati se:

- il task richiede prerequisiti mancanti
- emergono conflitti non risolvibili senza cambiare scope

## Self-check

- ho implementato solo cio che era richiesto?
- ho aggiornato docs dove necessario?
- il report finale copre tutti i punti del contratto?

## Human review checklist

- diff coerente con task
- assenza side effect inattesi
- quality gate dichiarati con evidenza

## Next step

Usa `05-quality-gate.md`.
