
const features = [
  {
    title: "Virtual Offices",
    desc: "Premium Virtual Offices in Delhi, Noida and Gurugram",
    price:899
  },
  {
    title: "Registered Addresses",
    desc: "Registered Addresses in Delhi, Noida and Gurugram",
    price:900
  },
  {
    title: "Virtual Offices in Mumbai",
    desc: "Premium Virtual Offices in Mumbai and many other areas",
    price:999
  },
  {
    title: "Virtual Offices in Banglore",
    desc: "Premium Virtual Offices in Mumbai and many other areas",
    price:999
  },
]

const Features = () => {
  return (
    <section className={`relative pb-40 md:pb-20  `}>
      
      
      <div className="bg-linear-to-r from-cyan-100 via-blue-300 to-blue-400 text-black flex items-center justify-center px-6 py-20 ">
        <h1 className="max-w-7xl md:text-3xl text-xl text-justify">
          All Office locations come with great and facilities and first class
          support teams, ensuring happiness and productivity every day.
        </h1>
      </div>

    
      <div className="bg-white h-32 md:mt-6 "></div>

 
      <div className="md:absolute md:left-1/2 md:top-[80%] lg:top-[60%] md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-7xl mx-auto px-6 md:px-0 -mt-16 md:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-md p-6 text-center hover:shadow-2xl transition"
            >
           
              <h1 className="text-lg text-justify font-semibold text-gray-900 mb-3">
                {item.title}
              </h1>
              <p className="text-sm text-justify text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-sm text-justify text-gray-800 leading-relaxed">
                Starting From
              </p>
              <p className="text-2xl text-justify text-black font-bold leading-relaxed">₹ {item.price}<span className="text-sm text-justify text-gray-800 leading-relaxed font-light">/ month</span></p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Features