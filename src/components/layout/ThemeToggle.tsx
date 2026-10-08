"use client";

import { chrome } from "@/content/common";
import { useTheme } from "@/hooks/use-theme";

/**
 * The two icons are swapped in CSS through the `dark` variant, so the correct one shows
 * on the server-rendered HTML. Only the label waits for the mounted theme value.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label =
    theme === null
      ? chrome.toggleTheme
      : theme === "dark"
        ? chrome.toggleToLight
        : chrome.toggleToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
    >
      <SunIcon className="size-5 dark:hidden" />
      <MoonIcon className="hidden size-5 dark:block" />
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
