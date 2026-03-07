"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat } from "@/lib/fontS";
export default function AboutPage() {
  return (
    <main className={`${montserrat.className} mt-10 text-black " id="about`}>
      {/* ABOUT SECTION */}
      
      <section className="max-w-7xl mx-auto px-6 pb-10  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
                 className="grid grid-cols-2 gap-4">
<div className="relative h-60 col-span-2 rounded-lg overflow-hidden shadow-lg">
            <Image
            priority
              src="/office1.jpg"
              alt="img1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
            priority
              src="/office2.jpg"
              alt="img2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
            priority
              src="/office3.jpg"
              alt="img3"
              fill
              className="object-cover"
            />
          </div>

          
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
         className="text-justify">
          <h2 className="text-3xl md:text-4xl text-red-800  mb-4 text-start">
           About Us
          </h2>

          <h3 className="text-xl text-red-800  mb-4 text-start">
            MyCoreOffice
          </h3>

          <p className=" leading-relaxed mb-4 text-black">
    We are committed to making professional office solutions accessible to businesses of every size. From virtual offices for GST and company registration to fully equipped coworking spaces, we help entrepreneurs, startups, and growing companies establish a credible presence without unnecessary complexity or cost. Our offerings are designed to support compliance, flexibility, and scalability so you can focus on building your business while we take care of the workspace.
          </p>

          <p className="leading-relaxed mb-4">
       With a strong network of prime locations across India, we deliver reliable, law compliant office solutions backed by transparent pricing and efficient documentation. Our team works closely with clients to understand their needs and provide tailored support at every step. Whether you need a registered address, a collaborative workspace, or a professional setup for expansion, we strive to be a dependable partner in your business journey.
          </p>

        
        </motion.div>

        {/* RIGHT IMAGE COLLAGE */}
        

      </section>

      {/* STATS SECTION */}
    
      
    </main>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <h3 className="md:text-3xl text-lg font-bold mb-2">{number}</h3>
      <p className="text-gray-600 text-medium font-medium">{label}</p>
    </div>
  );
}
