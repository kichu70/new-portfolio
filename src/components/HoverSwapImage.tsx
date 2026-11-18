"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  casualSrc: string;
  formalSrc: string;
  alt?: string;
  label?: string;
};

export default function HoverSwapImage({
  casualSrc,
  formalSrc,
  alt = "Portrait",
  label,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        height: "490px",
        borderRadius: "22px",
        overflow: "hidden",
        border: hovered
          ? "1.5px solid rgba(167, 139, 250, 0.7)"
          : "1.5px solid rgba(255, 255, 255, 0.1)",
        boxShadow: hovered
          ? "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(123, 66, 246, 0.4)"
          : "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(123, 66, 246, 0.15)",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        background: "#0d0c16",
        margin: "0 auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Casual image */}
      <Image
        src={`/${casualSrc}`}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        style={{
          objectFit: "cover",
          objectPosition: "center 15%",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.45s ease-in-out",
        }}
        priority
      />

      {/* Formal / professional image */}
      <Image
        src={`/${formalSrc}`}
        alt={`${alt} (Professional)`}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        style={{
          objectFit: "cover",
          objectPosition: "center 15%",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.45s ease-in-out",
        }}
        priority
      />

      {/* Floating status tag indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "7px 16px",
          borderRadius: "30px",
          background: "rgba(8, 8, 12, 0.88)",
          backdropFilter: "blur(12px)",
          border: hovered
            ? "1px solid rgba(167, 139, 250, 0.6)"
            : "1px solid rgba(255, 255, 255, 0.12)",
          color: hovered ? "#c4b5fd" : "#d1d5db",
          fontSize: "12px",
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          letterSpacing: "0.5px",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: hovered ? "0 0 20px rgba(123, 66, 246, 0.4)" : "none",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: hovered ? "#a78bfa" : "#9ca3af",
            boxShadow: hovered ? "0 0 8px #a78bfa" : "none",
            transition: "all 0.3s ease",
          }}
        />
        {hovered ? "Professional Suit" : "Casual Look (Hover to Switch)"}
      </div>
    </div>
  );
}
