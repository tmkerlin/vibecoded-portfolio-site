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
              Hi there — I&apos;m Tom. I&apos;ve spent years as a Marketo admin and campaign executor in B2B environments, managing end-to-end campaigns across cross-functional teams and working closely with stakeholders from first concept through to reporting. Marketing Ops has always been where creativity meets process, and that&apos;s exactly where I thrive.
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
              Marketing Ops is more than just the technology — it&apos;s the intersection of people, process, and data. I help teams get more out of the infrastructure they already have, whether that means untangling siloed analytics, tightening up leaky funnels, or resolving the friction between sales and marketing. If your systems are underutilized or your processes have grown messier than they should be, this is where we start.
            </p>
          </div>

          {/* Card 2 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Campaign Building & Orchestration</h3>
            <p className="text-white/60 leading-relaxed">
              From brief to close — I take campaign concepts and make them a digital reality using platforms like Marketo. That means handling everything from planning and strategy through to build, execution, monitoring, and reporting. Whether you need a single email communication or a more complex, scalable solution spanning multiple channels and/or tools, I design and orchestrate to match exactly what your audience and your business require.
            </p>
          </div>

          {/* Card 3 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
            <p className="text-white/60 leading-relaxed">
              I design both traditional rule-based workflows and the newer class of AI-driven automation. Deterministic workflows — where every step follows a defined logic — are ideal for repeatable processes, consistent execution, and anything with strict compliance requirements. But not every workflow fits neatly into a rulebook. Nondeterministic automation, powered by AI, handles the more ambiguous, context-heavy scenarios where flexibility matters more than rigidity. It&apos;s a rapidly evolving space that requires more governance upfront, but the payoff is automation that can actually think.
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
            <h3 className="text-xl font-bold text-white mb-3">Declarative Agent Design</h3>
            <p className="text-white/60 leading-relaxed">
              We&apos;re entering the agentic AI era, and declarative agent design is one of the most accessible ways to get there. Whether it&apos;s using low-code/no-code tools like Microsoft Copilot Studio or crafting markdown files in tools like Claude, I design agents by defining their identity, instructions, expertise level, and communication style — essentially shaping how the AI thinks and responds. I also configure the knowledge sources it draws from and the actions it&apos;s authorized to trigger. No traditional coding required, but the results can be surprisingly powerful.
            </p>
          </div>

          {/* Card 6 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Coaching & Mentorship</h3>
            <p className="text-white/60 leading-relaxed">
              This one is personal. I&apos;ve been lucky enough to work alongside some incredibly generous people who gave their time and energy to help me grow, and I want to pay that forward. If you&apos;re navigating a career in Marketing Ops, figuring out where AI fits into your work, or just want someone to talk things through with — I&apos;m happy to listen and share whatever perspective I can.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
