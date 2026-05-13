# Doc Review and Improvement

## Input confuso

"La documentazione c'e ma e difficile da seguire e non sappiamo cosa correggere prima."

## Prompt debole

```text
Rivedi la documentazione e migliorala.
```

## Output mediocre

- feedback generico
- priorita assenti
- nessun collegamento a file/repo

## Prompt migliorato (Ready2Agent)

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

## Output buono/eccellente

- piano miglioramento con priorita
- sezioni critiche gia riscritte
- checklist doc-codice riusabile

## Perche migliora

- rende la review azionabile
- evita revisioni cosmetiche
- allinea documentazione e comportamento reale

## Checklist validazione

- gap specifici e non generici
- priorita chiare
- riferimenti coerenti a file reali
- riduzione ambiguita per nuovi utenti

## Collegamenti utili

- First Mission: `documentation/first-mission/README.md`
- Prompt consigliato: `prompts/06-documentation-alignment.md`
- Next step: `exercises/level-02-agent-workflow/05-define-quality-gate.md`
