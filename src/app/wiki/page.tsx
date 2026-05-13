import Link from "next/link";
import type { Route } from "next";
import type { Metadata } from "next";
import { wikiCompactSections, glossary, wikiSections } from "@/content/wiki";
import { githubUrl } from "@/content/public-site";
import { WikiTocToggle } from "@/components/wiki/wiki-toc-toggle";

export const metadata: Metadata = {
  title: "Wiki Metodo — Ready2Agent Learn",
  description:
    "Guida compatta al metodo Ready2Agent Learn: requirement, prompt, workflow, quality gate, esercizi e case study.",
};

export default function WikiCompactPage() {
  const indexItems = wikiCompactSections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <main className="wiki-page">
      <section className="wiki-card wiki-hero">
        <p className="wiki-badge">Wiki Metodo</p>
        <h1>Guida compatta al metodo Ready2Agent Learn</h1>
        <p>
          Una panoramica completa del metodo, dei concetti chiave e del lessico. Usa l&apos;indice per navigare, oppure
          approfondisci nelle pagine wiki dedicate.
        </p>
        <div className="wiki-cta-row">
          <Link className="wiki-btn wiki-btn-primary" href={"/percorsi" as Route}>
            Vedi i percorsi
          </Link>
          <Link className="wiki-btn" href={"/wiki/first-mission" as Route}>
            First Mission
          </Link>
          <Link className="wiki-btn" href={githubUrl} target="_blank">
            GitHub
          </Link>
        </div>
      </section>

      <WikiTocToggle />
      <div className="wiki-layout">
        <nav className="wiki-toc" id="wiki-toc-nav" aria-label="Indice wiki">
          <span className="wiki-toc-title">Indice</span>
          {indexItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.title}
            </a>
          ))}
        </nav>

        <div className="wiki-content">
          {wikiCompactSections.map((section) => (
            <article key={section.id} id={section.id} className={`wiki-card wiki-card-variant-${section.variant}`} style={{ scrollMarginTop: "5.4rem" }}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              {section.id === "quality-gate" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn" href="/wiki/quality-gates">
                    Approfondisci quality gate
                  </Link>
                </div>
              )}
              {section.id === "first-mission" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn wiki-btn-primary" href={"/wiki/first-mission" as Route}>
                    Inizia la First Mission
                  </Link>
                </div>
              )}
              {section.id === "percorsi" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn" href={"/percorsi" as Route}>
                    Esplora i percorsi
                  </Link>
                </div>
              )}
              {section.id === "esercizi" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn" href="/wiki/exercises">
                    Vai agli esercizi
                  </Link>
                </div>
              )}
              {section.id === "case-study" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn" href="/wiki/case-study">
                    Apri il case study
                  </Link>
                </div>
              )}
              {section.id === "boundary" && (
                <div className="wiki-cta-row">
                  <Link className="wiki-btn" href="/wiki/public-private-boundary">
                    Leggi il boundary completo
                  </Link>
                </div>
              )}
            </article>
          ))}

          <article className="wiki-card" id="glossario">
            <h2>Glossario</h2>
            <p>I termini chiave per orientarti nel metodo e nel repository.</p>
            <div className="wiki-grid-2">
              {glossary.map((entry) => (
                <div key={entry.term} className="wiki-subcard">
                  <h3>{entry.term}</h3>
                  <p>{entry.definition}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="wiki-card">
            <h2>Prossimi step</h2>
            <p>
              Hai una visione d&apos;insieme del metodo. Ora scegli il tuo prossimo passo concreto.
            </p>
            <div className="wiki-cta-row">
              <Link className="wiki-btn wiki-btn-primary" href={"/percorsi" as Route}>
                Scopri i percorsi
              </Link>
              <Link className="wiki-btn wiki-btn-primary" href={"/wiki/first-mission" as Route}>
                Inizia dalla First Mission
              </Link>
              <Link className="wiki-btn" href={githubUrl} target="_blank">
                Apri GitHub
              </Link>
            </div>
          </article>

          <article className="wiki-card">
            <h2>Pagine wiki di approfondimento</h2>
            <p>
              Ogni sezione della wiki compatta ha una pagina dedicata con dettagli, esempi e source-of-truth.
            </p>
            <div className="wiki-grid-3">
              {wikiSections.map((section) => (
                <Link key={section.href} className="wiki-btn" href={section.href as Route}>
                  {section.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
