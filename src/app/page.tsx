import { CaseStudySection } from "@/components/landing/case-study-section";
import { ConsultingSection } from "@/components/landing/consulting-section";
import { ExercisesSection } from "@/components/landing/exercises-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LearningPathsSection } from "@/components/landing/learning-paths-section";
import { PlaygroundSection } from "@/components/landing/playground-section";
import { RepositoryMapSection } from "@/components/landing/repository-map-section";
import { WorkflowSection } from "@/components/landing/workflow-section";

export default function HomePage() {
  return (
    <main className="r2a-page">
      <HeroSection />

      <section className="r2a-card" id="why">
        <h2>Perche esiste</h2>
        <p>
          Senza metodo, gli agenti accelerano confusione. Con metodo, trasformi idea confusa in requisito, prompt, task e quality
          gate.
        </p>
      </section>

      <PlaygroundSection />
      <LearningPathsSection />
      <ExercisesSection />
      <WorkflowSection />
      <CaseStudySection />
      <RepositoryMapSection />

      <section className="r2a-card" id="boundary">
        <h2>Public/private boundary</h2>
        <p>Learn e prodotto didattico: niente backend reale, niente DB reale, niente runtime enterprise privato.</p>
        <a href="documentation/project-meta/public-private-boundary.md">Leggi il boundary completo</a>
      </section>

      <ConsultingSection />
    </main>
  );
}
