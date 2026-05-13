import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { PublicHeader } from "@/components/public/PublicHeader";
import { PublicFooter } from "@/components/public/PublicFooter";
import { FirstVisitNotice } from "@/components/public/FirstVisitNotice";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready2Agent Learn — Metodo, prompt e workflow per coding agent",
  description:
    "Laboratorio italiano-first per imparare a trasformare idee confuse in requisiti, prompt, task, automazioni, MVP e quality gate con coding agent.",
  applicationName: "Ready2Agent Learn",
  icons: {
    icon: "/ready2agent-logo-nobg.png",
    shortcut: "/ready2agent-logo-nobg.png",
    apple: "/ready2agent-logo-nobg.png",
  },
};

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-[var(--surface-background)] text-[var(--text-primary)] antialiased`}
      >
        <PublicHeader />
        {children}
        <PublicFooter />
        <FirstVisitNotice />
      </body>
    </html>
  );
}
