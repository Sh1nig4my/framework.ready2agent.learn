# Deploy Guide - Ready2Agent Learn

Questa guida copre il deploy della landing Next.js e della documentazione nel repository Learn.

## Prerequisiti

- Node.js 20+
- account GitHub
- account Vercel (opzionale ma consigliato)

## Build locale

```bash
npm install
npm run lint
npm run build
npm run typecheck
```

## Deploy su Vercel

1. importa il repository `framework.ready2agent.learn`
2. framework preset: Next.js
3. build command: `npm run build`
4. output: default Next.js
5. variabili ambiente minime: `NEXT_PUBLIC_APP_NAME=Ready2Agent Learn`

## Nota importante

Ready2Agent Learn non richiede database per la landing attuale.
Le variabili Auth/Mongo restano opzionali per futuri step del case study.
