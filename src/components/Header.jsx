import { Menu, Languages } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "NFT", href: "#nft" },
  { label: "Token", href: "#token" },
  { label: "AI", href: "#ai" },
  { label: "Platform", href: "#platform" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
];

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-[0_0_30px_theme(colors.cyan.500/50)]" />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-lg font-bold tracking-widest text-transparent">
                GAMEON WORLD
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/70 hover:text-white transition">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden sm:flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-cyan-200 shadow-[0_0_30px_theme(colors.cyan.500/30)] hover:bg-cyan-500/20 transition">
                <Languages size={16} />
                <span>EN</span>
              </button>
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(236,72,153,0.45)" }}
                whileTap={{ scale: 0.98 }}
                href="#enter"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.35)]"
              >
                Join / Mint / Enter
              </motion.a>
              <button className="md:hidden rounded-lg border border-white/10 p-2 text-white/80">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
