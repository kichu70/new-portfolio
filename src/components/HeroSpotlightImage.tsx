"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import me from "../../public/me.png";
import meCasual from "../../public/me-casual.png";

interface HeroSpotlightProps {
  radius?: number;
}

export default function HeroSpotlightImage({ radius = 120 }: HeroSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isInside, setIsInside] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1025px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const updateCoordinates = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
    setMousePos({ x, y });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    updateCoordinates(e.clientX, e.clientY);
  }, [updateCoordinates]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsInside(true);
    updateCoordinates(e.clientX, e.clientY);
  }, [updateCoordinates]);

  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
    setMousePos(null);
  }, []);

  // On small/mobile screens (< 1025px): Show ONLY ONE static image, no swapping, no masks
  if (!isDesktop) {
    return (
      <div className="hero-portrait-wrap">
        <Image
          src={me}
          alt="Muhammad Ansif"
          fill
          priority
          unoptimized
          className="hero-portrait-img"
          sizes="(max-width: 640px) 80vw, 380px"
        />
      </div>
    );
  }

  // On desktop screens: Interactive spotlight revealing casual attire inside circle
  const clipStyle =
    isInside && mousePos
      ? `circle(${radius}px at ${mousePos.x}px ${mousePos.y}px)`
      : `circle(0px at 50% 50%)`;

  const baseMask =
    isInside && mousePos
      ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, transparent 0, transparent ${radius}px, black ${radius + 0.5}px, black 100%)`
      : "none";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hero-portrait-wrap"
    >
      {/* 1. Base Layer: Formal Suit (me.png) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          maskImage: baseMask,
          WebkitMaskImage: baseMask,
        }}
      >
        <Image
          src={me}
          alt="Muhammad Ansif (Formal)"
          fill
          priority
          unoptimized
          className="hero-portrait-img"
          sizes="460px"
        />
      </div>

      {/* 2. Top Layer: Revealed Casual Blue Shirt inside spotlight lens */}
      {isInside && mousePos && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            clipPath: clipStyle,
            WebkitClipPath: clipStyle,
          }}
        >
          <Image
            src={meCasual}
            alt="Muhammad Ansif (Casual)"
            fill
            priority
            unoptimized
            className="hero-portrait-img"
            sizes="460px"
          />
        </div>
      )}

      {/* 3. Glowing Circular Lens Border */}
      {isInside && mousePos && (
        <div
          style={{
            position: "absolute",
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "2.5px solid #ffffff",
            boxShadow:
              "0 0 0 2px #8b5cf6, 0 0 30px rgba(139, 92, 246, 0.95), inset 0 0 20px rgba(139, 92, 246, 0.45)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}
