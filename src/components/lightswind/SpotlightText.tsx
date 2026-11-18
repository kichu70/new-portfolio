"use client";
import React, { useRef, useState, useCallback, ReactNode } from "react";

interface SpotlightTextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  children: ReactNode;
  className?: string;
  radius?: number;
  /** Optional custom gradient or color for the revealed spotlight text */
  spotlightClass?: string;
  glow?: boolean;
}

/**
 * SpotlightText - Lightswind interactive typography component
 * Wherever the user's mouse points, only that circular area of the text
 * transforms into glowing electric neon violet/purple text, like a dynamic flashlight lens.
 */
export default function SpotlightText({
  as: Component = "div",
  children,
  className = "",
  radius = 75,
  spotlightClass = "spotlight-text-reveal",
  glow = true,
}: SpotlightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsInside(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
    setMousePos(null);
  }, []);

  // Ultra-smooth, continuous gradient falloff with zero hard edges or border feeling
  const maskStyle =
    isInside && mousePos
      ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.15) 80%, transparent 100%)`
      : "radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block select-none cursor-default ${className}`}
    >
      {/* 1. Base Layer: Default clean text */}
      <Component className="relative z-1 pointer-events-auto">
        {children}
      </Component>

      {/* 2. Top Spotlight Layer: Only the area under the cursor seamlessly reveals the color */}
      <Component
        aria-hidden="true"
        className={`absolute inset-0 z-2 pointer-events-none transition-opacity duration-200 ${spotlightClass}`}
        style={{
          opacity: isInside ? 1 : 0,
          maskImage: maskStyle,
          WebkitMaskImage: maskStyle,
        }}
      >
        {children}
      </Component>
    </div>
  );
}

