import { hero } from "@/content/landing";

export function HeroSection() {
  return (
    <section className="r2a-card" id="hero">
      <p className="r2a-badge">Ready2Agent Learn v1.0.0</p>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <div className="r2a-row">
        {hero.ctas.map((cta) => (
          <a key={cta.label} className="r2a-btn r2a-btn-primary" href={cta.href}>
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
}
