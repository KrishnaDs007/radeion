"use client";

import { FormEvent, useState } from "react";
import { FlashMessage } from "@/components/flash-message";

const initialState = {
  name: "",
  email: "",
  organization: "",
  role: "",
  segment: "Payer / health plan",
  problem: ""
};

type DemoFormState = typeof initialState;
type DemoFormErrors = Partial<Record<keyof DemoFormState, string>>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(form: DemoFormState) {
  const errors: DemoFormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!isValidEmail(form.email.trim())) {
    errors.email = "Enter a valid work email address.";
  }

  if (form.organization.trim().length < 2) {
    errors.organization = "Enter your organization name.";
  }

  if (form.role.trim().length < 2) {
    errors.role = "Enter your role or title.";
  }

  if (!form.segment) {
    errors.segment = "Select the segment closest to your organization.";
  }

  if (form.problem.trim().length < 10) {
    errors.problem = "Describe the request in at least 10 characters.";
  }

  return errors;
}

export function DemoForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [dismissSignal, setDismissSignal] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function dismissFlash() {
    if (status === "success" || status === "error") {
      setDismissSignal((value) => value + 1);
    }
  }

  function updateField(field: keyof DemoFormState, value: string) {
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
    const response = await fetch("/api/demo-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim(),
        role: form.role.trim(),
        segment: form.segment,
        problem: form.problem.trim(),
      })
    });
    if (response.ok) {
      setStatus("success");
      setForm(initialState);
      setErrors({});
      return;
    }

    const result = await response.json().catch(() => ({ error: "" }));
    setErrorMessage(result.error || "Please check the email setup and try again.");
    setStatus("error");
  }

  return (
    <form className="card grid gap-4 p-6" onSubmit={submit}>
      <Field error={errors.name} label="Name" value={form.name} onChange={(value) => updateField("name", value)} required />
      <Field error={errors.email} label="Work email" type="email" value={form.email} onChange={(value) => updateField("email", value)} required />
      <Field error={errors.organization} label="Organization" value={form.organization} onChange={(value) => updateField("organization", value)} required />
      <Field error={errors.role} label="Role" value={form.role} onChange={(value) => updateField("role", value)} required />
      <label className="grid gap-2 text-sm font-bold">
        Segment
        <select className="form-field" required value={form.segment} onChange={(event) => updateField("segment", event.target.value)}>
          {["Payer / health plan", "Health system", "ACO / value-based care", "Employer", "Government / Medicaid"].map((option) => <option key={option}>{option}</option>)}
        </select>
        {errors.segment && <span className="field-error">{errors.segment}</span>}
      </label>
      <label className="grid gap-2 text-sm font-bold">
        What are you trying to solve?
        <textarea className="form-field min-h-32" required value={form.problem} onChange={(event) => updateField("problem", event.target.value)} />
        {errors.problem && <span className="field-error">{errors.problem}</span>}
      </label>
      <button className="button-primary justify-center" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending request..." : "Send demo request"}
      </button>
      {status === "success" && <FlashMessage closeSignal={dismissSignal} type="success" title="Demo request sent" message="The Radeion team has received your request." onDismiss={clearFlash} />}
      {status === "error" && <FlashMessage closeSignal={dismissSignal} type="error" title="Unable to send request" message={errorMessage} onDismiss={clearFlash} />}
    </form>
  );
}

function Field({ error, label, value, onChange, type = "text", required = false }: { error?: string; label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input className="form-field" required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      {error && <span className="field-error">{error}</span>}
    </label>
  );
}
