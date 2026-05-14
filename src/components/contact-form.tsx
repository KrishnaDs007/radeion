"use client";

import { FormEvent, useState } from "react";
import { FlashMessage } from "@/components/flash-message";

const initialState = {
  name: "",
  email: "",
  organization: "",
  interest: "Platform partnership",
  message: "",
};

type ContactFormState = typeof initialState;
type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(form: ContactFormState) {
  const errors: ContactFormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!isValidEmail(form.email.trim())) {
    errors.email = "Enter a valid work email address.";
  }

  if (form.organization.trim().length < 2) {
    errors.organization = "Enter your organization name.";
  }

  if (!form.interest) {
    errors.interest = "Select an interest area.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Add a short message with at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [dismissSignal, setDismissSignal] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function dismissFlash() {
    if (status === "sent" || status === "error") {
      setDismissSignal((value) => value + 1);
    }
  }

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    dismissFlash();
  }

  function clearFlash() {
    setStatus("idle");
    setErrorMessage("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorMessage("Please fix the highlighted fields before sending.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      organization: form.organization.trim(),
      interest: form.interest,
      message: form.message.trim(),
    };

    const response = await fetch("/api/contact-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("sent");
      setForm(initialState);
      setErrors({});
    } else {
      const result = await response.json().catch(() => ({ error: "" }));
      setErrorMessage(result.error || "Please check the email setup and try again.");
      setStatus("error");
    }
  }

  return (
    <form className="card grid gap-4 p-6" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field error={errors.name} label="Name" name="name" required value={form.name} onChange={(value) => updateField("name", value)} />
        <Field error={errors.email} label="Work email" name="email" required type="email" value={form.email} onChange={(value) => updateField("email", value)} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field error={errors.organization} label="Organization" name="organization" required value={form.organization} onChange={(value) => updateField("organization", value)} />
        <label className="grid gap-2 text-sm font-bold">
          Interest area
          <select className="form-field" name="interest" value={form.interest} onChange={(event) => updateField("interest", event.target.value)}>
            <option>Platform partnership</option>
            <option>Healthcare analytics project</option>
            <option>Clinical decision support</option>
            <option>Risk and quality automation</option>
          </select>
          {errors.interest && <span className="field-error">{errors.interest}</span>}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea className="form-field min-h-32" name="message" required value={form.message} onChange={(event) => updateField("message", event.target.value)} />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </label>
      <button className="button-primary justify-center" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending message..." : "Send message"}
      </button>
      {status === "sent" && <FlashMessage closeSignal={dismissSignal} type="success" title="Message sent" message="The Radeion team has received your message." onDismiss={clearFlash} />}
      {status === "error" && <FlashMessage closeSignal={dismissSignal} type="error" title="Unable to send message" message={errorMessage} onDismiss={clearFlash} />}
    </form>
  );
}

function Field({ error, label, name, onChange, required = false, type = "text", value }: { error?: string; label: string; name: string; onChange: (value: string) => void; required?: boolean; type?: string; value: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input className="form-field" name={name} required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      {error && <span className="field-error">{error}</span>}
    </label>
  );
}
