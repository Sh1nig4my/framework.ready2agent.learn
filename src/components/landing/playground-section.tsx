import { quickPrompts } from "@/content/landing";

export function PlaygroundSection() {
  return (
    <section className="r2a-card" id="playground">
      <h2>Prova subito</h2>
      <p>Inizia dalla wiki per capire dove trovare playground, prompt e percorsi di pratica.</p>
      <ul>
        {quickPrompts.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
