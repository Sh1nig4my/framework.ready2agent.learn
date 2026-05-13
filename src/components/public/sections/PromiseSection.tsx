import { promise } from "@/content/public-site";

export function PromiseSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-green">Soluzione</span>
        <h2>{promise.title}</h2>
        <p>{promise.description}</p>
      </div>
    </section>
  );
}
