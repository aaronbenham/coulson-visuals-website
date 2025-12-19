"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: { src: string; alt?: string }[];
  speedPxPerSec?: number; // default 35
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function AutoScrollStrip({ images, speedPxPerSec = 35 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const xRef = useRef(0);
  const lastRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const draggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const xStartRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  // Duplicate for seamless loop
  const items = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    lastRef.current = performance.now();

    const tick = (t: number) => {
      rafRef.current = requestAnimationFrame(tick);

      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;

      // Pause only while actively dragging
      if (draggingRef.current) return;

      // Prevent big jumps (e.g. slow devices)
      const safeDt = clamp(dt, 0, 0.05);

      const contentWidth = track.scrollWidth / 2; // because doubled
      if (contentWidth <= 0) return;

      xRef.current += speedPxPerSec * safeDt;
      if (xRef.current >= contentWidth) xRef.current -= contentWidth;

      track.style.transform = `translateX(${-xRef.current}px)`;
    };

    rafRef.current = requestAnimationFrame(tick);

    // Fix tab-switch jank
    const onVisibility = () => {
      lastRef.current = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [speedPxPerSec]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only left click for mouse; allow touch/pen
    if (e.pointerType === "mouse" && e.button !== 0) return;

    draggingRef.current = true;
    setIsDragging(true);

    pointerStartXRef.current = e.clientX;
    xStartRef.current = xRef.current;

    // capture pointer so drag continues even if you leave the element
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const contentWidth = track.scrollWidth / 2;
    if (contentWidth <= 0) return;

    const dx = e.clientX - pointerStartXRef.current;
    // Drag direction: move strip with your hand (natural feel)
    let next = xStartRef.current - dx;

    // keep looping range [0, contentWidth)
    next = ((next % contentWidth) + contentWidth) % contentWidth;

    xRef.current = next;
    track.style.transform = `translateX(${-xRef.current}px)`;
  };

  const onPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    setIsDragging(false);

    // reset timing so resume is smooth
    lastRef.current = performance.now();

    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div
        className={`cursor-grab select-none ${isDragging ? "cursor-grabbing" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUpOrCancel}
        onPointerCancel={onPointerUpOrCancel}
      >
        <div className="py-3">
          <div
            ref={trackRef}
            className="flex gap-3 will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {items.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt ?? "Automotive portfolio preview"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>
    </div>
  );
}
