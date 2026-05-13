"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, githubUrl } from "@/content/public-site";

export function PublicHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="public-header">
      <div className="public-header-inner">
        <Link href="/" className="public-header-brand">
          Ready2Agent<span className="brand-accent">Learn</span>
        </Link>

        <nav className={`public-header-nav${isOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as Route}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="public-header-actions">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="public-btn public-btn-github public-btn-sm public-mobile-hidden"
          >
            GitHub
          </a>
          <Link href={"/#method" as Route} className="public-btn public-btn-primary public-btn-sm public-mobile-hidden">
            Scopri il metodo
          </Link>
          <button
            type="button"
            className="public-header-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
