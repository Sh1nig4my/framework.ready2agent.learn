import Link from "next/link";

const sections = [
  {
    id: "problema",
    title: "Problema",
    points: [
      "Gli agenti di coding falliscono quando ricevono richieste senza contesto operativo.",
      "Prompt isolati producono drift tra codice, requisito e comportamento atteso.",
      "Documentazione non aggiornata rompe la continuita del lavoro tecnico.",
      "Codice senza workflow tracciato diventa difficile da governare e validare.",
    ],
  },
  {
    id: "soluzione",
    title: "Soluzione",
    points: [
      "Requisito chiaro e verificabile.",
      "Prompt strutturati per guidare analisi e implementazione.",
      "Workflow tracciato dal requisito alla validazione.",
      "Task incrementali con quality gate e riallineamento documentale.",
    ],
  },
  {
    id: "metodo",
    title: "Metodo Ready2Agent",
    points: [
      "Method: disciplina operativa per sviluppo agent-native.",
      "Educational Runtime Skeleton: struttura minima Next.js con boundary architetturali.",
      "Case Study: percorso guidato Auth/IAM implementato step-by-step.",
    ],
  },
  {
    id: "architettura",
    title: "Architettura Didattica",
    points: [
      "Frontend: landing e shell dimostrativa.",
      "Backend/server: skeleton service/repository/lib.",
      "Shared contracts: area contratti e tipi condivisi.",
      "Workflow, prompts e documentation come infrastruttura del processo.",
    ],
  },
  {
    id: "caso-studio",
    title: "Caso Studio Auth/IAM",
    points: [
      "Login/logout, multiutente, multipermesso e profili multipli.",
      "Ruoli didattici, policy server-side e dashboard shell.",
      "Validazione input, quality gate e allineamento documentazione-codice.",
    ],
  },
  {
    id: "uso",
    title: "Come Usare il Repository",
    points: [
      "Clona e avvia l'app Next.js.",
      "Leggi README e quickstart umano o agente.",
      "Apri il requisito master del caso studio.",
      "Passa i prompt sequenziali all'agente e implementa per step.",
    ],
  },
  {
    id: "consulenza",
    title: "Consulenza",
    points: [
      "Ready2Agent Learn e gratuito e pubblico.",
      "Ready2Agent enterprise/private resta il percorso operativo per progetti reali.",
      "Per supporto architetturale, onboarding team o adozione metodo: richiedi consulenza.",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 md:px-8 md:py-14">
      <section className="rounded-3xl border border-[var(--line)] bg-[var(--bg-panel)] p-8 shadow-sm md:p-12">
        <p className="mb-4 inline-block rounded-full bg-[var(--bg-base)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          Ready2Agent Learn
        </p>
        <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">Laboratorio open-source per imparare a costruire software AI-native con agenti di coding</h1>
        <p className="mt-5 max-w-3xl text-base text-[var(--text-muted)] md:text-lg">
          Ready2Agent Learn separa in modo intenzionale la parte divulgativa e metodologica dalla versione enterprise privata. Qui trovi metodo, workflow, prompt e caso studio guidato.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-xl bg-[var(--bg-strong)] px-4 py-2 text-sm font-semibold text-white" href="#metodo">
            Leggi il metodo
          </Link>
          <Link className="rounded-xl border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold" href="#caso-studio">
            Apri il caso studio
          </Link>
          <Link className="rounded-xl border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold" href="#uso">
            Avvia il percorso con i prompt
          </Link>
          <a className="rounded-xl border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]" href="https://emanueleienna.dev/consultant/form-request" target="_blank" rel="noreferrer">
            Richiedi consulenza
          </a>
        </div>
      </section>

      {sections.map((section) => (
        <section id={section.id} key={section.id} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-panel)] p-7 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">{section.title}</h2>
          <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
            {section.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
