'use client';
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaVideo,
  FaFingerprint,
  FaBan,
  FaFileAlt,
  FaUserShield,
  FaKey,
  FaClipboardCheck
} from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HIPAACompliance = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  const securityFeatures = [
    {
      icon: <FaBan className="text-3xl" />,
      title: "Media Ban",
      description: "No recordable media allowed in facilities",
      bg: "from-red-500 to-red-600"
    },
    {
      icon: <FaFingerprint className="text-3xl" />,
      title: "Biometric Access",
      description: "Restricted area protection",
      bg: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: "24/7 Surveillance",
      description: "Continuous CCTV monitoring",
      bg: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: "Password Protected",
      description: "All systems secured at all times",
      bg: "from-green-500 to-green-600"
    }
  ];

  const hipaaPrinciples = [
    {
      icon: <FaUserShield className="text-2xl" />,
      title: "Privacy",
      description: "Your health information can't be shared without permission",
      color: "text-blue-600"
    },
    {
      icon: <FaKey className="text-2xl" />,
      title: "Security",
      description: "Records protected with encryption and access controls",
      color: "text-purple-600"
    },
    {
      icon: <FaEye className="text-2xl" />,
      title: "Access",
      description: "Right to see and request copies of your records",
      color: "text-green-600"
    },
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "Control",
      description: "You decide who gets to see your health info",
      color: "text-amber-600"
    }
  ];

  const benefits = [
    "Prevents unauthorized access to medical records",
    "Protects against cyber threats and data breaches",
    "Builds trust in the healthcare system",
    "Ensures transparency of patient rights",
    "Gives you control over your health information"
  ];

  return (
    <>
    <NavBar />
      {
        isClient && (
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
                    HIPAA Compliance
                  </span> <br />
                  You Can Trust. <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Privacy
                  </span>
                  {/* <span className="text-blue-600">Privacy</span> */}
                   You Can Count On.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Protection built into everything we do with your sensitive health information
                </motion.p>
              </motion.div>

              {/* What is HIPAA Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl p-8 mb-20 border border-gray-200/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">
                  What Is  
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> HIPAA</span> ?
                  {/* <span className="text-blue-600">HIPAA</span>? */}
                </h2>
                <div className="space-y-6 text-gray-600 relative z-10">
                  <p className="text-lg">
                    HIPAA stands for the <strong>Health Insurance Portability and Accountability Act of 1996</strong>.
                    It&ldquo;s a U.S. federal law designed to protect patients&ldquo; sensitive health information and improve
                    how healthcare information is shared and managed.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-50 p-6 rounded-xl border border-blue-200"
                  >
                    <p className="font-medium">
                      &ldquo;HIPAA compliance is built into everything we do. We work with sensitive health information,
                      so protecting it isn&ldquo;t just a requirement, it&ldquo;s a responsibility we take seriously.&ldquo;
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Core Principles */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                  The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Core Purpose</span> of HIPAA
                  {/* <span className="text-blue-600">Core Purpose</span>  */}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hipaaPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-blue-300 transition-all"
                    >
                      <div className={`${principle.color} mb-4`}>
                        {principle.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why HIPAA Matters */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-10 mb-20 text-white relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8">Why HIPAA Is Important</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-start"
                          >
                            <FaShieldAlt className="mt-1 mr-3 flex-shrink-0 opacity-90" />
                            <span className="opacity-90">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-bold mb-4">Your HIPAA Rights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FaFileAlt className="mt-1 mr-3 flex-shrink-0 opacity-90" />
                          <span>Access your health records</span>
                        </li>
                        <li className="flex items-start">
                          <FaFileAlt className="mt-1 mr-3 flex-shrink-0 opacity-90" />
                          <span>Request corrections</span>
                        </li>
                        <li className="flex items-start">
                          <FaFileAlt className="mt-1 mr-3 flex-shrink-0 opacity-90" />
                          <span>See who accessed your data</span>
                        </li>
                        <li className="flex items-start">
                          <FaFileAlt className="mt-1 mr-3 flex-shrink-0 opacity-90" />
                          <span>File complaints if privacy is violated</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Security Features */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                  Our <span className="text-blue-600">Security</span> Measures
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      className="group relative overflow-hidden rounded-xl h-64"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} flex flex-col items-center justify-center p-6 text-white transition-all duration-300 group-hover:scale-110`}>
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
                          <h3 className="font-bold mb-2">Additional Details</h3>
                          <p className="text-sm opacity-90">All our {feature.title.toLowerCase()} measures exceed HIPAA requirements</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Compliance Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-200/50 text-center"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">HIPAA Certified Compliance</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  We maintain full HIPAA compliance through rigorous security protocols, regular audits,
                  and continuous staff training. Your data protection is our top priority.
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
      <span>View Compliance Documentation</span>
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
        <FaFileAlt className="text-xl" />
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


                {/* <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#2563eb"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium inline-flex items-center"
                >
                  <FaFileAlt className="mr-2" />
                  View Compliance Documentation
                </motion.button> */}







                
              </motion.div>
            </div>
          </div>
        )
      }
       <Footer />
    </>
  );
};

export default HIPAACompliance;