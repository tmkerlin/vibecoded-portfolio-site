import Link from "next/link";
import DotGrid from "./components/DotGrid";
import CursorTrail from "./components/CursorTrail";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 overflow-hidden bg-black pt-20">
      {/* Cyan-to-navy gradient, like the LinkedIn banner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 95% 120% at 5% 50%, rgba(34,237,227,0.60) 0%, #0a1a3e 70%, black 90%)",
        }}
      />

      {/* Interactive dot grid */}
      <DotGrid />

      {/* Pink cursor trail */}
      <CursorTrail />

      {/* Yellow accent bar across the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl">
        <p className="text-white font-mono text-sm tracking-widest uppercase mb-6">
          Marketing Ops × AI
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          AI-Enhanced<br />
          <span className="text-brand-pink">Marketing</span><br />
          Operations.
        </h1>
        <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          I help businesses modernize their marketing workflows with AI and
          agentic systems — so your team moves faster and your stack works
          smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-pink text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-pink/80 transition-colors"
          >
            Let&apos;s Work Together →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white/50 hover:bg-white/5 transition-colors"
          >
            What I Do
          </Link>
        </div>
      </div>
    </main>
  );
}
