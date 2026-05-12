import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";

export const products = [
  {
    name: "Risk Analytics",
    summary: "Risk scoring, documentation review, and performance intelligence for value-based care teams.",
    features: ["Risk score simulation", "Coding gap prioritization", "Documentation confidence review", "ACO and Medicare Advantage views"],
  },
  {
    name: "Clinical Decision Support",
    summary: "Evidence-aligned order sets, care pathways, and next-best-action prompts for clinical teams.",
    features: ["Evidence map builder", "Care pathway library", "Clinical policy search", "Review and approval workflow"],
  },
  {
    name: "Population Health",
    summary: "Dashboards that identify cohorts, gaps in care, utilization patterns, and quality trends.",
    features: ["Chronic cohort builder", "Quality measure hub", "Utilization explorer", "Outreach prioritization"],
  },
  {
    name: "Fraud, Waste & Abuse Detection",
    summary: "Explainable anomaly detection for claims, billing patterns, and provider network behavior.",
    features: ["Claims anomaly scoring", "Peer group benchmarking", "Investigation workspace", "Audit packet exports"],
  },
  {
    name: "Care Management",
    summary: "Care-team worklists, chronic condition tracking, and intervention orchestration.",
    features: ["Intervention planner", "Medication reconciliation view", "Condition timeline", "Team handoff notes"],
  },
  {
    name: "Revenue Cycle Analytics",
    summary: "Denial trends, prior authorization intelligence, and reimbursement performance visibility.",
    features: ["Denial analytics", "Authorization workflow metrics", "Contract variance review", "Billing documentation insights"],
  },
];

export const solutions = [
  {
    name: "Payers & Health Plans",
    summary: "Improve risk, quality, network, utilization, and program integrity decisions across health plan operations.",
    priorities: ["Risk adjustment confidence", "FWA detection", "Utilization transparency", "Member quality programs"],
  },
  {
    name: "Health Systems & Hospitals",
    summary: "Support clinical decision-making, quality programs, documentation, and operational review across care settings.",
    priorities: ["Clinical decision support", "Care pathway governance", "Revenue cycle visibility", "Quality improvement"],
  },
  {
    name: "ACOs & Value-Based Care",
    summary: "Coordinate performance across attributed lives, risk contracts, care gaps, and provider engagement.",
    priorities: ["Attributed population views", "Care gap closure", "Risk and quality alignment", "Provider performance analytics"],
  },
  {
    name: "Self-Insured Employers",
    summary: "Understand healthcare spend, program performance, and workforce health trends without direct patient engagement.",
    priorities: ["Cost trend intelligence", "Benefit program performance", "Population health insights", "Vendor evaluation"],
  },
  {
    name: "Government & Medicaid",
    summary: "Modernize public program analytics with governed workflows, transparent quality measurement, and audit-ready reporting.",
    priorities: ["Program integrity", "Quality reporting", "Medicaid analytics", "Policy-aligned review"],
  },
];

export const caseStudies = [
  {
    title: "Health plan risk review concept",
    segment: "Payer",
    result: "Earlier visibility into documentation gaps using AI-evaluated review queues.",
    status: "Sample concept",
  },
  {
    title: "Clinical pathway governance concept",
    segment: "Health system",
    result: "A structured review model for keeping care pathways aligned with current guidance.",
    status: "Sample concept",
  },
  {
    title: "ACO population intelligence concept",
    segment: "Value-based care",
    result: "Unified care-gap, risk, and utilization views for attributed populations.",
    status: "Sample concept",
  },
];

export const trustItems = [
  "HIPAA program design",
  "SOC 2 Type II preparation",
  "HL7/FHIR interoperability",
  "SSO and role-based access",
  "Audit logs and data lineage",
  "AI evaluation governance",
];

export function Hero() {
  return (
    <section className="section hero-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
      <div className="fade-up">
        <div className="brand-kicker">
          <Image src="/radeion-mark.png" alt="" width={52} height={52} className="h-10 w-10 object-contain" />
          <span>Radiant intelligence in action</span>
        </div>
        <p className="eyebrow">Healthcare intelligence for enterprise teams</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] text-[var(--foreground)] md:text-7xl">
          Unify clinical decisions, risk analytics, and operational assurance in one AI-ready platform.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Radeion helps healthcare organizations convert fragmented claims, clinical, and workflow data into explainable insight, governed automation, and measurable quality programs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="button-primary" href="/demo">Request a demo</Link>
          <Link className="button-secondary" href="/products">Explore products</Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["HIPAA-ready architecture", "SOC 2 roadmap", "FHIR-first data model", "Human-reviewed AI evaluations"].map((badge) => (
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
  const metrics = [
    { label: "Enterprise segments supported", value: "5", detail: "Payer, provider, ACO, employer, and government workflows" },
    { label: "Core product modules", value: "6", detail: "From risk analytics to revenue cycle intelligence" },
    { label: "AI evaluation checkpoints", value: "12+", detail: "Model quality, traceability, bias review, and clinical QA gates" },
    { label: "Integration patterns", value: "8", detail: "FHIR, HL7, claims exports, SSO, and warehouse syncs" },
  ];

  return (
    <section className="section pt-0">
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
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

export function ProductGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div className="product-card card group p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]" key={product.name}>
          <span className="product-glow" />
          <p className="text-xl font-black">{product.name}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.summary}</p>
          <div className="mt-5 grid gap-2">
            {product.features.slice(0, 2).map((feature) => (
              <span className="rounded-md bg-[var(--surface-strong)] px-3 py-2 text-xs font-bold text-[var(--muted)]" key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SolutionGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <div className="solution-card card p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]" key={solution.name}>
          <p className="text-xl font-black">{solution.name}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{solution.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {solution.priorities.slice(0, 2).map((priority) => <span className="rounded-md bg-[var(--surface-strong)] px-2 py-1 text-xs font-bold text-[var(--muted)]" key={priority}>{priority}</span>)}
          </div>
        </div>
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
  const layers = [
    { name: "Data ingestion", items: ["FHIR", "HL7", "CSV exports", "Claims files", "Warehouse sync"] },
    { name: "Quality assurance", items: ["Schema checks", "Lineage", "Clinical validation", "Human review"] },
    { name: "AI intelligence", items: ["Explainable models", "LLM search", "Evaluation gates", "Audit trails"] },
    { name: "Workflow delivery", items: ["Dashboards", "Worklists", "APIs", "Role-based review"] },
  ];

  return (
    <section className="section">
      <SectionIntro eyebrow="Platform" title="Built for governed healthcare data" body="The architecture is designed around governed ingestion, quality checks, explainable intelligence, and workflow delivery for enterprise healthcare teams." />
      <div className="grid gap-4 md:grid-cols-4">
        {layers.map((layer) => (
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
      {caseStudies.map((study) => (
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
      {trustItems.map((item) => (
        <div className="card flex items-center gap-3 p-4" key={item}>
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]" />
          <span className="font-bold">{item}</span>
        </div>
      ))}
    </div>
  );
}
