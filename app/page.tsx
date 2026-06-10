import Image from "next/image";
import Nav from "@/components/Nav";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";

// Root SEO is inherited from app/layout.tsx (same title/description).

export default function HomePage() {
  return (
    <main className="relative">
      <Nav variant="root" />

      <div className="flex min-h-screen flex-col md:h-screen md:flex-row md:overflow-hidden">
        {/* ── Left panel · Simplii Green ───────────────────────────── */}
        <section className="group relative flex min-h-[55vh] w-full flex-col items-center justify-center bg-simplii-yellow px-6 py-24 text-center transition-[filter] duration-500 hover:brightness-[1.03] md:min-h-0 md:h-full md:w-1/2 md:py-0">
          <div className="relative h-[240px] w-[240px] overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(21,64,72,0.18)] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src={images.rootGreen}
              alt="Fresh green spirulina smoothie"
              fill
              priority
              sizes="(max-width: 1024px) 300px, 400px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <p className="mt-8 font-subheadline font-medium text-[13px] uppercase tracking-[0.15em] text-spirulina-green">
            SIMPL<span className="lowercase">ii</span>GOOD
          </p>
          <h1 className="mt-1 font-hero-headline font-semibold text-[48px] uppercase leading-none text-spirulina-green sm:text-[56px]">
            Simplii Green
          </h1>
          <p className="mt-2 font-body text-[16px] text-spirulina-green">
            Fresh-Frozen Spirulina
          </p>
          <p className="mt-1 font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-spirulina-green">
            Real. Super. Food.
          </p>

          <CTAButton href="/simplii-green" variant="primary" className="mt-8">
            Explore Simplii Green →
          </CTAButton>
        </section>

        {/* ── Right panel · Simplii Texture ────────────────────────── */}
        <section className="group relative flex min-h-[55vh] w-full flex-col items-center justify-center bg-spirulina-green px-6 py-24 text-center transition-[filter] duration-500 hover:brightness-[1.08] md:min-h-0 md:h-full md:w-1/2 md:py-0">
          <div className="relative h-[240px] w-[240px] overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.4)] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src={images.rootTexture}
              alt="Plant-based salmon alternative, plated"
              fill
              priority
              sizes="(max-width: 1024px) 300px, 400px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h2 className="mt-8 font-hero-headline font-semibold text-[48px] uppercase leading-none text-white sm:text-[56px]">
            Simplii Texture
          </h2>
          <p className="mt-2 font-body text-[16px] text-white/75">
            Alternative Seafood Technology
          </p>
          <p className="mt-1 font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-white/60">
            For Investors &amp; Partners
          </p>

          <CTAButton
            href="/simplii-texture"
            variant="outline-white"
            className="mt-8"
          >
            Explore Technology →
          </CTAButton>
        </section>
      </div>
    </main>
  );
}
