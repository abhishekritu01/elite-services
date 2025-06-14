// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaChartLine, FaShieldAlt, FaClock, FaHandHoldingUsd } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';

// const HeroSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   const floatingAnim = {
//     y: [0, -15, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const pulseAnim = {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
//       {/* Background elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"
//           animate={floatingAnim}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-70"
//           animate={{
//             ...floatingAnim,
//             y: [0, -25, 0],
//             transition: { ...floatingAnim.transition, delay: 1 }
//           }}
//         />
//         <motion.div
//           className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-70"
//           animate={{
//             ...floatingAnim,
//             y: [0, -20, 0],
//             transition: { ...floatingAnim.transition, delay: 0.5 }
//           }}
//         />
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <motion.div
//             className="space-y-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={itemVariants} className="flex items-center space-x-2">
//               <div className="w-8 h-0.5 bg-blue-500"></div>
//               <span className="text-sm font-medium text-blue-600">MAXIMIZE YOUR REVENUE</span>
//             </motion.div>


//             {/* <motion.span
// animate={{
// backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// }}
// transition={{
// duration: 10,
// repeat: Infinity,
// ease: "linear"
// }}
// className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
// >
// Proven Results
// </motion.span> */}

//             <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Expert
//               <motion.span
//                 animate={{
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                 }} transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
//               > Medical Billing</motion.span> & RCM Services
//             </motion.h1>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600">
//               Reduce denials, accelerate reimbursements, and streamline billing with our end-to-end solutions for US healthcare providers.
//             </motion.p>
//             <div className="flex flex-row items-center gap-x-4">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={pulseAnim}
//                 className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
//               >
//                 <span className="absolute inset-0 overflow-hidden">
//                   <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
//                 </span>

//                <span className="relative flex items-center">
//                   <span>Get a Free Demo</span>
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                     className="ml-2"
//                   >
//                     <FiArrowRight className="text-xl" />
//                   </motion.span>
//                 </span>
//               </motion.button>

//               <motion.button
//                 className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Speak to an Expert <FiArrowRight className="ml-2" />
//               </motion.button>
//             </div>
//             {/* Features grid */}
//             <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
//               {[
//                 { icon: <FaChartLine className="text-blue-600 text-xl" />, text: "Revenue Growth" },
//                 { icon: <FaShieldAlt className="text-blue-600 text-xl" />, text: "100% Accuracy" },
//                 { icon: <FaClock className="text-blue-600 text-xl" />, text: "Faster Payments" },
//                 { icon: <FaHandHoldingUsd className="text-blue-600 text-xl" />, text: "Reduced Denials" }
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                   whileHover={{ y: -5 }}
//                 >
//                   {feature.icon}
//                   <span className="text-gray-700 font-medium">{feature.text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right image */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="relative">
//               <motion.img
//                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Medical billing team"
//                 className="rounded-xl shadow-2xl w-full h-auto"
//                 animate={{
//                   y: [0, -15, 0],
//                   transition: {
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }
//                 }}
//               />
//               {/* Floating cards */}
//               <motion.div
//                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{
//                   y: 0,
//                   opacity: 1,
//                   transition: { delay: 0.5, duration: 0.5 }
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="flex items-center">
//                   <div className="bg-green-100 p-2 rounded-lg">
//                     <FaChartLine className="text-green-600" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-s text-gray-500">Revenue Increase</p>
//                     {/* <p className="font-bold text-green-600">+27% Avg.</p> */}
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{
//                   y: 0,
//                   opacity: 1,
//                   transition: { delay: 0.7, duration: 0.5 }
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="flex items-center">
//                   <div className="bg-blue-100 p-2 rounded-lg">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-s text-gray-500">Faster Payments</p>
//                     {/* <p className="font-bold text-blue-600">15 Days Avg.</p> */}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;








// // 'use client';
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaChartLine, FaShieldAlt, FaClock, FaHandHoldingUsd } from 'react-icons/fa';
// // import { FiArrowRight } from 'react-icons/fi';

// // const HeroSection = () => {
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.2,
// //         delayChildren: 0.3
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5
// //       }
// //     }
// //   };

// //   const floatingAnim = {
// //     y: [0, -15, 0],
// //     transition: {
// //       duration: 6,
// //       repeat: Infinity,
// //       ease: "easeInOut"
// //     }
// //   };

