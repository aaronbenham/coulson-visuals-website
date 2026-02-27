// src/components/ServiceFAQMini.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  faqs: { q: string; a: string }[];
};

export default function ServiceFAQMini({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
          FAQ
        </p>
        <h2 className="mt-2 text-lg sm:text-xl font-semibold">Quick answers</h2>
        <p className="mt-2 text-sm text-white/70">
          A few details clients typically ask before booking.
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold">{f.q}</span>
                  <span
                    className={`text-white/60 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}