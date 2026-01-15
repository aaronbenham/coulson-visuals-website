export const metadata = {
  title: "Privacy Policy | Coulson Visuals",
  description: "Privacy policy for Coulson Visuals.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-white/70 leading-relaxed">
        This page explains what personal information we collect, why we collect it, and how it is used.
      </p>

      <div className="mt-10 space-y-8 text-sm text-white/70 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-white">What we collect</h2>
          <p className="mt-2">
            If you contact us, we may collect details you provide such as your name, email address,
            phone number, and information about your enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">How we use your information</h2>
          <p className="mt-2">
            We use your details to respond to enquiries, provide quotes, schedule shoots, and deliver services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Cookies & analytics</h2>
          <p className="mt-2">
            We may use basic analytics to understand site usage and improve performance. If enabled, this may
            involve cookies or similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Data sharing</h2>
          <p className="mt-2">
            We do not sell your data. We may share information only when necessary to operate the service
            (e.g., email providers) or to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Your rights</h2>
          <p className="mt-2">
            You can request access, correction, or deletion of your personal information by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <p className="mt-2">
            For privacy-related requests, contact us at{" "}
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
