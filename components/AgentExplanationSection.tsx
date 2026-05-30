import { SectionShell } from "./SectionShell";

const points = [
  {
    step: "1",
    title: "Unterlagen lesen",
    text: "Fremd-LV, PDF, ONLV, Excel und Anhänge."
  },
  {
    step: "2",
    title: "Passendes finden",
    text: "Preise, Angebote, Altprojekte und ähnliche Positionen."
  },
  {
    step: "3",
    title: "Vorschläge bauen",
    text: "EPs, Quellen, Sicherheit und Kommentare."
  },
  {
    step: "4",
    title: "Offenes markieren",
    text: "Prüfpunkte, Bieterlücken und Abweichungen."
  }
];

export function AgentExplanationSection() {
  return (
    <SectionShell
      eyebrow="Was ist ein KI-Agent?"
      title="Ein KI-Agent ist ein digitaler Vorarbeiter."
      intro="Er arbeitet nicht frei herum. Er folgt einem klaren Ablauf, bereitet Entscheidungen vor und zeigt, was der Kalkulant prüfen muss."
      tone="white"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {points.map((point) => (
          <article
            key={point.title}
            className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4 shadow-[0_10px_30px_rgba(23,32,42,0.04)] sm:p-5"
          >
            <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#b8c9d4] bg-white text-sm font-bold text-[var(--accent-dark)]">
              {point.step}
            </div>
            <h3 className="text-base font-semibold leading-6 text-[#17202a] sm:text-lg">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#52616b]">
              {point.text}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-[#cbd7dc] bg-[#eef5f8] p-4 text-base font-semibold leading-7 text-[#23313b] sm:p-5 sm:text-lg">
        Kurz gesagt: Die KI macht die Vorarbeit. Ihr Kalkulant entscheidet.
      </div>
    </SectionShell>
  );
}
