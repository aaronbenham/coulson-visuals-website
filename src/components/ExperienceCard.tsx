"use client";

import { motion } from "framer-motion";

const tiles = [
  { title: "Detailer Packages", desc: "Monthly content designed for bookings & reels." },
  { title: "Exotic Shoots", desc: "Cinematic imagery with premium composition." },
  { title: "Brand Content", desc: "Launch-ready visuals for web, social & print." },
  { title: "Performance Analytics", desc: "What posts convert + content direction." },
];

export default function ExperienceCard() {
  return (
    <div
      className="relative rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Accent glow (subtle, premium) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_25%_20%,rgba(53,178,223,0.16),transparent_55%)]" />
      </div>

      {/* Top scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute -left-1/2 top-0 h-px w-[200%] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 hover:animate-[scan_1.2s_ease-in-out_infinite]" />

      <div className="relative p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: message + CTA */}
          <div>
            <p className="text-xs font-semibold italic tracking-[0.18em] text-white/70">
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
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Book a shoot
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-accent/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/10"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* Right: service tiles */}
          <div className="grid gap-3 sm:grid-cols-2">
            {tiles.map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {/* Tile glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_30%,rgba(53,178,223,0.18),transparent_55%)]" />
                </div>

                {/* Tile scan line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
                <div className="pointer-events-none absolute -left-1/2 top-0 h-px w-[200%] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[scan_1.2s_ease-in-out_infinite]" />

                <div className="relative z-10">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</p>

                  {/* Bottom accent rule */}
                  <div className="mt-4 h-px w-full bg-white/10" />
                  <div className="mt-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
