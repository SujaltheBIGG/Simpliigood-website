import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Shop | SimpliiGood Fresh-Frozen Spirulina",
  description:
    "The SimpliiGood online store is launching soon. Fresh-frozen spirulina cubes, shipped frozen to your door.",
};

export default function ShopPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-simplii-yellow px-6 py-20 text-center">
      <Logo color="green" className="text-[26px]" href="/" />

      <p className="mt-12 font-subheadline font-medium text-[13px] uppercase tracking-[0.15em] text-starburst-green">
        Shop Launching Soon
      </p>
      <h1 className="mt-4 max-w-[760px] font-hero-headline font-semibold text-[clamp(40px,7vw,80px)] uppercase leading-[0.95] tracking-tightest text-spirulina-green">
        Our store is almost ready.
      </h1>
      <p className="mt-6 max-w-[500px] font-body text-[18px] leading-[1.6] text-spirulina-green">
        We&apos;re putting the finishing touches on our online store, where
        you&apos;ll be able to order fresh-frozen spirulina cubes shipped frozen,
        straight to your door.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <CTAButton href="/simplii-green" variant="primary">
          Explore Simplii Green
        </CTAButton>
        <CTAButton href="/simplii-green#store-locator" variant="secondary">
          Find a Store Near You
        </CTAButton>
      </div>

      <Link
        href="/"
        className="mt-12 font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-spirulina-green underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        ← Back to SimpliiGood
      </Link>

      <p className="mt-16 font-body text-[12px] uppercase tracking-[0.1em] text-spirulina-green/50">
        Online store powered by Shopify — integration coming soon
      </p>
    </main>
  );
}
