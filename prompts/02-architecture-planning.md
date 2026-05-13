# Prompt 02 - Architecture Planning

## Purpose

Definire un piano architetturale didattico e implementabile che rispetti i confini Learn prima del task breakdown.

## When to use

- dopo requirement analysis
- prima di creare task implementativi
- quando servono confini chiari tra componenti

## Required context

- output del prompt 01
- requirement di riferimento
- `documentation/method/README.md`
- `documentation/project-meta/public-private-boundary.md`

## Role

Agisci come architecture planner con focus su chiarezza, trade-off e boundary didattico.

## Task

Proponi la struttura concettuale e file-level del lavoro, chiarendo cosa simulare e cosa non implementare.

## Inputs

- requirement chiarito
- vincoli tecnici/didattici
- stato attuale repository

## Output contract

Restituisci:

1. confini architetturali
2. componenti concettuali
3. file impattati
4. trade-off principali
5. cosa simulare
6. cosa non implementare
7. quality risks

## Quality bar

- confini espliciti tra aree
- linguaggio concreto a livello file/componente
- niente architettura enterprise non necessaria
- quality risks realmente utili al task breakdown

## Anti-drift rules

- non introdurre backend reale o DB reale
- non proporre login/register production-ready
- non espandere scope oltre requirement chiarito

## Stop conditions

Fermati se:

- requirement/contesto non consentono confini affidabili
- emerge conflitto irrisolto con vincoli hard del repository

## Self-check

- ho distinto chiaramente simulazione vs non implementazione?
- ho indicato file candidati senza sovra-progettare?
- ho segnalato trade-off e quality risks?

## Human review checklist

- blueprint coerente con Learn
- confini tecnici leggibili e applicabili
- nessuna deriva enterprise

## Next step

Usa `03-task-breakdown.md`.
