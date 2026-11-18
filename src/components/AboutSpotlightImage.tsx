"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import oneProf from "../../public/pics/one-professional.png";
import oneProfFormal from "../../public/pics/one-professional-formal.png";

interface AboutSpotlightProps {
  alt?: string;
  radius?: number;
}

export default function AboutSpotlightImage({
  alt = "Muhammad Ansif",
  radius = 60,
}: AboutSpotlightProps) {
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

  // On small/mobile screens (< 1025px): Show ONLY ONE static image, clean and perfectly scaled
  if (!isDesktop) {
    return (
      <div className="about-img-frame">
        <Image
          src={oneProf}
          alt={alt}
          priority
          unoptimized
          className="about-original-img"
          sizes="(max-width: 640px) 90vw, 420px"
        />
      </div>
    );
  }

  // On desktop screens (> 1025px): Full interactive spotlight lens
  const clipStyle =
    isInside && mousePos
      ? `circle(${radius}px at ${mousePos.x}px ${mousePos.y}px)`
      : `circle(0px at 30% 50%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[420px] h-[520px] rounded-[24px] overflow-hidden select-none mx-auto bg-[#08080c] transition-all duration-300 ${isInside
        ? "border-[1.5px] border-purple-400/85 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_45px_rgba(123,66,246,0.5)] -translate-y-1"
        : "border-[1.5px] border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(123,66,246,0.18)] translate-y-0"
        }`}
    >
      {/* 1. Base Layer: Casual photo */}
      <div
        className={`absolute inset-0 transition-[filter] duration-300 ${isInside ? "brightness-75 contrast-105 saturate-90" : "brightness-100"
          }`}
      >
        <Image
          src={oneProf}
          alt={alt}
          fill
          unoptimized
          sizes="420px"
          className="object-cover object-[center_18%]"
          priority
        />
      </div>

      {/* 2. Revealed Top Layer: Formal Suit inside circle */}
      {isInside && mousePos && (
        <div
          className="absolute inset-0 pointer-events-none brightness-105 contrast-105"
          style={{
            clipPath: clipStyle,
            WebkitClipPath: clipStyle,
          }}
        >
          <Image
            src={oneProfFormal}
            alt={`${alt} Formal Suit`}
            fill
            unoptimized
            sizes="420px"
            className="object-cover object-[center_18%]"
            priority
          />
        </div>
      )}

      {/* 3. High-Contrast Glowing Circular Lens Border */}
      {isInside && mousePos && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-white shadow-[0_0_0_2px_#8b5cf6,0_0_30px_rgba(139,92,246,0.95),inset_0_0_20px_rgba(139,92,246,0.45)] pointer-events-none z-10"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        />
      )}
    </div>
  );
}
