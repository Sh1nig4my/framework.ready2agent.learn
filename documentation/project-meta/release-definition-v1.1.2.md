# Release Definition - Ready2Agent Learn v1.1.2

## Release name

Ready2Agent Learn v1.1.2 - Guided Wiki & Agent-Safe Navigation

## Goal

Rendere il repository esplorabile, verificabile e agent-safe completando la landing/wiki, allineando la documentazione e rafforzando i quality gate.

## Why this release exists

La v1.1.2 esiste per trasformare Learn da raccolta documentale ben strutturata a ambiente guidato con ingresso chiaro per umani e guardrail concreti per coding agent.

## Included

- landing orientata a navigazione wiki
- wiki interna con pagine guida principali
- strategia link ibrida (`/wiki/...` + GitHub `blob/main`)
- `AGENTS.md` root-level
- allineamento source-of-truth principali
- quality gate uniformi nella documentazione
- `scripts/check-structure.mjs` esteso con path e marker chiave

## Not included

- backend enterprise production-ready
- database reale obbligatorio
- MongoDB, Mongoose, Prisma
- NextAuth production-ready
- login/register completo da prodotto
- moduli business reali o codice cliente
- billing e SaaS multi-tenant production

## Definition of Done

- landing/wiki navigabile
- pagine secondarie principali create
- link principali normalizzati
- `AGENTS.md` presente
- `README.md` aggiornato
- `documentation/R2A_LEARN_full-ai-context.md` aggiornato
- `documentation/quickstart/agent_start_here.md` aggiornato
- quality gate uniformi
- `scripts/check-structure.mjs` esteso
- `npm run lint` eseguito
- `npm run build` eseguito
- `npm run typecheck` eseguito
- `npm run check:structure` eseguito
- `npm run quality` eseguito

## Quality gates

```bash
npm run lint
npm run build
npm run typecheck
npm run check:structure
npm run quality
```

## Human navigation scope

- homepage come orientamento rapido
- wiki come mappa di navigazione guidata
- markdown come source-of-truth di approfondimento

## Agent-safety scope

- ordine source-of-truth esplicito
- confini hard pubblici/didattici espliciti
- regole operative concise in `AGENTS.md`
- quality gate sempre tracciati

## Documentation alignment scope

- separazione responsabilita tra README, AI context, quickstart agente, prompt hub e release definition
- coerenza versione e quality gate nella documentazione principale
- coerenza tra link di orientamento e file source-of-truth

## Residual risks

- rischio drift copy tra wiki e markdown se cambiano sezioni senza riallineamento
- rischio link obsoleti su nuove pagine non incluse nei gate se non aggiornati in `check:structure`
