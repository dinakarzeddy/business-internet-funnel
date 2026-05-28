"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  business_name: string;
  business_type: string;
  employee_size: string;
  zip_code: string;
  pain_points: string[];
  knows_package: string;
  current_provider: string;
  current_bill: string;
  lead_status: string;
  created_at: string;
};

export default function AdminPage() {
    
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  

  useEffect(() => {
  async function checkAdminSession() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      router.push("/admin/login");
      return;
    }

    fetchLeads();
  }

  checkAdminSession();
}, [router]);

  async function fetchLeads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setLeads(data || []);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Admin Lead Dashboard</h1>
          <p className="text-slate-300 mt-2">
            View submitted business internet quote and consultation requests.
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 flex justify-between items-center border-b">
            <h2 className="text-2xl font-bold">Submitted Leads</h2>

            <button
              onClick={fetchLeads}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="p-6">Loading leads...</p>
          ) : leads.length === 0 ? (
            <p className="p-6">No leads found yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Business</th>
                    <th className="p-4 text-left">Contact</th>
                    <th className="p-4 text-left">ZIP</th>
                    <th className="p-4 text-left">Type</th>
                    <th className="p-4 text-left">Employees</th>
                    <th className="p-4 text-left">Path</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t">
                      <td className="p-4 font-semibold">{lead.name}</td>
                      <td className="p-4">{lead.business_name}</td>
                      <td className="p-4">
                        <div>{lead.email}</div>
                        <div className="text-slate-500">{lead.phone}</div>
                      </td>
                      <td className="p-4">{lead.zip_code}</td>
                      <td className="p-4">{lead.business_type}</td>
                      <td className="p-4">{lead.employee_size}</td>
                      <td className="p-4">
                        {lead.knows_package === "providers"
                          ? "Provider Quote"
                          : "Consultation"}
                      </td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {lead.lead_status || "New Lead"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}