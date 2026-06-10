export default function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="rounded-[20px] bg-[#f9f9f9] p-10 transition-all duration-200 hover:shadow-[0_12px_40px_rgba(21,64,72,0.1)]">
      <div
        className="text-[20px] tracking-wide text-simplii-yellow"
        aria-label="Rated 5 out of 5 stars"
      >
        {"\u2605\u2605\u2605\u2605\u2605"}
      </div>
      <p className="mt-4 font-body text-[18px] leading-[1.7] text-spirulina-green">
        {quote}
      </p>
      <p className="mt-6 font-subheadline font-medium text-[14px] text-spirulina-green">
        {author}
      </p>
      <p className="font-subheadline font-medium text-[13px] text-starburst-green">
        Verified buyer
      </p>
    </div>
  );
}
