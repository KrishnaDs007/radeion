import { CaseStudyCards, Hero, MetricsStrip, PlatformLayers, ProductGrid, SectionIntro, SolutionGrid, TrustGrid } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsStrip />
      <section className="section">
        <SectionIntro eyebrow="Products" title="One platform, six healthcare intelligence workflows." body="Each module is designed to stand alone, but the strongest value appears when teams connect clinical, financial, and operational signals across the same governed data foundation." />
        <ProductGrid />
      </section>
      <section className="section">
        <SectionIntro eyebrow="Solutions" title="Built for B2B healthcare organizations, not direct patient engagement." body="Radeion speaks to enterprise teams that manage populations, programs, networks, quality, compliance, and care workflows." />
        <SolutionGrid />
      </section>
      <PlatformLayers />
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
    </main>
  );
}