// //   const pulseAnim = {
// //     scale: [1, 1.05, 1],
// //     transition: {
// //       duration: 3,
// //       repeat: Infinity,
// //       ease: "easeInOut"
// //     }
// //   };

// //   return (
// //     <div className="bg-white overflow-hidden relative">
// //       {/* Background elements */}
// //       <motion.div
// //         className="absolute top-0 left-0 w-full h-full overflow-hidden"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <motion.div
// //           className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"
// //           animate={floatingAnim}
// //         />
// //         <motion.div
// //           className="absolute bottom-10 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-70"
// //           animate={{
// //             ...floatingAnim,
// //             y: [0, -25, 0],
// //             transition: { ...floatingAnim.transition, delay: 1 }
// //           }}
// //         />
// //         <motion.div
// //           className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-70"
// //           animate={{
// //             ...floatingAnim,
// //             y: [0, -20, 0],
// //             transition: { ...floatingAnim.transition, delay: 0.5 }
// //           }}
// //         />
// //       </motion.div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //           {/* Left content */}
// //           <motion.div
// //             className="space-y-8"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             <motion.div variants={itemVariants} className="flex items-center space-x-2">
// //               <div className="w-8 h-0.5 bg-blue-500"></div>
// //               <span className="text-sm font-medium text-blue-600">MAXIMIZE YOUR REVENUE</span>
// //             </motion.div>

// //             <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
// //               Expert <span className="text-blue-600">Medical Billing</span> & RCM Services
// //             </motion.h1>

// //             <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600">
// //               Reduce denials, accelerate reimbursements, and streamline billing with our end-to-end solutions for US healthcare providers.
// //             </motion.p>

// //             <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
// //               <motion.button
// //                 className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 animate={pulseAnim}
// //               >
// //                 Get a Free Demo <FiArrowRight className="ml-2" />
// //               </motion.button>
// //               <motion.button
// //                 className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Speak to an Expert <FiArrowRight className="ml-2" />
// //               </motion.button>
// //             </motion.div>

// //             {/* Features grid */}
// //             <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
// //               {[
// //                 { icon: <FaChartLine className="text-blue-600 text-xl" />, text: "Revenue Growth" },
// //                 { icon: <FaShieldAlt className="text-blue-600 text-xl" />, text: "98% Accuracy" },
// //                 { icon: <FaClock className="text-blue-600 text-xl" />, text: "Faster Payments" },
// //                 { icon: <FaHandHoldingUsd className="text-blue-600 text-xl" />, text: "Reduced Denials" }
// //               ].map((feature, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
// //                   whileHover={{ y: -5 }}
// //                 >
// //                   {feature.icon}
// //                   <span className="text-gray-700 font-medium">{feature.text}</span>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </motion.div>

// //           {/* Right image */}
// //           <motion.div
// //             className="relative"
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           >
// //             <div className="relative">
// //               <motion.img
// //                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
// //                 alt="Medical billing team"
// //                 className="rounded-xl shadow-2xl w-full h-auto"
// //                 animate={{
// //                   y: [0, -15, 0],
// //                   transition: {
// //                     duration: 8,
// //                     repeat: Infinity,
// //                     ease: "easeInOut"
// //                   }
// //                 }}
// //               />
// //               {/* Floating cards */}
// //               <motion.div
// //                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{
// //                   y: 0,
// //                   opacity: 1,
// //                   transition: { delay: 0.5, duration: 0.5 }
// //                 }}
// //                 whileHover={{ scale: 1.05 }}
// //               >
// //                 <div className="flex items-center">
// //                   <div className="bg-green-100 p-2 rounded-lg">
// //                     <FaChartLine className="text-green-600" />
// //                   </div>
// //                   <div className="ml-3">
// //                     <p className="text-xs text-gray-500">Revenue Increase</p>
// //                     <p className="font-bold text-green-600">+27% Avg.</p>
// //                   </div>
// //                 </div>
// //               </motion.div>

