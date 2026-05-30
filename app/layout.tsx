import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KI-Agenten für HKLS-Kalkulationen | LV schneller auspreisen",
  description:
    "Agentische KI-Workflows für HKLS-, Haustechnik-, Installations- und TGA-Betriebe, die Leistungsverzeichnisse schneller und nachvollziehbarer kalkulieren wollen.",
  openGraph: {
    title: "KI-Agenten für HKLS-Kalkulationen",
    description:
      "LVs schneller auspreisen, weniger manuelle Eingabe und mehr Kontrolle für Kalkulanten in HKLS, Haustechnik, Installation und TGA.",
    type: "website",
    locale: "de_DE"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
