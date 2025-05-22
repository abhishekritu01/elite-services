// 'use client';
// import { motion } from 'framer-motion';
// import { FaChartLine, FaFileInvoice, FaShieldAlt, FaUserMd, FaMobileAlt, FaHandHoldingUsd } from 'react-icons/fa';
// import { RiMoneyDollarCircleFill } from 'react-icons/ri';
// import { IoMdAnalytics } from 'react-icons/io';
// import { GiHealthIncrease } from 'react-icons/gi';
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';

// const page = () => {
//   const services = [
//     {
//       icon: <RiMoneyDollarCircleFill className="text-4xl" />,
//       title: "Revenue Cycle Management",
//       description: "End-to-end revenue cycle services from patient registration to final payment",
//       features: [
//         "Patient eligibility verification",
//         "Charge capture & coding audits",
//         "Claims submission (EDI & paper)",
//         "Denial management & appeals",
//         "Payment posting & reconciliation",
//         "Custom financial reporting"
//       ],
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: <FaFileInvoice className="text-4xl" />,
//       title: "Medical Billing & Claims",
//       description: "Accurate claim preparation and timely submission for faster reimbursements",
//       features: [
//         "CPT, ICD-10, and HCPCS coding",
//         "Claims scrubbing (error correction)",
//         "ERA/EFT enrollment",
//         "Secondary claim filing"
//       ],
//       color: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: <FaShieldAlt className="text-4xl" />,
//       title: "Medical Coding",
//       description: "Precise coding by certified professionals for compliance and accuracy",
//       features: [
//         "Inpatient & outpatient coding",
//         "Specialty-specific coding",
//         "Quarterly compliance audits"
//       ],
//       color: "from-emerald-500 to-emerald-600"
//     },
//     {
//       icon: <FaUserMd className="text-4xl" />,
//       title: "Credentialing",
//       description: "Get enrolled with payers quickly to start billing faster",
//       features: [
//         "Payer application processing",
//         "Recredentialing & updates",
//         "CAQH maintenance",
//         "Insurance panel contracting"
//       ],
//       color: "from-amber-500 to-amber-600"
//     },
//     {
//       icon: <FaMobileAlt className="text-4xl" />,
//       title: "Telehealth Billing",
//       description: "Stay compliant with evolving telemedicine billing rules",
//       features: [
//         "HIPAA-compliant virtual visit coding",
//         "Modifier usage for telehealth",
//         "Payer-specific rule updates"
//       ],
//       color: "from-rose-500 to-rose-600"
//     },
//     {
//       icon: <FaHandHoldingUsd className="text-4xl" />,
//       title: "AR Recovery",
//       description: "Recover outstanding claims and improve cash flow",
//       features: [
//         "Aged AR analysis",
//         "Follow-up with payers",
//         "Denial appeals",
//         "Patient balance collection"
//       ],
//       color: "from-indigo-500 to-indigo-600"
//     }
//   ];

//   const benefits = [
//     {
//       icon: <GiHealthIncrease className="text-3xl" />,
//       title: "Focus on Patient Care",
//       description: "Spend more time with patients while we handle your billing"
//     },
//     {
//       icon: <IoMdAnalytics className="text-3xl" />,
//       title: "Data-Driven Decisions",
//       description: "Get actionable insights to optimize your revenue cycle"
//     },
//     {
//       icon: <FaChartLine className="text-3xl" />,
//       title: "Maximize Revenue",
//       description: "Increase collections and reduce denials"
//     }
//   ];

//   return (
//   <>
//   <NavBar />
//     <div className="bg-gradient-to-b from-gray-50 to-white mt-12">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Your Revenue Cycle Partner
//               </span>
//               <br />
//               From Claims to Checks
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive medical billing and RCM services that maximize your reimbursements while you focus on patient care.
//             </p>
//           </motion.div>
//         </div>
        
//         {/* Animated background elements */}
//         <motion.div 
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             rotate: [0, 5, 0]
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"
//         />
//         <motion.div 
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 50, 0],
//             rotate: [0, -5, 0]
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 5
//           }}
//           className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-100 opacity-20 blur-xl"
//         />
//       </div>

