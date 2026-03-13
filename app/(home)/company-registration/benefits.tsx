import Image from "next/image";
import { montserrat } from "@/lib/fontS";

const benefits = [
  { name: "Limited Liability Protection", img: "/documents/PANCARD.svg"},
  { name: "Separate Legal Identity", img: "/documents/CAMERA.svg" },
  { name: "Easy Fund Raising", img: "/documents/IDCARD.svg" },
  { name: "Higher Credibility", img: "/documents/dir-add.svg" },
  { name: "Perpetual Succession", img: "/documents/map.svg" },
  { name: "Better Business Opportunities", img: "/documents/notes.svg"  },
];

export function PvtCompanyBenefits() {
  return (
    <section className="w-full  py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">

        {/* Heading */}
        <h2
          className={`text-2xl md:text-4xl text-center mb-12 ${montserrat.className}`}
        >
          Benefits of Registering <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text">Pvt Company</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-25 h-30 relative mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-black">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}