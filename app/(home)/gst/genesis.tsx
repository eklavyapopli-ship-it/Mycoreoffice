// components/genesis.tsx
"use client";

import { Rocket, Target, Users, Building } from "lucide-react";
import Image from "next/image";
export default function Genesis() {
  return (
    <section className=" ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image height={80} width={80}
                src="/gst.webp"
                alt="GST Services"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-md shadow-2xl "
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
              
            
            </div>
          </div>
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-6">
          
              
              <h2 className="text-4xl  font-bold text-gray-900">
                <span className="text-sky-900">Top GST Registration Consultant</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed text-justify">
              <p>
               With the pace of the new world business age, GST compliance is no longer optional it's obligatory. For Noida-based businesses, whether startups, SMEs, or large business houses, professional advice is the order of the day to sail through the complexities of GST compliance. That's where a GST Registration Consultant in Noida enters the picture with simple solutions for GST registration, audit, and return filing. MyCoreOffice is providing corporate GST Registration & GST Audit Consultant services for companies across India. Right from GST registration compliance to filing returns within time and compliance with audit, our professional consultants provide you with a hassle-free experience.
              </p>
     
            </div>

         
          </div>

          {/* Right side image */}
        
        </div>
      </div>
    </section>
  );
}
 