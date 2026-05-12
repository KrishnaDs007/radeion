import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
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
  description: site.brand.description,
  icons: {
    icon: '/radeion-mark.png', // Reference a file in the public folder
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
        {children}
        <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Image src="/radeion-wordmark.png" alt="Radeion.ai logo" width={230} height={52} className="h-11 w-auto object-contain" />
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">{site.brand.description}</p>
            </div>
            <div>
              <p className="text-sm font-black">Site</p>
              <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                {site.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
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
