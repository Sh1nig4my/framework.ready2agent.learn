import { targetAudience } from "@/content/public-site";

export function TargetSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-gray">Target</span>
        <h2>A chi serve Ready2Agent Learn</h2>
        <p>Ogni profilo trova un percorso adatto al proprio obiettivo.</p>
      </div>
      <div className="public-grid-3">
        {targetAudience.map((target) => (
          <div key={target.title} className="public-card" style={{ gap: "0.5rem" }}>
            <h3>{target.title}</h3>
            <p>{target.description}</p>
            <div style={{ marginTop: "auto", display: "grid", gap: "0.3rem" }}>
              <span className="public-badge public-badge-amber" style={{ fontSize: "0.7rem" }}>
                {target.problem}
              </span>
              <span className="public-badge public-badge-green" style={{ fontSize: "0.7rem" }}>
                {target.output}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
