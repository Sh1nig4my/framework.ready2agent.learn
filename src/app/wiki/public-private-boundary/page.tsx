import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiPublicPrivateBoundaryPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/public-private-boundary"
      title="Public/private boundary"
      description="Questa pagina chiarisce il confine tra laboratorio pubblico e runtime privato, per proteggere identita e obiettivi del progetto Learn."
      purpose="Evitare reintroduzione di moduli business reali e mantenere il repository didattico, open-source e accessibile."
      whenToUse="Usala prima di modifiche architetturali e quando una richiesta sembra spingere verso logiche enterprise production-ready."
      learningOutcome="Imparerai a valutare una richiesta non solo per fattibilita tecnica, ma anche per coerenza con il perimetro del laboratorio."
      commonMistake="Accettare ogni richiesta tecnica senza filtrarla: il risultato e un repository meno didattico e piu confuso."
      sourceLinks={[
        {
          label: "Boundary document",
          href: `${base}documentation/project-meta/public-private-boundary.md`,
        },
        {
          label: "Release v1.1.2 definition",
          href: `${base}documentation/project-meta/release-definition-v1.1.2.md`,
        },
      ]}
      nextStep={{ label: "Torna a Start here", href: "/wiki/start-here" }}
    />
  );
}
