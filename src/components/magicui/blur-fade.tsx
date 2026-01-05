"use client";

import { useEffect, useRef, useState } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function BlurFade({ children, delay = 0, className = "" }: BlurFadeProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for better UX
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to allow DOM to render, then animate
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        hasAnimated ? "opacity-100 blur-0 translate-y-0" : "opacity-100 blur-0 translate-y-2"
      } ${className}`}
    >
      {children}
    </div>
  );
}
