import { CaseStudyCards, SectionIntro } from "@/components/sections";

export default function ResourcesPage() {
  return (
    <main className="section">
      <SectionIntro eyebrow="Resources" title="A first-version resource center, ready for MDX later." body="Resources are intentionally lightweight in this version. The structure is present so blog posts, white papers, and case studies can be added after the core positioning is approved." />
      <CaseStudyCards />
      <div className="card mt-6 p-6">
        <p className="text-2xl font-black">Planned content types</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {["Blog articles", "White papers", "Webinars"].map((item) => <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 font-bold text-[var(--muted)]" key={item}>{item}</span>)}
        </div>
      </div>
    </main>
  );
}
