import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ki-kalkulant.de"),
  title: "KI-Agenten für HKLS-Kalkulationen | LV schneller auspreisen",
  description:
    "Agentische KI-Workflows für HKLS-, Haustechnik-, Installations- und TGA-Betriebe, die Leistungsverzeichnisse schneller und nachvollziehbarer kalkulieren wollen.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "KI-Kalkulant",
    description: "Mehr Angebote kalkulieren. Ohne mehr manuelle Vorarbeit.",
    url: "/",
    siteName: "KI-Kalkulant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KI-Kalkulant - Mehr Angebote kalkulieren. Ohne mehr manuelle Vorarbeit."
      }
    ],
    type: "website",
    locale: "de_DE"
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Kalkulant",
    description: "Mehr Angebote kalkulieren. Ohne mehr manuelle Vorarbeit.",
    images: ["/og-image.png"]
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
