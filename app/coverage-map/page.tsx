"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CoverageMap = dynamic<{ lat: number; lng: number; label: string }>(
  () => import("@/components/CoverageMap"),
  { ssr: false }
);

// City-level provider data — derived from existing city pages.
// Address-level precision is a future upgrade once a real coverage API is available.
const cityProviders: Record <
  string,
  { name: string; available: boolean }[]
> = {
  edmond: [
    { name: "AT&T Fiber", available: true },
    { name: "Spectrum Business", available: true },
    { name: "Comcast Business", available: true },
    { name: "Verizon 5G", available: true },
  ],
  tulsa: [  
    { name: "AT&T Fiber", available: true },
    { name: "Cox Business", available: true },
    { name: "Verizon 5G", available: true },
  ],
  "oklahoma city": [
    { name: "AT&T Fiber", available: true },
    { name: "Spectrum Business", available: true },
    { name: "Comcast Business", available: true },
    { name: "Verizon 5G", available: true },
  ],
  norman: [
    { name: "AT&T Fiber", available: true },
    { name: "Spectrum Business", available: true },
    { name: "Verizon 5G", available: true },
  ],
  "broken arrow": [
    { name: "AT&T Fiber", available: true },
    { name: "Cox Business", available: true },
  ],
  lawton: [
    { name: "AT&T Fiber", available: true },
    { name: "Spectrum Business", available: true },
  ],
};

export default function CoverageMapPage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    lat: number;
    lng: number;
    matchedCity: string | null;
    displayName: string;
  } | null>(null);

  async function searchAddress() {
    if (!address.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&q=${encodeURIComponent(
          address + " Oklahoma"
        )}`
      );
      const data = await res.json();

      if (!data.length) {
        setError("Couldn't find that address. Try adding city and state.");
        setLoading(false);
        return;
      }

      const { lat, lon, display_name } = data[0];
      const lowerName = display_name.toLowerCase();
      const matchedCity =
        Object.keys(cityProviders).find((city) =>
          lowerName.includes(city)
        ) || null;

      setResult({
        lat: parseFloat(lat),
        lng: parseFloat(lon),
        matchedCity,
        displayName: display_name,
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          See Providers Near Your Business
        </h1>
        <p className="text-slate-300 mb-8">
          Enter your address to see which providers serve your area.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="123 Main St, Edmond, OK"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchAddress()}
            className="flex-1 px-4 py-3 rounded-xl text-slate-900 bg-white placeholder:text-slate-400"
          />
          <button
            onClick={searchAddress}
            disabled={loading || !address.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 px-6 py-3 rounded-xl font-semibold"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && <p className="text-red-400 text-sm mb-6">{error}</p>}

        {result && (
          <div className="text-left">
            <CoverageMap
              lat={result.lat}
              lng={result.lng}
              label={result.displayName}
            />

            <div className="bg-white text-slate-900 rounded-2xl p-6 mt-6">
              {result.matchedCity ? (
                <>
                  <h3 className="font-bold text-lg mb-4">
                    Providers Serving Your Area
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cityProviders[result.matchedCity].map((p) => (
                      <span
                        key={p.name}
                        className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full"
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-slate-600">
                  We don't have detailed coverage data for this exact area
                  yet — but our specialists can check availability for you
                  directly.
                </p>
              )}
            </div>

            <div className="text-center mt-6">
              <Link
                href="/#questionnaire"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full inline-block transition-all"
              >
                Get My Real Quote
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}