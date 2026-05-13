import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiWorkflowPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/workflow"
      title="Workflow"
      description="Il workflow e la memoria operativa dopo playground e prompts: tiene insieme fasi, decisioni, rischi e stato reale del lavoro."
      purpose="Mantenere coerenza tra requirement, task, implementazione e documentazione, con tracker aggiornati e passaggi verificabili."
      whenToUse="Apri questa pagina quando passi dai prompt 00-06 a un'esecuzione multi-step e devi tracciare dipendenze, stato e correzioni."
      learningOutcome="Capirai come trasformare output isolati in progressione continua, evitando drift tra analisi, build, quality gate e docs."
      commonMistake="Saltare tracker e aggiornamenti: perdi memoria operativa e ripeti errori gia risolti."
      sourceLinks={[
        { label: "Prompts hub", href: `${base}prompts/README.md` },
        { label: "Workflow hub", href: `${base}workflow/README.md` },
        { label: "Tracker Auth/IAM", href: `${base}workflow/trackers/auth-iam-case-study-tracker.md` },
      ]}
      nextStep={{ label: "Vai a Exercises", href: "/wiki/exercises" }}
    />
  );
}
