"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "Do you travel for shoots?",
    a: "Yes. I’m UK-based and can travel. If you’re outside my usual area, I’ll confirm any travel costs before booking.",
  },
  {
    q: "How does delivery work?",
    a: "You’ll receive a clean download link with web/social-ready exports. Turnaround depends on the service (photoshoot sessions aim for 48 hours).",
  },
  {
    q: "Can I request specific shots?",
    a: "Absolutely. Most clients send a quick shot list or references — we’ll align on the vibe before the shoot.",
  },
  {
    q: "Do you require a deposit?",
    a: "For most shoots, a deposit is recommended to secure the slot and reduce no-shows. Final terms are confirmed at booking.",
  },
  {
    q: "What if the weather is bad?",
    a: "We can reschedule if conditions don’t match the desired look. For indoor/covered locations, we can often proceed as planned.",
  },
  {
    q: "Is the monthly subscription right for me?",
    a: "If you want consistent posting and predictable content each month (especially detailers/garages), it’s the best option. If you only need one deliverable, pick single video or a shoot session.",
  },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="FAQ">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-white/60">FAQ</p>
      <h2 className="mt-2 text-lg sm:text-xl font-semibold">Quick answers</h2>
      <p className="mt-2 text-sm text-white/70">
        The stuff clients usually ask before booking.
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
