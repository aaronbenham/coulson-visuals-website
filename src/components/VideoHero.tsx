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

  const videoSrc = useMemo(() => "/main-video/audi ad logo white.mp4", []);

  return (
    <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Sticky video layer */}
      <div className="sticky top-0 h-[100svh] min-h-[640px]">
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
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-20 sm:pt-30 sm:pb-24">
          <div className="max-w-xl">
            <p className="fade-up fade-delay-1 text-xs font-semibold tracking-[0.18em] text-white/80 italic">
              COULSON VISUALS
            </p>
            <h1 className="fade-up fade-delay-2 mt-3 pb-1 text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-r to-white from-accent bg-clip-text text-transparent">
              Premium Automotive & Exotic Car Content Creation
            </h1>
            <p className="fade-up fade-delay-2 mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              Cinematic visuals for detailers, dealerships, and luxury brands. Tailored for social media,
              web design, and premium marketing.
            </p>

            <div className="fade-up fade-delay-3 relative z-30  mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-accent text-black hover:bg-accent/90"
              >
                Book a shoot
              </a>
              <a
                href="https://www.coulsonvisualsportfolio.com/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
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
