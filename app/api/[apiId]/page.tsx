import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarketplaceHeader } from "@/app/components/marketplace/marketplace-header";
import { apiRecords, findApiBySlug } from "@/app/lib/apis";

type ApiDetailPageProps = {
  params: Promise<{
    apiId: string;
  }>;
};

export function generateStaticParams() {
  return apiRecords.map((api) => ({
    apiId: api.slug,
  }));
}

export default async function ApiDetailPage({ params }: ApiDetailPageProps) {
  const { apiId } = await params;
  const api = findApiBySlug(apiId);

  if (!api) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-16 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <MarketplaceHeader />

        <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-surface-strong p-8 shadow-[var(--card-shadow)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                {api.category}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  api.pricing === "Paid"
                    ? "bg-foreground text-background"
                    : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                }`}
              >
                {api.pricing}
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                {api.rateLimit}
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-muted uppercase">
                API detail
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {api.name}
              </h1>
              <p className="mt-4 text-lg leading-8 text-muted">{api.tagline}</p>
            </div>

            <p className="max-w-3xl text-base leading-8 text-foreground/80">{api.description}</p>

            <div className="flex flex-wrap gap-2">
              {api.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Price</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">
                  {api.priceMonthly ? `$${api.priceMonthly}/mo` : "Free"}
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Uses</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">
                  {api.uses.toLocaleString()}
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Rating</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">
                  {api.rating.toFixed(1)} / 5
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Reviews</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{api.reviewCount}</dd>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Author</dt>
                <dd className="mt-2 text-lg font-semibold text-foreground">{api.author}</dd>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-surface p-4">
                <dt className="text-sm text-muted">Uploaded at</dt>
                <dd className="mt-2 text-lg font-semibold text-foreground">{api.uploadedAt}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/api"
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong dark:text-slate-950"
              >
                Back to APIs
              </Link>
              <Link
                href={`/search?q=${encodeURIComponent(api.category)}`}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                Find similar APIs
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-border">
            <Image
              src={api.image}
              alt={api.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-surface-strong p-8 shadow-[var(--card-shadow)] sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-muted uppercase">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                What developers are saying
              </h2>
            </div>
            <p className="text-sm text-muted">
              {api.reviewCount} reviews | average {api.rating.toFixed(1)} / 5
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {api.reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-[1.75rem] border border-border bg-surface p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-foreground">{review.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {review.author} | {review.createdAt}
                    </p>
                  </div>
                  <div className="rounded-full border border-border px-3 py-1 text-sm font-medium text-foreground">
                    Rating {review.rating.toFixed(1)}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/80">{review.comment}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
