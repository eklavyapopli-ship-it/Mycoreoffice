"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  text: string;
  name: string;
  designation: string;
};

export const reviews: Review[] = [
  {
    text: "The dashboard layout is incredibly clean and easy to navigate. Even team members who aren't tech-savvy were able to adapt quickly. It has significantly improved collaboration across our departments.",
    name: "Aditi Mehta",
    designation: "Product Manager",
  },
  {
    text: "What impressed me most is the reliability of the platform. It handles complex workflows effortlessly and keeps everything organized. Our daily processes are now much faster and more structured.",
    name: "Rahul Khanna",
    designation: "Technical Lead",
  },
  {
    text: "The integration capabilities are fantastic. We connected our existing tools in minutes and started seeing value almost immediately. It’s rare to find a solution that fits so seamlessly into our ecosystem.",
    name: "Neha Bansal",
    designation: "Business Analyst",
  },
  {
    text: "From performance tracking to automated insights, this platform covers everything we need. It helps us stay focused on key metrics and continuously improve our results.",
    name: "Arjun Malhotra",
    designation: "Growth Manager",
  },
  {
    text: "Our team communication and task management improved dramatically after adopting this system. Everything is centralized, transparent, and easy to track.",
    name: "Karan Patel",
    designation: "Team Lead",
  },
  {
    text: "The learning curve was minimal and the benefits were immediate. Within days we could see better organization, faster reporting, and improved team coordination.",
    name: "Ritika Desai",
    designation: "Operations Manager",
  },
];
export default function Reviews() {
  const [page, setPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 7000); // Slightly longer for better readability
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = page * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-900">
          Hear from Our Clients
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {currentReviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8  shadow-xl flex flex-col justify-between h-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {review.text.length > 200 ? review.text.slice(0, 200) + "..." : review.text}
                </p>
                <div>
                  <p className="font-bold text-black">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.designation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => setPage(idx)}
              className={`w-3 h-3 rounded-full ${
                page === idx ? "bg-black" : "bg-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
