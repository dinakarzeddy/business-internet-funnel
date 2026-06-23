"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [showBusinessTypes, setShowBusinessTypes] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [employeeSize, setEmployeeSize] = useState("");
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [decision, setDecision] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProvider, setCurrentProvider] = useState("");
  const [currentBill, setCurrentBill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const businessTypes = [
    "Small Office",
    "Retail Store",
    "Restaurant",
    "Warehouse",
    "Call Center",
    "Apartment Complex",
    "Remote Team",
    "Enterprise",
  ];

  const painOptions = [
  "Slow internet",
  "High bill",
  "Frequent outages",
  "Need fiber",
  "Need backup internet",
  "Opening new location",
  "Remote workers",
  "Need VoIP",
  ];

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

function validateLeadForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-Z\s.'-]+$/;
  const phoneDigits = phone.replace(/\D/g, "");
  const billDigits = currentBill.replace(/[^0-9.]/g, "");

  if (name.trim().length < 2 || !namePattern.test(name.trim())) {
    return "Please enter a valid full name.";
  }

  if (businessName.trim().length < 2) {
    return "Please enter a valid business name.";
  }

  if (!emailPattern.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  if (phoneDigits.length !== 10) {
    return "Please enter a valid 10-digit phone number.";
  }

  if (
    currentProvider.trim().length > 0 &&
    currentProvider.trim().length < 2
  ) {
    return "Please enter a valid current provider name.";
  }

  if (currentBill.trim().length > 0) {
    const billNumber = Number(billDigits);

    if (!billDigits || Number.isNaN(billNumber) || billNumber <= 0) {
      return "Please enter a valid current monthly bill amount.";
    }
  }

  return "";
}



async function submitLead() {
  
setFormError("");

const validationMessage = validateLeadForm();

if (validationMessage) {
  setFormError(validationMessage);
  return;
}
setLoading(true);

  const { error } = await supabase.from("business_internet_leads").insert([
    {
      name: name,
      email: email,
      phone: phone,
      business_name: businessName,
      business_type: businessType,
      zip_code: zipCode,
      employee_size: employeeSize,
      pain_points: painPoints,
      knows_package: decision,
      current_provider: currentProvider,
      current_bill: currentBill,
      source: 'PrimeConnect Website',
    },
  ]);

  setLoading(false);

  if (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
    return;
  }

  // Send Discord notification
  await fetch('/api/business-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phone,
      business_name: businessName,
      business_type: businessType,
      zip_code: zipCode,
      employee_size: employeeSize,
      current_provider: currentProvider,
    }),
  })

  setSubmitted(true);
}


  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
  <div className="text-2xl font-bold text-white">
    Prime<span className="text-blue-500">Connect</span>
  </div>

 
</nav>
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Compare Business Internet Providers
          <span className="block text-blue-500">In Your Area</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Get fiber, wireless, VoIP, and business internet solutions customized
          for your company.
        </p>


        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          
          

<input
  type="text"
  placeholder="Enter ZIP Code"
  value={zipCode}
  maxLength={5}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setZipCode(onlyNumbers);
  }}
  className="flex-1 px-4 py-4 rounded-xl text-slate-900 placeholder:text-slate-500 bg-white"
/>

<button
  onClick={() => setShowBusinessTypes(true)}
  disabled={zipCode.length !== 5}
  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 px-6 py-4 rounded-xl font-semibold"
>
  Check Availability
