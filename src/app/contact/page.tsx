"use client";

import { useState } from "react";

type Status =
  | {
      type: "success" | "error";
      message: string;
    }
  | {
      type: null;
      message: "";
    };

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<Status>({
    type: null,
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // Clear any previous status
    setStatus({
      type: null,
      message: "",
    });

    const formData = new FormData(e.target);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to send enquiry.");
      }

      setStatus({
        type: "success",
        message:
          "Thank you for your enquiry. We've received your message and will get back to you as soon as possible.",
      });

      e.target.reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-black text-white flex items-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(53,178,223,0.18),transparent_60%)]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(53,178,223,0.15),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl px-4 py-20">
        <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Contact Us
          </h1>

          <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
            Have any questions or want to know more about our services? Fill
            out the form below and we'll get back to you as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
            />

            <input
              name="location"
              type="text"
              placeholder="Location"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Enquiry Details"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3
                         focus:border-accent focus:ring-2 focus:ring-accent/30
                         focus:outline-none transition-all resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black
                         transition-all hover:brightness-110 disabled:opacity-60
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-accent focus-visible:ring-offset-2
                         focus-visible:ring-offset-black"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            {status.type && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
