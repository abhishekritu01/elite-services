'use client';

import { motion } from 'framer-motion';
import { FaClipboardCheck } from 'react-icons/fa';
import {
  RiBarcodeLine,
  RiCheckboxCircleLine,
  RiFileSearchLine,
  RiMoneyDollarCircleLine,
  RiSendPlaneLine,
  RiUserHeartLine
} from 'react-icons/ri';
import { MdContactPhone } from 'react-icons/md';
import { IoMdRibbon } from 'react-icons/io';


const ProcessFlowSection = () => {
  const steps = [
    {
      icon: <RiUserHeartLine className="text-blue-500 text-3xl" />,
      title: "Patient Registration",
      description: "Complete demographic collection and insurance information",
      subtext: "We verify all patient details for accuracy"
    },
    {
      icon: <RiFileSearchLine className="text-green-500 text-3xl" />,
      title: "Insurance Verification",
      description: "Real-time eligibility checks and benefits verification",
      subtext: "Confirming coverage before services are rendered"
    },
    {
      icon: <RiBarcodeLine className="text-purple-500 text-3xl" />,
      title: "Coding & Charge Entry",
      description: "ICD-10/CPT coding with clinical documentation review",
      subtext: "Ensuring maximum legitimate reimbursement"
    },
    {
      icon: <RiSendPlaneLine className="text-red-500 text-3xl" />,
      title: "Claims Submission",
      description: "Electronic filing with automatic scrubbing",
      subtext: "99.9% first-pass acceptance rate"
    },
    {
      icon: <RiMoneyDollarCircleLine className="text-amber-500 text-3xl" />,
      title: "Payment Posting",
      description: "Daily reconciliation with detailed reporting",
      subtext: "Transparent financial tracking"
    },
    {
      icon: <RiCheckboxCircleLine className="text-teal-500 text-3xl" />,
      title: "AR Follow-up",
      description: "Denial management and appeals processing",
      subtext: "Maximizing your collected revenue"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
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
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
          >
            <FaClipboardCheck className="mr-2" />
            <span className="font-medium">PROCESS FLOW</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Seamless Medical Billing</span> Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From patient registration to payment collection - optimized for efficiency
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {index + 1}
                    </div>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="text-3xl"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                    {step.subtext}
                  </p>

                  {/* Animated arrow for mobile */}
                  <div className="md:hidden mt-4 flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-gray-400"
                    >
                      ↓
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Claim Accuracy" },
              { value: "24-48h", label: "Filing Speed" },
              { value: "100%", label: "Clean Claim Rate" },
              { value: "30%+", label: "Faster Payments" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
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
              <span>Get Started With Our Process</span>
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessFlowSection;








// 'use client';

// import { motion } from 'framer-motion';
// import { FaClipboardCheck } from 'react-icons/fa';
// import {
//   RiBarcodeLine,
//   RiCheckboxCircleLine,
//   RiFileSearchLine,
//   RiMoneyDollarCircleLine,
//   RiSendPlaneLine,
//   RiUserHeartLine
// } from 'react-icons/ri';
// import { MdContactPhone } from 'react-icons/md';
// import { IoMdRibbon } from 'react-icons/io';


// const ProcessFlowSection = () => {
//   const steps = [
//     {
//       icon: <RiUserHeartLine className="text-blue-500 text-3xl" />,
//       title: "Patient Registration",
//       description: "Complete demographic collection and insurance information",
//       subtext: "We verify all patient details for accuracy"
//     },
//     {
//       icon: <RiFileSearchLine className="text-green-500 text-3xl" />,
//       title: "Insurance Verification",
//       description: "Real-time eligibility checks and benefits verification",
//       subtext: "Confirming coverage before services are rendered"
//     },
//     {
//       icon: <RiBarcodeLine className="text-purple-500 text-3xl" />,
//       title: "Coding & Charge Entry",
//       description: "ICD-10/CPT coding with clinical documentation review",
//       subtext: "Ensuring maximum legitimate reimbursement"
//     },
//     {
//       icon: <RiSendPlaneLine className="text-red-500 text-3xl" />,
//       title: "Claims Submission",
//       description: "Electronic filing with automatic scrubbing",
//       subtext: "99.9% first-pass acceptance rate"
//     },
//     {
//       icon: <RiMoneyDollarCircleLine className="text-amber-500 text-3xl" />,
//       title: "Payment Posting",
//       description: "Daily reconciliation with detailed reporting",
//       subtext: "Transparent financial tracking"
//     },
//     {
//       icon: <RiCheckboxCircleLine className="text-teal-500 text-3xl" />,
//       title: "AR Follow-up",
//       description: "Denial management and appeals processing",
//       subtext: "Maximizing your collected revenue"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0.9 }}
//             whileInView={{ scale: 1 }}
//             className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
//           >
//             <FaClipboardCheck className="mr-2" />
//             <span className="font-medium">PROCESS FLOW</span>
//           </motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Seamless Medical Billing</span> Process
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             From patient registration to payment collection - optimized for efficiency
//           </p>
//         </motion.div>

//         {/* Process Flow */}
//         <div className="relative">
//           {/* Connector line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5 }}
//             className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"
//             style={{ originX: 0 }}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 className="group"
//               >
//                 <motion.div
//                   whileHover={{
//                     y: -10,
//                     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//                   }}
//                   className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:border-blue-100 transition-all duration-300"
//                 >
//                   {/* Step number */}
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
//                       {index + 1}
//                     </div>
//                     <motion.div
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       className="text-3xl"
//                     >
//                       {step.icon}
//                     </motion.div>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
//                   <p className="text-gray-700 mb-3">{step.description}</p>
//                   <p className="text-sm text-gray-500 flex items-center">
//                     <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
//                     {step.subtext}
//                   </p>

//                   {/* Animated arrow for mobile */}
//                   <div className="md:hidden mt-4 flex justify-center">
//                     <motion.div
//                       animate={{ y: [0, 5, 0] }}
//                       transition={{ repeat: Infinity, duration: 1.5 }}
//                       className="text-gray-400"
//                     >
//                       ↓
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: "99.9%", label: "Claim Accuracy" },
//               { value: "24-48h", label: "Filing Speed" },
//               { value: "100%", label: "Clean Claim Rate" },
//               { value: "30%+", label: "Faster Payments" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-blue-100">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
//           >
//             <span className="absolute inset-0 overflow-hidden">
//               <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
//             </span>

//             <span className="relative flex items-center">
//               <span>Get Started With Our Process</span>
//               <motion.span
//                 animate={{
//                   x: [0, 4, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//                 className="ml-3"
//               >
//                 <MdContactPhone className="text-xl" />
//               </motion.span>
//             </span>

//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="absolute -right-4 -top-4 text-blue-300 opacity-30 text-6xl"
//             >
//               <IoMdRibbon />
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProcessFlowSection;