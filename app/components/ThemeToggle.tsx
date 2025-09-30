"use client";

import { useState, useEffect } from "react";

/**
 * ThemeToggle = simple button to switch between light and dark.
 * Persists choice in localStorage so it survives reloads.
 */
export default function ThemeToggle() {
  // Step 1: define state for theme (default = "light")
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Step 2: on first load, check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme as "light" | "dark");
    }
  }, []);

  // Step 3: whenever theme changes, save to localStorage + apply to <body>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  // Step 4: toggle button
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
