import { SectionShell } from "./SectionShell";

const benefits = [
  {
    title: "Weniger manuelle Eingabe",
    text: "Positionen werden vorbereitet statt zusammengesucht.",
    icon: "M8 7h8M8 12h8M8 17h5"
  },
  {
    title: "Schnellere Angebotsbearbeitung",
    text: "Wiederkehrende LV-Positionen sind schneller prüfbar.",
    icon: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
  },
  {
    title: "Bessere Nachvollziehbarkeit",
    text: "Jeder Vorschlag zeigt Quelle und Sicherheit.",
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  },
  {
    title: "Weniger Risiko",
    text: "Lücken und Abweichungen werden sichtbar.",
    icon: "M12 9v4M12 17h.01M10.3 3.9 2.4-1.4 2.4 1.4 7.4 12.8A2 2 0 0 1 17.4 20H6.6a2 2 0 0 1-1.7-3.1Z"
  },
  {
    title: "Wissenssicherung",
    text: "Altprojekte werden als Vergleich nutzbar.",
    icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"
  }
];

export function BenefitsSection() {
  return (
    <SectionShell
      eyebrow="Ergebnis"
      title="Mehr Kalkulationsleistung mit demselben Team."
      intro="Der größte Hebel liegt nicht im Ersetzen von Fachwissen, sondern im Entfernen der Sucharbeit."
      tone="white"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4 sm:p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#e7f0f5] text-[var(--accent-dark)]">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d={benefit.icon} />
              </svg>
            </div>
            <h3 className="text-base font-semibold leading-6 text-[#17202a] sm:text-lg">
              {benefit.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#52616b]">
              {benefit.text}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