</button>


        </div>
      </section>

      {showBusinessTypes && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">
              What type of business do you have?
            </h2>

            <p className="text-slate-600 mb-8">
              This helps us recommend the right internet solution.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`border rounded-xl p-4 text-left font-medium ${
                    businessType === type
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {businessType && (
              <div className="mt-8">
                <p className="text-blue-600 font-semibold mb-4">
                  Selected Business Type: {businessType}
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  How many employees do you have?
                </h3>

                <select
                  value={employeeSize}
                  onChange={(e) => setEmployeeSize(e.target.value)}
                  className="w-full md:w-1/2 border rounded-xl px-4 py-3"
                >
                  <option value="">Select employee size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="50+">50+ employees</option>
                </select>

                {employeeSize && (
  <div className="mt-8">
    <h3 className="text-2xl font-bold mb-4">
      What challenges are you facing?
    </h3>

    <div className="grid md:grid-cols-2 gap-3">
      {painOptions.map((pain) => (
        <label
          key={pain}
          className="border rounded-xl p-4 flex items-center gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={painPoints.includes(pain)}
            onChange={(e) => {
              if (e.target.checked) {
                setPainPoints([...painPoints, pain]);
              } else {
                setPainPoints(
                  painPoints.filter((item) => item !== pain)
                );
              }
            }}
          />

          {pain}
        </label>
      ))}
    </div>

    {painPoints.length > 0 && (
      <div className="mt-6 text-green-600 font-semibold">
        Selected Pain Points:
        <ul className="list-disc ml-6 mt-2">
          {painPoints.map((pain) => (
            <li key={pain}>{pain}</li>
          ))}
        </ul>
      </div>
    )}
    {painPoints.length > 0 && (
  <div className="mt-8">
    <h3 className="text-2xl font-bold mb-4">
      Do you already know what internet package you need?
    </h3>

    <div className="grid md:grid-cols-2 gap-4">
      <button
        onClick={() => setDecision("providers")}
        className={`border rounded-xl p-5 text-left ${
          decision === "providers"
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-slate-200 hover:border-blue-500"
        }`}
      >
        <h4 className="font-bold text-lg">Yes, show me providers</h4>
        <p className="text-sm text-slate-600 mt-2">
          I know what I need and want to compare available options.
        </p>
      </button>

      <button
        
        onClick={() => {
  setDecision("consultation");
  setShowLeadForm(true);
}}
        className={`border rounded-xl p-5 text-left ${
          decision === "consultation"
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-slate-200 hover:border-blue-500"
        }`}
      >
        <h4 className="font-bold text-lg">I need help</h4>
        <p className="text-sm text-slate-600 mt-2">
          I want a specialist to help recommend the best solution.
        </p>
      </button>
    </div>

    {decision && (
      <p className="mt-5 text-green-600 font-semibold">
        Selected Path:{" "}
        {decision === "providers"
          ? "Provider Comparison"
          : "Free Consultation"}
      </p>
    )}
    {decision === "providers" && (
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-6">
          Available Provider Options
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-xl font-bold mb-3">
                {provider.name}
              </h4>

              <p className="mb-2">
                <strong>Speed:</strong> {provider.speed}
              </p>

              <p className="mb-4">
                <strong>Best For:</strong> {provider.bestFor}
              </p>

              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    )}

    {showLeadForm && (
      <div className="mt-8 border rounded-2xl p-6 bg-slate-50">
        <h3 className="text-2xl font-bold mb-4">
          {decision === "consultation"
            ? "Book a Free Business Internet Consultation"
            : "Request Your Business Internet Quote"}
        </h3>

        {decision === "consultation" && (
          <p className="text-slate-600 mb-4">
            Our specialists will help recommend the best internet solution for your business.
          </p>
        )}

        {submitted && (
          <p className="mb-4 text-green-600 font-semibold">
            Quote request submitted successfully.
            Our team will contact you soon.
          </p>
        )}

        {formError && (
          <p className="mb-4 text-red-600 font-semibold">
            {formError}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
  type="text"
  placeholder="Phone Number"
  value={phone}
  maxLength={14}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPhone(onlyNumbers);
  }}
  className="border rounded-xl px-4 py-3"
/>

          <input
            type="text"
            placeholder="Current Provider"
            value={currentProvider}
            onChange={(e) => setCurrentProvider(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
  type="text"
  placeholder="Current Monthly Bill"
  value={currentBill}
  onChange={(e) => {
    const onlyValidCharacters = e.target.value.replace(/[^0-9.$]/g, "");
    setCurrentBill(onlyValidCharacters);
  }}
  className="border rounded-xl px-4 py-3"
/>
        </div>

        <button
          onClick={submitLead}
          disabled={loading}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 disabled:bg-slate-400"
        >
          {loading ? "Submitting..." : "Submit Quote Request"}
        </button>
      </div>
    )}
  </div>
)}
  </div>
)}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}