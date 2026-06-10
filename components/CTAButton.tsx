import Link from "next/link";

/* ------------------------------------------------------------------ *
 *  Shared button class strings.
 *  Exported so forms (real <button type="submit">) and one-off links can
 *  reuse the exact same treatment as the <CTAButton> component.
 * ------------------------------------------------------------------ */
const base =
  "inline-flex items-center justify-center rounded-full px-9 py-4 font-subheadline font-medium text-[15px] uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer select-none relative overflow-hidden group";

export const primaryBtn =
  `${base} bg-simplii-yellow text-spirulina-green hover:scale-[1.05] hover:shadow-[0_8px_30px_rgba(254,230,45,0.4)] active:scale-[0.98]`;

export const secondaryBtn =
  `${base} bg-transparent border-2 border-spirulina-green text-spirulina-green hover:bg-spirulina-green hover:text-white hover:scale-[1.02] active:scale-[0.98]`;

export const outlineWhiteBtn =
  `${base} bg-transparent border-2 border-white text-white hover:bg-white hover:text-spirulina-green hover:scale-[1.02] active:scale-[0.98]`;

type Variant = "primary" | "secondary" | "outline-white";

const variants: Record<Variant, string> = {
  primary: primaryBtn,
  secondary: secondaryBtn,
  "outline-white": outlineWhiteBtn,
};

/**
 * Pill CTA. Renders an <a> via next/link by default. The label (including any
 * trailing arrow, e.g. "Explore →") is passed as children.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  full = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  full?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variants[variant]} ${full ? "w-full" : ""} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
