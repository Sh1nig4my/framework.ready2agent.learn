import type { Metadata } from "next";
import { contactEmail } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Termini di utilizzo — Ready2Agent Learn",
  description: "Termini di utilizzo del progetto didattico open-source Ready2Agent Learn.",
};

export default function TermsPage() {
  return (
    <main className="simple-page">
      <h1>Termini di utilizzo</h1>
      <p><em>Ultimo aggiornamento: maggio 2026</em></p>

      <section>
        <h2>1. Natura del progetto</h2>
        <p>
          Ready2Agent Learn è un progetto open-source con finalità didattiche, formative e dimostrative. Il codice, la
          documentazione e i contenuti sono forniti per scopi educativi.
        </p>
      </section>

      <section>
        <h2>2. Responsabilità dell&apos;utente</h2>
        <p>
          L&apos;uso del repository, del sito e dei contenuti è responsabilità dell&apos;utente. Non viene garantito un
          risultato tecnico, economico o commerciale derivante dall&apos;applicazione del metodo o del codice presenti in
          questo progetto.
        </p>
      </section>

      <section>
        <h2>3. Non è consulenza professionale</h2>
        <p>
          I contenuti di Ready2Agent Learn non costituiscono consulenza legale, fiscale, finanziaria, cybersecurity o altra
          consulenza professionale. Per decisioni importanti, rivolgiti a professionisti abilitati.
        </p>
      </section>

      <section>
        <h2>4. Confini del progetto</h2>
        <p>
          Ready2Agent Learn è un prodotto didattico autonomo. Non include il runtime enterprise privato Ready2Agent. In
          particolare, Learn non contiene:
        </p>
        <ul>
          <li>backend production-ready;</li>
          <li>database reale;</li>
          <li>login/register production-ready;</li>
          <li>sistemi di fatturazione o piattaforme multi-utente;</li>
          <li>moduli business reali o codice cliente.</li>
        </ul>
      </section>

      <section>
        <h2>5. Licenza e modifiche</h2>
        <p>
          Il repository può essere studiato, modificato e adattato secondo i termini della licenza presente nel progetto
          (vedi file <code>LICENSE</code>). L&apos;utente deve verificare sicurezza, privacy, licenze e conformità prima
          di utilizzare il codice in produzione.
        </p>
      </section>

      <section>
        <h2>6. Limitazione di responsabilità</h2>
        <p>
          Il progetto è fornito &quot;così com&apos;è&quot;, senza garanzie di alcun tipo. Gli autori e i contributor non
          sono responsabili per danni diretti o indiretti derivanti dall&apos;uso del software o dei contenuti.
        </p>
      </section>

      <section>
        <h2>7. Contatto</h2>
        <p>
          Per comunicazioni relative a questi termini:
          <br />
          <a href={`mailto:${contactEmail}`} style={{ fontWeight: 600 }}>
            {contactEmail}
          </a>
        </p>
      </section>
    </main>
  );
}
