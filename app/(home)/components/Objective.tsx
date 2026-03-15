"use client"
import { useState } from "react";
 
import Image from "next/image";
import * as motion from "framer-motion"

const Objective = () => {
  const [visible, setvisible] = useState("hidden");
   function settingVisible() {
    if(visible=="hidden"){
      setvisible("block")
    }else{
      setvisible("hidden")
    }
  }
  const toggleText = visible=="hidden"?"Read More +":"Read Less -"
  return (
    <section className={`  w-full bg-white py-16`} id="objective">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
        
     
        <motion.motion.div
            initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false}}
        className="md:w-1/2 text-black">
          <h1 className="text-3xl mb-6">
            MyCoreOffice: Business Objective
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-justify">
Businesses today require flexible workspace solutions, and MyCoreOffice provides professionally managed meeting rooms and virtual offices across India. Our meeting rooms are located in prime business hubs, offering the perfect environment for client presentations, interviews, training sessions, and team meetings. Whether you are looking for a meeting room in Mumbai’s Bandra Kurla Complex or a professional meeting space in Bangalore’s Whitefield, MyCoreOffice offers modern facilities designed for productivity and convenience.

Our virtual office services also help businesses establish a credible presence without the need for a physical office. With a prestigious business address, mail handling, and professional support services, companies can operate remotely while maintaining a strong local identity. A virtual office is an ideal solution for startups, remote teams, and businesses expanding into new markets.

MyCoreOffice is dedicated to providing flexible and comfortable workspaces that support business growth. With an extensive network across major cities and business districts in India, we make it easy to find the right workspace solution for your needs. Explore our wide range of services, including office space for rent, serviced offices, coworking spaces, meeting rooms, and virtual offices. Partner with MyCoreOffice to create a professional, productive, and scalable work environment for your business.
          </p>
          <p className={`text-sm md:text-base mt-5 leading-relaxed text-justify ${visible}`}>
MyCoreOffice offers serviced offices and coworking spaces designed to enhance productivity and collaboration. In Hyderabad, HITEC City and Gachibowli are prime locations for businesses in the IT sector. Our serviced offices in these areas provide a professional environment with all the amenities you need to succeed. For those looking for coworking spaces, Bangalore's vibrant districts of Whitefield and Electronic City are perfect for networking and innovation. These spaces are equipped with high-speed internet, meeting rooms, and communal areas to foster collaboration. Monthly networking events offer opportunities to connect with local business communities and explore new opportunities
          </p>
          <div onClick={()=>{settingVisible()}} className="mt-5 p-3 rounded-sm cursor-pointer border w-fit">{toggleText}</div>
        </motion.motion.div>


        <motion.motion.div 
            initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: false}}
        className="md:w-1/2 w-full relative h-72 md:h-[580px]  rounded-md overflow-hidden shadow-lg">
          <Image
            src="/office2.webp" 
            alt="Business Objective"
            fill
            className="object-cover"
            fetchPriority="high"
            loading="lazy"
          />
        </motion.motion.div>
      </div>
    </section>
  );
};

export default Objective;