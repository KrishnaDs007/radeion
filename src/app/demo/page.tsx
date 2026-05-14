import { DemoForm } from "@/components/demo-form";
import { SectionIntro } from "@/components/sections";

export default function DemoPage() {
  return (
    <main className="section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionIntro eyebrow="Demo" title="See how Radeion would fit your organization" body="Share the workflow you want to improve. The form sends the request to the Radeion team and also keeps a local development copy for review." />
        <div className="card p-6">
          <p className="text-xl font-black">What the demo can cover</p>
          <div className="mt-5 grid gap-3">
            {["Risk and documentation analytics", "Clinical decision support workflows", "Population health dashboards", "FWA and revenue cycle review", "Integration and compliance roadmap"].map((item) => (
              <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 font-bold text-[var(--muted)]" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <DemoForm />
    </main>
  );
}
