"use client"
import { useState } from "react";
import { montserrat } from "@/lib/fontS";
import Image from "next/image";

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
    <section className={`${montserrat.className} w-full bg-red-950 py-16`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
        
        {/* Left Side - Heading & Content */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl mb-6">
            MyCoreOffice: Business Objective
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-justify">
            For businesses requiring flexibility, <strong>MyCoreOffice</strong> offers
            meeting rooms and virtual offices across India. Our meeting rooms are
            available in strategic locations, providing professional settings for
            presentations, interviews, and team meetings. Whether you need a
            meeting room in Mumbai's Bandra-Kurla Complex or Bangalore's Whitefield,
            <strong> MyCoreOffice</strong> ensures that you have access to top-notch
            facilities. Additionally, our virtual offices provide a prestigious
            business address and mail handling services, allowing you to establish
            a local presence without the need for physical office space. This
            solution is ideal for businesses looking to expand into new markets or
            maintain remote operations. <strong>MyCoreOffice</strong> is committed
            to providing accessible and comfortable workspaces that support your
            business growth. With our extensive network across India's key cities
            and districts, you can find the perfect solution tailored to your needs.
            Connect with us to explore our office space for rent, serviced offices,
            coworking spaces, meeting rooms, and virtual offices. Let
            <strong> MyCoreOffice</strong> be your partner in creating a healthier,
            happier, and more productive work environment.
          </p>
          <p className={`text-sm md:text-base mt-5 leading-relaxed text-justify ${visible}`}>
MyCoreOffice offers serviced offices and coworking spaces designed to enhance productivity and collaboration. In Hyderabad, HITEC City and Gachibowli are prime locations for businesses in the IT sector. Our serviced offices in these areas provide a professional environment with all the amenities you need to succeed. For those looking for coworking spaces, Bangalore's vibrant districts of Whitefield and Electronic City are perfect for networking and innovation. These spaces are equipped with high-speed internet, meeting rooms, and communal areas to foster collaboration. Monthly networking events offer opportunities to connect with local business communities and explore new opportunities
          </p>
          <div onClick={()=>{settingVisible()}} className="mt-5 p-3 rounded-sm hover:bg-white hover:text-black cursor-pointer border w-fit">{toggleText}</div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full relative h-72 md:h-[520px]  rounded-md overflow-hidden shadow-lg">
          <Image
            src="/office1.jpg" // replace with your image path
            alt="Business Objective"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Objective;