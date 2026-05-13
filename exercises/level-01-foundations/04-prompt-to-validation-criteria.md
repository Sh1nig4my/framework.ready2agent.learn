# Prompt to Validation Criteria

## Livello

1 - Foundations

## Obiettivo

Derivare criteri di validazione dall'output atteso del prompt.

## Perche e importante

Se non sai validare, non sai chiudere il task.

## Scenario

Hai ottenuto un output ma non sai se accettarlo.

## Input disponibili

- prompt creato
- output agente

## Task richiesto

Definisci rubriche di validazione: completezza, coerenza, rischio, azionabilita.

## Vincoli

- criteri misurabili
- nessun criterio tautologico

## Prompt consigliato

`prompts/05-quality-gate.md`

## Output atteso

Checklist di validazione riusabile.

## Criteri di valutazione

- criteri oggettivi
- presenza soglie minime

## Errori comuni

- criteri soggettivi
- assenza di fallback

## Aggiorna il tracker

Registra quality gate eseguiti.

## Variante avanzata

Aggiungi matrice rischio/impatto per decidere revisione o accettazione.

## Checklist di completamento

- [ ] criteri di validazione misurabili
- [ ] soglie minime esplicite
- [ ] fallback in caso di output insufficiente
- [ ] scorecard compilata

## Rubrica e scorecard

- Rubrica standard: `exercises/rubrics/standard-rubric.md`
- Scorecard: `exercises/rubrics/scorecard-template.md`
- Retrospettiva: `exercises/templates/retrospective-template.md`
- Esempi: `exercises/examples/README.md`

## Prossimo esercizio consigliato

`exercises/level-02-agent-workflow/01-review-incomplete-agent-output.md`
