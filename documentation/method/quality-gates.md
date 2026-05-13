# Quality Gates

## Cosa significa

Verifiche minime obbligatorie prima di dichiarare un task completato.

## Perche serve

Riduce regressioni, drift strutturale e documentazione non allineata.

## Come usarlo con un agente

Esegui sempre:

- `npm run lint`
- `npm run build`
- `npm run typecheck`
- `npm run check:structure`
- `npm run check:prompts`
- `npm run check:boundary`
- `npm run check:routes`
- `npm run check:links`
- `npm run check:content-drift`

## Esempio pratico

Dopo una modifica su landing o documentazione, esegui `npm run quality` e registra esito nel tracker.

## Errori comuni

- saltare gate dopo piccole modifiche
- non documentare fallimenti
- ignorare gate strutturali

## Checklist

- gate eseguiti
- output registrato
- fix applicati se fail
- documentazione aggiornata dopo fix
