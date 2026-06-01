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
  const statusOptions = [
  "New Lead",
  "Qualified",
  "Consultation Booked",
  "Proposal Sent",
  "Closed Won",
  "Closed Lost",
];
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  

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

const totalLeads = leads.length;

const newLeads = leads.filter(
  (lead) => (lead.lead_status || "New Lead") === "New Lead"
).length;

const qualifiedLeads = leads.filter(
  (lead) => lead.lead_status === "Qualified"
).length;

const consultationBooked = leads.filter(
  (lead) => lead.lead_status === "Consultation Booked"
).length;

const proposalSent = leads.filter(
  (lead) => lead.lead_status === "Proposal Sent"
).length;

const closedWon = leads.filter(
  (lead) => lead.lead_status === "Closed Won"
).length;

const closedLost = leads.filter(
  (lead) => lead.lead_status === "Closed Lost"
).length;


const filteredLeads = leads.filter((lead) => {
  const searchValue = searchTerm.toLowerCase();

  const matchesSearch =
    lead.name?.toLowerCase().includes(searchValue) ||
    lead.business_name?.toLowerCase().includes(searchValue) ||
    lead.email?.toLowerCase().includes(searchValue) ||
    lead.phone?.toLowerCase().includes(searchValue) ||
    lead.zip_code?.toLowerCase().includes(searchValue);

  const matchesStatus =
    statusFilter === "All" ||
    (lead.lead_status || "New Lead") === statusFilter;

  return matchesSearch && matchesStatus;
});

  async function updateLeadStatus(leadId: string, newStatus: string) {
    const { error } = await supabase
      .from("leads")
      .update({ lead_status: newStatus })
      .eq("id", leadId);

    if (error) {
      console.error(error);
      alert("Failed to update lead status.");
      return;
    }

    setLeads((currentLeads) =>
      currentLeads.map((lead) =>
        lead.id === leadId ? { ...lead, lead_status: newStatus } : lead
      )
    );
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


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  <MetricCard title="Total Leads" value={totalLeads} />
  <MetricCard title="New Leads" value={newLeads} />
  <MetricCard title="Qualified" value={qualifiedLeads} />
  <MetricCard title="Consultation Booked" value={consultationBooked} />
  <MetricCard title="Proposal Sent" value={proposalSent} />
  <MetricCard title="Closed Won" value={closedWon} />
  <MetricCard title="Closed Lost" value={closedLost} />
</div>

        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h2 className="text-2xl font-bold">Submitted Leads</h2>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border rounded-xl px-4 py-2"
                />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border rounded-xl px-4 py-2"
                >
                  <option value="All">All Statuses</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <button
                  onClick={fetchLeads}
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <p className="p-6">Loading leads...</p>
          ) : filteredLeads.length === 0 ? (
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
                    <th className="p-4 text-left">Details</th>
                  </tr>
                </thead>

                <tbody>
                 {filteredLeads.map((lead) => (
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
                        <select
    value={lead.lead_status || "New Lead"}
    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
    className="border rounded-xl px-3 py-2 text-sm bg-white"
  >
    {statusOptions.map((status) => (
      <option key={status} value={status}>
        {status}
      </option>
    ))}
  </select>
</td>
<td className="p-4">
  <button
    onClick={() => setSelectedLead(lead)}
    className="bg-slate-800 text-white px-4 py-2 rounded-xl hover:bg-slate-900 text-sm"
  >
    View Details
  </button>
</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {selectedLead && (
  <div className="mt-8 bg-white text-slate-900 rounded-3xl shadow-2xl p-8">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-2xl font-bold">Lead Details</h2>
        <p className="text-slate-600">
          Full information for {selectedLead.business_name}
        </p>
      </div>

      <button
        onClick={() => setSelectedLead(null)}
        className="text-slate-500 hover:text-slate-900 font-semibold"
      >
        Close
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <DetailItem label="Contact Name" value={selectedLead.name} />
      <DetailItem label="Business Name" value={selectedLead.business_name} />
      <DetailItem label="Email" value={selectedLead.email} />
      <DetailItem label="Phone" value={selectedLead.phone} />
      <DetailItem label="ZIP Code" value={selectedLead.zip_code} />
      <DetailItem label="Business Type" value={selectedLead.business_type} />
      <DetailItem label="Employee Size" value={selectedLead.employee_size} />
      <DetailItem
        label="Request Type"
        value={
          selectedLead.knows_package === "providers"
            ? "Provider Quote"
            : "Consultation"
        }
      />
      <DetailItem
        label="Current Provider"
        value={selectedLead.current_provider || "Not provided"}
      />
      <DetailItem
        label="Current Monthly Bill"
        value={selectedLead.current_bill || "Not provided"}
      />
      <DetailItem
        label="Lead Status"
        value={selectedLead.lead_status || "New Lead"}
      />
      <DetailItem
        label="Submitted At"
        value={new Date(selectedLead.created_at).toLocaleString()}
      />
    </div>

    <div className="mt-6">
      <h3 className="font-bold mb-2">Pain Points</h3>
      {selectedLead.pain_points && selectedLead.pain_points.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {selectedLead.pain_points.map((pain) => (
            <span
              key={pain}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {pain}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No pain points provided.</p>
      )}
    </div>
  </div>
)}
      </div>
    </main>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-xl">
      <p className="text-sm text-slate-500 font-medium">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border rounded-2xl p-4">
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}