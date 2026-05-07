"use client";

import Link from "next/link";
import type { Route } from "next";
import { useMemo } from "react";
import { wikiSections } from "@/content/wiki";
import { useWikiReadState } from "@/hooks/use-wiki-read-state";

type LinkItem = {
  label: string;
  href: string;
};

type WikiPageShellProps = {
  currentPath: string;
  title: string;
  description: string;
  purpose: string;
  whenToUse: string;
  learningOutcome: string;
  commonMistake: string;
  sourceLinks: LinkItem[];
  nextStep: LinkItem;
};

export function WikiPageShell({
  currentPath,
  title,
  description,
  purpose,
  whenToUse,
  learningOutcome,
  commonMistake,
  sourceLinks,
  nextStep,
}: WikiPageShellProps) {
  const { state: readState, setRead } = useWikiReadState();

  const sectionIndex = wikiSections.findIndex((section) => section.href === currentPath);
  const total = wikiSections.length;
  const current = sectionIndex >= 0 ? wikiSections[sectionIndex] : null;
  const previous = sectionIndex > 0 ? wikiSections[sectionIndex - 1] : null;
  const next = sectionIndex >= 0 && sectionIndex < total - 1 ? wikiSections[sectionIndex + 1] : null;

  const completed = useMemo(() => wikiSections.filter((section) => readState[section.href]).length, [readState]);
  const missing = useMemo(() => wikiSections.filter((section) => !readState[section.href]), [readState]);

  return (
    <main className="wiki-page">
      <section className="wiki-card wiki-breadcrumb-card">
        <p className="wiki-breadcrumb">
          <Link href="/wiki">Wiki</Link>
          <span>/</span>
          <strong>{current?.title ?? title}</strong>
        </p>
        <p className="wiki-step">Step {sectionIndex + 1} di {total}</p>
      </section>

      <section className="wiki-card wiki-hero">
        <p className="wiki-badge">Wiki</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="wiki-cta-row">
          <button className="wiki-btn" type="button" onClick={() => setRead(currentPath)}>
            Segna come letto
          </button>
          <span className="wiki-status-badge wiki-status-read">
            Completate: {completed}/{total}
          </span>
        </div>
        {missing.length > 0 ? (
          <p className="wiki-muted">Ti manca: {missing.slice(0, 3).map((item) => item.title).join(", ")}</p>
        ) : (
          <p className="wiki-muted">Hai completato tutte le sezioni wiki.</p>
        )}
      </section>

      <section className="wiki-card">
        <h2>A cosa serve</h2>
        <p>{purpose}</p>
      </section>

      <section className="wiki-card">
        <h2>Quando usarla</h2>
        <p>{whenToUse}</p>
      </section>

      <section className="wiki-card">
        <h2>Cosa impari in questa pagina</h2>
        <p>{learningOutcome}</p>
      </section>

      <section className="wiki-card wiki-warning-card">
        <h2>Errore comune da evitare</h2>
        <p>{commonMistake}</p>
      </section>

      <section className="wiki-card">
        <h2>File sorgente collegati</h2>
        <div className="wiki-grid-2">
          {sourceLinks.map((source) => (
            <a key={source.href} className="wiki-btn" href={source.href} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ))}
        </div>
      </section>

      <section className="wiki-card">
        <h2>Prossimo step consigliato</h2>
        <Link className="wiki-btn wiki-btn-primary" href={nextStep.href as Route}>
          {nextStep.label}
        </Link>
      </section>

      <section className="wiki-card wiki-prev-next">
        {previous ? (
          <Link className="wiki-btn" href={previous.href as Route}>
            ← {previous.title}
          </Link>
        ) : (
          <span className="wiki-muted">Inizio percorso</span>
        )}
        {next ? (
          <Link className="wiki-btn" href={next.href as Route}>
            {next.title} →
          </Link>
        ) : (
          <span className="wiki-muted">Fine percorso</span>
        )}
      </section>

      <section className="wiki-card">
        <Link className="wiki-btn" href="/wiki">
          Torna alla wiki index
        </Link>
      </section>
    </main>
  );
}
