"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about"className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid gap-10 lg:grid-cols-2 lg:items-center"
      >
        {/* Image */}
        <div className="relative aspect-[2/2] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <Image
            src="/about/IMG_5642.jpeg"
            alt="Coulson Visuals on set during an automotive shoot"
            fill
            className="object-cover"
        />
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            ABOUT
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            Built around craft, consistency, and trust
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
            Coulson Visuals specialises in premium automotive photography and
            short-form video for brands that care about how they’re perceived.
            From detailers and performance garages to exotic owners and
            dealerships, the focus is always the same — clean visuals, strong
            composition, and content that actually converts.
          </p>

          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
            Every shoot is approached with intent. Lighting, framing, grading,
            and delivery are all designed to make your brand look established,
            professional, and worth trusting.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a 
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              target="_blank" 
              href="https://coulsonvisuals.com/" 
              rel="noopener noreferrer">
                View Portfolio
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Work with me
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