//       {/* Benefits Section */}
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
//               }}
//               className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
//             >
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 {benefit.icon}
//               </div>
//               <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{benefit.title}</h3>
//               <p className="text-gray-600 text-center">{benefit.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Tailored solutions to optimize your revenue cycle and reduce administrative burden
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
//               }}
//               className="group relative overflow-hidden rounded-xl"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
//               <div className="relative z-10 p-8 h-full flex flex-col">
//                 <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
//                 <p className="text-white/90 mb-6">{service.description}</p>
                
//                 <div className="mt-auto">
//                   <h4 className="text-white font-medium mb-3">Key Features:</h4>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start text-white/90">
//                         <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               <motion.div
//                 initial={{ height: 0 }}
//                 whileHover={{ height: "100%" }}
//                 className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm overflow-hidden"
//               >
//                 <div className="p-6 text-white">
//                   <h3 className="font-bold mb-2">Ideal For:</h3>
//                   <p className="text-sm opacity-90">
//                     {service.title === "Revenue Cycle Management" && "Hospitals, clinics, and large practices seeking full-cycle revenue optimization"}
//                     {service.title === "Medical Billing & Claims" && "Small practices, solo providers, and specialty clinics"}
//                     {service.title === "Medical Coding" && "Providers experiencing denials due to coding issues"}
//                     {service.title === "Credentialing" && "New practices, expanding clinics, or providers switching employers"}
//                     {service.title === "Telehealth Billing" && "Practices offering remote care or hybrid services"}
//                     {service.title === "AR Recovery" && "Practices with high outstanding receivables or unresolved denials"}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-white mb-6"
//           >
//             Ready to Transform Your Revenue Cycle?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
//           >
//             Get a free consultation to discover how we can optimize your billing processes and increase your revenue.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             <motion.button
//               whileHover={{ 
//                 scale: 1.05,
//                 backgroundColor: "#fff",
//                 color: "#4f46e5"
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg shadow-lg"
//             >
//               Get Your Free Consultation →
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//   </>
//   );
// };

// export default page;














