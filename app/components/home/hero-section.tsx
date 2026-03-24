import { flowDiagram, pillars, platformStats } from "./content";

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
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
              {flowDiagram.map((item, index) => (
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
    </section>
  );
}
