import { montserrat } from "@/lib/fontS"
import { HandHelping, Omega, User2, Earth } from "lucide-react"
const features = [
  {icon:HandHelping,
    title: "Support Team",
    desc: "Dedicated support staff to assist you and your guests, from reception services to back-office functions such as IT.",
  },
  {icon:Omega,
    title: "Carbon Neutral Offices",
    desc: "Our offices are designed with sustainability in mind and are carbon neutral, maintaining high environmental standards.",
  },
  {icon:User2,
    title: "Join Our Community",
    desc: "By joining MyCoreOffice, you gain access to a vibrant business community including networking opportunities.",
  },
  {icon:Earth,
    title: "World Class Facility",
    desc: "Premium workspace infrastructure designed to provide comfort, productivity, and a professional environment.",
  },
]

const Features = () => {
  return (
    <section className={`relative pb-40 md:pb-20 ${montserrat.className}`}>
      
      {/* Top Section */}
      <div className="bg-red-950 text-white flex items-center justify-center px-6 py-20 ">
        <h1 className="max-w-7xl md:text-3xl text-xl text-justify">
          All Office locations come with great and facilities and first class
          support teams, ensuring happiness and productivity every day.
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="bg-white h-32 md:mt-6 "></div>

      {/* Cards */}
      <div className="md:absolute md:left-1/2 md:top-[80%] lg:top-[60%] md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-7xl mx-auto px-6 md:px-0 -mt-16 md:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-md p-6 text-center hover:shadow-2xl transition"
            >
              <h1><item.icon className="h-10 w-10 bg-gray-100 p-2 rounded-tl-lg rounded-br-lg text-black"/></h1>
              <h1 className="text-lg text-justify font-semibold text-gray-900 mb-3">
                {item.title}
              </h1>
              <p className="text-sm text-justify text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Features