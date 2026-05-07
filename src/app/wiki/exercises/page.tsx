import { WikiPageShell } from "@/components/wiki/wiki-page-shell";

const base = "https://github.com/Sh1nig4my/framework.ready2agent.learn/blob/main/";

export default function WikiExercisesPage() {
  return (
    <WikiPageShell
      currentPath="/wiki/exercises"
      title="Exercises"
      description="Gli esercizi sono il ponte tra teoria e autonomia: ogni livello ti costringe a scegliere, verificare e migliorare."
      purpose="Allenarti a trasformare output agent in decisioni solide, con rubriche, tracker e feedback esplicito."
      whenToUse="Usala dopo il playground, quando vuoi passare da prova veloce a pratica disciplinata e misurabile."
      learningOutcome="Imparerai a riconoscere output deboli, correggere il processo e aumentare la qualita delle tue consegne."
      commonMistake="Cercare la soluzione piu rapida senza compilare tracker e criteri: impari meno e perdi la parte formativa."
      sourceLinks={[
        { label: "Exercises hub", href: `${base}exercises/README.md` },
        { label: "Exercises tracker", href: `${base}exercises/tracker.md` },
      ]}
      nextStep={{ label: "Vai a Case study", href: "/wiki/case-study" }}
    />
  );
}
