import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiPromptsPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/prompts"
      title="Prompts"
      description="Questa sezione ti aiuta a scegliere il prompt giusto al momento giusto, evitando richieste generiche e output confusi."
      purpose="Guidare l'esecuzione con una sequenza ordinata (00-06) e con prompt dedicati alla manutenzione del workflow."
      whenToUse="Usala quando devi decidere come formulare il prossimo passo operativo con l'agente."
      learningOutcome="Imparerai a collegare ogni fase del lavoro al prompt corretto, con output atteso piu prevedibile e controllabile."
      commonMistake="Usare sempre lo stesso prompt per tutto: aumenta il rischio di drift, duplicazioni e task non verificabili."
      sourceLinks={[
        { label: "Prompts hub", href: `${base}prompts/README.md` },
        { label: "Onboarding 00", href: `${base}prompts/00-agent-onboarding.md` },
      ]}
      nextStep={{ label: "Vai a Workflow", href: "/wiki/workflow" }}
    />
  );
}
