import { SectionIntro, TrustGrid } from "@/components/sections";

export default function SecurityPage() {
  return (
    <main className="section">
      <SectionIntro eyebrow="Security" title="Security and compliance scaffold." body="This page is intentionally prepared early so Radeion can document controls as the product, policies, and certifications mature." />
      <TrustGrid />
      <div className="card mt-6 p-6">
        <p className="text-2xl font-black">Current placeholder controls</p>
        <p className="mt-4 leading-7 text-[var(--muted)]">Role-based access, audit logging, data lineage, encryption planning, AI evaluation records, and implementation review workflows should be expanded here before production use.</p>
      </div>
    </main>
  );
}
