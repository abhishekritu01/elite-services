'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { IoMdRibbon } from 'react-icons/io';
import { MdContactPhone } from "react-icons/md";
// import {
//   RiArrowDownSLine,
//   RiChatSmileLine,
//   RiHospitalLine,
//   RiMoneyDollarCircleLine,
//   RiQuestionLine,
//   RiShieldCheckLine
// } from 'react-icons/ri';

import {
  RiArrowDownSLine,
  RiFileList3Line,
 RiTimeLine ,
  RiDashboardLine,
  RiBarChartLine,
  RiQuestionLine,
  RiSparklingLine ,
  RiLoginCircleLine
} from 'react-icons/ri';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does a medical billing company do?",
      answer: "We help healthcare providers get paid by preparing and submitting claims to insurance companies, and following up until the payments are received.",
      // icon: <RiMoneyDollarCircleLine className="text-blue-500 text-xl" />
      icon: <RiFileList3Line className="text-blue-500 text-xl" />
    },
    {
      question: "Why do I need a billing service?",
      answer: "Medical billing is time-consuming and complicated. We take care of it for you, so you can focus on treating patients, not paperwork.",
      // icon: <RiHospitalLine className="text-green-500 text-xl" />
      icon: <RiTimeLine className="text-green-500 text-xl" />
    },
    {
      question: "Will I still have control over my billing?",
      answer: "Absolutely! You’ll have full visibility and regular updates on your claims and payments. We work as your partner, not in place of you.",
      // icon: <RiShieldCheckLine className="text-purple-500 text-xl" />
      icon: <RiDashboardLine className="text-purple-500 text-xl" />
    },
    {
      question: "How do I know if my claims are being paid correctly?",
      answer: "We provide clear, regular reports showing what’s been billed, what’s been paid, and any follow-ups needed.",
      // icon: <RiShieldCheckLine className="text-amber-500 text-xl" />
       icon: <RiBarChartLine className="text-amber-500 text-xl" />
    },
    {
      question: "What makes SiniMeds different?",
      answer: "We blend advanced technology with personal support. Our use of AI speeds things up, but our human experts make sure nothing gets missed.",
      // icon: <RiChatSmileLine className="text-teal-500 text-xl" />
      icon: <RiSparklingLine className="text-teal-500 text-xl" />
    },
    {
      question: "How do I get started?",
      answer: "It’s easy! Just contact us, and we’ll walk you through a simple onboarding process to get your billing up and running quickly.",
      // icon: <RiChatSmileLine className="text-teal-500 text-xl" />
      icon: <RiLoginCircleLine className="text-teal-500 text-xl" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4">
            <RiQuestionLine className="mr-2" />
            <span className="font-medium">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Clear Answers to <span className="text-zinc-900">Your Questions</span>
          </h2>
          <p className="text-gray-600">
            Here&ldquo;s what most healthcare providers ask about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-start p-5 text-left transition-colors ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                aria-expanded={activeIndex === index}
              >
                <div className="mr-4 mt-1">
                  {faq.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-lg">
                    {faq.question}
                  </h3>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600 mt-2 text-left"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0
                  }}
                  className="text-gray-500 ml-4"
                >
                  <RiArrowDownSLine className="text-xl" />
                </motion.div>
              </button>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Didn&ldquo;t find your answer?
          </p>
          {/* <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Contact Our Support Team
            <RiArrowDownSLine className="ml-2 transform rotate-90" />
          </button> */}
          <Link href="/contact">

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
            </span>

            <span className="relative flex items-center">
              <span>Contact Our Support Team</span>
              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="ml-3"
              >
                <MdContactPhone className="text-xl" />
              </motion.span>
            </span>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 -top-4 text-blue-300 opacity-30 text-6xl"
            >
              <IoMdRibbon />
            </motion.div>
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;