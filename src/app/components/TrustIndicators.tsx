// 'use client';

// import { motion, useAnimation, useInView } from 'framer-motion';
// import React, { useEffect, useRef, useState } from 'react';
// import { FaChartLine, FaClinicMedical, FaClock, FaHospital, FaHospitalUser, FaMapMarkedAlt, FaPercentage, FaUserMd } from 'react-icons/fa';

// const TrustIndicators = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const clients = [
//     { 
//       name: "HealthPlus Clinic", 
//       icon: <FaClinicMedical className="text-3xl" />,
//       description: "Reduced claim denials by 40% with our RCM solutions"
//     },
//     { 
//       name: "City Medical Center", 
//       icon: <FaHospital className="text-3xl" />,
//       description: "Achieved 98% clean claim rate in just 3 months"
//     },
//     { 
//       name: "Unity Health System", 
//       icon: <FaHospitalUser className="text-3xl" />,
//       description: "Increased revenue by $2.3M annually through optimized billing"
//     },
//     { 
//       name: "Advanced Care Physicians", 
//       icon: <FaUserMd className="text-3xl" />,
//       description: "Reduced payment turnaround from 45 to 15 days"
//     },
//     { 
//       name: "Regional Medical Group", 
//       icon: <FaClinicMedical className="text-3xl" />,
//       description: "Scaled operations to 5 new states with our support"
//     },
//     { 
//       name: "Metro Health Partners", 
//       icon: <FaHospital className="text-3xl" />,
//       description: "Automated 85% of billing processes with our technology"
//     }
//   ];

//   const stats = [
//     { 
//       value: 98, 
//       suffix: "%", 
//       label: "Claim Accuracy", 
//       icon: <FaPercentage className="text-2xl text-blue-600" />,
//       color: "text-blue-600",
//       bgColor: "bg-blue-100",
//       shadowColor: "shadow-blue-200/50"
//     },
//     { 
//       value: 27, 
//       suffix: "%", 
//       label: "Revenue Increase", 
//       icon: <FaChartLine className="text-2xl text-green-600" />,
//       color: "text-green-600",
//       bgColor: "bg-green-100",
//       shadowColor: "shadow-green-200/50"
//     },
//     { 
//       value: 15, 
//       suffix: "Days", 
//       label: "Avg. Payment Time", 
//       icon: <FaClock className="text-2xl text-purple-600" />,
//       color: "text-purple-600",
//       bgColor: "bg-purple-100",
//       shadowColor: "shadow-purple-200/50"
//     },
//     { 
//       value: 50, 
//       suffix: "States", 
//       label: "Nationwide Coverage", 
//       icon: <FaMapMarkedAlt className="text-2xl text-orange-600" />,
//       color: "text-orange-600",
//       bgColor: "bg-orange-100",
//       shadowColor: "shadow-orange-200/50"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0, scale: 0.95 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const floatingAnim = {
//     y: [0, -20, 0],
//     x: [0, 5, 0],
//     transition: {
//       duration: 10,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const pulseAnim = {
//     scale: [1, 1.03, 1],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   interface CountUpNumberProps {
//     value: number;
//     suffix: string;
//     color: string;
//   }

//   const CountUpNumber = ({ value, suffix, color }: CountUpNumberProps) => {
//     const [displayValue, setDisplayValue] = React.useState(0);
//     const duration = 1800;
//     const startTime = React.useRef<number | null>(null);

//     const animateCount = (timestamp: number) => {
//       if (!startTime.current) startTime.current = timestamp;
//       const progress = Math.min((timestamp - startTime.current) / duration, 1);
//       const easedProgress = easeOutExpo(progress);
//       const currentValue = Math.floor(easedProgress * value);
//       setDisplayValue(currentValue);
      
//       if (progress < 1) {
//         requestAnimationFrame(animateCount);
//       }
//     };

//     const easeOutExpo = (x: number): number => {
//       return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
//     };

//     React.useEffect(() => {
//       if (isInView) {
//         requestAnimationFrame(animateCount);
//       }
//     }, [isInView]);

