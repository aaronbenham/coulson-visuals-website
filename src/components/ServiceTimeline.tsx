// src/components/ServiceTimeline.tsx
type Props = {
  title?: string;
  subtitle?: string;
  steps: { title: string; desc: string }[];
};

export default function ServiceTimeline({
  title = "How it works",
  subtitle = "A simple process that keeps quality high and turnaround fast.",
  steps,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
          PROCESS
        </p>
        <h2 className="mt-2 text-lg sm:text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              {/* tiny hover polish */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_30%,rgba(53,178,223,0.14),transparent_55%)]" />
              </div>

              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/60">
                    STEP
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-4 h-px w-full bg-white/10" />
                <div className="mt-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}