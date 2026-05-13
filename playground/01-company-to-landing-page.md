# Company to Landing Page

## Input confuso

"Abbiamo un prodotto B2B, ci serve una landing bella che converta."

## Prompt debole

```text
Scrivi una landing page per il nostro prodotto.
```

## Output mediocre

- headline generica
- sezioni standard senza target chiaro
- CTA vaga
- nessun criterio di validazione

## Prompt migliorato (Ready2Agent)

```text
Agisci come product copy strategist e frontend planner.

Trasforma questi input in una landing operativa:
- Nome progetto: <...>
- Settore: <...>
- Pubblico: <...>
- Problema: <...>
- Promessa: <...>
- Tono: <...>
- CTA principale: <...>
- Vincoli: <...>

Output richiesto:
1) Value proposition in 1 frase.
2) Struttura landing in 6-8 sezioni ordinate.
3) Hero copy (headline, subheadline, CTA).
4) Copy breve per ogni sezione.
5) Prompt operativo per generare codice Next.js + CSS.
6) Checklist di validazione (chiarezza, coerenza, CTA, mobile).

Vincoli:
- Linguaggio concreto, no hype.
- Ogni sezione deve spiegare cosa, perche, azione.
- Output in italiano.
```

## Output buono/eccellente

- proposta di valore specifica
- sezioni ordinate per percorso utente
- CTA coerente con problema e target
- checklist pronta per review

## Perche migliora

- riduce ambiguita iniziale
- impone output verificabile
- collega copy e implementazione

## Checklist validazione

- promessa specifica e comprensibile
- target riconoscibile
- CTA coerente con obiettivo
- sezioni senza ridondanze

## Collegamenti utili

- First Mission: `documentation/first-mission/README.md`
- Prompt consigliato: `prompts/01-requirement-analysis.md`
- Next step: `exercises/level-03-practical-builds/01-company-landing-page.md`
