'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoIosTrendingUp, IoMdRibbon } from 'react-icons/io';
import {
  RiBillLine, RiCloseLine, RiCodeSSlashLine,
  RiHandCoinLine,
  RiLineChartLine,
  RiShieldCheckLine, RiShieldStarFill, RiUserHeartLine
} from 'react-icons/ri';

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices after component mounts
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia('(hover: none)').matches)
    );
  }, []);

  const services = {
    billing: {
      title: "Medical Billing & Claims Management",
      icon: <RiBillLine className="text-blue-600" />,
      items: [
        "Claims submission & scrubbing",
        "Denial management & appeals",
        "ERA/EFT enrollment",
        "Patient eligibility checks",
        "AR follow-ups & payment posting",
        "Financial reporting"
      ],
      description: "End-to-end medical billing solutions that maximize reimbursements and minimize denials through our proprietary claim scrubbing technology.",
      stats: [
        { value: "98%", label: "Clean Claim Rate" },
        { value: "24-48h", label: "Filing Speed" }
      ]
    },
    coding: {
      title: "Medical Coding",
      icon: <RiCodeSSlashLine className="text-green-600" />,
      items: [
        "ICD-10, CPT, HCPCS coding",
        "Audits & compliance reviews",
        "Specialty-specific coding",
        "Documentation improvement",
        "Coding education & training"
      ],
      description: "Certified coders ensure accurate, compliant coding that maximizes legitimate reimbursement and minimizes audit risk.",
      stats: [
        { value: "99.5%", label: "Accuracy" },
        { value: "50+", label: "Specialties" }
      ]
    },
    rcm: {
      title: "Revenue Cycle Management",
      icon: <RiLineChartLine className="text-purple-600" />,
      items: [
        "End-to-end RCM solutions",
        "Performance analytics",
        "Process optimization",
        "Regulatory compliance",
        "Custom reporting"
      ],
      description: "Comprehensive RCM services that streamline your revenue cycle from patient registration to final payment posting.",
      stats: [
        { value: "27%", label: "Avg. Revenue Increase" },
        { value: "15", label: "Day AR Reduction" }
      ]
    },
    compliance: {
      title: "HIPAA Compliance",
      icon: <RiShieldCheckLine className="text-red-600" />,
      items: [
        "Security risk assessments",
        "Policy development",
        "Staff training",
        "Audit preparation",
        "Breach notification"
      ],
      description: "Protect your practice with our comprehensive HIPAA compliance solutions tailored to healthcare providers.",
      stats: [
        { value: "100%", label: "Compliance Rate" },
        { value: "24/7", label: "Security Monitoring" }
      ]
    },
    practice: {
      title: "Practice Management",
      icon: <RiUserHeartLine className="text-teal-600" />,
      items: [
        "Workflow optimization",
        "Staff training",
        "Patient flow analysis",
        "Appointment scheduling",
        "Performance benchmarking"
      ],
      description: "Optimize your practice operations to improve patient experience and staff productivity.",
      stats: [
        { value: "40%", label: "Efficiency Gain" },
        { value: "95%", label: "Patient Satisfaction" }
      ]
    },
    consulting: {
      title: "Revenue Recovery",
      icon: <RiHandCoinLine className="text-amber-600" />,
      items: [
        "Underpayment identification",
        "Contract analysis",
        "Payer negotiations",
        "Lost revenue recovery",
        "Fee schedule optimization"
      ],
      description: "Our experts identify and recover revenue you didn't know you were missing from underpayments and denials.",
      stats: [
        { value: "$2.8M", label: "Avg. Recovery" },
        { value: "30%", label: "Underpayments Found" }
      ]
    }
  };

  const handleCardInteraction = (key: string) => {
    if (isTouchDevice) {
      // For touch devices, toggle on click
      setActiveCard(activeCard === key ? null : key);
    } else {
      // For non-touch devices, show on hover
      setActiveCard(key);
    }
  };

  const resetActiveCard = () => {
    if (!isTouchDevice) {
      setActiveCard(null);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
          >
            <RiShieldStarFill className="mr-2" />
            <span className="font-medium">Financially Focused</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Comprehensive
            </span> Healthcare Revenue Solutions
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimize your financial performance with our specialized services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              onMouseEnter={() => handleCardInteraction(key)}
              onMouseLeave={resetActiveCard}
              onClick={() => isTouchDevice && handleCardInteraction(key)}
              className="relative"
            >
              <motion.div
                initial={false}
                animate={{
                  height: activeCard === key ? 'auto' : '180px',
                  transition: { type: "spring", damping: 25, stiffness: 100 }
                }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border ${activeCard === key ? 'border-blue-500' : 'border-gray-200'
                  }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <AnimatePresence>
                    {activeCard === key ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4"
                      >
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start text-gray-600 text-sm"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex gap-3">
                          {service.stats.map((stat, i) => (
                            <div key={i} className="bg-blue-50 px-3 py-2 rounded-lg">
                              <p className="text-blue-600 font-bold">{stat.value}</p>
                              <p className="text-xs text-gray-600">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        {isTouchDevice && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCard(null);
                            }}
                            className="mt-4 text-blue-600 font-medium flex items-center"
                          >
                            <RiCloseLine className="mr-2" />
                            Close
                          </button>
                        )}
                      </motion.div>
                    ) : (
                      <motion.ul
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                      >
                        {service.items.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start text-gray-600 text-sm">
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                        {service.items.length > 3 && (
                          <li className="text-blue-500 text-sm font-medium mt-2">
                            +{service.items.length - 3} more services
                          </li>
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
            Explore All Services
            <RiArrowRightLine className="ml-3" />
          </button>
        </div> */}
        <div className="mt-6 flex justify-center space-x-4">
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
              <span>Learn More About RCM</span>
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
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;