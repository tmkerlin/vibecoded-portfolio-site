import Image from "next/image";

export default function AboutServices() {
  return (
    <main className="relative z-10 min-h-screen pt-44 pb-[120px] px-8 md:px-16 lg:px-24">

      {/* ── About Section ── */}
      <section className="max-w-5xl mx-auto mb-24">
        <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4">
          About
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">
          AI-Enhanced<br />
          <span className="text-brand-yellow">Marketing Ops</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Headshot */}
          <div className="flex-shrink-0 w-56 h-56">
            <Image
              src="/headshot.jpg"
              alt="Tom Kerlin"
              width={224}
              height={224}
              className="rounded-2xl object-cover object-top w-full h-full"
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="max-w-5xl mx-auto">
        <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4">
          Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          What I <span className="text-brand-yellow">Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">AI Workflow Automation</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">MarTech Stack Consulting</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">AI Integration & Implementation</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Marketing Ops Strategy</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
