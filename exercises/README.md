# Exercises Ready2Agent Learn

## Filosofia degli esercizi

Gli esercizi di Learn non servono a produrre output "belli". Servono a prendere decisioni sotto vincoli, misurare la qualita e governare un coding agent.

## Differenza tra playground ed esercizi

- Playground: primo impatto, risultati veloci, bassa frizione.
- Esercizi: progressione didattica, valutazione, tracker, autocorrezione.

## Livelli 1-4

- Livello 1 - Foundations: da idea vaga a oggetti verificabili.
- Livello 2 - Agent Workflow: controllo output agente e gestione drift.
- Livello 3 - Practical Builds: output frontend/didattici concreti.
- Livello 4 - Case Study: sfida Auth/IAM complessa e rigorosa.

## Come usare Codex/OpenCode

1. Avvia con `prompts/00-agent-onboarding.md`.
2. Leggi l'esercizio selezionato.
3. Usa il prompt consigliato dell'esercizio.
4. Valida l'output con i criteri indicati.
5. Aggiorna il tracker.

## Come aggiornare `tracker.md`

Dopo ogni esercizio, aggiorna:

- stato
- output prodotto
- quality check
- decisioni e correzioni

## Come usare soluzioni e rubriche

- Soluzioni complete: solo livelli 1 e 2 (`exercises/solutions/`).
- Livelli 3 e 4: usa rubriche e checklist, senza soluzione completa.

## Rubriche numeriche livelli 3-4

Ogni esercizio livello 3 e 4 include una rubrica docente `0-3` su 6 dimensioni (totale `0-18`).

- `0-7`: insufficiente
- `8-12`: base
- `13-16`: buono
- `17-18`: eccellente

Registra il punteggio in `exercises/tracker.md` subito dopo la correzione.

## Come evitare output passivi

- non accettare output senza criteri
- chiedi sempre assunzioni e rischi
- correggi prompt al primo segnale di drift
- valida con quality gate prima di chiudere
