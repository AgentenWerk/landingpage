import { SectionShell } from "./SectionShell";

const trustPoints = [
  {
    title: "Chaotische Daten sind normal",
    text: "Projektordner, PDFs, Excel und alte Angebote werden zuerst strukturiert."
  },
  {
    title: "Kein Blackbox-Preis",
    text: "Jeder Vorschlag zeigt Quelle, Sicherheit und Prüfpunkt."
  },
  {
    title: "Kontrolle bleibt bei Ihnen",
    text: "Keine automatische Freigabe. Der Kalkulant korrigiert und gibt frei."
  }
];

const dataItems = [
  "alte LVs und Ausschreibungen",
  "Angebote und interne Kalkulationen",
  "Preislisten, Artikel, Partieminuten",
  "Lieferantenangebote",
  "ONLV, GAEB, SIA 451, Excel, PDF",
  "Freigaben und Prüfpunkte"
];

export function DataTrustSection() {
  return (
    <SectionShell
      eyebrow="Daten und Kontrolle"
      title="Ihre Daten müssen nicht perfekt sein. Nur nutzbar."
      intro="Wir strukturieren vorhandene LVs, Angebote und Preislisten so, dass die KI sauber suchen, vergleichen und begründen kann."
      tone="white"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-4">
          {trustPoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4 shadow-[0_10px_30px_rgba(23,32,42,0.035)] sm:p-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#e7f0f5] text-sm font-bold text-[var(--accent-dark)]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#17202a]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#52616b]">
                    {point.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <article className="rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm sm:p-5">
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            Was in die Wissensbasis kommt
          </p>
          <ul className="mt-4 grid gap-2">
            {dataItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-[#edf0ef] pb-2 text-sm text-[#46545e] last:border-b-0 last:pb-0 sm:text-base"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-md border border-[#cfe3d5] bg-[#f1f8f3] px-4 py-3">
            <p className="text-base font-semibold leading-7 text-[#28533b]">
              Ergebnis: ähnliche Positionen, Quellen und unsichere Werte werden sichtbar.
            </p>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
