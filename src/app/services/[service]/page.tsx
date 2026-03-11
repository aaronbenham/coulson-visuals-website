import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SERVICES,
  type ServiceKey,
  getService,
  formatGBP,
  priceIncVat,
} from "../_data";

import ServiceHero from "@/src/components/ServiceHero";
import ServiceDetails from "@/src/components/ServiceDetails";
import ServiceTimeline from "@/src/components/ServiceTimeline";
import ServiceBookPanel from "@/src/components/ServiceBookPanel";
import ServiceFAQMini from "@/src/components/ServiceFAQMini";

type Params = { service: string };

// static params can stay sync
export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.key }));
}

// ✅ params is a Promise in your Next version
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;

  const key = service as ServiceKey;
  const svc = SERVICES.find((s) => s.key === key);
  if (!svc) {
    return { title: "Service | Coulson Visuals" };
  }

  const inc = priceIncVat(svc.priceExVat);
  return {
    title: `${svc.title} | Coulson Visuals`,
    description: `${svc.title} (${formatGBP(svc.priceExVat)} + VAT, total ${formatGBP(
      inc
    )}). Premium automotive photography and short-form video, built for brands and bookings.`,
  };
}

// ✅ make page async + await params
export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service } = await params;

  const key = service as ServiceKey;

  if (!SERVICES.some((s) => s.key === key)) return notFound();

  const s = getService(key);

  return (
    <main className="min-h-screen bg-black text-white">
      <ServiceHero
        eyebrow="SERVICE"
        title={s.title}
        tagline={s.tagline}
        priceExVat={s.priceExVat}
        highlight={s.highlight}
        onBookHref={s.calendlyUrl}
      />

      <ServiceDetails bullets={s.bullets} deliverables={s.deliverables} />

      <ServiceTimeline steps={s.timeline} />

      <ServiceBookPanel calendlyUrl={s.calendlyUrl} title={s.title} />

      <ServiceFAQMini faqs={s.faqs} />
    </main>
  );
}