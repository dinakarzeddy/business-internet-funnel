import Link from "next/link";

export const metadata = {
  title: "About Us | PrimeConnect",
  description:
    "PrimeConnect connects businesses with the nation's leading internet, phone, and telecom providers — all in one place. Compare, save, and stay connected with confidence.",
};

const services = [
  "Business Internet",
  "Business Phone Systems",
  "Fiber Internet",
  "VoIP Solutions",
  "Wireless Business Services",
  "Network & Connectivity Solutions",
  "Provider Comparison & Bill Optimization",
  "Service Consolidation",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/savings-calculator" className="text-slate-300 hover:text-blue-500 transition-colors">
            Savings Calculator
          </Link>
          <Link href="/compare-providers" className="text-slate-300 hover:text-blue-500 transition-colors">
            Compare Providers
          </Link>
          <Link href="/coverage-map" className="text-slate-300 hover:text-blue-500 transition-colors">
            Coverage Map
          </Link>
          <Link href="/providers" className="text-slate-300 hover:text-blue-500 transition-colors">
            Our Partners
          </Link>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About PrimeConnect
        </h1>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            At PrimeConnect, we simplify business telecommunications by
            connecting companies with the nation's leading internet, phone,
            and telecom providers — all in one place. Our mission is to help
            businesses optimize their communication services, eliminate
            unnecessary costs, and find the best combination of speed,
            reliability, pricing, and promotional offers available.
          </p>
          <p>
            Instead of spending hours comparing providers or managing
            multiple bills, our experts do the work for you. Whether you're
            opening a new location, upgrading your network, or looking to
            reduce monthly expenses, PrimeConnect provides unbiased solutions
            tailored to your business. We compare multiple providers to
            ensure you receive the right service at the best value.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6 text-center">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {services.map((service) => (
            <div
              key={service}
              className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 flex items-center gap-3"
            >
              <span className="text-blue-500 text-lg">✓</span>
              <span className="text-slate-200 font-medium">{service}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-center mt-10 leading-relaxed">
          With access to multiple top telecom providers, PrimeConnect helps
          businesses save time, reduce costs, and stay connected with
          confidence.
        </p>

        <div className="text-center mt-10">
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