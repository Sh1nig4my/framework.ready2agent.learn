import { quickPrompts } from "@/content/landing";

export function PlaygroundSection() {
  return (
    <section className="r2a-card" id="playground">
      <h2>Prova subito</h2>
      <p>In 5 minuti puoi testare il metodo con prompt pronti.</p>
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
