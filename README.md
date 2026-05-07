# Ready2Agent Learn

## In una frase

Ready2Agent Learn e un laboratorio open-source per imparare a guidare agenti di coding con metodo, contesto, prompt, workflow e validazione.

## Perche esiste

Molte persone usano i coding agent con richieste vaghe, isolate e difficili da verificare. Il risultato e spesso confuso: codice non allineato, decisioni non tracciate, documentazione incompleta e correzioni continue.

Ready2Agent Learn nasce per insegnare un processo pratico:

`idea -> requisito -> contesto -> prompt -> workflow -> task -> implementazione -> quality gate -> documentazione`

Non promette magia. Insegna disciplina eseguibile.

## Cosa imparerai

- trasformare un'idea in un requisito utile per persone e agenti
- scrivere prompt che danno confini chiari e output verificabili
- spezzare lavori grandi in task piccoli e governabili
- usare il workflow come memoria del processo
- evitare drift tra codice e documentazione
- validare il lavoro con quality gate ripetibili
- ragionare su ruoli, permessi e policy server-side tramite il caso Auth/IAM

## Per chi e

| Profilo | Perche puo usarlo | Da dove iniziare |
|---|---|---|
| Persona non tecnica | Vuole capire metodo e processo senza partire dal codice | `documentation/quickstart/non_technical_start_here.md` |
| Junior developer | Vuole imparare disciplina progettuale con esempi concreti | `documentation/quickstart/human_start_here.md` |
| Developer esperto | Vuole standardizzare il lavoro con agenti | `documentation/method/README.md` + `prompts/README.md` |
| Coding agent | Deve lavorare con contesto e vincoli espliciti | `documentation/R2A_LEARN_full-ai-context.md` |
| Founder/consulente | Vuole trasformare idee in flussi eseguibili | `workflow/README.md` + requirement master |

## Cosa contiene

La landing pubblica racconta il metodo in modo accessibile. La cartella `documentation/` e l'hub formativo. `workflow/` contiene il percorso didattico del caso studio e mostra come organizzare un lavoro complesso senza perdere controllo. `prompts/` include i prompt principali per guidare un agente fase per fase, mentre `prompts/workflow-maintenance/` contiene strumenti specifici per mantenere ordinato il processo nel tempo.

In `src/` trovi uno skeleton Next.js intenzionale: non un prodotto pronto, ma una struttura che insegna dove collocare responsabilita, contratti e componenti durante un'implementazione guidata.

## Cosa non contiene

- non contiene la versione enterprise completa
- non contiene dashboard privata pronta
- non contiene Auth/IAM completo gia implementato
- non contiene moduli business reali
- non contiene codice cliente
- non e uno starter production-ready immediato

## Come iniziare senza scrivere codice

1. leggi questo `README.md`
2. apri `documentation/quickstart/non_technical_start_here.md`
3. visita la landing locale (`npm run dev`) e leggi le sezioni
4. leggi `documentation/method/README.md`
5. leggi il master requirement in `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
6. copia il prompt di avvio in `prompts/README.md`
7. chiedi all'agente di spiegarti il piano prima di implementare

## Come iniziare come sviluppatore

```bash
npm install
npm run dev
```

Poi:

- leggi `documentation/quickstart/human_start_here.md`
- leggi `documentation/method/README.md`
- leggi `workflow/README.md`
- usa i prompt in `prompts/`

## Come iniziare con un coding agent

- apri `prompts/README.md`
- copia il prompt standard di avvio
- fai leggere all'agente `documentation/R2A_LEARN_full-ai-context.md`
- usa i prompt principali in sequenza
- usa `prompts/workflow-maintenance/` quando lavori su requisiti/workflow/tracking

## Quality gate

```bash
npm run lint
npm run build
npm run typecheck
```

## Consulenza

Ready2Agent Learn e pubblico e gratuito. Se vuoi applicare il metodo a un progetto reale, a un team o a un prodotto enterprise, puoi richiedere una consulenza:

https://emanueleienna.dev/consultant/form-request

## Repository pubblico

https://github.com/Sh1nig4my/framework.ready2agent.learn

## Licenza

Vedi `LICENSE`.
