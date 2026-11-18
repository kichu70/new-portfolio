"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function RevealSection({
  children,
  id,
  className = "",
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [exitProgress, setExitProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // When the top of this section scrolls past the top of the viewport
      if (rect.top < 0) {
        const scrolledPast = Math.abs(rect.top);
        const sectionHeight = rect.height || 600;
        // Dissolves rapidly as it moves up so the next section is immediately in view
        const progress = Math.min(scrolledPast / (sectionHeight * 0.45), 1);
        setExitProgress(progress);
      } else {
        setExitProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - exitProgress * 1.6, 0);
  const translateY = -exitProgress * 70; // Ascend upward to top as you scroll past

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        position: "relative",
        opacity: opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        transition: "opacity 0.05s linear, transform 0.05s linear",
        pointerEvents: opacity <= 0.05 ? "none" : "auto",
      }}
    >
      {children}
    </section>
  );
}
