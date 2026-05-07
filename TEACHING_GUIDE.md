# Teaching Guide - Ready2Agent Learn

## A cosa serve questa guida

Questa guida ti aiuta a usare Ready2Agent Learn come prodotto didattico operativo: lezione, workshop, percorso privato, mentoring o autoapprendimento guidato.

Obiettivo: far praticare il metodo, non far copiare output.

## Come usare Learn in una lezione da 60 minuti

Struttura consigliata:

1. 10 min: introduzione al problema (prompt vaghi -> output fragile).
2. 15 min: demo playground (`playground/01-company-to-landing-page.md`).
3. 20 min: micro esercizio livello 1 (`exercises/level-01-foundations/01-vague-idea-to-requirement.md`).
4. 10 min: review collettiva con criteri espliciti.
5. 5 min: aggiornamento tracker e takeaway.

Output minimo della classe:

- un requisito breve ma verificabile
- un prompt con input/output chiari
- una checklist di quality gate base

## Come usare Learn in un workshop da 2 ore

Struttura consigliata:

1. 20 min: allineamento metodo (`documentation/method/README.md`).
2. 30 min: playground a coppie (2 prompt diversi).
3. 35 min: esercizi livello 1 e 2 con tracker aggiornato.
4. 20 min: review output agent e correzione drift.
5. 15 min: debrief e piano step successivo.

Output minimo del workshop:

- requirement + prompt + task breakdown
- tracker con decisioni, errori, correzioni
- quality gate dichiarati

## Come usare Learn in una giornata formativa

Mattina:

- modulo 1: metodo e confini public/private
- modulo 2: playground guidato
- modulo 3: esercizi livello 1-2

Pomeriggio:

- modulo 4: practical builds (livello 3)
- modulo 5: case study Auth/IAM (livello 4)
- modulo 6: quality gate e allineamento documentazione

Consegna finale:

- output tracciato su `exercises/tracker.md`
- rubriche compilate per livelli 3-4
- piano miglioramento individuale

## Come usare Codex/OpenCode con gli studenti

Regole pratiche:

- l'agente legge prima i source-of-truth
- l'agente legge anche le skills didattiche in `.agents/skills/`
- il gruppo definisce il task prima del prompt
- ogni output viene valutato con criteri espliciti
- requisito, task e documentazione restano allineati

Sequenza skills-first consigliata prima dei prompt:

1. `.agents/skills/README.md`
2. `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`
3. `.agents/skills/ready2agent-learn-core/SKILL.md`

Sequenza raccomandata:

1. `prompts/00-agent-onboarding.md`
2. `prompts/01-requirement-analysis.md`
3. `prompts/03-task-breakdown.md`
4. `prompts/04-implementation-start.md`
5. `prompts/05-quality-gate.md`

## Percorso per persone non tecniche

Focus: capire il processo e prendere decisioni sul contesto.

- start: `documentation/quickstart/non_technical_start_here.md`
- pratica: playground 01, 02, 04
- esercizi: livello 1 completo
- valutazione: chiarezza obiettivi, vincoli, output atteso

## Percorso per developer junior

Focus: ridurre ambiguita e imparare quality gate.

- start: `documentation/quickstart/human_start_here.md`
- pratica: livelli 1 e 2
- consolidamento: livello 3 esercizi 01-03
- valutazione: task breakdown, controllo drift, validazione

## Percorso per founder / consulenti

Focus: tradurre business context in briefing operativo per agenti.

- start: playground 02 e 04
- poi: livello 3 esercizi 01, 02, 05
- avanzato: case study livello 4 (analisi e governance)
- valutazione: decisioni tracciate e output verificabili

## Percorso per developer esperti

Focus: standardizzazione team e governance tecnica.

- start: `documentation/method/README.md`
- poi: `workflow/README.md` + tracker Auth/IAM
- pratica: livelli 2, 3, 4
- valutazione: coerenza architettura, quality gate, doc alignment

## Come usare il playground

Il playground serve per ottenere rapidamente un primo output utile.

Usalo quando:

- devi partire da zero
- devi mostrare l'effetto del metodo in pochi minuti
- vuoi confrontare prompt diversi sullo stesso problema

Non usarlo come sostituto degli esercizi valutati.

## Come usare gli esercizi

Regola: ogni esercizio richiede una decisione.

- compila scenario e vincoli
- esegui prompt consigliato
- valuta l'output con rubriche
- aggiorna `exercises/tracker.md`

## Come usare il tracker

Il tracker non e burocrazia: e memoria operativa.

Aggiorna sempre:

- stato esercizio
- prompt usato
- errore incontrato
- correzione applicata
- gate eseguiti

## Come valutare gli output

Criteri minimi trasversali:

- chiarezza: cosa vuole ottenere il task
- confini: cosa e in-scope / out-of-scope
- verificabilita: output con criteri misurabili
- tracciabilita: decisioni e rischi esplicitati
- allineamento: requisito, task, codice e documentazione coerenti

Per livelli 3 e 4 usa anche la rubrica numerica `0-3` (totale `0-18`):

- 0-7: insufficiente
- 8-12: base
- 13-16: buono
- 17-18: eccellente

Feedback consigliato per fascia:

- insufficiente: riallinea obiettivo e confini prima di proseguire
- base: migliora verificabilita e gestione rischi
- buono: rinforza trade-off e quality gate
- eccellente: passa alla variante avanzata o a una peer review

## Errori didattici da evitare

- fare solo demo senza pratica
- valutare solo "se funziona" invece del processo
- saltare tracker e quality gate
- premiare prompt lunghi ma vaghi
- confondere Learn con runtime enterprise privato

## Materiali consigliati

- `README.md`
- `documentation/README.md`
- `playground/README.md`
- `exercises/README.md`
- `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
- `documentation/project-meta/public-private-boundary.md`
- `documentation/project-meta/editorial-style-guide.md`

## Checklist per il docente

- [ ] Ho definito obiettivo didattico della sessione
- [ ] Ho scelto esercizi coerenti con il livello
- [ ] Ho preparato il prompt di onboarding agente
- [ ] Ho definito rubriche di valutazione
- [ ] Ho previsto un momento di review critica output
- [ ] Ho fatto aggiornare tracker a ogni team/studente
- [ ] Ho verificato il confine pubblico/privato
- [ ] Ho chiuso con quality gate e prossimi step
