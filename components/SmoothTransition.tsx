"use client";

import { useEffect, useState } from "react";

interface SmoothTransitionProps {
  children: React.ReactNode;
}

export default function SmoothTransition({ children }: SmoothTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: isLoading ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
