import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,8,20,0.2),rgba(2,6,23,0.85))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-cyan-200 via-sky-300 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          FROM RIFT,
          <br className="hidden sm:block" />
          THE NEW WORLD EMERGE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-balance text-lg text-cyan-100/80"
        >
          A decentralized entertainment ecosystem where gaming, AI and crypto converge.
          Own assets, command AI, and traverse a neon cosmos built by players.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(34,211,238,0.45)' }}
            whileTap={{ scale: 0.98 }}
            href="#enter"
            className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.35)]"
          >
            Enter Now
          </motion.a>
          <a href="#nft" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur-md hover:bg-white/10">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