//     return (
//       <motion.span 
//         className={`text-4xl font-bold ${color}`}
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         {displayValue}{suffix}
//       </motion.span>
//     );
//   };

//   return (
//     <div className="bg-white py-16 relative overflow-hidden">
//       {/* Animated background particles */}
//       {isMounted && (
//         <motion.div 
//           className="absolute inset-0 overflow-hidden pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-blue-100 rounded-full"
//               style={{
//                 width: `${Math.random() * 10 + 5}px`,
//                 height: `${Math.random() * 10 + 5}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 opacity: 0.3
//               }}
//               animate={{
//                 y: [0, (Math.random() - 0.5) * 100],
//                 x: [0, (Math.random() - 0.5) * 30],
//                 opacity: [0.3, 0.5, 0.3],
//                 transition: {
//                   duration: Math.random() * 10 + 10,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }
//               }}
//             />
//           ))}
//         </motion.div>
//       )}

//       {/* Floating blobs */}
//       <motion.div 
//         className="absolute inset-0 overflow-hidden pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <motion.div 
//           className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
//           animate={floatingAnim}
//         />
//         <motion.div 
//           className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20"
//           animate={{
//             ...floatingAnim,
//             y: [0, -25, 0],
//             transition: { ...floatingAnim.transition, delay: 2 }
//           }}
//         />
//         <motion.div 
//           className="absolute top-1/3 right-1/4 w-48 h-48 bg-green-100 rounded-full filter blur-3xl opacity-20"
//           animate={{
//             ...floatingAnim,
//             y: [0, -15, 0],
//             transition: { ...floatingAnim.transition, delay: 1 }
//           }}
//         />
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="text-center mb-16 relative"
//         >
//           <motion.div 
//             className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"
//             animate={pulseAnim}
//           />
//           <motion.div variants={itemVariants} className="flex justify-center mb-4">
//             <motion.div 
//               className="w-16 h-1 bg-blue-600 rounded-full"
//               whileInView={{
//                 scaleX: [0, 1.2, 1],
//                 originX: 0,
//                 transition: { duration: 0.8 }
//               }}
//               viewport={{ once: true }}
//             />
//           </motion.div>
          
//           <motion.h2 
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative"
//           >
//             Trusted by <span className="text-blue-600 relative inline-block">
//               <span className="relative z-10">500+</span>
//               <motion.span 
//                 className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 z-0"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ 
//                   scaleX: 1,
//                   transition: { delay: 0.3, duration: 0.6 }
//                 }}
//                 viewport={{ once: true }}
//               />
//             </span> Healthcare Providers
//           </motion.h2>
          
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//             whileInView={{
//               opacity: [0, 1],
//               transition: { delay: 0.4, duration: 0.8 }
//             }}
//             viewport={{ once: true }}
//           >
//             Serving medical practices and hospitals across all 50 states with proven revenue cycle solutions
//           </motion.p>
//         </motion.div>

//         {/* Client logos grid */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//         >
//           {clients.map((client, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group h-full min-h-[180px]"
//               whileHover={{ 
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
//               {/* Client icon */}
//               <motion.div 
//                 className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3 relative"
//                 whileHover={{ rotate: 5, scale: 1.05 }}
//               >
//                 {client.icon}
//                 <motion.div 
//                   className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100"
//                   initial={{ scale: 0.8 }}
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
              
//               {/* Client name */}
//               <motion.span 
//                 className="text-sm font-medium text-gray-700 text-center mb-2"
//                 whileHover={{ color: "#1e40af" }}
//               >
//                 {client.name}
//               </motion.span>
              
//               {/* Hidden description that appears on hover */}
//               <motion.div 
//                 className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-4 rounded-b-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
//                 initial={{ opacity: 0, y: 20 }}
//               >
//                 <p className="text-xs text-blue-100 text-center">{client.description}</p>
//                 <motion.div 
//                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rotate-45"
//                 />
//               </motion.div>
              
