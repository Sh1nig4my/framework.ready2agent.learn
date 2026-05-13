import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiPromptsPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/prompts"
      title="Prompts"
      description="Questa sezione trasforma gli insight del playground comparativo in contratti operativi 00-06, evitando richieste vaghe e output non verificabili."
      purpose="Guidare l'esecuzione con una sequenza ordinata (00-06) e con prompt workflow-maintenance quando il lavoro riguarda tracker e processo."
      whenToUse="Apri questa pagina dopo il playground, quando devi trasformare il confronto rapido in implementazione controllata con i prompt 00-06."
      learningOutcome="Imparerai a scegliere il prompt giusto per ogni fase, con output contract, anti-drift rules e next step esplicito."
      commonMistake="Saltare dal playground al codice senza passare dal prompt della fase: aumenta drift e task non tracciabili."
      sourceLinks={[
        { label: "Prompts hub", href: `${base}prompts/README.md` },
        { label: "Playground hub", href: `${base}playground/README.md` },
        { label: "Onboarding 00", href: `${base}prompts/00-agent-onboarding.md` },
      ]}
      nextStep={{ label: "Vai a Workflow", href: "/wiki/workflow" }}
    />
  );
}
