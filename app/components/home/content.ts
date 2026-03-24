export const platformStats = [
  { value: "5 min", label: "SDK integration time" },
  { value: "2.5%", label: "Early provider commission" },
  { value: "12h", label: "Free API verification" },
  { value: "78h", label: "Paid API production review" },
];

export const pillars = [
  "Discovery layer for indie and production APIs",
  "Authentication, wallet checks, and access control",
  "Usage metering, billing events, and fraud detection",
  "Single SDK for consumers and providers",
];

export const flowDiagram = ["Client App", "LAM SDK", "LAM Server", "Provider API"];

export const architectureItems = [
  "Discovery layer",
  "Authentication and access control",
  "Usage metering and billing engine",
  "Wallet and fraud detection",
];

export const flows = [
  {
    eyebrow: "Consumer mode",
    title: "One SDK call, one API key, any verified API.",
    description:
      "Developers plug in `lam-express`, select an API by slug, and let LAM handle validation, billing, and forwarding behind the scenes.",
    steps: [
      "Attach the consumer API key from the dashboard",
      "Validate subscription and wallet balance before forwarding",
      "Meter each request and deduct only what was used",
    ],
  },
  {
    eyebrow: "Provider mode",
    title: "Keep your infra. Monetize without rebuilding your stack.",
    description:
      "Providers wrap their existing Express service, define pricing, and let LAM manage trust, monetization, and access enforcement.",
    steps: [
      "Host and scale the API on your own server",
      "Add provider credentials and drop in middleware",
      "Receive production verification and retain revenue",
    ],
  },
];

export const pricing = [
  {
    name: "Consumers",
    amount: "\u20b949/mo",
    detail: "Unlock paid API access across the marketplace.",
  },
  {
    name: "Wallet",
    amount: "\u20b9100+",
    detail: "Deposit balance with GST and pay per request.",
  },
  {
    name: "Providers",
    amount: "\u20b9249/mo",
    detail: "Production listing license with 100% revenue retained.",
  },
];

export const trustSignals = [
  "API key hashing and HMAC signing",
  "Wallet pre-check before request forwarding",
  "Rate limiting and abuse detection",
  "Verification badges for contributor and production APIs",
];
