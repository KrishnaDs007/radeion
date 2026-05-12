import { DemoForm } from "@/components/demo-form";
import { SectionIntro } from "@/components/sections";
import site from "@/data/site.json";

export default function DemoPage() {
  return (
    <main className="section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionIntro eyebrow="Demo" title={site.demo.title} body={site.demo.body} />
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
