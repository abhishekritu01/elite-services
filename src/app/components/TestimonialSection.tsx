'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Since switching to their RCM services, our collections increased by 28% and denials dropped by 40%.",
      author: "Dr. John Smith",
      position: "Multi-Specialty Clinic, TX",
      highlight: "28% increase | 40% fewer denials"
    },
    {
      quote: "Their team reduced our AR days from 60 to 15, improving cash flow dramatically.",
      author: "ABC Hospital",
      position: "Florida",
      highlight: "60 → 15 AR days"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proven Results</span> for Healthcare Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we&quot;ve helped practices and hospitals streamline revenue cycles
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                }}
                className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <FaQuoteLeft className="text-blue-400 text-2xl mb-4 opacity-70" />
                  <p className="text-gray-700 text-lg mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-auto">
                    <div className="mb-2 px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full inline-block">
                      {testimonial.highlight}
                    </div>
                    <div className="mt-3">
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-300"
          >
            Read More Success Stories
            <FaChevronRight className="ml-2 text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;