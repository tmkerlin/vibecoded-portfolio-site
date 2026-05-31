"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

      {status === "sent" ? (
        <div className="w-full max-w-lg text-center py-12">
          <p className="text-2xl font-bold text-white mb-3">Thanks, I&apos;ll be in touch soon.</p>
          <p className="text-white/60">Your message has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Name</label>
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Company <span className="normal-case text-white/30">(optional)</span></label>
            <input
              type="text"
              placeholder="Your company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-sm font-mono uppercase tracking-widest">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/60 transition-colors resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 bg-brand-pink/85 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-pink transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </form>
      )}

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
