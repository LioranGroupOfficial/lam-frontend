import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { ApiRecord } from "@/app/lib/apis";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-foreground">
      <span className="text-base text-amber-500">*</span>
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function ApiCard({ api }: { api: ApiRecord }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border bg-surface-strong shadow-[var(--card-shadow)] transition duration-200 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden border-b border-border">
        <Image
          src={api.image}
          alt={api.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <MetaPill>{api.rateLimit}</MetaPill>
          <div className="flex gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                api.pricing === "Paid"
                  ? "bg-foreground text-background"
                  : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              }`}
            >
              {api.pricing}
            </span>
            <MetaPill>{api.category}</MetaPill>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{api.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{api.tagline}</p>
          </div>
          <StarRating rating={api.rating} />
        </div>

        <p className="text-sm leading-6 text-foreground/80">{api.description}</p>

        <div className="flex flex-wrap gap-2">
          {api.tags.map((tag) => (
            <MetaPill key={tag}>#{tag}</MetaPill>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm text-muted sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Author</dt>
            <dd className="mt-1 font-semibold text-foreground">{api.author}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Uploaded</dt>
            <dd className="mt-1 font-semibold text-foreground">{api.uploadedAt}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Price</dt>
            <dd className="mt-1 font-semibold text-foreground">
              {api.priceMonthly ? `$${api.priceMonthly}/mo` : "Free"}
            </dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Uses</dt>
            <dd className="mt-1 font-semibold text-foreground">{api.uses.toLocaleString()}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Reviews</dt>
            <dd className="mt-1 font-semibold text-foreground">{api.reviewCount}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <dt>Rating</dt>
            <dd className="mt-1 font-semibold text-foreground">{api.rating.toFixed(1)} / 5</dd>
          </div>
        </dl>

        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {api.featured ? "Featured API" : "New in marketplace"}
          </p>
          <Link
            href={`/api/${api.slug}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-strong dark:text-slate-950"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
