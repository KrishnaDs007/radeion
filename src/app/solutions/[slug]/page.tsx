import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid, SectionIntro } from "@/components/sections";
import site from "@/data/site.json";

export function generateStaticParams() {
  return site.solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = site.solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <main>
      <section className="section">
        <SectionIntro eyebrow="Solution" title={solution.name} body={solution.summary} />
        <div className="grid gap-4 md:grid-cols-4">
          {solution.priorities.map((priority) => <div className="card p-5 font-black" key={priority}>{priority}</div>)}
        </div>
        <div className="mt-8 flex gap-3">
          <Link className="button-primary" href="/demo">Request demo</Link>
          <Link className="button-secondary" href="/solutions">All solutions</Link>
        </div>
      </section>
      <section className="section pt-0">
        <SectionIntro eyebrow="Relevant modules" title="Product capabilities that support this segment." body="The JSON content can later map specific products to each segment as the offering becomes sharper." />
        <ProductGrid />
      </section>
    </main>
  );
}
