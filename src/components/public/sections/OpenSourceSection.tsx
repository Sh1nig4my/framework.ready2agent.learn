import { openSource, githubUrl } from "@/content/public-site";

export function OpenSourceSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-gray">Open source</span>
        <h2>{openSource.title}</h2>
        <p>{openSource.description}</p>
      </div>
      <div className="public-cta-row">
        <a href={githubUrl} className="public-btn public-btn-github" target="_blank" rel="noreferrer">
          Apri il repository GitHub
        </a>
      </div>
    </section>
  );
}
