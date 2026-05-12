import { ProductGrid, SectionIntro } from "@/components/sections";

export default function ProductsPage() {
  return (
    <main className="section">
      <SectionIntro eyebrow="Products" title="Healthcare intelligence modules for clinical, financial, and operational teams." body="The initial product architecture is broad by design, matching the needs of enterprise B2B healthcare buyers while keeping each workflow clear and explainable." />
      <ProductGrid />
    </main>
  );
}
