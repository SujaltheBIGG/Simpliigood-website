"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import StoreMap from "@/components/StoreMap";
import { STORES } from "@/lib/stores";

const LABEL = "font-subheadline font-medium text-[13px] uppercase tracking-[0.1em]";
const H2 = "font-section-headline font-extrabold text-[36px] uppercase text-spirulina-green";
const SECTION = "px-6 py-20 md:px-20 md:py-24";

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStores = STORES.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.state.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <main>
      <Nav variant="green" />

      {/* Hero Section */}
      <section className="bg-spirulina-green px-6 py-20 md:px-20 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className={`${LABEL} mb-4 text-starburst-green`}>
              Find Us
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-hero-headline font-semibold text-[clamp(48px,8vw,96px)] uppercase leading-[0.95] tracking-tightest text-white">
              Store Locator
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-[600px] font-body text-[18px] leading-[1.6] text-white/90">
              Find SimpliiGood fresh-frozen spirulina at a store near you. We're available in 400+ locations nationwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Map and Store List Section */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <Reveal direction="left">
              <div className="bg-spirulina-green/5 rounded-3xl border-2 border-spirulina-green/10 overflow-hidden relative" style={{ height: "800px" }}>
                <StoreMap stores={STORES} />
              </div>
            </Reveal>

            {/* Store List Section */}
            <Reveal direction="right">
              <div>
                <h2 className={`${H2} mb-6`}>
                  All Locations ({filteredStores.length})
                </h2>

                {/* Search Bar */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search by store name, city, or state..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-spirulina-green/20 focus:border-spirulina-green focus:outline-none font-body text-[15px] text-spirulina-green placeholder:text-spirulina-green/50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                  {filteredStores.map((store, index) => (
                    <div
                      key={store.id}
                      className="bg-white rounded-xl p-4 border border-spirulina-green/10 hover:border-spirulina-green/30 transition-all duration-300 hover:shadow-md hover-lift"
                    >
                      <h3 className="font-subheadline font-medium text-[14px] uppercase tracking-[0.05em] text-spirulina-green mb-1">
                        {store.name}
                      </h3>
                      <p className="font-body text-[13px] text-spirulina-green/80">
                        {store.address}
                      </p>
                      <p className="font-body text-[13px] text-spirulina-green/80">
                        {store.city}, {store.state} {store.postalCode}
                      </p>
                    </div>
                  ))}
                  {filteredStores.length === 0 && (
                    <p className="font-body text-[14px] text-spirulina-green/60 text-center py-8">
                      No stores found matching your search.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`bg-simplii-yellow ${SECTION}`}>
        <div className="mx-auto max-w-[800px] text-center">
          <Reveal>
            <h2 className={`${H2} mb-6`}>
              Can't Find Us Near You?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-body text-[18px] leading-[1.6] text-spirulina-green/80 mb-8">
              Order online and get fresh-frozen spirulina delivered straight to your door.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <CTAButton href="/shop" variant="secondary">
              Shop Online →
            </CTAButton>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
