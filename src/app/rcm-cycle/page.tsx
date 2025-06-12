// 'use client'
// import { motion } from 'framer-motion'
// import {
//   FaShieldAlt,
//   FaChartLine,
//   FaMoneyBillWave,
//   FaClock,
//   FaExchangeAlt,
//   FaFileInvoiceDollar,
//   FaHandHoldingUsd,
//   FaUserCheck
// } from 'react-icons/fa'
// import { GiCash, GiHealthNormal } from 'react-icons/gi'
// import { useState } from 'react'
// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'

// const page = () => {
//   const [activeTab, setActiveTab] = useState('overview')

//   const stats = [
//     { value: "30-50%", label: "Faster Payments", icon: <FaClock className="text-teal-500" /> },
//     { value: "95%+", label: "Clean Claim Rate", icon: <FaFileInvoiceDollar className="text-emerald-500" /> },
//     { value: "40-60%", label: "Reduced Denials", icon: <FaExchangeAlt className="text-violet-500" /> },
//     { value: "15-25%", label: "Revenue Increase", icon: <GiCash className="text-amber-400" /> }
//   ]

//   const features = [
//     {
//       icon: <FaUserCheck className="text-2xl text-teal-500" />,
//       title: "Patient Registration",
//       description: "Automated eligibility verification and demographic capture to start the revenue cycle right",
//       benefits: ["Real-time insurance validation", "Reduced registration errors", "Complete patient profiles"]
//     },
//     {
//       icon: <GiHealthNormal className="text-2xl text-emerald-500" />,
//       title: "Charge Capture",
//       description: "Comprehensive clinical documentation and coding automation",
//       benefits: ["AI-assisted coding", "Reduced missed charges", "Compliant documentation"]
//     },
//     {
//       icon: <FaFileInvoiceDollar className="text-2xl text-violet-500" />,
//       title: "Claims Submission",
//       description: "Intelligent claim scrubbing before submission to payers",
//       benefits: ["98% first-pass acceptance", "Automated corrections", "EDI integration"]
//     },
//     {
//       icon: <FaExchangeAlt className="text-2xl text-amber-400" />,
//       title: "Denial Management",
//       description: "Predictive analytics to prevent and resolve claim denials",
//       benefits: ["Root cause analysis", "Automated appeals", "Denial trend reporting"]
//     },
//     {
//       icon: <FaHandHoldingUsd className="text-2xl text-indigo-500" />,
//       title: "Payment Posting",
//       description: "Automated reconciliation of payments with expected amounts",
//       benefits: ["ERA/EFT automation", "Underpayment detection", "Contract compliance"]
//     },
//     {
//       icon: <FaChartLine className="text-2xl text-rose-500" />,
//       title: "Analytics & Reporting",
//       description: "Real-time financial performance dashboards",
//       benefits: ["KPIs tracking", "Revenue leakage alerts", "Customizable reports"]
//     }
//   ]

