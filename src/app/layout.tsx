import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready2Agent Learn",
  description:
    "Laboratorio open-source per imparare a progettare applicazioni Next.js AI-native con agenti di coding, workflow tracciati e prompt strutturati.",
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
    <html data-scroll-behavior="smooth" lang="it">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
