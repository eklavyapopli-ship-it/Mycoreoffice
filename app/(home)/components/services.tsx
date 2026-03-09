"use client";


import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
  ShieldCheck,
  FileClock,
  BadgeIndianRupee,
  MapPin,
  Wifi,
  Coffee,MessageCircle
} from "lucide-react";
import { useState } from "react";

type EnquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ServicesSection() {
  const router = useRouter()
      const [loading, setLoading] = useState(false);
  const submitEnquiry = async () => {
  if (!data.name || !data.phone) {
    toast.error("Name and phone are required");
    return;
  }

  try {
    setLoading(true);
    const res = await fetch("/api/form", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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

    toast.success("Enquiry sent successfully");
    setOpen(false);
    setLoading(false)
    setData({
      name: "",
      email: "",
      phone: "",
      message: "I am interested in your office space services.",
    });
    
  } catch (err) {
    toast.error("Something went wrong. Try again.");
  }
};

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    message: "I am interested in your office space services.",
  });

  const openEnquiry = (preset: string) => {
    setData((prev) => ({
      ...prev,
      message: preset,
    }));
    setOpen(true);
  };

  const sendWhatsapp = () => {
    const text = `Hey I am ${data.name}, I want to enquire abt office space.`;
    window.open(
      `https://wa.me/+918920743180?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className=" py-10">
      <Toaster position="top-right" />

      {/* PRODUCT 1 */}
     <div className="grid grid-cols-1 mx-35 md:grid-cols-4 gap-8">
  <ProductBlock
    title="Virtual Offices"
    link="#virtual-office"
  image="/desk-address.avif"
    per = "Per Month"
    description="We provide professional office spaces for GST registration at prime location across pan India."
    question="Do you need office space for GST registration?"
    icons={[
      { icon: FileClock, text: "Fast Documentation" },
      { icon: BadgeIndianRupee, text: "Lowest Price" },
      { icon: ShieldCheck, text: "100% Compliant" },
      { icon: MapPin, text: "Professional Address" },
    ]}
    onEnquiry={() =>
      openEnquiry("I want to enquire about Office for GST Registration.")
    }
  />

  <ProductBlock
    title="Prime Office Locations"
    link="#product"
    image="/mailing-address.avif"
    per = "Per Month"
    description="Professional office spaces for Company registration across India."
    question="Office space for Company registration?"
    icons={[
      { icon: FileClock, text: "Fast Documentation" },
      { icon: BadgeIndianRupee, text: "Lowest Price" },
      { icon: ShieldCheck, text: "100% Compliant" },
      { icon: MapPin, text: "Professional Address" },
    ]}
    onEnquiry={() =>
      openEnquiry("I want to enquire about Office for Company Registration.")
    }
  />

  <ProductBlock
    title="Meeting Rooms"
    link="#coworking"
    image="/professional-handshakes.avif"
    per = "Per Month"
    description="Modern Office Address and Mailing at prime locations pan India."
    question="Co-working space for your business?"
    icons={[
      { icon: Wifi, text: "High Speed Internet" },
      { icon: BadgeIndianRupee, text: "Affordable Pricing" },
      { icon: Coffee, text: "Tea/Coffee" },
      { icon: MapPin, text: "Prime Locations" },
    ]}
    onEnquiry={() =>
      openEnquiry("I want to enquire about Office Address and Mailing.")
    }
  />
  <ProductBlock
    title="GST and Company Registration"
    link="#coworking"
    image="/tax-preparation.avif"
    per = "Per Month"
    description="Modern Office Address and Mailing at prime locations pan India."
    question="Co-working space for your business?"
    icons={[
      { icon: Wifi, text: "High Speed Internet" },
      { icon: BadgeIndianRupee, text: "Affordable Pricing" },
      { icon: Coffee, text: "Tea/Coffee" },
      { icon: MapPin, text: "Prime Locations" },
    ]}
    onEnquiry={() =>
      openEnquiry("I want to enquire about Office Address and Mailing.")
    }
  />


</div>
  


      {/* ENQUIRY TOAST */}

        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">Send Enquiry</h3>

              <div className="space-y-3 text-black">
                <input
                  placeholder="Name"
                  className="w-full border px-4 py-2 rounded-md"
                   value={data.name}
  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full border px-4 py-2 rounded-md"
                   value={data.email}
  onChange={(e) => setData({ ...data, email: e.target.value })}
                  
                />
                <input
                  placeholder="Phone" minLength={10}
                  className="w-full border px-4 py-2 rounded-md"
                 value={data.phone}
  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
                <textarea maxLength={50} minLength={5}
                  className="w-full border px-4 py-2 rounded-md"
                  rows={3}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 cursor-pointer bg-black text-white py-2 flex gap-2 place-content-center place-items-center rounded-md text-sm"
                 onClick={submitEnquiry}

                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}   Send Enquiry
                </button>

                <button
                  className="flex-1 flex gap-2 place-items-center place-content-center bg-green-500 text-white md:font-bold hover:bg-green-700 cursor-pointer py-2  rounded-md text-sm"
                  onClick={sendWhatsapp}
                >
                 WhatsApp  <MessageCircle className="h-4 w-5"/>
                </button>

               
              </div>
               <button
                  className="flex-1 w-full mt-2 border py-2 rounded-md border-black text-black"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
            </motion.div>
          </motion.div>
        )}

      
    </section>
  );
}

/* PRODUCT BLOCK */
function ProductBlock({
  title,
 image,
  per,
  description,
  question,
  link,
  icons,
  onEnquiry,
}: any) {
  const router = useRouter();

  return (
    <div className="bg-white  rounded-md p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col min-h-[560px]">
      
      {/* HEADER */}
      <div className="mb-4 ">
        <h2 className="text-xl font-semibold text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

  <img src={image} alt={title} />

      {/* VALUE PROPOSITION */}
      <div className="flex-1">
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

    
      </div>
 {/* EXTRA DETAILS */}
      <div className="border-t mt-6 pt-6 space-y-1 text-xs text-gray-600">
        <p>✔ Valid for GST, MCA & Banking</p>
        <p>✔ Instant documentation support</p>
        <p>✔ Pan-India address availability</p>
      </div>
      {/* CTA */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          onClick={onEnquiry}
          className="bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition"
        >
          Send Enquiry
        </button>

        <button
          onClick={() => router.push(`/${link}`)}
          className="border border-gray-300 text-gray-900 py-2.5 rounded-lg text-sm font-medium hover:border-black transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
