"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type QualityDialProps = {
  beforeSrc: string; // e.g. "/quality/before.webp"
  afterSrc: string;  // e.g. "/quality/after.webp"
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  subtitle?: string;
};

export default function QualityDial({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before: standard content",
  afterAlt = "After: premium cinematic grade",
  title = "Craft, not presets",
  subtitle = "Drag the dial to feel the difference between content and considered automotive storytelling.",
}: QualityDialProps) {
    const id = useId();
    const [value, setValue] = useState(62); // starting position (0-100)
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const rangeRef = useRef<HTMLInputElement | null>(null);
    const [pxLeft, setPxLeft] = useState<number | null>(null);

    useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.getBoundingClientRect().width;
      const THUMB_RADIUS = 13; // match globals.css thumb size/2
      setPxLeft(THUMB_RADIUS + (w - THUMB_RADIUS * 2) * (value / 100));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    }, [value]);

  const phase = useMemo(() => {
    // Copy changes subtly across the dial (premium feel)
    if (value < 35) {
      return {
        label: "STANDARD",
        headline: "Quick content. Minimal refinement.",
        body: "Clean capture and fast delivery — fine for posting, but not engineered for brand trust or conversion.",
      };
    }
    if (value < 70) {
      return {
        label: "CURATED",
        headline: "Designed for attention and clarity.",
        body: "Intentional framing, lighting decisions, and edits that elevate the vehicle and the brand message.",
      };
    }
    return {
      label: "PREMIUM",
      headline: "Cinematic. Brand-ready. Conversion-aware.",
      body: "A finished look with consistent grading, detail control, and deliverables built for social, web, and campaigns.",
    };
  }, [value]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
        <div ref={wrapRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
            {/* BEFORE (base) */}
            <img
            src={beforeSrc}
            alt={beforeAlt}
            className="block h-[320px] w-full object-cover sm:h-[420px]"
            loading="lazy"
            decoding="async"
            draggable={false}
            />

            {/* AFTER (full overlay, clipped) */}
            <img
            src={afterSrc}
            alt={afterAlt}
            className="absolute inset-0 block h-[320px] w-full object-cover sm:h-[420px]"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{
                clipPath: `inset(0 ${100 - value}% 0 0)`,
            }}
            />

            {/* Labels */}
            <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/80">
            BEFORE
            </div>
            <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/80">
            AFTER
            </div>

            {/* Divider aligned to slider */}
            {pxLeft !== null && (
            <div
                className="pointer-events-none absolute inset-y-0"
                style={{ left: `${pxLeft}px` }}
                aria-hidden="true"
            >
                <div className="h-full w-[2px] bg-accent shadow-[0_0_0_1px_rgba(0,0,0,0.6)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-white/80">
                    DIAL
                    </span>
                </div>
                </div>
            </div>
            )}

            {/* Slider (no horizontal padding so line aligns) */}
            <div className="absolute inset-x-0 bottom-0 px-0 pb-4">
            <label htmlFor={id} className="sr-only">
                Quality dial (before/after)
            </label>
            <input
                ref={rangeRef}
                id={id}
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="quality-range w-full"
                aria-label="Quality dial"
            />
            </div>

            {/* Optional: add a subtle bottom gradient behind slider for readability */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        </div>

  );
}
