'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  FaChartLine,
  FaClinicMedical,
  FaHandHoldingUsd,
  FaHeadset,
  FaRegChartBar,
  FaRegClock,
  FaRegLightbulb,
  FaShieldAlt,
  FaUserTie
} from 'react-icons/fa';
import { IoIosTrendingUp, IoMdRibbon } from 'react-icons/io';
import {
  RiMedalFill,
  RiPulseFill,
  RiShieldStarFill
} from 'react-icons/ri';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const stats = [
    {
      value: "14+",
      label: "Years Experience",
      icon: <FaClinicMedical className="text-white" />,
      bgColor: "bg-blue-600",
      hoverText: "Trusted by hundreds of practices nationwide",
      decoration: <IoMdRibbon className="absolute -right-2 -top-2 text-yellow-400 text-2xl" />
    },
    {
      value: "100%",
      label: "Clean Claims",
      icon: <FaChartLine className="text-white" />,
      bgColor: "bg-green-600",
      hoverText: "Industry-leading first-pass acceptance rate",
      decoration: <RiShieldStarFill className="absolute -right-2 -top-2 text-white text-xl" />
    },
    {
      value: "500+",
      label: "Providers",
      icon: <FaUserTie className="text-white" />,
      bgColor: "bg-purple-600",
      hoverText: "Serving practices across all specialties",
      decoration: <RiPulseFill className="absolute -right-2 -top-2 text-white text-xl" />
    },
    {
      value: "24/7",
      label: "Support",
      icon: <FaHeadset className="text-white" />,
      bgColor: "bg-orange-600",
      hoverText: "Dedicated account managers always available",
      decoration: <RiMedalFill className="absolute -right-2 -top-2 text-white text-xl" />
    }
  ];

  const benefits = [
    {
      icon: <FaUserTie className="text-blue-600" />,
      text: "Certified Experts",
      description: "Our team holds AAPC and AHIMA certifications"
    },
    {
      icon: <FaHandHoldingUsd className="text-green-600" />,
      text: "No Hidden Fees",
      description: "Transparent pricing with no surprises"
    },
    {
      icon: <FaShieldAlt className="text-purple-600" />,
      text: "HIPAA Secure",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: <FaRegClock className="text-amber-600" />,
      text: "Fast Turnaround",
      description: "Claims submitted"
    },
    {
      icon: <FaRegChartBar className="text-red-600" />,
      text: "Real-time Reporting",
      description: "Dashboard with live financial metrics"
    },
    {
      icon: <FaRegLightbulb className="text-indigo-600" />,
      text: "Smart Technology",
      description: "AI-powered claim scrubbing"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with animated gradient text */}
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
            transition={{ type: "spring" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
          >
            <RiShieldStarFill className="mr-2" />
            <span className="font-medium">TRUSTED PARTNER</span>
          </motion.div>

           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Why Healthcare 
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Proven results and exceptional service for practices of all sizes
          </motion.p>
        </motion.div>

        {/* Side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Image with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative ">
            <div className="relative rounded-2xl overflow-hidden aspect-video  md:aspect-[calc(4*3+1)/4] lg:aspect-[calc(4*3+1)/16]  shadow-xl border-8 border-white">
              <Image
                src="/elite/undraw_join_6quk.svg"
                alt="Medical billing expertise"
                layout="fill"
                objectFit="fill"
                className="hover:scale-105 transition-transform duration-500"
              />

              {/* Floating badge on image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-100 z-10"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FaChartLine className="text-blue-600" />
                  </div>
                  <div>
                    {/* <p className="text-xs text-gray-500">Average</p> */}
                    <p className="font-bold text-gray-900">Revenue ↑</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            {/* Stats grid with flip animation */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative h-40"
                >
                  <motion.div
                    className={`absolute inset-0 p-6 rounded-xl shadow-md ${stat.bgColor} text-white`}
                    animate={{
                      rotateY: hoveredStat === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        {stat.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                        <p className="text-sm font-medium">{stat.label}</p>
                      </div>
                      {stat.decoration}
                    </div>
                  </motion.div>

                  <motion.div
                    className={`absolute inset-0 p-6 rounded-xl shadow-md bg-white text-gray-800`}
                    animate={{
                      rotateY: hoveredStat === index ? 0 : 180,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="h-full flex items-center">
                      <p className="text-sm">{stat.hoverText}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Benefits with staggered animation */}
            <motion.div className="mb-10">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-gray-900 mb-4"
              >
                Key Advantages:
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-3">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{benefit.text}</h4>
                        <p className="text-xs text-gray-500 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA with shine effect */}
            <div className='flex justify-center'>
              <div className="mt-6 flex flex-col w-84 justify-center space-x-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-sm md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
                >
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
                  </span>

                  <span className="relative flex items-center">
                    <span>Get Started Today</span>
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
                      <IoIosTrendingUp className="text-xl" />
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
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="text-center sm:text-left text-sm text-gray-500 mt-4 flex items-center justify-center sm:justify-start"
                >
                  <RiMedalFill className="text-yellow-400 mr-2" />
                  Trusted by leading healthcare organizations
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;