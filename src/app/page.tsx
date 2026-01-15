import VideoHero from "../components/VideoHero";
import AutoScrollStrip from "../components/AutoScrollStrip";
import QualityDial from "../components/QualityDial";
import ProcessRoadmap from "../components/ServiceSection";
import ExperienceCard from "../components/ExperienceCard";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
  return (
    <main>
      <VideoHero />

      {/* EXPERIENCE section that overlaps the video */}
      <section className="relative z-20 -mt-16 sm:-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">

          <ExperienceCard />

          {/* Cinematic image strip (use your own images) */}
          <div className="my-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <AutoScrollStrip
              images={[
                { src: "/auto-scroll/amg-1.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/brands-hatch-67.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/drfit-motogp-4.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/amg-2.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/mx5-poster-pic-1.webp", alt: "AMG detail shot" },
                { src: "/auto-scroll/car-motogp.webp", alt: "AMG detail shot" },
              ]}
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
            beforeSrc="/quality-dial/before.webp"
            afterSrc="/quality-dial/after.webp"
          />
        </div>
      </section>

      <AboutSection />
      
    </main>
  );
}
