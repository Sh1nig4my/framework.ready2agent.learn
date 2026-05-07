# Public / Private Boundary

## Perche esiste questo confine

Per mantenere Ready2Agent Learn un prodotto didattico open-source autonomo, senza reintrodurre il runtime enterprise privato.

## Cosa vive nel repository privato Ready2Agent

- runtime enterprise operativo
- Auth/IAM completo
- setup/bootstrap reale
- dashboard privata
- moduli business reali
- database e persistence reale
- codice cliente

## Cosa vive in Ready2Agent Learn

- metodo
- prompt
- playground
- esercizi
- workflow
- case study didattico
- skeleton frontend/didattico
- esempi e checklist
- teaching guide

## Cosa e consentito simulare

- dati mock/statici
- shell UI didattiche
- contratti concettuali
- policy descritte in documentazione
- flussi autenticazione spiegati senza runtime enterprise

## Cosa non va reintrodotto

- NextAuth completo
- MongoDB/Mongoose
- modelli cliente reali
- dashboard enterprise pronta
- setup di produzione vincolante

## Regole per coding agent e contributor

- non estendere scope verso backend reale
- mantenere documentazione e codice allineati
- esplicitare sempre in-scope/out-of-scope
- validare con quality gate prima di chiudere

## Checklist prima di una PR

- [ ] La modifica serve al valore didattico?
- [ ] Evita dipendenze backend non necessarie?
- [ ] Mantiene il confine pubblico/privato?
- [ ] Aggiorna README/hub documentazione se necessario?
- [ ] Passa quality gate?
