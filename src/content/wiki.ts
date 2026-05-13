export const WIKI_READ_STORAGE_KEY = "r2a-wiki-read";

export const wikiSections = [
  {
    title: "First mission",
    href: "/wiki/first-mission",
    desc: "Golden path iniziale: in 30-60 minuti trasformi un'idea confusa in un First Mission Dossier verificabile.",
  },
  {
    title: "Start here",
    href: "/wiki/start-here",
    desc: "Leggi in ordine: source-of-truth, confini, poi prosegui verso Method.",
  },
  {
    title: "Method",
    href: "/wiki/method",
    desc: "Capisci come trasformare idee vaghe in task verificabili, con confini chiari e decisioni tracciate.",
  },
  {
    title: "Playground",
    href: "/wiki/playground",
    desc: "Libreria comparativa per pratica veloce: prompt debole vs prompt migliorato, output mediocre vs output verificabile.",
  },
  {
    title: "Prompts",
    href: "/wiki/prompts",
    desc: "Scegli il prompt 00-06 della fase: output contract, anti-drift, poi prosegui su Workflow.",
  },
  {
    title: "Workflow",
    href: "/wiki/workflow",
    desc: "Traccia requirement, task e decisioni con tracker e stato aggiornato: poi prosegui su Exercises.",
  },
  {
    title: "Exercises",
    href: "/wiki/exercises",
    desc: "Allenati con rubrica, scorecard e tracker: da esercizi base a casi complessi con valutazione misurabile.",
  },
  {
    title: "Case study",
    href: "/wiki/case-study",
    desc: "Il caso Auth/IAM usa tre livelli (A concettuale, B mock, C transfer) per allenare metodo senza deriva enterprise.",
  },
  {
    title: "Quality gates",
    href: "/wiki/quality-gates",
    desc: "La checklist finale per chiudere task e release: se non e verificabile con gate, non e finito.",
  },
  {
    title: "Agent guide",
    href: "/wiki/agent-guide",
    desc: "La guida rapida per usare Codex/OpenCode in modo sicuro: confini, source-of-truth e regole operative essenziali.",
  },
  {
    title: "Repository map",
    href: "/wiki/repository-map",
    desc: "Mappa logica del repository: ti aiuta a capire dove leggere, dove praticare e dove tracciare il lavoro.",
  },
  {
    title: "Public/private boundary",
    href: "/wiki/public-private-boundary",
    desc: "Leggi il confine tra Learn pubblico e runtime privato, poi approfondisci Method.",
  },
];

export type WikiSectionVariant = "method" | "tech" | "warning" | "exercise" | "doc";

