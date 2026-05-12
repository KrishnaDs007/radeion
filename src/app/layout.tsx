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

export const metadata: Metadata = {
  metadataBase: new URL("https://radeion.ai"),
  applicationName: "Radeion.ai",
  title: {
    default: "Radeion.ai | Healthcare Intelligence Platform",
    template: "%s | Radeion.ai",
  },
  description: "A B2B healthcare intelligence platform for clinical decisions, risk analytics, quality assurance, and governed automation.",
  keywords: [
    "healthcare intelligence platform",
    "clinical decision support",
    "risk analytics",
    "population health analytics",
    "healthcare AI",
    "payer analytics",
    "value based care",
    "fraud waste abuse detection",
    "revenue cycle analytics",
    "FHIR healthcare platform",
  ],
  authors: [{ name: "Radeion.ai" }],
  creator: "Radeion.ai",
  publisher: "Radeion.ai",
  category: "Healthcare Technology",
  alternates: {
    canonical: "/",
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
    url: "https://radeion.ai",
    siteName: "Radeion.ai",
    title: "Radeion.ai | Healthcare Intelligence Platform",
    description: "Unify clinical decisions, risk analytics, quality assurance, and governed automation for B2B healthcare teams.",
    images: [
      {
        url: "/radeion-wordmark.png",
        width: 1393,
        height: 282,
        alt: "Radeion.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radeion.ai | Healthcare Intelligence Platform",
    description: "AI-ready healthcare intelligence for risk, quality, clinical decision support, and operational assurance.",
    images: ["/radeion-wordmark.png"],
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
