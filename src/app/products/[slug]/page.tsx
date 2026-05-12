import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardMockup, SectionIntro } from "@/components/sections";
import site from "@/data/site.json";

export function generateStaticParams() {
  return site.products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = site.products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <section className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro eyebrow="Product" title={product.name} body={product.summary} />
          <p className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 leading-7 text-[var(--muted)]">{product.problem}</p>
          <div className="mt-6 flex gap-3">
            <Link className="button-primary" href="/demo">Request demo</Link>
            <Link className="button-secondary" href="/products">All products</Link>
          </div>
        </div>
        <DashboardMockup />
      </section>
      <section className="section grid gap-4 md:grid-cols-3">
        {product.outcomes.map((outcome) => <div className="card p-5 text-lg font-black" key={outcome}>{outcome}</div>)}
      </section>
      <section className="section grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <p className="text-2xl font-black">Key capabilities</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {product.features.map((feature) => <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 font-bold text-[var(--muted)]" key={feature}>{feature}</span>)}
          </div>
        </div>
        <div className="card p-6">
          <p className="text-2xl font-black">Data inputs</p>
          <div className="mt-5 grid gap-3">
            {product.dataInputs.map((input) => <span className="rounded-md border border-[var(--line)] px-3 py-3 font-bold text-[var(--muted)]" key={input}>{input}</span>)}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="surface rounded-lg p-6">
          <p className="eyebrow">AI evaluation</p>
          <p className="mt-3 text-2xl font-black">{product.aiEvaluation}</p>
        </div>
      </section>
    </main>
  );
}
