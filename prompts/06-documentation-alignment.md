# Prompt 06 - Documentation Alignment

## A cosa serve

Assicura coerenza tra codice, workflow, prompt e documentazione.

## Quando usarlo

- dopo quality gate
- quando una modifica cambia comportamento o percorso d'uso

## File da leggere prima

- `README.md`
- `documentation/README.md`
- `documentation/quickstart/*`
- `workflow/README.md`
- `prompts/README.md`
- `documentation/R2A_LEARN_full-ai-context.md`

## Prompt da copiare nell'agente

```text
Riallinea la documentazione di Ready2Agent Learn al codice corrente.

Verifica:
- README principale
- quickstart
- workflow
- prompt
- full AI context

Output:
- file aggiornati
- motivazione modifiche
- eventuali gap residui
```

## Output atteso

Documentazione coerente, chiara e senza link rotti.

## Checklist per l'umano

- testo coerente con identita Learn
- riferimenti interni validi
- nessuna narrativa enterprise reintrodotta

## Errori comuni

- aggiornare solo codice e non docs
- lasciare quickstart incoerenti con workflow

## Passaggio successivo

Torna al prompt 00 per una nuova iterazione o chiudi il ciclo.
