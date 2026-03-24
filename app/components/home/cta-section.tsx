export function CtaSection() {
  return (
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
  );
}
