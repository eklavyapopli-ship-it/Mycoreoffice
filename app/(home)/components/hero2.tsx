"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function Hero2() {
 
    const [loading, setLoading] = useState(false);
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
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // try to read error message if your API returns JSON errors
        let msg = "Failed";
        try {
          const data = await res.json();
          msg = data?.error || data?.message || msg;
        } catch {}
        throw new Error(msg);
      }
      const data = await res.json();

    setForm({ name: "", email: "", phone: "", message: "" });
 

    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative z-999 w-full h-full text-black md:h-[70vh] pt-5">
      {/* Background Image */} 
      <Image
        src="/office1.jpg"
        alt="Office Space"
        fill
        fetchPriority="high"
        loading="lazy"
        className="object-cover"
      />


      /* <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl  md:text-5xl font-semibold text-center md:text-start leading-tight">
              Know More About Virtual Offices in India
            </h1>

            <p className="mt-6 lg:text-lg text-center md:text-start text-sm  leading-relaxed">
              Virtual Offices For GST & Company Registration,
              <br />
              Coworking Spaces, Pan India Availability
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md mb-2 ml-auto">
            <h2 className="text-2xl font-semibold text-gray-900">
              Request a callback
            </h2>

           <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-black">

              <div>
                <label className="block text-sm font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email ID
                </label>
                <input
                  type="email"
                  value={form.email}
  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel" maxLength={10} min={10}
                   value={form.phone}
  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91  "
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message (optional)
                </label>
                <textarea maxLength={50} minLength={5}
                  rows={3}
                  value={form.message}
  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us your requirement"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
<button
  type="submit"
  disabled={loading}
  className="w-full mt-4 bg-white text-black py-3 rounded-md text-sm font-medium 
             hover:bg-red-950 hover:text-white border transition flex items-center justify-center gap-2
             disabled:opacity-70 disabled:cursor-not-allowed"
>
  {loading && <Loader2 className="h-4 w-4 animate-spin text-white " />}
  {loading ? "Sending..." : "Request Callback"}
</button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
