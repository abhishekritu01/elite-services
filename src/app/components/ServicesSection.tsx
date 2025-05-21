'use client';

import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiBillLine,
  RiCodeSSlashLine,
  RiHandCoinLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiUserHeartLine
} from 'react-icons/ri';

const ServicesSection = () => {
  const services = {
    billing: {
      title: "Medical Billing & Claims Management",
      icon: <RiBillLine className="text-blue-600 text-2xl" />,
      items: [
        "Claims submission & scrubbing",
        "Denial management & appeals",
        "ERA/EFT enrollment",
        "Patient eligibility checks",
        "AR follow-ups & payment posting",
        "Financial reporting"
      ]
    },
    coding: {
      title: "Medical Coding",
      icon: <RiCodeSSlashLine className="text-green-600 text-2xl" />,
      items: [
        "ICD-10, CPT, HCPCS coding",
        "Audits & compliance reviews",
        "Specialty-specific coding",
        "Documentation improvement",
        "Coding education & training"
      ]
    },
    rcm: {
      title: "Revenue Cycle Management",
      icon: <RiLineChartLine className="text-purple-600 text-2xl" />,
      items: [
        "End-to-end RCM solutions",
        "Performance analytics",
        "Process optimization",
        "Regulatory compliance",
        "Custom reporting"
      ]
    },
    compliance: {
      title: "HIPAA Compliance",
      icon: <RiShieldCheckLine className="text-red-600 text-2xl" />,
      items: [
        "Security risk assessments",
        "Policy development",
        "Staff training",
        "Audit preparation",
        "Breach notification"
      ]
    },
    practice: {
      title: "Practice Management",
      icon: <RiUserHeartLine className="text-teal-600 text-2xl" />,
      items: [
        "Workflow optimization",
        "Staff training",
        "Patient flow analysis",
        "Appointment scheduling",
        "Performance benchmarking"
      ]
    },
    consulting: {
      title: "Revenue Recovery",
      icon: <RiHandCoinLine className="text-amber-600 text-2xl" />,
      items: [
        "Underpayment identification",
        "Contract analysis",
        "Payer negotiations",
        "Lost revenue recovery",
        "Fee schedule optimization"
      ]
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverCard = {
    rest: { y: 0 },
    hover: { 
      y: -10,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      } 
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Healthcare Revenue Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Optimize your financial performance with our specialized services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(services).map(([key, service]) => (
            <motion.div
              key={key}
              variants={item}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={hoverCard}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 group-hover:border-blue-100 transition-all duration-300"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mr-4 shadow-sm"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-600"
                      >
                        <motion.span 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="inline-block text-blue-500 mr-2 mt-1"
                        >
                          •
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6 text-blue-600 font-medium flex items-center cursor-pointer"
                  >
                    Learn more
                    <RiArrowRightLine className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </motion.div>
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
            Explore All Services 
            <RiArrowRightLine className="ml-3 transition-all duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;