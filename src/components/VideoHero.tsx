"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export default function VideoHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  // Mobile-first: keep it simple and performant (no heavy animation libs required).
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const h = Math.max(1, rect.height);

        // As you scroll past the hero, fade the video.
        // When hero top is at 0 => opacity 1. When hero top is at -0.65*height => opacity 0.
        const progress = clamp01((-rect.top) / (h * 0.65));
        setOpacity(1 - progress);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const videoSrc = useMemo(() => "/portfolio/hydrogen.mp4", []);

  return (
    <section ref={heroRef} className="relative h-[92svh] min-h-[640px] overflow-hidden">
      {/* Sticky video layer */}
      <div className="sticky top-0 h-[92svh] min-h-[640px]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Cinematic automotive background video"
            style={{ opacity }}
          />
          {/* Readability overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.35), rgba(0,0,0,.85))",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 sm:pb-30">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/80">
              COULSON VISUALS
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Premium automotive & exotic car photography
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Cinematic visuals for detailers, collectors, and brands — built for social,
              web, and premium marketing.
            </p>

            <div className="relative z-30 mt-6 flex flex-col gap-3 sm:flex-row">
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
  );
}
