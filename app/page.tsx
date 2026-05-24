import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 pt-20">

      {/* Alien monster in the black area */}
      <div className="absolute right-[77px] bottom-0 text-5xl leading-none select-none pointer-events-none opacity-60" style={{ filter: "sepia(1) saturate(5) hue-rotate(270deg) brightness(0.5)" }}>
        👾
      </div>

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
