"use client";

import Link from "next/link";
import type { Route } from "next";
import { useMemo } from "react";
import { wikiSections } from "@/content/wiki";
import { useWikiReadState } from "@/hooks/use-wiki-read-state";

export default function WikiIndexPage() {
  const { state: readState } = useWikiReadState();

  const completed = useMemo(() => wikiSections.filter((section) => readState[section.href]).length, [readState]);

  return (
    <main className="wiki-page">
      <section className="wiki-card wiki-hero">
        <p className="wiki-badge">Ready2Agent Learn v1.2.2</p>
        <h1>Wiki guidata</h1>
        <p>
          Questa wiki e il tuo livello di orientamento: ti dice cosa leggere prima, perche leggerlo e quale step fare subito dopo.
          I markdown restano source-of-truth di approfondimento, mentre qui trovi il percorso guidato per non perderti.
        </p>
        <p className="wiki-muted">
          Progresso lettura: {completed}/{wikiSections.length} sezioni completate. Obiettivo consigliato: completare almeno
          First mission, Playground, Prompts e Quality gates.
        </p>
        <div className="wiki-cta-row">
          <Link className="wiki-btn wiki-btn-primary" href="/wiki/first-mission">
            Inizia da First mission
          </Link>
          <Link className="wiki-btn" href="/wiki/agent-guide">
            Guida coding agent
          </Link>
          <Link className="wiki-btn" href="/wiki/quality-gates">
            Vai ai quality gate
          </Link>
        </div>
      </section>

      <section className="wiki-card">
        <h2>Sezioni wiki</h2>
        <p className="wiki-muted">Ogni card ti dice cosa ottieni dalla lettura e ti aiuta a capire cosa aprire adesso.</p>
        <div className="wiki-grid-2">
          {wikiSections.map((section) => (
            <article key={section.href} className="wiki-subcard">
              <p className={`wiki-status-badge ${readState[section.href] ? "wiki-status-read" : "wiki-status-pending"}`}>
                {readState[section.href] ? "Letto" : "Da leggere"}
              </p>
              <h3>{section.title}</h3>
              <p>{section.desc}</p>
              <Link className="wiki-btn" href={section.href as Route}>
                Apri sezione
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wiki-card">
        <h2>Source-of-truth su GitHub</h2>
        <p className="wiki-muted">
          Nelle pagine wiki troverai link ai file sorgente in formato GitHub `blob/main` per evitare percorsi non serviti
          direttamente dalla app.
        </p>
        <Link className="wiki-btn" href="/">
          Torna alla homepage
        </Link>
      </section>
    </main>
  );
}
