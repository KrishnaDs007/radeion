import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email/resend-mailer";

export const runtime = "nodejs";

const storagePath = path.join(process.cwd(), "data", "demo-requests.json");

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function saveDemoRequestLocally(record: unknown) {
  if (process.env.VERCEL) {
    console.info("Skipping local demo request JSON save on Vercel.");
    return;
  }

  try {
    await fs.mkdir(path.dirname(storagePath), { recursive: true });
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await fs.readFile(storagePath, "utf8"));
    } catch {
      existing = [];
    }
    existing.push(record);
    await fs.writeFile(storagePath, `${JSON.stringify(existing, null, 2)}\n`);
  } catch (error) {
    console.warn("Unable to save demo request JSON locally. Continuing with email delivery.", error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      organization: String(body.organization ?? "").trim(),
      role: String(body.role ?? "").trim(),
      segment: String(body.segment ?? "").trim(),
      problem: String(body.problem ?? "").trim(),
    };

    if (!record.name || !record.email || !record.organization || !record.role || !record.segment || !record.problem) {
      return NextResponse.json({ error: "All demo request fields are required." }, { status: 400 });
    }

    if (!isValidEmail(record.email)) {
      return NextResponse.json({ error: "Enter a valid work email address." }, { status: 400 });
    }

    await saveDemoRequestLocally(record);

    await sendFormEmail({
      subject: "New demo request",
      intro: "A visitor submitted the demo request form on the Radeion.ai website.",
      replyTo: record.email,
      fields: [
        { label: "Name", value: record.name },
        { label: "Work email", value: record.email },
        { label: "Organization", value: record.organization },
        { label: "Role", value: record.role },
        { label: "Segment", value: record.segment },
        { label: "Problem to solve", value: record.problem },
        { label: "Local request ID", value: record.id },
        { label: "Submitted at", value: record.createdAt },
      ],
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save demo request.";
    console.error("Demo request failed", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
