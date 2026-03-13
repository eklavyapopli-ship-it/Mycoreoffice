import Image from "next/image";
import { montserrat } from "@/lib/fontS";

const benefits = [
  { name: "End to End Online User Friendly Process for Agreement", img: "/userfriendly.svg"},
  { name: "Lowest Prices Guaranteed. No Hidden Charges Ever", img: "/lowprices.svg" },
  { name: "Duly Vetted Documents For Successful Registrations At The Address", img: "/documents.svg" },
  { name: "Quickest Virtual-Office Address", img: "/approval.svg" },
  { name: "GST Registration on Same Day", img: "/gst.svg" },
  { name: "Best After Sales Service", img: "/service.svg"  },
  { name: "Premium Meeting Rooms", img: "/meeting.svg"  },
  { name: "Professional Addresses", img: "/professional.svg"  },
];

export function OurBenefits() {
  return (
    <section className="w-full  py-16">
      <div className="max-w-8xl mx-auto px-4 md:px-30">

        {/* Heading */}
        <h2
          className={`text-4xl text-center mb-12 ${montserrat.className}`}
        >
          Why <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text">Choose Us?</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 lg:gap-3">

          {benefits.map((item, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-md transition"
            >
              <div className="w-30 h-30 relative mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm md:text-base text-black">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}