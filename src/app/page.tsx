"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const sections = [
  "start-here",
  "business-value",
  "automation",
  "consulenza",
  "percorso",
  "metodo",
  "prompt",
  "workflow",
  "caso-studio",
] as const;

const pathCards = [
  {
    badge: "10 min",
    title: "Orientamento rapido",
    audience: "Perfetto se sei all'inizio o vuoi una vista d'insieme.",
    outcome: "Capirai cosa contiene Ready2Agent Learn e dove entrare.",
    steps: [
      "Leggi questa landing come mappa generale.",
      "Apri README.md e chiarisci obiettivi e limiti.",
      "Vai su documentation/quickstart/non_technical_start_here.md.",
    ],
    primary: { label: "Apri guida non tecnica", href: "#prompt" },
    secondary: { label: "Vai al metodo", href: "#metodo" },
  },
  {
    badge: "30 min",
    title: "Percorso consigliato",
    audience: "Ideale per iniziare davvero a lavorare con un agente.",
    outcome: "Otterrai un primo flusso operativo chiaro e replicabile.",
    steps: [
      "Leggi documentation/method/README.md.",
      "Apri prompts/README.md e copia il prompt standard di avvio.",
      "Leggi il requirement master del caso studio Auth/IAM.",
    ],
    primary: { label: "Apri il prompt system", href: "#prompt" },
    secondary: { label: "Apri il workflow", href: "#workflow" },
    recommended: true,
  },
  {
    badge: "2 ore",
    title: "Studio guidato",
    audience: "Per chi vuole progettare task e roadmap in modo rigoroso.",
    outcome: "Uscirai con piano, task e criteri di validazione.",
    steps: [
      "Segui il flusso: metodo -> workflow -> prompt.",
      "Chiedi a Codex un piano operativo basato su prompt 00-03.",
      "Valuta output, rischi e step successivi prima di implementare.",
    ],
    primary: { label: "Apri il case study", href: "#caso-studio" },
    secondary: { label: "Prompt workflow", href: "#prompt" },
  },
];

const promptCore = [
  ["00", "Onboarding", "Quando: inizio sessione", "Output: scope, rischi, piano operativo"],
  ["01", "Requirement Analysis", "Quando: dopo onboarding", "Output: assumptions, boundaries, task groups"],
  ["02", "Architecture Planning", "Quando: dopo analisi", "Output: layer, confini API, security boundaries"],
  ["03", "Task Breakdown", "Quando: prima del codice", "Output: task ordinati, dipendenze, completion criteria"],
  ["04", "Implementation Start", "Quando: task esecutivo", "Output: modifica scoped + riepilogo tecnico"],
  ["05", "Quality Gate", "Quando: fine iterazione", "Output: lint/build/typecheck + piano fix"],
  ["06", "Documentation Alignment", "Quando: dopo quality gate", "Output: documentazione riallineata"],
] as const;

