import Link from "next/link";
import ServiceSection from "../../components/ServiceSection";
import ServicesComparison from "../../components/ServicesComparison";
import ServicesFAQ from "../../components/ServicesFAQ";
import ServicesCTA from "../../components/ServicesCTA";

export const metadata = {
  title: "Services | Coulson Visuals",
  description:
    "Premium automotive photography and short-form video packages for detailers, exotic owners, garages and dealerships. Transparent pricing, fast delivery, luxury finish.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Page-wide background (same glow style as ServicesCTA) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 blur-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_35%)] " />
      </div>

      {/* Hero */}
      <section className="relative">

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10 sm:pt-24 sm:pb-12">
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            SERVICES
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Premium packages built for brands and bookings
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed">
            Choose a package that matches your goals — from a fast photoshoot refresh
            to a full-day content set. Clean delivery, consistent grading, and a
            process designed to make you look premium.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book a shoot
            </Link>

            <a 
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              target="_blank" 
              href="https://coulsonvisuals.com/" 
              rel="noopener noreferrer">
                View Portfolio
            </a>
          </div>

          {/* Micro trust strip */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Fast delivery", d: "48-hour photo turnaround on core packages." },
              { t: "Consistent look", d: "Premium grading and clean exports for web + social." },
              { t: "Conversion-aware", d: "Content built to drive enquiries and bookings." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold">{x.t}</p>
                <p className="mt-1 text-xs text-white/65 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (your animated cards component) */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <ServiceSection />
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <ServicesComparison />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <ServicesFAQ />
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ServicesCTA />
      </section>
    </main>
  );
}
