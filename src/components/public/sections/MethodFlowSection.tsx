import { methodSteps } from "@/content/public-site";

export function MethodFlowSection() {
  return (
    <section className="public-section" id="method">
      <div className="public-section-header">
        <span className="public-badge public-badge-violet">Metodo</span>
        <h2>Il metodo Ready2Agent</h2>
        <p>
          Ogni step produce un output verificabile. Non salti fasi: trasformi un&apos;idea in documentazione pronta per il prossimo
          ciclo.
        </p>
      </div>
      <div className="method-flow">
        {methodSteps.map((step) => (
          <div key={step.title} className="method-step">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <p className="method-output">{step.output}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
