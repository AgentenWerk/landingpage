import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | KI-Kalkulant",
  description: "Impressum für den KI-Kalkulant."
};

type DetailRow = [string, React.ReactNode];

const dubaiDetails: DetailRow[] = [
  ["Firma", "AgentLayer AI L.L.C-FZ"],
  ["Rechtsform", "Limited Liability Company, Meydan Free Zone"],
  ["Lizenznummer", "2650237.01"],
  ["Formation Number", "2650237"],
  ["Corporate Tax Registration Number", "105507193800001"],
  [
    "Anschrift",
    "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E."
  ],
  ["E-Mail", "dk@ki-kalkulant.de"],
  [
    "Manager / CEO",
    <ExternalLink
      key="daniil-klubov"
      href="https://www.linkedin.com/in/daniil-klubov/"
    >
      Daniil Klubov
    </ExternalLink>
  ],
  ["Lizenz gültig", "25.06.2026 bis 24.06.2027"],
  [
    "Tätigkeiten",
    "Innovation & Artificial Intelligence Research & Consultancies; Artificial Intelligence Developing"
  ],
  [
    "Medieninhaber",
    "Mitverantwortlicher Betreiber dieses Online-Angebots"
  ]
];

const viennaDetails: DetailRow[] = [
  ["Firma", "AgentenWerk KI GmbH"],
  ["Sitz", "Wien, Österreich"],
  ["Geschäftsanschrift", "Argentinierstraße 42-35, 1040 Wien, Österreich"],
  ["E-Mail", "rares@ki-kalkulant.de"],
  ["Telefon", "+43 670 608 45 69"],
  [
    "Geschäftsführender Gesellschafter",
    <ExternalLink
      key="alexandru-rares-bacila"
      href="https://www.linkedin.com/in/alexandru-rares-bacila-791005135/"
    >
      Alexandru-Rares Bacila
    </ExternalLink>
  ],
  ["Firmenbuchnummer", "FN 686063 t"],
  ["Firmenbuchgericht", "Handelsgericht Wien"],
  ["UID-Nummer", "wird nach Vergabe ergänzt"],
  [
    "Unternehmensgegenstand",
    "Entwicklung und Beratung zu KI-gestützten Softwarelösungen für Kalkulations- und Angebotsprozesse"
  ],
  [
    "Medieninhaber",
    "Mitverantwortlicher Betreiber dieses Online-Angebots"
  ],
  [
    "Grundlegende Richtung",
    "Information über KI-gestützte Workflows für HKLS-, Haustechnik- und TGA-Kalkulationen"
  ]
];

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#17202a]">
      <section className="border-b border-[var(--line)] bg-[#15202a] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-[#d8e4e8] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Zurück zur Startseite
          </Link>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Impressum
            </h1>
            <p className="mt-4 text-base leading-7 text-[#d8e4e8]">
              Anbieterinformationen und Offenlegung für den KI-Kalkulant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-10">
          <EntityCard
            eyebrow="Dubai"
            title="AgentLayer AI L.L.C-FZ"
            details={dubaiDetails}
          />
          <EntityCard
            eyebrow="Wien"
            title="AgentenWerk KI GmbH"
            details={viennaDetails}
          />
        </div>
      </section>
    </main>
  );
}

function EntityCard({
  eyebrow,
  title,
  details
}: {
  eyebrow: string;
  title: string;
  details: [string, React.ReactNode][];
}) {
  return (
    <article className="rounded-lg border border-[#d9dedc] bg-white p-5 shadow-[0_18px_50px_rgba(23,32,42,0.06)] sm:p-6">
      <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight">{title}</h2>
      <dl className="mt-6 grid gap-4">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-t border-[#e6ebe9] pt-4 sm:grid-cols-[11rem_1fr] sm:gap-4"
          >
            <dt className="text-sm font-bold text-[#17202a]">{label}</dt>
            <dd className="text-sm leading-6 text-[#4d5961]">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function ExternalLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-[var(--accent-dark)] underline decoration-[#9db8c9] underline-offset-4 transition hover:text-[var(--accent)]"
    >
      {children}
    </a>
  );
}
