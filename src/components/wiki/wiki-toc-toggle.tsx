"use client";

import { useCallback, useEffect, useState } from "react";

const TOC_ID = "wiki-toc-nav";

export function WikiTocToggle() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1079px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const el = document.getElementById(TOC_ID);
    if (!el) return;
    el.classList.toggle("is-open", open);
    if (open) {
      el.addEventListener("click", close);
      return () => el.removeEventListener("click", close);
    }
  }, [open, close]);

  if (!isMobile) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "-0.5rem" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={TOC_ID}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          border: "1px solid var(--surface-border)",
          borderRadius: "var(--radius-btn)",
          background: open ? "var(--brand-primary)" : "var(--surface-card)",
          color: open ? "#fff" : "var(--text-primary)",
          padding: "0.45rem 0.85rem",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
          minHeight: "40px",
          transition: "all 180ms ease",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
          <path d="M2 4h12M2 8h12M2 12h8" />
        </svg>
        {open ? "Nascondi indice" : "Mostra indice"}
      </button>
    </div>
  );
}
