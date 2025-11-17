import { motion } from 'framer-motion';

export default function SplitNFTToken() {
  return (
    <section id="nft" className="relative w-full bg-[radial-gradient(ellipse_at_top,rgba(10,15,30,1),rgba(2,6,23,1))] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-pink-400/30 bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-rose-900/40 p-8 text-white shadow-[0_0_60px_rgba(244,63,94,0.25)]"
        >
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-pink-500/30 blur-3xl" />
          <h3 className="text-3xl font-extrabold tracking-wide">NFT – Collect, Trade, Progress</h3>
          <p className="mt-3 text-pink-100/80">Own evolving characters, skins and artifacts. Trade freely and level-up through play.</p>
          <div className="mt-8 aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-rose-500/20 ring-1 ring-white/10" />
        </motion.div>

        <motion.div
          id="token"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-indigo-900/40 p-8 text-white shadow-[0_0_60px_rgba(34,211,238,0.25)]"
        >
          <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-cyan-500/30 blur-3xl" />
          <h3 className="text-3xl font-extrabold tracking-wide">Gameon Token – Utility & Future Currency</h3>
          <p className="mt-3 text-cyan-100/80">Fuel transactions, governance and cross-game economy. Earn through play and contribution.</p>
          <div className="mt-8 aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/20 to-indigo-500/20 ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
