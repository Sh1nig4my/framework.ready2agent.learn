import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiCaseStudyPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/case-study"
      title="Case study Auth/IAM"
      description="Il case study Auth/IAM segue tre livelli espliciti: A concettuale, B mocked implementation, C transfer concettuale verso runtime privato."
      purpose="Farti applicare il metodo su una sfida realistica mantenendo confini didattici, output verificabili e anti-deriva enterprise."
      whenToUse="Usala dopo First Mission e Prompt System, quando vuoi esercitarti su un percorso multi-fase con tracking rigoroso."
      learningOutcome="Imparerai a distinguere cosa progettare, cosa simulare e cosa non implementare nel repository Learn."
      commonMistake="Confondere Level B con produzione reale: in Learn si simula il comportamento, non si consegna un runtime enterprise."
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
