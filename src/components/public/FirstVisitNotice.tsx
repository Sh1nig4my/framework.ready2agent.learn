"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useState } from "react";
import { contactEmail } from "@/content/public-site";

const STORAGE_KEY = "ready2agent-learn-privacy-notice-choice";

export function FirstVisitNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      const choice = window.localStorage.getItem(STORAGE_KEY);
      setVisible(!choice);
    });
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="first-visit-overlay" role="dialog" aria-modal="true" aria-label="Avviso privacy e utilizzo">
      <div className="first-visit-modal">
        <h2>Avviso privacy e utilizzo</h2>
        <p>
          Ready2Agent Learn è un progetto didattico open-source. Questa pagina non raccoglie dati personali tramite form e
          non usa tracciamento marketing. Salviamo solo una preferenza locale nel tuo browser per ricordare questa scelta.
        </p>
        <div className="first-visit-links">
          <Link href={"/privacy" as Route} onClick={() => setVisible(false)}>
            Privacy
          </Link>
          <Link href={"/terms" as Route} onClick={() => setVisible(false)}>
            Termini
          </Link>
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
          Per contatti: {contactEmail}
        </p>
        <div className="first-visit-actions">
          <button type="button" className="public-btn public-btn-primary" onClick={() => handleChoice("accepted")}>
            Accetta
          </button>
          <button type="button" className="public-btn" onClick={() => handleChoice("declined")}>
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}
