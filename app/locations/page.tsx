import Link from 'next/link'

export const metadata = {
  title: 'Business Internet Providers in Oklahoma | PrimeConnect',
  description: 'Compare business internet providers across Oklahoma. Find fiber, wireless, VoIP, and broadband solutions in Oklahoma City, Tulsa, Edmond, Norman, and more.',
}

const cities = [
  {
    name: 'Oklahoma City',
    slug: 'oklahoma-city',
    description: 'AT&T Fiber, Spectrum, Comcast available',
    emoji: '🏙️',
    population: 'Largest city in Oklahoma',
  },
  {
    name: 'Tulsa',
    slug: 'tulsa',
    description: 'Fiber and wireless options available',
    emoji: '🌆',
    population: '2nd largest city in Oklahoma',
  },
  {
    name: 'Edmond',
    slug: 'edmond',
    description: 'Fast fiber solutions for businesses',
    emoji: '🏘️',
    population: 'Growing OKC suburb',
  },
  {
    name: 'Norman',
    slug: 'norman',
    description: 'Business internet near OU campus',
    emoji: '🎓',
    population: 'Home of University of Oklahoma',
  },
  {
    name: 'Broken Arrow',
    slug: 'broken-arrow',
    description: 'Growing business hub near Tulsa',
    emoji: '🏢',
    population: 'Fastest growing city in Oklahoma',
  },
  {
    name: 'Lawton',
    slug: 'lawton',
    description: 'Reliable business internet options',
    emoji: '📍',
    population: '3rd largest city in Oklahoma',
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </div>
        <Link href="/#questionnaire" className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition text-sm">
          Get Free Quote
        </Link>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-blue-900 text-blue-300 text-xs font-bold letter-spacing-3 px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
          Oklahoma
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Business Internet Solutions
          <span className="block text-blue-500">Across Oklahoma</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          Select your city to compare business internet providers available in your area. Free consultation included.
        </p>

        {/* City Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}-business-internet`}
              className="bg-slate-900 border border-slate-700 hover:border-blue-500 rounded-2xl p-6 text-left transition-all group"
            >
              <div className="text-4xl mb-4">{city.emoji}</div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">{city.name}</h2>
              <p className="text-slate-500 text-sm mb-1">{city.population}</p>
              <p className="text-slate-400 text-sm mb-4">{city.description}</p>
              <div className="bg-blue-600 text-white rounded-xl px-4 py-2 text-sm font-semibold text-center group-hover:bg-blue-500 transition">
                View Providers →
              </div>
            </Link>
          ))}
        </div>

        {/* Don't see your city */}
        <div className="bg-blue-900 rounded-2xl p-8">
          <p className="text-blue-200 text-lg mb-2 font-medium">Don't see your city?</p>
          <p className="text-blue-300 text-sm mb-6">We serve all of Oklahoma. Enter your ZIP code to check availability in your area.</p>
          <Link
            href="/#questionnaire"
            className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500 transition inline-block"
          >
            Check Your Area →
          </Link>
        </div>
      </section>
    </main>
  )
}