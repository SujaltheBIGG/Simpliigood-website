import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import InquiryForm, { type Field } from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import ScrollFrameAnimation from "@/components/ScrollFrameAnimation";

export const metadata: Metadata = {
  title: "Simplii Texture | Spirulina Alternative Seafood Technology",
  description:
    "Kamu — the salmon alternative made from spirulina texture technology. For investors, food companies, and chefs.",
};

const SECTION = "px-6 py-20 md:px-20 md:py-[120px]";
const LABEL = "font-subheadline font-medium text-[13px] uppercase tracking-[0.15em]";
const H2 = "font-section-headline font-extrabold text-[clamp(36px,5vw,56px)] uppercase leading-[1.05]";

const PROCESS = [
  {
    num: "1",
    title: "Grow Spirulina",
    body: "Fresh spirulina grown in controlled, clean-water greenhouses.",
  },
  {
    num: "2",
    title: "Extract the Texture",
    body: "Proprietary process separates and restructures the protein matrix into salmon-like fibrous layers.",
  },
  {
    num: "3",
    title: "The Alternative",
    body: "The result looks, flakes, and tastes like premium smoked salmon. Zero fish involved.",
  },
];

const PRODUCTS = [
  {
    image: images.kamuSlices,
    badge: "Kamu Slices",
    title: "The Salmon Alternative",
    body: "Whole slices with the exact texture of smoked salmon. For restaurants, food service, and retail. Works on bagels, boards, pasta, and fine dining plating.",
    tags: ["Restaurants", "Food Service", "Retail", "Fine Dining"],
    cta: "Request Kamu Slices Sample →",
  },
  {
    image: images.kamuFlakes,
    badge: "Kamu Flakes",
    title: "The Spread Alternative",
    body: "Perfect for bagel spreads, salads, ready meals, and manufacturing applications. Available in bulk formats for food production at scale.",
    tags: ["Bagels", "Salads", "Ready Meals", "Bulk Manufacturing"],
    cta: "Request Kamu Flakes Sample →",
  },
];

const CONTACT_FIELDS: Field[] = [
  { type: "text", name: "name", placeholder: "Full name" },
  { type: "text", name: "company", placeholder: "Company or organization" },
  {
    type: "select",
    name: "role",
    placeholder: "I am a...",
    options: [
      "Investor",
      "Food Company",
      "Distributor",
      "Chef / Restaurant",
      "Press / Media",
      "Other",
    ],
  },
  { type: "email", name: "email", placeholder: "Email address" },
  {
    type: "text",
    name: "website",
    placeholder: "Website (optional)",
    required: false,
  },
  {
    type: "textarea",
    name: "interest",
    placeholder: "Tell us about your interest in SimpliiGood Texture Technology",
  },
];

export default function SimpliiTexturePage() {
  return (
    <main>
      <Nav variant="texture" />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col bg-spirulina-green md:flex-row">
        <div className="order-2 flex w-full flex-col justify-center px-6 pb-16 pt-12 md:order-1 md:w-1/2 md:px-20 md:py-20">
          <Reveal>
            <p className={`${LABEL} text-starburst-green`}>Simplii Texture</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-hero-headline font-semibold text-[clamp(48px,7vw,80px)] uppercase leading-[0.95] text-white">
              The Future of Seafood Starts Here.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[440px] font-body text-[18px] leading-[1.6] text-white/75">
              Proprietary spirulina texture technology. Looks like salmon.
              Tastes like salmon. Made entirely from plants.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <CTAButton href="#contact" variant="primary">
                Request a Sample
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <Link
              href="#contact"
              className="mt-4 inline-block font-subheadline font-medium text-[14px] text-white underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              For Investors &amp; Partners →
            </Link>
          </Reveal>
        </div>

        <div className="relative order-1 h-[280px] w-full md:order-2 md:h-auto md:w-1/2">
          <Image
            src={images.textureHero}
            alt="Plant-based salmon alternative plated at a restaurant"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Technology ────────────────────────────────────────────── */}
      <section id="technology" className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              The Technology
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className={`${H2} mx-auto mt-4 max-w-[800px] text-center text-spirulina-green`}
            >
              We extracted the texture of protein from spirulina.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-center font-body text-[18px] text-spirulina-green/80">
              By separating chlorophyll (blue) from spirulina (green), we
              created a neutral canvas with the exact fibrous texture of salmon.
              No fish. No compromise.
            </p>
          </Reveal>

          {/* 3-step process with connecting line */}
          <div className="relative mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
            <div
              aria-hidden="true"
              className="absolute left-[16.66%] right-[16.66%] top-9 hidden h-0.5 bg-starburst-green/25 md:block"
            />
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 120} className="relative text-center">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-starburst-green font-hero-headline font-semibold text-[28px] text-white">
                  {step.num}
                </div>
                <h3 className="mt-5 font-card-headline font-medium text-[20px] text-spirulina-green">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[280px] font-body text-[15px] leading-[1.6] text-spirulina-green/70">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-y-4">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-1}
          className="bg-[#31B278] text-white py-4"
        >
          Simplii Texture • Kamu • Plant-Based Salmon • Spirulina Technology •
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={-1}
          className="bg-[#EF467B] text-white py-4"
        >
          The Future of Seafood • Zero Fish • No Compromise •
        </MarqueeAnimation>
      </div>

      {/* ── Products ──────────────────────────────────────────────── */}
      <section id="products" className={`bg-[#f9f9f9]`}>
        <div className={`mx-auto max-w-[1100px] ${SECTION}`}>
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              Product Lines
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mb-16 mt-4 text-center text-spirulina-green`}>
              Meet Kamu.
            </h2>
          </Reveal>
        </div>

        <ParallaxScrollFeatureSection
          sections={PRODUCTS.map((product, index) => ({
            id: index + 1,
            title: product.title,
            description: product.body,
            imageUrl: product.image,
            reverse: index % 2 === 1,
            badge: product.badge,
            tags: product.tags,
          }))}
        />
      </section>

      {/* ── Scroll Frame Animation ─────────────────────────────────── */}
      <ScrollFrameAnimation />

      {/* ── Investor contact ──────────────────────────────────────── */}
      <section id="contact" className={`bg-spirulina-green ${SECTION}`}>
        <Reveal>
          <p className={`${LABEL} text-center text-starburst-green`}>
            Get In Touch
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`${H2} mt-4 text-center text-white`}>Partner with us.</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mb-16 mt-4 max-w-[640px] text-center font-body text-[18px] text-white/70">
            For investors, food companies, distributors, and chefs interested in
            Kamu or licensing the SimpliiGood texture technology.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <InquiryForm
            fields={CONTACT_FIELDS}
            submitLabel="Send Message →"
            note="All inquiries are reviewed personally by our team."
            theme="dark"
          />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
