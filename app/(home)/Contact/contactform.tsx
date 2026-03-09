// components/EnquiryForm.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("Submitting...");

  try {
    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    setStatus("Submitted successfully!");
    setFormData({ name: "", email: "", phone: "", queryType: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus("Submission failed. Try again.");
  }
};


  return (
    <div
      className="max-w-7xl mx-auto px-6 py-16 text-black flex flex-col md:flex-row items-center gap-10" id="applynow"
    >
      {/* Left: Image */}
    

      {/* Right: Form */}
      <div
        className="flex-1 bg-white w-full "
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Enquiry</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full ">
            <div className="flex gap-2 md:flex-row flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border w-full border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <label className="text-sm flex flex-col">
            <h1 className="px-1 text-gray-700">Select Query Type</h1>
          <select
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="General">General</option>
            <option value="Support">Support</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Others">Others</option>
          </select>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Comment or Message"
            required
            rows={2}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="text-black hover:bg-blue-900 hover:text-white  px-6 py-3 rounded-md shadow-sm border transition transform hover:shadow-2xl"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </div>
        <div
        className="flex-1 "
      >
        <div>
       <Image height={1094} width={730} fetchPriority="high" loading="lazy" src="/hero_bg.jpg" className="rounded-md" alt="" />
         </div>
      </div>
    </div>
  );
}