//   return (
//     <>
//       <NavBar />
//       <div className="bg-gradient-to-b from-gray-50 to-gray-100">
//         {/* Hero Section */}
//         <section className="relative py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white overflow-hidden">
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]"></div>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 relative">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center"
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                 Revolutionize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Revenue Cycle</span>
//               </h1>
//               <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
//                 End-to-end revenue cycle management that maximizes collections and minimizes hassles
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Stats Bar */}
//         <section className="py-12 bg-white shadow-sm -mt-1">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   whileHover={{ y: -5 }}
//                   className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
//                 >
//                   <div className="flex justify-center mb-3">
//                     <div className="p-3 bg-gray-50 rounded-full">
//                       {stat.icon}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
//                   <p className="text-gray-600 mt-1">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="py-16 sm:py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             {/* Tab Navigation */}
//             <div className="flex flex-wrap border-b border-gray-200 mb-12">
//               {['overview', 'features', 'benefits', 'technology'].map((tab) => (
//                 <motion.button
//                   key={tab}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 font-medium text-sm sm:text-base border-b-2 transition-colors ${activeTab === tab
//                     ? 'border-teal-500 text-teal-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="min-h-[500px]">
//               {activeTab === 'overview' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div>
//                       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//                         Complete Revenue Cycle <span className="text-teal-600">Optimization</span>
//                       </h2>
//                       <p className="text-lg text-gray-600 mb-6">
//                         Our Revenue Cycle Management solution transforms your financial operations from patient access through final payment. We leverage AI and automation to streamline every step, ensuring maximum reimbursement with minimal administrative burden.
//                       </p>
//                       <div className="space-y-4">
//                         {[
//                           "End-to-end claims processing from registration to payment",
//                           "Reduced claim denials and improved cash flow",
//                           "Compliance with healthcare regulations",
//                           "Real-time analytics and performance tracking"
//                         ].map((item, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             whileHover={{ x: 5 }}
//                             className="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-100"
//                           >
//                             <div className="flex-shrink-0 mt-1">
//                               <div className="w-3 h-3 rounded-full bg-teal-500"></div>
//                             </div>
//                             <p className="ml-3 text-gray-700">{item}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
//                       <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg overflow-hidden">
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-teal-50 to-emerald-50">
//                           <div className="text-center p-6">
//                             <FaChartLine className="mx-auto text-5xl text-teal-400 mb-4" />
//                             <h3 className="text-xl font-semibold text-gray-800">RCM Process Flow</h3>
//                             <p className="text-gray-500 mt-2">Visualization of revenue cycle workflow</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === 'features' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
//                     Comprehensive <span className="text-teal-600">RCM Features</span>
//                   </h2>
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{ y: -5 }}
//                         className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-teal-200 transition-all"
//                       >
//                         <div className="flex items-center mb-4">
//                           <div className="p-3 rounded-lg bg-teal-50 mr-4">
//                             {feature.icon}
//                           </div>
//                           <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
//                         </div>
//                         <p className="text-gray-600 mb-4">{feature.description}</p>
//                         <ul className="space-y-2">
//                           {feature.benefits.map((benefit, i) => (
//                             <li key={i} className="flex items-start">
//                               <div className="flex-shrink-0 mt-1">
//                                 <div className="w-2 h-2 rounded-full bg-teal-500"></div>
//                               </div>
//                               <span className="ml-2 text-gray-700">{benefit}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === 'benefits' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid lg:grid-cols-2 gap-12">
//                     <div>
//                       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//                         Tangible <span className="text-teal-600">Business Benefits</span>
//                       </h2>
//                       <p className="text-lg text-gray-600 mb-8">
//                         Our RCM solution delivers measurable improvements to your practice's financial health and operational efficiency.
//                       </p>

//                       <div className="space-y-6">
//                         {[
//                           {
//                             icon: <FaMoneyBillWave className="text-teal-500 text-xl" />,
//                             title: "Increased Revenue",
//                             description: "Capture more billable services and reduce leakage with automated charge capture"
//                           },
//                           {
//                             icon: <FaShieldAlt className="text-emerald-500 text-xl" />,
//                             title: "Reduced Risk",
//                             description: "Stay compliant with ever-changing regulations and payer requirements"
//                           },
//                           {
//                             icon: <FaClock className="text-violet-500 text-xl" />,
//                             title: "Improved Efficiency",
//                             description: "Automate manual processes to free up staff for patient-focused work"
//                           }
//                         ].map((item, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             whileHover={{ x: 5 }}
//                             className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200"
//                           >
//                             <div className="p-3 rounded-lg bg-gray-50 mr-4">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                               <p className="text-gray-600 mt-1">{item.description}</p>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
//                       <h3 className="text-xl font-semibold text-gray-800 mb-6">Performance Metrics</h3>
//                       <div className="space-y-6">
//                         {[
//                           { label: "Days in A/R", value: "≤ 30 days", improvement: "45% reduction" },
//                           { label: "Clean Claim Rate", value: "≥ 95%", improvement: "20% increase" },
//                           { label: "Denial Rate", value: "≤ 5%", improvement: "60% reduction" },
//                           { label: "Collection Rate", value: "≥ 98%", improvement: "15% increase" }
//                         ].map((metric, index) => (
//                           <div key={index}>
//                             <div className="flex justify-between mb-1">
//                               <span className="text-gray-700">{metric.label}</span>
//                               <span className="font-semibold text-teal-600">{metric.value}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-2.5">
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: `${Math.random() * 60 + 40}%` }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 1, delay: index * 0.2 }}
//                                 className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
//                               ></motion.div>
//                             </div>
//                             <div className="text-right mt-1">
//                               <span className="text-sm text-gray-500">{metric.improvement} vs industry average</span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === 'technology' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div>
//                       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//                         Powered by <span className="text-teal-600">Advanced Technology</span>
//                       </h2>
//                       <p className="text-lg text-gray-600 mb-6">
//                         Our RCM platform combines artificial intelligence, machine learning, and automation to deliver superior financial results.
//                       </p>

