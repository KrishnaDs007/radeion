"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  organization: "",
  role: "",
  segment: "Payer / health plan",
  problem: ""
};

export function DemoForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const response = await fetch("/api/demo-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) setForm(initialState);
  }

  return (
    <form className="card grid gap-4 p-6" onSubmit={submit}>
      <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
      <Field label="Work email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
      <Field label="Organization" value={form.organization} onChange={(value) => setForm({ ...form, organization: value })} required />
      <Field label="Role" value={form.role} onChange={(value) => setForm({ ...form, role: value })} />
      <label className="grid gap-2 text-sm font-bold">
        Segment
        <select className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)]" value={form.segment} onChange={(event) => setForm({ ...form, segment: event.target.value })}>
          {["Payer / health plan", "Health system", "ACO / value-based care", "Employer", "Government / Medicaid"].map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        What are you trying to solve?
        <textarea className="min-h-32 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)]" value={form.problem} onChange={(event) => setForm({ ...form, problem: event.target.value })} />
      </label>
      <button className="button-primary justify-center" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Saving request..." : "Save mock request"}
      </button>
      {status === "success" && <p className="text-sm font-bold text-[var(--success)]">Saved locally to the demo requests JSON file.</p>}
      {status === "error" && <p className="text-sm font-bold text-red-500">Unable to save. Please try again.</p>}
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)]" required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
