"use client";

type Theme = "light" | "dark";

function readTheme(): Theme {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light" || currentTheme === "dark") return currentTheme;

  const savedTheme = window.localStorage.getItem("radeion-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(nextTheme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", nextTheme);
  window.localStorage.setItem("radeion-theme", nextTheme);
}

export function ThemeToggle() {
  function toggleTheme() {
    const theme = readTheme();
    applyTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="theme-switch"
      onClick={toggleTheme}
      type="button"
      title="Switch theme"
      aria-label="Switch theme"
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
