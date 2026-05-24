import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/90 backdrop-blur-sm">
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "3px", clipPath: "polygon(0 2px, 100% 0, 100% 100%, 0 100%)", background: "linear-gradient(to right, black 40%, #9E1E6D 100%)" }}
      />
      <Link href="/" className="text-white font-bold text-2xl tracking-tight">
        Tom Kerlin
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/about" className="text-white hover:text-white text-sm font-medium transition-colors">
          About & Services
        </Link>
        <Link href="/insights" className="text-white hover:text-white text-sm font-medium transition-colors">
          Insights
        </Link>
        <Link
          href="/contact"
          className="bg-brand-pink text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-pink/80 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
