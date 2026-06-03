import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import {
  forwardKiInquiryToDashboard,
  type KiQualificationValues,
} from "@/lib/inquiry-dashboard";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalise(body: Record<string, unknown>): KiQualificationValues {
  return {
    name: asString(body.name),
    company: asString(body.company),
    email: asString(body.email),
    phone: asString(body.phone),
    city: asString(body.city),
    tenders: asString(body.tenders),
    teamSize: asString(body.teamSize),
    trades: asStringArray(body.trades),
    formatsAndSystems: asStringArray(body.formatsAndSystems),
    dataAvailability: asString(body.dataAvailability),
  };
}

function validate(values: KiQualificationValues): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const field of [
    "name",
    "company",
    "email",
    "city",
    "tenders",
    "teamSize",
    "dataAvailability",
  ] as const) {
    if (!values[field]) errors[field] = "Dieses Feld ist erforderlich.";
  }

  if (!errors.email && !EMAIL_RE.test(values.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  return errors;
}

export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (typeof raw !== "object" || raw === null) {
    return NextResponse.json(
      { ok: false, error: "Expected a JSON object." },
      { status: 400 },
    );
  }

  const values = normalise(raw as Record<string, unknown>);
  const fields = validate(values);

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Einige Angaben fehlen oder sind ungültig.", fields },
      { status: 400 },
    );
  }

  const leadId = `lead_${randomUUID()}`;
  const forwarding = await forwardKiInquiryToDashboard(values, leadId, request);

  if (!forwarding.ok && !forwarding.skipped) {
    console.error("[inquiry-dashboard] forwarding failed:", forwarding.error);
    return NextResponse.json(
      { ok: false, error: "Die Anfrage konnte nicht gespeichert werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    leadId,
    message:
      "Danke. Wir melden uns, um einen passenden Gesprächstermin abzustimmen.",
  });
}
