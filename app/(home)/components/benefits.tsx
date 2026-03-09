"use client"

import Image from "next/image"

export default function VirtualOfficeBenefits() {
  const benefits = [
    "You receive a premium business address that can be used for company or GST registration.",
    "All required documentation is provided for registrations including No Objection Certificate, electricity bill, rent agreement, and signage proof.",
    "A virtual office gives you a prestigious office address without paying large deposits, rent, or maintenance costs.",
    "Additional facilities such as meeting rooms, reception support, call answering, mail management, and workstations are available when needed."
  ]

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 my-10 items-center p-6">
      
      {/* Left Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/desk-address.avif"
          alt="Virtual Office"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl  mb-6">
       Benefits of Virtual Office 
        </h2>

        <ul className="space-y-4">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 leading-relaxed text-justify">
              
              {/* Tick Icon */}
              <span className="mt-1 flex p-0.5 items-center justify-center rounded-full bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}