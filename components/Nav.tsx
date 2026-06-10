"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { primaryBtn, outlineWhiteBtn } from "./CTAButton";

type Variant = "root" | "green" | "texture";

const linksByVariant: Record<Variant, { label: string; href: string }[]> = {
  root: [
    { label: "Simplii Green", href: "/simplii-green" },
    { label: "Simplii Texture", href: "/simplii-texture" },
  ],
  green: [
    { label: "What Is It", href: "#what-is-it" },
    { label: "About", href: "/about" },
    { label: "Find a Store", href: "/store-locator" },
    { label: "Simplii Texture", href: "/simplii-texture" },
  ],
  texture: [
    { label: "Technology", href: "#technology" },
    { label: "Simplii Green", href: "/simplii-green" },
    { label: "Partner", href: "#contact" },
  ],
};

export default function Nav({ variant = "green" }: { variant?: Variant }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = linksByVariant[variant];
  const isDark = false;

  // ── Bar background ────────────────────────────────────────────────
  // Apple-style floating glass nav
  const glassBase = "backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]";
  const glassDark = "backdrop-blur-xl bg-white/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]";
  
  let bar = "";
  if (variant === "root") {
    bar = scrolled ? glassBase : "backdrop-blur-xl bg-white/50 border border-white/30";
  } else if (variant === "green") {
    bar = glassBase;
  } else {
    bar = glassDark;
  }

  // ── Desktop link colour ───────────────────────────────────────────
  const linkColor =
    variant === "root"
      ? scrolled
        ? "text-spirulina-green"
        : "text-spirulina-green/80 hover:text-spirulina-green"
      : isDark
        ? "text-white/80 hover:text-white"
        : "text-spirulina-green/80 hover:text-spirulina-green";

  // ── Hamburger colour ──────────────────────────────────────────────
  // The burger is mobile-only (md:hidden). On the root page the stacked
  // layout puts the yellow Green panel on top, so a dark burger reads best
  // there; the dark Texture nav keeps a white burger.
  const burgerColor = isDark ? "text-white" : "text-spirulina-green";

  const logoColor = isDark ? "white" : "green";

  const linkClass = `font-subheadline font-medium text-[13px] uppercase tracking-[0.08em] transition-colors ${linkColor}`;

  return (
    <nav
      className={`fixed left-1/2 right-1/2 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-[800px] -translate-x-1/2 rounded-2xl transition-all duration-300 ${bar}`}
    >
      <div className="flex h-16 items-center justify-between px-6 md:px-8">
        <Logo color={logoColor} className="text-[22px]" />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
          {variant === "green" && (
            <Link href="/shop" className={`${primaryBtn} !px-7 !py-2.5`}>
              Shop Now
            </Link>
          )}
          {variant === "texture" && (
            <Link href="#contact" className={`${primaryBtn} !px-7 !py-2.5`}>
              Request a Sample
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${burgerColor}`}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className={`md:hidden mt-2 rounded-2xl backdrop-blur-xl bg-white/90 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)]`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-[15px] font-bold uppercase tracking-[0.08em] ${
                  isDark ? "text-white/90" : "text-spirulina-green"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {variant === "green" && (
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className={`${primaryBtn} mt-3 w-full`}
              >
                Shop Now
              </Link>
            )}
            {variant === "texture" && (
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className={`${primaryBtn} mt-3 w-full`}
              >
                Request a Sample
              </Link>
            )}
            {variant === "root" && (
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className={`${primaryBtn} mt-3 w-full`}
              >
                Shop Now
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
