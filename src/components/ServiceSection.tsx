"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgePoundSterling,
  CalendarDays,
  Camera,
  Film,
  Sparkles,
} from "lucide-react";

type Service = {
  title: string;
  price: number; // ex VAT
  subtitle: string;
  bullets: string[];
  Icon: React.ComponentType<{ className?: string }>;
  cta: string;
  href: string;
  highlight?: boolean; // accent outline + badge
};

const services: Service[] = [
  {
    title: "Monthly Subscription",
    price: 750,
    subtitle: "Brand Builder",
    bullets: [
      "Six videos edited per month",
      "Monthly analytics call",
      "Content strategy meetings",
      "All photoshoot content included",
    ],
    Icon: CalendarDays,
    cta: "Enquire about subscription",
    href: "/contact",
  },
  {
    title: "Single Video Creation",
    price: 180,
    subtitle: "Short-form edit",
    bullets: ["One fully edited short-form video", "Optimised for social delivery"],
    Icon: Film,
    cta: "Book a video",
    href: "/contact",
  },
  {
    title: "Photoshoot Session",
    price: 125,
    subtitle: "Fast turnaround",
    bullets: ["Best 30 photos included", "48-hour delivery"],
    Icon: Camera,
    cta: "Book a shoot",
    href: "/contact",
  },
  {
    title: "Video + Photoshoot",
    price: 250,
    subtitle: "Full day capture",
    bullets: ["Full day of shooting", "30 photos included", "1 fully edited short-form video"],
    Icon: Sparkles,
    cta: "Book a full day",
    href: "/contact",
    highlight: true, // ✅ most popular + outlined
  },
];

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

function addVAT(price: number) {
  // 20% VAT
  return Math.round(price * 1.2);
}

export default function ServicesSection() {
  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">SERVICES</p>
          <h3 className="mt-2 text-lg sm:text-xl font-semibold">Packages built for premium brands</h3>
          <p className="mt-2 text-sm text-white/70">
            Transparent pricing, fast delivery, and content engineered to look expensive.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/50">
          <BadgePoundSterling className="h-4 w-4 text-accent" />
          PRICING
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const total = addVAT(s.price);

          return (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className={[
                "group relative overflow-hidden rounded-2xl p-5",
                // force equal heights + push button to bottom
                "flex flex-col",
                // base styling
                "border bg-black/40",
                // highlight variant
                s.highlight ? "border-accent/60 shadow-[0_0_0_1px_rgba(53,178,223,0.25)]" : "border-white/10",
              ].join(" ")}
            >
              {/* Accent glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_30%,rgba(53,178,223,0.22),transparent_55%)]" />
              </div>

              {/* Scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
              <div className="pointer-events-none absolute -left-1/2 top-0 h-px w-[200%] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[scan_1.2s_ease-in-out_infinite]" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                      {s.title.toUpperCase()}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{s.subtitle}</p>
                  </div>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <s.Icon className="h-4 w-4 text-white/80 transition-colors duration-300 group-hover:text-accent" />
                  </span>
                </div>

                {/* Price + VAT subtext */}
                <div className="mt-4">
                  <p className="text-2xl font-semibold tracking-tight">{formatGBP(s.price)}</p>
                  <p className="mt-1 text-xs text-white/60">
                    + VAT (Total {formatGBP(total)})
                  </p>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacer pushes CTA to bottom */}
                <div className="mt-auto pt-5">
                  <a
                    href={s.href}
                    className={[
                      "inline-flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold",
                      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      s.highlight
                        ? "bg-accent text-black hover:brightness-110"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span>{s.cta}</span>
                    <ArrowUpRight
                      className={[
                        "h-4 w-4 transition-all duration-300",
                        s.highlight ? "text-black/80" : "text-white/60 group-hover:text-accent",
                        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      ].join(" ")}
                    />
                  </a>

                  {/* Bottom rule */}
                  <div className="mt-4 h-px w-full bg-white/10" />
                  <div className="mt-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-white/50">
        *Prices shown exclude travel and special requests. Exact quotes confirmed before booking.
      </p>
    </section>
  );
}
