import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-500" />
            <span className="text-white/80 text-sm">© {new Date().getFullYear()} EcoDynamics</span>
          </div>
          <div className="text-white/60 text-sm">
            Made for eine klimapositive Zukunft der Mobilität
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
