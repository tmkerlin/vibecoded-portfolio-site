import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-start px-12 md:px-24 lg:px-32 pt-44 pb-[120px]">

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl">
        <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-6">
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
