import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Lösungen', href: '#features' },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30" />
            <span className="text-white text-lg font-semibold tracking-tight">EcoDynamics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              Demo anfragen
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/30">
              Demo anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
