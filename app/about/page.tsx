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
              Hi there — I&apos;m Tom. I&apos;ve spent years as a Marketo administrator and campaign executor in B2B environments, managing end-to-end campaigns across cross-functional teams and working closely with stakeholders from first concept through to reporting. Marketing Ops has always been where creativity meets process, and it&apos;s the space I&apos;ve always been drawn to.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              AI is rewriting the playbook for this role, and despite how quickly it&apos;s moving, I think that&apos;s exciting. I&apos;ve spent real time with tools like Claude, and I&apos;m genuinely amazed by what becomes possible once you&apos;re actually working with AI rather than just reading about it. I&apos;m learning everything I can, as fast as I can, so I can help clients navigate this shift instead of getting left behind by it.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              If you&apos;re looking for someone who&apos;s equal parts creative thinker and process nerd, and who&apos;s excited by what&apos;s on the horizon and ready for whatever it brings... let&apos;s talk.
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
              There&apos;s much more to Marketing Ops than just the technology. One question that does a great job of framing it is this: &ldquo;How can people, processes and data work better together?&rdquo; I help teams get more out of the infrastructure they already have, whether that means untangling siloed analytics, tightening up leaky funnels, or resolving the friction between sales and marketing. If your systems are underutilized or your processes have gotten messier than they should be, this is where we can start.
            </p>
          </div>

          {/* Card 2 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Campaign Building & Orchestration</h3>
            <p className="text-white/60 leading-relaxed">
              From start to finish, I take campaign concepts and turn them into working programs using MAPs like Marketo. Knowing what you want is the first step, but that first idea can be tricky to pin down. That&apos;s why my campaign services include everything from the planning and strategy stage through to build, execution, monitoring, and reporting. Whether you need a single email communication or a more complex, scalable solution spanning multiple channels or tools, I design and orchestrate to fit the needs of your audience and your business.
            </p>
          </div>

          {/* Card 3 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
            <p className="text-white/60 leading-relaxed">
              I design both traditional rule-based workflows and the newer class of AI-driven automation. Deterministic workflows, where every step follows a defined logic, are the right call when you need consistent execution or you&apos;re working under strict compliance requirements. Non-deterministic AI workflows allow the automation to produce more variable outputs, which is useful when working with unstructured data or open-ended problems. No workflow, deterministic or otherwise, outperforms the data it&apos;s built on. The real work is getting the data and the governance right before you automate anything on top of that.
            </p>
          </div>

          {/* Card 4 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">AI Integration & Implementation</h3>
            <p className="text-white/60 leading-relaxed">
              Most marketing platforms already have AI features built into them. And since most teams are usually paying for capabilities that never get turned on, configuring those well is often the first step I take with a client. From there, the harder and more rewarding work is determining how external AI systems can integrate and enhance a team&apos;s existing workflows. This could be an LLM that drafts copy for a social media post or an agent that triages inbound leads before a rep ever sees them. When done well, external AI integrations reduce manual handoffs and let programs adjust in real time based on a prospect&apos;s intent or behavior. It&apos;s an emerging space that I&apos;m putting a lot of time into right now.
            </p>
          </div>

          {/* Card 5 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Declarative Agent Design</h3>
            <p className="text-white/60 leading-relaxed">
              Most of us are familiar with generative AI, which relies on human prompts and other user input to &ldquo;generate&rdquo; content when asked. While still a powerful tool, its reactions are dependent upon the user, meaning it can&apos;t act independently or make decisions on its own. In contrast, agentic AI systems allow an AI agent to act autonomously and come up with its own plan for achieving a goal. Declarative agent design is an accessible method for achieving agentic AI. Whether it&apos;s using low-code/no-code platforms like Microsoft Copilot Studio or crafting markdown files for LLMs like Claude, I design agents by defining their identity, instructions, expertise level, and communication style (i.e. essentially shaping how the AI thinks and responds). I also configure the knowledge sources it draws from and the actions it&apos;s authorized to trigger. The finished work here is still impactful, and no traditional coding was required.
            </p>
          </div>

          {/* Card 6 */}
          <div className="no-cursor-trail rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-brand-cyan/40 hover:bg-white/8 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Coaching & Mentorship</h3>
            <p className="text-white/60 leading-relaxed">
              This one is personal. Early in my career, I was caught up in self-limiting beliefs and caring too much about what other people thought. Many mentors, managers and coworkers encouraged me to believe in myself enough to keep going even when the next steps weren&apos;t very clear. I&apos;d like to pay that forward. Please let me know if you&apos;re someone navigating a career in Marketing Ops (or marketing in general), figuring out where AI fits into your work, or just want someone to talk things through with. I&apos;m happy to listen and share whatever perspective I can.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
