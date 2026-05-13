"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getSectionLabel(pathname: string): string | null {
  const prefix = "/wiki/";
  if (!pathname.startsWith(prefix) || pathname === prefix || pathname === "/wiki") {
    return null;
  }
  const slug = pathname.slice(prefix.length).replace(/\/$/, "");
  const labels: Record<string, string> = {
    "first-mission": "First Mission",
    "start-here": "Start Here",
    method: "Method",
    playground: "Playground",
    prompts: "Prompts",
    workflow: "Workflow",
    exercises: "Esercizi",
    "case-study": "Case Study",
    "quality-gates": "Quality Gates",
    "agent-guide": "Guida Agent",
    "repository-map": "Mappa Repository",
    "public-private-boundary": "Boundary",
  };
  return labels[slug] ?? slug;
}

export function WikiSubNav() {
  const pathname = usePathname();
  const section = getSectionLabel(pathname);

  if (!section) return null;

  return (
    <nav
      aria-label="Navigazione wiki"
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "0.5rem 1.5rem 0",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.82rem",
        color: "var(--text-muted)",
      }}
    >
      <Link
        href="/wiki"
        style={{
          color: "var(--brand-primary)",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        &larr; Torna alla Wiki
      </Link>
      <span>/</span>
      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{section}</span>
    </nav>
  );
}
