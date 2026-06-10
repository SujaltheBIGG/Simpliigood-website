import Link from "next/link";
import Image from "next/image";

type LogoColor = "green" | "white";

/**
 * The SimpliiGood wordmark.
 * Now uses the new logo image instead of text.
 */
export default function Logo({
  color = "green",
  className = "",
  href = "/",
}: {
  color?: LogoColor;
  className?: string;
  /** Pass null to render as a plain image (e.g. inside the footer heading). */
  href?: string | null;
}) {
  const mark = (
    <Image
      src="/logo.png"
      alt="SimpliiGood"
      width={150}
      height={37.5}
      className={className}
      priority
    />
  );

  if (href === null) return mark;

  return (
    <Link href={href} aria-label="SimpliiGood — home" className="inline-flex">
      {mark}
    </Link>
  );
}
