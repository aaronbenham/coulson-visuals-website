"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-6 sm:p-10">
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]" />
      <div className="relative">
        <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
          READY
        </p>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
          Ready to book your shoot?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">
          Choose a service, confirm a date, and get a clean delivery flow — built to
          look premium and convert.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Book a shoot
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
