import { motion } from 'framer-motion';

export default function AISection() {
  return (
    <section id="ai" className="relative w-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,6,23,1),rgba(10,20,40,1))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-cyan-900/50 p-10 text-center text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
          <h3 className="relative text-3xl font-extrabold tracking-wide">
            Gameon AI – Smart Ecosystem Intelligence
          </h3>
          <p className="relative mx-auto mt-4 max-w-3xl text-cyan-100/80">
            Adaptive AI companions, economy balancers, and predictive matchmaking orchestrate a living universe. Your playstyle trains your AI.
          </p>
          <div className="relative mx-auto mt-10 h-56 max-w-4xl rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
