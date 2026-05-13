import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiFirstMissionPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/first-mission"
      title="First mission"
      description="La First Mission e il percorso guidato iniziale: in 30-60 minuti passi da idea confusa a First Mission Dossier verificabile."
      purpose="Darti una golden path concreta per avviare il metodo Ready2Agent senza saltare requirement, scope, task breakdown e quality checklist."
      whenToUse="Usala come primo esercizio operativo del repository, prima di entrare in workflow avanzati o case study complessi."
      learningOutcome="Imparerai a produrre un output tracciabile, con confini chiari e next step utile, invece di un risultato generico non verificabile."
      commonMistake="Trattare la First Mission come teoria: va eseguita compilando il dossier, non solo letta."
      sourceLinks={[
        { label: "First Mission docs", href: `${base}documentation/first-mission/README.md` },
        { label: "Dossier template", href: `${base}documentation/first-mission/first-mission-dossier-template.md` },
      ]}
      nextStep={{ label: "Vai a Playground", href: "/wiki/playground" }}
    />
  );
}
