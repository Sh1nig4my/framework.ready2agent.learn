import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiRepositoryMapPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/repository-map"
      title="Repository map"
      description="Questa mappa ti mostra come e organizzato Learn, cosi sai subito dove andare per studiare, praticare o implementare."
      purpose="Ridurre il tempo perso nella navigazione e aiutarti a trovare il documento giusto al momento giusto."
      whenToUse="Usala quando inizi un nuovo task, quando fai onboarding di qualcuno o quando devi recuperare contesto in fretta."
      learningOutcome="Imparerai a leggere il repository come un sistema coerente, non come una lista di file scollegati."
      commonMistake="Aprire file a caso senza percorso: aumenta il carico cognitivo e rende piu difficile mantenere coerenza."
      sourceLinks={[
        { label: "README root", href: `${base}README.md` },
        { label: "Documentation hub", href: `${base}documentation/README.md` },
      ]}
      nextStep={{ label: "Vai a Public/private boundary", href: "/wiki/public-private-boundary" }}
    />
  );
}
