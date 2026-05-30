import { SectionShell } from "./SectionShell";

const todayRows = [
  {
    title: "Suchen",
    text: "Positionen, Anhänge, Vorgaben"
  },
  {
    title: "Vergleichen",
    text: "Preislisten, Angebote, Altprojekte"
  },
  {
    title: "Ableiten",
    text: "Partieminuten und Erfahrungswerte"
  },
  {
    title: "Übertragen",
    text: "EPs, Kommentare, Quellen"
  },
  {
    title: "Merken",
    text: "Lücken, Alternativen, Abweichungen"
  }
];

const aiRows = [
  {
    title: "Analysiert",
    text: "LV und Anhänge"
  },
  {
    title: "Vorgeschlagen",
    text: "EPs, Quellen, Vergleichswerte"
  },
  {
    title: "Gefunden",
    text: "Altprojekte und Erfahrungswerte"
  },
  {
    title: "Markiert",
    text: "Unsicherheit und Bieterlücken"
  },
  {
    title: "Bereit",
    text: "Kalkulant prüft und gibt frei"
  }
];

export function SolutionSection() {
  return (
    <SectionShell
      eyebrow="Die Lösung"
      title="Ihr Kalkulant bleibt Experte. Die KI übernimmt die Vorarbeit."
      intro="Der KI-Kalkulant macht aus verstreuten Unterlagen eine prüfbare Entscheidungsgrundlage."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RoleCard
          eyebrow="Heute"
          title="Kalkulant als Datensucher"
          rows={todayRows}
          tone="muted"
        />
        <RoleCard
          eyebrow="Mit KI-Kalkulant"
          title="Kalkulant als fachlicher Entscheider"
          rows={aiRows}
          tone="success"
        />
      </div>
      <div className="mt-5 rounded-lg border border-[#cbd7dc] bg-[#eef5f8] p-4 sm:p-5">
        <p className="text-lg font-semibold leading-7 text-[#17202a]">
          Die KI sucht. Der Kalkulant entscheidet.
        </p>
      </div>
    </SectionShell>
  );
}

type RoleCardProps = {
  eyebrow: string;
  title: string;
  rows: typeof todayRows;
  tone: "muted" | "success";
};

function RoleCard({ eyebrow, title, rows, tone }: RoleCardProps) {
  const isSuccess = tone === "success";

  return (
    <article
      className={
        isSuccess
          ? "rounded-lg border border-[#bfd8ca] bg-[#f4faf6] p-4 shadow-[0_14px_36px_rgba(23,32,42,0.05)] sm:p-5"
          : "rounded-lg border border-[#d9dedc] bg-white p-4 shadow-[0_10px_30px_rgba(23,32,42,0.035)] sm:p-5"
      }
    >
      <p
        className={
          isSuccess
            ? "text-sm font-bold uppercase text-[#28533b]"
            : "text-sm font-bold uppercase text-[#66727a]"
        }
      >
        {eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold leading-7 text-[#17202a] sm:text-2xl sm:leading-8">
        {title}
      </h3>
      <div className="mt-5 grid gap-2">
        {rows.map((row) => (
          <div
            key={row.title}
            className={
              isSuccess
                ? "flex gap-3 rounded-md border border-[#cfe3d5] bg-white px-3 py-2.5"
                : "flex gap-3 rounded-md border border-[#e1e5e3] bg-[#fbfaf6] px-3 py-2.5"
            }
          >
            <span
              className={
                isSuccess
                  ? "mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4a8f64]"
                  : "mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9aa5aa]"
              }
              aria-hidden="true"
            />
            <div className="min-w-0">
              <h4 className="text-sm font-semibold leading-5 text-[#17202a] sm:text-base sm:leading-6">
                {row.title}
              </h4>
              <p className="mt-0.5 text-sm leading-5 text-[#52616b]">
                {row.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
