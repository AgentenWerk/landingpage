import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | KI-Kalkulant",
  description:
    "Datenschutzerklärung für den KI-Kalkulant und das Qualifikationsformular."
};

const controllerDetails = [
  {
    title: "AgentLayer AI L.L.C-FZ",
    rows: [
      ["Anschrift", "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E."],
      ["E-Mail", "dk@ki-kalkulant.de"],
      ["Vertreten durch", "Daniil Klubov"]
    ]
  },
  {
    title: "AgentenWerk KI GmbH in Gründung",
    rows: [
      ["Anschrift", "Argentinierstraße 42-35, 1040 Wien, Österreich"],
      ["E-Mail", "rares@ki-kalkulant.de"],
      ["Telefon", "+43 670 608 45 69"],
      ["Vertreten durch", "Alexandru-Rares Bacila"]
    ]
  }
];

const formData = [
  "Name, Firma, E-Mail-Adresse und optional Telefonnummer",
  "Standort / Stadt",
  "Ausschreibungen pro Monat und Teamgröße",
  "Gewerke, Dateiformate, Systeme und Datenverfügbarkeit",
  "technische Metadaten wie Zeitpunkt, Referrer und User-Agent"
];

const rights = [
  "Auskunft über gespeicherte personenbezogene Daten",
  "Berichtigung unrichtiger Daten",
  "Löschung oder Einschränkung der Verarbeitung",
  "Datenübertragbarkeit, soweit anwendbar",
  "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen",
  "Widerruf einer Einwilligung mit Wirkung für die Zukunft",
  "Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde"
];

