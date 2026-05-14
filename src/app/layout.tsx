import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem("radeion-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

const scrollScript = `
window.addEventListener("popstate", function () {
  requestAnimationFrame(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
`;

const siteUrl = "https://www.radeion.ai";
const siteHomeUrl = `${siteUrl}/`;
const siteImageUrl = `${siteUrl}/radeion-wordmark.png`;
const siteDescription =
  "Radeion.ai helps healthcare enterprises unify clinical decision support, AI evaluation workflows, quality assurance, risk intelligence, and governed automation across payer, provider, ACO, employer, and public-sector teams.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Radeion.ai",
    url: siteHomeUrl,
    logo: siteImageUrl,
    description: siteDescription,
    slogan: "Radiant Intelligence in Action",
    sameAs: [siteHomeUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Radeion.ai",
    url: siteHomeUrl,
    description: siteDescription,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Radeion.ai",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radeion.ai Healthcare Intelligence Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteHomeUrl,
    description: siteDescription,
    offers: {
      "@type": "Offer",
      description: "Enterprise pricing is provided through a custom demo and consultation.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Custom enterprise pricing",
      },
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Healthcare enterprises, payers, providers, ACOs, employers, and public-sector healthcare teams",
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Radeion.ai",
  title: {
    default: "Radeion.ai | Healthcare AI Intelligence and Quality Automation",
    template: "%s | Radeion.ai",
  },
  description: siteDescription,
  keywords: [
    "Radeion.ai",
    "healthcare intelligence platform",
    "healthcare AI platform",
    "clinical decision support",
    "risk analytics",
    "AI evaluations healthcare",
    "quality assurance automation",
    "healthcare data quality",
    "population health analytics",
    "healthcare workflow automation",
    "payer analytics",
    "provider analytics",
    "ACO analytics",
    "value based care",
    "healthcare compliance automation",
    "revenue cycle analytics",
    "FHIR healthcare platform",
    "enterprise healthcare SaaS",
  ],
  authors: [{ name: "Radeion.ai" }],
  creator: "Radeion.ai",
  publisher: "Radeion.ai",
  referrer: "origin-when-cross-origin",
  category: "Healthcare Technology",
  classification: "Enterprise healthcare artificial intelligence, clinical decision support, data quality, and automation platform",
  abstract: "Enterprise B2B healthcare intelligence for clinical decision support, AI evaluations, risk insight, quality assurance, and governed automation.",
  alternates: {
    canonical: siteHomeUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteHomeUrl,
    siteName: "Radeion.ai",
    title: "Radeion.ai | Healthcare AI Intelligence and Quality Automation",
    description: siteDescription,
    images: [
      {
        url: siteImageUrl,
        width: 1393,
        height: 282,
        alt: "Radeion.ai healthcare intelligence platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radeion.ai | Healthcare AI Intelligence and Quality Automation",
    description: siteDescription,
    images: [siteImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "business:contact_data:website": siteHomeUrl,
    "canonical:domain": siteHomeUrl,
    "industry": "Healthcare Technology",
    "product:type": "Enterprise SaaS",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fd" },
    { media: "(prefers-color-scheme: dark)", color: "#061026" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: scrollScript,
          }}
        />
        <SiteHeader />
        {children}
        <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Image src="/radeion-wordmark.png" alt="Radeion.ai logo" width={230} height={52} className="theme-logo h-11 w-auto object-contain" />
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
                Radeion.ai is a B2B healthcare intelligence platform for clinical decisions, risk analytics, quality assurance, and governed automation.
              </p>
            </div>
            <div>
              <p className="text-sm font-black">Site</p>
              <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/solutions">Solutions</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/company">Company</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-black">Trust</p>
              <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                <Link href="/security">Security</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/demo">Demo request</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
