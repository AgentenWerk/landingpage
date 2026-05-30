import { SectionShell } from "./SectionShell";

const goodFit = [
  "regelmäßig Fremd-LVs kalkulieren",
  "mit Excel, ONLV, Taifun oder AVA arbeiten",
  "Preislisten und Altprojekte wiederverwenden",
  "unter Angebotsfristen Zeit verlieren",
  "mehr Angebote mit demselben Team abgeben wollen"
];

const badFit = [
  "nur selten ausschreiben",
  "kaum historische Daten haben",
  "keinen wiederkehrenden Prozess haben",
  "Standardsoftware ohne Anpassung erwarten"
];

export function AudienceSection() {
  return (
    <SectionShell
      eyebrow="Eignung"
      title="Sinnvoll, wenn Kalkulation bei Ihnen ein echter Engpass ist."
      intro="Am besten passt der Workflow zu Betrieben mit wiederkehrenden LVs, knappen Kalkulationskapazitäten und nutzbaren Datenquellen."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-[#bfd8ca] bg-[#f4faf6] p-4 shadow-[0_14px_36px_rgba(23,32,42,0.05)] sm:p-5">
          <h3 className="text-xl font-semibold text-[#17202a] sm:text-2xl">
            Passt gut, wenn Sie:
          </h3>
          <ul className="mt-5 space-y-3">
            {goodFit.map((item) => (
              <li key={item} className="flex gap-3 text-[#46545e]">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4a8f64]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4 sm:p-5">
          <h3 className="text-xl font-semibold text-[#17202a] sm:text-2xl">
            Passt eher nicht, wenn Sie:
          </h3>
          <ul className="mt-5 space-y-3">
            {badFit.map((item) => (
              <li key={item} className="flex gap-3 text-[#46545e]">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ca8ad]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-[#cbd7dc] bg-white p-4">
            <p className="font-semibold text-[#17202a]">
              Kein Standardtool von der Stange.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#52616b]">
              Der Workflow wird rund um Ihre LVs, Datenquellen und Freigaben
              aufgebaut.
            </p>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
