

import Link from "next/link"
export default function Helpdesk() {
  return (
    <div
      className="text-center bg-linear-to-r from-cyan-100 via-blue-300 to-blue-400 rounded-xl mt-16 max-w-7xl  mx-auto mb-10"
    >
      <div className=" rounded-xl p-8 lg:p-12 shadow-xl ">
        <h1 className={`text-3xl lg:text-4xl font-bold mb-4   text-black`}>
          Ready to Transform Your Idea?
        </h1>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-black">
          Contact and leverage our comprehensive
          support services to turn your innovative ideas into successful businesses.
        </p>
        <Link href="/Contact">
          <button className="bg-white text-sky-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button></Link>
      </div>
    </div>
  )
}

