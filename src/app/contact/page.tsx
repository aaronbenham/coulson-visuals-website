export const metadata = {
  title: "Contact",
  description: "Book an automotive shoot or request a quote.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Book a shoot</h1>
      <p className="mt-3 text-white/75 text-sm sm:text-base">
        Tell me what you need and I’ll get back with availability and a quote.
      </p>

      <form className="mt-8 max-w-xl space-y-4">
        <input className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Name" />
        <input className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Email" />
        <input className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Location" />
        <textarea className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" placeholder="Shoot details" rows={5} />
        <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
          Send enquiry
        </button>
      </form>
    </main>
  );
}
