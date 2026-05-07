import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiMethodPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/method"
      title="Method"
      description="Qui trovi la logica completa del metodo Ready2Agent: trasformare una richiesta vaga in un percorso operativo verificabile."
      purpose="Spiegare come applicare in pratica la sequenza idea -> requisito -> contesto -> prompt -> task -> implementazione -> quality gate -> documentazione."
      whenToUse="Usala prima di aprire task implementativi, quando devi chiarire obiettivo, scope, out-of-scope e criteri di verifica."
      learningOutcome="Imparerai a prendere decisioni migliori prima di scrivere codice, riducendo correzioni tardive e ambiguita operative."
      commonMistake="Saltare i passaggi intermedi e chiedere subito implementazione completa: il risultato tende a essere poco controllabile."
      sourceLinks={[
        { label: "Method hub", href: `${base}documentation/method/README.md` },
        { label: "AI context esteso", href: `${base}documentation/R2A_LEARN_full-ai-context.md` },
      ]}
      nextStep={{ label: "Vai a Playground", href: "/wiki/playground" }}
    />
  );
}
