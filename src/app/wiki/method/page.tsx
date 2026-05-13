import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiMethodPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/method"
      title="Method"
      description="Qui trovi la logica completa del metodo Ready2Agent: trasformare una richiesta vaga in un percorso operativo verificabile."
      purpose="Spiegare come applicare in pratica la sequenza idea -> requisito -> contesto -> prompt -> task -> implementazione -> quality gate -> documentazione."
      whenToUse="Apri questa pagina prima di qualsiasi task implementativo, quando devi chiarire obiettivo, scope e criteri di verifica."
      learningOutcome="Imparerai a prendere decisioni migliori prima del codice, riducendo correzioni e ambiguita operative."
      commonMistake="Chiedere subito implementazione saltando i passaggi intermedi: produci risultati difficili da validare."
      sourceLinks={[
        { label: "Method hub", href: `${base}documentation/method/README.md` },
        { label: "AI context esteso", href: `${base}documentation/R2A_LEARN_full-ai-context.md` },
      ]}
      nextStep={{ label: "Riprova la First Mission", href: "/wiki/first-mission" }}
    />
  );
}
