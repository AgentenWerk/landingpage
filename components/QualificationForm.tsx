"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

const tendersPerMonth = ["1-2", "3-5", "6-10", "Mehr als 10"];
const teamSize = ["1", "2", "3-5", "Mehr als 5"];
const cities = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt am Main",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
  "Dresden",
  "Hannover",
  "Wien",
  "Graz",
  "Linz",
  "Salzburg",
  "Innsbruck",
  "Zürich",
  "Basel",
  "Bern",
  "Luzern",
  "St. Gallen"
];
const trades = [
  "Heizung",
  "Sanitär",
  "Lüftung / Klima",
  "Kälte",
  "MSR / Gebäudeautomation",
  "Elektro / TGA",
  "HKLS-Generalist",
  "Anderes"
];
const formatsAndSystems = [
  "GAEB / deutsche AVA",
  "ÖNORM A 2063 / ONLV",
  "SIA 451 / CRB / NPK",
  "Taifun oder ähnlicher Ablauf",
  "ORCA AVA / California / RIB iTWO",
  "Excel / PDF / eigene Listen",
  "Anderes"
];

export function QualificationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void handleRequest();
  }

  async function handleRequest() {
    const form = formRef.current;

    if (!form?.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      city: String(formData.get("city") ?? ""),
      tenders: String(formData.get("tenders") ?? ""),
      teamSize: String(formData.get("teamSize") ?? ""),
      website: String(formData.get("website") ?? ""),
      trades: formData.getAll("trades").map(String),
      formatsAndSystems: formData.getAll("formatsAndSystems").map(String),
      dataAvailability: String(formData.get("dataAvailability") ?? "")
    };

    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/qualification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setServerError(data.error ?? "Die Anfrage konnte nicht gesendet werden.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Die Anfrage konnte nicht gesendet werden.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="eignung" className="bg-[#f8f7f2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-18">
        <div>
          <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">
            Eignung prüfen
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#121a22] sm:text-4xl">
            Passt der KI-Kalkulant zu Ihrem Betrieb?
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4d5961] sm:text-lg sm:leading-8">
            Drei Minuten reichen, damit wir einschätzen können, ob der Workflow
            zu Ihrem Betrieb passt.
          </p>
          <div className="mt-6 rounded-lg border border-[#cfd9dc] bg-white p-4 sm:p-5">
            <h3 className="text-lg font-semibold text-[#17202a]">
              Im Erstgespräch klären wir:
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#53616a] sm:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Ausschreibungen pro Monat</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>größter Zeitverlust in der LV-Vorarbeit</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Formate, Systeme und vorhandene Daten</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>nächster sinnvoller Schritt</span>
              </li>
            </ul>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-lg border border-[#cfd9dc] bg-white p-4 shadow-sm sm:p-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextField label="Name" name="name" autoComplete="name" required />
            <TextField
              label="Firma"
              name="company"
              autoComplete="organization"
              required
            />
            <TextField
              label="E-Mail"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Telefonnummer"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
            <TextField
              label="Standort / Stadt"
              name="city"
              autoComplete="address-level2"
              list="city-options"
              required
            />
            <SelectField
              label="Ausschreibungen pro Monat"
              name="tenders"
              options={tendersPerMonth}
              required
            />
            <SelectField
              label="Personen in der Kalkulation"
              name="teamSize"
              options={teamSize}
              required
            />
          </div>
          <datalist id="city-options">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>

          <CheckboxGroup
            legend="Welche Schwerpunkte hat Ihr Betrieb?"
            name="trades"
            options={trades}
          />

          <CheckboxGroup
            legend="Welche Formate oder Systeme kommen bei Ihnen vor?"
            name="formatsAndSystems"
            options={formatsAndSystems}
          />

          <fieldset className="mt-6 rounded-md border border-[#d9dedc] p-4">
            <legend className="text-sm font-semibold text-[#26343e]">
              Historische Daten digital verfügbar?
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Ja", "Teilweise", "Nein"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-3 rounded-md border border-[#d9dedc] px-3 py-3 text-sm font-medium text-[#40505a]"
                >
                  <input
                    type="radio"
                    name="dataAvailability"
                    value={value}
                    required
                    className="h-4 w-4 accent-[var(--accent)]"
                  />
                  {value}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 w-full rounded-md bg-[var(--accent)] px-5 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Wird gesendet..." : "Prüfung anfragen"}
          </button>

          <p className="mt-4 max-w-2xl text-xs leading-5 text-[#68737a]">
            Mit dem Absenden verarbeiten wir Ihre Angaben zur Bearbeitung der
            Anfrage und Kontaktaufnahme. Details finden Sie in der{" "}
            <Link
              href="/datenschutz"
              className="font-semibold text-[var(--accent-dark)] underline decoration-[#9db8c9] underline-offset-4 transition hover:text-[var(--accent)]"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>

          {serverError ? (
            <p
              role="alert"
              className="mt-5 rounded-md border border-[#efc5c0] bg-[#fff5f3] px-4 py-3 text-sm font-semibold text-[#8a2d24]"
            >
              {serverError}
            </p>
          ) : null}

          {submitted ? (
            <p
              role="status"
              className="mt-5 rounded-md border border-[#bad4c5] bg-[#edf7f0] px-4 py-3 text-sm font-semibold text-[#28533b]"
            >
              Danke. Wir melden uns, um einen passenden Gesprächstermin
              abzustimmen.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

type TextFieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  list?: string;
  required?: boolean;
};

function TextField({
  label,
  name,
  type = "text",
  autoComplete,
  list,
  required
}: TextFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#26343e]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        list={list}
        required={required}
        className="mt-2 w-full rounded-md border border-[#cdd8dc] bg-white px-3 py-3 text-[#17202a] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[#1f5f8f]/20"
      />
    </label>
  );
}

type CheckboxGroupProps = {
  legend: string;
  name: string;
  options: string[];
};

function CheckboxGroup({ legend, name, options }: CheckboxGroupProps) {
  return (
    <fieldset className="mt-6 rounded-md border border-[#d9dedc] p-4">
      <legend className="text-sm font-semibold text-[#26343e]">{legend}</legend>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex min-h-12 items-center gap-3 rounded-md border border-[#d9dedc] px-3 py-3 text-sm font-medium leading-5 text-[#40505a]"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              className="h-4 w-4 shrink-0 accent-[var(--accent)]"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  className?: string;
};

function SelectField({
  label,
  name,
  options,
  required,
  className = ""
}: SelectFieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-[#26343e]">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-md border border-[#cdd8dc] bg-white px-3 py-3 text-[#17202a] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[#1f5f8f]/20"
      >
        <option value="" disabled>
          Bitte auswählen
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
