# Requirement to Context

## Livello

1 - Foundations

## Obiettivo

Convertire requirement in contesto operativo per agente.

## Perche e importante

Un requirement senza contesto non guida scelte corrette.

## Scenario

Hai un requirement approvato ma output agente incoerente.

## Input disponibili

- requirement creato nel task precedente
- struttura repo

## Task richiesto

Scrivi context pack: obiettivo, file, vincoli, quality gate, non-obiettivi.

## Vincoli

- includi riferimenti a file reali
- esplicita cosa NON fare

## Prompt consigliato

`prompts/00-agent-onboarding.md`

## Output atteso

Context pack pronto da incollare in un prompt implementativo.

## Criteri di valutazione

- file/aree coinvolte sono chiare
- vincoli e non-obiettivi sono completi

## Errori comuni

- contesto solo narrativo
- assenza di quality gate

## Aggiorna il tracker

Registra decisioni e rischi aperti.

## Variante avanzata

Crea due context pack: junior team e expert team.

## Prossimo esercizio consigliato

`exercises/level-01-foundations/03-context-to-prompt.md`
