# Ready2Agent Learn

Versione corrente: **v1.2.2 - Guided Wiki & Agent-Safe Navigation**.

## In una frase

Ready2Agent Learn e un laboratorio open-source per imparare a progettare, guidare e validare il lavoro con coding agent attraverso metodo, prompt, workflow, esercizi, playground e quality gate.

Per orientamento visuale rapido apri la wiki interna: `/wiki`.

## Perche esiste

Un coding agent senza metodo accelera il caos. Un coding agent guidato accelera il prodotto.

Ready2Agent Learn nasce per insegnarti un processo verificabile:

`idea -> requisito -> contesto -> prompt -> task -> implementazione -> quality gate -> documentazione`

Non chiedere solo codice. Progetta il contesto che genera buon codice.

## Cosa puoi fare subito

### 5 minuti - Prova un prompt playground

Apri `playground/README.md`, scegli uno scenario e copia un prompt pronto.

### 30 minuti - Crea una mini landing guidata

Segui `playground/01-company-to-landing-page.md` e genera una struttura pagina con CTA, sezioni e checklist.

### 1 ora - Trasforma un'idea in requisito e prompt

Usa `playground/02-chaotic-idea-to-requirement.md` e poi `playground/04-business-context-to-agent-prompt.md`.

### 2 ore - Esegui un primo workflow completo

Apri `workflow/README.md` e poi passa al case study in `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`.

## Scegli il tuo percorso

- Non tecnico: `documentation/quickstart/non_technical_start_here.md`
- Founder / consulente: `documentation/quickstart/human_start_here.md` + `workflow/README.md`
- Junior developer: `exercises/README.md` livello 1 -> livello 2
- Developer esperto: `documentation/method/README.md` + `prompts/README.md`
- Coding agent: `documentation/R2A_LEARN_full-ai-context.md` + `documentation/quickstart/agent_start_here.md`
- Docente / formatore: `TEACHING_GUIDE.md`

## Wiki guidata

La wiki e il livello di navigazione del repository:

- index: `/wiki`
- avvio rapido: `/wiki/start-here`
- guida agenti: `/wiki/agent-guide`
- quality gate: `/wiki/quality-gates`

I markdown restano source-of-truth di approfondimento.

## Playground: prova subito

Il playground e la zona a frizione minima: input rapidi, prompt pronti, output attesi chiari.

- Hub playground: `playground/README.md`
- Prompt 1: `playground/01-company-to-landing-page.md`
- Prompt 2: `playground/02-chaotic-idea-to-requirement.md`
- Prompt 3: `playground/03-feature-to-codex-plan.md`

## Esercizi progressivi

Qui smetti di consumare output in modo passivo e inizi a prendere decisioni.

- Hub esercizi: `exercises/README.md`
- Tracker: `exercises/tracker.md`
- Livelli: foundations -> workflow -> practical builds -> case study

## Case study Auth/IAM

Il case study Auth/IAM e la sfida seria del laboratorio: policy, ruoli, permessi, task breakdown, quality gate.

- Requirement master: `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
- Tracker dedicato: `workflow/trackers/auth-iam-case-study-tracker.md`

## Come usare Codex/OpenCode

0. Leggi `AGENTS.md` (guardrail rapidi root-level).
1. Leggi `prompts/README.md`.
2. Copia `prompts/00-agent-onboarding.md`.
3. Fai leggere all'agente `documentation/R2A_LEARN_full-ai-context.md`.
4. Esegui i prompt `00` -> `06` in ordine.
5. Se il task e sul processo, usa `prompts/workflow-maintenance/`.

## Teaching guide

Se usi Learn in aula, workshop o mentoring, apri `TEACHING_GUIDE.md`.

## Quality gate

```bash
npm run lint
npm run build
npm run typecheck
npm run check:structure
npm run quality
```

Se l'output non e verificabile, il task non e finito.

## Mappa del repository

- `documentation/`: metodo, quickstart, esempi, project meta
- `playground/`: prompt immediati per primi risultati
- `exercises/`: percorso progressivo con tracker
- `workflow/`: requisito master e tracker di avanzamento
- `prompts/`: prompt principali e workflow-maintenance
- `src/`: landing e skeleton didattico frontend

## Cosa NON e

Ready2Agent Learn v1.2.2:

- non e un backend framework enterprise pronto
- non include database reale
- non include MongoDB o Mongoose
- non include NextAuth
- non include login/register production-ready
- non include moduli business reali o codice cliente

E un prodotto didattico open-source autonomo.

## Public/private boundary

Il confine tra Learn pubblico e runtime privato Ready2Agent e esplicitato in:

`documentation/project-meta/public-private-boundary.md`

## Contribuire

Contribuisci con esercizi, esempi, miglioramenti di chiarezza, quality gate documentali e miglioramenti della landing coerenti con il metodo.

Prima di aprire una PR:

- Apri `documentation/project-meta/release-definition-v1.md`
- Apri `documentation/project-meta/release-definition-v1.1.2.md`
- Apri `documentation/project-meta/public-private-boundary.md`
- Apri `documentation/project-meta/editorial-style-guide.md`

## Consulenza (opzionale)

Ready2Agent Learn resta gratuito e open-source. Se vuoi applicare il metodo su un team o prodotto reale:

https://emanueleienna.dev/consultant/form-request

## Licenza

Vedi `LICENSE`.
