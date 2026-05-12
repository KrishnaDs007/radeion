import { CaseStudyCards, Hero, MetricsStrip, PlatformLayers, ProductGrid, SectionIntro, SolutionGrid, TrustGrid } from "@/components/sections";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsStrip />
      <section className="section pt-0">
        <div className="home-spotlight grid gap-8 rounded-lg p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Why Radeion</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Healthcare teams do not need another dashboard. They need decisions they can trust.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Radeion is designed for organizations where quality, documentation, utilization, compliance, and financial performance all depend on the same messy data. The platform turns that complexity into governed workflows that leaders can review, explain, and improve.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button-primary" href="/demo">Discuss your workflow</Link>
              <Link className="button-secondary" href="/solutions">See buyer paths</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["From fragmented systems", "Claims, EHR events, care gaps, policy rules, and work queues often tell different stories."],
              ["To reviewed intelligence", "Radeion routes AI signals through confidence checks, source lineage, and human review."],
              ["To operational action", "Teams get clear queues, dashboards, and next steps instead of static reports."],
              ["To measurable assurance", "Every important decision can be traced back to data, model evaluation, and reviewer context."],
            ].map(([title, body]) => (
              <div className="card p-5" key={title}>
                <p className="text-lg font-black">{title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="Products" title="One platform, six healthcare intelligence workflows." body="Each module is designed to stand alone, but the strongest value appears when teams connect clinical, financial, and operational signals across the same governed data foundation." />
        <ProductGrid />
      </section>
      <section className="section">
        <SectionIntro eyebrow="Workflow" title="A practical path from raw healthcare data to confident action." body="The homepage now tells the operating story clearly: connect data, evaluate AI signals, route review, and act with traceability." />
        <div className="workflow-rail">
          {[
            ["01", "Connect", "Bring claims, EHR, eligibility, policy, quality, and care-management data into a governed foundation."],
            ["02", "Evaluate", "Run AI-assisted analysis with source traceability, confidence scoring, and clinical relevance checks."],
            ["03", "Review", "Move signals into role-based queues for analysts, clinicians, coders, quality teams, or administrators."],
            ["04", "Act", "Publish dashboards, close care gaps, investigate anomalies, or prepare audit-ready evidence packets."],
          ].map(([number, title, body]) => (
            <div className="workflow-step card p-5" key={number}>
              <span className="workflow-number">{number}</span>
              <p className="mt-5 text-xl font-black">{title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="Solutions" title="Built for B2B healthcare organizations, not direct patient engagement." body="Radeion speaks to enterprise teams that manage populations, programs, networks, quality, compliance, and care workflows." />
        <SolutionGrid />
      </section>
      <PlatformLayers />
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro eyebrow="Data readiness" title="Designed around the integration reality of healthcare." body="Radeion’s website story should reassure buyers that the product understands legacy feeds, modern APIs, and audit expectations before promising intelligence." />
          <div className="integration-panel card p-6">
            <p className="text-2xl font-black">Supported integration patterns</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["FHIR resources", "HL7 messages", "Claims files", "Eligibility feeds", "Warehouse sync", "SSO / RBAC", "Audit logs", "API delivery"].map((item) => (
                <span className="integration-chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="AI evaluations" title="AI signals are treated as reviewed evidence, not unsupported claims." body="Default content avoids unverified performance promises. Every AI-assisted output is framed through evaluation, traceability, and human review." />
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card p-6">
            <p className="text-2xl font-black">Evaluation controls</p>
            <div className="mt-5 grid gap-3">
              {["Source traceability", "Model confidence review", "Clinical relevance checks", "Reviewer agreement", "Drift monitoring", "Audit-ready output history"].map((item) => (
                <span className="rounded-md bg-[var(--surface-strong)] px-3 py-2 text-sm font-bold text-[var(--muted)]" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-2xl font-black">Sample use case language</p>
            <p className="mt-4 leading-7 text-[var(--muted)]">Radeion can surface likely documentation gaps, care-pathway variance, or suspicious claims behavior, then route those signals through configurable review queues before they are used in operations or reporting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {["Payer", "Health system", "Value-based care"].map((segment) => (
                <div className="rounded-md border border-[var(--line)] bg-[var(--surface-strong)] p-4" key={segment}>
                  <p className="text-sm font-black">{segment}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">AI-assisted signals are routed through configurable review queues before operational use.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="Trust infrastructure" title="Compliance, security, and interoperability are first-class product surfaces." body="These pages are scaffolded now so policy, security, and implementation details can mature with the company." />
        <TrustGrid />
      </section>
      <section className="section">
        <SectionIntro eyebrow="Sample proof points" title="Case-study structure for future validated outcomes." body="These are intentionally marked as sample concepts until real client evidence and AI evaluation results are available." />
        <CaseStudyCards />
      </section>
      <section className="section">
        <div className="home-cta rounded-lg p-8 text-center md:p-12">
          <p className="eyebrow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Build healthcare intelligence your teams can explain before they scale it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Start with one workflow, prove the review model, and expand into a platform that connects risk, quality, clinical guidance, and operational assurance.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="button-primary" href="/demo">Request a Radeion walkthrough</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
