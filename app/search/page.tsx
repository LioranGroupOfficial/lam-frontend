import Link from "next/link";

import { ApiCard } from "@/app/components/marketplace/api-card";
import { MarketplaceHeader } from "@/app/components/marketplace/marketplace-header";
import { filterApis } from "@/app/lib/apis";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const apiList = filterApis({ query, sort: "rating" });

  return (
    <main className="min-h-screen px-6 pb-16 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <MarketplaceHeader />

        <section className="rounded-[2rem] border border-border bg-surface-strong p-8 shadow-[var(--card-shadow)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.28em] text-muted uppercase">
            Search
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Search APIs across the marketplace.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Start with a keyword and jump straight into the APIs that match your use case.
          </p>

          <form className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-border bg-surface p-4 sm:flex-row">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Try weather, finance, moderation, logistics..."
              className="h-12 flex-1 rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong dark:text-slate-950"
            >
              Search APIs
            </button>
            <Link
              href="/api"
              className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              Advanced filters
            </Link>
          </form>

          <p className="mt-4 text-sm text-muted">
            {query ? `Showing results for "${query}"` : "Showing all APIs ranked by rating"}
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          {apiList.map((api) => (
            <ApiCard key={api.id} api={api} />
          ))}
        </section>
      </div>
    </main>
  );
}
