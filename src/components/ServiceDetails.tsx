// src/components/ServiceDetails.tsx
type Props = {
  bullets: string[];
  deliverables: { k: string; v: string }[];
};

export default function ServiceDetails({ bullets, deliverables }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            OVERVIEW
          </p>
          <h2 className="mt-2 text-lg sm:text-xl font-semibold">
            What you get
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8">
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            DELIVERABLES
          </p>
          <h2 className="mt-2 text-lg sm:text-xl font-semibold">
            Included in this service
          </h2>

          <div className="mt-5 grid gap-3">
            {deliverables.map((d) => (
              <div
                key={d.k}
                className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                  {d.k.toUpperCase()}
                </p>
                <p className="text-sm font-semibold text-white/80 text-right">
                  {d.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}