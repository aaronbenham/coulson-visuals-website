"use client";

import Link from "next/link";
import {
  Camera,
  Film,
  Clock,
  LineChart,
  CreditCard,
  Check,
  X,
  Sparkles,
} from "lucide-react";

type Service = {
  title: string;
  href: string;
  highlight?: boolean;
  tagline: string; // short "best for"
  videos?: string; // e.g. "6/mo", "1"
  photos?: string; // e.g. "Included", "30"
  turnaround: string; // e.g. "48h"
  strategy: boolean;
  payment: string; // short
};

const services: Service[] = [
  {
    title: "Monthly Subscription",
    href: "/services/monthly-subscription",
    tagline: "Brand consistency",
    videos: "6/mo",
    photos: "Included",
    turnaround: "Monthly",
    strategy: true,
    payment: "Monthly",
  },
  {
    title: "Single Video",
    href: "/services/single-video",
    tagline: "One hero reel",
    videos: "1",
    photos: "—",
    turnaround: "Agreed",
    strategy: false,
    payment: "Deposit",
  },
  {
    title: "Photoshoot",
    href: "/services/photoshoot",
    tagline: "Fast refresh",
    videos: "—",
    photos: "30",
    turnaround: "48h",
    strategy: false,
    payment: "Deposit",
  },
  {
    title: "Video + Photoshoot",
    href: "/services/video-photoshoot",
    highlight: true,
    tagline: "Best value",
    videos: "1",
    photos: "30",
    turnaround: "Agreed",
    strategy: false,
    payment: "Deposit",
  },
];

const metrics = [
  { key: "videos", label: "Video", Icon: Film },
  { key: "photos", label: "Photos", Icon: Camera },
  { key: "turnaround", label: "Turnaround", Icon: Clock },
  { key: "strategy", label: "Strategy", Icon: LineChart },
  { key: "payment", label: "Payment", Icon: CreditCard },
] as const;

export default function ServicesComparison() {
  return (
    <div id="services-comparison" className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            COMPARE
          </p>
          <h2 className="mt-2 text-lg sm:text-xl font-semibold">
            Pick the right package at a glance
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Clear deliverables, quick turnaround, minimal decision friction.
          </p>
        </div>

        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center rounded-2xl border border-accent/40 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/10"
        >
          Ask a question
        </Link>
      </div>

      {/* Desktop: 4 premium cards in a row */}
      <div className="mt-6 hidden lg:grid grid-cols-4 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={[
              "relative overflow-hidden rounded-2xl border bg-black/40 p-5",
              s.highlight ? "border-accent/50 shadow-[0_0_0_1px_rgba(53,178,223,0.25)]" : "border-white/10",
            ].join(" ")}
          >
            {/* subtle glow on highlight */}
            {s.highlight && (
              <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.14),transparent_60%)]" />
            )}

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="mt-1 text-xs text-white/60">{s.tagline}</p>
                </div>

                {s.highlight && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
                    <Sparkles className="h-3.5 w-3.5" />
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="mt-5 space-y-3">
                {/* Chips */}
                <Chip Icon={Film} label="Video" value={s.videos ?? "—"} />
                <Chip Icon={Camera} label="Photos" value={s.photos ?? "—"} />
                <Chip Icon={Clock} label="Turnaround" value={s.turnaround} />
                <BoolChip Icon={LineChart} label="Strategy" ok={s.strategy} />
                <Chip Icon={CreditCard} label="Payment" value={s.payment} />
              </div>

              <Link
                href={s.href}
                className={[
                  "mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors",
                  s.highlight
                    ? "bg-accent text-black hover:brightness-110"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile + Tablet: stacked cards (super readable) */}
      <div className="mt-6 grid gap-4 lg:hidden">
        {services.map((s) => (
          <div
            key={s.title}
            className={[
              "relative overflow-hidden rounded-2xl border bg-black/40 p-5",
              s.highlight ? "border-accent/50" : "border-white/10",
            ].join(" ")}
          >
            {s.highlight && (
              <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.14),transparent_60%)]" />
            )}

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm text-white/65">{s.tagline}</p>
                </div>

                {s.highlight && (
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-accent">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <SmallStat Icon={Film} label="Video" value={s.videos ?? "—"} />
                <SmallStat Icon={Camera} label="Photos" value={s.photos ?? "—"} />
                <SmallStat Icon={Clock} label="Turnaround" value={s.turnaround} />
                <SmallStat
                  Icon={LineChart}
                  label="Strategy"
                  value={s.strategy ? "Included" : "Optional"}
                />
              </div>

              <div className="mt-3">
                <SmallStat Icon={CreditCard} label="Payment" value={s.payment} />
              </div>

              <Link
                href={s.href}
                className={[
                  "mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                  s.highlight
                    ? "bg-accent text-black hover:brightness-110"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Micro note */}
      <p className="mt-5 text-xs text-white/50">
        Strategy/analytics is included in the monthly subscription. Other packages can add it on request.
      </p>
    </div>
  );
}

/** Desktop chips */
function Chip({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/60">
        <Icon className="h-4 w-4 text-accent" />
        {label.toUpperCase()}
      </div>
      <span className="text-sm font-semibold text-white/80">{value}</span>
    </div>
  );
}

function BoolChip({
  Icon,
  label,
  ok,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  ok: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/60">
        <Icon className="h-4 w-4 text-accent" />
        {label.toUpperCase()}
      </div>
      <span
        className={[
          "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
          ok ? "bg-accent/15 text-accent" : "bg-white/10 text-white/70",
        ].join(" ")}
      >
        {ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
        {ok ? "Included" : "Optional"}
      </span>
    </div>
  );
}

/** Mobile stats */
function SmallStat({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/60">
        <Icon className="h-4 w-4 text-accent" />
        {label.toUpperCase()}
      </div>
      <div className="mt-1 text-sm font-semibold text-white/85">{value}</div>
    </div>
  );
}