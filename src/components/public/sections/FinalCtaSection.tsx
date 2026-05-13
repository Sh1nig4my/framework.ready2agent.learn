import Link from "next/link";
import type { Route } from "next";
import { githubUrl } from "@/content/public-site";

export function FinalCtaSection() {
  return (
    <section className="public-section" style={{ textAlign: "center" }}>
      <div style={{ display: "grid", gap: "1rem", justifyItems: "center", padding: "2rem 0" }}>
        <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>Pronto a trasformare le tue idee in progetti concreti?</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "48ch" }}>
          Non serve essere esperti. Serve un metodo. E il metodo è qui, gratuito e aperto.
        </p>
        <div className="public-cta-row" style={{ justifyContent: "center" }}>
          <Link href="/#method" className="public-btn public-btn-primary">
            Scopri il metodo
          </Link>
          <Link href={"/percorsi" as Route} className="public-btn">
            Vedi i percorsi
          </Link>
          <a href={githubUrl} className="public-btn public-btn-github" target="_blank" rel="noreferrer">
            Apri su GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
