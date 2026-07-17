import Link from "next/link";

export const metadata = {
  title: "Our Provider Partners | PrimeConnect",
  description:
    "See the real business internet providers PrimeConnect compares for you — AT&T Fiber, Spectrum Business, Comcast Business, and Verizon 5G. No commission-driven rankings.",
};

const providers = [
  {
    name: "AT&T Fiber",
    speed: "300 Mbps - 5 Gbps",
    bestFor: "Offices needing reliable fiber",
  },
  {
    name: "Spectrum Business",
    speed: "300 Mbps - 1 Gbps",
    bestFor: "Small and medium businesses",
  },
  {
    name: "Comcast Business",
    speed: "300 Mbps - 1.25 Gbps",
    bestFor: "Retail stores and offices",
  },
  {
    name: "Verizon 5G Business",
    speed: "Wireless Business Internet",
    bestFor: "Backup internet and fast deployment",
  },
];

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Provider Partners
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          These are the real providers we compare for your business — no
          commission-driven rankings, no bias. Just the options actually
          available in your area.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-white text-slate-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-2">{provider.name}</h3>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Speed:</strong> {provider.speed}
              </p>
              <p className="text-sm text-slate-600">
                <strong>Best for:</strong> {provider.bestFor}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/#questionnaire"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full inline-block transition-all"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </main>
  );
}