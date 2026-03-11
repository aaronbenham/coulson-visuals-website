import { siteConfig } from "@/src/lib/site-config";

export const metadata = {
  title: "Privacy Policy | Coulson Visuals",
  description: "Privacy policy for Coulson Visuals.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow (page-wide) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(53,178,223,0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-4 py-16">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-7 sm:p-10">
          <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">
            LEGAL
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            This page explains what personal information we collect, why we collect it,
            and how it is used.
          </p>

          <div className="mt-10 space-y-8 text-sm text-white/70 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-white">What We Collect</h2>
              <p className="mt-2">
                If you contact us, we may collect details you provide such as your name,
                email address, phone number, and information about your enquiry.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">How We Use Your Information</h2>
              <p className="mt-2">
                We use your details to respond to enquiries, provide quotes, schedule shoots,
                and deliver services.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Cookies & Analytics</h2>
              <p className="mt-2">
                We may use basic analytics to understand site usage and improve performance.
                If enabled, this may involve cookies or similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Data Sharing</h2>
              <p className="mt-2">
                We do not sell your data. We may share information only when necessary
                to operate the service (e.g., email providers) or to comply with legal
                obligations.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Your Rights</h2>
              <p className="mt-2">
                You can request access, correction, or deletion of your personal
                information by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">Contact</h2>
              <p className="mt-2">
                For privacy-related requests, contact us at{" "}
                <a
                  className="text-accent hover:underline"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
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