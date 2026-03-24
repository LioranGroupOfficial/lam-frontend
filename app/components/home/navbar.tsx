import { Show, SignInButton, UserButton } from "@clerk/nextjs";

type NavbarProps = {
  currentTheme: "light" | "dark";
  onToggleTheme: () => void;
};

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <path
        d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23L5.46 5.46"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M20.2 14.2A8.5 8.5 0 0 1 9.8 3.8a8.5 8.5 0 1 0 10.4 10.4Z"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function Navbar({ currentTheme, onToggleTheme }: NavbarProps) {
  return (
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
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-strong text-foreground transition hover:border-accent/40 hover:text-accent"
            aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
          >
            {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent">
                Sign in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}
