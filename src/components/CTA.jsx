function CTA() {
  return (
    <section id="kontakt" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-8 sm:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-white">Bereit für spürbare Effizienz?</h3>
            <p className="mt-3 text-white/80">Lassen Sie uns über Ziele, Datenlage und den schnellsten ROI sprechen. Wir melden uns innerhalb von 24h.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="Ihre E-Mail-Adresse" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <button className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">Kontakt aufnehmen</button>
            </form>
            <p className="mt-3 text-xs text-white/60">Mit dem Absenden stimmen Sie unserer Verarbeitung gemäß Datenschutz zu.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
