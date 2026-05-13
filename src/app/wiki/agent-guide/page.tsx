import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiAgentGuidePage() {
  return (
    <WikiPageShell
      currentPath="/wiki/agent-guide"
      title="Agent guide"
      description="La guida rapida per far lavorare un coding agent in modo utile, controllato e coerente con la natura didattica del repository."
      purpose="Definire confini, source-of-truth, piano operativo e quality gate prima di qualsiasi modifica."
      whenToUse="Apri questa pagina a ogni avvio sessione agente, per impostare source-of-truth, confini e quality gate prima di partire."
      learningOutcome="Imparerai a impostare richieste migliori all'agente e prevenire derive tecniche o documentali."
      commonMistake="Chiedere output ampi senza confini: l'agente accelera ma nella direzione sbagliata."
      sourceLinks={[
        { label: "AGENTS.md", href: `${base}AGENTS.md` },
        { label: "AI context completo", href: `${base}documentation/R2A_LEARN_full-ai-context.md` },
      ]}
      nextStep={{ label: "Vai a Repository map", href: "/wiki/repository-map" }}
    />
  );
}
