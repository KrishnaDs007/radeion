import { ProductGrid, SectionIntro, products } from "@/components/sections";

export default function ProductsPage() {
  return (
    <main>
      <section className="section">
        <SectionIntro eyebrow="Products" title="Healthcare intelligence modules for clinical, financial, and operational teams." body="This page is intentionally written like a normal website page. Update the product text directly here or in the simple products list inside src/components/sections.tsx." />
        <ProductGrid />
      </section>
      <section className="section pt-0">
        <div className="grid gap-5">
          {products.map((product) => (
            <div className="card p-6" key={product.name}>
              <p className="text-2xl font-black">{product.name}</p>
              <p className="mt-3 leading-7 text-[var(--muted)]">{product.summary}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                {product.features.map((feature) => (
                  <span className="rounded-md bg-[var(--surface-strong)] px-3 py-3 text-sm font-bold text-[var(--muted)]" key={feature}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
