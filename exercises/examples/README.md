# Examples - Mediocre vs Eccellente

Questa cartella contiene pattern didattici per confrontare qualita output.

## Esempio rapido (Requirement)

### Output mediocre

```text
Voglio una dashboard per clienti. Deve essere semplice e veloce.
```

Perche e mediocre:

- obiettivo non verificabile
- scope non dichiarato
- nessun rischio/assunzione

### Output eccellente

```text
Obiettivo: definire una dashboard didattica per visualizzare elenco clienti mock e stato attivita in 1 pagina.
In-scope: struttura pagina, sezioni, CTA, dati statici.
Out-of-scope: backend reale, autenticazione production-ready, database.
Acceptance criteria: struttura con 4 sezioni, CTA chiara, checklist quality compilata.
Rischi: scope creep su funzionalita non richieste; copy ambiguo senza target.
```

Perche e eccellente:

- obiettivo chiaro e testabile
- confini espliciti
- criteri di accettazione verificabili

## Come usare questi esempi

1. confronta il tuo output con i due estremi
2. assegna punteggio con `exercises/rubrics/scorecard-template.md`
3. registra correzioni in `exercises/tracker.md`
