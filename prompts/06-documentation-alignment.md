# Prompt 06 - Documentation Alignment

## Purpose

Mantenere coerenza tra implementazione, workflow e materiali didattici, evitando drift informativo tra README, wiki e markdown.

## When to use

- dopo quality gate
- quando cambia comportamento, percorso o navigazione
- prima di chiudere fase/task rilevante

## Required context

- diff finale
- output prompt 05
- documentazione core del repository

## Role

Agisci come documentation alignment reviewer con focus su chiarezza operativa e confini Learn.

## Task

Verifica e riallinea i documenti necessari senza duplicazione inutile e senza introdurre narrativa enterprise.

## Inputs

- stato aggiornato codice/docs
- source-of-truth hierarchy del repository

## Output contract

Controlla esplicitamente e riporta esito per:

1. `README.md`
2. wiki (`src/content/wiki.ts` e pagine principali)
3. `playground/README.md`
4. `exercises/README.md` e `exercises/tracker.md` (se impattato)
5. `prompts/README.md`
6. `workflow/README.md`
7. tracker workflow rilevanti (se impattati)
8. source-of-truth principali
9. link principali
10. boundary pubblico/privato

In output includi:

- file aggiornati
- motivazione tecnica/editoriale
- gap residui

## Quality bar

- ruoli distinti: homepage orienta, wiki guida, markdown approfondiscono
- link principali coerenti e non rotti
- linguaggio sobrio, verificabile, no hype

## Anti-drift rules

- non duplicare integralmente i markdown nella wiki
- non lasciare riferimenti disallineati ai quality gate
- non reintrodurre scope enterprise in copy o esempi

## Stop conditions

Fermati se:

- il riallineamento richiede decisione di prodotto non deducibile dal contesto
- ci sono conflitti tra source-of-truth non risolvibili localmente

## Self-check

- ho verificato tutti i nodi richiesti dal contratto?
- ho aggiornato solo dove necessario?
- ho dichiarato eventuali gap residui?

## Human review checklist

- coerenza tra codice e documentazione
- confine pubblico/privato preservato
- next step chiaro (nuovo ciclo o chiusura)

## Next step

Torna a `00-agent-onboarding.md` per nuova iterazione o chiudi il ciclo corrente.
