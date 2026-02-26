export const metadata = {
  title: "Contact",
  description: "Book an automotive shoot or request a quote.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(53,178,223,0.15),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl px-4 py-20">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-8 sm:p-10">

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Contact Us
          </h1>

          <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
            Have any questions or want to know more about our services? Fill out the form below and
            I’ll get back to you as soon as possible.
          </p>

          <form className="mt-8 space-y-4">
            <input
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
              placeholder="Name"
            />

            <input
              type="email"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
              placeholder="Email"
            />

            <input
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
              placeholder="Location"
            />

            <textarea
              rows={5}
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all resize-none"
              placeholder="Enquiry Details"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black
                         transition-all hover:brightness-110
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-accent focus-visible:ring-offset-2
                         focus-visible:ring-offset-black"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
