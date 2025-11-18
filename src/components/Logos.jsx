function Logos() {
  const logos = ['Audi', 'BMW', 'Porsche', 'Siemens', 'Bosch', 'ABB']
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white/60 text-xs uppercase tracking-widest">Vertrauen von Teams in Industrie & Mobilität</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-white/40 text-sm bg-white/5 rounded-lg py-3">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
