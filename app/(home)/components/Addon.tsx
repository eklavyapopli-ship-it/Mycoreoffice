"use client"

export default function AddOnServices() {
  const services = [
    {
      id: 1,
      title: "Permanent Sticker Signage",
      desc: "Improve your business presence with a permanent sticker signage displayed within the premises, helping visitors easily recognize your brand.",
      note: "Basic Plan",
      price: "Free",
    },
    {
      id: 2,
      title: "Business Application Support",
      desc: "Get professional assistance for GST consultation or simplify your company registration process with support from experienced CA partners.",
      price: "Rs. 4000 + GST (Per Year)",
      note: "Recommended Option"
    },
    {
      id: 3,
      title: "Premium Framed Signage",
      desc: "Highlight your brand with an elegant framed signage displayed prominently at your virtual office or coworking location.",
      price: "Rs. 6000 (Per Year)",
      note: "Premium Plan"
    },
  ]

  return (
    <section className="bg-linear-to-r m-2 mb-0 from-cyan-100 via-blue-300 to-blue-300 py-16 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          
          <div>
            <p className="text-blue-700 font-medium mb-2">
              Additional Business Solutions
            </p>

            <h2 className="text-3xl font-semibold text-gray-900">
              Business Add-On Services
            </h2>

            <div className="w-48 h-1 bg-black mt-4"></div>
          </div>

          <div className="border-l-2  border-blue-700 pl-6 text-gray-900 leading-relaxed">
            Our team understands that every company operates differently.
            For this reason we offer several optional services that can help
            support your operations and make managing your business easier.
          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 ">

          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-xl   p-6 shadow-lg"
            >
              
              {/* Number Circle */}
              <div className="absolute -top-6 right-6 bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold shadow-md">
                {service.id}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-justify mb-4">
                {service.desc}
              </p>

              {service.note && (
                <p className="text-red-500 text-sm mb-4">
                  ({service.note})
                </p>
              )}

              <p className="text-gray-500 text-sm">Starts from</p>

              <p className="text-blue-600 font-semibold">
                {service.price}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}