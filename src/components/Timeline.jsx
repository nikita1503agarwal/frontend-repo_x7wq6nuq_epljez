import { motion } from 'framer-motion';

const items = [
  { year: '2022', title: 'Spark', desc: 'Idea → Prototype' },
  { year: '2023', title: 'MVP', desc: 'First playable + community' },
  { year: '2024', title: 'Multichain', desc: 'VC partnerships + expansion' },
  { year: 'Next', title: 'Global', desc: 'Global Expansion' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,1),rgba(4,10,24,1))] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-center text-3xl font-extrabold text-transparent">Roadmap</h3>
        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/60 via-white/20 to-fuchsia-500/60" />
          <div className="space-y-12">
            {items.map((it, idx) => (
              <motion.div
                key={it.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative grid grid-cols-1 items-center gap-4 md:grid-cols-2 ${idx % 2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`${idx % 2 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl">
                    <span className="text-2xl font-extrabold">{it.year}</span>
                    <span className="text-white/60">{it.title}</span>
                  </div>
                </div>
                <p className={`${idx % 2 ? 'md:order-1' : ''} text-white/70`}>{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
