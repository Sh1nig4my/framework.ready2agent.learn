# Master Requirement - Ready2Agent Learn Auth/IAM Case Study

## 1) Obiettivo

Costruire progressivamente un sistema Auth/IAM didattico in Next.js usando il metodo Ready2Agent: requisito, contesto, prompt, workflow, task incrementali, quality gate e documentazione allineata.

## 2) Scenario narrativo

Immagina una piccola area riservata dove piu persone accedono con ruoli diversi. Alcuni utenti possono amministrare, altri solo operare su risorse limitate, altri ancora possono usare funzioni di base. Il sistema deve impedire accessi impropri e rendere chiare le responsabilita.

## 3) Perche questo caso studio

Auth/IAM e ideale per imparare perche:

- richiede sicurezza reale
- richiede separazione tra UI e controllo server-side
- richiede ruoli e permessi espliciti
- rende evidente il valore della validazione
- mostra perche un agente va guidato con disciplina

## 4) Scope funzionale

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

## 5) Out of scope

- runtime enterprise completo
- billing
- SaaS multi-tenant
- moduli business verticali
- integrazioni cliente
- audit avanzato production
- deploy production vincolante

## 6) Glossario accessibile

- **Autenticazione**: verifica "chi sei".
- **Autorizzazione**: verifica "cosa puoi fare".
- **IAM**: Identity and Access Management, regole su identita e accessi.
- **Ruolo**: insieme di responsabilita (es. ADMIN).
- **Permesso**: azione consentita su una risorsa.
- **Sessione**: stato che mantiene utente autenticato.
- **Policy**: regola applicata lato server.
- **Dashboard shell**: struttura base area riservata.
- **Server-side**: logica eseguita sul server, non nel browser.
- **Validation**: controllo rigoroso dell'input.
- **Quality gate**: verifiche minime prima di chiudere una modifica.

## 7) Attori

- `SUPER`
- `ADMIN`
- `OPERATOR`
- `USER`
- umano revisore
- coding agent

## 8) Tabella ruoli e permessi

| Ruolo | Puo fare | Non puo fare | Perche |
|---|---|---|---|
| SUPER | gestione globale, governance ruoli | operazioni oltre policy hard-limit | minimizzare rischio di abuso |
| ADMIN | gestione utenti e impostazioni amministrative | modificare policy riservate a SUPER | separazione dei poteri |
| OPERATOR | operazioni su risorse assegnate | amministrazione globale | least privilege |
| USER | uso funzioni base personali | gestione utenti/permessi | protezione superficie critica |

## 9) Journey utente (narrativo)

1. Primo setup: il sistema crea il primo attore amministrativo.
2. Login: utente inserisce credenziali e ottiene sessione.
3. Logout: sessione invalidata in modo sicuro.
4. Accesso area riservata: UI mostra solo funzioni ammesse.
5. Gestione utenti: un ruolo autorizzato crea o aggiorna profili.
6. Aggiornamento profilo: utente modifica solo campi consentiti.
7. Tentativo non autorizzato: server blocca richiesta anche se la UI prova a inviarla.

## 10) Architettura target spiegata

### App Router

- cos'e: sistema routing Next.js.
- perche serve: separa pagine pubbliche, area riservata e API.
- errore evitato: mescolare rendering e logica auth in modo confuso.
- esempio: route protette che demandano policy al server.

### API Boundary

- cos'e: confine esplicito input/output.
- perche serve: evita contratto implicito tra UI e backend.
- errore evitato: payload variabili non tracciate.
- esempio: endpoint `POST /auth/login` con schema richiesto.

### Service Layer

- cos'e: logica applicativa.
- perche serve: centralizza regole di business.
- errore evitato: logica duplicata in route/UI.
- esempio: servizio che valida ruolo e policy prima dell'azione.

### Repository Layer

- cos'e: accesso dati.
- perche serve: separa persistenza e logica.
- errore evitato: query sparse in ogni punto dell'app.
- esempio: repository `users` con metodi CRUD limitati.

### Shared Contracts

- cos'e: tipi e contratti condivisi.
- perche serve: mantiene allineamento frontend/server.
- errore evitato: mismatch tra payload inviato e atteso.
- esempio: contratto `UserProfileUpdate`.

### Validation

- cos'e: controllo dati in ingresso.
- perche serve: blocca input incoerenti o malevoli.
- errore evitato: persistenza dati invalidi.
- esempio: validazione server-side su password e campi profilo.

### Policy server-side

- cos'e: enforcement autorizzazioni lato server.
- perche serve: la UI non e trusted boundary.
- errore evitato: bypass tramite chiamate dirette API.
- esempio: endpoint che rifiuta update ruolo non consentito.

## 11) Roadmap didattica

### Fase 1 - preparare struttura
- obiettivo: predisporre skeleton e confini
- input: requirement master
- output: struttura cartelle coerente
- prompt consigliato: `00-agent-onboarding.md`
- criterio completamento: struttura leggibile e documentata

### Fase 2 - definire contratti
- obiettivo: stabilire payload e tipi
- input: fase 1 + scope funzionale
- output: contratti shared iniziali
- prompt consigliato: `02-architecture-planning.md`
- criterio completamento: contratti chiari e riusabili

### Fase 3 - modellare utenti e profili
- obiettivo: definire modello dati didattico
- input: contratti
- output: schema concettuale user/profile/role
- prompt consigliato: `03-task-breakdown.md`
- criterio completamento: modello coerente con scope

### Fase 4 - progettare auth
- obiettivo: definire flusso autenticazione
- input: modelli + policy
- output: blueprint auth foundation
- prompt consigliato: `02-architecture-planning.md`
- criterio completamento: confini auth espliciti

### Fase 5 - login/logout
- obiettivo: implementare flussi base accesso/uscita
- input: blueprint auth
- output: task implementativi verticali
- prompt consigliato: `04-implementation-start.md`
- criterio completamento: comportamento tracciato e validato

### Fase 6 - ruoli e permessi
- obiettivo: enforcement policy
- input: modello ruoli
- output: regole autorizzazione server-side
- prompt consigliato: `04-implementation-start.md`
- criterio completamento: permessi verificabili

### Fase 7 - dashboard shell
- obiettivo: shell didattica area riservata
- input: auth + policy
- output: UI base coerente con ruoli
- prompt consigliato: `04-implementation-start.md`
- criterio completamento: shell senza logica enterprise

### Fase 8 - quality gate
- obiettivo: validare stabilita
- input: change set corrente
- output: esiti lint/build/typecheck
- prompt consigliato: `05-quality-gate.md`
- criterio completamento: gate superati o piano fix chiaro

### Fase 9 - documentazione
- obiettivo: allineamento finale
- input: codice + workflow
- output: docs aggiornate senza drift
- prompt consigliato: `06-documentation-alignment.md`
- criterio completamento: link e contenuto coerenti

## 12) Errori comuni da evitare

- mettere authorization solo in UI
- creare ruoli non documentati
- implementare tutto insieme
- non separare service/repository
- ignorare validation
- saltare documentazione
- saltare quality gate

## 13) Come usarlo con Codex

1. onboarding con `prompts/00-agent-onboarding.md`
2. analisi requisito con `prompts/01-requirement-analysis.md`
3. pianificazione architettura con `prompts/02-architecture-planning.md`
4. breakdown task con `prompts/03-task-breakdown.md`
5. implementazione incrementale con `prompts/04-implementation-start.md`
6. validazione con `prompts/05-quality-gate.md`
7. riallineamento docs con `prompts/06-documentation-alignment.md`
