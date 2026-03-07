// components/WhoAreWe.tsx
"use client";
import { montserrat } from "@/lib/fontS";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Eye, Target, Users, Award, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";
const images = [
    "/office1.jpg",
    "/office2.jpg",
    "/office3.jpg",
    "/HP_1.webp"
];

export default function WhoAreWe() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto change every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;
   setIndex((prev) => (prev + 1) % images.length);
   
  }, [isPlaying]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={`${montserrat.className} min-h-screen bg-gradient-to-br from-gray-50 to-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  items-end">
          {/* Left side animated slideshow */}
          <div className="order-2 lg:order-1 ">
            <div className="relative h-[400px]  md:h-[500px] lg:h-[600px] rounded-md overflow-hidden bg-gray-100 shadow-2xl border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image height={80} width={80}
                    src={images[index]}
                    alt={`MyCoreOffice Bootcamp ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevImage}
                      className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="flex gap-1">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="text-white/80 text-sm font-medium">
                    {index + 1} / {images.length}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
              {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60 blur-xl"></div> */}
            </div>
          </div>

          {/* Right side content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  text-gray-900 leading-tight">
                Who Are{" "}
                <span className="text-red-900">We?</span>
              </h1>
              
              
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed text-justify">
              <p>
                MyCoreOffice provide professional office spaces for Company registration at prime location across pan India at affordable prices. Whether you need a registered address, a collaborative workspace, or a professional setup for expansion, we strive to be a dependable partner in your business journey.
              </p>
              
              <p>
                
              </p>
              
              <p>
                We collectively provide aspiring innovators set up new ventures and create 
                sustainable businesses that generate revenues and drive social transformation.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-red-900 p-6 rounded-lg border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-gray-50 leading-relaxed">
                We aim to serve as a vibrant and sustainable resource catalyst to support 
                and nurture creativity, innovation and entrepreneurship among students. 
                Our goal is to become a center of excellence that fosters synergy between 
                academia and industry, providing one of the most enabling ecosystems in the country.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm border border-gray-100">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Expert Network</h4>
                  <p className="text-gray-600 text-xs">Industry domain experts nationwide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm border border-gray-100">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-red-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Comprehensive Support</h4>
                  <p className="text-gray-600 text-xs">From ideation to marketplace</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
