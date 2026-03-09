"use client"
import { useState } from "react";
 
import Image from "next/image";


const GetStarted = () => {

 

  return (
    <section className={`  w-full bg-white py-25`} id="objective">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
        
     
        <div
        className="md:w-1/2 text-black">
          <h1 className="text-3xl mb-6">
            Everything You Need To Get Started
          </h1>
      <div className="text-justify">
        <h1 className="font-bold">Everything is ready to use, adjustable, and taken care of for you, so you can focus on growing your business.</h1> <br />
  <p>
    Everything is prepared and ready for you to start right away. Our services are designed to simplify your operations so you can dedicate your time and energy to expanding your business. Along with a professional address, our experienced team manages your mail and welcomes visitors at the front desk. You can also easily reserve a desk or meeting space through our website whenever required.
  </p><br />

<ul className="space-y-3 mt-4">
  {[
    "Instant professional business address",
    "Networking opportunities and community events",
    "Special discounts on services from global partners",
    "Meeting and conference rooms available for bookings",
    "Professional receptionist to welcome visitors",
    "Round the clock customer support",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      
      {/* Blue Tick */}
      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span>{item}</span>
    </li>
  ))}
</ul>
</div>
      
        </div>


        <div 
        className="md:w-1/2 w-full relative h-72 md:h-[520px]  rounded-md overflow-hidden shadow-lg">
          <Image
            src="/s5.jpg" 
            alt="Business Objective"
            fill
            className="object-cover"
            fetchPriority="high"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;