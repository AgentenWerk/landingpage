import { SectionShell } from "./SectionShell";

const steps = [
  {
    title: "Prozess verstehen",
    text: "Wir analysieren Ihren aktuellen Ablauf: LV, ONLV/Excel, Preislisten, Lieferantenangebote, historische Projekte und Freigaben."
  },
  {
    title: "Wissensbasis aufbauen",
    text: "Ihre relevanten Daten werden strukturiert und für den KI-Agenten durchsuchbar gemacht."
  },
  {
    title: "Workflow entwickeln",
    text: "Der Agent bekommt eine klare Arbeitsoberfläche: Positionen, Quellen, Vorschläge, Confidence Score, Warnhinweise und Freigaben."
  },
  {
    title: "Mit echten Ausschreibungen testen",
    text: "Der Workflow wird an realen Projekten geprüft und verbessert."
  },
  {
    title: "In die Kalkulation übernehmen",
    text: "Ihr Team nutzt den Agenten als Vorarbeiter. Der Kalkulant bleibt in Kontrolle."
  }
];

export function ProcessSection() {
  return (
    <SectionShell
      eyebrow="Vorgehen"
      title="Vom heutigen Kalkulationsprozess zum produktiven KI-Workflow."
      intro="Der Einstieg ist bewusst nah an Ihrem bestehenden Prozess. Erst verstehen wir die Kalkulation, dann automatisieren wir die passende Vorarbeit."
      tone="white"
    >
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-6 text-[#17202a]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#52616b]">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
