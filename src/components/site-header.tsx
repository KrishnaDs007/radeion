import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const productLinks = [
  "Risk Analytics",
  "Clinical Decision Support",
  "Population Health",
  "Fraud, Waste & Abuse",
  "Care Management",
  "Revenue Cycle Analytics",
];

const solutionLinks = [
  "Payers & Health Plans",
  "Health Systems & Hospitals",
  "ACOs & Value-Based Care",
  "Self-Insured Employers",
  "Government & Medicaid",
];

const mobileGroups = [
  { title: "Products", href: "/products", items: productLinks },
  { title: "Solutions", href: "/solutions", items: solutionLinks },
  { title: "Resources", href: "/resources", items: ["Resource center", "Security", "Privacy"] },
  { title: "Company", href: "/company", items: ["Company overview", "Contact", "Request demo"] },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Radeion home">
          <Image src="/radeion-wordmark.png" alt="Radeion.ai logo" width={255} height={58} priority className="theme-logo h-8 w-auto object-contain sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link className="nav-trigger" href="/">Home</Link>

          <div className="nav-group">
            <Link className="nav-trigger" href="/products">Products <span aria-hidden>▾</span></Link>
            <MegaMenu title="Products" kicker="Intelligence modules" href="/products" items={productLinks} />
          </div>

          <div className="nav-group">
            <Link className="nav-trigger" href="/solutions">Solutions <span aria-hidden>▾</span></Link>
            <MegaMenu title="Solutions" kicker="By organization" href="/solutions" items={solutionLinks} />
          </div>

          <div className="nav-group">
            <Link className="nav-trigger" href="/resources">Resources <span aria-hidden>▾</span></Link>
            <MegaMenu title="Resources" kicker="Research and trust" href="/resources" items={["Resource center", "Security", "Privacy"]} />
          </div>

          <div className="nav-group">
            <Link className="nav-trigger" href="/company">Company <span aria-hidden>▾</span></Link>
            <MegaMenu title="Company" kicker="About Radeion" href="/company" items={["Company overview", "Contact", "Request demo"]} />
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link className="button-primary hidden sm:inline-flex" href="/demo">
            Request demo
          </Link>
          <MobileMenu groups={mobileGroups} />
        </div>
      </div>
    </header>
  );
}

function MegaMenu({ title, kicker, href, items }: { title: string; kicker: string; href: string; items: string[] }) {
  return (
    <div className="mega-menu">
      <div className="mega-menu-inner">
        <div className="mega-menu-panel">
          <p className="eyebrow">{kicker}</p>
          <p className="mt-3 text-2xl font-black">{title}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Open the main page for full details, then update sections directly in the page files.
          </p>
        </div>
        <div className="mega-menu-links">
          {items.map((item) => (
            <Link className="mega-menu-link" href={getMenuHref(item, href)} key={item}>
              <span className="font-black">{item}</span>
              <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">View this section on the main {title.toLowerCase()} page.</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function getMenuHref(item: string, fallbackHref: string) {
  if (item === "Security") return "/security";
  if (item === "Privacy") return "/privacy";
  if (item === "Request demo") return "/demo";
  if (item === "Contact") return "/company#contact";
  return fallbackHref;
}
