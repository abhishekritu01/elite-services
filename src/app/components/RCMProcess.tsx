'use client';
import { motion } from 'framer-motion';
import { IoIosTrendingUp } from 'react-icons/io';
import { IoMdRibbon } from 'react-icons/io';

const SimpleRCMOverview = () => {
  return (
    <div className="max-w-full mx-auto py-8 bg-white  md:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video Placeholder with Animation */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-square flex items-center justify-center relative">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 rounded-xl"></div> */}
            <video
              className="w-full h-full object-fill rounded-xl"
              src="/rcm.mp4"
              autoPlay
              loop
              muted
            />
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
          {/* <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm">
            Learn More About RCM
          </button> */}
          <div className="mt-6 flex justify-center space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-sm md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
            >
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
              </span>

              <span className="relative flex items-center">
                <span>Learn More About RCM</span>
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
                  <IoIosTrendingUp className="text-xl" />
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
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default SimpleRCMOverview;






