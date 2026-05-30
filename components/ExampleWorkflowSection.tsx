import { SectionShell } from "./SectionShell";

const preparationSteps = [
  {
    title: "Liefernachweis gefunden",
    text: "Klötzl Vertriebs GmbH · Wärmepumpe"
  },
  {
    title: "Angebot zugeordnet",
    text: "Beleg 20260257 · EP € 76.439,46"
  },
  {
    title: "Altprojekte geprüft",
    text: "2 ähnliche Positionen gefunden"
  },
  {
    title: "Prüfpunkt markiert",
    text: "Fabrikat und Gleichwertigkeit bestätigen"
  }
];

const decisionItems = [
  {
    label: "EP-Vorschlag",
    value: "€ 76.439,46",
    tone: "blue"
  },
  {
    label: "Confidence",
    value: "91 %",
    tone: "blue"
  },
  {
    label: "Status",
    value: "Freigabe bereit",
    tone: "green"
  },
  {
    label: "Offener Punkt",
    value: "Angebotenes Erzeugnis / Bieterlücke final prüfen",
    tone: "amber"
  }
];

export function ExampleWorkflowSection() {
  return (
    <SectionShell
      eyebrow="Beispiel"
      title="Eine LV-Position. Fertig vorbereitet."
      intro="Der KI-Kalkulant sammelt Quellen, schlägt den Einheitspreis vor und markiert den offenen fachlichen Punkt, bevor Ihr Kalkulant mit der Suche beginnt."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm sm:p-5">
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            Fremd-LV
          </p>
          <p className="mt-4 text-sm font-bold text-[var(--accent-dark)]">
            02.35.06.50.A
          </p>
          <h3 className="mt-2 text-xl font-semibold leading-tight text-[#17202a] sm:text-2xl">
            Luft/Wasser Kaltwassersatz
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#52616b]">
            2,00 Stk · RHOSS THAETU 4150 HT65 P1
          </p>
          <p className="mt-4 text-sm leading-6 text-[#52616b]">
            Im LV steht die technische Anforderung. In den Projektunterlagen
            liegen Angebot, Liefernachweis und mögliche Vergleichspositionen.
          </p>
          <div className="mt-5 rounded-md border border-[#ead8aa] bg-[#fff9e9] p-4">
            <p className="text-sm font-semibold leading-6 text-[#785b17]">
              Bieterlücke: angebotenes Erzeugnis prüfen
            </p>
          </div>
          <p className="mt-4 rounded-md border border-[#d9dedc] bg-[#fbfaf6] px-3 py-2 text-xs font-semibold text-[#59666e]">
            Quelle: LV · 107 Seiten
          </p>
        </article>

        <article className="rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm sm:p-5">
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            KI bereitet vor
          </p>
          <ul className="mt-4 grid gap-2">
            {preparationSteps.map((step) => (
              <li
                key={step.title}
                className="flex gap-3 rounded-md border border-[#d9dedc] bg-[#fbfaf6] px-3 py-2.5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0f5] text-xs font-bold text-[var(--accent-dark)]">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-bold leading-5 text-[#17202a]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#64717a]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm sm:p-5">
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            Kalkulant entscheidet
          </p>
          <dl className="mt-4 grid gap-2">
            {decisionItems.map((item) => (
              <div
                key={item.label}
                className={
                  item.tone === "green"
                    ? "rounded-md border border-[#cfe3d5] bg-[#f1f8f3] p-3"
                    : item.tone === "amber"
                      ? "rounded-md border border-[#ead8aa] bg-[#fff9e9] p-3"
                      : "rounded-md border border-[#d9dedc] bg-[#fbfaf6] p-3"
                }
              >
                <dt className="text-xs font-bold uppercase text-[#59666e]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-5 text-[#17202a]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-md border border-[#bad4c5] bg-[#edf7f0] p-3">
            <p className="text-sm font-semibold leading-6 text-[#28533b]">
              Fachlich prüfen. Nicht neu suchen.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm md:grid-cols-2">
        <div className="rounded-md border border-[#d9dedc] bg-[#fbfaf6] p-4">
          <p className="text-xs font-bold uppercase text-[#59666e]">Vorher</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#34434c]">
            LV lesen · Angebot suchen · EP übertragen · Bieterlücke im Kopf
            behalten
          </p>
        </div>
        <div className="rounded-md border border-[#cfe3d5] bg-[#f1f8f3] p-4">
          <p className="text-xs font-bold uppercase text-[#28533b]">
            Mit KI-Kalkulant
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#28533b]">
            Vorschlag, Quelle, Sicherheit und Prüfpunkt liegen vorbereitet vor
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
