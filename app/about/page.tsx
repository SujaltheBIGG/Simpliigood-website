import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About SimpliiGood | Fresh-Frozen Spirulina",
  description: "Learn about SimpliiGood's mission to bring fresh-frozen spirulina to everyone. Our sustainable farming practices and commitment to quality.",
};

const SECTION = "px-6 py-20 md:px-20 md:py-[120px]";
const LABEL = "font-subheadline font-medium text-[13px] uppercase tracking-[0.15em]";
const H2 = "font-hero-headline font-semibold text-[clamp(40px,6vw,64px)] uppercase leading-[0.95] tracking-tightest text-spirulina-green";

export default function AboutPage() {
  return (
    <main>
      <Nav variant="green" />

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-spirulina-green">
        <div className="relative z-10 px-6 py-20 md:px-20 md:py-0">
          <div className="max-w-[800px]">
            <Reveal>
              <p className={`${LABEL} mb-4 text-starburst-green`}>
                About SimpliiGood
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-hero-headline font-semibold text-[clamp(56px,8vw,96px)] uppercase leading-[0.95] tracking-tightest text-white">
                Our Mission
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[600px] font-body text-[18px] leading-[1.6] text-white/90">
                We're on a mission to make fresh-frozen spirulina accessible to everyone. Our spirulina is crafted with care, using sustainable farming practices to deliver a pure, potent superfood that's completely free from additives and preservatives.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <CTAButton href="/shop" variant="primary" className="mt-8">
                Shop Now
              </CTAButton>
            </Reveal>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src={images.greenHero}
            alt="SimpliiGood spirulina"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              Our Story
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mx-auto mb-16 mt-4 max-w-[800px] text-center`}>
              From Farm to Freezer
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <p className="font-body text-[18px] leading-[1.6] text-spirulina-green">
                  SimpliiGood was born from a simple observation: fresh spirulina is incredibly nutritious, but most people only have access to dried powders that lose much of their potency during processing.
                </p>
                <p className="mt-6 font-body text-[18px] leading-[1.6] text-spirulina-green">
                  We partnered with sustainable spirulina farms that use cutting-edge technology to harvest and freeze our spirulina within hours, preserving all the vital nutrients, enzymes, and antioxidants that make it such a powerful superfood.
                </p>
                <p className="mt-6 font-body text-[18px] leading-[1.6] text-spirulina-green">
                  Our facility operates on renewable energy, ensuring that we minimize our carbon footprint while delivering high-quality spirulina. We've implemented advanced techniques to reduce water usage and waste, making every step of our production eco-friendly.
                </p>
              </div>
              <div className="relative">
                <Image
                  src={images.productShot}
                  alt="SimpliiGood spirulina cubes"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sustainability ─────────────────────────────────────────────── */}
      <section className={`bg-simplii-yellow ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-spirulina-green`}>
              Sustainability
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mx-auto mb-16 mt-4 max-w-[800px] text-center`}>
              Our Climate Footprint
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-hero-headline font-semibold text-[24px] uppercase tracking-tightest text-spirulina-green mb-4">
                  Real Nutrition
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-spirulina-green">
                  We don't process out the good stuff. Flash-freezing preserves every nutrient nature intended.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-hero-headline font-semibold text-[24px] uppercase tracking-tightest text-spirulina-green mb-4">
                  Clean Innovation
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-spirulina-green">
                  Single ingredients. No fillers. No compromises. Technology that serves nutrition, not the other way around.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-hero-headline font-semibold text-[24px] uppercase tracking-tightest text-spirulina-green mb-4">
                  Planet Forward
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-spirulina-green">
                  Microalgae cultivation requires 99% less land and water than traditional protein sources.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────── */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              Our Team
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mx-auto mb-16 mt-4 max-w-[800px] text-center`}>
              Meet the Founders
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-spirulina-green/10 flex items-center justify-center">
                  <span className="font-hero-headline font-semibold text-[48px] text-spirulina-green">SH</span>
                </div>
                <h3 className="font-hero-headline font-semibold text-[20px] uppercase tracking-tightest text-spirulina-green">
                  Sarah Harper
                </h3>
                <p className="font-body text-[16px] text-spirulina-green/80">
                  CEO & Co-Founder
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-spirulina-green/10 flex items-center justify-center">
                  <span className="font-hero-headline font-semibold text-[48px] text-spirulina-green">MR</span>
                </div>
                <h3 className="font-hero-headline font-semibold text-[20px] uppercase tracking-tightest text-spirulina-green">
                  Michael Roberts
                </h3>
                <p className="font-body text-[16px] text-spirulina-green/80">
                  Director of Sustainability
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-spirulina-green/10 flex items-center justify-center">
                  <span className="font-hero-headline font-semibold text-[48px] text-spirulina-green">LN</span>
                </div>
                <h3 className="font-hero-headline font-semibold text-[20px] uppercase tracking-tightest text-spirulina-green">
                  Lisa Nguyen
                </h3>
                <p className="font-body text-[16px] text-spirulina-green/80">
                  Head of Product Development
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────────── */}
      <section className="bg-spirulina-green px-6 py-20 md:px-20 md:py-[120px]">
        <div className="mx-auto max-w-[800px] text-center">
          <Reveal>
            <h2 className="font-hero-headline font-semibold text-[clamp(40px,6vw,64px)] uppercase leading-[0.95] tracking-tightest text-white mb-6">
              Ready to Experience the Difference?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-[18px] leading-[1.6] text-white/90 mb-8">
              Join thousands of customers who have transformed their health with fresh-frozen spirulina.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <CTAButton href="/shop" variant="primary" className="mt-8">
              Shop SimpliiGreen
            </CTAButton>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
