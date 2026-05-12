import { SectionIntro, SolutionGrid } from "@/components/sections";

export default function SolutionsPage() {
  return (
    <main className="section">
      <SectionIntro eyebrow="Solutions" title="Segment-specific views for enterprise healthcare buyers." body="Each solution reframes the same product foundation around the language and priorities of a specific B2B healthcare organization." />
      <SolutionGrid />
    </main>
  );
}
