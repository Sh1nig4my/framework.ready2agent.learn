# Skills Local Setup (OpenCode)

## Obiettivo

Configurare in locale le skills didattiche di `Ready2Agent Learn` per usarle con OpenCode in modo coerente e modificabile.

## Cos'e OpenCode in questo contesto

OpenCode e l'ambiente CLI con cui apri il repository e guidi un coding agent su file reali, prompt e workflow.

## Perche usare `.agents/skills/`

- centralizza istruzioni riutilizzabili
- riduce prompt monolitici
- mantiene regole semplici e adattabili
- aiuta a spiegare il perche delle scelte, non solo il cosa

## Prerequisiti comuni

- Git installato
- Node.js e npm installati
- repository clonato localmente
- accesso a OpenCode

## Linux setup

```bash
cd /path/to/framework.ready2agent.learn
npm install
npm run dev
```

## macOS setup

```bash
cd /path/to/framework.ready2agent.learn
npm install
npm run dev
```

## Windows PowerShell setup

```powershell
cd C:\path\to\framework.ready2agent.learn
npm install
npm run dev
```

## Windows WSL setup (opzionale)

```bash
cd /mnt/c/path/to/framework.ready2agent.learn
npm install
npm run dev
```

## OpenCode usage model

Apri il repository in OpenCode e chiedi all'agente di leggere prima:

- `.agents/skills/README.md`
- `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`
- `.agents/skills/ready2agent-learn-core/SKILL.md`

Poi chiedi modifiche al materiale didattico mantenendo scope Learn, skills leggere e documentazione allineata.

Prompt minimo copiabile:

```text
Read `.agents/skills/README.md`, `.agents/skills/READY2AGENT_LEARN_ADAPTER.md`,
and `.agents/skills/ready2agent-learn-core/SKILL.md`.

Then update the documentation while keeping Ready2Agent Learn educational,
lightweight, and easy to adapt.
```

## Verifica disponibilita skills

- verifica che esistano i file in `.agents/skills/`
- controlla che la skill core abbia frontmatter YAML valido
- usa un task breve e controlla che l'agente citi esplicitamente le regole skills

## Come modificarle o accorparle

- modifica direttamente i file `.md`
- unisci skills con ownership sovrapposta
- elimina skills non usate
- mantieni una skill core come riferimento principale

## Troubleshooting

- agente ignora le skills: includi i path nel prompt di avvio
- output fuori scope: ribadisci confini Learn (no runtime enterprise)
- istruzioni duplicate: semplifica README e sposta dettagli nel file skill core
- mismatch docs/prompt: aggiorna insieme `README.md`, quickstart e `prompts/README.md`

## Nota Learn vs repository operativo

`Ready2Agent Learn` e il repository didattico pubblico. Le skills qui sono esempi modificabili. Il framework operativo completo e separato e non va replicato automaticamente in questo repository.
