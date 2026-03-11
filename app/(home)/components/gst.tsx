"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  Loader2,
  Zap,
  Rocket,
  Building2,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  { name: "GSTIN on the Same Day, Not Weeks", img: Zap,description:"Simplified GST registration on the same day. No inspector visits. No waiting."},
  { name: "Built for Small, Serious Businesses", img: Rocket ,description:"Specially for proprietors, freelancers, MSMEs, and startups with modest tax liability, simple structure, single registration." },
  { name: "Virtual Office Makes It Smoother", img: Building2,description:"Instaspaces provides trusted GST ready documentation supporting fast registrations consistently over the years." },
  { name: "Faster Onboarding, Quicker Revenue", img: Handshake,description:"With a virtual office, registration and supplier onboarding move faster." },
];

export function GST() {
    const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

         if (!res.ok) {

        let msg = "Failed";
        try {
          const data = await res.json();
          msg = data?.error || data?.message || msg;
           toast.error(msg);
        } catch {}
        throw new Error(msg);
      }

      const data = await res.json();

     setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Enquiry sent successfully");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
      setOpenForm(false);
    }
  };
  return (
    <section className="w-full pt-10 pb-20">
       <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 ">


        <h1 className="text-sm text-center mb-2"><span className="py-1 px-2 rounded-full  bg-linear-to-r from-cyan-100 via-blue-300 to-blue-300   ">GST Registration</span></h1>
        <h1
          className={`text-2xl md:text-5xl mb-3 text-center `}
        >
          From Weeks <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text ">to Days</span>
        </h1>
        <p className="mb-10 text-center">Faster approvals. Cleaner onboarding. Built for serious businesses.</p>
<div className="flex flex-col gap-10">

       

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-6 flex flex-col  shadow-sm hover:shadow-md transition"
            >
              <item.img className="w-8 h-8 p-2 bg-slate-900 text-white rounded-md text-center text-2xl relative mb-4"/>
              
              

              <h1 className="text-sm md:text-base font-semibold  text-black">
                {item.name}
              </h1>
              <p className="text-justify">{item.description}</p>
            </div>
          ))}

        </div>
            <div className="items-center text-white flex flex-col p-10 rounded-md justify-center bg-slate-900">
            <div className="w-sm text-center flex flex-col gap-3">
            <h1 className=" text-center md:text-2xl text-xl font-bold">Ready on the Same Day</h1>
            <p className="text-xs md:p-0 p-5">Get Your GST Registration  approved from GST Department on the same day.</p>
            <button  aria-label="registration"  onClick={() => setOpenForm(true)} className="bg-white mt-5 text-black md:px-5 mx-15 md:mx-0 py-3 rounded-md">Start Registration</button>
            <p className="text-sm">Secure • Verified • Trusted by Businesses</p>
            </div>


      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-sm shadow-xl p-8 w-full max-w-md">

            <h1 className="text-xl font-semibold text-gray-900">
              Request a Callback
            </h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-black">

              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 px-4 py-2 rounded-md"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-gray-200 border px-4 py-2 rounded-md"
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                maxLength={10}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border-gray-200 border px-4 py-2 rounded-md"
                required
              />

              <textarea
                rows={2}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-gray-200 border px-4 py-2 rounded-md resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-md flex justify-center items-center gap-2"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Sending..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="w-full mt-2 text-sm text-gray-500"
              >
                Cancel
              </button>

            </form>
          </div>

        </div>
      )}</div>
        </div>
      </div>
    </section>
  );
}