export const metadata = {
  title: "Terms of Service | Coulson Visuals",
  description: "Terms of service for Coulson Visuals.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-sm text-white/70 leading-relaxed">
        This page sets out the basic terms for using this website and booking services.
      </p>

      <div className="mt-10 space-y-8 text-sm text-white/70 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-white">Bookings & payments</h2>
          <p className="mt-2">
            Bookings are confirmed once agreed in writing. Payments, deposits, and cancellation terms
            will be confirmed at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Deliverables</h2>
          <p className="mt-2">
            Deliverables (photos/videos), turnaround times, and revisions (if any) will be specified
            per project or package.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Usage & licensing</h2>
          <p className="mt-2">
            Usage rights for delivered content are agreed per project. Unless stated otherwise,
            content remains the creator’s intellectual property while the client receives a license
            to use it for the agreed purposes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Liability</h2>
          <p className="mt-2">
            We are not responsible for indirect losses. Our liability is limited to the amount paid
            for the relevant service, to the extent permitted by law.
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

        <p className="text-xs text-white/50">Last updated: {new Date().toLocaleDateString("en-GB")}</p>
      </div>
    </main>
  );
}
