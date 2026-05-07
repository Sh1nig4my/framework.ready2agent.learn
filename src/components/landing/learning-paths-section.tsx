import { paths } from "@/content/landing";

export function LearningPathsSection() {
  return (
    <section className="r2a-card" id="paths">
      <h2>Scegli percorso</h2>
      <div className="r2a-grid">
        {paths.map((path) => (
          <article className="r2a-subcard" key={path.title}>
            <h3>{path.title}</h3>
            <a href={path.start}>Inizia qui</a>
          </article>
        ))}
      </div>
    </section>
  );
}
