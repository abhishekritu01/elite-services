// 'use client'
// import { motion } from 'framer-motion'
// import { 
//   FaRobot, 
//   FaChartLine, 
//   FaMoneyBillWave, 
//   FaBrain, 
//   FaExpandArrowsAlt,
//   FaClock,
//   FaShieldAlt,
//   FaPercentage
// } from 'react-icons/fa'
// import { GiProgression } from 'react-icons/gi'
// import { useState } from 'react'

// const AIBillingBenefits = () => {
//   const [activeBenefit, setActiveBenefit] = useState(0)

//   const benefits = [
//     {
//       icon: <FaRobot className="text-4xl" />,
//       title: "Process Automation",
//       description: "Automate repetitive tasks like data entry, coding, and claim submissions to accelerate billing cycles and minimize administrative workload.",
//       stats: "Reduces manual work by up to 70%",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: <FaShieldAlt className="text-4xl" />,
//       title: "Precision Coding",
//       description: "Advanced analysis of medical records ensures flawless coding, dramatically decreasing claim rejections and payment delays.",
//       stats: "Improves coding accuracy by 95%",
//       color: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: <FaMoneyBillWave className="text-4xl" />,
//       title: "Cost Efficiency",
//       description: "Optimized workflows and error reduction significantly cut operational expenses tied to traditional billing methods.",
//       stats: "Lowers billing costs by 30-50%",
//       color: "from-green-500 to-green-600"
//     },
//     {
//       icon: <FaBrain className="text-4xl" />,
//       title: "Revenue Intelligence",
//       description: "Predictive models forecast income, detect billing patterns, and recommend enhancements to maximize reimbursement.",
//       stats: "Boosts revenue by 15-25%",
//       color: "from-indigo-500 to-indigo-600"
//     },
//     {
//       icon: <GiProgression className="text-4xl" />,
//       title: "Seamless Scaling",
//       description: "Our system effortlessly manages high-volume billing data, adapting perfectly to practices of any scale.",
//       stats: "Handles 10x more claims with same resources",
//       color: "from-amber-500 to-amber-600"
//     },
//     {
//       icon: <FaClock className="text-4xl" />,
//       title: "Instant Eligibility Checks",
//       description: "Real-time verification of patient coverage details ensures perfect claim submission on the first attempt.",
//       stats: "Reduces eligibility denials by 90%",
//       color: "from-rose-500 to-rose-600"
//     }
//   ]

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Transform Your Revenue Cycle With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered Billing</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Intelligent automation that revolutionizes medical billing operations
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Navigation */}
//           <div className="space-y-4">
//             {benefits.map((benefit, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setActiveBenefit(index)}
//                 className={`w-full text-left p-6 rounded-xl transition-all ${activeBenefit === index 
//                   ? 'bg-white shadow-xl border border-gray-200/50' 
//                   : 'bg-gray-100 hover:bg-gray-50'}`}
//               >
//                 <div className="flex items-center">
//                   <div className={`bg-gradient-to-r ${benefit.color} p-3 rounded-lg mr-4`}>
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* Active Benefit Display */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               key={activeBenefit}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4 }}
//               className="h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/50"
//             >
//               <div className={`bg-gradient-to-r ${benefits[activeBenefit].color} p-8 text-white`}>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold">{benefits[activeBenefit].title}</h3>
//                     <p className="opacity-90 mt-2">{benefits[activeBenefit].stats}</p>
//                   </div>
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                       scale: [1, 1.1, 1]
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   >
//                     {benefits[activeBenefit].icon}
//                   </motion.div>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <p className="text-gray-700 text-lg mb-6">{benefits[activeBenefit].description}</p>
                
//                 <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
//                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                     <FaPercentage className="text-blue-500 mr-2" />
//                     Key Impact Areas
//                   </h4>
//                   <ul className="space-y-3">
//                     <motion.li 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start text-gray-600"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
//                       <span>Reduces claim processing time by 60-80%</span>
//                     </motion.li>
//                     <motion.li 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start text-gray-600"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></div>
//                       <span>Decreases denial rates significantly</span>
//                     </motion.li>
//                     <motion.li 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start text-gray-600"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
//                       <span>Improves staff productivity and satisfaction</span>
//                     </motion.li>
//                   </ul>
//                 </div>

//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200"
//                 >
//                   <div className="flex items-start">
//                     <FaChartLine className="text-blue-500 text-xl mt-1 mr-3" />
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Real-World Results</h4>
//                       <p className="text-gray-600 mt-1">
//                         Practices using our AI billing solutions typically see 20-40% faster reimbursements 
//                         and 15-30% higher collection rates within the first 90 days.
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

const AIBillingBenefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(0)

  const benefits = [
    {
      icon: <FaRobot className="text-2xl" />,
      title: "Process Automation",
      description: "Automate repetitive tasks to accelerate billing cycles and minimize workload.",
      stats: "Reduces manual work by 70%",
      color: "bg-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Precision Coding",
      description: "Ensures flawless coding, decreasing claim rejections and delays.",
      stats: "95% coding accuracy",
      color: "bg-purple-500"
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Cost Efficiency",
      description: "Optimized workflows and error reduction cut operational expenses.",
      stats: "30-50% lower costs",
      color: "bg-green-500"
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Revenue Intelligence",
      description: "Predictive models forecast income and maximize reimbursement.",
      stats: "15-25% revenue boost",
      color: "bg-indigo-500"
    },
    {
      icon: <GiProgression className="text-2xl" />,
      title: "Seamless Scaling",
      description: "Effortlessly manages high-volume billing for any practice size.",
      stats: "10x more claims",
      color: "bg-amber-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
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
                    {benefit.icon}
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
                    {benefits[activeBenefit].icon}
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