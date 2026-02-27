"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  // TODO: edit these to match your real details
  const brand = {
    name: "Coulson Visuals",
    email: "hello@coulsonvisuals.com",
    phone: "07982 328217",
    region: "GB",
    city: "Newbury, Berkshire",
    website: "https://www.coulsonvisuals.com",
    social: {
      instagram: "https://instagram.com/coulson_visuals",
      tiktok: "https://tiktok.com/@coulson_visuals",
      linkedin: "https://linkedin.com/in/ben-coulson",
    },
    // Optional: add actual address later if you want stronger local SEO
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    url: brand.website,
    areaServed: brand.city,
    email: brand.email,
    telephone: brand.phone,
    sameAs: [brand.social.instagram, brand.social.tiktok, brand.social.linkedin].filter(Boolean),
    // Optional if you add later:
    // address: {
    //   "@type": "PostalAddress",
    //   addressCountry: brand.region,
    //   addressLocality: "Cheltenham",
    // },
  };

  return (
    <div
      className="mt-10 border-t border-white/10 bg-black/80 backdrop-blur-xl"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
                <Image
                    src="/logos/no-background-logo-cropped.webp"
                    alt="Coulson Visuals"
                    width={200}
                    height={25}
                    priority={false}
                />
            </Link>

            {/* Availability status */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-[0.14em] text-white/70">
                AVAILABLE FOR BOOKINGS
              </span>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium automotive photography and short-form video for brands,
              detailers, and performance garages.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition-colors hover:text-accent hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href={brand.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition-colors hover:text-accent hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                <FaTiktok className="h-5 w-5" />
              </a>

              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition-colors hover:text-accent hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">CONTACT</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="text-white/60">{brand.city}</li>
            </ul>

            <p className="mt-4 text-xs text-white/50">
              Response time: typically within 24-48 hours.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">QUICK LINKS</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Portfolio", href: "https://www.coulsonvisualsportfolio.com/" },
                { label: "Services", href: "/services" },
                { label: "FAQ", href: "/services#FAQ" },
                { label: "About", href: "/#about" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} target={l.label === "Portfolio" ? "_blank" : ""} className="text-white/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold italic tracking-[0.18em] text-white/60">ENQUIRIES</p>
            <p className="mt-4 text-sm text-white/70">
              Ready to elevate your visuals? Tell me what you’re shooting and where.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Enquire Now
            </Link>

            <p className="mt-3 text-xs text-white/50">
              Shoots available across the UK. Travel quotes available.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">© {year} {brand.name}. All rights reserved.</p>

          <div className="flex gap-6 text-xs text-white/60">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
