"use client";

import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import { ThemeToggle } from "@/components/theme-toggle";

const menuGroups = [
  {
    label: "Products",
    href: "/products",
    kicker: "Intelligence modules",
    items: site.products.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
      description: product.summary,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    kicker: "By organization",
    items: site.solutions.map((solution) => ({
      label: solution.name,
      href: `/solutions/${solution.slug}`,
      description: solution.summary,
    })),
  },
  {
    label: "Resources",
    href: "/resources",
    kicker: "Research and proof",
    items: [
      { label: "Case study concepts", href: "/resources", description: "Starter structures for future validated outcomes." },
      { label: "Security", href: "/security", description: "Trust, compliance, and assurance roadmap." },
      { label: "Privacy", href: "/privacy", description: "Policy surfaces for future legal review." },
    ],
  },
  {
    label: "Company",
    href: "/company",
    kicker: "About Radeion",
    items: [
      { label: "Company overview", href: "/company", description: "Operating principles and enterprise direction." },
      { label: "Contact", href: "/company#contact", description: "Talk with the team about a workflow or partnership." },
      { label: "Request demo", href: "/demo", description: "Share your use case and segment." },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Radeion home">
          <Image src="/radeion-wordmark.png" alt="Radeion.ai logo" width={255} height={58} priority className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link className="nav-trigger" href="/">
            Home
          </Link>
          {menuGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <Link className="nav-trigger" href={group.href}>
                {group.label}
                <span aria-hidden>▾</span>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-menu-panel">
                    <p className="eyebrow">{group.kicker}</p>
                    <p className="mt-3 text-2xl font-black">{group.label}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      Navigate by workflow, buyer segment, or trust surface without losing context.
                    </p>
                  </div>
                  <div className="mega-menu-links">
                    {group.items.map((item) => (
                      <Link className="mega-menu-link" href={item.href} key={item.href}>
                        <span className="font-black">{item.label}</span>
                        <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link className="button-primary hidden sm:inline-flex" href="/demo">
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}
