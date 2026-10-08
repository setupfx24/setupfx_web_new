"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

/** Matches the key read by the inline script in `src/app/layout.tsx`. */
export const THEME_STORAGE_KEY = "setupfx-theme";

const SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";

/** Subscribers in this tab, since `storage` events only fire in other tabs. */
const listeners = new Set<() => void>();

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). Fall back to the system.
    return null;
  }
}

/** The theme in force: an explicit choice if there is one, otherwise the system setting. */
function getSnapshot(): Theme {
  return readStoredTheme() ?? (window.matchMedia(SYSTEM_DARK_QUERY).matches ? "dark" : "light");
}

/** The server cannot know the theme, so the first render has no value to show. */
function getServerSnapshot(): null {
  return null;
}

function subscribe(onStoreChange: () => void): () => void {
  const media = window.matchMedia(SYSTEM_DARK_QUERY);

  listeners.add(onStoreChange);
  media.addEventListener("change", onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener("change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/**
 * Reads and writes the colour theme.
 *
 * `theme` is `null` on the server and for the first client render, because the active
 * theme is only known in the browser. Colours are handled entirely in CSS, so nothing
 * flashes while we wait — only labels that name the current theme need this value.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Not being able to remember the choice is not worth failing the interaction.
    }

    for (const listener of listeners) listener();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, [setTheme]);

  return { theme, toggleTheme };
}