'use client';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

 
import { BsGraphUpArrow } from 'react-icons/bs';
import {
  FaArrowRight,
  FaChevronRight,
  FaFileInvoice,
  FaHandHoldingUsd,
  FaMobileAlt,
  FaShieldAlt, FaUserMd
} from 'react-icons/fa';
import { GiCash, GiHealthIncrease } from 'react-icons/gi';
import { IoMdAnalytics, IoMdRocket } from 'react-icons/io';
import { RiArrowRightUpLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ServicesPage = () => {
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  const services = [
    {
      icon: <RiMoneyDollarCircleFill />,
      title: "Revenue Cycle Management",
      description: "End-to-end revenue cycle services from patient registration to final payment",
      features: [
        "Patient eligibility verification",
        "Charge capture & coding audits",
        "Claims submission (EDI & paper)",
        "Denial management & appeals",
        "Payment posting & reconciliation",
        "Custom financial reporting"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaFileInvoice />,
      title: "Medical Billing & Claims",
      description: "Accurate claim preparation and timely submission for faster reimbursements",
      features: [
        "CPT, ICD-10, and HCPCS coding",
        "Claims scrubbing (error correction)",
        "ERA/EFT enrollment",
        "Secondary claim filing"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaShieldAlt />,
      title: "Medical Coding",
      description: "Precise coding by certified professionals for compliance and accuracy",
      features: [
        "Inpatient & outpatient coding",
        "Specialty-specific coding",
        "Quarterly compliance audits"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaUserMd />,
      title: "Credentialing",
      description: "Get enrolled with payers quickly to start billing faster",
      features: [
        "Payer application processing",
        "Recredentialing & updates",
        "CAQH maintenance",
        "Insurance panel contracting"
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaMobileAlt />,
      title: "Telehealth Billing",
      description: "Stay compliant with evolving telemedicine billing rules",
      features: [
        "HIPAA-compliant virtual visit coding",
        "Modifier usage for telehealth",
        "Payer-specific rule updates"
      ],
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "AR Recovery",
      description: "Recover outstanding claims and improve cash flow",
      features: [
        "Aged AR analysis",
        "Follow-up with payers",
        "Denial appeals",
        "Patient balance collection"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: <GiHealthIncrease />,
      title: "Focus on Patient Care",
      description: "Spend more time with patients while we handle your billing",
      animation: { rotate: [0, 5, -5, 0] }
    },
    {
      icon: <IoMdAnalytics />,
      title: "Data-Driven Decisions",
      description: "Get actionable insights to optimize your revenue cycle",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: <BsGraphUpArrow />,
      title: "Maximize Revenue",
      description: "Increase collections and reduce denials",
      animation: { y: [0, -10, 0] }
    }
  ];

  // Floating particles background component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-10"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    );
  };

  return (
   <>
   <NavBar />
   {
    isClient && (
         <div ref={containerRef} className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <ParticleBackground />
      <motion.div 
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-100 opacity-10 blur-xl"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 rounded-full inline-block shadow-2xl">
                <GiCash className="text-5xl text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
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
                Your Revenue Cycle Partner
              </motion.span>
              <br />
              From <span className="text-blue-600">Claims</span> to <span className="text-purple-600">Checks</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Comprehensive medical billing and RCM services that maximize your reimbursements while you focus on patient care.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#4f46e5",
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg flex items-center mx-auto"
              >
                Get Started <RiArrowRightUpLine className="ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <motion.div
            animate={{
              scaleX: [0, 1.2, 1],
              originX: 0
            }}
            transition={{ duration: 1 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&ldquo;t just manage your billing—we transform your revenue cycle into a growth engine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <motion.div
                animate={benefit.animation}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto text-white"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <motion.div
            animate={{
              scaleX: [0, 1.2, 1],
              originX: 0
            }}
            transition={{ duration: 1 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to optimize your revenue cycle and reduce administrative burden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative overflow-hidden rounded-2xl shadow-xl h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <motion.div
                  animate={{
                    rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredService === index ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 1 }}
                  className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm text-white"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/90 mb-6">{service.description}</p>
                
                <div className="mt-auto">
                  <h4 className="text-white font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: -20 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: i * 0.05 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-white/90"
                      >
                        <motion.svg 
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0]
                          }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <AnimatePresence>
                {hoveredService === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="p-6 text-white">
                      <h3 className="font-bold mb-2">Ideal For:</h3>
                      <p className="text-sm opacity-90">
                        {service.title === "Revenue Cycle Management" && "Hospitals, clinics, and large practices seeking full-cycle revenue optimization"}
                        {service.title === "Medical Billing & Claims" && "Small practices, solo providers, and specialty clinics"}
                        {service.title === "Medical Coding" && "Providers experiencing denials due to coding issues"}
                        {service.title === "Credentialing" && "New practices, expanding clinics, or providers switching employers"}
                        {service.title === "Telehealth Billing" && "Practices offering remote care or hybrid services"}
                        {service.title === "AR Recovery" && "Practices with high outstanding receivables or unresolved denials"}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-sm font-medium flex items-center"
                      >
                        Learn more <FaChevronRight className="ml-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <ParticleBackground />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Clean Claim Rate" },
              { value: "40%", label: "Faster Payments" },
              { value: "85%", label: "Denial Recovery" },
              { value: "100%", label: "HIPAA Compliance" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm text-center"
              >
                <motion.p
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0 rgba(255,255,255,0)"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-xl"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Revenue Cycle?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Get a free consultation to discover how we can optimize your billing processes and increase your revenue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#4f46e5"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center"
              >
                Get Your Free Consultation <IoMdRocket className="ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "transparent",
                  borderColor: "#fff"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-xl font-bold text-lg flex items-center justify-center"
              >
                See Case Studies <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    )
   }
    <Footer />
    {/* Footer */}
   </>
  );
};

export default ServicesPage;