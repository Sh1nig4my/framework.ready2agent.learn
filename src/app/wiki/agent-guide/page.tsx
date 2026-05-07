import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiAgentGuidePage() {
  return (
    <WikiPageShell
      currentPath="/wiki/agent-guide"
      title="Agent guide"
      description="La guida rapida per far lavorare un coding agent in modo utile, controllato e coerente con la natura didattica del repository."
      purpose="Definire confini, source-of-truth, piano operativo e quality gate prima di qualsiasi modifica."
      whenToUse="Usala a ogni avvio sessione agente e ogni volta che un task rischia di allargarsi fuori scope."
      learningOutcome="Imparerai a impostare richieste migliori all'agente e a prevenire derive tecniche o documentali."
      commonMistake="Chiedere output ampi senza confini espliciti: l'agente accelera, ma accelera nella direzione sbagliata."
      sourceLinks={[
        { label: "AGENTS.md", href: `${base}AGENTS.md` },
        { label: "AI context completo", href: `${base}documentation/R2A_LEARN_full-ai-context.md` },
      ]}
      nextStep={{ label: "Vai a Repository map", href: "/wiki/repository-map" }}
    />
  );
}
