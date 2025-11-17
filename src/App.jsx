import Header from './components/Header'
import Hero from './components/Hero'
import SplitNFTToken from './components/SplitNFTToken'
import AISection from './components/AISection'
import PlatformEcosystem from './components/PlatformEcosystem'
import Timeline from './components/Timeline'
import Team from './components/Team'

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Header />
      <main className="relative">
        <Hero />
        <SplitNFTToken />
        <AISection />
        <PlatformEcosystem />
        <Timeline />
        <Team />
        <footer className="relative border-t border-white/10 bg-black/30 py-10">
          <div className="mx-auto max-w-7xl px-6 text-center text-white/60">
            <p>© {new Date().getFullYear()} Gameon World. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
