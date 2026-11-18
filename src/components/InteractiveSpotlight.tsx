"use client";
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface DualSpotlightProps {
  casualSrc1?: string;
  formalSrc1?: string;
  casualSrc2?: string;
  formalSrc2?: string;
}

export default function InteractiveSpotlightSection({
  casualSrc1 = "pics/one professional.png",
  formalSrc1 = "pics/one professional-formal.png",
  casualSrc2 = "pics/one.jpeg",
  formalSrc2 = "pics/one-formal.jpeg",
}: DualSpotlightProps) {
  const [activeMode, setActiveMode] = useState<0 | 1>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radius = 180;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsInside(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
    setMousePos(null);
  }, []);

  const baseImg = activeMode === 0 ? casualSrc1 : formalSrc2;
  const revealImg = activeMode === 0 ? formalSrc1 : casualSrc2;

  const baseTitle = activeMode === 0 ? "Casual Look" : "Executive Business Suit";
  const revealTitle = activeMode === 0 ? "Executive Tailored Suit" : "Casual Attire";

  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto" }}>
      {/* Switcher Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
          marginBottom: "32px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActiveMode(0)}
          style={{
            background: activeMode === 0 ? "var(--purple-gradient)" : "rgba(18, 17, 28, 0.8)",
            color: "#ffffff",
            border: activeMode === 0 ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
            padding: "11px 26px",
            borderRadius: "30px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: activeMode === 0 ? "0 0 25px rgba(123, 66, 246, 0.5)" : "none",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: activeMode === 0 ? "#ffffff" : "var(--purple-neon)",
            }}
          />
          Base: Casual → Lens: Professional Suit
        </button>

        <button
          onClick={() => setActiveMode(1)}
          style={{
            background: activeMode === 1 ? "var(--purple-gradient)" : "rgba(18, 17, 28, 0.8)",
            color: "#ffffff",
            border: activeMode === 1 ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
            padding: "11px 26px",
            borderRadius: "30px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: activeMode === 1 ? "0 0 25px rgba(123, 66, 246, 0.5)" : "none",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: activeMode === 1 ? "#ffffff" : "var(--purple-neon)",
            }}
          />
          Base: Professional Suit → Lens: Casual Look
        </button>
      </div>

      {/* Spotlight Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          width: "100%",
          height: "640px",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          boxShadow: isInside
            ? "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(123, 66, 246, 0.3)"
            : "0 20px 60px rgba(0, 0, 0, 0.7)",
          background: "#08080c",
          cursor: "crosshair",
          transition: "box-shadow 0.4s ease",
          userSelect: "none",
        }}
      >
        {/* Layer 1: Base Image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={`/${baseImg}`}
            alt="Base View"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 22%",
              filter: isInside ? "brightness(0.92)" : "brightness(1)",
              transition: "filter 0.3s ease",
            }}
            priority
          />
        </div>

        {/* Layer 2: Masked Reveal Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            WebkitMaskImage:
              isInside && mousePos
                ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 85%, transparent 100%)`
                : "none",
            maskImage:
              isInside && mousePos
                ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 85%, transparent 100%)`
                : "none",
            opacity: isInside ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <Image
            src={`/${revealImg}`}
            alt="Spotlight Reveal"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 22%",
            }}
            priority
          />
        </div>

        {/* Layer 3: Purple Cursor Ring */}
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
              border: "2px solid #a78bfa",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.7), inset 0 0 20px rgba(123, 66, 246, 0.4)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(8, 8, 12, 0.95)",
                border: "1px solid #a78bfa",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                padding: "3px 12px",
                borderRadius: "12px",
                whiteSpace: "nowrap",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
              }}
            >
              LENS: {revealTitle.toUpperCase()}
            </div>
          </div>
        )}

        {/* Layer 4: Stage Overlay Info */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "50px 32px 28px",
            background: "linear-gradient(to top, rgba(8, 8, 12, 0.98) 0%, rgba(8, 8, 12, 0.6) 60%, transparent 100%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(139, 92, 246, 0.15)",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                color: "#a78bfa",
                fontSize: "12px",
                fontFamily: "var(--font-mono)",
                padding: "4px 14px",
                borderRadius: "20px",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              <span>●</span> {activeMode === 0 ? "Casual Look Base" : "Formal Suit Base"}
            </div>
            <h3
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 700,
                margin: "4px 0",
              }}
            >
              Interactive Persona Transformation
            </h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", maxWidth: "520px" }}>
              Currently viewing <strong style={{ color: "#ffffff" }}>{baseTitle}</strong>. Move your mouse across the image to examine the{" "}
              <strong style={{ color: "#a78bfa" }}>{revealTitle}</strong> through the dynamic lens.
            </p>
          </div>

          <div
            style={{
              background: "rgba(18, 17, 28, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "10px 18px",
              borderRadius: "14px",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#ffffff",
              fontSize: "13px",
              fontFamily: "var(--font-mono)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Hover &amp; Move Cursor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
