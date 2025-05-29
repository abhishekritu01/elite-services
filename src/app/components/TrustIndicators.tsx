'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaChevronRight,
  FaClinicMedical,
  FaHospital,
  FaUserMd
} from 'react-icons/fa';
import {
  IoIosTrendingUp,
  IoMdRibbon
} from 'react-icons/io';
import {
  RiLineChartLine,
  RiMapPin2Fill,
  RiMedalFill,
  RiShieldCheckFill,
  RiStarFill,
  RiTimerFlashFill,
  RiUserHeartLine
} from 'react-icons/ri';

const TrustIndicators = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [countStarted, setCountStarted] = useState(false);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

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
      description: "Reduced claim denials by 40% with our RCM solutions",
      achievements: [
        "40% fewer denials",
        "28% faster payments",
        "98% clean claim rate"
      ]
    },
    { 
      name: "City Medical Center", 
      icon: <FaHospital className="text-green-500" />,
      description: "Achieved 98% clean claim rate in just 3 months",
      achievements: [
        "98% claim accuracy",
        "15 day AR reduction",
        "Full compliance"
      ]
    },
    { 
      name: "Advanced Care Physicians", 
      icon: <FaUserMd className="text-purple-500" />,
      description: "Reduced payment turnaround from 45 to 15 days",
      achievements: [
        "65% faster payments",
        "30% revenue increase",
        "24/7 support"
      ]
    }
  ];

  const stats = [
    { 
      value: 100, 
      suffix: "%", 
      label: "Claim Accuracy", 
      icon: <RiShieldCheckFill className="text-blue-500" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      duration: 800,
      description: "Industry-leading first-pass acceptance rate",
      showValue: true
    },
    { 
      value: 27, 
      suffix: "%", 
      label: "Revenue Increase", 
      icon: <RiLineChartLine className="text-green-500 text -4xl" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      duration: 600,
      description: "Average practice revenue growth",
      showValue: false,
      showGraph: true,
      largeIcon: true
    },
    { 
      value: 15, 
      suffix: "Days", 
      label: "Payment Time Frame", 
      icon: <RiTimerFlashFill className="text-purple-500 text -4xl" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      duration: 500,
      description: "Electronic submission- 15 days       Paper submission- 30 days",
      showValue: false,
      largeIcon: true
    },
    { 
      value: 50, 
      suffix: "States", 
      label: "Nationwide Coverage", 
      icon: <RiMapPin2Fill className="text-amber-500" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      duration: 400,
      description: "Serving providers across all US states",
      showValue: true
    }
  ];

  interface CountUpNumberProps {
    value: number;
    suffix: string;
    color: string;
    duration: number;
    showValue: boolean;
  }

  const CountUpNumber = ({ value, suffix, color, duration, showValue }: CountUpNumberProps) => {
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
      if (countStarted && showValue) {
        requestAnimationFrame(animateCount);
      }
    }, [countStarted, showValue]);
    if (!showValue) return null;

    return (
      <motion.span 
        className={`text-4xl font-bold ${color}`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {displayValue}{suffix}
      </motion.span>
    );
  };

  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: star * 0.1 }}
                className="text-amber-400"
              >
                <RiStarFill />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4 relative overflow-hidden"
          >
            <motion.div 
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
            <RiShieldCheckFill className="mr-2" />
            <span className="font-medium relative z-10 ">TRUSTED BY 500+ PROVIDERS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
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
            >
              Proven Results
            </motion.span> for Healthcare Organizations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Serving medical practices and hospitals across all 50 states with proven revenue cycle solutions
          </motion.p>
        </motion.div>

        {/* Interactive Client Cards */}
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
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 overflow-hidden"
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#3b82f6',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                onHoverStart={() => setHoveredClient(index)}
                onHoverEnd={() => setHoveredClient(null)}
                animate={{
                  zIndex: hoveredClient === index ? 10 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    animate={{
                      rotate: hoveredClient === index ? 10 : 0,
                      scale: hoveredClient === index ? 1.1 : 1
                    }}
                    className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4"
                  >
                    {client.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{client.description}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredClient === index ? 'auto' : 0,
                    opacity: hoveredClient === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">ACHIEVEMENTS:</h4>
                    <ul className="space-y-2">
                      {client.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: hoveredClient === index ? 0 : -20,
                            opacity: hoveredClient === index ? 1 : 0
                          }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <RiMedalFill className="text-amber-400 mr-2" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredClient === index ? 1 : 0 }}
                  className="absolute bottom-4 right-4"
                >
                  <FaChevronRight className="text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
       <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <motion.div
              className={`${stat.bgColor} rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              animate={{
                zIndex: hoveredStat === index ? 10 : 1
              }}
            >
              <motion.div
                animate={{
                  rotate: hoveredStat === index ? [0, 10, -10, 0] : 0,
                  scale: hoveredStat === index ? 1.1 : 1
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className={`${stat.largeIcon ? 'w-20 h-20' : 'w-16 h-16'} rounded-full bg-white flex items-center justify-center mb-6 shadow-sm`}
              >
                {stat.icon}
              </motion.div>
              
              <CountUpNumber 
                value={stat.value} 
                suffix={stat.suffix} 
                color={stat.color}
                duration={stat.duration}
                showValue={stat.showValue || false}
              />
              
              <h3 className="text-lg font-bold text-gray-800 mt-4">{stat.label}</h3>
              <p className="text-gray-600 mt-2 text-sm">{stat.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              <span>Become Our Partner</span>
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
                <RiUserHeartLine className="text-xl" />
              </motion.span>
            </span>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 -top-4 text-blue-300 opacity-30 text-6xl"
            >
              <IoMdRibbon />
            </motion.div>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-500 mt-4 flex items-center justify-center"
          >
            <IoIosTrendingUp className="text-green-500 mr-2" />
            <span>Join 500+ satisfied healthcare providers</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustIndicators;






// 'use client';

// import { motion, useAnimation, useInView } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import {
//   FaChevronRight,
//   FaClinicMedical,
//   FaHospital,
//   FaUserMd
// } from 'react-icons/fa';
// import {
//   IoIosTrendingUp,
//   IoMdRibbon
// } from 'react-icons/io';
// import {
//   RiLineChartLine,
//   RiMapPin2Fill,
//   RiMedalFill,
//   RiShieldCheckFill,
//   RiStarFill,
//   RiTimerFlashFill,
//   RiUserHeartLine
// } from 'react-icons/ri';

// const TrustIndicators = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [countStarted, setCountStarted] = useState(false);
//   const [hoveredClient, setHoveredClient] = useState<number | null>(null);
//   const [hoveredStat, setHoveredStat] = useState<number | null>(null);

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//       setCountStarted(true);
//     }
//   }, [controls, isInView]);

//   const clients = [
//     { 
//       name: "HealthPlus Clinic", 
//       icon: <FaClinicMedical className="text-blue-500" />,
//       description: "Reduced claim denials by 40% with our RCM solutions",
//       achievements: [
//         "40% fewer denials",
//         "28% faster payments",
//         "98% clean claim rate"
//       ]
//     },
//     { 
//       name: "City Medical Center", 
//       icon: <FaHospital className="text-green-500" />,
//       description: "Achieved 98% clean claim rate in just 3 months",
//       achievements: [
//         "98% claim accuracy",
//         "15 day AR reduction",
//         "Full compliance"
//       ]
//     },
//     { 
//       name: "Advanced Care Physicians", 
//       icon: <FaUserMd className="text-purple-500" />,
//       description: "Reduced payment turnaround from 45 to 15 days",
//       achievements: [
//         "65% faster payments",
//         "30% revenue increase",
//         "24/7 support"
//       ]
//     }
//   ];

//   const stats = [
//     { 
//       value: 100, 
//       suffix: "%", 
//       label: "Claim Accuracy", 
//       icon: <RiShieldCheckFill className="text-blue-500" />,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50",
//       duration: 800,
//       description: "Industry-leading first-pass acceptance rate"
//     },
//     { 
//       value: 27, 
//       suffix: "%", 
//       label: "Revenue Increase", 
//       icon: <RiLineChartLine className="text-green-500" />,
//       color: "text-green-600",
//       bgColor: "bg-green-50",
//       duration: 600,
//       description: "Average practice revenue growth"
//     },
//     { 
//       value: 15, 
//       suffix: "Days", 
//       label: "Payment Time Frame", 
//       icon: <RiTimerFlashFill className="text-purple-500" />,
//       color: "text-purple-600",
//       bgColor: "bg-purple-50",
//       duration: 500,
//       description: "Electronic submission- 15 days       Paper submission- 30 days"
//     },
//     { 
//       value: 50, 
//       suffix: "States", 
//       label: "Nationwide Coverage", 
//       icon: <RiMapPin2Fill className="text-amber-500" />,
//       color: "text-amber-600",
//       bgColor: "bg-amber-50",
//       duration: 400,
//       description: "Serving providers across all US states"
//     }
//   ];

//   interface CountUpNumberProps {
//     value: number;
//     suffix: string;
//     color: string;
//     duration: number;
//   }

//   const CountUpNumber = ({ value, suffix, color, duration }: CountUpNumberProps) => {
//     const [displayValue, setDisplayValue] = useState(0);
//     const startTime = useRef<number | null>(null);

//     interface AnimateCount {
//       (timestamp: number): void;
//     }

//     const animateCount: AnimateCount = (timestamp: number) => {
//       if (!startTime.current) startTime.current = timestamp;
//       const progress: number = Math.min(((timestamp as number) - (startTime.current as number)) / duration, 1);
//       const easedProgress: number = easeOutQuad(progress);
//       const currentValue: number = Math.floor(easedProgress * value);
//       setDisplayValue(currentValue);
      
//       if (progress < 1) {
//         requestAnimationFrame(animateCount);
//       }
//     };

//     const easeOutQuad: (x: number) => number = (x: number): number => {
//       return 1 - (1 - x) * (1 - x);
//     };

//     useEffect(() => {
//       if (countStarted) {
//         requestAnimationFrame(animateCount);
//       }
//     }, [countStarted]);

//     return (
//       <motion.span 
//         className={`text-4xl font-bold ${color}`}
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {displayValue}{suffix}
//       </motion.span>
//     );
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//             delay: 5
//           }}
//           className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"
//         />
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header with floating badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 relative"
//         >
//           <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-2">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <motion.div
//                 key={star}
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: star * 0.1 }}
//                 className="text-amber-400"
//               >
//                 <RiStarFill />
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.div 
//             initial={{ scale: 0.9 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring" }}
//             className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4 relative overflow-hidden"
//           >
//             <motion.div 
//               animate={{
//                 x: ['-100%', '100%'],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
//             />
//             <RiShieldCheckFill className="mr-2" />
//             <span className="font-medium relative z-10 ">TRUSTED BY 500+ PROVIDERS</span>
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             <motion.span
//               animate={{
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
//             >
//               Proven Results
//             </motion.span> for Healthcare Organizations
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//           >
//             Serving medical practices and hospitals across all 50 states with proven revenue cycle solutions
//           </motion.p>
//         </motion.div>

//         {/* Interactive Client Cards */}
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
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="relative"
//             >
//               <motion.div
//                 className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 overflow-hidden"
//                 initial={{ scale: 1 }}
//                 whileHover={{ 
//                   scale: 1.02,
//                   borderColor: '#3b82f6',
//                   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
//                 }}
//                 onHoverStart={() => setHoveredClient(index)}
//                 onHoverEnd={() => setHoveredClient(null)}
//                 animate={{
//                   zIndex: hoveredClient === index ? 10 : 1
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <motion.div 
//                     animate={{
//                       rotate: hoveredClient === index ? 10 : 0,
//                       scale: hoveredClient === index ? 1.1 : 1
//                     }}
//                     className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4"
//                   >
//                     {client.icon}
//                   </motion.div>
//                   <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
//                 </div>
                
//                 <p className="text-gray-600 mb-4">{client.description}</p>
                
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{
//                     height: hoveredClient === index ? 'auto' : 0,
//                     opacity: hoveredClient === index ? 1 : 0
//                   }}
//                   className="overflow-hidden"
//                 >
//                   <div className="pt-4 border-t border-gray-100">
//                     <h4 className="text-sm font-semibold text-gray-500 mb-2">ACHIEVEMENTS:</h4>
//                     <ul className="space-y-2">
//                       {client.achievements.map((achievement, i) => (
//                         <motion.li
//                           key={i}
//                           initial={{ x: -20, opacity: 0 }}
//                           animate={{
//                             x: hoveredClient === index ? 0 : -20,
//                             opacity: hoveredClient === index ? 1 : 0
//                           }}
//                           transition={{ delay: i * 0.1 + 0.3 }}
//                           className="flex items-center text-sm text-gray-700"
//                         >
//                           <RiMedalFill className="text-amber-400 mr-2" />
//                           {achievement}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: hoveredClient === index ? 1 : 0 }}
//                   className="absolute bottom-4 right-4"
//                 >
//                   <FaChevronRight className="text-blue-400" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="relative"
//             >
//               <motion.div
//                 className={`${stat.bgColor} rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300`}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
//                 }}
//                 onHoverStart={() => setHoveredStat(index)}
//                 onHoverEnd={() => setHoveredStat(null)}
//                 animate={{
//                   zIndex: hoveredStat === index ? 10 : 1
//                 }}
//               >
//                 <motion.div
//                   animate={{
//                     rotate: hoveredStat === index ? [0, 10, -10, 0] : 0,
//                     scale: hoveredStat === index ? 1.1 : 1
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     delay: 0.5
//                   }}
//                   className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm"
//                 >
//                   {stat.icon}
//                 </motion.div>
                
//                 <CountUpNumber 
//                   value={stat.value} 
//                   suffix={stat.suffix} 
//                   color={stat.color}
//                   duration={stat.duration}
//                 />
                
//                 <h3 className="text-lg font-bold text-gray-800 mt-4">{stat.label}</h3>
//                 <p className="text-gray-600 mt-2 text-sm">{stat.description}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Floating CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
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
//               <span>Become Our Partner</span>
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
//                 <RiUserHeartLine className="text-xl" />
//               </motion.span>
//             </span>
            
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="absolute -right-4 -top-4 text-blue-300 opacity-30 text-6xl"
//             >
//               <IoMdRibbon />
//             </motion.div>
//           </motion.button>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             className="text-gray-500 mt-4 flex items-center justify-center"
//           >
//             <IoIosTrendingUp className="text-green-500 mr-2" />
//             <span>Join 500+ satisfied healthcare providers</span>
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TrustIndicators;