// //               <motion.div
// //                 className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{
// //                   y: 0,
// //                   opacity: 1,
// //                   transition: { delay: 0.7, duration: 0.5 }
// //                 }}
// //                 whileHover={{ scale: 1.05 }}
// //               >
// //                 <div className="flex items-center">
// //                   <div className="bg-blue-100 p-2 rounded-lg">
// //                     <FaClock className="text-blue-600" />
// //                   </div>
// //                   <div className="ml-3">
// //                     <p className="text-xs text-gray-500">Faster Payments</p>
// //                     <p className="font-bold text-blue-600">15 Days Avg.</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;





















// 'use client';
// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaChartLine, FaShieldAlt, FaClock, FaHandHoldingUsd, FaPlay, FaPause } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';

// const HeroSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showPulse, setShowPulse] = useState(false);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   const floatingAnim = {
//     y: [0, -15, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const pulseAnim = {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const aiPulse = {
//     scale: [1, 1.2, 1],
//     opacity: [0.8, 0, 0.8],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
//       {/* Background elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"
//           animate={floatingAnim}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-70"
//           animate={{
//             ...floatingAnim,
//             y: [0, -25, 0],
//             transition: { ...floatingAnim.transition, delay: 1 }
//           }}
//         />
//         <motion.div
//           className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-70"
//           animate={{
//             ...floatingAnim,
//             y: [0, -20, 0],
//             transition: { ...floatingAnim.transition, delay: 0.5 }
//           }}
//         />
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <motion.div
//             className="space-y-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={itemVariants} className="flex items-center space-x-2">
//               <div className="w-8 h-0.5 bg-blue-500"></div>
//               <span className="text-sm font-medium text-blue-600">AI-POWERED RCM SOLUTIONS</span>
//             </motion.div>

//             <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Next-Gen
//               <motion.span
//                 animate={{
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                 }} 
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
//               > AI-Driven</motion.span> Medical Billing
//             </motion.h1>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600">
//               Reduce denials, accelerate reimbursements, and streamline billing with our end-to-end solutions for US healthcare providers.
//             </motion.p>
            
//             <div className="flex flex-row items-center gap-x-4">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={pulseAnim}
//                 className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
//                 onHoverStart={() => setShowPulse(true)}
//                 onHoverEnd={() => setShowPulse(false)}
//               >
//                 {showPulse && (
//                   <motion.span 
//                     className="absolute inset-0 rounded-xl bg-blue-400 opacity-0"
//                     animate={aiPulse}
//                   />
//                 )}
//                 <span className="absolute inset-0 overflow-hidden">
//                   <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
//                 </span>

//                 <span className="relative flex items-center">
//                   <span>Get a Free Demo</span>
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                     className="ml-2"
//                   >
//                     <FiArrowRight className="text-xl" />
//                   </motion.span>
//                 </span>
//               </motion.button>

//               <motion.button
//                 className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Speak to an Expert <FiArrowRight className="ml-2" />
//               </motion.button>
//             </div>
            
//             {/* Features grid */}
//             <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
//               {[
//                 { icon: <FaChartLine className="text-blue-600 text-xl" />, text: "AI Revenue Optimization" },
//                 { icon: <FaShieldAlt className="text-blue-600 text-xl" />, text: "Smart Claim Scrubbing" },
//                 { icon: <FaClock className="text-blue-600 text-xl" />, text: "Real-time Analytics" },
//                 { icon: <FaHandHoldingUsd className="text-blue-600 text-xl" />, text: "Predictive Denial Prevention" }
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                   whileHover={{ y: -5 }}
//                 >
//                   <motion.div 
//                     whileHover={{ rotate: 10 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <span className="text-gray-700 font-medium">{feature.text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right video */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="relative  ">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-fill"
//                 src="/rcm.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
              
//               {/* Video overlay elements */}
//               <motion.div 
//                 className="absolute inset-0 bg-black/2"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               />
              
