import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiStartHerePage() {
  return (
    <WikiPageShell
      currentPath="/wiki/start-here"
      title="Start here"
      description="Questa pagina e il tuo primo punto di appoggio: ti dice in che ordine leggere i documenti e come partire senza perdere tempo."
      purpose="Ridurre il tempo di setup iniziale e allinearti subito su confini, metodo e regole operative del repository."
      whenToUse="Usala all'inizio di ogni sessione, sia quando studi da solo sia quando lavori insieme a un coding agent."
      learningOutcome="Saprai da dove iniziare, quali file sono veramente source-of-truth e come evitare un avvio confuso o fuori scope."
      commonMistake="Partire dal codice senza leggere i documenti base: genera output veloci ma fragili e spesso incoerenti con il metodo Learn."
      sourceLinks={[
        { label: "README.md", href: `${base}README.md` },
        { label: "Agent quickstart", href: `${base}documentation/quickstart/agent_start_here.md` },
      ]}
      nextStep={{ label: "Prosegui su Method", href: "/wiki/method" }}
    />
  );
}
