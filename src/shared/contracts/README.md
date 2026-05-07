# Shared Contracts (Skeleton)

## Scopo della cartella

Definisce contratti e tipi condivisi tra frontend e backend.

## Perche esiste nel metodo Ready2Agent

Nel lavoro con agenti, i contratti espliciti riducono misunderstanding e regressioni tra layer.

## Cosa andra qui durante il caso studio

- payload login/logout
- DTO utenti e profili
- tipi ruoli/permessi

## Esempi concreti

- `auth.contracts.ts`
- `user.contracts.ts`

## Cosa non mettere qui

- logica runtime
- funzioni di persistenza

## Come aiuta un coding agent

Offre una fonte unica di verita per i payload, semplificando generazione codice e allineamento docs.
