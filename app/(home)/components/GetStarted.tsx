"use client"
import { useState } from "react";
 
import Image from "next/image";


const GetStarted = () => {

 

  return (
    <section className={`  w-full bg-white py-20`} id="objective">
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

  <ul className="list-disc">
    <li>Instant professional business address</li>
    <li>Networking opportunities and community events</li>
    <li>Special discounts on services from global partners</li>
    <li>Meeting and conference rooms available for bookings</li>
    <li>Professional receptionist to welcome visitors</li>
    <li>Round the clock customer support</li>
  </ul>
</div>
      
        </div>


        <div 
        className="md:w-1/2 w-full relative h-72 md:h-[450px]  rounded-md overflow-hidden shadow-lg">
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