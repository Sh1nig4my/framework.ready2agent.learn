import { problemPoints } from "@/content/public-site";

export function ProblemSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-amber">Problema</span>
        <h2>Ti riconosci in una di queste situazioni?</h2>
        <p>Se almeno una ti suona familiare, Ready2Agent Learn è stato pensato per te.</p>
      </div>
      <div className="public-grid-2">
        {problemPoints.map((point) => (
          <div key={point} className="public-card" style={{ gap: "0.4rem" }}>
            <p style={{ color: "var(--text-primary)", fontWeight: 500 }}>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
