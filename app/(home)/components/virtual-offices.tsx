"use client";

import { useState } from "react";
 
import { toast, Toaster } from "react-hot-toast";
import * as motion from "framer-motion"
type Product = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const Products: Product[] = [
  { id: 1, name: "Delhi", image: "/locations/delhi.jpg", link: "delhi" },
  { id: 2, name: "Noida", image: "/locations/noida.jpg", link: "noida" },
  { id: 3, name: "Mumbai", image: "/locations/mumbai.jpg", link: "mumbai" },
  { id: 4, name: "Gurugram", image: "/locations/gurugram.jpg", link: "gurugram" },
  { id: 5, name: "Tamil Nadu", image: "/locations/tamilnadu.jpg", link: "tamilnadu" },
  { id: 6, name: "Punjab", image: "/locations/punjab.jpg", link: "punjab" },
  { id: 8, name: "Gujarat", image: "/locations/gujarat.jpg", link: "gujarat" },
  { id: 9, name: "Kerala", image: "/locations/kerela.png", link: "kerela" },
  { id: 7, name: "Bangalore", image: "/locations/banglore.jpg", link: "banglore" },
  { id: 10, name: "Telangana", image: "/locations/Hyd.png", link: "telangana" },
];

export default function ProductsPage({ limit }: any) {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // lead form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const openEnquiry = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };


  const sendToWhatsApp = () => {
    const url = `https://wa.me/+918920743180?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  const sendToDatabase = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    if (!name || !email || !phone || !message) {
      setLoading(false);
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
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

  
        setSuccess("Enquiry sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success("Enquiry sent successfully");
setOpen(false);
        setSuccess("");
     
    } catch (err: any) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const limitedProducts = showAll ? Products : Products.slice(0, limit);
  const toggleText = showAll ? "See Less" : "See More Areas";

  return (
    <>
      <motion.motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className={`  h-fit pb-20 mt-2 max-w-7xl mx-auto p-4 md:py-10"`}  id="virtual-office">
              <Toaster position="top-right" />
        <h1 className="text-4xl mb-12 font-bold text-center bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text ">
          Virtual Office Across India
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {limitedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-md overflow-hidden flex flex-col shadow-md bg-white  hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-fit overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  fetchPriority="high"
            loading="lazy"
                  className="object-contain h-auto w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    
                <button
                  onClick={() =>
                    openEnquiry(`I want to enquire about Virtual Office in ${product.name}`)
                  }
                  className="hidden md:flex absolute bottom-4 rounded-full left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2.5   transition-opacity opacity-0 group-hover:opacity-100"
                >
                  Send Enquiry
                </button>
              </div>

        
              <div className="py-6 px-2 flex flex-col flex-1  justify-end">
                <h1 className="text-lg font-semibold mb-2 text-gray-900">
                  Virtual Office in {product.name}
                </h1>
                <p className="text-xs text-gray-500 mb-4">
                  Premium virtual office with excellent connectivity and modern amenities.
                </p>

              
                <button
                  onClick={() =>
                    openEnquiry(`I want to enquire about Virtual Office in ${product.name}`)
                  }
                  className="md:hidden w-full border   text-black py-2.5 rounded-sm transition"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-12">
          <div
            className="text-md p-3  rounded-md  text-black border cursor-pointer relative group"
            onClick={() => setShowAll(!showAll)}
          >
            {toggleText}
            
          </div>
        </div>
      </motion.motion.div>


      {open && (
        <div className="fixed inset-0 flex items-end md:items-center justify-center bg-black/40 z-50 px-4">
          <div className="bg-white text-black w-full md:w-[420px] p-5  rounded-md shadow-lg">
            <h1 className="text-lg font-semibold mb-3">Send Enquiry</h1>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mb-2"
            />
            <input
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mb-2"
            />
            <input
              maxLength={10}
              minLength={10}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mb-2"
            />
            <textarea
              maxLength={50}
              minLength={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className="w-full border border-gray-200 rounded-lg p-2 mb-3 resize-none"
            />

            {error && <p className="text-blue-600 text-sm mb-2">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

            <div className="flex gap-3">
              <button
                onClick={sendToDatabase}
                disabled={loading}
                className="w-full bg-black  text-white py-2 rounded-lg"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-500 hover:bg-green-700 text-white py-2 rounded-lg"
              >
                WhatsApp
              </button>
             
            </div>
             <button
                onClick={() => setOpen(false)}
                className="w-full border border-gray-200 mt-1 py-2 rounded-lg"
              >
                Close
              </button>
          </div>
        </div>
      )}
    </>
  );
}