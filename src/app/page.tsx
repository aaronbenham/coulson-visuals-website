import VideoHero from "../components/VideoHero";

export default function HomePage() {
  return (
    <main>
      <VideoHero />

      {/* Content section that overlaps the video */}
      <section className="relative z-20 -mt-16 sm:-mt-24">
        <div className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
            <div className="p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Premium automotive visuals — built for brands and bookings
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
                High-end photography and short-form video for car detailers, exotic
                owners, performance garages and dealerships. Clean delivery, consistent
                quality, and a process designed to make you look premium.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Detailer Packages", desc: "Content designed for monthly marketing and reels." },
                  { title: "Exotic Shoots", desc: "Cinematic imagery with strong composition and lighting." },
                  { title: "Brand Content", desc: "Launch-ready visuals for web, social and print." },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black"
                >
                  Book a shoot
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                >
                  View portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
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
