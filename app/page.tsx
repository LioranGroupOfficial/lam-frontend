"use client";

import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import SyncUser from "./components/sync-user";

const platformStats = [
  { value: "5 min", label: "SDK integration time" },
  { value: "2.5%", label: "Early provider commission" },
  { value: "12h", label: "Free API verification" },
  { value: "78h", label: "Paid API production review" },
];

const pillars = [
  "Discovery layer for indie and production APIs",
  "Authentication, wallet checks, and access control",
  "Usage metering, billing events, and fraud detection",
  "Single SDK for consumers and providers",
];

const flows = [
  {
    eyebrow: "Consumer mode",
    title: "One SDK call, one API key, any verified API.",
    description:
      "Developers plug in `lam-express`, select an API by slug, and let LAM handle validation, billing, and forwarding behind the scenes.",
    steps: [
      "Attach the consumer API key from the dashboard",
      "Validate subscription and wallet balance before forwarding",
      "Meter each request and deduct only what was used",
    ],
  },
  {
    eyebrow: "Provider mode",
    title: "Keep your infra. Monetize without rebuilding your stack.",
    description:
      "Providers wrap their existing Express service, define pricing, and let LAM manage trust, monetization, and access enforcement.",
    steps: [
      "Host and scale the API on your own server",
      "Add provider credentials and drop in middleware",
      "Receive production verification and retain revenue",
    ],
  },
];

const pricing = [
  { name: "Consumers", amount: "₹49/mo", detail: "Unlock paid API access across the marketplace." },
  { name: "Wallet", amount: "₹100+", detail: "Deposit balance with GST and pay per request." },
  { name: "Providers", amount: "₹249/mo", detail: "Production listing license with 100% revenue retained." },
];

const trustSignals = [
  "API key hashing and HMAC signing",
  "Wallet pre-check before request forwarding",
  "Rate limiting and abuse detection",
  "Verification badges for contributor and production APIs",
];

type Theme = "light" | "dark";

export default function Home() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme: Theme = root.classList.contains("dark") ? "dark" : "light";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;
    localStorage.setItem("lam-theme", nextTheme);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <SyncUser />
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-surface/80 px-4 py-3 shadow-[var(--card-shadow)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white dark:text-slate-950">
                LAM
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
                  Lioran Group
                </p>
                <p className="text-sm text-foreground/80">API Marketplace</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#pricing"
                className="hidden rounded-full px-4 py-2 text-sm text-muted transition hover:text-foreground sm:inline-flex"
              >
                Pricing
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
                aria-label="Toggle color mode"
              >
                <span>Toggle theme</span>
              </button>
              <SignInButton></SignInButton>
              <UserButton></UserButton>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted shadow-[var(--card-shadow)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              India-first API monetization without infra lock-in
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                LAM • Lightweight by design
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                Discover, ship, and monetize APIs through one clean access layer.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                LAM is the developer-first marketplace for India&apos;s API economy. Providers keep
                their own infrastructure. Consumers get one SDK, wallet-based billing, and a faster
                way to start building.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#architecture"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong dark:text-slate-950"
              >
                Explore the platform
              </a>
              <a
                href="#flows"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                See consumer and provider flows
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {platformStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] border border-border bg-surface p-5 shadow-[var(--card-shadow)]"
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-spotlight blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface-strong p-6 shadow-[var(--card-shadow)]">
              <div className="rounded-[1.5rem] border border-border bg-background/70 p-5">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold tracking-[0.24em] text-muted uppercase">
                  <span>Logical flow</span>
                  <span>SDK-led</span>
                </div>

                <div className="space-y-3">
                  {["Client App", "LAM SDK", "LAM Server", "Provider API"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 font-mono text-sm text-accent">
                        0{index + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-border bg-surface px-4 py-3">
                        <p className="font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="rounded-[1.25rem] border border-border bg-background/60 px-4 py-3 text-sm text-foreground/85"
                  >
                    {pillar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section
          id="architecture"
          className="mt-20 grid gap-6 rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--card-shadow)] lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
              Architecture overview
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              LAM forwards trust, not provider infrastructure.
            </h2>
            <p className="text-base leading-7 text-muted">
              The platform sits between the consuming app and the provider server to validate
              access, meter usage, process wallet billing, and preserve a consistent SDK layer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Discovery layer",
              "Authentication and access control",
              "Usage metering and billing engine",
              "Wallet and fraud detection",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-border bg-background/65 p-5"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="flows" className="mt-20 grid gap-6 lg:grid-cols-2">
          {flows.map((flow) => (
            <article
              key={flow.title}
              className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--card-shadow)]"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
                {flow.eyebrow}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{flow.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{flow.description}</p>
              <div className="mt-6 space-y-3">
                {flow.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-border bg-background/60 px-4 py-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white dark:text-slate-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-foreground/85">{step}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div
            id="pricing"
            className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--card-shadow)]"
          >
            <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
              Pricing model
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Wallet-first for consumers. Revenue-first for providers.
            </h3>
            <div className="mt-6 grid gap-4">
              {pricing.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] border border-border bg-background/65 p-5"
                >
                  <div className="flex items-end justify-between gap-3">
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{item.amount}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--card-shadow)]">
            <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
              Security and trust
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Verification that matches the kind of API being sold.
            </h3>
            <div className="mt-6 grid gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-[1.25rem] border border-border bg-background/60 px-4 py-4 text-sm leading-6 text-foreground/85"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-border bg-[linear-gradient(135deg,rgba(15,118,110,0.14),transparent_55%),var(--surface-strong)] p-8 shadow-[var(--card-shadow)]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
                Long-term positioning
              </p>
              <h3 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                The monetization layer for India&apos;s next wave of indie APIs.
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted">
              LAM is not a hosting platform or cloud provider. It is the marketplace, billing,
              verification, and SDK experience that makes API businesses easier to launch.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
