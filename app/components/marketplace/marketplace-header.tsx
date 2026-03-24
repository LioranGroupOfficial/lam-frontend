import Link from "next/link";

export function MarketplaceHeader() {
  return (
    <header className="sticky top-4 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-surface/80 px-4 py-3 shadow-[var(--card-shadow)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white dark:text-slate-950">
            LAM
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
              Lioran Group
            </p>
            <p className="text-sm text-foreground/80">API Marketplace</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/api"
            className="rounded-full px-4 py-2 text-muted transition hover:bg-surface hover:text-foreground"
          >
            Browse APIs
          </Link>
          <Link
            href="/search"
            className="rounded-full border border-border bg-surface-strong px-4 py-2 font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
