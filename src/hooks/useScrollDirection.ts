"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection(threshold = 8) {
  const [show, setShow] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        if (Math.abs(delta) > threshold) {
          // show at top, show when scrolling up, hide when scrolling down
          setShow(y < 10 || delta < 0);
          lastY.current = y;
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return show;
}
