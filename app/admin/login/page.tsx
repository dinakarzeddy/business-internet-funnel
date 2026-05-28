"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setErrorMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage("Invalid email or password.");
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
        <p className="text-slate-600 mb-6">
          Sign in to view submitted business internet leads.
        </p>

        {errorMessage && (
          <p className="mb-4 text-red-600 font-semibold">
            {errorMessage}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            onClick={handleLogin}
            disabled={loading || !email || !password}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-6 py-3 rounded-xl font-semibold"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </div>
    </main>
  );
}