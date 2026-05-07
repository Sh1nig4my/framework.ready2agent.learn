import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiWorkflowPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/workflow"
      title="Workflow"
      description="Il workflow e la memoria operativa del progetto: tiene insieme fasi, decisioni, rischi e stato reale del lavoro."
      purpose="Mantenere coerenza tra requirement, task, implementazione e documentazione lungo tutto il ciclo di sviluppo."
      whenToUse="Usala quando il task non e banale e hai bisogno di tracciare passaggi, dipendenze e responsabilita."
      learningOutcome="Capirai come evitare il lavoro a blocchi isolati e costruire progressione solida tra analisi, build e validazione."
      commonMistake="Trattare il workflow come burocrazia: senza tracking, ogni iterazione perde contesto e ripete errori gia noti."
      sourceLinks={[
        { label: "Workflow hub", href: `${base}workflow/README.md` },
        { label: "Tracker Auth/IAM", href: `${base}workflow/trackers/auth-iam-case-study-tracker.md` },
      ]}
      nextStep={{ label: "Vai a Exercises", href: "/wiki/exercises" }}
    />
  );
}
