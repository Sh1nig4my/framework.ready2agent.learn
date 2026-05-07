import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiQualityGatesPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/quality-gates"
      title="Quality gates"
      description="Qui trovi le verifiche che separano una modifica incompleta da una consegna davvero chiudibile."
      purpose="Garantire coerenza tecnica e documentale con controlli chiari, ripetibili e leggibili da umani e agenti."
      whenToUse="Usala sempre prima di chiudere task importanti, PR e release, senza eccezioni."
      learningOutcome="Imparerai a leggere i gate come strumento decisionale, non solo come check tecnico automatico."
      commonMistake="Eseguire solo un comando aggregato senza capire i singoli esiti: perdi segnali utili su rischi e regressioni."
      sourceLinks={[
        { label: "Quality gates method", href: `${base}documentation/method/quality-gates.md` },
        { label: "Prompt quality gate", href: `${base}prompts/05-quality-gate.md` },
      ]}
      nextStep={{ label: "Vai a Agent guide", href: "/wiki/agent-guide" }}
    />
  );
}
