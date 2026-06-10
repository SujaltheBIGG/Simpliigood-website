import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import MarqueeTicker from "@/components/MarqueeTicker";
import ComparisonTable from "@/components/ComparisonTable";
import InquiryForm, { type Field } from "@/components/InquiryForm";
import { TestimonialsColumn } from "@/components/TestimonialsColumn";
import RecipeCard from "@/components/RecipeCard";
import AnimatedRecipeCard from "@/components/AnimatedRecipeCard";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { ZoomParallax } from "@/components/ZoomParallax";
import ScrollFrameAnimation from "@/components/ScrollFrameAnimation";
import { images } from "@/lib/images";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const metadata: Metadata = {
  title: "Simplii Green | Fresh-Frozen Spirulina Cubes | SimpliiGood",
  description:
    "Fresh-frozen spirulina with no fishy taste or smell. Drop one cube into your smoothie. Find it at Wegmans, GoPuff, and 400+ US stores.",
};

const SECTION = "px-6 py-20 md:px-20 md:py-[120px]";
const LABEL = "font-subheadline font-medium text-[13px] uppercase tracking-[0.15em]";
const H2 =
  "font-section-headline font-extrabold text-[clamp(36px,5vw,56px)] uppercase leading-[1.05] text-spirulina-green";

const PILLARS = [
  {
    image: images.whatProtein,
    title: "Complete Plant Protein",
    body: "Spirulina contains all essential amino acids, making it one of the only plant sources of complete protein. More protein by weight than meat.",
  },
  {
    image: images.whatIron,
    title: "Rich In Bioavailable Iron",
    body: "The iron in fresh spirulina is more bioavailable than most plant sources. One cube delivers 15% of your daily iron — without the supplement taste.",
  },
  {
    image: images.whatAntioxidant,
    title: "Active Antioxidants",
    body: "Phycocyanin and beta-carotene are preserved only in fresh-frozen spirulina. Heat and drying destroy them. Freezing locks them in permanently.",
  },
];

const STEPS = [
  {
    num: "01",
    image: images.step1Freezer,
    title: "Grab From Your Freezer",
    body: "SimpliiGood cubes live in your freezer for up to 6 months. No prep, no mess, no decision.",
  },
  {
    num: "02",
    image: images.step2Blender,
    title: "Drop Into Your Drink",
    body: "One cube into your smoothie, water, coconut water, or juice. Takes exactly 3 seconds.",
  },
  {
    num: "03",
    image: images.step3Drink,
    title: "Feel The Difference",
    body: "No taste. No smell. Just the cleanest, most potent nutrition your body has ever received.",
  },
];

const RECIPES = [
  {
    image: images.recipeMorning,
    title: "Morning Smoothie",
    description: "2 cubes + banana + almond milk. 30 seconds.",
  },
  {
    image: images.recipeJuice,
    title: "Pure Green Juice",
    description: "1 cube + cold water + lemon. Stir and go.",
  },
  {
    image: images.recipeBowl,
    title: "Smoothie Bowl",
    description: "2 cubes + frozen banana. Top with granola.",
  },
  {
    image: images.recipeCoconut,
    title: "Coconut Boost",
    description: "1 cube + coconut water. Your new afternoon reset.",
  },
];

const TESTIMONIALS = [
  {
    text: "I was skeptical about spirulina after years of choking down green powders. SimpliiGood is completely different. I drop a cube in my morning smoothie and taste absolutely nothing except results. Third month in.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    name: "Sarah M.",
    role: "Verified Buyer",
  },
  {
    text: "The energy is real. Not jittery like caffeine — just clean and steady. I stopped my afternoon coffee two weeks after starting.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    name: "James T.",
    role: "Verified Buyer",
  },
  {
    text: "Finally a superfood that fits into my actual morning. Three seconds, one cube, done. My skin looks different. My energy is different. Not going back.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    name: "Priya K.",
    role: "Verified Buyer",
  },
];

