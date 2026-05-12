import { ContactForm } from "@/components/contact-form";
import { SectionIntro, TrustGrid } from "@/components/sections";

export default function CompanyPage() {
  return (
    <main>
      <section className="section">
        <SectionIntro eyebrow="Company" title="Radeion is being built for future-safe healthcare intelligence." body="The company direction combines enterprise SaaS discipline, premium consulting clarity, and AI-data depth for organizations that need quality-assured healthcare decisions." />
        <div className="grid gap-4 md:grid-cols-3">
          {["Governed automation", "Readable data products", "Clinical and operational QA"].map((item) => (
            <div className="card p-6" key={item}>
              <p className="text-xl font-black">{item}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">A core operating principle for how Radeion should be evaluated, implemented, and trusted by enterprise healthcare teams.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <SectionIntro eyebrow="Trust" title="Compliance and assurance roadmap." body="These trust surfaces are scaffolded for review and future expansion as policies, certifications, and client requirements become concrete." />
        <TrustGrid />
      </section>
      <section className="section pt-0" id="contact">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro eyebrow="Contact" title="Start a Radeion conversation." body="Use this company contact form for partnerships, platform questions, early client discovery, or healthcare data automation discussions." />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
