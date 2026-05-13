import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiStartHerePage() {
  return (
    <WikiPageShell
      currentPath="/wiki/start-here"
      title="Start here"
      description="Questa pagina e il tuo primo punto di appoggio: ti dice in che ordine leggere i documenti e come partire senza perdere tempo."
      purpose="Ridurre il tempo di setup iniziale e allinearti subito su confini, metodo e regole operative del repository."
      whenToUse="Apri questa pagina a ogni nuova sessione, quando devi riallinearti sull'ordine di lettura e sui confini del repository."
      learningOutcome="Saprai quali file leggere in ordine, perche e quali sono i veri source-of-truth per non partire confuso."
      commonMistake="Partire dal codice saltando la lettura dei documenti base: ottieni output veloci ma fragili e fuori metodo."
      sourceLinks={[
        { label: "README.md", href: `${base}README.md` },
        { label: "Agent quickstart", href: `${base}documentation/quickstart/agent_start_here.md` },
      ]}
      nextStep={{ label: "Prosegui su Method", href: "/wiki/method" }}
    />
  );
}
