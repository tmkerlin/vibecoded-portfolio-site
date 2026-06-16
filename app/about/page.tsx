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
          <div className="no-cursor-trail flex-shrink-0 w-56 h-56">
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
              Hi there — I&apos;m Tom. I&apos;ve spent years as a Marketo admin and campaign executor in B2B environments, managing end-to-end campaigns across cross-functional teams and working closely with stakeholders from first concept through to reporting. Marketing ops has always been where creativity meets process, and that&apos;s exactly where I thrive.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              But let&apos;s be honest — AI is rewriting the playbook for this role, and I think that&apos;s exciting. I&apos;ve gone deep on tools like Claude, and I&apos;m genuinely amazed by what becomes possible when you work with AI. I&apos;m learning everything I can, as fast as I can, so I can help clients navigate this shift rather than get left behind by it.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              If you&apos;re looking for someone who&apos;s equal parts creative thinker and process nerd — and who&apos;s fully bought in on where things are heading — let&apos;s talk.
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
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Marketing Ops Strategy & Support</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 2 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Campaign Building & Orchestration</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 3 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">AI Workflow Automation</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 4 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">AI Integration & Implementation</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 5 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">MarTech Stack Consulting</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 6 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Coaching & Mentorship</h3>
            <p className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
