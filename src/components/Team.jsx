import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const members = [
  { name: 'Nova', role: 'Founder', color: 'from-cyan-500 to-fuchsia-500' },
  { name: 'Quark', role: 'AI Lead', color: 'from-indigo-500 to-cyan-500' },
  { name: 'Vega', role: 'Design', color: 'from-pink-500 to-rose-500' },
  { name: 'Atlas', role: 'Engineering', color: 'from-purple-500 to-indigo-500' },
];

export default function Team() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % members.length);
  const prev = () => setIndex((i) => (i - 1 + members.length) % members.length);

  return (
    <section id="team" className="relative w-full bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,1),rgba(6,12,28,1))] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-3xl font-extrabold text-transparent">Team</h3>
        <div className="relative mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${members[index].color} opacity-80 ring-1 ring-white/10`} />
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold">{members[index].name}</h4>
                <p className="mt-2 rounded-full bg-white/10 px-3 py-1 text-white/80">{members[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10">Prev</button>
            <button onClick={next} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
