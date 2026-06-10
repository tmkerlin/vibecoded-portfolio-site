"use client";
import Image from "next/image";
import { useState } from "react";

const SPARKLES = [
  // Top strip (background above head)
  { x: 6,  y: 5,  size: 14, symbol: "✻" },
  { x: 30, y: 4,  size: 13, symbol: "✶" },
  { x: 55, y: 5,  size: 15, symbol: "✳" },
  { x: 78, y: 4,  size: 12, symbol: "✽" },
  { x: 90, y: 6,  size: 14, symbol: "✻" },
  // Left background strip
  { x: 4,  y: 22, size: 13, symbol: "✽" },
  { x: 5,  y: 42, size: 15, symbol: "✳" },
  { x: 4,  y: 60, size: 12, symbol: "✶" },
  // Right background strip
  { x: 88, y: 22, size: 14, symbol: "✶" },
  { x: 87, y: 42, size: 13, symbol: "✻" },
  { x: 88, y: 60, size: 15, symbol: "✽" },
];

export default function HoloHeadshot() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="no-cursor-trail flex-shrink-0 w-56 h-56 relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/headshot.jpg"
        alt="Tom Kerlin"
        width={224}
        height={224}
        className="object-cover object-top w-full h-full"
      />

      <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}>
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="absolute select-none"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: `${s.size}px`,
              color: "white",
              textShadow: "0 0 6px white, 0 0 14px rgba(255,255,255,0.7)",
            }}
          >
            {s.symbol}
          </span>
        ))}
      </div>
    </div>
  );
}
