


const benefits = [
  { name: "GSTIN on the Same Day, Not Weeks", img: "⚡️",description:"Rule 14A simplifies registration in just 3 working days. No inspector visits. No waiting."},
  { name: "Built for Small, Serious Businesses", img: "🚀",description:"Designed for proprietors, freelancers, MSMEs, and startups with modest tax liability simple structure, single registration." },
  { name: "Virtual Office Makes It Smoother", img: "🏢",description:"Instaspaces provides trusted GST ready documentation supporting fast registrations consistently over the years." },
  { name: "Faster Onboarding, Quicker Revenue", img: "🤝",description:"With a virtual office, registration and supplier onboarding move faster." },
];

export function GST() {
  return (
    <section className="w-full pt-10 pb-26">
      <div className="max-w-7xl mx-auto px-4 ">

        {/* Heading */}
        <h1 className="text-sm text-center mb-2"><span className="py-1 px-2 rounded-full  bg-linear-to-r from-cyan-100 via-blue-300 to-blue-300   ">GST Registration</span></h1>
        <h1
          className={`text-2xl md:text-5xl mb-3 text-center `}
        >
          From Weeks <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text ">to Days</span>
        </h1>
        <p className="mb-10 text-center">Faster approvals. Cleaner onboarding. Built for serious businesses.</p>
<div className="flex md:flex-row flex-col gap-10">
     <div className="items-center text-white flex flex-col p-5 rounded-md justify-center bg-slate-900">
            <div className="w-sm text-center flex flex-col gap-3">
            <h1 className=" text-center text-2xl font-bold">Ready on the Same Day</h1>
            <p className="text-xs">Get Your GST Registration  approved from GST Department on the same day.</p>
            <button className="bg-white mt-5 text-black px-5 py-3 rounded-md">Start Registration</button>
            <p className="text-sm">Secure • Verified • Trusted by Businesses</p>
            </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-6 flex flex-col  shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 p-1 bg-slate-900 rounded-md text-center text-2xl relative mb-4">
               {item.img}
              </div>

              <h1 className="text-sm md:text-base font-semibold  text-black">
                {item.name}
              </h1>
              <p className="text-justify">{item.description}</p>
            </div>
          ))}

        </div>
       
        </div>
      </div>
    </section>
  );
}