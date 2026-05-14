import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email/resend-mailer";

export const runtime = "nodejs";

const storagePath = path.join(process.cwd(), "data", "demo-requests.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      organization: String(body.organization ?? ""),
      role: String(body.role ?? ""),
      segment: String(body.segment ?? ""),
      problem: String(body.problem ?? "")
    };

    if (!record.name || !record.email || !record.organization) {
      return NextResponse.json({ error: "Name, email, and organization are required." }, { status: 400 });
    }

    await fs.mkdir(path.dirname(storagePath), { recursive: true });
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await fs.readFile(storagePath, "utf8"));
    } catch {
      existing = [];
    }
    existing.push(record);
    await fs.writeFile(storagePath, `${JSON.stringify(existing, null, 2)}\n`);

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
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
