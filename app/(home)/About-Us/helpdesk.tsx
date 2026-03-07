"use client"
import { motion } from "framer-motion"
import { montserrat } from "@/lib/fontS"
import Link from "next/link"
export default function Helpdesk(){
         return (
   <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 max-w-7xl  mx-auto mb-10"
        >
          <div className=" rounded-xl p-8 lg:p-12 shadow-xl ">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${montserrat.className} text-black`}>
              Ready to Transform Your Idea?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-black">
              Join our incubation programs and leverage our comprehensive 
              support services to turn your innovative ideas into successful businesses.
            </p>
            <Link href="/Contact">
            <button className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button></Link>
          </div>
        </motion.div>
         )
}

