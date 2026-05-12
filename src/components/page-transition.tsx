"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 40);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="page-transition" key={pathname}>
      {children}
    </div>
  );
}
