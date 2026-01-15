"use client";

import Link from "next/link";

type Col = {
  title: string;
  href: string;
  highlight?: boolean;
};

const cols: Col[] = [
  { title: "Monthly Subscription", href: "/services/monthly-subscription" },
  { title: "Single Video", href: "/services/single-video" },
  { title: "Photoshoot", href: "/services/photoshoot" },
  { title: "Video + Photoshoot", href: "/services/video-photoshoot", highlight: true },
];

const rows: { label: string; values: string[] }[] = [
  {
    label: "Best for",
    values: [
      "Detailers/garages who want consistent posting",
      "One hero reel / promo content",
      "Fast refresh for listings & socials",
      "Best value: full content set",
    ],
  },
  {
    label: "Deliverables",
    values: ["6 videos + shoots included", "1 edited short-form video", "30 photos", "30 photos + 1 video"],
  },
  {
    label: "Turnaround",
    values: ["Monthly cadence", "Agreed per booking", "48 hours", "Agreed per booking"],
  },
  {
    label: "Strategy / analytics",
    values: ["Included (calls + planning)", "Optional add-on", "Optional add-on", "Optional add-on"],
  },
  {
    label: "Payment",
    values: ["Monthly (invoice/subscription)", "Upfront or deposit", "Upfront or deposit", "Upfront or deposit"],
  },
];

export default function ServicesComparison() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
            COMPARE
          </p>
          <h2 className="mt-2 text-lg sm:text-xl font-semibold">
            Pick the right package in 30 seconds
          </h2>
          <p className="mt-2 text-sm text-white/70">
            A quick side-by-side to remove decision friction.
          </p>
        </div>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center rounded-2xl border border-accent/40 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/10"
        >
          Ask a question
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        {/* Header */}
        <div className="grid grid-cols-2 sm:grid-cols-5 bg-black/40">
          <div className="p-4 text-xs font-semibold tracking-[0.18em] text-white/60">
            FEATURES
          </div>
          {cols.map((c) => (
            <div
              key={c.title}
              className={`p-4 text-xs font-semibold tracking-[0.12em] ${
                c.highlight ? "text-accent" : "text-white/70"
              } hidden sm:block`}
            >
              {c.title.toUpperCase()}
            </div>
          ))}
          {/* Mobile: show only “Most Popular” column name as CTA row below */}
          <div className="p-4 text-xs font-semibold tracking-[0.12em] text-accent sm:hidden text-right">
            VIDEO + PHOTO
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/10 bg-black/20">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-2 sm:grid-cols-5">
              <div className="p-4 text-sm font-semibold text-white/85">
                {r.label}
              </div>

              {/* Desktop columns */}
              {r.values.map((v, idx) => (
                <div
                  key={idx}
                  className={`hidden sm:block p-4 text-sm text-white/70 ${
                    cols[idx]?.highlight ? "bg-accent/5" : ""
                  }`}
                >
                  {v}
                </div>
              ))}

              {/* Mobile: show only the most popular value */}
              <div className="p-4 text-sm text-white/70 sm:hidden text-right bg-accent/5">
                {r.values[3]}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 bg-black/40">
          <div className="p-4 text-xs text-white/50">DETAILS</div>

          {cols.map((c) => (
            <div key={c.href} className={`p-4 hidden sm:block ${c.highlight ? "bg-accent/5" : ""}`}>
              <Link
                href={c.href}
                className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  c.highlight
                    ? "bg-accent text-black hover:brightness-110"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                View
              </Link>
            </div>
          ))}

          {/* Mobile: one CTA */}
          <div className="p-4 sm:hidden text-right bg-accent/5">
            <Link
              href="/services/video-photoshoot"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-black hover:brightness-110"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
