import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiExercisesPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/exercises"
      title="Exercises"
      description="Gli esercizi sono il ponte tra teoria e autonomia: ogni livello ti costringe a scegliere, verificare e migliorare."
      purpose="Allenarti a trasformare output agent in decisioni solide, con rubriche, tracker e feedback esplicito."
      whenToUse="Apri questa pagina dopo il workflow, quando vuoi passare dalla teoria alla pratica disciplinata con rubriche e tracker."
      learningOutcome="Imparerai a riconoscere output deboli, correggere il processo e misurare la qualita con rubrica, scorecard e tracker."
      commonMistake="Cercare la soluzione rapida senza compilare tracker e criteri: perdi la parte formativa e ripeti gli stessi errori."
      sourceLinks={[
        { label: "Exercises hub", href: `${base}exercises/README.md` },
        { label: "Exercises tracker", href: `${base}exercises/tracker.md` },
        { label: "Standard rubric", href: `${base}exercises/rubrics/standard-rubric.md` },
      ]}
      nextStep={{ label: "Vai a Case study", href: "/wiki/case-study" }}
    />
  );
}
