import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiPlaygroundPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/playground"
      title="Playground"
      description="Il playground e una libreria comparativa: input confuso, prompt debole, output mediocre, prompt migliorato e output buono/eccellente."
      purpose="Farti vedere il delta qualitativo in modo rapido e verificabile, cosi impari a correggere il prompt prima di entrare nel workflow completo."
      whenToUse="Apri questa pagina quando vuoi provare subito, confrontare output mediocre vs eccellente o capire come un prompt migliorato riduce il drift."
      learningOutcome="Capirai come passare da output generici a verificabili, collegando ogni scenario a First Mission e prompt 00-06."
      commonMistake="Usare solo il prompt migliorato saltando il confronto: perdi la lezione su errori tipici e cause del risultato debole."
      sourceLinks={[
        { label: "Playground hub", href: `${base}playground/README.md` },
        { label: "Prompt: Idea to Requirement", href: `${base}playground/02-chaotic-idea-to-requirement.md` },
        { label: "Prompt: Company to Landing", href: `${base}playground/01-company-to-landing-page.md` },
      ]}
      nextStep={{ label: "Vai a Prompts", href: "/wiki/prompts" }}
    />
  );
}
