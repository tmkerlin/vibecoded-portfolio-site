"use client";
import Image from "next/image";
import { useState } from "react";

// Sparkles positioned around the perimeter only
const SPARKLES = [
  { x: -6,  y: 12,  size: 13 },
  { x: -8,  y: 40,  size: 10 },
  { x: -6,  y: 68,  size: 12 },
  { x: -4,  y: 88,  size: 9  },
  { x: 14,  y: -6,  size: 11 },
  { x: 42,  y: -7,  size: 13 },
  { x: 68,  y: -5,  size: 10 },
  { x: 88,  y: -6,  size: 12 },
  { x: 98,  y: 15,  size: 11 },
  { x: 100, y: 42,  size: 9  },
  { x: 98,  y: 65,  size: 13 },
  { x: 100, y: 88,  size: 10 },
  { x: 18,  y: 100, size: 12 },
  { x: 45,  y: 102, size: 10 },
  { x: 72,  y: 100, size: 11 },
];

export default function HoloHeadshot() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="no-cursor-trail flex-shrink-0 w-56 h-56 relative rounded-2xl"
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

      {/* Sparkles */}
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
              textShadow: "0 0 6px white, 0 0 14px rgba(255,255,255,0.8)",
            }}
          >
            ✦
          </span>
        ))}
      </div>
    </div>
  );
}
