import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email/resend-mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      organization: String(body.organization ?? "").trim(),
      interest: String(body.interest ?? "").trim(),
      message: String(body.message ?? "").trim(),
    };

    if (!record.name || !record.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    await sendFormEmail({
      subject: "New company contact request",
      intro: "A visitor submitted the company contact form on the Radeion.ai website.",
      replyTo: record.email,
      fields: [
        { label: "Name", value: record.name },
        { label: "Work email", value: record.email },
        { label: "Organization", value: record.organization },
        { label: "Interest area", value: record.interest },
        { label: "Message", value: record.message },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send contact request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
