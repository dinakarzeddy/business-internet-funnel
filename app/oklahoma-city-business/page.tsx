import Link from 'next/link'

export const metadata = {
  title: 'Business Internet Providers Oklahoma City | PrimeConnect',
  description: 'Compare business internet providers in Oklahoma City. Get fiber, wireless, VoIP, and broadband solutions for OKC businesses. Free consultation with PrimeConnect.',
}

export default function OklahomaCityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Prime<span className="text-blue-500">Connect</span></div>
        <Link href="/" className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition text-sm">Get Free Quote</Link>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-blue-900 text-blue-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">Oklahoma City, OK</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Internet Providers<span className="block text-blue-500">in Oklahoma City</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">Compare fiber, wireless, VoIP, and broadband internet solutions for Oklahoma City businesses. Free consultation included.</p>
        <Link href="/" className="bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition text-lg inline-block">Check Availability in OKC →</Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Available Providers in Oklahoma City</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'AT&T Fiber', speed: '300 Mbps – 5 Gbps', best: 'Best for offices needing reliable fiber' },
            { name: 'Spectrum Business', speed: '300 Mbps – 1 Gbps', best: 'Best for small and medium businesses' },
            { name: 'Comcast Business', speed: '300 Mbps – 1.25 Gbps', best: 'Best for retail stores and offices' },
            { name: 'Verizon 5G Business', speed: 'Wireless Business Internet', best: 'Best for backup internet' },
          ].map((p) => (
            <div key={p.name} className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-1"><strong className="text-white">Speed:</strong> {p.speed}</p>
              <p className="text-slate-400 text-sm mb-4"><strong className="text-white">Best for:</strong> {p.best}</p>
              <Link href="/" className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition inline-block">Get Quote →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Why Oklahoma City Businesses Choose PrimeConnect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Local OKC Experts', desc: 'We know the Oklahoma City market and which providers deliver the best service in each neighborhood.' },
              { title: 'Compare All Providers', desc: 'One call compares AT&T, Spectrum, Comcast, and more — saving you hours of research.' },
              { title: 'Fast Installation', desc: 'Most OKC businesses get connected within 5-7 business days of signing up.' },
              { title: 'No Hidden Fees', desc: 'We show you the real price upfront — no surprises on your first bill.' },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-blue-500 pl-5">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Business Internet FAQ — Oklahoma City</h2>
        <div className="flex flex-col gap-4">
          {[
            { q: 'What is the best business internet provider in Oklahoma City?', a: 'AT&T Fiber is the top choice for most OKC businesses. Spectrum Business is a strong alternative for small businesses. PrimeConnect helps you compare all options available at your specific address.' },
            { q: 'How much does business internet cost in Oklahoma City?', a: 'Business internet in OKC typically ranges from $60 to $500+ per month depending on speed and provider. PrimeConnect offers a free consultation to help you find the most cost-effective solution.' },
            { q: 'Is fiber internet available for businesses in Oklahoma City?', a: 'Yes — AT&T Fiber is widely available across Oklahoma City offering speeds from 300 Mbps to 5 Gbps for businesses.' },
            { q: 'How quickly can I get business internet installed in OKC?', a: 'Most providers can install business internet in Oklahoma City within 5-10 business days.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-bold mb-2">{item.q}</h3>
              <p className="text-slate-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Find the Best Business Internet in Oklahoma City?</h2>
        <p className="text-blue-100 mb-8 text-lg">Free consultation. No commitment. Takes 2 minutes.</p>
        <Link href="/" className="bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition text-lg inline-block">Check If You Qualify — Free</Link>
      </section>
    </main>
  )
}