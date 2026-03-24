import Link from "next/link";

import { ApiCard } from "@/app/components/marketplace/api-card";
import { MarketplaceHeader } from "@/app/components/marketplace/marketplace-header";
import { apiCategories, filterApis } from "@/app/lib/apis";

type ApiPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    pricing?: string;
    sort?: string;
  }>;
};

export default async function ApiMarketplacePage({ searchParams }: ApiPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const category = params.category ?? "";
  const pricing = params.pricing ?? "";
  const sort = params.sort ?? "popular";
  const apiList = filterApis({ query, category, pricing, sort });

  return (
    <main className="min-h-screen px-6 pb-16 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <MarketplaceHeader />

        <section className="overflow-hidden rounded-[2rem] border border-border bg-surface-strong p-8 shadow-[var(--card-shadow)] sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.28em] text-muted uppercase">
              API directory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Browse APIs with filters, pricing, ratings, and review signals.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Explore all available marketplace APIs, compare the free and paid options,
              and drill into detail pages before integrating.
            </p>
          </div>

          <form className="mt-8 grid gap-4 rounded-[1.75rem] border border-border bg-surface p-4 lg:grid-cols-[2fr_repeat(3,minmax(0,1fr))]">
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Search APIs
              <input
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Search by API name, author, tag, or category"
                className="h-12 rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-accent"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Category
              <select
                name="category"
                defaultValue={category}
                className="h-12 rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-accent"
              >
                <option value="">All categories</option>
                {apiCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Pricing
              <select
                name="pricing"
                defaultValue={pricing}
                className="h-12 rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-accent"
              >
                <option value="">Free + paid</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Sort by
              <select
                name="sort"
                defaultValue={sort}
                className="h-12 rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-accent"
              >
                <option value="popular">Most used</option>
                <option value="rating">Highest rated</option>
                <option value="latest">Latest upload</option>
              </select>
            </label>

            <div className="flex flex-wrap items-center gap-3 lg:col-span-full">
              <button
                type="submit"
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong dark:text-slate-950"
              >
                Apply filters
              </button>
              <Link
                href="/api"
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                Reset
              </Link>
              <p className="text-sm text-muted">{apiList.length} APIs found</p>
            </div>
          </form>
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