const TESTIMONIALS_2 = [
  {
    text: "My doctor recommended spirulina for iron deficiency. I tried powders and hated the taste. SimpliiGood cubes changed everything. My iron levels are finally improving.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    name: "Emily R.",
    role: "Verified Buyer",
  },
  {
    text: "I use it in my post-workout smoothies. Recovery time has improved significantly. The convenience of just dropping a cube is unbeatable.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    name: "Michael B.",
    role: "Verified Buyer",
  },
  {
    text: "My kids actually ask for their green smoothies now. No fighting, no complaints. Just pure nutrition they enjoy.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    name: "Lisa K.",
    role: "Verified Buyer",
  },
  {
    text: "I've been using SimpliiGood for 6 months now. My immune system has never been stronger. Haven't been sick once since starting.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    name: "David L.",
    role: "Verified Buyer",
  },
  {
    text: "The frozen format is genius. No more clumpy powders that stick to the sides of the jar. Just pop a cube and blend.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    name: "Sophie M.",
    role: "Verified Buyer",
  },
  {
    text: "I was hesitant about the price, but the quality is unmatched. You get what you pay for, and this is worth every cent.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    name: "John P.",
    role: "Verified Buyer",
  },
];

const TESTIMONIALS_3 = [
  {
    text: "As a nutritionist, I recommend SimpliiGood to all my clients. The fresh-frozen form preserves the nutrients that powders lose. It's the real deal.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrChen",
    name: "Dr. Chen",
    role: "Nutritionist",
  },
  {
    text: "I've tried every green supplement on the market. This is the only one that delivers on its promises. Worth every penny.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    name: "Robert D.",
    role: "Verified Buyer",
  },
  {
    text: "The subscription box is perfect. Never run out, always fresh. My morning routine wouldn't be complete without it now.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    name: "Amanda S.",
    role: "Verified Buyer",
  },
];

const WHOLESALE_FIELDS: Field[] = [
  { type: "text", name: "business", placeholder: "Business name" },
  {
    type: "select",
    name: "businessType",
    placeholder: "Business type",
    options: [
      "Grocery Chain",
      "Smoothie Bar",
      "Café",
      "Juice Bar",
      "Wholesaler",
      "Food Service",
      "Distributor",
      "Other",
    ],
  },
  { type: "text", name: "name", placeholder: "Your name" },
  { type: "email", name: "email", placeholder: "Email address" },
  {
    type: "text",
    name: "volume",
    placeholder: "Estimated monthly volume",
    required: false,
  },
  {
    type: "textarea",
    name: "about",
    placeholder: "Tell us about your business",
  },
];

