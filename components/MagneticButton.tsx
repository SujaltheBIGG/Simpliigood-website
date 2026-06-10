"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ href, children, className = "" }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-9 py-4 font-subheadline font-medium text-[15px] uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer select-none relative overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
