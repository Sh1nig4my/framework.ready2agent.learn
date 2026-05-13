import Link from "next/link";
import type { Route } from "next";
import { footerLinks, contactEmail, githubUrl } from "@/content/public-site";

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="public-footer-inner">
        <div className="public-footer-grid">
          <div className="public-footer-col">
            <h4>Ready2Agent Learn</h4>
            {footerLinks.learn.map((link) => (
              <Link key={link.href} href={link.href as Route}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="public-footer-col">
            <h4>Risorse</h4>
            {footerLinks.resources.map((link) => (
              <Link key={link.href} href={link.href as Route}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="public-footer-col">
            <h4>Legale</h4>
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href as Route}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="public-footer-col">
            <h4>Contatto</h4>
            <a href={`mailto:${contactEmail}`} className="public-footer-email">
              {contactEmail}
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" style={{ marginTop: "0.5rem" }}>
              GitHub
            </a>
          </div>
        </div>
        <div className="public-footer-bottom">
          <span>Progetto didattico open-source</span>
          <span>&copy; {new Date().getFullYear()} Ready2Agent Learn</span>
        </div>
      </div>
    </footer>
  );
}
