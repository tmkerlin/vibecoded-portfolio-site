export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-black px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-brand-teal font-bold text-lg">
            Tom Kerlin
          </p>
          <p className="text-brand-teal text-sm mt-1">AI-Enhanced Marketing Ops</p>
        </div>
        <a
          href="https://www.linkedin.com/in/thomasmkerlin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-brand-teal text-sm font-medium transition-colors"
        >
          LinkedIn →
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-brand-yellow/60">
        <p className="text-white text-xs text-center">
          © {new Date().getFullYear()} Tom Kerlin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
