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
}

const AIBillingBenefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(0)

  const benefits: Benefit[] = [
    {
      icon: FaRobot,
      title: "Process Automation",
      description: "Automate repetitive tasks to accelerate billing cycles and minimize workload.",
      stats: "Reduces manual work by 70%",
      color: "bg-blue-500"
    },
    {
      icon: FaShieldAlt,
      title: "Precision Coding",
      description: "Ensures flawless coding, decreasing claim rejections and delays.",
      stats: "100% coding accuracy",
      color: "bg-purple-500"
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost Efficiency",
      description: "Optimized workflows and error reduction cut operational expenses.",
      stats: "30-50% lower costs",
      color: "bg-green-500"
    },
    {
      icon: FaBrain,
      title: "Revenue Intelligence",
      description: "Predictive models forecast income and maximize reimbursement.",
      stats: "15-25% revenue boost",
      color: "bg-indigo-500"
    },
    {
      icon: GiProgression,
      title: "Seamless Scaling",
      description: "Effortlessly manages high-volume billing for any practice size.",
      stats: "10x more claims",
      color: "bg-amber-500"
    },
    {
      icon: FaClock,
      title: "Instant Eligibility",
      description: "Real-time verification ensures perfect claim submission.",
      stats: "90% fewer denials",
      color: "bg-rose-500"
    }
  ]

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation - Compact Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveBenefit(index)}
                className={`text-left p-4 rounded-lg transition-all ${activeBenefit === index 
                  ? 'bg-white shadow-md border-l-4 border-blue-500' 
                  : 'bg-gray-100 hover:bg-gray-50'}`}
              >
                <div className="flex items-start">
                  <div className={`${benefit.color} p-2 rounded-lg mr-3 text-white`}>
                    <benefit.icon className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{benefit.stats}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Benefit - Compact Display */}
          <div className="lg:col-span-2">
            <motion.div 
              key={activeBenefit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className={`${benefits[activeBenefit].color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{benefits[activeBenefit].title}</h3>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {React.createElement(benefits[activeBenefit].icon, { 
            className: "text-2xl md:text-3xl" 
          })}
                  </motion.div>
                </div>
                <p className="mt-2 opacity-90">{benefits[activeBenefit].description}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FaChartLine className="text-blue-500 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "60-80% faster claim processing",
                      "Significantly lower denial rates",
                      "Improved staff productivity",
                      "Faster reimbursements"
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 3 }}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${[
                          'bg-blue-500',
                          'bg-purple-500',
                          'bg-green-500',
                          'bg-amber-500'
                        ][i]}`}></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <FaMoneyBillWave className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Proven Results</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Practices see 20-40% faster reimbursements and 15-30% higher collections within 90 days.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
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