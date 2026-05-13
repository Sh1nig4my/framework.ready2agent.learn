# R2A LEARN Full AI Context

## Identita estesa del repository

Ready2Agent Learn e un laboratorio open-source progettato per insegnare come trasformare idee software confuse in un processo eseguibile da agenti di coding. Non e un prodotto enterprise pronto: e un ambiente formativo dove **TRACE Method**, prompt, workflow e validazione hanno la stessa importanza del codice.

## TRACE Method

**Ready2Agent e il framework. TRACE e il metodo.**

TRACE (Tasks, Requirements, Agent Context, Controlled Execution) e il metodo operativo che trasforma requisiti in esecuzione agentica governata: task espliciti, contesto strutturato, output revisionabili, documentazione viva.

La sequenza operativa e:

`idea -> requisito -> contesto -> prompt -> task -> implementazione -> quality gate -> documentazione`

## Pubblico target

- persone non tecniche curiose
- founder tecnici o semi-tecnici
- sviluppatori junior
- sviluppatori esperti
- consulenti e formatori
- coding agent che devono lavorare con contesto rigoroso

## Cosa significa "Learn"

"Learn" significa imparare un sistema di lavoro, non consumare una feature pronta. Il valore principale non e "avere gia tutto", ma capire come arrivare a un risultato affidabile e ripetibile.

## Learn vs Enterprise

- `framework.ready2agent` (privato): runtime enterprise operativo.
- `framework.ready2agent.learn` (pubblico): metodo, caso studio e skeleton didattico.

Nel repository Learn non vanno reintrodotte dashboard private, runtime auth completo o moduli business reali.

## Principi di scrittura documentale

- spiegare sempre cosa, perche, quando e come
- evitare liste vuote di contesto
- usare tono chiaro, concreto e accessibile
- mantenere coerenza tra documentazione e codice

## Principi di modifica UI/UX

- privilegiare chiarezza narrativa
- mantenere gerarchia visiva leggibile
- evitare dipendenze inutili
- assicurare responsive behavior desktop/mobile

## Principi per prompt

- i prompt sono strumenti operativi, non slogan
- devono esplicitare ruolo, contesto, input, output e controlli
- usare sequenza progressiva (`00` -> `06`)
- usare `workflow-maintenance` per lavori sul processo

## Principi per workflow

- il workflow e memoria ordinata del lavoro
- ogni fase deve essere verificabile
- i task devono essere piccoli e dipendenti in modo esplicito
- requirement, prompt, task e documentazione devono restare coerenti

## Regole per agenti

- leggere `AGENTS.md` prima di pianificare
- leggere prima i documenti source-of-truth
- produrre piano operativo prima delle modifiche
- non implementare fuori scope
- non introdurre feature non richieste
- aggiornare documentazione insieme al codice
- eseguire quality gate

## Cosa non reintrodurre

- dashboard privata pronta
- login/register/setup come prodotto completo
- auth/iam enterprise completo
- moduli business reali
- codice cliente
- dipendenze backend non usate

## Gestione richieste ambigue

Quando una richiesta e ambigua ma non bloccante, scegliere il default piu conservativo coerente con Learn e dichiararlo nel riepilogo. Se l'ambiguita cambia materialmente il risultato, esplicitare il dubbio e proporre opzioni con raccomandazione.

## Formato output finale consigliato

- cosa e stato cambiato
- perche
- quality gate eseguiti
- rischi residui
- prossimi step

## Quality gate

- `npm run lint`
- `npm run build`
- `npm run typecheck`
- `npm run check:structure`
- `npm run check:prompts`
- `npm run check:boundary`
- `npm run check:routes`
- `npm run check:links`
- `npm run check:content-drift`
- `npm run quality`

`npm run quality` aggrega tutti i controlli; in chiusura task/release riportare anche gli esiti dei singoli comandi.

## Source-of-truth hierarchy

1. `README.md`
2. `documentation/R2A_LEARN_full-ai-context.md`
3. `documentation/quickstart/agent_start_here.md`
4. `prompts/README.md`
5. `workflow/README.md`
6. `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
7. file sorgente coinvolti

## Navigazione v1.2.2

- homepage: orientamento rapido
- wiki: `/wiki` e sottopagine guidate
- markdown: source-of-truth di approfondimento
