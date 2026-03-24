"use client";

import { useEffect, useState } from "react";

import { ArchitectureSection } from "./components/home/architecture-section";
import { CtaSection } from "./components/home/cta-section";
import { FlowsSection } from "./components/home/flows-section";
import { Footer } from "./components/home/footer";
import { HeroSection } from "./components/home/hero-section";
import { Navbar } from "./components/home/navbar";
import { PricingSection } from "./components/home/pricing-section";
import SyncUser from "./components/sync-user";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "lam-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <SyncUser />
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <Navbar currentTheme={theme} onToggleTheme={toggleTheme} />
        <HeroSection />
        <ArchitectureSection />
        <FlowsSection />
        <PricingSection />
        <CtaSection />
        <Footer />
      </section>
    </main>
  );
}
