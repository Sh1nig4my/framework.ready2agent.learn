# Master Requirement - Ready2Agent Learn Auth/IAM Case Study

## 1. Obiettivo

Costruire progressivamente un sistema Auth/IAM didattico in Next.js usando il metodo Ready2Agent.

## 2. Contesto

Questo caso studio nasce per mostrare come un agente di coding puo implementare un sistema complesso partendo da requisiti, prompt, workflow e quality gate.

## 3. Scope funzionale

- setup iniziale
- primo utente amministratore
- login
- logout
- sessione
- utenti multipli
- ruoli
- permessi
- profili
- dashboard shell
- protezione route
- policy server-side
- validazione input

## 4. Out of scope

- sistema enterprise completo
- billing
- SaaS multi-tenant
- moduli business
- integrazioni cliente
- audit avanzato production
- deploy production vincolante

## 5. Ruoli didattici

- SUPER
- ADMIN
- OPERATOR
- USER

## 6. Permission model

Il modello usa permessi granulari per risorsa e azione (read/create/update/delete/manage), con enforcement esclusivamente server-side e least privilege per default.

## 7. Architettura target

- app router
- API boundaries
- service layer
- repository layer
- shared contracts
- validation
- server-side authorization

## 8. Data model suggerito

- User
- Profile/UserDetail
- Role
- PermissionSet

## 9. User flow

- first setup
- login
- logout
- accesso dashboard
- gestione utenti
- aggiornamento profilo

## 10. Security principles

- password hashing
- validation
- no trust nella UI
- authorization server-side
- session safety
- least privilege

## 11. Implementation roadmap

- Fase 1: setup progetto
- Fase 2: contratti
- Fase 3: data model
- Fase 4: auth foundation
- Fase 5: login/logout
- Fase 6: ruoli/permessi
- Fase 7: dashboard shell
- Fase 8: test/quality
- Fase 9: documentazione

## 12. Quality gates

- lint
- build
- typecheck
- test se presenti
- document alignment

## 13. Agent execution notes

- implementare un task alla volta
- non saltare step
- non inventare feature
- aggiornare docs
- riepilogare modifiche
