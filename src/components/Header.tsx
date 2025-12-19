"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showHeader = useScrollDirection();
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 will-change-transform
      ${(showHeader || open) ? "translate-y-0 shadow-lg shadow-black/20" : "-translate-y-full"}`}
    >
      <div className="pt-[env(safe-area-inset-top)]">
        <div
          className={`relative w-full border-b border-white/10 transition-colors
          ${open ? "bg-black" : "bg-black/60 backdrop-blur-xl"}`}
        >
          <div className="relative mx-auto flex items-center px-3 py-2 sm:px-4 lg:max-w-6xl">
            {/* Logo */}
            <Link href="/" className="z-10 flex items-center" onClick={() => setOpen(false)}>
              <Image
                src="/logos/no-background-logo-cropped.png"
                alt="Coulson Visuals logo"
                width={200}
                height={25}
                priority
              />
            </Link>

            {/* Burger (right) */}
            <div className="ml-auto z-10">
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="site-menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
              >
                {open ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5 text-accent" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu panel (animated) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (tap to close) */}
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              ref={panelRef}
              id="site-menu"
              className="absolute left-0 right-0 z-50"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 520, damping: 40 }}
            >
              <div className="mx-auto lg:max-w-6xl px-3 sm:px-4">
                <div className="mt-2 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl">
                  <nav className="p-3 grid gap-2 text-base">
                    <Link
                      onClick={() => setOpen(false)}
                      href="/portfolio"
                      className="rounded-2xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      Portfolio
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/services"
                      className="rounded-2xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/about"
                      className="rounded-2xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/contact"
                      className="rounded-2xl bg-accent px-4 py-3 font-semibold text-black hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Book a shoot
                    </Link>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
