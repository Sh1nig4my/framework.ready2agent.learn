# Documentation Hub

La cartella `documentation/` e il cuore didattico di Ready2Agent Learn. Qui trovi il **TRACE Method** (Tasks, Requirements, Agent Context, Controlled Execution) e tutto il percorso per capire cosa fare, perche farlo e come evitare gli errori piu comuni quando lavori con un coding agent.

## Se sei X, leggi Y

| Se sei... | Leggi prima | Poi continua con |
|---|---|---|
| Non tecnico curioso | `documentation/quickstart/non_technical_start_here.md` | `documentation/method/README.md` |
| Junior developer | `documentation/quickstart/human_start_here.md` | `workflow/README.md` |
| Developer esperto | `documentation/method/README.md` | `prompts/README.md` |
| Coding agent | `documentation/R2A_LEARN_full-ai-context.md` | `documentation/quickstart/agent_start_here.md` |
| Founder / consulente | `workflow/README.md` | requirement master + prompt system |

## Struttura della documentazione

- `quickstart/`: guide di ingresso per profili diversi
- `quickstart/skills-local-setup.md`: setup locale skills con OpenCode (Linux, macOS, Windows)
- `method/`: principi operativi del **TRACE Method** con checklist
- `examples/`: confronti bad vs good
- `case-study/`: materiale del caso studio Auth/IAM
- `project-meta/`: governance e confine pubblico/privato
- `R2A_LEARN_full-ai-context.md`: contesto operativo completo per agenti

## Percorso consigliato per non tecnici

1. `README.md`
2. `documentation/quickstart/non_technical_start_here.md`
3. `documentation/method/README.md`
4. `workflow/README.md`
5. `prompts/README.md`

## Percorso consigliato per developer

1. `documentation/quickstart/human_start_here.md`
2. `documentation/method/README.md`
3. `workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`
4. `prompts/README.md`

## Percorso consigliato per coding agent

1. `README.md`
2. `documentation/R2A_LEARN_full-ai-context.md`
3. `documentation/quickstart/agent_start_here.md`
4. `.agents/skills/README.md`
5. `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`
6. `.agents/skills/ready2agent-learn-core/SKILL.md`
7. `documentation/quickstart/skills-local-setup.md`
8. `workflow/README.md`
9. `prompts/README.md`
10. `prompts/workflow-maintenance/README.md` (quando il task riguarda il processo)

## Percorso consigliato skills-first

1. leggi `README.md`
2. leggi introduzione skills in `.agents/skills/README.md`
3. configura OpenCode con `documentation/quickstart/skills-local-setup.md`
4. usa/modifica skills didattiche in `.agents/skills/`
5. passa a prompt, workflow ed esempi operativi

## Come si collegano documentation, workflow e prompts

La documentazione spiega il perche e il come. Il workflow struttura il percorso in fasi verificabili. I prompt trasformano il metodo in istruzioni operative per l'agente. Se una di queste tre aree manca, il rischio di drift cresce rapidamente.
