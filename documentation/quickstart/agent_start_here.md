# Agent Start Here

## Sequenza operativa obbligatoria

1. leggi `README.md`
2. leggi `documentation/R2A_LEARN_full-ai-context.md`
3. leggi `workflow/README.md`
4. leggi requisito master
5. leggi il prompt corrente

## Regole di esecuzione

- non implementare fuori scope
- non creare feature non richieste
- non ripristinare runtime enterprise
- implementare un task alla volta
- mantenere documentazione allineata al codice

## Verifica finale

Eseguire:

```bash
npm run lint
npm run build
npm run typecheck
```

## Output richiesto dall'agente

- riepilogo modifiche
- quality gate eseguiti
- rischi residui
- prossimi step raccomandati
