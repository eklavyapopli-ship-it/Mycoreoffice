"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      <h1 className="text-3xl font-semibold text-center text-sky-900 mb-12">
        Frequently Asked Questions
      </h1>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-black/10 rounded-xl overflow-hidden w-full bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-sky-900">
                  {faq.question}
                </span>

                <span
                >
                  {openIndex!=null? <ChevronUp className="w-5 h-5 text-sky-900" />:<ChevronDown className="w-5 h-5 text-sky-900" />}
                </span>
              </button>


                {isOpen && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-black/80 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
       
            </div>
          );
        })}
      </div>
    </section>
  );
}