//               {/* Floating dots animation */}
//               {isMounted && [...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={`dot-${index}-${i}`}
//                   className="absolute rounded-full bg-blue-100"
//                   style={{
//                     width: `${Math.random() * 4 + 2}px`,
//                     height: `${Math.random() * 4 + 2}px`,
//                     left: `${Math.random() * 80 + 10}%`,
//                     top: `${Math.random() * 80 + 10}%`,
//                     opacity: 0
//                   }}
//                   animate={{
//                     opacity: [0, 0.6, 0],
//                     y: [0, -20],
//                     x: [0, (Math.random() - 0.5) * 10],
//                     transition: {
//                       duration: Math.random() * 2 + 1,
//                       repeat: Infinity,
//                       delay: Math.random() * 2
//                     }
//                   }}
//                   whileHover={{
//                     opacity: [0.6, 0.8, 0],
//                     transition: { duration: 1 }
//                   }}
//                 />
//               ))}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats section */}
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden group ${stat.shadowColor}`}
//               whileHover={{ 
//                 y: -8,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: stat.color }} />
//               <div className={`w-14 h-14 ${stat.bgColor} rounded-full flex items-center justify-center mb-5 mx-auto relative`}>
//                 <motion.div
//                   initial={{ scale: 0, rotate: -30 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
//                 >
//                   {stat.icon}
//                 </motion.div>
//               </div>
              
//               <div className="text-center relative z-10">
//                 <CountUpNumber 
//                   value={stat.value} 
//                   suffix={stat.suffix} 
//                   color={stat.color}
//                 />
//                 <motion.p 
//                   className="mt-3 text-lg font-medium text-gray-700"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   {stat.label}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TrustIndicators;






// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   RiShieldCheckFill,
//   RiUserHeartLine,
//   RiFileSearchLine,
//   RiLineChartLine,
//   RiMapPin2Fill,
//   RiTimerFlashFill
// } from 'react-icons/ri';
// import { FaClinicMedical, FaHospital, FaUserMd } from 'react-icons/fa';

// const TrustIndicators = () => {
//   const clients = [
//     { 
//       name: "HealthPlus Clinic", 
//       icon: <FaClinicMedical className="text-blue-500" />,
//       description: "Reduced claim denials by 40% with our RCM solutions"
//     },
//     { 
//       name: "City Medical Center", 
//       icon: <FaHospital className="text-green-500" />,
//       description: "Achieved 98% clean claim rate in just 3 months"
//     },
//     { 
//       name: "Advanced Care Physicians", 
//       icon: <FaUserMd className="text-purple-500" />,
//       description: "Reduced payment turnaround from 45 to 15 days"
//     }
//   ];

//   const stats = [
//     { 
//       value: 98, 
//       suffix: "%", 
//       label: "Claim Accuracy", 
//       icon: <RiShieldCheckFill className="text-blue-500" />,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50"
//     },
//     { 
//       value: 27, 
//       suffix: "%", 
//       label: "Revenue Increase", 
//       icon: <RiLineChartLine className="text-green-500" />,
//       color: "text-green-600",
//       bgColor: "bg-green-50"
//     },
//     { 
//       value: 15, 
//       suffix: "Days", 
//       label: "Avg. Payment Time", 
//       icon: <RiTimerFlashFill className="text-purple-500" />,
//       color: "text-purple-600",
//       bgColor: "bg-purple-50"
//     },
//     { 
//       value: 50, 
//       suffix: "States", 
//       label: "Nationwide Coverage", 
//       icon: <RiMapPin2Fill className="text-amber-500" />,
//       color: "text-amber-600",
//       bgColor: "bg-amber-50"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
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
//             <RiShieldCheckFill className="mr-2" />
//             <span className="font-medium">TRUSTED PARTNER</span>
//           </motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">500+ Healthcare Providers</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Serving medical practices and hospitals across all 50 states with proven revenue cycle solutions
//           </p>
//         </motion.div>

//         {/* Client Logos */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {clients.map((client, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
//                   {client.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
//               </div>
//               <p className="text-gray-600">{client.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               whileHover={{ y: -5 }}
//               className={`bg-white rounded-xl shadow-md p-6 text-center ${stat.bgColor} hover:shadow-lg transition-all`}
//             >
//               <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
//                 {stat.icon}
//               </div>
//               <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
//                 {stat.value}{stat.suffix}
//               </div>
//               <p className="text-gray-700 font-medium">{stat.label}</p>
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
//             className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 transition-all duration-300 shadow-md"
//           >
//             Become Our Partner
//             <RiUserHeartLine className="ml-3 transition-all duration-300 group-hover:translate-x-1" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TrustIndicators;








'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  RiShieldCheckFill,
  RiUserHeartLine,
  RiLineChartLine,
  RiMapPin2Fill,
  RiTimerFlashFill
} from 'react-icons/ri';
import { FaClinicMedical, FaHospital, FaUserMd } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';

const TrustIndicators = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setCountStarted(true);
    }
  }, [controls, isInView]);

  const clients = [
    { 
      name: "HealthPlus Clinic", 
      icon: <FaClinicMedical className="text-blue-500" />,
      description: "Reduced claim denials by 40% with our RCM solutions"
    },
    { 
      name: "City Medical Center", 
      icon: <FaHospital className="text-green-500" />,
      description: "Achieved 98% clean claim rate in just 3 months"
    },
    { 
      name: "Advanced Care Physicians", 
      icon: <FaUserMd className="text-purple-500" />,
      description: "Reduced payment turnaround from 45 to 15 days"
    }
  ];

  const stats = [
    { 
      value: 98, 
      suffix: "%", 
      label: "Claim Accuracy", 
      icon: <RiShieldCheckFill className="text-blue-500" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      duration: 800 // Faster duration in ms
    },
    { 
      value: 27, 
      suffix: "%", 
      label: "Revenue Increase", 
      icon: <RiLineChartLine className="text-green-500" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      duration: 600
    },
    { 
      value: 15, 
      suffix: "Days", 
      label: "Avg. Payment Time", 
      icon: <RiTimerFlashFill className="text-purple-500" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      duration: 500
    },
    { 
      value: 50, 
      suffix: "States", 
      label: "Nationwide Coverage", 
      icon: <RiMapPin2Fill className="text-amber-500" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      duration: 400
    }
  ];

  interface CountUpNumberProps {
    value: number;
    suffix: string;
    color: string;
    duration: number;
  }

  const CountUpNumber = ({ value, suffix, color, duration }: CountUpNumberProps) => {
    const [displayValue, setDisplayValue] = useState(0);
    const startTime = useRef<number | null>(null);

    interface AnimateCount {
      (timestamp: number): void;
    }

    const animateCount: AnimateCount = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress: number = Math.min(((timestamp as number) - (startTime.current as number)) / duration, 1);
      const easedProgress: number = easeOutQuad(progress);
      const currentValue: number = Math.floor(easedProgress * value);
      setDisplayValue(currentValue);
      
      if (progress < 1) {
      requestAnimationFrame(animateCount);
      }
    };

    const easeOutQuad: (x: number) => number = (x: number): number => {
      return 1 - (1 - x) * (1 - x);
    };

    useEffect(() => {
      if (countStarted) {
        requestAnimationFrame(animateCount);
      }
    }, [countStarted]);

    return (
      <span className={`text-3xl font-bold ${color}`}>
        {displayValue}{suffix}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
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
            <RiShieldCheckFill className="mr-2" />
            <span className="font-medium">TRUSTED PARTNER</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">500+ Healthcare Providers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serving medical practices and hospitals across all 50 states with proven revenue cycle solutions
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
              </div>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-md p-6 text-center ${stat.bgColor} hover:shadow-lg transition-all`}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>
              <CountUpNumber 
                value={stat.value} 
                suffix={stat.suffix} 
                color={stat.color}
                duration={stat.duration}
              />
              <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

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
              boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 transition-all duration-300 shadow-md"
          >
            Become Our Partner
            <RiUserHeartLine className="ml-3 transition-all duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustIndicators;