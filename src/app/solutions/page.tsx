import { SectionIntro, SolutionGrid, solutions } from "@/components/sections";

export default function SolutionsPage() {
  return (
    <main>
      <section className="section">
        <SectionIntro eyebrow="Solutions" title="Segment-specific views for enterprise healthcare buyers." body="This is now a simple static page. Edit segment cards directly here or in the simple solutions list inside src/components/sections.tsx." />
        <SolutionGrid />
      </section>
      <section className="section pt-0">
        <div className="grid gap-5">
          {solutions.map((solution) => (
            <div className="card p-6" key={solution.name}>
              <p className="text-2xl font-black">{solution.name}</p>
              <p className="mt-3 leading-7 text-[var(--muted)]">{solution.summary}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                {solution.priorities.map((priority) => (
                  <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 text-sm font-bold text-[var(--muted)]" key={priority}>{priority}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