//                       <div className="space-y-6">
//                         {[
//                           {
//                             title: "AI-Powered Coding",
//                             description: "Natural language processing reads clinical documentation and suggests optimal codes"
//                           },
//                           {
//                             title: "Predictive Analytics",
//                             description: "Identifies potential denials before claims are submitted"
//                           },
//                           {
//                             title: "Automated Workflows",
//                             description: "Streamlines processes from registration to payment posting"
//                           },
//                           {
//                             title: "Blockchain Security",
//                             description: "Ensures complete data integrity and protection"
//                           }
//                         ].map((item, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             whileHover={{ x: 5 }}
//                             className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
//                           >
//                             <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
//                             <p className="text-gray-600">{item.description}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl p-8 text-white">
//                       <h3 className="text-2xl font-bold mb-6">Why Our Technology Wins</h3>
//                       <ul className="space-y-4">
//                         {[
//                           "Real-time eligibility verification with 99.9% accuracy",
//                           "Automated claim scrubbing catches errors before submission",
//                           "Machine learning improves with every claim processed",
//                           "Cloud-based platform with 99.99% uptime",
//                           "HIPAA-compliant with enterprise-grade security"
//                         ].map((item, index) => (
//                           <li key={index} className="flex items-start">
//                             <div className="flex-shrink-0 mt-1">
//                               <div className="w-2 h-2 rounded-full bg-white"></div>
//                             </div>
//                             <span className="ml-3">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.h2 
//               className="text-3xl sm:text-4xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               Ready to Transform Your Revenue Cycle?
//             </motion.h2>
//             <motion.p 
//               className="text-xl opacity-90 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Schedule a demo to see how our RCM solution can boost your collections and streamline operations.
//             </motion.p>
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
//             >
//               Request a Demo
//             </motion.button>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default page















