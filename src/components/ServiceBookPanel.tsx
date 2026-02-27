// src/components/ServiceBookPanel.tsx
type Props = {
  calendlyUrl: string;
  title: string;
  note?: string;
};

export default function ServiceBookPanel({
  calendlyUrl,
  title,
  note = "Manual invoice after booking. You’ll receive a confirmation email with next steps.",
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 sm:p-8">
        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.14),transparent_60%)]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
              BOOKING
            </p>
            <h2 className="mt-2 text-lg sm:text-xl font-semibold">
              Book {title}
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-xl">{note}</p>
          </div>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Choose a date (Calendly)
          </a>
        </div>
      </div>
    </section>
  );
}