//               {/* <motion.div 
//                 className="absolute top-4 right-4 cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={togglePlay}
//               >
//                 <div className="bg-white/80 p-2 rounded-full backdrop-blur-sm">
//                   {isPlaying ? <FaPause className="text-blue-600" /> : <FaPlay className="text-blue-600" />}
//                 </div>
//               </motion.div>
//                */}
//               {/* AI data points floating over video */}
//               {/* <motion.div
//                 className="absolute top-1/4 left-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ 
//                   scale: 1,
//                   opacity: 1,
//                   y: [0, -10, 0],
//                   transition: { 
//                     delay: 0.7,
//                     y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
//                   }
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="text-xs font-semibold text-blue-600">AI DETECTED</div>
//                 <div className="text-sm font-bold">98% Clean Claims</div>
//               </motion.div>
//                */}
//               {/* <motion.div
//                 className="absolute bottom-1/4 right-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ 
//                   scale: 1,
//                   opacity: 1,
//                   y: [0, 10, 0],
//                   transition: { 
//                     delay: 1,
//                     y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
//                   }
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="text-xs font-semibold text-purple-600">AI PREDICTION</div>
//                 <div className="text-sm font-bold">27% Revenue Boost</div>
//               </motion.div> */}
//             </div>
            
//             {/* Floating AI chip element */}
//             <motion.div
//               className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg"
//               initial={{ y: 20, opacity: 0, rotate: -10 }}
//               animate={{
//                 y: 0,
//                 opacity: 1,
//                 rotate: 0,
//                 transition: { delay: 0.5, duration: 0.5 }
//               }}
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.3)"
//               }}
//             >
//               <div className="text-white">
//                 <div className="text-xs font-light">POWERED BY</div>
//                 <div className="text-lg font-bold">SmartRCM AI</div>
//                 <div className="text-xs font-light mt-1">v3.2.1</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// ============================================================================================================



'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { FaChartLine, FaClock, FaHandHoldingUsd, FaShieldAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';


const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPulse, setShowPulse] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnim = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const aiPulse = {
    scale: [1, 1.2, 1],
    opacity: [0.8, 0, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"
          animate={floatingAnim}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-70"
          animate={{
            ...floatingAnim,
            y: [0, -25, 0],
            transition: { ...floatingAnim.transition, delay: 1 }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-70"
          animate={{
            ...floatingAnim,
            y: [0, -20, 0],
            transition: { ...floatingAnim.transition, delay: 0.5 }
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-blue-500"></div>
              <span className="text-sm font-medium text-blue-600">AI-POWERED RCM SOLUTIONS</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Next-Gen
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }} 
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
              > AI-Driven</motion.span> Medical Billing
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600">
              Reduce denials, accelerate reimbursements, and streamline billing with our end-to-end solutions for US healthcare providers.
            </motion.p>
            
            <div className="flex flex-row items-center gap-x-4">
              <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnim}
                className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
                onHoverStart={() => setShowPulse(true)}
                onHoverEnd={() => setShowPulse(false)}
              >
                {showPulse && (
                  <motion.span 
                    className="absolute inset-0 rounded-xl bg-blue-400 opacity-0"
                    animate={aiPulse}
                  />
                )}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
                </span>

                <span className="relative flex items-center">
                  <span>Get a Free Demo</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="ml-2"
                  >
                    <FiArrowRight className="text-xl" />
                  </motion.span>
                </span>
              </motion.button>
              </Link>
<Link href="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Speak to an Expert <FiArrowRight className="ml-2" />
              </motion.button>
              </Link>
            </div>
            
            {/* Features grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: <FaChartLine className="text-blue-600 text-xl" />, text: "AI Revenue Optimization" },
                { icon: <FaShieldAlt className="text-blue-600 text-xl" />, text: "Smart Claim Scrubbing" },
                { icon: <FaClock className="text-blue-600 text-xl" />, text: "Real-time Analytics" },
                { icon: <FaHandHoldingUsd className="text-blue-600 text-xl" />, text: "Predictive Denial Prevention" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative  ">
              <video
                ref={videoRef}
                className="w-full h-full object-fill"
                src="/rcm.mp4"
                autoPlay
                muted
                // loop
                playsInline
              /> 
              {/* Video overlay elements */}
              <motion.div 
                className="absolute inset-0 bg-black/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              
            
            </div>
            
            {/* Floating AI chip element */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg"
              initial={{ y: 20, opacity: 0, rotate: -10 }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: { delay: 0.5, duration: 0.5 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.3)"
              }}
            >
              <div className="text-white">
                <div className="text-xs font-light">POWERED BY</div>
                <div className="text-lg font-bold">SmartRCM AI</div>
                <div className="text-xs font-light mt-1">v3.2.1</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;








// ============================================================================================================