import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
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

export const metadata: Metadata = {
  title: "Radeion.ai | Healthcare intelligence platform",
  description: "A B2B healthcare intelligence platform for clinical decisions, risk analytics, quality assurance, and governed automation.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/radeion_r_logo_white.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/radeion_r_logo_white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Image src="/radeion-wordmark.png" alt="Radeion.ai logo" width={230} height={52} className="h-11 w-auto object-contain" />
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
