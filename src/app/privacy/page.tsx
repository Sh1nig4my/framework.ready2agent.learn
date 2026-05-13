import type { Metadata } from "next";
import { contactEmail } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Privacy Policy — Ready2Agent Learn",
  description: "Informativa privacy del progetto didattico open-source Ready2Agent Learn.",
};

export default function PrivacyPage() {
  return (
    <main className="simple-page">
      <h1>Privacy Policy</h1>
      <p><em>Ultimo aggiornamento: maggio 2026</em></p>

      <section>
        <h2>1. Premessa</h2>
        <p>
          Ready2Agent Learn è un progetto didattico open-source. Questa privacy policy spiega come vengono gestiti i dati
          quando visiti il sito pubblico.
        </p>
      </section>

      <section>
        <h2>2. Raccolta dati</h2>
        <p>Il sito pubblico di Ready2Agent Learn:</p>
        <ul>
          <li>non richiede account o registrazione;</li>
          <li>non contiene form di raccolta dati personali;</li>
          <li>non implementa tracciamento marketing o analytics;</li>
          <li>non utilizza cookie di profilazione.</li>
        </ul>
      </section>

      <section>
        <h2>3. Preferenze locali</h2>
        <p>
          Il sito utilizza <code>localStorage</code> esclusivamente per ricordare la preferenza dell&apos;utente sul popup
          informativo di primo accesso. Questa informazione non viene trasmessa a server terzi e resta sul tuo dispositivo.
        </p>
      </section>

      <section>
        <h2>4. Piattaforma di hosting</h2>
        <p>
          Il sito può essere ospitato su piattaforme come Vercel o simili. Queste piattaforme possono registrare dati tecnici
          di connessione (indirizzo IP, user agent, pagine visitate) per finalità operative e di sicurezza. Non abbiamo
          controllo su tali trattamenti e ti invitiamo a consultare le rispettive privacy policy.
        </p>
      </section>

      <section>
        <h2>5. Collegamenti esterni</h2>
        <p>
          Il sito contiene link a servizi esterni, in particolare GitHub. Per l&apos;utilizzo di tali servizi si applicano
          le rispettive policy sulla privacy.
        </p>
      </section>

      <section>
        <h2>6. Contatto</h2>
        <p>
          Per qualsiasi domanda relativa a questa privacy policy puoi scrivere a:
          <br />
          <a href={`mailto:${contactEmail}`} style={{ fontWeight: 600 }}>
            {contactEmail}
          </a>
        </p>
      </section>

      <section>
        <h2>7. Modifiche</h2>
        <p>
          Questa informativa può essere aggiornata periodicamente. La versione corrente è indicata dalla data di ultimo
          aggiornamento all&apos;inizio del documento.
        </p>
      </section>

      <section>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
          Questa pagina non sostituisce consulenza legale. Se necessario, consulta un professionista.
        </p>
      </section>
    </main>
  );
}
