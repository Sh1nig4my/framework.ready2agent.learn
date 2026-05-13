export type PathItem = {
  id: string;
  title: string;
  target: string;
  goal: string;
  description: string;
  output: string[];
  audience: string;
};

export const paths: PathItem[] = [
  {
    id: "first-mission",
    title: "First Mission",
    target: "Chi parte da zero e vuole capire il metodo in 30-60 minuti.",
    goal: "Produrre il primo dossier verificabile.",
    audience: "Tutti, soprattutto chi parte da zero",
    description:
      "Il percorso iniziale consigliato. In meno di un'ora trasformi un'idea confusa in un First Mission Dossier: idea, requisito, prompt agent-ready, task breakdown, quality checklist e retrospettiva.",
    output: [
      "Idea iniziale documentata",
      "Requisito verificabile",
      "Prompt agent-ready",
      "Task breakdown",
      "Quality checklist",
      "Retrospettiva",
    ],
  },
  {
    id: "junior-dev",
    title: "Giovane sviluppatore",
    target: "Junior developer, studenti, autodidatti che vogliono imparare a usare coding agent.",
    goal: "Sviluppare controllo tecnico senza perdere qualità.",
    audience: "Junior developer, studenti, autodidatti",
    description:
      "Impara a guidare coding agent con requisiti chiari, piani tecnici, task piccoli, quality gate e documentazione minima. Non subisci l'output AI: lo governi.",
    output: [
      "Requisito tecnico chiaro",
      "Piano tecnico",
      "Task breakdown",
      "Quality gate passati",
      "Documentazione minima",
    ],
  },
  {
    id: "founder",
    title: "Founder / giovane imprenditore",
    target: "Persone con idee prodotto che vogliono validare prima di investire.",
    goal: "Passare da idea a studio di fattibilità e MVP.",
    audience: "Founder, imprenditori, product thinker",
    description:
      "Trasforma un'idea in ipotesi di prodotto, requisiti, prototipo, demo e backlog MVP. Arrivi da clienti e finanziatori con qualcosa di concreto, non solo slide.",
    output: [
      "Ipotesi di prodotto",
      "Requisiti",
      "Prototipo / demo",
      "Backlog MVP",
      "Pitch tecnico credibile",
    ],
  },
  {
    id: "automations-personal",
    title: "Automazioni personali",
    target: "Persone che vogliono aumentare la produttività individuale.",
    goal: "Trasformare task ripetitivi in workflow gestibili.",
    audience: "Professionisti, freelance, operativi",
    description:
      "Mappa i tuoi processi quotidiani, identifica colli di bottiglia e progetta automazioni con AI e coding agent. Ogni automazione è descritta, validata e documentata.",
    output: [
      "Processo descritto",
      "Automazione candidata",
      "Prompt operativo",
      "Checklist di validazione",
    ],
  },
  {
    id: "automations-business",
    title: "Automazioni per impresa",
    target: "Piccoli team, consulenti, imprenditori con processi interni da ottimizzare.",
    goal: "Mappare e automatizzare processi interni realistici.",
    audience: "Team, consulenti, PMI",
    description:
      "Analizza processi attuali, identifica colli di bottiglia, progetta automazioni e valuta rischi. Ottieni un MVP interno validato prima di investire in sviluppo.",
    output: [
      "Processo attuale mappato",
      "Colli di bottiglia identificati",
      "Automazione proposta",
      "Analisi rischi",
      "MVP interno",
    ],
  },
  {
    id: "freelance",
    title: "Freelance / consulente",
    target: "Liberi professionisti che gestiscono brief cliente e deliverable.",
    goal: "Trasformare esigenze in prototipi e piani professionali.",
    audience: "Freelance, consulenti, digital worker",
    description:
      "Dai brief vaghi a analisi strutturata, proposta operativa, mock/prototipo e piano task. Ogni consegna è verificabile e professionale.",
    output: [
      "Analisi richiesta",
      "Proposta operativa",
      "Mock / prototipo",
      "Piano task",
      "Documento consegnabile",
    ],
  },
  {
    id: "case-study",
    title: "Case Study Auth/IAM",
    target: "Chi vuole una palestra tecnica più avanzata.",
    goal: "Imparare ruoli, permessi, policy e quality gate in modo didattico.",
    audience: "Sviluppatori, DevOps, security enthusiast",
    description:
      "Un caso studio completo su autenticazione e autorizzazione: modello concettuale, policy table, task breakdown, checklist di sicurezza e mock implementation. Tre livelli: A concettuale, B mock, C transfer.",
    output: [
      "Modello concettuale",
      "Policy table",
      "Task breakdown",
      "Checklist di sicurezza",
      "Mock implementation",
    ],
  },
];

export const howToChoose = [
  { condition: "Parti da zero", suggestion: "First Mission", pathId: "first-mission" },
  { condition: "Sei uno sviluppatore", suggestion: "Giovane sviluppatore", pathId: "junior-dev" },
  { condition: "Hai un'idea business", suggestion: "Founder / MVP", pathId: "founder" },
  { condition: "Vuoi migliorare il lavoro quotidiano", suggestion: "Automazioni personali", pathId: "automations-personal" },
  { condition: "Lavori con clienti", suggestion: "Freelance / consulente", pathId: "freelance" },
  { condition: "Vuoi una sfida tecnica", suggestion: "Case Study Auth/IAM", pathId: "case-study" },
];

export const pathsMeta = {
  title: "Percorsi — Ready2Agent Learn",
  description:
    "Scegli un percorso pratico per imparare a usare coding agent, AI, automazioni e workflow per sviluppare idee, MVP e processi verificabili.",
};
