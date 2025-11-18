import { Leaf, Gauge, Battery, LineChart } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'CO₂-Transparenz',
    desc: 'Volle Transparenz über Emissionen entlang Ihrer Wertschöpfungskette – in Echtzeit und auditierbar.'
  },
  {
    icon: Gauge,
    title: 'Flotten-Optimierung',
    desc: 'Intelligente Routen- und Auslastungsplanung senkt Kosten und steigert Effizienz.'
  },
  {
    icon: Battery,
    title: 'Energie-Intelligenz',
    desc: 'Lade- und Speicherstrategien, die Netz und Betrieb optimal ausbalancieren.'
  },
  {
    icon: LineChart,
    title: 'Datenplattform',
    desc: 'Eine zentrale Plattform für Sensordaten, Analysen und Reports – sicher und skalierbar.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Was wir liefern</h2>
          <p className="mt-4 text-white/70">Greifbare Nachhaltigkeit mit messbarem Impact – datengetrieben, skalierbar und auf Ihren Betrieb zugeschnitten.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-500 text-slate-900 grid place-items-center shadow-lg shadow-emerald-500/30">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
