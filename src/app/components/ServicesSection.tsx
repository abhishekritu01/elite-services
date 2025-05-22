// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   RiArrowRightLine,
//   RiBillLine,
//   RiCodeSSlashLine,
//   RiHandCoinLine,
//   RiLineChartLine,
//   RiShieldCheckLine,
//   RiUserHeartLine,
//   RiCloseLine
// } from 'react-icons/ri';
// import { useState } from 'react';

// const ServicesSection = () => {
//   const [expandedCard, setExpandedCard] = useState<string | null>(null);

//   const services = {
//     billing: {
//       title: "Medical Billing & Claims Management",
//       icon: <RiBillLine className="text-blue-600" />,
//       items: [
//         "Claims submission & scrubbing",
//         "Denial management & appeals",
//         "ERA/EFT enrollment",
//         "Patient eligibility checks",
//         "AR follow-ups & payment posting",
//         "Financial reporting"
//       ],
//       description: "End-to-end medical billing solutions that maximize reimbursements and minimize denials through our proprietary claim scrubbing technology.",
//       stats: [
//         { value: "98%", label: "Clean Claim Rate" },
//         { value: "24-48h", label: "Filing Speed" }
//       ]
//     },
//     coding: {
//       title: "Medical Coding",
//       icon: <RiCodeSSlashLine className="text-green-600" />,
//       items: [
//         "ICD-10, CPT, HCPCS coding",
//         "Audits & compliance reviews",
//         "Specialty-specific coding",
//         "Documentation improvement",
//         "Coding education & training"
//       ],
//       description: "Certified coders ensure accurate, compliant coding that maximizes legitimate reimbursement and minimizes audit risk.",
//       stats: [
//         { value: "99.5%", label: "Accuracy" },
//         { value: "50+", label: "Specialties" }
//       ]
//     },
//     rcm: {
//       title: "Revenue Cycle Management",
//       icon: <RiLineChartLine className="text-purple-600" />,
//       items: [
//         "End-to-end RCM solutions",
//         "Performance analytics",
//         "Process optimization",
//         "Regulatory compliance",
//         "Custom reporting"
//       ],
//       description: "Comprehensive RCM services that streamline your revenue cycle from patient registration to final payment posting.",
//       stats: [
//         { value: "27%", label: "Avg. Revenue Increase" },
//         { value: "15", label: "Day AR Reduction" }
//       ]
//     },
//     compliance: {
//       title: "HIPAA Compliance",
//       icon: <RiShieldCheckLine className="text-red-600" />,
//       items: [
//         "Security risk assessments",
//         "Policy development",
//         "Staff training",
//         "Audit preparation",
//         "Breach notification"
//       ],
//       description: "Protect your practice with our comprehensive HIPAA compliance solutions tailored to healthcare providers.",
//       stats: [
//         { value: "100%", label: "Compliance Rate" },
//         { value: "24/7", label: "Security Monitoring" }
//       ]
//     },
//     practice: {
//       title: "Practice Management",
//       icon: <RiUserHeartLine className="text-teal-600" />,
//       items: [
//         "Workflow optimization",
//         "Staff training",
//         "Patient flow analysis",
//         "Appointment scheduling",
//         "Performance benchmarking"
//       ],
//       description: "Optimize your practice operations to improve patient experience and staff productivity.",
//       stats: [
//         { value: "40%", label: "Efficiency Gain" },
//         { value: "95%", label: "Patient Satisfaction" }
//       ]
//     },
//     consulting: {
//       title: "Revenue Recovery",
//       icon: <RiHandCoinLine className="text-amber-600" />,
//       items: [
//         "Underpayment identification",
//         "Contract analysis",
//         "Payer negotiations",
//         "Lost revenue recovery",
//         "Fee schedule optimization"
//       ],
//       description: "Our experts identify and recover revenue you didn't know you were missing from underpayments and denials.",
//       stats: [
//         { value: "$2.8M", label: "Avg. Recovery" },
//         { value: "30%", label: "Underpayments Found" }
//       ]
//     }
//   };

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardItem = {
//     hidden: { opacity: 0, y: 30 },
//     show: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         duration: 0.6,
//         type: "spring",
//         stiffness: 80
//       } 
//     }
//   };

//   const hoverCard = {
//     rest: { 
//       y: 0,
//       scale: 1,
//       boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
//     },
//     hover: { 
//       y: -8,
//       scale: 1.02,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { 
//         type: "spring", 
//         stiffness: 300, 
//         damping: 15 
//       } 
//     }
//   };

//   const listItem = {
//     hidden: { x: -20, opacity: 0 },
//     visible: (i: number) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: i * 0.1 + 0.3,
//         type: "spring",
//         stiffness: 100
//       }
//     })
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
//       {/* Floating background elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-10">
//         <motion.div 
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//             delay: 5
//           }}
//           className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-xl"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="text-3xl md:text-4xl font-bold mb-4"
//             style={{
//               backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)',
//               backgroundSize: '200% auto',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               color: 'transparent',
//             }}
//           >
//             Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Healthcare Revenue Solutions</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//           >
//             Optimize your financial performance with our specialized services
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div 
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {Object.entries(services).map(([key, service]) => (
//             <motion.div
//               key={key}
//               variants={cardItem}
//               whileHover="hover"
//               initial="rest"
//               animate="rest"
//               className="relative"
//             >
//               <motion.div
//                 variants={hoverCard}
//                 onClick={() => setExpandedCard(expandedCard === key ? null : key)}
//                 className={`bg-white rounded-xl overflow-hidden h-full border-2 cursor-pointer transition-all duration-300 ${
//                   expandedCard === key 
//                     ? "border-blue-500 shadow-xl" 
//                     : "border-gray-100 hover:border-blue-300"
//                 }`}
//               >
//                 <div className="p-6 h-full flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <motion.div 
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-sm ${
//                         expandedCard === key 
//                           ? "bg-blue-100" 
//                           : "bg-gradient-to-br from-blue-50 to-white"
//                       }`}
//                     >
//                       {service.icon}
//                     </motion.div>
//                     <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
//                   </div>
                  
//                   <AnimatePresence>
//                     {expandedCard !== key && (
//                       <motion.ul 
//                         initial={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="space-y-2 flex-grow mb-4"
//                       >
//                         {service.items.slice(0, 3).map((item, i) => (
//                           <motion.li
//                             key={i}
//                             custom={i}
//                             initial="hidden"
//                             animate="visible"
//                             variants={listItem}
//                             className="flex items-start text-gray-600 text-sm"
//                           >
//                             <motion.span 
//                               animate={{ scale: [1, 1.2, 1] }}
//                               transition={{ duration: 0.3, delay: i * 0.05 }}
//                               className="inline-block text-blue-500 mr-2 mt-1"
//                             >
//                               •
//                             </motion.span>
//                             {item}
//                           </motion.li>
//                         ))}
//                         {service.items.length > 3 && (
//                           <motion.li className="text-blue-500 text-sm font-medium mt-2">
//                             +{service.items.length - 3} more services
//                           </motion.li>
//                         )}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>

//                   <AnimatePresence>
//                     {expandedCard === key && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <motion.p className="text-gray-600 mb-4">
//                           {service.description}
//                         </motion.p>
                        
//                         <motion.ul className="space-y-2 mb-6">
//                           {service.items.map((item, i) => (
//                             <motion.li
//                               key={i}
//                               initial={{ x: -20, opacity: 0 }}
//                               animate={{ 
//                                 x: 0, 
//                                 opacity: 1,
//                                 transition: { delay: i * 0.05 }
//                               }}
//                               className="flex items-start text-gray-600"
//                             >
//                               <span className="inline-block text-blue-500 mr-2 mt-1">•</span>
//                               {item}
//                             </motion.li>
//                           ))}
//                         </motion.ul>
                        
//                         <motion.div 
//                           initial={{ opacity: 0 }}
//                           animate={{ 
//                             opacity: 1,
//                             transition: { delay: service.items.length * 0.05 + 0.1 }
//                           }}
//                           className="flex gap-4 mt-4"
//                         >
//                           {service.stats.map((stat, i) => (
//                             <div key={i} className="bg-blue-50 px-3 py-2 rounded-lg">
//                               <p className="text-blue-600 font-bold">{stat.value}</p>
//                               <p className="text-xs text-gray-600">{stat.label}</p>
//                             </div>
//                           ))}
//                         </motion.div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <motion.div className="mt-auto pt-4 border-t border-gray-100">
//                     <motion.div
//                       whileHover={{ x: 5 }}
//                       className="text-blue-600 font-medium flex items-center"
//                     >
//                       {expandedCard === key ? (
//                         <>
//                           <RiCloseLine className="mr-2" />
//                           Collapse
//                         </>
//                       ) : (
//                         <>
//                           Learn more
//                           <RiArrowRightLine className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
//                         </>
//                       )}
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
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
//               boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)"
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg group"
//           >
//             <span className="absolute inset-0 overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
//             </span>
//             <span className="relative">
//               Explore All Services
//             </span>
//             <motion.span
//               animate={{
//                 x: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//               className="ml-3"
//             >
//               <RiArrowRightLine className="text-xl" />
//             </motion.span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;




'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  RiArrowRightLine,
  RiBillLine,
  RiCodeSSlashLine,
  RiHandCoinLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiUserHeartLine,
  RiCloseLine
} from 'react-icons/ri';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices after component mounts
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia('(hover: none)').matches)
    );
  }, []);

  const services = {
    billing: {
      title: "Medical Billing & Claims Management",
      icon: <RiBillLine className="text-blue-600" />,
      items: [
        "Claims submission & scrubbing",
        "Denial management & appeals",
        "ERA/EFT enrollment",
        "Patient eligibility checks",
        "AR follow-ups & payment posting",
        "Financial reporting"
      ],
      description: "End-to-end medical billing solutions that maximize reimbursements and minimize denials through our proprietary claim scrubbing technology.",
      stats: [
        { value: "98%", label: "Clean Claim Rate" },
        { value: "24-48h", label: "Filing Speed" }
      ]
    },
    coding: {
      title: "Medical Coding",
      icon: <RiCodeSSlashLine className="text-green-600" />,
      items: [
        "ICD-10, CPT, HCPCS coding",
        "Audits & compliance reviews",
        "Specialty-specific coding",
        "Documentation improvement",
        "Coding education & training"
      ],
      description: "Certified coders ensure accurate, compliant coding that maximizes legitimate reimbursement and minimizes audit risk.",
      stats: [
        { value: "99.5%", label: "Accuracy" },
        { value: "50+", label: "Specialties" }
      ]
    },
    rcm: {
      title: "Revenue Cycle Management",
      icon: <RiLineChartLine className="text-purple-600" />,
      items: [
        "End-to-end RCM solutions",
        "Performance analytics",
        "Process optimization",
        "Regulatory compliance",
        "Custom reporting"
      ],
      description: "Comprehensive RCM services that streamline your revenue cycle from patient registration to final payment posting.",
      stats: [
        { value: "27%", label: "Avg. Revenue Increase" },
        { value: "15", label: "Day AR Reduction" }
      ]
    },
    compliance: {
      title: "HIPAA Compliance",
      icon: <RiShieldCheckLine className="text-red-600" />,
      items: [
        "Security risk assessments",
        "Policy development",
        "Staff training",
        "Audit preparation",
        "Breach notification"
      ],
      description: "Protect your practice with our comprehensive HIPAA compliance solutions tailored to healthcare providers.",
      stats: [
        { value: "100%", label: "Compliance Rate" },
        { value: "24/7", label: "Security Monitoring" }
      ]
    },
    practice: {
      title: "Practice Management",
      icon: <RiUserHeartLine className="text-teal-600" />,
      items: [
        "Workflow optimization",
        "Staff training",
        "Patient flow analysis",
        "Appointment scheduling",
        "Performance benchmarking"
      ],
      description: "Optimize your practice operations to improve patient experience and staff productivity.",
      stats: [
        { value: "40%", label: "Efficiency Gain" },
        { value: "95%", label: "Patient Satisfaction" }
      ]
    },
    consulting: {
      title: "Revenue Recovery",
      icon: <RiHandCoinLine className="text-amber-600" />,
      items: [
        "Underpayment identification",
        "Contract analysis",
        "Payer negotiations",
        "Lost revenue recovery",
        "Fee schedule optimization"
      ],
      description: "Our experts identify and recover revenue you didn't know you were missing from underpayments and denials.",
      stats: [
        { value: "$2.8M", label: "Avg. Recovery" },
        { value: "30%", label: "Underpayments Found" }
      ]
    }
  };

  const handleCardInteraction = (key: string) => {
    if (isTouchDevice) {
      // For touch devices, toggle on click
      setActiveCard(activeCard === key ? null : key);
    } else {
      // For non-touch devices, show on hover
      setActiveCard(key);
    }
  };

  const resetActiveCard = () => {
    if (!isTouchDevice) {
      setActiveCard(null);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Comprehensive <span className="text-blue-600">Healthcare Revenue Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimize your financial performance with our specialized services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(services).map(([key, service]) => (
            <div 
              key={key}
              onMouseEnter={() => handleCardInteraction(key)}
              onMouseLeave={resetActiveCard}
              onClick={() => isTouchDevice && handleCardInteraction(key)}
              className="relative"
            >
              <motion.div
                initial={false}
                animate={{
                  height: activeCard === key ? 'auto' : '180px',
                  transition: { type: "spring", damping: 25, stiffness: 100 }
                }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                  activeCard === key ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <AnimatePresence>
                    {activeCard === key ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4"
                      >
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start text-gray-600 text-sm"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex gap-3">
                          {service.stats.map((stat, i) => (
                            <div key={i} className="bg-blue-50 px-3 py-2 rounded-lg">
                              <p className="text-blue-600 font-bold">{stat.value}</p>
                              <p className="text-xs text-gray-600">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        {isTouchDevice && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCard(null);
                            }}
                            className="mt-4 text-blue-600 font-medium flex items-center"
                          >
                            <RiCloseLine className="mr-2" />
                            Close
                          </button>
                        )}
                      </motion.div>
                    ) : (
                      <motion.ul
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                      >
                        {service.items.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start text-gray-600 text-sm">
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                        {service.items.length > 3 && (
                          <li className="text-blue-500 text-sm font-medium mt-2">
                            +{service.items.length - 3} more services
                          </li>
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
            Explore All Services
            <RiArrowRightLine className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;