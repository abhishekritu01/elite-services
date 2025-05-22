'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiQuestionLine,
  RiArrowDownSLine,
  RiMoneyDollarCircleLine,
  RiHospitalLine,
  RiShieldCheckLine,
  RiChatSmileLine
} from 'react-icons/ri';
import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does medical billing outsourcing cost?",
      answer: "We offer flexible pricing options to fit your practice size. Most clients save 30-50% compared to in-house billing teams.",
      icon: <RiMoneyDollarCircleLine className="text-blue-500 text-xl" />
    },
    {
      question: "Do you work with my EHR/EMR system?",
      answer: "Yes! We integrate with all major systems including Epic, Cerner, and Athenahealth. Our team handles the technical setup for you.",
      icon: <RiHospitalLine className="text-green-500 text-xl" />
    },
    {
      question: "How quickly will I see improvements?",
      answer: "Most practices see measurable results within 30-60 days, including faster payments and fewer denied claims.",
      icon: <RiShieldCheckLine className="text-purple-500 text-xl" />
    },
    {
      question: "Is my patient data secure?",
      answer: "Absolutely. We use enterprise-grade security and strict HIPAA compliance protocols to protect all sensitive information.",
      icon: <RiShieldCheckLine className="text-amber-500 text-xl" />
    },
    {
      question: "What's your onboarding process like?",
      answer: "We make transition easy with a dedicated specialist who guides you through each step with no disruption to your workflow.",
      icon: <RiChatSmileLine className="text-teal-500 text-xl" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Clear Answers to <span className="text-blue-600">Your Questions</span>
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
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Contact Our Support Team
            <RiArrowDownSLine className="ml-2 transform rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;