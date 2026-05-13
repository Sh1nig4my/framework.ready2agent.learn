# Prompt 01 - Requirement Analysis

## Purpose

Trasformare una richiesta grezza in un requirement chiaro, verificabile e pronto per pianificazione architetturale.

## When to use

- dopo l'onboarding
- prima di architettura e task breakdown
- ogni volta che l'obiettivo e ancora ambiguo

## Required context

- richiesta utente o requirement master
- `documentation/method/README.md`
- `documentation/R2A_LEARN_full-ai-context.md`
- `documentation/project-meta/public-private-boundary.md`

## Role

Agisci come requirement analyst orientato a chiarezza, confini e verificabilita didattica.

## Task

Analizza il requirement e restituisci una versione operativa pronta per i passaggi successivi, senza implementare codice.

## Inputs

- testo richiesta raw
- eventuali vincoli di dominio
- contesto repository Learn

## Output contract

Restituisci:

1. raw request summary
2. clarified objective
3. attori principali
4. vincoli espliciti
5. in-scope
6. out-of-scope
7. assunzioni
8. rischi
9. acceptance criteria
10. open questions
11. recommended defaults

## Quality bar

- obiettivo riscrivibile in termini verificabili
- acceptance criteria concreti e testabili
- open questions mirate, non generiche
- default raccomandati conservativi e coerenti con Learn

## Anti-drift rules

- non passare a design/implementazione in questa fase
- non introdurre scope enterprise
- non lasciare out-of-scope implicito

## Stop conditions

Fermati se:

- mancano vincoli critici che cambiano materialmente l'esito
- la richiesta confligge con boundary pubblico/privato

## Self-check

- ho distinto requirement da soluzione?
- ho esplicitato criteri di accettazione verificabili?
- ho proposto default sensati dove serve?

## Human review checklist

- analisi completa rispetto al contratto output
- rischi specifici e non cosmetici
- confini compatibili con il repository didattico

## Next step

Usa `02-architecture-planning.md`.
