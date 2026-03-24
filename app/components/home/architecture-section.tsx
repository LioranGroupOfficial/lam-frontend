import { architectureItems } from "./content";

export function ArchitectureSection() {
  return (
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
          The platform sits between the consuming app and the provider server to validate access,
          meter usage, process wallet billing, and preserve a consistent SDK layer.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {architectureItems.map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-border bg-background/65 p-5">
            <p className="text-lg font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
