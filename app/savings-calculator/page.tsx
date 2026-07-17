"use client";

import { useState } from "react";
import Link from "next/link";

// Placeholder market-rate estimates — verify against real current pricing before launch
const speedTiers = [
  { label: "Under 100 Mbps", avgNewPrice: 65 },
  { label: "100–300 Mbps", avgNewPrice: 85 },
  { label: "300–500 Mbps", avgNewPrice: 120 },
  { label: "500 Mbps – 1 Gbps", avgNewPrice: 180 },
  { label: "1 Gbps+", avgNewPrice: 240 },
];

export default function SavingsCalculatorPage() {
  const [currentBill, setCurrentBill] = useState("");
  const [speedTier, setSpeedTier] = useState(speedTiers[2].label);
  const [showResult, setShowResult] = useState(false);

  const billNumber = Number(currentBill.replace(/[^0-9.]/g, ""));
  const selectedTier = speedTiers.find((t) => t.label === speedTier)!;
  const estimatedNew = selectedTier.avgNewPrice;
  const savings = billNumber - estimatedNew;
  const savingsPercent = billNumber > 0 ? Math.round((savings / billNumber) * 100) : 0;

  const canCalculate = billNumber > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-lg mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          See How Much You Could Save
        </h1>
        <p className="text-slate-300 mb-10">
          Enter your current bill — takes 10 seconds.
        </p>

        <div className="bg-white text-slate-900 rounded-2xl p-6 text-left">
          <label className="text-sm font-semibold text-slate-600 block mb-1">
            Current Monthly Bill
          </label>
          <input
            type="text"
            placeholder="$420"
            value={currentBill}
            onChange={(e) => {
              const onlyValid = e.target.value.replace(/[^0-9.$]/g, "");
              setCurrentBill(onlyValid);
              setShowResult(false);
            }}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 mb-4"
          />

          <label className="text-sm font-semibold text-slate-600 block mb-1">
            Current Speed
          </label>
          <select
            value={speedTier}
            onChange={(e) => {
              setSpeedTier(e.target.value);
              setShowResult(false);
            }}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 mb-5"
          >
            {speedTiers.map((tier) => (
              <option key={tier.label} value={tier.label}>
                {tier.label}
              </option>
            ))}
          </select>

          {!showResult && (
            <button
              onClick={() => setShowResult(true)}
              disabled={!canCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Calculate My Savings
            </button>
          )}

          {showResult && (
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-blue-700 mb-1">
                ESTIMATED NEW COST
              </p>
              <p className="text-3xl font-bold text-slate-900">
                ${estimatedNew}
                <span className="text-sm text-slate-500 font-normal">/mo</span>
              </p>
              {savings > 0 ? (
                <p className="text-sm text-green-600 font-semibold mt-2">
                  Save ${savings.toFixed(0)}/month · {savingsPercent}% off
                </p>
              ) : (
                <p className="text-sm text-slate-500 mt-2">
                  You're already at a competitive rate — let's confirm with a
                  free consultation.
                </p>
              )}
            </div>
          )}
        </div>

        <Link
          href="/#questionnaire"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full inline-block mt-8 transition-all"
        >
          Get My Real Quote
        </Link>

        <p className="text-xs text-slate-500 mt-4">
          Estimates based on typical Oklahoma business internet pricing.
          Your actual quote may vary.
        </p>
      </section>
    </main>
  );
}