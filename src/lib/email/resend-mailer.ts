import { Resend } from "resend";

type MailField = {
  label: string;
  value: string;
};

type SendFormEmailInput = {
  subject: string;
  intro: string;
  fields: MailField[];
  replyTo?: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  return new Resend(apiKey);
}

function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "Radeion Website <admin@radeion.ai>";
}

function getToEmail() {
  return process.env.RESEND_TO_EMAIL ?? "admin@radeion.ai";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildTextEmail(input: SendFormEmailInput) {
  return [
    input.intro,
    "",
    ...input.fields.map((field) => `${field.label}: ${field.value || "Not provided"}`),
  ].join("\n");
}

function buildHtmlEmail(input: SendFormEmailInput) {
  const rows = input.fields
    .map((field) => {
      const value = field.value || "Not provided";
      return `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #d9e3f5;color:#52617d;font-weight:700;width:34%;">${escapeHtml(field.label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #d9e3f5;color:#06143d;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f9fd;padding:28px;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #d9e3f5;border-radius:8px;overflow:hidden;">
        <div style="padding:24px;background:linear-gradient(135deg,#075fe4,#7228f3);color:#ffffff;">
          <p style="margin:0;font-size:12px;font-weight:800;text-transform:uppercase;">Radeion.ai website</p>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">${escapeHtml(input.subject)}</h1>
        </div>
        <div style="padding:22px;">
          <p style="margin:0 0 18px;color:#52617d;line-height:1.6;">${escapeHtml(input.intro)}</p>
          <table style="width:100%;border-collapse:collapse;border:1px solid #d9e3f5;border-radius:8px;overflow:hidden;">
            ${rows}
          </table>
        </div>
      </div>
    </div>
  `;
}

export async function sendFormEmail(input: SendFormEmailInput) {
  const resend = getResendClient();
  const toEmail = getToEmail();

  const response = await resend.emails.send({
    from: getFromEmail(),
    to: toEmail,
    replyTo: input.replyTo,
    subject: input.subject,
    text: buildTextEmail(input),
    html: buildHtmlEmail(input),
  });

  if (response.error) {
    const errorMessage = response.error.message || "Resend rejected the email request.";
    console.error("Resend email error", response.error);
    throw new Error(errorMessage);
  }

  console.info("Resend email accepted", {
    id: response.data?.id,
    to: toEmail,
    subject: input.subject,
  });

  return response.data;
}