const promptWorkflow = [
  ["01", "Generate Workflow Chapters", "Input: requirement master", "Output: capitoli con obiettivi/input/output/rischi"],
  ["02", "Generate Workflow Tasks", "Input: capitoli + requirement", "Output: backlog task con dipendenze e DoD"],
  ["03", "Update Workflow Tracker", "Input: stato reale + gate", "Output: avanzamento, blocchi, decisioni, next step"],
  ["04", "Review Workflow Consistency", "Input: requirement + workflow + docs", "Output: gap e fix prioritizzati"],
] as const;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]>("start-here");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionIds = useMemo(() => sections, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as (typeof sections)[number]);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="wiki-page">
      <header className="wiki-nav-wrap">
        <div className="wiki-nav">
          <p className="wiki-brand">
            <Image src="/ready2agent-logo-nobg.png" alt="Ready2Agent Learn logo" width={24} height={24} />
            <span>Ready2Agent Learn</span>
          </p>
          <nav className="wiki-links" aria-label="Sezioni della guida">
            <a href="#start-here" className={activeSection === "start-here" ? "is-active" : ""}>Perche ora</a>
            <a href="#business-value" className={activeSection === "business-value" ? "is-active" : ""}>Valore aziende</a>
            <a href="#consulenza" className={activeSection === "consulenza" ? "is-active" : ""}>Consulenza</a>
            <a href="#percorso" className={activeSection === "percorso" ? "is-active" : ""}>Da dove iniziare</a>
            <a href="#metodo" className={activeSection === "metodo" ? "is-active" : ""}>Metodo</a>
            <a href="#prompt" className={activeSection === "prompt" ? "is-active" : ""}>Prompt</a>
            <a href="#workflow" className={activeSection === "workflow" ? "is-active" : ""}>Workflow</a>
            <a href="#caso-studio" className={activeSection === "caso-studio" ? "is-active" : ""}>Caso studio</a>
          </nav>
        </div>
      </header>

      <div className="wiki-layout">
        <aside className="wiki-toc" aria-label="Indice rapido">
          <p className="wiki-toc-title">Indice rapido</p>
          <a href="#start-here" className={activeSection === "start-here" ? "is-active" : ""}>Perche ora</a>
          <a href="#business-value" className={activeSection === "business-value" ? "is-active" : ""}>Valore aziende</a>
          <a href="#automation" className={activeSection === "automation" ? "is-active" : ""}>Automazione</a>
          <a href="#consulenza" className={activeSection === "consulenza" ? "is-active" : ""}>Consulenza</a>
          <a href="#percorso" className={activeSection === "percorso" ? "is-active" : ""}>Da dove iniziare</a>
          <a href="#metodo" className={activeSection === "metodo" ? "is-active" : ""}>Metodo</a>
          <a href="#prompt" className={activeSection === "prompt" ? "is-active" : ""}>Prompt</a>
          <a href="#workflow" className={activeSection === "workflow" ? "is-active" : ""}>Workflow</a>
          <a href="#caso-studio" className={activeSection === "caso-studio" ? "is-active" : ""}>Caso studio</a>
        </aside>

        <div className="wiki-content">
          <section className="wiki-card wiki-hero" id="start-here">
            <p className="wiki-badge">Guida operativa Ready2Agent Learn</p>
            <h1>L&apos;AI coding senza metodo genera caos. Con standard, workflow e quality gate genera vantaggio.</h1>
            <p>
              Ready2Agent Learn nasce per trasformare richieste vaghe in un processo eseguibile: requisito, contesto, prompt, task, implementazione, validazione, documentazione.
            </p>
            <div className="wiki-cta-row">
              <a href="#business-value" className="wiki-btn wiki-btn-primary">Capire il valore per aziende</a>
              <a href="#consulenza" className="wiki-btn wiki-btn-outline">Richiedi consulenza</a>
            </div>
          </section>

          <section className="wiki-card value-card" id="business-value">
            <h2>Perche alle aziende serve uno standard di progettazione</h2>
            <p className="wiki-muted">
              Gli agenti amplificano il processo esistente. Se il processo e confuso, amplificano confusione. Se il processo e standardizzato, amplificano qualita, velocita e controllo.
            </p>
            <div className="wiki-grid-2">
              <article className="wiki-subcard compare-card">
                <h3>Senza standard</h3>
                <ul>
                  <li>Prompt isolati e output incoerenti.</li>
                  <li>Review lente e difficili da verificare.</li>
                  <li>Drift tra codice, requisito e documentazione.</li>
                </ul>
              </article>
              <article className="wiki-subcard compare-card">
                <h3>Con standard Ready2Agent</h3>
                <ul>
                  <li>Format condiviso tra business, developer e agent.</li>
                  <li>Output misurabili con quality gate.</li>
                  <li>Codice personalizzato sul contesto reale del prodotto.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="wiki-card" id="automation">
            <h2>Automazione agent-native: perche migliora il codice</h2>
            <p>
              L&apos;obiettivo non e generare codice generico piu in fretta. L&apos;obiettivo e ottenere codice specifico, ottimizzato e performante per il tuo caso reale.
            </p>
            <div className="pipeline">
              <span>Requirement</span>
              <span>Context</span>
              <span>Prompt</span>
              <span>Tasks</span>
              <span>Code</span>
              <span>Quality Gates</span>
              <span>Docs</span>
            </div>
          </section>

          <section className="wiki-card consultancy-card-large" id="consulenza">
            <p className="wiki-badge consultancy-badge">Consulenza</p>
            <h2>Porta Ready2Agent nel tuo team con un percorso su misura</h2>
            <p>
              Se vuoi adottare standard operativi, workflow tracciati e coding agent in modo professionale, possiamo costruire insieme una roadmap concreta per il tuo prodotto.
            </p>
            <div className="consultancy-points">
              <span>Standard di progettazione adattati al tuo contesto.</span>
              <span>Setup operativo prompt + workflow + quality gate.</span>
              <span>Governance tra codice, documentazione e decisioni di team.</span>
            </div>
            <a href="https://emanueleienna.dev/consultant/form-request" target="_blank" rel="noreferrer" className="wiki-btn wiki-btn-primary consultancy-btn">
              Richiedi una consulenza strategica
            </a>
            <p className="consultancy-note">Ready2Agent Learn resta gratuito e open-source. La consulenza e opzionale per adozione avanzata.</p>
          </section>

          <section className="wiki-card" id="percorso">
            <h2>Da che punto iniziare</h2>
            <p className="wiki-muted">
              Questa sezione e la tua rampa di ingresso. Scegli il percorso in base al tempo disponibile. Se sei indeciso, inizia da 30 minuti.
            </p>
            <div className="wiki-grid-3 path-grid">
              {pathCards.map((path) => (
                <article className={`wiki-subcard path-card ${path.recommended ? "is-recommended" : ""}`} key={path.title}>
                  {path.recommended ? <p className="path-recommended">Scelta consigliata</p> : null}
                  <p className="path-badge">{path.badge}</p>
                  <h3>{path.title}</h3>
                  <p className="path-audience">{path.audience}</p>
                  <p className="path-goal"><strong>Cosa ottieni:</strong> {path.outcome}</p>
                  <ol>
                    {path.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <div className="path-actions">
                    <a href={path.primary.href} className="path-link path-link-primary">{path.primary.label}</a>
                    <a href={path.secondary.href} className="path-link">{path.secondary.label}</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="wiki-card" id="metodo">
            <h2>Da dove nasce questa esigenza e come e suddiviso il metodo</h2>
            <p>
              Ready2Agent Learn nasce da un problema reale: richieste vaghe agli agenti producono modifiche fragili. Il metodo introduce una disciplina in cinque blocchi.
            </p>
            <div className="wiki-grid-2">
              <article className="wiki-subcard">
                <h3>1) Requirement discipline</h3>
                <p>Definisce obiettivo, scope e out-of-scope. Evita implementazioni arbitrarie.</p>
              </article>
              <article className="wiki-subcard">
                <h3>2) Prompt discipline</h3>
                <p>Ogni prompt ha input, output e controlli. Evita output non verificabili.</p>
              </article>
              <article className="wiki-subcard">
                <h3>3) Workflow discipline</h3>
                <p>Rende tracciabile il processo. Evita perdita di contesto tra iterazioni.</p>
              </article>
              <article className="wiki-subcard">
                <h3>4) Validation discipline</h3>
                <p>Quality gate obbligatori. Evita regressioni silenziose.</p>
              </article>
              <article className="wiki-subcard">
                <h3>5) Documentation alignment</h3>
                <p>Aggiorna documenti insieme al codice. Evita drift nel tempo.</p>
              </article>
            </div>
          </section>

          <section className="wiki-card" id="prompt">
            <h2>Uso dei prompt, nel dettaglio</h2>
            <p className="wiki-muted">Prompt principali e workflow prompts hanno ruoli diversi e complementari.</p>

            <article className="prompt-block">
              <h3>Prompt principali (00-06)</h3>
              <div className="workflow-prompt-cards">
                {promptCore.map(([id, title, when, output]) => (
                  <article className="wiki-subcard" key={id + title}>
                    <p className="path-badge">{id}</p>
                    <h4>{title}</h4>
                    <p>{when}</p>
                    <p>{output}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="prompt-block workflow-prompts-highlight">
              <h3>Prompt workflow-maintenance (01-04)</h3>
              <p className="wiki-muted">Servono a mantenere ordine tra requirement, task, tracker e allineamento documentale.</p>
              <div className="workflow-prompt-cards">
                {promptWorkflow.map(([id, title, input, output]) => (
                  <article className="wiki-subcard" key={id + title}>
                    <p className="path-badge">{id}</p>
                    <h4>{title}</h4>
                    <p>{input}</p>
                    <p>{output}</p>
                  </article>
                ))}
              </div>
            </article>
          </section>

          <section className="wiki-card" id="workflow">
            <h2>Workflow: la memoria del processo</h2>
            <p>Un workflow ben fatto evita salti logici e rende ogni fase verificabile da team e agenti.</p>
            <ol className="wiki-ordered">
              <li>Parti dal requirement master.</li>
              <li>Genera capitoli e task con workflow prompts.</li>
              <li>Implementa con prompt principali.</li>
              <li>Aggiorna tracker, blocchi e decisioni.</li>
              <li>Esegui quality gate e riallinea documentazione.</li>
            </ol>
          </section>

          <section className="wiki-card case-study-card" id="caso-studio">
            <p className="wiki-badge">Case Study in evidenza</p>
            <h2>Auth/IAM: il percorso pratico per sperimentare il metodo</h2>
            <p>
              Il caso studio non consegna una soluzione pronta. Ti guida nella costruzione progressiva di login/logout, ruoli, permessi, profili e policy server-side.
            </p>
            <div className="wiki-cta-row">
              <a href="#prompt" className="wiki-btn wiki-btn-primary">Avvia onboarding agente (Prompt 00)</a>
              <a href="#workflow" className="wiki-btn">Segui il workflow didattico</a>
            </div>
          </section>
        </div>
      </div>

      <a href="#start-here" className={`wiki-back-top ${showBackToTop ? "is-visible" : ""}`} aria-label="Torna all'inizio">
        Torna su
      </a>
    </main>
  );
}
