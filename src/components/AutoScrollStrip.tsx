"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: { src: string; alt?: string }[];
  speedPxPerSec?: number; // idle speed
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function AutoScrollStrip({ images, speedPxPerSec = 35 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // current offset (px)
  const xRef = useRef(0);

  // animation timing
  const lastRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // dragging
  const draggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const xStartRef = useRef(0);

  // velocity tracking (px/sec)
  const lastMoveXRef = useRef(0);
  const lastMoveTRef = useRef(0);
  const dragVelocityRef = useRef(0);

  // inertia velocity (px/sec). Positive means scrolling left faster.
  const inertiaVelRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  // Duplicate for seamless loop
  const items = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    lastRef.current = performance.now();

    const onVisibility = () => {
      lastRef.current = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const tick = (t: number) => {
      rafRef.current = requestAnimationFrame(tick);

      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;

      // clamp dt to avoid tab-switch jumps
      const safeDt = clamp(dt, 0, 0.05);

      const contentWidth = track.scrollWidth / 2;
      if (contentWidth <= 0) return;

      // If dragging, we don't auto-advance here (pointer move sets transform)
      if (draggingRef.current) return;

      // Apply inertia decay (friction)
      // Higher friction => stops sooner. Tune 3.0–6.0.
      const friction = 4.5;
      const v = inertiaVelRef.current;

      if (Math.abs(v) > 1) {
        // exponential-like decay
        const decay = Math.exp(-friction * safeDt);
        inertiaVelRef.current = v * decay;
      } else {
        inertiaVelRef.current = 0;
      }

      // Total speed = idle speed + inertia
      const totalSpeed = speedPxPerSec + inertiaVelRef.current;

      xRef.current += totalSpeed * safeDt;

      // wrap
      xRef.current = ((xRef.current % contentWidth) + contentWidth) % contentWidth;

      track.style.transform = `translateX(${-xRef.current}px)`;
    };

    rafRef.current = requestAnimationFrame(tick);

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

    // stop inertia immediately when user grabs
    inertiaVelRef.current = 0;

    pointerStartXRef.current = e.clientX;
    xStartRef.current = xRef.current;

    // init velocity sampling
    const now = performance.now();
    lastMoveXRef.current = e.clientX;
    lastMoveTRef.current = now;
    dragVelocityRef.current = 0;

    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const contentWidth = track.scrollWidth / 2;
    if (contentWidth <= 0) return;

    const dx = e.clientX - pointerStartXRef.current;

    // Natural feel: drag right moves content right (so offset decreases)
    let next = xStartRef.current - dx;
    next = ((next % contentWidth) + contentWidth) % contentWidth;

    xRef.current = next;
    track.style.transform = `translateX(${-xRef.current}px)`;

    // Estimate velocity from recent movement
    const now = performance.now();
    const dtMs = now - lastMoveTRef.current;
    if (dtMs > 0) {
      const dxMove = e.clientX - lastMoveXRef.current;

      // dxMove (screen space) -> content velocity (offset space) is negative
      const v = (-dxMove / dtMs) * 1000; // px/sec

      // Smooth velocity to avoid noise (EMA)
      const alpha = 0.25;
      dragVelocityRef.current = dragVelocityRef.current * (1 - alpha) + v * alpha;

      lastMoveXRef.current = e.clientX;
      lastMoveTRef.current = now;
    }
  };

  const onPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    setIsDragging(false);

    // Start inertia based on drag velocity
    // Cap so it doesn't go crazy.
    const maxInertia = 1400; // px/sec
    inertiaVelRef.current = clamp(dragVelocityRef.current, -maxInertia, maxInertia);

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
        className={`select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
                  decoding="async"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>
    </div>
  );
}
