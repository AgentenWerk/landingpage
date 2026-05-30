import { ScrollToFormButton } from "./ScrollToFormButton";

const facts = [
  "Fremd-LV",
  "ONLV / ÖNORM A 2063",
  "GAEB",
  "Excel / PDF",
  "SIA 451 / NPK"
];

const workflow = [
  {
    title: "LV gelesen",
    text: "128 Positionen"
  },
  {
    title: "Preise gefunden",
    text: "Angebote zugeordnet"
  },
  {
    title: "EPs bereit",
    text: "mit Quelle"
  },
  {
    title: "Prüfung fokussiert",
    text: "nur 13 Punkte"
  }
];

const reviewRows = [
  {
    title: "Kaltwassersatz",
    code: "02.35.06.50.A",
    value: "€ 76.439",
    status: "Freigabe"
  },
  {
    title: "Magnetitabscheider",
    code: "02.36.05.59.F",
    value: "prüfen",
    status: "Prüfpunkt"
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[#fbfaf6]/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 px-5 py-8 sm:px-8 lg:min-h-[78svh] lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-12">
        <div className="min-w-0 max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-[#b8c9d4] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[var(--accent-dark)] sm:text-sm">
            KI-Workflow für HKLS, Haustechnik und TGA
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-[#111820] sm:text-5xl lg:text-6xl">
            KI-Kalkulant
          </h1>
          <p className="mt-5 max-w-xl text-2xl font-semibold leading-8 text-[#17202a] sm:text-3xl sm:leading-10">
            Mehr Angebote kalkulieren. Ohne mehr manuelle Vorarbeit.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#4d5961] sm:text-lg">
            LVs lesen, Preise finden, EPs vorschlagen, Risiken markieren.
            Ihr Kalkulant prüft nur noch die fachlichen Punkte.
          </p>
          <div className="mt-6">
            <ScrollToFormButton
              className="inline-flex w-full items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:w-auto"
            >
              Eignung prüfen
            </ScrollToFormButton>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[#68737a]">
            Für Betriebe im DACH-Raum, die regelmäßig Fremd-LVs und
            Ausschreibungen bearbeiten.
          </p>
          <div className="mt-4 flex max-w-xl flex-wrap gap-2">
            {facts.map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#dfe5e3] bg-white/45 px-2 py-1 text-[11px] font-semibold leading-4 text-[#5f6b72]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0" aria-label="Workflow des KI-Kalkulanten">
          <div className="absolute -inset-3 rounded-[1.5rem] bg-[#1f5f8f]/8 blur-2xl" />
          <div className="hero-product-card relative min-w-0 overflow-hidden rounded-lg border border-[#cbd7dc] bg-white shadow-[0_24px_70px_rgba(23,32,42,0.12)]">
            <div className="border-b border-[#dce4e4] bg-[#15202a] px-4 py-3 text-white">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-[#9dc3dc]">
                    Projekt 253000141
                  </p>
                  <p className="mt-1 text-base font-semibold leading-tight">
                    Fremd-LV HKLS · Wärmepumpen
                  </p>
                </div>
                <span className="rounded-md bg-[#e6f0f5] px-3 py-1 text-xs font-bold text-[#16476b]">
                  ONLV vorbereitet
                </span>
              </div>
            </div>

            <div className="bg-[#f5f6f3] p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-2">
                <WorkflowNode label="Fremd-LV" value="128 Positionen" />
                <WorkflowNode label="Kalkulant" value="13 offene Punkte" />
              </div>

              <div className="hero-metric mt-3 rounded-md border border-[#cfe3d5] bg-[#f1f8f3] px-3 py-2">
                <p className="text-sm font-bold leading-5 text-[#28533b]">
                  31 Positionen freigabebereit · 91 % mit Quelle
                </p>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[0.82fr_1.18fr]">
                <section className="rounded-md border border-[#d9dedc] bg-white p-3">
                  <p className="text-xs font-bold uppercase text-[var(--accent-dark)]">
                    KI erledigt
                  </p>
                  <ol className="mt-3 grid gap-2">
                    {workflow.map((step, index) => (
                      <li
                        key={step.title}
                        className="hero-agent-step flex items-center gap-3 rounded-md bg-[#fbfaf6] px-3 py-2"
                      >
                        <span className="hero-agent-dot flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-dark)] text-[11px] font-bold text-white ring-[3px] ring-[#e7f0f5]">
                          {index + 1}
                        </span>
                        <div className="grid min-w-0 flex-1 gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                          <p className="text-xs font-bold leading-4 text-[#17202a]">
                            {step.title}
                          </p>
                          <p className="text-[11px] leading-4 text-[#64717a] sm:text-right">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="rounded-md border border-[#d9dedc] bg-white p-3">
                  <p className="inline-flex rounded-md bg-[#eef5f8] px-2 py-1 text-xs font-bold uppercase text-[var(--accent-dark)]">
                    Offene Punkte
                  </p>
                  <div className="mt-3 grid gap-2">
                    {reviewRows.map((row) => (
                      <article
                        key={row.code}
                        className="hero-position-row rounded-md border border-[#d9dedc] bg-[#fbfaf6] px-3 py-2"
                      >
                        <div className="grid grid-cols-[1fr_auto] gap-3">
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold text-[var(--accent-dark)]">
                              {row.code}
                            </p>
                            <p className="truncate text-sm font-semibold leading-5 text-[#17202a]">
                              {row.title}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-[#17202a]">
                              {row.value}
                            </p>
                            <span
                              className={
                                row.status === "Freigabe"
                                  ? "hero-status-chip mt-1 inline-flex rounded-md bg-[#edf7f0] px-2 py-1 text-[10px] font-bold text-[#28533b]"
                                  : "hero-status-chip mt-1 inline-flex rounded-md bg-[#fff8e7] px-2 py-1 text-[10px] font-bold text-[#785b17]"
                              }
                            >
                              {row.status}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-[#d9dedc] bg-white px-2 py-2 sm:px-3">
      <p className="text-[10px] font-bold uppercase leading-3 text-[#59666e] sm:text-[11px]">
        {label}
      </p>
      <p className="mt-1 text-xs font-semibold leading-4 text-[#17202a] sm:text-sm sm:leading-5">
        {value}
      </p>
    </div>
  );
}
