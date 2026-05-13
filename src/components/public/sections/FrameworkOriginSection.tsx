import { frameworkOrigin } from "@/content/public-site";

export function FrameworkOriginSection() {
  return (
    <section className="public-section">
      <div className="public-card public-card-highlight" style={{ gap: "0.8rem" }}>
        <span className="public-badge public-badge-gray">Credibilità</span>
        <h2>{frameworkOrigin.title}</h2>
        <p>{frameworkOrigin.description}</p>
      </div>
    </section>
  );
}
