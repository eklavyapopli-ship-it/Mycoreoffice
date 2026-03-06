"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a virtual office?",
    answer:
      "A virtual office is a service that allows you to use a professional business address without physically operating from that location. It enables businesses to register for services such as Company Registration and GST Registration using the virtual office address. This helps business owners save significantly on costs while maintaining a credible professional presence.",
  },
  {
    question: "What are the benefits of using a virtual office?",
    answer:
      "A virtual office provides your business with a prime location address at a cost-effective price. It eliminates expenses related to office rent, security deposits, maintenance, and utilities that are typically associated with a traditional office setup.",
  },
  {
    question: "Can I take GST Registration on a virtual office address?",
    answer:
      "Yes, GST registration can be obtained using a virtual office address. Many businesses that operate across multiple states use virtual office addresses to obtain GST registrations in different states across India.",
  },
  {
    question: "What documents will be provided for GST Registration?",
    answer:
      "All necessary documents required for GST registration are provided, including a No Objection Certificate (NOC) from the landlord, a valid rent agreement, and the latest electricity or utility bill of the premises.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center text-red-900 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-black/10 rounded-xl overflow-hidden w-full bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-red-900">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="w-5 h-5 text-red-900" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-black/80 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
