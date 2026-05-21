"use client";
import { useEffect, useRef } from "react";

const SPACING = 24;
const CURSOR_RADIUS = 75;   // dots within this range of cursor become active
const LINE_DISTANCE = 72;   // max distance between dots to draw a line

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

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
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      // Build list of all dots
      const dots: { x: number; y: number; influence: number }[] = [];
      for (let x = SPACING / 2; x < canvas.width; x += SPACING) {
        for (let y = SPACING / 2; y < canvas.height; y += SPACING) {
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const influence = Math.max(0, 1 - dist / CURSOR_RADIUS);
          dots.push({ x, y, influence });
        }
      }

      // Draw lines between nearby active dots
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.influence === 0) continue;
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          if (b.influence === 0) continue;
          const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (dist > LINE_DISTANCE) continue;
          const opacity = Math.min(a.influence, b.influence) * (1 - dist / LINE_DISTANCE) * 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(34, 237, 227, ${opacity})`; // brand cyan
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw dots on top of lines
      for (const { x, y, influence } of dots) {
        const r = Math.round(6 + (255 - 6) * influence);
        const g = Math.round(149 + (255 - 149) * influence);
        const b = Math.round(158 + (255 - 158) * influence);
        const opacity = 0.30 + influence * 0.70;
        const radius = 1 + influence * 2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
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

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
