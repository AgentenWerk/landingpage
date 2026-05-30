import { SectionShell } from "./SectionShell";

const modules = [
  {
    label: "Hauptworkflow",
    time: "ca. 12 Wochen",
    title: "LV-Kalkulation",
    text: "Fremd-LVs analysieren, EPs vorschlagen, Prüfpunkte markieren und die Freigabe vorbereiten.",
    bullets: [
      "Altprojekte, Preislisten, Angebote",
      "Material, Partieminuten, Quellen",
      "Kalkulant gibt frei"
    ],
    primary: true
  },
  {
    label: "Zusatzmodul",
    time: "ca. 6 Wochen",
    title: "Funktionale Ausschreibungen",
    text: "Aus funktionalen Anforderungen interne Positionen und Systembeschreibungen ableiten.",
    bullets: [
      "mehr technische Interpretation",
      "mehr fachliche Prüfung durch den Kalkulanten"
    ]
  },
  {
    label: "Zusatzmodul",
    time: "ca. 3–4 Wochen",
    title: "Lieferantenanfragen",
    text: "Lieferantenangebote anfragen, erinnern, vergleichen und für den Preisspiegel aufbereiten.",
    bullets: [
      "Lieferanten je Produktgruppe vorschlagen",
      "Angebote vergleichen und aufbereiten"
    ]
  }
];

export function ImplementationSection() {
  return (
    <SectionShell
      eyebrow="Umsetzung"
      title="In nur 12 Wochen arbeitet ein KI-Kalkulant in Ihrem Kalkulationsprozess."
      intro="Der Start ist schnell und fokussiert: Fremd-LVs analysieren, Preise und Quellen vorbereiten, Prüfpunkte markieren und die Freigabe sauber abbilden."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_0.875fr_0.875fr]">
        {modules.map((module) => (
          <article
            key={module.title}
            className={
              module.primary
                ? "rounded-lg border border-[#bfd8ca] bg-[#f4faf6] p-4 shadow-[0_18px_44px_rgba(23,32,42,0.08)] sm:p-5"
                : "rounded-lg border border-[#d9dedc] bg-white p-4 shadow-[0_10px_30px_rgba(23,32,42,0.035)] sm:p-5"
            }
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={
                  module.primary
                    ? "rounded-md bg-[#dfeee4] px-2.5 py-1 text-xs font-bold text-[#28533b]"
                    : "rounded-md bg-[#eef5f8] px-2.5 py-1 text-xs font-bold text-[var(--accent-dark)]"
                }
              >
                {module.label}
              </span>
              <span className="rounded-md border border-[#d8e0df] bg-white px-2.5 py-1 text-xs font-bold text-[#52616b]">
                {module.time}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-7 text-[#17202a] sm:text-2xl sm:leading-8">
              {module.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#52616b] sm:text-base sm:leading-7">
              {module.text}
            </p>
            <ul className="mt-4 grid gap-2">
              {module.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#46545e]">
                  <span
                    className={
                      module.primary
                        ? "mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a8f64]"
                        : "mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                    }
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-[#cbd7dc] bg-[#eef5f8] p-4 sm:p-5">
        <p className="text-lg font-semibold leading-7 text-[#17202a]">
          Nach dem Kernworkflow können funktionale Ausschreibungen und
          Lieferantenanfragen ergänzt werden.
        </p>
      </div>
    </SectionShell>
  );
}
