"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

/**
 * Fade + rise on scroll-in. Uses IntersectionObserver and only fires once —
 * once an element is visible it stays put. Children stagger by passing an
 * incrementing `delay` (in ms).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  /** Render as a plain wrapper with no reveal effect (for above-the-fold). */
  immediate = false,
  direction = "up",
}: {
  children: React.ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  immediate?: boolean;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const getTransform = () => {
    if (visible) return "translateY(0) translateX(0)";
    switch (direction) {
      case "up":
        return "translateY(40px)";
      case "down":
        return "translateY(-40px)";
      case "left":
        return "translateX(40px)";
      case "right":
        return "translateX(-40px)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transform: getTransform(),
      }}
    >
      {children}
    </Tag>
  );
}
