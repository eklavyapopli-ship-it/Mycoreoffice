import Image from "next/image";
import { montserrat } from "@/lib/fontS";

const documents = [
  { name: "PAN Card of Directors", img: "/documents/PANCARD.svg" },
  { name: "Passport Size Photograph", img: "/documents/CAMERA.svg" },
  { name: "Identity Proof", img: "/documents/IDCARD.svg" },
  { name: "Director's Address Proof", img: "/documents/dir-add.svg" },
  { name: "Business Address Proof", img: "/documents/map.svg" },
  { name: "Digital Signature Certificate", img: "/documents/notes.svg" },
];

export function DocumentsRequired() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">

        {/* Heading */}
        <h2
          className={`text-2xl md:text-4xl  text-center mb-12 ${montserrat.className}`}
        >
          Documents Required for <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400 text-transparent bg-clip-text">Registration</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white  rounded-md p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className=" w-20 h-full flex flex-col justify-end relative mb-4">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="object-contain"
                />
              </div>
<div className="h-full flex flex-col justify-end">
              <h1 className="text-sm md:text-base font-semibold text-black">
                {doc.name}
              </h1>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}