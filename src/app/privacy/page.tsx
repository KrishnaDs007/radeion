import { SectionIntro } from "@/components/sections";

export default function PrivacyPage() {
  return (
    <main className="section">
      <SectionIntro eyebrow="Privacy" title="Privacy policy placeholder." body="This page gives the product a visible privacy surface while legal, HIPAA, BAA, and data-processing language are reviewed." />
      <div className="card p-6">
        <p className="text-2xl font-black">Draft policy areas</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {["Data collected from demo requests", "Healthcare data handling boundaries", "Administrative safeguards", "AI evaluation and review records", "Vendor and subprocessors", "Data retention and deletion"].map((item) => (
            <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 font-bold text-[var(--muted)]" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
