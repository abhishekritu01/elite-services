'use client'
import { motion } from 'framer-motion'
import { 
  FaRobot, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaBrain, 
  FaShieldAlt,
  FaClock
} from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { useState } from 'react'
import React from 'react'

interface Benefit {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  stats: string
  color: string
  gradient: string
  iconColor: string
}

const AIBillingBenefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(0)

  const benefits: Benefit[] = [
    {
      icon: FaRobot,
      title: "Process Automation",
      description: "Automate repetitive tasks to accelerate billing cycles and minimize workload.",
      stats: "Reduces manual work by 70%",
      color: "text-white",
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-300"
    },
    {
      icon: FaShieldAlt,
      title: "Precision Coding",
      description: "Ensures flawless coding, decreasing claim rejections and delays.",
      stats: "100% coding accuracy",
      color: "text-white",
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-300"
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost Efficiency",
      description: "Optimized workflows and error reduction cut operational expenses.",
      stats: "30-50% lower costs",
      color: "text-white",
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-300"
    },
    {
      icon: FaBrain,
      title: "Revenue Intelligence",
      description: "Predictive models forecast income and maximize reimbursement.",
      stats: "15-25% revenue boost",
      color: "text-white",
      gradient: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-300"
    },
    {
      icon: GiProgression,
      title: "Seamless Scaling",
      description: "Effortlessly manages high-volume billing for any practice size.",
      stats: "10x more claims",
      color: "text-white",
      gradient: "from-amber-500 to-amber-600",
      iconColor: "text-amber-300"
    },
    {
      icon: FaClock,
      title: "Instant Eligibility",
      description: "Real-time verification ensures perfect claim submission.",
      stats: "90% fewer denials",
      color: "text-white",
      gradient: "from-rose-500 to-rose-600",
      iconColor: "text-rose-300"
    }
  ]

  const keyBenefits = [
    "60-80% faster claim processing",
    "Significantly lower denial rates",
    "Improved staff productivity",
    "Faster reimbursements"
  ]

  // Split benefits into two columns with alternating colors
  const column1 = [benefits[0], benefits[2], benefits[4]]; // Blue, Green, Amber
  const column2 = [benefits[1], benefits[3], benefits[5]]; // Purple, Indigo, Rose

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            AI-Powered Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Supercharges Revenue</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intelligent automation that transforms medical billing operations
          </p>
        </motion.div>

        {/* Benefits in two columns with gradient backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* First column - Blue, Green, Amber */}
          <div className="space-y-6">
            {column1.map((benefit, index) => {
              const globalIndex = index * 2; // 0, 2, 4
              return (
                <motion.div
                  key={globalIndex}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveBenefit(globalIndex)}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all ${activeBenefit === globalIndex ? 'ring-2 ring-white ring-offset-4' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-95`}></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg mr-4 bg-white bg-opacity-20 backdrop-blur-sm ${benefit.iconColor}`}>
                        <benefit.icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                        <p className="text-white text-opacity-90 mb-2">{benefit.description}</p>
                        <p className="text-sm font-medium text-white text-opacity-80">{benefit.stats}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second column - Purple, Indigo, Rose */}
          <div className="space-y-6">
            {column2.map((benefit, index) => {
              const globalIndex = (index * 2) + 1; // 1, 3, 5
              return (
                <motion.div
                  key={globalIndex}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveBenefit(globalIndex)}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all ${activeBenefit === globalIndex ? 'ring-2 ring-white ring-offset-4' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-95`}></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg mr-4 bg-white bg-opacity-20 backdrop-blur-sm ${benefit.iconColor}`}>
                        <benefit.icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                        <p className="text-white text-opacity-90 mb-2">{benefit.description}</p>
                        <p className="text-sm font-medium text-white text-opacity-80">{benefit.stats}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaChartLine className="text-blue-500 mr-3" />
              Key Benefits Across All Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-lg border border-gray-200"
                >
                  <div className={`w-3 h-3 rounded-full mb-3 ${[
                    'bg-blue-500',
                    'bg-purple-500',
                    'bg-green-500',
                    'bg-amber-500'
                  ][i]}`}></div>
                  <p className="font-medium text-gray-800">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100"
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaMoneyBillWave className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Proven Results</h4>
                  <p className="text-gray-600 mt-1">
                    Practices see faster reimbursements and 15-30% higher collections within time period.
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIBillingBenefits























// 'use client'
// import { motion } from 'framer-motion'
// import { 
//   FaRobot, 
//   FaChartLine, 
//   FaMoneyBillWave, 
//   FaBrain, 
//   FaShieldAlt,
//   FaClock
// } from 'react-icons/fa'
// import { GiProgression } from 'react-icons/gi'
// import { useState } from 'react'
// import React from 'react'

// interface Benefit {
//   icon: React.ComponentType<{ className?: string }>
//   title: string
//   description: string
//   stats: string
//   color: string
// }

// const AIBillingBenefits = () => {
//   const [activeBenefit, setActiveBenefit] = useState(0)

//   const benefits: Benefit[] = [
//     {
//       icon: FaRobot,
//       title: "Process Automation",
//       description: "Automate repetitive tasks to accelerate billing cycles and minimize workload.",
//       stats: "Reduces manual work by 70%",
//       color: "bg-blue-500"
//     },
//     {
//       icon: FaShieldAlt,
//       title: "Precision Coding",
//       description: "Ensures flawless coding, decreasing claim rejections and delays.",
//       stats: "100% coding accuracy",
//       color: "bg-purple-500"
//     },
//     {
//       icon: FaMoneyBillWave,
//       title: "Cost Efficiency",
//       description: "Optimized workflows and error reduction cut operational expenses.",
//       stats: "30-50% lower costs",
//       color: "bg-green-500"
//     },
//     {
//       icon: FaBrain,
//       title: "Revenue Intelligence",
//       description: "Predictive models forecast income and maximize reimbursement.",
//       stats: "15-25% revenue boost",
//       color: "bg-indigo-500"
//     },
//     {
//       icon: GiProgression,
//       title: "Seamless Scaling",
//       description: "Effortlessly manages high-volume billing for any practice size.",
//       stats: "10x more claims",
//       color: "bg-amber-500"
//     },
//     {
//       icon: FaClock,
//       title: "Instant Eligibility",
//       description: "Real-time verification ensures perfect claim submission.",
//       stats: "90% fewer denials",
//       color: "bg-rose-500"
//     }
//   ]

//   return (
//     <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             AI-Powered Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Supercharges Revenue</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Intelligent automation that transforms medical billing operations
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Navigation - Compact Cards */}
//           <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
//             {benefits.map((benefit, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setActiveBenefit(index)}
//                 className={`text-left p-4 rounded-lg transition-all ${activeBenefit === index 
//                   ? 'bg-white shadow-md border-l-4 border-blue-500' 
//                   : 'bg-gray-100 hover:bg-gray-50'}`}
//               >
//                 <div className="flex items-start">
//                   <div className={`${benefit.color} p-2 rounded-lg mr-3 text-white`}>
//                     <benefit.icon className="text-xl md:text-2xl" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">{benefit.stats}</p>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* Active Benefit - Compact Display */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               key={activeBenefit}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
//             >
//               <div className={`${benefits[activeBenefit].color} p-6 text-white`}>
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-bold">{benefits[activeBenefit].title}</h3>
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                       scale: [1, 1.05, 1]
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   >
//                     {React.createElement(benefits[activeBenefit].icon, { 
//             className: "text-2xl md:text-3xl" 
//           })}
//                   </motion.div>
//                 </div>
//                 <p className="mt-2 opacity-90">{benefits[activeBenefit].description}</p>
//               </div>
              
//               <div className="p-6">
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                     <FaChartLine className="text-blue-500 mr-2" />
//                     Key Benefits
//                   </h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {[
//                       "60-80% faster claim processing",
//                       "Significantly lower denial rates",
//                       "Improved staff productivity",
//                       "Faster reimbursements"
//                     ].map((item, i) => (
//                       <motion.li 
//                         key={i}
//                         whileHover={{ x: 3 }}
//                         className="flex items-start text-sm text-gray-600"
//                       >
//                         <div className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${[
//                           'bg-blue-500',
//                           'bg-purple-500',
//                           'bg-green-500',
//                           'bg-amber-500'
//                         ][i]}`}></div>
//                         <span>{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>

//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100"
//                 >
//                   {/* <div className="flex items-center">
//                     <div className="bg-blue-100 p-2 rounded-lg mr-3">
//                       <FaMoneyBillWave className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Proven Results</h4>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Practices see 20-40% faster reimbursements and 15-30% higher collections within 90 days.
//                       </p>
//                     </div>
//                   </div> */}
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AIBillingBenefits




// 'use client'
// import { motion } from 'framer-motion'
// import { 
//   FaRobot, 
//   FaChartLine, 
//   FaMoneyBillWave, 
//   FaBrain, 
//   FaShieldAlt,
//   FaClock
// } from 'react-icons/fa'
// import { GiProgression } from 'react-icons/gi'
// import { useState } from 'react'

// const AIBillingBenefits = () => {
//   const [activeBenefit, setActiveBenefit] = useState(0)

//   const benefits = [
//     {
//       icon: <FaRobot className="text-2xl" />,
//       title: "Process Automation",
//       description: "Automate repetitive tasks to accelerate billing cycles and minimize workload.",
//       stats: "Reduces manual work by 70%",
//       color: "bg-blue-500"
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "Precision Coding",
//       description: "Ensures flawless coding, decreasing claim rejections and delays.",
//       stats: "95% coding accuracy",
//       color: "bg-purple-500"
//     },
//     {
//       icon: <FaMoneyBillWave className="text-2xl" />,
//       title: "Cost Efficiency",
//       description: "Optimized workflows and error reduction cut operational expenses.",
//       stats: "30-50% lower costs",
//       color: "bg-green-500"
//     },
//     {
//       icon: <FaBrain className="text-2xl" />,
//       title: "Revenue Intelligence",
//       description: "Predictive models forecast income and maximize reimbursement.",
//       stats: "15-25% revenue boost",
//       color: "bg-indigo-500"
//     },
//     {
//       icon: <GiProgression className="text-2xl" />,
//       title: "Seamless Scaling",
//       description: "Effortlessly manages high-volume billing for any practice size.",
//       stats: "10x more claims",
//       color: "bg-amber-500"
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Instant Eligibility",
//       description: "Real-time verification ensures perfect claim submission.",
//       stats: "90% fewer denials",
//       color: "bg-rose-500"
//     }
//   ]

//   return (
//     <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             AI-Powered Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Supercharges Revenue</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Intelligent automation that transforms medical billing operations
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Navigation - Compact Cards */}
//           <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
//             {benefits.map((benefit, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setActiveBenefit(index)}
//                 className={`text-left p-4 rounded-lg transition-all ${activeBenefit === index 
//                   ? 'bg-white shadow-md border-l-4 border-blue-500' 
//                   : 'bg-gray-100 hover:bg-gray-50'}`}
//               >
//                 <div className="flex items-start">
//                   <div className={`${benefit.color} p-2 rounded-lg mr-3 text-white`}>
//                     {benefit.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">{benefit.stats}</p>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* Active Benefit - Compact Display */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               key={activeBenefit}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
//             >
//               <div className={`${benefits[activeBenefit].color} p-6 text-white`}>
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-bold">{benefits[activeBenefit].title}</h3>
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                       scale: [1, 1.05, 1]
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   >
//                     {benefits[activeBenefit].icon}
//                   </motion.div>
//                 </div>
//                 <p className="mt-2 opacity-90">{benefits[activeBenefit].description}</p>
//               </div>
              
//               <div className="p-6">
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                     <FaChartLine className="text-blue-500 mr-2" />
//                     Key Benefits
//                   </h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {[
//                       "60-80% faster claim processing",
//                       "Significantly lower denial rates",
//                       "Improved staff productivity",
//                       "Faster reimbursements"
//                     ].map((item, i) => (
//                       <motion.li 
//                         key={i}
//                         whileHover={{ x: 3 }}
//                         className="flex items-start text-sm text-gray-600"
//                       >
//                         <div className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${[
//                           'bg-blue-500',
//                           'bg-purple-500',
//                           'bg-green-500',
//                           'bg-amber-500'
//                         ][i]}`}></div>
//                         <span>{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>

//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100"
//                 >
//                   <div className="flex items-center">
//                     <div className="bg-blue-100 p-2 rounded-lg mr-3">
//                       <FaMoneyBillWave className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Proven Results</h4>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Practices see 20-40% faster reimbursements and 15-30% higher collections within 90 days.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AIBillingBenefits