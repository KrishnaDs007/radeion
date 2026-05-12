import Link from "next/link";
import Image from "next/image";
import { AnimatedCounter } from "@/components/animated-counter";
import site from "@/data/site.json";

type Product = (typeof site.products)[number];
type Solution = (typeof site.solutions)[number];

export function Hero() {
  return (
    <section className="section hero-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
      <div className="fade-up">
        <div className="brand-kicker">
          <Image src="/radeion-mark.png" alt="" width={52} height={52} className="h-10 w-10 object-contain" />
          <span>{site.brand.tagline}</span>
        </div>
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] text-[var(--foreground)] md:text-7xl">
          {site.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{site.hero.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="button-primary" href="/demo">{site.hero.primaryCta}</Link>
          <Link className="button-secondary" href="/products">{site.hero.secondaryCta}</Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {site.hero.trustBadges.map((badge) => (
            <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-bold text-[var(--muted)]" key={badge}>{badge}</span>
          ))}
        </div>
      </div>
      <DashboardMockup />
    </section>
  );
}

export function DashboardMockup() {
  return (
    <div className="surface dashboard-shell fade-up rounded-lg p-4">
      <div className="dashboard-orbit" />
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="text-xs font-black uppercase text-[var(--primary)]">Quality command center</p>
          <p className="mt-1 text-xl font-black">AI evaluation overview</p>
        </div>
        <span className="rounded-md bg-[var(--accent-soft)] px-3 py-2 text-xs font-black text-[var(--accent)]">Live model QA</span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {["Risk confidence", "Guideline match", "Data freshness"].map((label, index) => (
          <div className="card p-4" key={label}>
            <p className="text-xs font-bold text-[var(--muted)]">{label}</p>
            <p className="mt-2 text-3xl font-black">{[92, 88, 97][index]}%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-strong)]">
              <div className="pulse-line h-full origin-left rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" style={{ width: `${[92, 88, 97][index]}%`, animationDelay: `${index * 180}ms` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-4">
          <div className="flex items-end gap-2">
            {[46, 68, 52, 81, 74, 96, 84, 91].map((height, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={height}>
                <span className="metric-bar w-full rounded-t-md bg-gradient-to-t from-[var(--primary)] to-[var(--accent)]" style={{ height: `${height * 1.25}px`, animationDelay: `${index * 90}ms` }} />
                <span className="text-[10px] font-bold text-[var(--muted)]">Q{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-4">
          {["Claims anomaly queue", "Clinical policy review", "Care-gap cohort"].map((item, index) => (
            <div className="flex items-center justify-between border-b border-[var(--line)] py-3 last:border-0" key={item}>
              <span className="text-sm font-bold">{item}</span>
              <span className="rounded-md bg-[var(--surface-strong)] px-2 py-1 text-xs font-black text-[var(--primary)]">{[24, 11, 39][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MetricsStrip() {
  return (
    <section className="section pt-0">
      <div className="grid gap-4 md:grid-cols-4">
        {site.metrics.map((metric) => (
          <div className="metric-card card p-5" key={metric.label}>
            <p className="text-4xl font-black text-[var(--primary)]"><AnimatedCounter value={metric.value} /></p>
            <p className="mt-2 font-black">{metric.label}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductGrid({ products = site.products }: { products?: Product[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link className="product-card card group p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]" href={`/products/${product.slug}`} key={product.slug}>
          <span className="product-glow" />
          <p className="text-xl font-black">{product.name}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.summary}</p>
          <p className="mt-5 text-sm font-black text-[var(--primary)]">View product</p>
        </Link>
      ))}
    </div>
  );
}

export function SolutionGrid({ solutions = site.solutions }: { solutions?: Solution[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <Link className="solution-card card p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]" href={`/solutions/${solution.slug}`} key={solution.slug}>
          <p className="text-xl font-black">{solution.name}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{solution.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {solution.priorities.slice(0, 2).map((priority) => <span className="rounded-md bg-[var(--surface-strong)] px-2 py-1 text-xs font-bold text-[var(--muted)]" key={priority}>{priority}</span>)}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{body}</p>
    </div>
  );
}

export function PlatformLayers() {
  return (
    <section className="section">
      <SectionIntro eyebrow="Platform" title={site.platform.title} body="The architecture is designed around governed ingestion, quality checks, explainable intelligence, and workflow delivery for enterprise healthcare teams." />
      <div className="grid gap-4 md:grid-cols-4">
        {site.platform.layers.map((layer) => (
          <div className="card p-5" key={layer.name}>
            <p className="font-black">{layer.name}</p>
            <div className="mt-4 grid gap-2">
              {layer.items.map((item) => <span className="rounded-md bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--muted)]" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {site.caseStudies.map((study) => (
        <div className="card p-6" key={study.title}>
          <span className="rounded-md bg-[var(--accent-soft)] px-2 py-1 text-xs font-black text-[var(--accent)]">{study.status}</span>
          <p className="mt-5 text-xl font-black">{study.title}</p>
          <p className="mt-2 text-sm font-bold text-[var(--primary)]">{study.segment}</p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{study.result}</p>
        </div>
      ))}
    </div>
  );
}

export function TrustGrid() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {site.trust.map((item) => (
        <div className="card flex items-center gap-3 p-4" key={item}>
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]" />
          <span className="font-bold">{item}</span>
        </div>
      ))}
    </div>
  );
}
