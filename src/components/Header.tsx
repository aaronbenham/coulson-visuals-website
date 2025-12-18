"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const showHeader = useScrollDirection(20);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

  return (
    <header
        className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 will-change-transform
        ${showHeader ? "translate-y-0 shadow-lg shadow-black/20" : "-translate-y-full"}`}
        
        >
        <div className="pt-[env(safe-area-inset-top)]">
            <div className="w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="text-sm font-semibold tracking-[0.14em]">
                COULSON VISUALS
                </Link>

                {/* Burger */}
                <button
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5"
                >
                <div className="space-y-1.5">
                    <div className="h-0.5 w-5 bg-white" />
                    <div className="h-0.5 w-5 bg-white" />
                    <div className="h-0.5 w-5 bg-white" />
                </div>
                </button>
            </div>
        </div>
    </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="mx-auto mt-[env(safe-area-inset-top)] max-w-6xl px-4 pt-3">
            <div className="rounded-3xl border border-white/10 bg-black p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.14em]">MENU</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
                >
                  Close
                </button>
              </div>

              <nav className="mt-4 grid gap-2 text-lg">
                <Link onClick={() => setOpen(false)} href="/portfolio" className="rounded-2xl bg-white/5 px-4 py-3">Portfolio</Link>
                <Link onClick={() => setOpen(false)} href="/services" className="rounded-2xl bg-white/5 px-4 py-3">Services</Link>
                <Link onClick={() => setOpen(false)} href="/about" className="rounded-2xl bg-white/5 px-4 py-3">About</Link>
                <Link onClick={() => setOpen(false)} href="/contact" className="rounded-2xl bg-white px-4 py-3 font-semibold text-black">Book a shoot</Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
