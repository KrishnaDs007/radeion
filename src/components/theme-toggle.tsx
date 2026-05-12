"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

function applyTheme(nextTheme: Theme) {
  const root = document.documentElement;
  root.removeAttribute("data-theme");
  if (nextTheme !== "system") {
    root.setAttribute("data-theme", nextTheme);
  }
  window.localStorage.setItem("radeion-theme", nextTheme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (window.localStorage.getItem("radeion-theme") as Theme | null) ?? "system";
  });
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    applyTheme(theme);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolve = () => setResolvedTheme(theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme);
    resolve();
    mediaQuery.addEventListener("change", resolve);
    return () => mediaQuery.removeEventListener("change", resolve);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-switch"
      data-mode={resolvedTheme}
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      aria-label={`Switch theme. Current theme is ${resolvedTheme}`}
    >
      <span className="theme-icon theme-sun" aria-hidden>
        <svg viewBox="0 0 24 24" role="img">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
        </svg>
      </span>
      <span className="theme-thumb" aria-hidden />
      <span className="theme-icon theme-moon" aria-hidden>
        <svg viewBox="0 0 24 24" role="img">
          <path d="M20.4 14.7A8.4 8.4 0 0 1 9.3 3.6 8.5 8.5 0 1 0 20.4 14.7Z" />
        </svg>
      </span>
    </button>
  );
}
