





'use client';
import { motion } from 'framer-motion';

const SimpleRCMOverview = () => {
  return (
    <div className="max-w-full mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video Placeholder with Animation */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-20 h-20 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
              <span className="text-white font-medium">RCM Process Animation</span>
            </div>
          </div>
        </motion.div>

        {/* RCM Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Revenue Cycle Management</h2>
          <p className="text-gray-600 mb-4">
            Revenue Cycle Management (RCM) is the financial process that healthcare facilities use to track patient care episodes from registration to final payment.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">End-to-end claims processing from patient registration to payment collection</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Reduces claim denials and improves cash flow</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">14 key steps ensuring maximum reimbursement</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Compliance with healthcare regulations and payer requirements</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm">
            Learn More About RCM
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleRCMOverview;






