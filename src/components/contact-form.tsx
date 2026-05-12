"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <form className="card grid gap-4 p-6" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input className="form-field" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Work email
          <input className="form-field" name="email" required type="email" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Organization
          <input className="form-field" name="organization" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Interest area
          <select className="form-field" name="interest">
            <option>Platform partnership</option>
            <option>Healthcare analytics project</option>
            <option>Clinical decision support</option>
            <option>Risk and quality automation</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea className="form-field min-h-32" name="message" />
      </label>
      <button className="button-primary justify-center" type="submit">Send message</button>
      {status === "sent" && <p className="text-sm font-bold text-[var(--success)]">Message captured locally for the prototype flow.</p>}
    </form>
  );
}
