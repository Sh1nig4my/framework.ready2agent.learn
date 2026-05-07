import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiCaseStudyPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/case-study"
      title="Case study Auth/IAM"
      description="Il case study Auth/IAM e la prova completa del laboratorio: ruoli, permessi e policy in un percorso guidato multi-fase."
      purpose="Farti applicare il metodo su una sfida realistica, mantenendo sempre confini didattici e verificabilita."
      whenToUse="Usala quando hai gia basi solide e vuoi allenarti su un flusso end-to-end con livello di complessita maggiore."
      learningOutcome="Imparerai a gestire dipendenze tra requirement, sicurezza, task breakdown e quality gate senza uscire dal perimetro Learn."
      commonMistake="Trattarlo come progetto enterprise reale: qui l'obiettivo e imparare il processo, non consegnare un runtime privato."
      sourceLinks={[
        {
          label: "Master requirement Auth/IAM",
          href: `${base}workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md`,
        },
        { label: "Tracker case study", href: `${base}workflow/trackers/auth-iam-case-study-tracker.md` },
      ]}
      nextStep={{ label: "Vai a Quality gates", href: "/wiki/quality-gates" }}
    />
  );
}
