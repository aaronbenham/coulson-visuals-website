export const metadata = {
  title: "Terms of Service | Coulson Visuals",
  description: "Terms of service for Coulson Visuals.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow (page-wide) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(53,178,223,0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-4 py-16">
        {/* Card layer */}
        <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-7 sm:p-10">
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            LEGAL
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            This page sets out the basic terms for using this website and booking services.
          </p>

          <div className="mt-10 space-y-8 text-sm text-white/70 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-white">Bookings & Payments</h2>
              <p className="mt-2">
                Bookings are confirmed once agreed in writing. Payments, deposits, and cancellation
                terms will be confirmed at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Deliverables</h2>
              <p className="mt-2">
                Deliverables (photos/videos), turnaround times, and revisions (if any) will be
                specified per project or package.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Usage & Licensing</h2>
              <p className="mt-2">
                Usage rights for delivered content are agreed per project. Unless stated otherwise,
                content remains the creator’s intellectual property while the client receives a
                license to use it for the agreed purposes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Liability</h2>
              <p className="mt-2">
                We are not responsible for indirect losses. Our liability is limited to the amount
                paid for the relevant service, to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Contact</h2>
              <p className="mt-2">
                Questions about these terms? Email{" "}
                <a className="text-accent hover:underline" href="mailto:hello@coulsonvisuals.com">
                  hello@coulsonvisuals.com
                </a>
                .
              </p>
            </section>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-white/50">
                Last updated: 20/02/2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}