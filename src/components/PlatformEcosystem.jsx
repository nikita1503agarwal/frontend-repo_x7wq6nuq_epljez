import { motion } from 'framer-motion';
import { Cpu, Network } from 'lucide-react';

const Card = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl transition-shadow hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
  >
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
    <div className="relative z-10 flex items-center gap-3">
      <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-3">
        <Icon className="text-cyan-300" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <p className="relative z-10 mt-3 text-white/70">{desc}</p>
  </motion.div>
);

export default function PlatformEcosystem() {
  return (
    <section id="platform" className="relative w-full bg-[radial-gradient(ellipse_at_top_right,rgba(2,6,23,1),rgba(10,20,40,1))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-white"
          >
            <h3 className="text-2xl font-extrabold">Platform</h3>
            <p className="mt-2 text-white/70">Cross-game identity, wallet, marketplace and creator tools.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card icon={Cpu} title="Creator Suite" desc="No-code UGC tools & mod kits" />
              <Card icon={Network} title="Interoperable" desc="Assets move across worlds" />
              <Card icon={Cpu} title="Wallet Native" desc="Gasless onboarding & socials" />
              <Card icon={Network} title="Market Hub" desc="P2P trading & auctions" />
            </div>
          </motion.div>

          <motion.div
            id="ecosystem"
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-white"
          >
            <h3 className="text-2xl font-extrabold">Eco-Verse</h3>
            <p className="mt-2 text-white/70">Partners, guilds and services connect into a living economy.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card icon={Network} title="Guilds" desc="Compete, govern, share rewards" />
              <Card icon={Cpu} title="AI Services" desc="Matchmaking, anti-cheat, pricing" />
              <Card icon={Network} title="Launchpad" desc="New worlds & collections" />
              <Card icon={Cpu} title="Analytics" desc="On-chain and in-game data" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
