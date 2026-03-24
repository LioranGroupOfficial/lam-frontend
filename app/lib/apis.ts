export type ApiPricing = "Free" | "Paid";

export type ApiReview = {
  id: string;
  author: string;
  rating: number;
  createdAt: string;
  title: string;
  comment: string;
};

export type ApiRecord = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  rateLimit: string;
  pricing: ApiPricing;
  category: string;
  priceMonthly: number | null;
  author: string;
  uploadedAt: string;
  uses: number;
  reviewCount: number;
  rating: number;
  tags: string[];
  featured: boolean;
  reviews: ApiReview[];
};

export const apiRecords: ApiRecord[] = [
  {
    id: "weatherstack-pro",
    slug: "weatherstack-pro",
    name: "WeatherStack Pro",
    tagline: "Forecast, alerts, and climate snapshots for global products.",
    description:
      "A weather intelligence API for consumer apps, logistics tools, and travel dashboards. It includes hourly forecasts, severe weather alerts, and historical climate windows.",
    image: "/apis/weatherstack-pro.svg",
    rateLimit: "120 req/min",
    pricing: "Paid",
    category: "Weather",
    priceMonthly: 29,
    author: "Lioran Climate Labs",
    uploadedAt: "2026-03-04",
    uses: 18420,
    reviewCount: 214,
    rating: 4.8,
    tags: ["forecast", "alerts", "geospatial"],
    featured: true,
    reviews: [
      {
        id: "w1",
        author: "Nina, RouteCloud",
        rating: 5,
        createdAt: "2026-03-18",
        title: "Reliable in production",
        comment:
          "The alert payloads are clean and the latency has been steady even during heavy traffic windows.",
      },
      {
        id: "w2",
        author: "Arjun, StayRoam",
        rating: 4,
        createdAt: "2026-03-11",
        title: "Great coverage",
        comment:
          "Coverage is excellent across the regions we care about. We only wish the free trial lasted a little longer.",
      },
    ],
  },
  {
    id: "visionguard-ai",
    slug: "visionguard-ai",
    name: "VisionGuard AI",
    tagline: "Moderation and image safety analysis for uploads at scale.",
    description:
      "Scans user-generated images for unsafe content, violence, and brand risk signals. Useful for social products, marketplaces, and content moderation pipelines.",
    image: "/apis/visionguard-ai.svg",
    rateLimit: "80 req/min",
    pricing: "Paid",
    category: "AI",
    priceMonthly: 49,
    author: "FrameForge Studio",
    uploadedAt: "2026-02-26",
    uses: 9420,
    reviewCount: 96,
    rating: 4.6,
    tags: ["moderation", "vision", "safety"],
    featured: false,
    reviews: [
      {
        id: "v1",
        author: "Sofia, MarketNest",
        rating: 5,
        createdAt: "2026-03-20",
        title: "Fast to integrate",
        comment:
          "We integrated it in one afternoon and immediately reduced manual moderation backlog.",
      },
      {
        id: "v2",
        author: "Daniel, Uplink Social",
        rating: 4,
        createdAt: "2026-03-02",
        title: "Strong baseline model",
        comment:
          "Very good default thresholds. We added our own review queue for edge cases and it works well.",
      },
    ],
  },
  {
    id: "finpilot-exchange",
    slug: "finpilot-exchange",
    name: "FinPilot Exchange",
    tagline: "Currency rates, conversions, and trend candles for finance apps.",
    description:
      "Delivers live FX rates, historical conversion charts, and market session summaries for fintech dashboards and travel payment products.",
    image: "/apis/finpilot-exchange.svg",
    rateLimit: "300 req/min",
    pricing: "Free",
    category: "Finance",
    priceMonthly: null,
    author: "North Axis Data",
    uploadedAt: "2026-01-30",
    uses: 30118,
    reviewCount: 342,
    rating: 4.9,
    tags: ["fx", "currency", "charts"],
    featured: true,
    reviews: [
      {
        id: "f1",
        author: "Marta, WalletSpring",
        rating: 5,
        createdAt: "2026-03-14",
        title: "Excellent free tier",
        comment:
          "The free access is generous enough for prototypes and internal finance tooling.",
      },
      {
        id: "f2",
        author: "Ethan, NomadPay",
        rating: 5,
        createdAt: "2026-03-09",
        title: "Stable and predictable",
        comment:
          "We use it for multi-currency estimation, and response formatting has been very consistent.",
      },
    ],
  },
  {
    id: "shipstream-track",
    slug: "shipstream-track",
    name: "ShipStream Track",
    tagline: "Shipment events and parcel visibility across multiple carriers.",
    description:
      "Aggregates parcel tracking, delivery milestones, and courier ETAs into one normalized shipping API for commerce operations and post-purchase experiences.",
    image: "/apis/shipstream-track.svg",
    rateLimit: "150 req/min",
    pricing: "Paid",
    category: "Logistics",
    priceMonthly: 19,
    author: "DockNine Systems",
    uploadedAt: "2026-03-10",
    uses: 12110,
    reviewCount: 128,
    rating: 4.4,
    tags: ["shipping", "tracking", "commerce"],
    featured: false,
    reviews: [
      {
        id: "s1",
        author: "Leah, CartCurrent",
        rating: 4,
        createdAt: "2026-03-19",
        title: "Useful carrier coverage",
        comment:
          "We replaced two separate tracking vendors with this one and simplified our customer updates.",
      },
      {
        id: "s2",
        author: "Ravi, BoxBird",
        rating: 4,
        createdAt: "2026-03-13",
        title: "Helpful webhook model",
        comment:
          "Webhook events are easy to reason about and the docs examples map well to production.",
      },
    ],
  },
  {
    id: "storypulse-news",
    slug: "storypulse-news",
    name: "StoryPulse News",
    tagline: "Curated topic clusters, headlines, and sentiment scoring.",
    description:
      "A content API for editorial teams and AI search products. It bundles headline streams, topic clustering, publication metadata, and a lightweight sentiment layer.",
    image: "/apis/storypulse-news.svg",
    rateLimit: "200 req/min",
    pricing: "Free",
    category: "Media",
    priceMonthly: null,
    author: "Signal Harbor",
    uploadedAt: "2026-02-18",
    uses: 15604,
    reviewCount: 187,
    rating: 4.7,
    tags: ["news", "sentiment", "search"],
    featured: true,
    reviews: [
      {
        id: "n1",
        author: "Kai, Brieflane",
        rating: 5,
        createdAt: "2026-03-16",
        title: "Strong topic grouping",
        comment:
          "Topic clusters save us a lot of curation time and help keep our discovery pages fresh.",
      },
      {
        id: "n2",
        author: "Priya, EchoWire",
        rating: 4,
        createdAt: "2026-03-01",
        title: "Clean for prototypes",
        comment:
          "The schema is easy to work with. We would love a few more language-specific filters later on.",
      },
    ],
  },
];

export const apiCategories = Array.from(new Set(apiRecords.map((api) => api.category))).sort();

export function findApiBySlug(slug: string) {
  return apiRecords.find((api) => api.slug === slug);
}

export function filterApis(options: {
  query?: string;
  category?: string;
  pricing?: string;
  sort?: string;
}) {
  const query = options.query?.trim().toLowerCase() ?? "";
  const category = options.category?.trim() ?? "";
  const pricing = options.pricing?.trim() ?? "";
  const sort = options.sort?.trim() ?? "popular";

  const filtered = apiRecords.filter((api) => {
    const matchesQuery =
      query.length === 0 ||
      [api.name, api.tagline, api.description, api.author, api.category, ...api.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesCategory = category.length === 0 || api.category === category;
    const matchesPricing = pricing.length === 0 || api.pricing === pricing;

    return matchesQuery && matchesCategory && matchesPricing;
  });

  return [...filtered].sort((left, right) => {
    if (sort === "rating") {
      return right.rating - left.rating;
    }

    if (sort === "latest") {
      return Date.parse(right.uploadedAt) - Date.parse(left.uploadedAt);
    }

    return right.uses - left.uses;
  });
}
