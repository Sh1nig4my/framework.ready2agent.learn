# AGENTS.md

## Repository identity

Ready2Agent Learn e un laboratorio open-source didattico (italiano-first) per imparare il metodo:

`idea -> requisito -> contesto -> prompt -> task -> implementazione -> quality gate -> documentazione`

Non e un runtime enterprise privato e non deve reintrodurre moduli business reali.

## Before editing

Prima di modificare file:

1. leggi i source-of-truth in ordine
2. definisci scope in-scope/out-of-scope
3. produci piano operativo
4. elenca file da toccare e rischi principali

## Source-of-truth order

1. `README.md`
2. `documentation/R2A_LEARN_full-ai-context.md`
3. `documentation/quickstart/agent_start_here.md`
4. `prompts/README.md`
5. `workflow/README.md`
6. `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
7. file sorgente coinvolti

## Task classification

- Documentazione: chiarezza, coerenza, link strategy, quality gate espliciti.
- Landing/wiki: orientamento umano, navigazione guidata, accessibilita base.
- Workflow maintenance: requirements, tracker, stato, coerenza processo.
- Prompt improvement: ruolo/input/output/controlli, sequenza `00 -> 06`.
- Frontend didattico: UI semplice, responsive, no dipendenze inutili.
- Case study: scope Auth/IAM didattico, niente enterprise runtime.

## Hard boundaries

Divieti espliciti:

- backend enterprise production-ready
- database reale obbligatorio
- MongoDB, Mongoose, Prisma
- NextAuth production-ready
- login/register completo da prodotto
- moduli business reali o codice cliente
- billing e SaaS multi-tenant production
- dipendenze non necessarie

## Editing rules

- implementa un task alla volta
- non aggiungere feature fuori scope
- mantieni coerenza tra codice, docs, prompt e workflow
- non rompere link principali della navigazione
- dichiara decisioni e trade-off in output finale

## Documentation alignment

Separazione responsabilita:

- `README.md`: orientamento umano principale
- `documentation/R2A_LEARN_full-ai-context.md`: contesto esteso agenti
- `documentation/quickstart/agent_start_here.md`: avvio operativo agente
- `prompts/README.md`: uso del sistema prompt
- `documentation/project-meta/release-definition-v1.1.2.md`: scope e DoD release

## Landing/wiki rules

- homepage: orientamento rapido + CTA verso `/wiki/...`
- wiki: livello di navigazione, non duplicazione totale dei markdown
- source-of-truth: link a GitHub `blob/main` quando serve il file `.md`
- mantenere layout leggibile su mobile/desktop e heading gerarchici

## Workflow maintenance rules

- requirement, tracker e stato devono restare coerenti
- ogni modifica di processo deve essere tracciabile
- usare i prompt `prompts/workflow-maintenance/` per task sul workflow

## Quality gates

Sequenza standard:

```bash
npm run lint
npm run build
npm run typecheck
npm run check:structure
npm run quality
```

`npm run quality` aggrega i principali controlli. In chiusura task/release, riporta anche i singoli esiti.

## Final response format

Usa questo formato:

- sintesi delle modifiche
- file creati
- file modificati
- miglioramenti principali
- esito quality gate (PASS/FAIL)
- rischi residui
- prossimi step consigliati
