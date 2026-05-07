# Doc Review and Improvement

## Quando usarlo

Quando hai documentazione presente ma poco chiara o non allineata al codice.

## Cosa ottieni

Analisi gap, proposta miglioramenti, versione riscritta di sezioni critiche.

## Input richiesti

- file doc da revisionare
- obiettivo del documento
- pubblico target
- eventuali file codice correlati

## Prompt pronto da copiare

```text
Agisci come technical writer orientato a prodotti didattici.

Documenti da revisionare:
<lista file>

Obiettivo doc:
<...>

Pubblico target:
<...>

Output richiesto:
1) Gap principali (chiarezza, struttura, coerenza).
2) Sezioni da riscrivere con priorita.
3) Proposta di nuova struttura (cosa/perche/come).
4) Versione migliorata delle 2 sezioni piu critiche.
5) Checklist di allineamento doc-codice.

Vincoli:
- Linguaggio concreto.
- No marketing vuoto.
- Ogni sezione deve dire cosa fare subito.
```

## Output atteso

Piano di miglioramento documentale con esempi riscritti.

## Come valutare il risultato

- il documento diventa piu azionabile?
- i link e riferimenti sono coerenti?
- si riducono ambiguita per nuovi utenti?

## Variante avanzata

Chiedi una revisione comparata:

- versione per non tecnici
- versione per developer

## Prossimo step consigliato

Usa `prompts/06-documentation-alignment.md` per applicare i fix nel repository.
