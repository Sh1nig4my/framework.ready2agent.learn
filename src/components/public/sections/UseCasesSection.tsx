import { useCases } from "@/content/public-site";

export function UseCasesSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-gray">Cosa puoi costruire</span>
        <h2>Risultati tangibili, non solo teoria</h2>
        <p>
          Con Ready2Agent Learn impari a produrre output concreti. Ecco cosa puoi ottenere applicando il metodo.
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {useCases.map((uc) => (
          <span key={uc} className="use-case-tag">
            {uc}
          </span>
        ))}
      </div>
    </section>
  );
}
