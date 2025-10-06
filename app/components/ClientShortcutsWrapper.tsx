"use client";
import { useState, useEffect } from "react";
import { useKeyboardShortcuts } from "./useKeyboardShortcuts";

export default function ClientShortcutsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useKeyboardShortcuts(toggleTheme);

  return <>{children}</>;
}
