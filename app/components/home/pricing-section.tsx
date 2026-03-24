import { pricing, trustSignals } from "./content";

export function PricingSection() {
  return (
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
  );
}