export default function SimpliiGreenPage() {
  return (
    <main>
      <Nav variant="green" />

      {/* ── 1 · Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={images.greenHero}
            alt="SimpliiGood hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex min-h-screen items-center px-6 py-20 md:px-20 md:py-0">
          <div className="max-w-[600px]">
            <Reveal direction="left">
              <p className={`${LABEL} mb-4 text-starburst-green`}>
                Fresh-Frozen Spirulina
              </p>
            </Reveal>
            <Reveal delay={100} direction="left">
              <h1 className="font-hero-headline font-semibold text-[clamp(56px,8vw,96px)] uppercase leading-[0.95] tracking-tightest text-white">
                Taste Sunshine
              </h1>
            </Reveal>
            <Reveal delay={200} direction="left">
              <p className="mt-6 max-w-[400px] font-body text-[18px] leading-[1.6] text-white/90">
                The clean, easy &amp; potent way to get your greens and
                micronutrients.
              </p>
            </Reveal>
            <Reveal delay={300} direction="left">
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href="/shop" variant="primary">
                  Shop Now
                </CTAButton>
                <CTAButton href="#store-locator" variant="secondary">
                  Find a Store Near You
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={400} direction="left">
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-subheadline font-medium text-[11px] uppercase tracking-[0.1em] text-white">
                <span>Non-GMO Verified</span>
                <span className="text-starburst-green">·</span>
                <span>Gluten Free</span>
                <span className="text-starburst-green">·</span>
                <span>Vegan</span>
              </div>
              <p className="mt-4 font-body text-[14px] text-white/90">
                <span className="tracking-wide text-starburst-green">
                  {"\u2605\u2605\u2605\u2605\u2605"}
                </span>{" "}
                200+ stores nationwide
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2 · Product Pouch ───────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:px-20 md:py-[120px]">
        <Reveal>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Product image with floating badges */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px]">
                <Image
                  src={images.productPouch}
                  alt="SIMPLIIGOOD Spirulina Pouch"
                  width={380}
                  height={400}
                  className="w-full h-auto relative z-10"
                  style={{ filter: "drop-shadow(rgba(21, 64, 72, 0.15) 0px 24px 60px)" }}
                />
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-4 py-2 shadow-lg z-20">
                  <span className="font-subheadline font-medium text-[11px] text-spirulina-green">
                    140g Pouch
                  </span>
                </div>
                <div className="absolute bottom-[30%] -left-4 bg-simplii-yellow rounded-full px-4 py-2 shadow-lg z-20">
                  <span className="font-subheadline font-medium text-[11px] text-spirulina-green">
                    10 Cubes
                  </span>
                </div>
                <div className="absolute -bottom-2 right-8 bg-spirulina-green rounded-full px-4 py-2 shadow-lg z-20">
                  <span className="font-subheadline font-medium text-[11px] text-white">
                    28g Serving
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="font-section-headline font-extrabold text-[28px] md:text-[36px] lg:text-[44px] text-spirulina-green leading-[1.05] tracking-tight mb-5">
                Fresh Frozen Spirulina
              </h2>
              <p className="font-body text-base text-spirulina-green/80 leading-relaxed mb-8 max-w-[420px]">
                One pouch. Ten frozen cubes. Endless possibilities. Flash-frozen to preserve every nutrient.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="font-subheadline font-medium text-[13px] text-simplii-yellow mt-0.5">01</span>
                  <div>
                    <h4 className="font-card-headline font-medium text-sm text-spirulina-green">The Pouch</h4>
                    <p className="font-body text-sm text-spirulina-green/70 leading-relaxed">Resealable 140g bag. Stays fresh in your freezer.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-subheadline font-medium text-[13px] text-simplii-yellow mt-0.5">02</span>
                  <div>
                    <h4 className="font-card-headline font-medium text-sm text-spirulina-green">The Tray</h4>
                    <p className="font-body text-sm text-spirulina-green/70 leading-relaxed">10 individual frozen cubes. Grab, pop, blend.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-subheadline font-medium text-[13px] text-simplii-yellow mt-0.5">03</span>
                  <div>
                    <h4 className="font-card-headline font-medium text-sm text-spirulina-green">The Cube</h4>
                    <p className="font-body text-sm text-spirulina-green/70 leading-relaxed">Each cube = 28g serving. Flash-frozen for maximum nutrients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 3 · Marquee ───────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── 4 · What is spirulina ─────────────────────────────────── */}
      <section id="what-is-it" className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              What Is It
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mx-auto mt-4 max-w-[800px] text-center`}>
              Spirulina is a solar-powered nutrient factory.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[600px] text-center font-body text-[18px] text-spirulina-green/80">
              A microalgae that converts sunlight into complete protein, iron, B
              vitamins, and antioxidants. The most nutrient-dense food on earth.
              And SimpliiGood is the only company that keeps it fresh-frozen —
              alive, not dead powder.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-card-headline font-medium text-[24px] text-spirulina-green">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-spirulina-green/75">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · Frozen vs powder ──────────────────────────────────── */}
      <section className={`bg-simplii-yellow ${SECTION}`}>
        <div className="watnf-hp-diff">
          <div className="watnf-hp-diff__inner">
            <div className="watnf-hp-diff__header">
              <Reveal>
                <div>
                  <div className="watnf-eyebrow on-dark text-center text-spirulina-green font-subheadline font-medium text-[13px] uppercase tracking-[0.1em]">
                    The difference
                  </div>
                  <h2 className="watnf-headline watnf-headline--section on-dark text-center font-hero-headline font-semibold text-[clamp(40px,6vw,72px)] uppercase leading-[0.95] tracking-tightest text-spirulina-green mt-4">
                    <span className="l1 is-uppercase block">Not all</span>
                    <span className="l2 is-uppercase block">SPIRULINA</span>
                    <span className="l3 block">is created equally.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className="watnf-hp-diff__body text-center font-body text-[18px] leading-[1.6] text-spirulina-green/80 max-w-[700px] mx-auto mt-6">
                  Almost all the spirulina sold in America is a dried, stale powder shipped from overseas. Ours is a deep-green, fresh-frozen food, harvested the same day we freeze it.
                </p>
              </Reveal>
            </div>

            <div className="watnf-hp-diff__compare grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <Reveal delay={150} direction="left">
                <div className="watnf-hp-diff__col watnf-hp-diff__col--ours bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(21,64,72,0.15)]">
                  <div className="kicker font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-starburst-green mb-4">
                    SimpliiGood
                  </div>
                  <h3 className="font-hero-headline font-semibold text-[32px] uppercase leading-[0.95] text-spirulina-green mb-6">
                    Fresh, Frozen, <em className="font-normal">whole.</em>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-starburst-green mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Whole cells with chlorophyll and phycocyanin intact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-starburst-green mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Flash-frozen within 4 hours of harvest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-starburst-green mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">One strain, one farm, traceable to the greenhouse</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-starburst-green mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">No drying, no heat, no chemical processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-starburst-green mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Antioxidants preserved by freezing</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={200} direction="right">
                <div className="watnf-hp-diff__col watnf-hp-diff__col--theirs bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(21,64,72,0.15)]">
                  <div className="kicker font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-starburst-green mb-4">
                    Commodity powder
                  </div>
                  <h3 className="font-hero-headline font-semibold text-[32px] uppercase leading-[0.95] text-spirulina-green mb-6">
                    DRIED, BAGGED, <em className="font-normal">dead.</em>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-spirulina-green/20 mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#154048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Oxidized, color-bleached, nutrient-degraded</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-spirulina-green/20 mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#154048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Dried for weeks, then on a shelf for months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-spirulina-green/20 mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#154048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Blended from anonymous farms, sourcing rarely disclosed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-spirulina-green/20 mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#154048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Lab results rarely shared with buyers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mark flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-spirulina-green/20 mt-1" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#154048" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                      </span>
                      <span className="font-body text-[16px] text-spirulina-green/80 leading-relaxed">Chalky, fishy aftertaste most people hate</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <Reveal delay={250}>
          <div className="mt-16 text-center">
            <CTAButton href="/shop" variant="secondary">
              Try Fresh-Frozen Now →
            </CTAButton>
          </div>
        </Reveal>
      </section>

      {/* ── 5 · How to use ────────────────────────────────────────── */}
      <section id="how-to-use" className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green`}>
              How To Use It
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={`${H2} mb-16 mt-4 text-center`}>Drop it in. Done.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <CardContainer className="inter-var" containerClassName="py-0">
                  <CardBody className="bg-white relative group/card border-spirulina-green/10 w-full h-auto rounded-2xl p-6 border shadow-card">
                    <CardItem
                      translateZ="50"
                      className="font-hero-headline font-semibold text-[80px] leading-none text-simplii-yellow"
                    >
                      {s.num}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover/card:shadow-xl"
                        />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="mt-6 font-card-headline font-medium text-[22px] text-spirulina-green"
                    >
                      {s.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="mt-2 font-body text-[16px] leading-[1.6] text-spirulina-green/75"
                    >
                      {s.body}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Reveal>
            ))}
          </div>

          {/* Recipe grid */}
          <Reveal>
            <h3 className="mb-10 mt-20 text-center font-section-headline font-extrabold text-[36px] uppercase text-spirulina-green">
              Works in everything.
            </h3>
          </Reveal>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {RECIPES.map((r, i) => (
              <Reveal key={r.title} delay={i * 150} direction="up">
                <AnimatedRecipeCard
                  image={r.image}
                  title={r.title}
                  description={r.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scroll Frame Animation ─────────────────────────────────── */}
      <ScrollFrameAnimation />

      {/* ── 6 · Shop online ───────────────────────────────────────── */}
      <section className={`bg-white ${SECTION}`}>
        <Reveal>
          <p className={`${LABEL} text-center text-starburst-green`}>
            Shop Online
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`${H2} mb-16 mt-4 text-center`}>
            Can&apos;t make it to the store?
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src={images.productShot}
                alt="SimpliiGood fresh-frozen spirulina starter pack"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-subheadline font-medium text-[14px] uppercase tracking-[0.1em] text-spirulina-green">
                SIMPL<span className="lowercase">ii</span>GOOD Spirulina
              </p>
              <h3 className="font-card-headline font-medium text-[28px] text-spirulina-green">
                10-Day Starter Pack
              </h3>
              <p className="mt-2 font-body text-[16px] text-spirulina-green/70">
                10 fresh-frozen cubes. One cube per day.
              </p>
              <p className="mt-6 font-hero-headline font-semibold text-[36px] text-spirulina-green">
                $69.90
              </p>
              <p className="font-body text-[13px] text-spirulina-green/60">
                Minimum order. Free shipping on 2+ packs.
              </p>
              <CTAButton href="/shop" variant="primary" full className="mt-8">
                Buy Now — Ships Frozen
              </CTAButton>
              <p className="mt-4 font-body text-[12px] text-spirulina-green/70">
                30-Day Guarantee · Frozen Shipping · Non-GMO
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 8 · Zoom Parallax ─────────────────────────────────────── */}
      <ZoomParallax
        images={[
          { src: images.greenHero, alt: "Green spirulina smoothie" },
          { src: images.whatProtein, alt: "Protein-rich smoothie bowl" },
          { src: images.whatIron, alt: "Iron-rich green drink" },
          { src: images.whatAntioxidant, alt: "Antioxidant berry bowl" },
          { src: images.step1Freezer, alt: "Frozen cubes" },
          { src: images.step2Blender, alt: "Blender with fruits" },
          { src: images.step3Drink, alt: "Fresh green drink" },
        ]}
      />

      {/* ── 8 · Our Journey ────────────────────────────────────────── */}
      <section className={`bg-spirulina-green ${SECTION}`}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className={`${LABEL} text-center text-starburst-green mb-4`}>
              Our Journey
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={`${H2} mt-4 text-center text-white`}>
              From Mission to Movement
            </h2>
          </Reveal>

          <div className="mt-20 space-y-0">
            {[
              { year: "2015", title: "Founded in Israel", description: "SimpliiGood begins with a simple mission: make spirulina accessible and delicious." },
              { year: "2018", title: "Fresh Frozen Innovation", description: "Pioneered flash-frozen spirulina cubes, the first of their kind." },
              { year: "2023", title: "SIMPLII TEXTURE Platform", description: "Unveiled proprietary spirulina-based texture technology for plant-based seafood." },
              { year: "2024", title: "Expanding Partnerships", description: "Collaborating with leading food manufacturers and foodservice operators worldwide." },
              { year: "2025", title: "US Retail Launch", description: "Launched in Wegmans, ShopRite and independent retailers across the US." },
            ].map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 150} direction="up">
                <div className="relative py-12 border-l-2 border-starburst-green/30 pl-12 ml-8 hover-lift transition-all duration-500">
                  <div className="absolute -left-[9px] top-12 h-6 w-6 rounded-full bg-starburst-green shadow-[0_0_20px_rgba(254,230,45,0.5)]"></div>
                  <div className="font-hero-headline font-semibold text-[72px] leading-none text-starburst-green opacity-50 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="font-subheadline font-medium text-[24px] uppercase tracking-[0.05em] text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-[18px] text-white/80 max-w-[600px]">
                    {milestone.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 · Wholesale inquiry ─────────────────────────────────── */}
      <section id="wholesale" className={`bg-simplii-yellow ${SECTION}`}>
        <Reveal>
          <p className={`${LABEL} text-center text-spirulina-green`}>
            For Retailers &amp; Food Service
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`${H2} mt-4 text-center`}>
            Stock SimpliiGood in your store.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mb-16 mt-4 max-w-[600px] text-center font-body text-[18px] text-spirulina-green">
            Cafés, smoothie bars, juice bars, grocery chains, wholesalers. Get
            in touch.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <InquiryForm
            fields={WHOLESALE_FIELDS}
            submitLabel="Send Inquiry →"
            note="We respond within 24 hours."
            theme="light"
          />
        </Reveal>
      </section>

      {/* ── 9 · Social proof ──────────────────────────────────────── */}
      <section className={`bg-white ${SECTION}`}>
        <Reveal>
          <p className={`${LABEL} text-center text-starburst-green`}>
            What People Are Saying
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`${H2} mb-16 mt-4 text-center`}>
            Real people. Real results.
          </h2>
        </Reveal>
        <div className="flex gap-4 overflow-hidden justify-center">
          <TestimonialsColumn testimonials={TESTIMONIALS} duration={15} direction="up" />
          <TestimonialsColumn testimonials={TESTIMONIALS_2} duration={60} direction="down" className="hidden md:block" />
          <TestimonialsColumn testimonials={TESTIMONIALS_3} duration={15} direction="up" className="hidden lg:block" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
