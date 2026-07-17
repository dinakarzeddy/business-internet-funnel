"use client";

import { useState } from "react";
import Link from "next/link";

// Placeholder pricing — verify against real current provider rates before launch
type Provider = {
  name: string;
  speed: string;
  maxMbps: number;
  price: number;
  contract: string;
  contractMonths: number;
};

const providers: Provider[] = [
  {
    name: "AT&T Fiber",
    speed: "Up to 5 Gbps",
    maxMbps: 5000,
    price: 85,
    contract: "12 mo",
    contractMonths: 12,
  },
  {
    name: "Spectrum Business",
    speed: "Up to 1 Gbps",
    maxMbps: 1000,
    price: 65,
    contract: "None",
    contractMonths: 0,
  },
  {
    name: "Comcast Business",
    speed: "Up to 1.25 Gbps",
    maxMbps: 1250,
    price: 70,
    contract: "24 mo",
    contractMonths: 24,
  },
  {
    name: "Verizon 5G Business",
    speed: "Wireless",
    maxMbps: 400,
    price: 60,
    contract: "None",
    contractMonths: 0,
  },
];

type SortKey = "name" | "maxMbps" | "price" | "contractMonths";

export default function CompareProvidersPage() {
  const [sortKey, setSortKey] = useState<SortKey>("price");
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...providers].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return sortAsc
      ? (aVal as number) - (bVal as number)
      : (bVal as number) - (aVal as number);
  });

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  const columns: { key: SortKey; label: string }[] = [
    { key: "name", label: "Provider" },
    { key: "maxMbps", label: "Speed" },
    { key: "price", label: "From/mo" },
    { key: "contractMonths", label: "Contract" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Compare Providers Side by Side
        </h1>
        <p className="text-slate-300 mb-10">
          Sort by price, speed, or contract length to find your best fit.
        </p>

        <div className="bg-white text-slate-900 rounded-2xl overflow-hidden text-left">
          <div className="grid grid-cols-4 bg-slate-100 px-4 py-3">
            {columns.map((col) => (
              <button
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="text-xs font-bold text-slate-600 text-left hover:text-blue-600 transition-colors"
              >
                {col.label}
                {sortKey === col.key ? (sortAsc ? " ▲" : " ▼") : " ▾"}
              </button>
            ))}
          </div>

          {sorted.map((provider) => (
            <div
              key={provider.name}
              className="grid grid-cols-4 px-4 py-4 border-t border-slate-100 items-center"
            >
              <span className="text-sm font-semibold">{provider.name}</span>
              <span className="text-sm text-slate-600">{provider.speed}</span>
              <span className="text-sm text-slate-600">${provider.price}</span>
              <span className="text-sm text-slate-600">
                {provider.contract}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/#questionnaire"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full inline-block mt-8 transition-all"
        >
          Compare My Options
        </Link>

        <p className="text-xs text-slate-500 mt-4">
          Pricing shown is estimated starting rate. Your actual quote may vary
          by location and provider promotions.
        </p>
      </section>
    </main>
  );
}