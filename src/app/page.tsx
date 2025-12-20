import VideoHero from "../components/VideoHero";
import AutoScrollStrip from "../components/AutoScrollStrip";
import QualityDial from "../components/QualityDial";

export default function HomePage() {
  return (
    <main>
      <VideoHero />

      {/* EXPERIENCE section that overlaps the video */}
      <section className="relative z-20 -mt-16 sm:-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">

          {/* Main premium card */}
          <div className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
            <div className="p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

                {/* Left: message + CTA */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/70">
                    THE COULSON EXPERIENCE
                  </p>

                  <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Premium automotive visuals — built for brands and bookings
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                    High-end photography and short-form video for car detailers, exotic
                    owners, performance garages and dealerships. Clean delivery, consistent
                    quality, and a process designed to make you look premium.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Book a shoot
                    </a>
                    <a
                      href="/portfolio"
                      className="inline-flex items-center justify-center rounded-2xl border border-accent/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/10"
                    >
                      View portfolio
                    </a>
                  </div>
                </div>

                {/* Right: service tiles (more bespoke) */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Detailer Packages", desc: "Monthly content designed for bookings & reels." },
                    { title: "Exotic Shoots", desc: "Cinematic imagery with premium composition." },
                    { title: "Brand Content", desc: "Launch-ready visuals for web, social & print." },
                    { title: "Performance Analytics", desc: "What posts convert + content direction." },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-0.5"
                    >
                      <h3 className="text-base font-semibold">{c.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Cinematic image strip (use your own images) */}
          <div className="my-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <AutoScrollStrip
              images={[
                { src: "/auto-scroll/amg-1.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/brands-hatch-67.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/drfit-motogp-4.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/amg-2.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/mx5-poster-pic-1.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/car-motogp.webp", alt: "AMG detail shot" },
              ]}
              speedPxPerSec={32}
            />
          </div>

          {/* 4-step roadmap (phase 1-2-3-4) */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold">The 4-phase process</h3>
            <p className="mt-2 text-sm text-white/70">
              A simple, repeatable system that keeps quality high and turnaround fast.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Discovery", d: "Goal, vibe, platform, shot list." },
                { n: "02", t: "Shoot Day", d: "Direction, lighting, cinematic capture." },
                { n: "03", t: "Edit & Deliver", d: "Premium edits, web-ready exports." },
                { n: "04", t: "Analytics", d: "Review performance + next shoot plan." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-white/60">
                      PHASE
                    </span>
                    <span className="text-sm font-semibold text-accent">{s.n}</span>
                  </div>
                  <h4 className="mt-3 text-base font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-white/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="relative z-20 -mt-10 sm:-mt-20 pb-16">
        <QualityDial
          beforeSrc="/quality-dial/before.webp"
          afterSrc="/quality-dial/after.webp"
        />
      </section>

      {/* Extra sections for scrolling + SEO text (important) */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold">Process</h2>
            <ol className="mt-4 space-y-3 text-sm text-white/75">
              <li><span className="text-white/90 font-semibold">1.</span> Brief + goals</li>
              <li><span className="text-white/90 font-semibold">2.</span> Shoot planning</li>
              <li><span className="text-white/90 font-semibold">3.</span> Capture + direction</li>
              <li><span className="text-white/90 font-semibold">4.</span> Edit + delivery</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold">Locations</h2>
            <p className="mt-4 text-sm text-white/75 leading-relaxed">
              Serving detailers, garages, and private clients across the UK. On-location shoots
              available — studio setups on request. (Add your primary city/region here for Local SEO.)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
