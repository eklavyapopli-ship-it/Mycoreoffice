"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
export default function Hero() {

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
    <main className="relative w-full  h-[60vh] pt-5 flex items-center justify-center">
      <Toaster position="top-right" />

      <Image
        src="/tax.jpg"
        alt="Office Space"
        fill
        fetchPriority="high"
            loading="eager"
        sizes="100vw"
        className="object-cover"
      />

  
      <div className="absolute inset-0 bg-black/55" />

     
      <div

      className="relative z-10 text-white text-center px-6 max-w-3xl">

        <h1 className="text-4xl  font-semibold leading-tight">
          Company Registration Services
        </h1>

        <p className="mt-6 text-white text-justify md:text-center">
MyCoreOffice provides reliable and affordable Company Registration Services to help businesses establish a professional presence and get GST registration at prime location at best prices.


        </p>


        <div className="mt-8 md:flex-row flex flex-col  justify-center gap-4">
          <button
            onClick={() => setOpenForm(true)}
            className="bg-white  text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Send Enquiry
          </button>

          <Link href="#virtual-office"
            className="border  px-6 py-3 rounded-md font-medium  cursor-pointer "
          >
            Explore
          </Link>
        </div>
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
      )}
    </main>
  );
}