import { ScrollToFormButton } from "./ScrollToFormButton";

export function CTASection() {
  return (
    <section className="border-b border-[var(--line)] bg-[#15202a]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-12 text-white sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase text-[#9dc3dc]">
            Erstgespräch
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Wollen Sie sehen, ob der KI-Kalkulant in Ihren Prozess passt?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#d8e4e8] sm:text-lg sm:leading-8">
            Füllen Sie das Formular aus. Danach planen wir ein Gespräch zu
            Ausschreibungsvolumen, Datenlage und Ihrem heutigen
            LV-/ONLV-/Excel-Prozess.
          </p>
        </div>
        <ScrollToFormButton
          className="inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-[#15202a] transition hover:bg-[#e7f0f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15202a] sm:w-auto"
        >
          Eignung prüfen
        </ScrollToFormButton>
      </div>
    </section>
  );
}