const summaryItems = [
  ["Keine Analyse-Cookies", "Derzeit kein Tracking, keine Pixel und keine nicht notwendigen Cookies."],
  ["Formular nur für Anfragen", "Ihre Angaben werden zur Prüfung, Kontaktaufnahme und Gesprächsvorbereitung genutzt."],
  ["Zwei Ansprechpartner", "Datenschutzrechte können gegenüber beiden unten genannten Stellen geltend gemacht werden."]
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#17202a]">
      <section className="border-b border-[var(--line)] bg-[#15202a] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-[#d8e4e8] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Zurück zur Startseite
          </Link>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Datenschutz
            </h1>
            <p className="mt-4 text-base leading-7 text-[#d8e4e8]">
              Informationen zur Verarbeitung personenbezogener Daten auf dieser
              Website und im Qualifikationsformular.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {summaryItems.map(([title, text]) => (
              <article
                key={title}
                className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-4"
              >
                <h2 className="text-sm font-bold text-[#17202a]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4d5961]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
              Verantwortliche
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight">
              Wer für die Verarbeitung verantwortlich ist
            </h2>
          </div>
          <div className="grid gap-5">
            {controllerDetails.map((controller) => (
              <article
                key={controller.title}
                className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-5"
              >
                <h3 className="text-lg font-semibold">{controller.title}</h3>
                <dl className="mt-4 grid gap-3">
                  {controller.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid gap-1 sm:grid-cols-[9rem_1fr]"
                    >
                      <dt className="text-sm font-bold text-[#17202a]">
                        {label}
                      </dt>
                      <dd className="text-sm leading-6 text-[#4d5961]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
            <p className="rounded-lg border border-[#d9dedc] bg-white p-5 text-sm leading-7 text-[#4d5961]">
              Die genannten Stellen können für diese Website und eingehende
              Anfragen gemeinsam verantwortlich sein. Sie können Ihre
              Datenschutzrechte gegenüber beiden Stellen geltend machen. Intern
              werden Anfragen nach Zuständigkeit und Inhalt der Anfrage
              bearbeitet.
            </p>
          </div>
        </div>
      </section>

      <LegalSection
        eyebrow="Website"
        title="Serverzugriffe und technische Bereitstellung"
      >
        <p>
          Beim Aufruf der Website verarbeitet der technische Betreiber des
          Webservers Zugriffsdaten, damit die Seite ausgeliefert, stabil
          betrieben und gegen Missbrauch abgesichert werden kann. Dazu können
          IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten,
          Referrer, Browser- und Betriebssysteminformationen sowie technische
          Fehlermeldungen gehören.
        </p>
        <p>
          Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und
          funktionsfähigen Website. Technische Protokolle werden nur so lange
          gespeichert, wie dies für Betrieb, Sicherheit und Fehleranalyse
          erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Formular" title="Qualifikationsanfrage">
        <p>
          Wenn Sie das Formular absenden, verarbeiten wir Ihre Angaben, um Ihre
          Anfrage zu prüfen, Sie zu kontaktieren und ein Erstgespräch
          vorzubereiten. Ohne die als Pflichtfelder markierten Angaben können
          wir die Anfrage nicht sinnvoll bearbeiten.
        </p>
        <ul className="grid gap-2">
          {formData.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Rechtsgrundlagen sind vorvertragliche Maßnahmen beziehungsweise die
          Bearbeitung Ihrer Anfrage sowie unser berechtigtes Interesse an einer
          geordneten Lead- und Kundenkommunikation, insbesondere Art. 6 Abs. 1
          lit. b und lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Empfänger" title="Weitergabe und Dienstleister">
        <p>
          Eine Weitergabe erfolgt nur, soweit dies für Betrieb, Bearbeitung der
          Anfrage oder gesetzliche Pflichten erforderlich ist. Empfänger können
          Hosting-Anbieter, technische Dienstleister, ein internes
          Anfrage-Dashboard, E-Mail- und Kommunikationsdienste sowie rechtliche,
          steuerliche oder buchhalterische Berater sein.
        </p>
        <p>
          Soweit Dienstleister personenbezogene Daten in unserem Auftrag
          verarbeiten, werden sie vertraglich auf Weisungen, Vertraulichkeit und
          angemessene Schutzmaßnahmen verpflichtet.
        </p>
      </LegalSection>

      <LegalSection
        eyebrow="Drittland"
        title="Internationale Datenverarbeitung"
      >
        <p>
          An der Bearbeitung können Verantwortliche oder Dienstleister außerhalb
          der Europäischen Union beziehungsweise des Europäischen
          Wirtschaftsraums beteiligt sein, insbesondere in den Vereinigten
          Arabischen Emiraten. In solchen Fällen achten wir auf geeignete
          Schutzmaßnahmen, vertragliche Regelungen oder eine anwendbare
          gesetzliche Grundlage für die Übermittlung.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Externe Links" title="LinkedIn und fremde Seiten">
        <p>
          Das Impressum enthält Links zu LinkedIn-Profilen. Wenn Sie einen
          externen Link anklicken, verlassen Sie diese Website. Für die
          anschließende Verarbeitung personenbezogener Daten ist der jeweilige
          externe Anbieter verantwortlich.
        </p>
      </LegalSection>

      <LegalSection
        eyebrow="Automatisierung"
        title="Keine automatisierte Entscheidung"
      >
        <p>
          Wir treffen auf Grundlage der Formularangaben keine ausschließlich
          automatisierte Entscheidung mit rechtlicher Wirkung oder ähnlich
          erheblicher Beeinträchtigung. Die Angaben helfen lediglich bei der
          Vorbereitung und Priorisierung der manuellen Anfragebearbeitung.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Speicherung" title="Löschung und Aufbewahrung">
        <p>
          Anfragen werden gelöscht, sobald sie für die Bearbeitung nicht mehr
          erforderlich sind. Wird aus der Anfrage keine Geschäftsbeziehung,
          löschen oder anonymisieren wir die Kontaktdaten in der Regel nach
          spätestens 12 Monaten. Entsteht eine Vertrags- oder
          Geschäftsbeziehung, können längere gesetzliche Aufbewahrungsfristen,
          insbesondere steuer- und unternehmensrechtliche Pflichten, gelten.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Cookies" title="Cookies, Analyse und Tracking">
        <p>
          Diese Website verwendet nach aktuellem Stand keine nicht notwendigen
          Cookies, keine externen Analyse-Pixel und kein verhaltensbasiertes
          Tracking. Sollten solche Dienste später eingesetzt werden, wird diese
          Datenschutzerklärung vorab angepasst und, soweit erforderlich, eine
          Einwilligung eingeholt.
        </p>
      </LegalSection>

      <LegalSection eyebrow="Rechte" title="Ihre Datenschutzrechte">
        <p>
          Betroffene Personen haben nach Maßgabe der anwendbaren
          Datenschutzgesetze insbesondere folgende Rechte:
        </p>
        <ul className="grid gap-2">
          {rights.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an eine der oben
          genannten Kontaktadressen. Für Beschwerden können Sie sich insbesondere
          an die Österreichische Datenschutzbehörde oder, soweit anwendbar, an
          den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
          wenden.
        </p>
      </LegalSection>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <p className="rounded-lg border border-[#d9dedc] bg-[#fbfaf6] p-5 text-sm leading-7 text-[#4d5961]">
            Stand: 29.06.2026. Diese Datenschutzerklärung wird angepasst, wenn
            sich Zwecke, technische Dienstleister oder eingesetzte Tools ändern.
          </p>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--line)] bg-[#f8f7f2]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 text-sm leading-7 text-[#4d5961] sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
