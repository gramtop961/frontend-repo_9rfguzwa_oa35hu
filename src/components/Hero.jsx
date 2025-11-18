import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">Automotive • Sports • High-Energy</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Nachhaltige Performance für die Mobilität von morgen
          </h1>
          <p className="mt-6 text-lg text-white/80">
            EcoDynamics verbindet modernste Datenplattformen mit intelligenter Analyse, um nachhaltige Flotten- und Energieentscheidungen in Echtzeit zu ermöglichen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              Demo anfragen
            </a>
            <a href="#features" className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
