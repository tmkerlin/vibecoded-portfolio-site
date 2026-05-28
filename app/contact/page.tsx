export default function Contact() {
  return (
    <main className="relative z-10 flex flex-col items-center text-center flex-1 pt-44 pb-[120px] px-12 md:px-24 lg:px-32">

      <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4">
        Contact
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Let&apos;s Work <span className="text-brand-yellow">Together.</span>
      </h1>
      <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-lg">
        Have a project in mind? I&apos;d love to hear about it.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg flex flex-col gap-4 text-left">
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Company <span className="normal-case text-white/30">(optional)</span></label>
          <input
            type="text"
            placeholder="Your company"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Message</label>
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-brand-pink/85 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-pink transition-colors"
        >
          Send Message →
        </button>
      </form>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/thomasmkerlin/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 text-white/60 hover:text-brand-cyan text-sm font-medium transition-colors"
      >
        Or connect on LinkedIn →
      </a>

    </main>
  );
}
