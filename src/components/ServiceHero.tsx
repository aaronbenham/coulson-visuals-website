// src/components/ServiceHero.tsx
import Link from "next/link";
import { formatGBP, priceIncVat } from "../app/services/_data";

type Props = {
  eyebrow?: string;
  title: string;
  tagline: string;
  priceExVat: number;
  highlight?: boolean;
  onBookHref: string; // Calendly link
};

export default function ServiceHero({
  eyebrow = "SERVICE",
  title,
  tagline,
  priceExVat,
  highlight,
  onBookHref,
}: Props) {
  const inc = priceIncVat(priceExVat);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10 sm:pt-24 sm:pb-12">
        <div
          className={[
            "rounded-3xl border bg-black/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10",
            highlight ? "border-accent/50" : "border-white/10",
          ].join(" ")}
        >
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            {eyebrow}
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-sm text-white/70">{tagline}</p>
            </div>

            {highlight && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                MOST POPULAR
              </span>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                PRICE
              </p>
              <p className="mt-2 text-2xl font-semibold">{formatGBP(priceExVat)}</p>
              <p className="mt-1 text-xs text-white/60">
                + VAT (Total {formatGBP(inc)})
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                PAYMENT
              </p>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Manual invoice after booking. Deposit available on request.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                NEXT STEP
              </p>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Choose a date via Calendly and confirm your shoot details.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={onBookHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book via Calendly
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ask a question
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Back to services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}