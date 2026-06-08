import Link from "next/link";
import { notFound } from "next/navigation";

const cityPages = {
  "oklahoma-city": {
    city: "Oklahoma City",
    state: "OK",
    title: "Business Internet Providers in Oklahoma City, OK",
    description:
      "Compare business internet, fiber, VoIP, and backup connectivity solutions for companies in Oklahoma City.",
  },
  tulsa: {
    city: "Tulsa",
    state: "OK",
    title: "Business Internet Providers in Tulsa, OK",
    description:
      "PrimeConnect helps Tulsa businesses compare internet providers, fiber options, VoIP services, and backup internet solutions.",
  },
  dallas: {
    city: "Dallas",
    state: "TX",
    title: "Business Internet Providers in Dallas, TX",
    description:
      "Find business internet, fiber, VoIP, and connectivity options for Dallas companies with PrimeConnect.",
  },
  detroit: {
    city: "Detroit",
    state: "MI",
    title: "Business Internet Providers in Detroit, MI",
    description:
      "Compare business internet providers and connectivity solutions for Detroit businesses through PrimeConnect.",
  },
};

type CityKey = keyof typeof cityPages;

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({
    city,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const page = cityPages[params.city as CityKey];

  if (!page) {
    return {
      title: "Business Internet Providers | PrimeConnect",
    };
  }

  return {
    title: `${page.title} | PrimeConnect`,
    description: page.description,
  };
}

export default function CityLandingPage({
  params,
}: {
  params: { city: string };
}) {
  const page = cityPages[params.city as CityKey];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="text-3xl font-bold">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-blue-400 font-semibold uppercase tracking-wider mb-4">
          Business Connectivity Solutions
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {page.title}
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mb-8">
          {page.description}
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold"
        >
          Check Availability
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="bg-white text-slate-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Compare Providers</h2>
          <p className="text-slate-600">
            Review available business internet and connectivity options for
            companies in {page.city}, {page.state}.
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Fiber & Backup Internet</h2>
          <p className="text-slate-600">
            Find fiber, wireless backup, and reliable internet solutions for
            offices, retail stores, restaurants, and growing teams.
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Free Consultation</h2>
          <p className="text-slate-600">
            Not sure what speed or provider fits your business? PrimeConnect can
            help guide your decision.
          </p>
        </div>
      </section>
    </main>
  );
}