export function Footer() {
  return (
    <footer className="mt-10 border-t border-border/70 pt-6">
      <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-[0.24em] uppercase">LAM</p>
          <p className="mt-1">Marketplace, billing, and verification for API businesses.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-foreground" href="#architecture">
            Architecture
          </a>
          <a className="transition hover:text-foreground" href="#flows">
            Flows
          </a>
          <a className="transition hover:text-foreground" href="#pricing">
            Pricing
          </a>
        </div>
      </div>
    </footer>
  );
}
