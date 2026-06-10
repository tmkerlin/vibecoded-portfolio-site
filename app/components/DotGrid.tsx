"use client";
import { useEffect, useRef } from "react";

const SPACING = 24;
const CURSOR_RADIUS = 75;
const LINE_DISTANCE = 72;
const WAVE_LENGTH = 6;
const WAVE_SPEED = 0.055;

interface Wave {
  col: number;
  row: number;
  dir: "h" | "v";
  sign: 1 | -1;
  progress: number;
}

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const wavesRef = useRef<Wave[]>([]);
  const frameRef = useRef(0);
  const lastMoveRef = useRef(Date.now());

  const FADE_DELAY = 1200;
  const FADE_DURATION = 2500;

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
      lastMoveRef.current = Date.now();
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    // Mirror the CSS radial gradient: ellipse 95% 120% at 5% 50%, fading to black at 90%
    const gradientAlpha = (x: number, y: number) => {
      const gcx = canvas.width * 0.05;
      const gcy = canvas.height * 0.50;
      const grx = canvas.width * 0.95;
      const gry = canvas.height * 1.20;
      const t = Math.sqrt(((x - gcx) / grx) ** 2 + ((y - gcy) / gry) ** 2);
      if (t < 0.70) return 1.0;
      if (t > 0.90) return 0.0;
      return 1 - (t - 0.70) / 0.20;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      const idle = Date.now() - lastMoveRef.current;
      const spotlightAlpha = idle < FADE_DELAY ? 1 : Math.max(0, 1 - (idle - FADE_DELAY) / FADE_DURATION);
      const waves = wavesRef.current;
      frameRef.current++;

      const cols = Math.floor(canvas.width / SPACING);
      const rows = Math.floor(canvas.height / SPACING);

      // Spawn a new wave every 40 frames (~1.5/sec at 60fps)
      if (frameRef.current % 25 === 0) {
        const dir = Math.random() < 0.5 ? "h" : "v";
        const sign = Math.random() < 0.5 ? 1 : -1 as 1 | -1;
        // Start position accounts for travel direction so wave stays in bounds
        const col = dir === "h"
          ? sign === 1
            ? Math.floor(Math.random() * (cols - WAVE_LENGTH))
            : Math.floor(Math.random() * (cols - WAVE_LENGTH)) + WAVE_LENGTH - 1
          : Math.floor(Math.random() * cols);
        const row = dir === "v"
          ? sign === 1
            ? Math.floor(Math.random() * (rows - WAVE_LENGTH))
            : Math.floor(Math.random() * (rows - WAVE_LENGTH)) + WAVE_LENGTH - 1
          : Math.floor(Math.random() * rows);
        waves.push({ col, row, dir, sign, progress: 0 });
      }

      // Advance waves and remove completed ones
      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].progress += WAVE_SPEED;
        if (waves[i].progress > WAVE_LENGTH + 1) waves.splice(i, 1);
      }

      // Build a fast lookup map: "col,row" -> max wave pulse value
      const wavePulseMap = new Map<string, number>();
      for (const wave of waves) {
        for (let i = 0; i < WAVE_LENGTH; i++) {
          const wc = wave.dir === "h" ? wave.col + i * wave.sign : wave.col;
          const wr = wave.dir === "v" ? wave.row + i * wave.sign : wave.row;
          const p = Math.max(0, 1 - Math.abs(wave.progress - i));
          const key = `${wc},${wr}`;
          wavePulseMap.set(key, Math.max(wavePulseMap.get(key) ?? 0, p));
        }
      }

      // Build list of all dots
      const dots: { x: number; y: number; influence: number; ga: number; pulse: number }[] = [];
      for (let xi = 0, x = SPACING / 2; x < canvas.width; x += SPACING, xi++) {
        for (let yi = 0, y = SPACING / 2; y < canvas.height; y += SPACING, yi++) {
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const influence = Math.max(0, 1 - dist / CURSOR_RADIUS) * spotlightAlpha;
          const ga = gradientAlpha(x, y);
          const pulse = wavePulseMap.get(`${xi},${yi}`) ?? 0;
          dots.push({ x, y, influence, ga, pulse });
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
          const opacity = Math.min(a.influence, b.influence) * (1 - dist / LINE_DISTANCE) * 0.8 * Math.min(a.ga, b.ga);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(34, 237, 227, ${opacity})`; // brand cyan
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw dots on top of lines
      for (const { x, y, influence, ga, pulse } of dots) {
        if (ga === 0) continue;
        const r = Math.round(6 + (255 - 6) * influence);
        const g = Math.round(149 + (255 - 149) * influence);
        const b = Math.round(158 + (255 - 158) * influence);
        const opacity = (0.30 + influence * 0.70 + pulse * 0.5) * ga;
        const radius = 1 + influence * 2 + pulse * 3;

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
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
}
