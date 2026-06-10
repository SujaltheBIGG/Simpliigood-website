"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import stockists from "@/lib/stockists.json";

export default function StoreLocator() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const retailers = stockists.retailers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      setMessage("Enter a zip code or city to find stores near you.");
      return;
    }
    setMessage(
      `Searching near “${q}” — live results arrive with our Google Maps integration. Check back soon!`
    );
  };

  return (
    <section
      id="store-locator"
      className="bg-spirulina-green px-6 py-20 md:px-20 md:py-[120px]"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Search bar */}
        <Reveal delay={220}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-[560px] items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your zip code or city..."
              aria-label="Zip code or city"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 font-body text-[16px] text-spirulina-green outline-none placeholder:text-spirulina-green/45"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-simplii-yellow px-7 py-3 font-subheadline font-medium text-[15px] uppercase tracking-[0.05em] text-spirulina-green transition-transform duration-200 hover:scale-[1.03]"
            >
              Find Stores
            </button>
          </form>
        </Reveal>

        {message && (
          <p
            role="status"
            className="mx-auto mt-4 max-w-[560px] text-center font-body text-[14px] text-simplii-yellow"
          >
            {message}
          </p>
        )}

        {/* Retailer logos */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {retailers.map((r) => {
              const label =
                r.status === "coming-soon" ? `${r.name} (Coming Soon)` : r.name;
              return (
                <div
                  key={r.name}
                  className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-white/15 px-5 font-subheadline font-medium text-[13px] text-white"
                >
                  {label}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
