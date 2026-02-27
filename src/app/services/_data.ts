// src/app/services/_data.ts
export type ServiceKey =
  | "monthly-subscription"
  | "single-video"
  | "photoshoot"
  | "video-photoshoot";

export type Service = {
  key: ServiceKey;
  title: string;
  tagline: string;
  priceExVat: number;
  // Calendly event link (use your real link when ready)
  calendlyUrl: string;
  highlight?: boolean;
  bullets: string[];
  deliverables: { k: string; v: string }[];
  timeline: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

const VAT_RATE = 0.2;

export function priceIncVat(n: number) {
  return Math.round(n * (1 + VAT_RATE));
}

export function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

// 👉 Replace calendlyUrl values with your real event-type links
export const SERVICES: Service[] = [
  {
    key: "monthly-subscription",
    title: "Monthly Subscription",
    tagline: "Brand Builder",
    priceExVat: 750,
    calendlyUrl: "https://calendly.com/your-handle/subscription-enquiry",
    bullets: [
      "Designed for consistent monthly marketing",
      "Strategy-led content built for bookings",
      "Everything delivered ready for web + socials",
    ],
    deliverables: [
      { k: "Videos", v: "6 edited short-form videos / month" },
      { k: "Photos", v: "All photoshoot content included" },
      { k: "Strategy", v: "Monthly analytics call + content planning" },
      { k: "Turnaround", v: "Monthly cadence (agreed schedule)" },
    ],
    timeline: [
      { title: "Discovery", desc: "Goals, platforms, shot list + monthly plan." },
      { title: "Shoot Days", desc: "Cinematic capture with direction + consistency." },
      { title: "Edit & Deliver", desc: "Premium grading, clean exports, fast delivery." },
      { title: "Analytics", desc: "Review what converts + refine next month." },
    ],
    faqs: [
      {
        q: "Is this a contract?",
        a: "We’ll agree the monthly scope and cadence in writing. You can keep it flexible at the start.",
      },
      {
        q: "Do you include travel?",
        a: "Travel is quoted if outside my usual area — always confirmed before booking.",
      },
      {
        q: "What if I need extra videos?",
        a: "Add-ons are available if you want more deliverables in a given month.",
      },
    ],
  },
  {
    key: "single-video",
    title: "Single Video Creation",
    tagline: "Hero Reel",
    priceExVat: 180,
    calendlyUrl: "https://calendly.com/your-handle/single-video",
    bullets: [
      "One premium short-form edit designed to perform",
      "Perfect for launches, promos, or one-off content",
      "Cinematic framing, clean motion, consistent grade",
    ],
    deliverables: [
      { k: "Video", v: "1 fully edited short-form video" },
      { k: "Aspect ratios", v: "Optimised for TikTok/Reels/Shorts" },
      { k: "Turnaround", v: "Agreed per booking" },
      { k: "Best for", v: "Single car / promo / event content" },
    ],
    timeline: [
      { title: "Plan", desc: "Vibe + references + quick shot list." },
      { title: "Shoot", desc: "Directed capture for a premium look." },
      { title: "Edit", desc: "Cinematic pacing, grade, sound + exports." },
      { title: "Deliver", desc: "Download link, ready to post." },
    ],
    faqs: [
      { q: "Do you provide raw footage?", a: "Raw delivery can be discussed, but standard delivery is the finished edit." },
      { q: "Can I request music style?", a: "Yes — share references and we’ll match the vibe." },
      { q: "Can this be combined with photos?", a: "Yes — choose Video + Photoshoot for best value." },
    ],
  },
  {
    key: "photoshoot",
    title: "Photoshoot Session",
    tagline: "Fast Refresh",
    priceExVat: 125,
    calendlyUrl: "https://calendly.com/your-handle/photoshoot-session",
    bullets: [
      "Clean, premium images built for trust",
      "Ideal for listings, socials, and detailer results",
      "48-hour delivery on the best 30 photos",
    ],
    deliverables: [
      { k: "Photos", v: "Best 30 edited photos" },
      { k: "Delivery", v: "48 hours" },
      { k: "Style", v: "Luxury colour + clean contrast" },
      { k: "Best for", v: "Detailers / dealerships / owners" },
    ],
    timeline: [
      { title: "Prep", desc: "Location + light plan + shot list." },
      { title: "Shoot", desc: "Composition, angles, detail work." },
      { title: "Select", desc: "Best frames chosen for impact." },
      { title: "Deliver", desc: "Web/social-ready exports." },
    ],
    faqs: [
      { q: "Can you shoot multiple cars?", a: "Yes — we can quote per vehicle or expand the session." },
      { q: "Do you retouch imperfections?", a: "Standard edits include colour/contrast and clean refinement. Heavy retouching can be added." },
      { q: "Do you shoot indoors?", a: "Yes — workshops/garages work brilliantly for detailers." },
    ],
  },
  {
    key: "video-photoshoot",
    title: "Video + Photoshoot",
    tagline: "Full Content Set",
    priceExVat: 250,
    calendlyUrl: "https://calendly.com/your-handle/video-and-photoshoot",
    highlight: true,
    bullets: [
      "Best value package for a complete content drop",
      "Full day capture, premium edits, fast delivery",
      "Built for brands that want to look expensive",
    ],
    deliverables: [
      { k: "Shooting", v: "Full day capture" },
      { k: "Photos", v: "30 edited photos" },
      { k: "Video", v: "1 fully edited short-form video" },
      { k: "Best for", v: "Detailers / garages / dealerships" },
    ],
    timeline: [
      { title: "Discovery", desc: "Goal + platforms + shot list + vibe." },
      { title: "Shoot Day", desc: "Direction, lighting, cinematic capture." },
      { title: "Edit & Deliver", desc: "Premium grade + web-ready exports." },
      { title: "Next Steps", desc: "Optional analytics + next shoot plan." },
    ],
    faqs: [
      { q: "Is this a full day?", a: "Yes — designed to capture enough content for a strong content drop." },
      { q: "Can I add extra reels?", a: "Yes — add-on edits are available." },
      { q: "How do we choose locations?", a: "We’ll align on the look and pick locations that match your brand." },
    ],
  },
];

export function getService(key: ServiceKey) {
  const s = SERVICES.find((x) => x.key === key);
  if (!s) throw new Error(`Unknown service: ${key}`);
  return s;
}