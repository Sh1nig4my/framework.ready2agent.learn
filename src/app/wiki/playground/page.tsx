import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiPlaygroundPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/playground"
      title="Playground"
      description="Il playground e la zona di prova rapida: in pochi minuti ottieni output concreti per capire come lavora il metodo."
      purpose="Farti passare dalla teoria all'azione con prompt pronti, mantenendo un contesto didattico chiaro e sicuro."
      whenToUse="Usala quando vuoi sbloccare un inizio veloce, mostrare un esempio pratico o confrontare output diversi."
      learningOutcome="Capirai come strutturare input minimi ma utili e come valutare subito se la direzione scelta e sensata."
      commonMistake="Scambiare il playground per un flusso completo: serve a partire, ma poi va consolidato con prompt, workflow ed esercizi."
      sourceLinks={[
        { label: "Playground hub", href: `${base}playground/README.md` },
        { label: "Prompt: Company to Landing", href: `${base}playground/01-company-to-landing-page.md` },
      ]}
      nextStep={{ label: "Vai a Prompts", href: "/wiki/prompts" }}
    />
  );
}
