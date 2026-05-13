import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { paths, howToChoose, pathsMeta } from "@/content/paths";
import { githubUrl } from "@/content/public-site";

export const metadata: Metadata = {
  title: pathsMeta.title,
  description: pathsMeta.description,
};

export default function PercorsiPage() {
  return (
    <main className="paths-page">
      <section className="public-hero" style={{ padding: "2.5rem 0 0.5rem" }}>
        <span className="public-hero-badge">Percorsi</span>
        <h1>Scegli il percorso più vicino al risultato che vuoi ottenere</h1>
        <p>
          Ogni percorso ti guida da un problema reale a un output verificabile: requirement, prompt, task, checklist,
          automazione, prototipo o MVP.
        </p>
      </section>

      <div className="public-grid-2">
        {paths.map((path) => (
          <div key={path.id} id={path.id} className="public-card" style={{ gap: "0.6rem" }}>
            <h3>{path.title}</h3>
            <span className="public-badge public-badge-violet" style={{ fontSize: "0.7rem" }}>
              {path.audience}
            </span>
            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>{path.goal}</p>
            <p>{path.description}</p>
            <div style={{ display: "grid", gap: "0.3rem" }}>
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--state-success)" }}>Output:</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {path.output.map((o) => (
                  <li key={o} style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className="public-section">
        <div className="public-card public-card-violet">
          <h2>Non sai da dove partire?</h2>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            {howToChoose.map((item) => (
              <div
                key={item.condition}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.3rem 0.6rem",
                  alignItems: "baseline",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid var(--surface-border-soft)",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.condition}</span>
                <span style={{ color: "var(--text-muted)" }}>→</span>
                <Link
                  href={`/percorsi#${item.pathId}` as Route}
                  style={{ color: "var(--brand-primary)", fontWeight: 500, fontSize: "0.9rem" }}
                >
                  {item.suggestion}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section" style={{ paddingTop: "1rem" }}>
        <div className="public-cta-row">
          <Link href={"/#method" as Route} className="public-btn public-btn-primary">
            Scopri il metodo
          </Link>
          <Link href={"/wiki" as Route} className="public-btn">
            Apri la wiki
          </Link>
          <a href={githubUrl} className="public-btn public-btn-github" target="_blank" rel="noreferrer">
            Apri GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
