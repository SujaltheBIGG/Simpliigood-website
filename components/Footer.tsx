"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Simplii Green",
      links: [
        { label: "What Is Spirulina", href: "/simplii-green#what-is-it" },
        { label: "How To Use", href: "/simplii-green#how-to-use" },
        { label: "Recipes", href: "/simplii-green#how-to-use" },
        { label: "Find a Store", href: "/simplii-green#store-locator" },
        { label: "Shop Online", href: "/shop" },
        { label: "Wholesale Inquiry", href: "/simplii-green#wholesale" },
      ],
    },
    {
      heading: "Simplii Texture",
      links: [
        { label: "Kamu Slices", href: "/simplii-texture#products" },
        { label: "Kamu Flakes", href: "/simplii-texture#products" },
        { label: "Technology", href: "/simplii-texture#technology" },
        { label: "For Investors", href: "/simplii-texture#contact" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Contact", href: "/simplii-texture#contact" },
        { label: "Press", href: "#" },
      ],
    },
  ];

function Instagram() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-spirulina-green px-6 py-16 md:px-20 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center mb-4">
          <Image
            src="/footer-logo.png"
            alt="SimpliiGood"
            width={200}
            height={50}
            className="w-auto h-auto"
          />
        </div>
        <p className="text-center font-subheadline font-medium text-[13px] uppercase tracking-[0.15em] text-simplii-yellow">
          Real. Super. Food.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-white">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-body text-[14px] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay updated */}
          <div>
            <h4 className="font-subheadline font-medium text-[13px] uppercase tracking-[0.1em] text-white">
              Stay Updated
            </h4>
            {subscribed ? (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-simplii-yellow">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#154048"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-body text-[14px] text-simplii-yellow">
                  You&apos;re on the list. Welcome aboard!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
                className="mt-4 flex flex-col gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Your email"
                  className="w-full rounded-2xl bg-white/10 border-2 border-white/20 px-5 py-3 font-body text-[14px] text-white outline-none placeholder:text-white/50 transition-all duration-300 focus:border-simplii-yellow focus:bg-white/20"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-simplii-yellow px-6 py-3 font-subheadline font-medium text-[13px] uppercase tracking-[0.05em] text-spirulina-green transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-[13px] text-white/50">
            © 2026 SimpliiGood. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <Link
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-white"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
