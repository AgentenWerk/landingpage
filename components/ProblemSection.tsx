import { SectionShell } from "./SectionShell";

const points = [
  {
    label: "EP",
    title: "EPs befüllen",
    text: "Material, Lohn, Zuschläge und Kommentare landen wieder in Excel, ONLV oder Taifun."
  },
  {
    label: "Quellen",
    title: "Quellen suchen",
    text: "Preislisten, Angebote, Altprojekte, PDFs und Anhänge liegen verstreut."
  },
  {
    label: "Sonder",
    title: "Sonderpositionen prüfen",
    text: "Ähnliche Projekte, Preise und Gleichwertigkeit müssen schnell vergleichbar sein."
  },
  {
    label: "Risiko",
    title: "Risiken erkennen",
    text: "Bieterlücken, Alternativen und Preisabweichungen dürfen nicht untergehen."
  }
];

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Das Problem"
      title="Zu viel Vorarbeit vor der eigentlichen Kalkulation."
      intro="Ein Fremd-LV bringt schnell 100 bis 400 Positionen, mehrere Quellen und eine knappe Angebotsfrist."
      tone="white"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {points.map((point) => (
          <article
            key={point.title}
            className="min-w-0 rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4 shadow-[0_10px_30px_rgba(23,32,42,0.04)] sm:p-5"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#b8c9d4] bg-white px-2.5 py-1 text-xs font-bold text-[var(--accent-dark)]">
                {point.label}
              </span>
              <h3 className="min-w-0 text-lg font-semibold leading-6 text-[#17202a]">
                {point.title}
              </h3>
            </div>
            <p className="break-words text-sm leading-6 text-[#3f4b54] sm:text-base sm:leading-7">
              {point.text}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-[#cbd7dc] bg-[#eef5f8] p-4 text-base font-semibold leading-7 text-[#23313b] sm:p-5 sm:text-lg">
        Der Engpass ist nicht das Fachwissen. Der Engpass ist die Suche davor.
      </div>
    </SectionShell>
  );
}
