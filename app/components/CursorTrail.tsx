"use client";
import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const FADE_DURATION = 1200;
const STEP_DISTANCE = 40;
const STEP_OFFSET = 10;

interface Footprint {
  x: number;
  y: number;
  angle: number;
  side: "left" | "right";
  born: number;
}

function drawFoot(ctx: CanvasRenderingContext2D, fp: Footprint, opacity: number) {
  ctx.save();
  ctx.translate(fp.x, fp.y);
  ctx.rotate(fp.angle + Math.PI / 2);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#EB1599";

  // Front sole — top 70% of elongated oval, clipped
  ctx.save();
  ctx.beginPath();
  ctx.rect(-8, -13, 16, 16);
  ctx.clip();
  ctx.beginPath();
  ctx.ellipse(0, 0, 5, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Heel — flat edged top, rounded bottom
  ctx.beginPath();
  ctx.moveTo(-4, 5);
  ctx.lineTo(4, 5);
  ctx.quadraticCurveTo(5, 6, 4.5, 10);
  ctx.quadraticCurveTo(2.5, 12, 0, 12);
  ctx.quadraticCurveTo(-2.5, 12, -4.5, 10);
  ctx.quadraticCurveTo(-5, 6, -4, 5);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const footprintsRef = useRef<Footprint[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const sideRef = useRef<"left" | "right">("left");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const last = lastPosRef.current;

      if (!last) { lastPosRef.current = { x, y }; return; }

      const dist = Math.sqrt((x - last.x) ** 2 + (y - last.y) ** 2);
      if (dist < STEP_DISTANCE) return;

      const angle = Math.atan2(y - last.y, x - last.x);
      const perp = angle + Math.PI / 2;
      const side = sideRef.current;
      const flip = side === "left" ? -1 : 1;
      const offsetX = Math.cos(perp) * STEP_OFFSET * flip;
      const offsetY = Math.sin(perp) * STEP_OFFSET * flip;

      footprintsRef.current.push({ x: x + offsetX, y: y + offsetY, angle, side, born: Date.now() });
      if (footprintsRef.current.length > TRAIL_LENGTH) footprintsRef.current.shift();

      sideRef.current = side === "left" ? "right" : "left";
      lastPosRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      footprintsRef.current = footprintsRef.current.filter((f) => now - f.born < FADE_DURATION);

      for (const fp of footprintsRef.current) {
        const age = (now - fp.born) / FADE_DURATION;
        drawFoot(ctx, fp, (1 - age) * 0.85);
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />;
}
