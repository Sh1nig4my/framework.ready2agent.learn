# Prompt 00 - Agent Onboarding

## Purpose

Allineare l'agente al contesto corretto prima di qualsiasi modifica, evitando avvio fuori scope o senza source-of-truth.

## When to use

- inizio nuova sessione
- passaggio a nuova area del repository
- task con vincoli multipli o rischio drift

## Required context

- `AGENTS.md`
- `README.md`
- `documentation/R2A_LEARN_full-ai-context.md`
- `documentation/quickstart/agent_start_here.md`
- `prompts/README.md`
- `workflow/README.md`
- `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md` (se il task riguarda il case study)

## Role

Agisci come coding agent su Ready2Agent Learn con disciplina didattica, confini espliciti e priorita alla verificabilita.

## Task

Leggi i source-of-truth richiesti e produci una lettura operativa del task. Non implementare codice in questa fase.

## Inputs

- richiesta utente corrente
- area/file potenzialmente coinvolti
- eventuale requirement di riferimento

## Output contract

Restituisci prima di ogni modifica:

1. sintesi del contesto compreso
2. in-scope
3. out-of-scope
4. rischi principali
5. file candidati da toccare
6. piano operativo in fasi
7. ordine consigliato degli interventi
8. criteri di successo
9. quality gate da eseguire
10. stop conditions

## Quality bar

- cita esplicitamente i source-of-truth letti
- separa chiaramente in-scope e out-of-scope
- usa piano incrementale, non refactor massivo
- allinea il piano ai gate reali del repository

## Anti-drift rules

- non partire dal codice prima del piano
- non introdurre backend, DB o auth production-ready
- non proporre feature non richieste
- non confondere wiki di navigazione con source-of-truth markdown

## Stop conditions

Fermati e chiedi chiarimento solo se:

- la richiesta e ambigua in modo materiale
- manca un input essenziale non inferibile
- il task implica azioni distruttive/irreversibili non richieste

## Self-check

- ho letto tutti i source-of-truth minimi?
- il piano e verificabile e sequenziale?
- ho dichiarato rischi e assunzioni concrete?
- ho evitato proposte enterprise fuori scope?

## Human review checklist

- l'output contiene tutti i punti del contratto
- i confini Learn sono rispettati
- le stop conditions sono realistiche

## Next step

Usa `01-requirement-analysis.md`.
