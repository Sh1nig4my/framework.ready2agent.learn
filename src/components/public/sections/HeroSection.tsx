import Link from "next/link";
import type { Route } from "next";
import { hero } from "@/content/public-site";

export function HeroSection() {
  return (
    <section className="public-hero">
      <span className="public-hero-badge">Laboratorio didattico open-source</span>
      <h1>{hero.headline}</h1>
      <p>{hero.subtitle}</p>
      <div className="public-cta-row" style={{ justifyContent: "center" }}>
        <Link href={hero.ctaPrimary.href as Route} className="public-btn public-btn-primary">
          {hero.ctaPrimary.label}
        </Link>
        <Link href={hero.ctaSecondary.href as Route} className="public-btn">
          {hero.ctaSecondary.label}
        </Link>
        <a href={hero.ctaGithub.href} className="public-btn public-btn-github" target="_blank" rel="noreferrer">
          {hero.ctaGithub.label}
        </a>
      </div>
    </section>
  );
}