'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
    FaChartLine,
    FaClock,
    FaExchangeAlt,
    FaFileInvoiceDollar,
    FaHandHoldingUsd,
    FaMoneyBillWave,
    FaShieldAlt,
    FaUserCheck
} from 'react-icons/fa'
import {
  RiUserAddFill,
  RiVerifiedBadgeFill,
  RiContactsBook2Fill,
  RiFileShield2Fill,
  RiStethoscopeFill,
  RiSendPlaneFill,
  RiBugFill,
  RiMoneyDollarCircleFill,
  RiToolsFill,
  RiFolderShield2Fill,
  RiExchangeFundsFill,
  RiMessage2Fill
} from "react-icons/ri";
import { FaFile } from 'react-icons/fa6'
import { GiCash, GiHealthNormal } from 'react-icons/gi'
import { IoMdRibbon } from 'react-icons/io'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Page = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const y = useTransform(scrollYProgress, [0, 1], [0, 100])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
    const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

    const stats = [
        { value: "30-50%", label: "Faster Payments", icon: <FaClock className="text-blue-500" /> },
        { value: "100%", label: "Clean Claim Rate", icon: <FaFileInvoiceDollar className="text-purple-500" /> },
        { value: "40-60%", label: "Reduced Denials", icon: <FaExchangeAlt className="text-blue-600" /> },
        { value: "15-25%", label: "Revenue Increase", icon: <GiCash className="text-blue-400" /> }
    ]

    const benefits = [
        {
          title: "1. Patient Registration",
          description: "AI-powered forms collect patient details with speed and precision, reducing manual entry errors. But every submission is reviewed by trained staff to ensure it’s complete, accurate, and fully compliant.",
          icon: <RiUserAddFill className="text-sky-600" />
        },
        {
          title: "2. Eligibility & Benefits Verification",
          description: "Real-time insurance checks are run by AI tools connected to payer databases. They flag discrepancies, check co-pays, and spot authorization needs instantly. Our team follows up, explains benefits to patients, and clears the path for care.",
          icon: <RiVerifiedBadgeFill className="text-emerald-600" />
        },
        {
          title: "3. Data Entry & Patient Demographics",
          description: "Machine learning tools populate demographic and insurance fields with accuracy. Yet, our billing professionals double-check for nuance — especially in complex payer scenarios — to avoid downstream errors.",
          icon: <RiContactsBook2Fill className="text-indigo-600" />
        },
        {
          title: "4. Referral & Authorization",
          description: "AI tracks payer rules and alerts staff to required referrals or authorizations. Our team handles the paperwork, contacts referring physicians, and ensures approvals are in place — before the patient even arrives.",
          icon: <RiFileShield2Fill className="text-yellow-600" />
        },
        {
          title: "5. Coding & Billing",
          description: "AI suggests medical codes from documentation using natural language processing. Certified coders then review, adjust, and finalize based on payer-specific rules and clinical accuracy.",
          icon: <RiStethoscopeFill className="text-blue-600" />
        },
        {
          title: "6. Claim Submission",
          description: "Automation scrubs claims for common errors and submits them electronically. Meanwhile, our specialists review edge cases, resolve exceptions, and track every batch for timely delivery.",
          icon: <RiSendPlaneFill className="text-green-600" />
        },
        {
          title: "7. Clearinghouse Denials",
          description: "AI flags denial reasons and suggests corrections. Our billing team verifies the cause, makes necessary adjustments, and resubmits promptly to keep revenue flowing.",
           icon: <RiBugFill className="text-orange-500" />
        },
        {
          title: "8. Payment Posting",
          description: "Intelligent systems auto-match payments with claims using EOBs. For mismatches, partial payments, or unusual cases, our experts step in to investigate and resolve.",
           icon: <RiMoneyDollarCircleFill className="text-lime-600" />
        },
         {
          title: "9. Denial Management",
          description: "Denied or rejected claims are reviewed, corrected, and resubmitted. Root cause analysis is done to minimize repeat denials.",
          icon: <RiToolsFill className="text-teal-600" />
        },
        {
          title: "Appeal Procedure",
          description: "If a claim is incorrectly denied, an appeal is prepared and submitted with supporting documentation to contest the payer’s decision.",
          icon: <RiFolderShield2Fill className="text-orange-600" />
        },
        {
          title: "11. Secondary Filing",
          description: "AI routes secondary claims once primary processing is complete. Human oversight ensures correct policy application, accurate balances, and proper coordination of benefits.",
          icon: <RiExchangeFundsFill className="text-violet-600" />
        },
        {
          title: "12. Patient Billing",
          description: "AI generates easy-to-understand statements and sends automated reminders through multiple channels. Our support team is always available for one-on-one assistance, guiding patients with empathy and clarity.",
          icon: <RiMessage2Fill className="text-cyan-600" />
        }
        
      ];

    const features = [
        {
            icon: <FaUserCheck className="text-2xl text-blue-500" />,
            title: "Patient Registration",
            description: "Automated eligibility verification and demographic capture to start the revenue cycle right",
            benefits: ["Real-time insurance validation", "Reduced registration errors", "Complete patient profiles"]
        },
        {
            icon: <GiHealthNormal className="text-2xl text-purple-500" />,
            title: "Charge Capture",
            description: "Comprehensive clinical documentation and coding automation",
            benefits: ["AI-assisted coding", "Reduced missed charges", "Compliant documentation"]
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-blue-600" />,
            title: "Claims Submission",
            description: "Intelligent claim scrubbing before submission to payers",
            benefits: ["98% first-pass acceptance", "Automated corrections", "EDI integration"]
        },
        {
            icon: <FaExchangeAlt className="text-2xl text-blue-400" />,
            title: "Denial Management",
            description: "Predictive analytics to prevent and resolve claim denials",
            benefits: ["Root cause analysis", "Automated appeals", "Denial trend reporting"]
        },
        {
            icon: <FaHandHoldingUsd className="text-2xl text-indigo-500" />,
            title: "Payment Posting",
            description: "Automated reconciliation of payments with expected amounts",
            benefits: ["ERA/EFT automation", "Underpayment detection", "Contract compliance"]
        },
        {
            icon: <FaChartLine className="text-2xl text-blue-500" />,
            title: "Analytics & Reporting",
            description: "Real-time financial performance dashboards",
            benefits: ["KPIs tracking", "Revenue leakage alerts", "Customizable reports"]
        }
    ]

    return (
        <>
            {isClient && (
                <div>
                    <NavBar />
                    <div ref={containerRef} className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-12">
                        {/* Animated Background Elements */}
                        <motion.div
                            style={{ y }}
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                        >
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-blue-200 opacity-20"
                                    style={{
                                        width: Math.random() * 20 + 10,
                                        height: Math.random() * 20 + 10,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, (Math.random() - 0.5) * 100],
                                        x: [0, (Math.random() - 0.5) * 100],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: Math.random() * 10 + 10,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            ))}
                        </motion.div>

                        <div className="max-w-7xl mx-auto relative">
                            {/* Hero Section */}
                            <motion.div
                                style={{ opacity }}
                                className="text-center mb-20"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="inline-block mb-8"
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 rounded-full inline-block shadow-lg">
                                        <FaShieldAlt className="text-5xl text-white" />
                                    </div>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                                >
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Revenue Cycle Management
                                    </span> <br />
                                    Efficiency <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        You Can Trust
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                                >
                                    Optimized financial operations built into everything we do with your revenue cycle
                                </motion.p>
                            </motion.div>

                            {/* Stats Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 mb-20 border border-gray-200/50 backdrop-blur-sm relative overflow-hidden"
                            >
                                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            whileHover={{
                                                y: -10,
                                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                            }}
                                            className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-300 transition-all"
                                        >
                                            <div className="flex justify-center mb-3">
                                                <div className="p-3 bg-blue-50 rounded-full">
                                                    {stat.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                            <p className="text-gray-600 mt-1">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Benefits Section */}
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                                      <div className="text-center mb-16">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                          Our Full
                                          <motion.span
                                                          animate={{
                                                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                                          }} transition={{
                                                            duration: 10,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                          }}
                                                          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
                                                        >  Revenue Cycle Management (RCM)</motion.span>
                                        </h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                          Driven by AI. Refined by Human Expertise.
                                        </p>
                                      </div>
                            
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {benefits.map((benefit, index) => (
                                          <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            onHoverStart={() => setHoveredBenefit(index)}
                                            onHoverEnd={() => setHoveredBenefit(null)}
                                            className={`p-6 rounded-xl border-2 transition-all ${hoveredBenefit === index
                                              ? 'border-blue-500 bg-blue-50 shadow-lg'
                                              : 'border-gray-200 bg-white'
                                              }`}
                                          >
                                            <div className="flex items-start">
                                              <motion.div
                                                animate={{
                                                  scale: hoveredBenefit === index ? 1.1 : 1,
                                                  rotate: hoveredBenefit === index ? 5 : 0
                                                }}
                                                className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4"
                                              >
                                                {benefit.icon}
                                              </motion.div>
                                              <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                                <p className="text-gray-600">{benefit.description}</p>
                                              </div>
                                            </div>
                                          </motion.div>
                                        ))}
                                      </div>
                            
                                      {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                          "Dedicated Account Managers",
                                          "Custom Workflow Integrations",
                                          "Scalable Solutions",
                                          "Flexible Engagement Models",
                                          "Real-Time Dashboards",
                                          "Proactive Denial Prevention"
                                        ].map((item, index) => (
                                          <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                            className="flex items-center bg-gray-50 px-4 py-3 rounded-lg"
                                          >
                                            <RiCheckboxCircleFill className="text-green-500 mr-3" />
                                            <span className="text-gray-700">{item}</span>
                                          </motion.div>
                                        ))}
                                      </div> */}
                                    </div>

                            {/* Main Content */}
                            <div className="mb-20">
                                {/* Tab Navigation */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="flex flex-wrap border-b border-gray-200 mb-12"
                                >
                                    {['overview', 'features', 'benefits', 'technology'].map((tab) => (
                                        <motion.button
                                            key={tab}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-6 py-3 font-medium text-sm sm:text-base border-b-2 transition-colors ${activeTab === tab
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </motion.button>
                                    ))}
                                </motion.div>

                                {/* Tab Content */}
                                <div className="min-h-[500px]">
                                    {activeTab === 'overview' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                                <div>
                                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                                        Complete Revenue Cycle <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Optimization</span>
                                                    </h2>
                                                    <p className="text-lg text-gray-600 mb-6">
                                                        Our Revenue Cycle Management solution transforms your financial operations from patient access through final payment. We leverage AI and automation to streamline every step, ensuring maximum reimbursement with minimal administrative burden.
                                                    </p>
                                                    <div className="space-y-4">
                                                        {[
                                                            "End-to-end claims processing from registration to payment",
                                                            "Reduced claim denials and improved cash flow",
                                                            "Compliance with healthcare regulations",
                                                            "Real-time analytics and performance tracking"
                                                        ].map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.1 }}
                                                                whileHover={{ x: 5 }}
                                                                className="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                                                            >
                                                                <div className="flex-shrink-0 mt-1">
                                                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                                                </div>
                                                                <p className="ml-3 text-gray-700">{item}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                                                    <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg overflow-hidden">
                                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
                                                            <div className="text-center p-6">
                                                                <FaChartLine className="mx-auto text-5xl text-blue-400 mb-4" />
                                                                <h3 className="text-xl font-semibold text-gray-800">RCM Process Flow</h3>
                                                                <p className="text-gray-500 mt-2">Visualization of revenue cycle workflow</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'features' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                                                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RCM Features</span>
                                            </h2>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {features.map((feature, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{
                                                            y: -5,
                                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                                        }}
                                                        className="group relative overflow-hidden rounded-xl h-64"
                                                    >
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.icon.props.className.includes('blue') ? 'from-blue-500 to-blue-600' : feature.icon.props.className.includes('purple') ? 'from-purple-500 to-purple-600' : 'from-indigo-500 to-indigo-600'} flex flex-col items-center justify-center p-6 text-white transition-all duration-300 group-hover:scale-110`}>
                                                            <motion.div
                                                                animate={{
                                                                    rotate: [0, 5, -5, 0],
                                                                    scale: [1, 1.1, 1]
                                                                }}
                                                                transition={{
                                                                    duration: 6,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse"
                                                                }}
                                                                className="mb-4"
                                                            >
                                                                {feature.icon}
                                                            </motion.div>
                                                            <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
                                                            <p className="text-center opacity-90 text-sm">{feature.description}</p>
                                                        </div>
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileHover={{ height: "100%" }}
                                                            className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm overflow-hidden"
                                                        >
                                                            <div className="p-6 text-white">
                                                                <h3 className="font-bold mb-2">Key Benefits</h3>
                                                                <ul className="text-sm opacity-90 space-y-2">
                                                                    {feature.benefits.map((benefit, i) => (
                                                                        <li key={i} className="flex items-start">
                                                                            <div className="flex-shrink-0 mt-1.5">
                                                                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                                            </div>
                                                                            <span className="ml-2">{benefit}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'benefits' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="grid lg:grid-cols-2 gap-12">
                                                <div>
                                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                                        Tangible <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business Benefits</span>
                                                    </h2>
                                                    <p className="text-lg text-gray-600 mb-8">
                                                        Our RCM solution delivers measurable improvements to your practice&apos;s financial health and operational efficiency.
                                                    </p>

                                                    <div className="space-y-6">
                                                        {[
                                                            {
                                                                icon: <FaMoneyBillWave className="text-blue-500 text-xl" />,
                                                                title: "Increased Revenue",
                                                                description: "Capture more billable services and reduce leakage with automated charge capture"
                                                            },
                                                            {
                                                                icon: <FaShieldAlt className="text-purple-500 text-xl" />,
                                                                title: "Reduced Risk",
                                                                description: "Stay compliant with ever-changing regulations and payer requirements"
                                                            },
                                                            {
                                                                icon: <FaClock className="text-blue-600 text-xl" />,
                                                                title: "Improved Efficiency",
                                                                description: "Automate manual processes to free up staff for patient-focused work"
                                                            }
                                                        ].map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.1 }}
                                                                whileHover={{ x: 5 }}
                                                                className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                                                            >
                                                                <div className="p-3 rounded-lg bg-blue-50 mr-4">
                                                                    {item.icon}
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                                                    <p className="text-gray-600 mt-1">{item.description}</p>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                                                    <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
                                                    <div className="space-y-6">
                                                        {[
                                                            { label: "Days in A/R", value: "≤ 30 days", improvement: "45% reduction" },
                                                            { label: "Clean Claim Rate", value: "≥ 95%", improvement: "20% increase" },
                                                            { label: "Denial Rate", value: "≤ 5%", improvement: "60% reduction" },
                                                            { label: "Collection Rate", value: "≥ 98%", improvement: "15% increase" }
                                                        ].map((metric, index) => (
                                                            <div key={index}>
                                                                <div className="flex justify-between mb-1">
                                                                    <span className="opacity-90">{metric.label}</span>
                                                                    <span className="font-semibold">{metric.value}</span>
                                                                </div>
                                                                <div className="w-full bg-blue-500/30 rounded-full h-2.5">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 1, delay: index * 0.2 }}
                                                                        className="h-2.5 rounded-full bg-white"
                                                                    ></motion.div>
                                                                </div>
                                                                <div className="text-right mt-1">
                                                                    <span className="text-sm opacity-80">{metric.improvement} vs industry average</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'technology' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                                <div>
                                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                                        Powered by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Advanced Technology</span>
                                                    </h2>
                                                    <p className="text-lg text-gray-600 mb-6">
                                                        Our RCM platform combines artificial intelligence, machine learning, and automation to deliver superior financial results.
                                                    </p>

                                                    <div className="space-y-6">
                                                        {[
                                                            {
                                                                title: "AI-Powered Coding",
                                                                description: "Natural language processing reads clinical documentation and suggests optimal codes"
                                                            },
                                                            {
                                                                title: "Predictive Analytics",
                                                                description: "Identifies potential denials before claims are submitted"
                                                            },
                                                            {
                                                                title: "Automated Workflows",
                                                                description: "Streamlines processes from registration to payment posting"
                                                            },
                                                            {
                                                                title: "Blockchain Security",
                                                                description: "Ensures complete data integrity and protection"
                                                            }
                                                        ].map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.1 }}
                                                                whileHover={{ x: 5 }}
                                                                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                                                            >
                                                                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                                                                <p className="text-gray-600">{item.description}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                                                    <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg overflow-hidden">
                                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
                                                            <div className="text-center p-6">
                                                                <FaShieldAlt className="mx-auto text-5xl text-blue-400 mb-4" />
                                                                <h3 className="text-xl font-semibold text-gray-800">Technology Stack</h3>
                                                                <p className="text-gray-500 mt-2">Secure and compliant infrastructure</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Compliance Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-200/50 text-center mb-20"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            '0 0 0 0 rgba(59, 130, 246, 0)',
                                            '0 0 0 20px rgba(59, 130, 246, 0.1)',
                                            '0 0 0 0 rgba(59, 130, 246, 0)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity
                                    }}
                                    className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-8"
                                >
                                    <FaShieldAlt className="text-5xl text-blue-600" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Certified Revenue Cycle Solution</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                                    We maintain rigorous standards through automated security protocols, regular audits,
                                    and continuous optimization. Your financial health is our top priority.
                                </p>

                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
                                >
                                    <span className="absolute inset-0 overflow-hidden">
                                        <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
                                    </span>

                                    <span className="relative flex items-center">
                                        <span>View Performance Reports</span>
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
                                            <FaFile className="text-xl" />
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

                            {/* CTA Section */}
                            <motion.section
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden"
                            >
                                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
                                <div className="max-w-4xl mx-auto text-center relative z-10">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                        Ready to Optimize Your Revenue Cycle?
                                    </h2>
                                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                                        Schedule a demo to see how our RCM solution can boost your collections and streamline operations.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Request a Demo
                                    </motion.button>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
            }
        </>
    )
}

export default Page