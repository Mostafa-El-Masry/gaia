"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useKeyboardShortcuts(toggleTheme: () => void) {
  const router = useRouter();

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      // Toggle theme
      if (event.key === "t") {
        event.preventDefault();
        toggleTheme();
      }

      // Ctrl + G -> Gallery
      if (event.ctrlKey && event.key === "g") {
        event.preventDefault();
        router.push("/gallery");
      }

      // Ctrl + V -> Videos
      if (event.ctrlKey && event.key === "v") {
        event.preventDefault();
        router.push("/videos");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router, toggleTheme]);
}