export const wikiCompactSections: { id: string; title: string; content: string; variant: WikiSectionVariant }[] = [
  {
    id: "cos-e",
    title: "Cos'è Ready2Agent Learn",
    variant: "method",
    content:
      "Ready2Agent Learn è un laboratorio open-source didattico (italiano-first) per imparare a trasformare idee confuse in lavoro governabile da coding agent. Non è un runtime enterprise: è un ambiente formativo dove metodo, prompt, workflow e validazione hanno la stessa importanza del codice.",
  },
  {
    id: "a-chi-serve",
    title: "A chi serve",
    variant: "method",
    content:
      "Giovani sviluppatori, founder, freelance, studenti, autodidatti, consulenti, piccoli team e persone non tecniche che vogliono usare AI e coding agent con metodo per migliorare produttività, validare idee e creare automazioni.",
  },
  {
    id: "metodo",
    title: "Metodo Ready2Agent",
    variant: "method",
    content:
      "idea → requisito → contesto → prompt → task → implementazione → quality gate → documentazione. Ogni step produce un output verificabile e prepara lo step successivo. Non si salta fasi: si trasforma un'intuizione in documentazione operativa.",
  },
  {
    id: "requirement",
    title: "Requirement",
    variant: "tech",
    content:
      "Il requisito trasforma il caos iniziale in obiettivi, scope e vincoli. Un buon requisito risponde a: cosa vogliamo ottenere, per chi, con quali criteri di successo, cosa resta fuori. È la base su cui costruire contesto e prompt.",
  },
  {
    id: "contesto",
    title: "Contesto",
    variant: "tech",
    content:
      "Il contesto dà all'agente le informazioni giuste per decidere. Include background tecnico, riferimento al dominio, esempi, vincoli, risorse disponibili e criteri di qualità. Un prompt senza contesto produce output generici.",
  },
  {
    id: "prompt",
    title: "Prompt agent-ready",
    variant: "tech",
    content:
      "Un prompt operativo non è una richiesta vaga: è un contratto che specifica ruolo, input, output atteso, formato, criteri di validazione e confini. I prompt 00-06 in prompts/ sono la sequenza consigliata per task strutturati.",
  },
  {
    id: "workflow",
    title: "Workflow",
    variant: "tech",
    content:
      "Il workflow è la memoria ordinata del lavoro: requisito, task tracker, stato avanzamento, decisioni e retrospettiva. Si traccia in workflow/ usando i tracker disponibili. Ogni fase deve essere verificabile.",
  },
  {
    id: "task",
    title: "Task breakdown",
    variant: "tech",
    content:
      "Spezzare il lavoro in task piccoli, indipendenti e verificabili è il segreto per governare coding agent. Ogni task ha: obiettivo, criteri di accettazione, dipendenze esplicite e un output atteso.",
  },
  {
    id: "quality-gate",
    title: "Quality gate",
    variant: "warning",
    content:
      "Prima di dichiarare 'finito', si esegue la validazione. I quality gate includono: lint, build, typecheck, check:struttura, coerenza documentazione e verifica boundary. Se l'output non è verificabile, il task non è finito.",
  },
  {
    id: "documentazione",
    title: "Documentazione",
    variant: "doc",
    content:
      "Mantieni memoria delle decisioni, delle alternative scartate e dei prossimi step. README orienta, wiki guida, markdown sono source-of-truth di approfondimento. La documentazione è un deliverable, non un accessorio.",
  },
  {
    id: "first-mission",
    title: "First Mission",
    variant: "exercise",
    content:
      "La golden path iniziale: in 30-60 minuti produci il tuo primo First Mission Dossier. Apri documentation/first-mission/README.md, compila il template e ottieni idea, requisito, prompt, task, quality checklist e retrospettiva.",
  },
  {
    id: "percorsi",
    title: "Percorsi",
    variant: "exercise",
    content:
      "Ogni percorso parte da un problema reale e arriva a un output verificabile. Trovi percorsi per: First Mission, giovane sviluppatore, founder, automazioni personali e per impresa, freelance e case study Auth/IAM.",
  },
  {
    id: "esercizi",
    title: "Esercizi",
    variant: "exercise",
    content:
      "Gli esercizi sono il livello successivo al playground: smetti di consumare output e inizi a prendere decisioni. Livelli: foundations → workflow → practical builds → case study. Tracker in exercises/tracker.md.",
  },
  {
    id: "case-study",
    title: "Case study Auth/IAM",
    variant: "tech",
    content:
      "Il caso studio su autenticazione e autorizzazione è la palestra tecnica del laboratorio. Tre livelli: A concettuale (modelli, policy), B mock (simulazione), C transfer (applicazione ad altro dominio).",
  },
  {
    id: "boundary",
    title: "Public/private boundary",
    variant: "tech",
    content:
      "Learn è pubblico e didattico. Non contiene runtime enterprise, database reale, auth production-ready, fatturazione o moduli business reali. Il confine è documentato in documentation/project-meta/public-private-boundary.md.",
  },
];

export const glossary = [
  { term: "Coding agent", definition: "Sistema AI che genera, modifica o analizza codice su indicazioni umane." },
  { term: "Requirement", definition: "Documento che trasforma un'idea in obiettivi, scope e vincoli verificabili." },
  { term: "Prompt agent-ready", definition: "Istruzione strutturata che specifica ruolo, input, output e criteri di validazione per un coding agent." },
  { term: "Workflow", definition: "Sequenza tracciata di fasi, task e decisioni che produce un output verificabile." },
  { term: "Task breakdown", definition: "Scomposizione del lavoro in unità atomiche con obiettivo, criterio e dipendenze." },
  { term: "Quality gate", definition: "Validazione obbligatoria prima di dichiarare un task o una release completata." },
  { term: "MVP", definition: "Minimum Viable Product: versione minima funzionante per validare un'ipotesi." },
  { term: "Automazione", definition: "Processo eseguito da sistema AI o script che riduce intervento manuale ripetitivo." },
  { term: "Contesto", definition: "Insieme di informazioni che prepara l'agente a produrre output pertinente." },
  { term: "Drift", definition: "Deriva progressiva dall'obiettivo originale per mancanza di validazione intermedia." },
  { term: "Retrospettiva", definition: "Analisi finale su cosa ha funzionato e cosa migliorare nel processo." },
  { term: "Public/private boundary", definition: "Confine tra ciò che è pubblico in Learn e ciò che resta nel runtime privato Ready2Agent." },
];
