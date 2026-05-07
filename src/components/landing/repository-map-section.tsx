import { repoMap } from "@/content/landing";

export function RepositoryMapSection() {
  return (
    <section className="r2a-card" id="repo-map">
      <h2>Repository map</h2>
        <ul>
          {repoMap.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </section>
  );
}
