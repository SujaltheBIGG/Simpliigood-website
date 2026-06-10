const ROWS: { good: string; bad: string }[] = [
  { good: "Harvested and frozen within hours", bad: "Dried for weeks" },
  { good: "No fishy taste or smell", bad: "Harsh, swampy aftertaste" },
  { good: "Live enzymes fully intact", bad: "Heat destroys enzymes" },
  {
    good: "Phycocyanin and chlorophyll preserved",
    bad: "Oxidized and degraded",
  },
  {
    good: "Flash-frozen at peak nutritional density",
    bad: "Nutrients lost in processing",
  },
  {
    good: "No additives, fillers, or anti-caking agents",
    bad: "Common in mass-market powders",
  },
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#31B278"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DD4926"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-card">
      {/* Headers */}
      <div className="flex items-center gap-3 bg-spirulina-green p-6 md:p-8">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-starburst-green">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="font-card-headline font-medium text-base text-white md:text-xl">
          SimpliiGood Fresh-Frozen
        </span>
      </div>
      <div className="flex items-center bg-[#e5e5e5] p-6 md:p-8">
        <span className="font-card-headline font-medium text-base text-[#666] md:text-xl">
          Dried Powder
        </span>
      </div>

      {/* Rows */}
      {ROWS.map((row, i) => {
        const bg = i % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]";
        return (
          <div key={row.good} className="contents">
            <div
              className={`flex items-start gap-3 px-4 py-4 md:px-8 md:py-5 ${bg}`}
            >
              <Check />
              <span className="font-body text-sm leading-snug text-spirulina-green md:text-base">
                {row.good}
              </span>
            </div>
            <div
              className={`flex items-start gap-3 px-4 py-4 md:px-8 md:py-5 ${bg}`}
            >
              <Cross />
              <span className="font-body text-sm leading-snug text-[#999999] md:text-base">
                {row.bad}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
