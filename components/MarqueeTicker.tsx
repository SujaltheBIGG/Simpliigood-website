const PHRASE =
  "REAL. SUPER. FOOD. \u00b7 FROZEN IS BETTER \u00b7 SMOOTHIE BOOSTER, READY TO BLEND \u00b7 COMPLETE PLANT PROTEIN \u00b7 NO FISHY TASTE \u00b7 NON-GMO VERIFIED \u00b7 ";

/**
 * Brand ticker. Two copies of the phrase sit side by side inside a track that
 * slides left by exactly 50% (= one full copy), so the loop is seamless. Height
 * is locked at 48px per the brand system.
 */
export default function MarqueeTicker() {
  return (
    <div className="flex h-12 items-center overflow-hidden bg-simplii-yellow">
      <div className="marquee-track flex animate-marquee">
        <span className="shrink-0 pr-0 font-subheadline font-medium text-[14px] uppercase text-spirulina-green">
          {PHRASE}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 pr-0 font-subheadline font-medium text-[14px] uppercase text-spirulina-green"
        >
          {PHRASE}
        </span>
      </div>
    </div>
  );
}
