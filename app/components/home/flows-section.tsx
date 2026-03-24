import { flows } from "./content";

export function FlowsSection() {
  return (
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
  );
}
