import VideoHero from "@/src/components/VideoHero";
import AutoScrollStrip from "@/src/components/AutoScrollStrip";
import QualityDial from "@/src/components/QualityDial";
import ProcessRoadmap from "@/src/components/ServiceSection";
import ExperienceCard from "@/src/components/ExperienceCard";
import AboutSection from "@/src/components/AboutSection";
import ServicesCTA from "@/src/components/ServicesCTA";
import { media } from "@/src/lib/site-media";

export default function HomePage() {
  return (
    <main>
      <VideoHero />

      {/* EXPERIENCE section that overlaps the video */}
      <section className="relative z-20 -mt-16 sm:-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">

          <ExperienceCard />

          {/* Cinematic image strip */}
          <div className="my-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <AutoScrollStrip
              images={media.autoScroll.map((src) => ({
                src,
                alt: src
                  .split("/")
                  .pop()
                  ?.replace(".webp", "")
                  .replace(/-/g, " ") ?? "Automotive photography",
              }))}
              speedPxPerSec={32}
            />
          </div>

          {/* 4-step roadmap (phase 1-2-3-4) */}
          <ProcessRoadmap />

        </div>
      </section>

      <section className="relative z-20 -mt-10 sm:-mt-20 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <QualityDial
            beforeSrc={media.qualityDial.before}
            afterSrc={media.qualityDial.after}
          />
        </div>
      </section>

      <AboutSection />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ServicesCTA />
      </section>
  
    </main>
  );
}
