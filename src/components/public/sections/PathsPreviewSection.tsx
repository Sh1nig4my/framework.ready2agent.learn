import Link from "next/link";
import type { Route } from "next";
import { pathPreviews } from "@/content/public-site";

export function PathsPreviewSection() {
  return (
    <section className="public-section">
      <div className="public-section-header">
        <span className="public-badge public-badge-violet">Percorsi</span>
        <h2>Scegli il tuo percorso</h2>
        <p>
          Ogni percorso parte da un problema reale e arriva a un output verificabile. Non devi sapere già tutto: impari
          lungo la strada.
        </p>
      </div>
      <div className="public-grid-2">
        {pathPreviews.map((p) => (
          <div key={p.title} className="public-card public-card-violet" style={{ gap: "0.4rem" }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--learn-violet)" }}>{p.audience}</p>
          </div>
        ))}
      </div>
      <div className="public-cta-row">
        <Link href={"/percorsi" as Route} className="public-btn">
          Vedi tutti i percorsi
        </Link>
        <Link href={"/wiki/first-mission" as Route} className="public-btn public-btn-primary">
          Inizia dalla First Mission
        </Link>
      </div>
    </section>
  );
}
