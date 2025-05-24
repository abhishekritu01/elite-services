'use client';

import { motion } from 'framer-motion';
import { RiShieldKeyholeFill, RiLockPasswordFill, RiFileShieldFill, RiHealthBookFill, RiAlertFill } from 'react-icons/ri';
import { FaUserShield, FaClipboardCheck } from 'react-icons/fa';
import { IoIosTrendingUp } from 'react-icons/io';
import { IoMdRibbon } from 'react-icons/io';

const HIPAAComplianceSection = () => {
  const features = [
    {
      icon: <RiShieldKeyholeFill className="text-blue-500" />,
      title: "Data Encryption",
      description: "End-to-end encryption for all protected health information (PHI)"
    },
    {
      icon: <FaUserShield className="text-green-500" />,
      title: "Access Controls",
      description: "Role-based access with multi-factor authentication"
    },
    {
      icon: <RiLockPasswordFill className="text-purple-500" />,
      title: "Audit Logs",
      description: "Comprehensive tracking of all system access and changes"
    },
    {
      icon: <RiFileShieldFill className="text-red-500" />,
      title: "Business Associate Agreements",
      description: "BAAs with all vendors handling PHI"
    },
    {
      icon: <RiHealthBookFill className="text-amber-500" />,
      title: "Staff Training",
      description: "Annual HIPAA compliance training for all employees"
    },
    {
      icon: <FaClipboardCheck className="text-teal-500" />,
      title: "Risk Assessments",
      description: "Regular security risk analyses and mitigation"
    }
  ];

  const complianceSteps = [
    "Secure data centers with 24/7 monitoring",
    "Regular penetration testing",
    "Automatic logoff for inactive sessions",
    "Data backup and disaster recovery",
    "Breach notification procedures",
    "Physical and technical safeguards"
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4">
            <RiAlertFill className="mr-2" />
            <span className="font-medium">COMPLIANCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              HIPAA Compliance
            </span> You Can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Privacy and security built into everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <RiFileShieldFill className="text-blue-500 mr-3 text-3xl" />
                What Is HIPAA?
              </h3>
              <p className="text-gray-700 mb-6">
                The <strong>Health Insurance Portability and Accountability Act of 1996</strong> (HIPAA) is a U.S. federal law designed to:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Protect patients' sensitive health information",
                  "Set standards for electronic healthcare transactions",
                  "Ensure confidentiality of medical records",
                  "Establish security standards for healthcare data",
                  "Provide patients with rights over their health information"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                      <RiFileShieldFill className="text-sm" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <RiAlertFill className="mr-2" />
                  Our Commitment
                </h4>
                <p className="text-blue-700">
                  &quot;We work with sensitive health information daily. Protecting it isn&apos;t just a legal requirement—it&quot;s a responsibility we take seriously. HIPAA compliance is foundational to our operations.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <RiShieldKeyholeFill className="text-green-500 mr-3 text-3xl" />
                Our Security Framework
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-blue-200 transition-all"
                  >
                    <div className="text-3xl mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-4">Compliance Measures</h4>
                <ul className="space-y-3">
                  {complianceSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-700"
                    >
                      <span className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 mt-0.5 text-xs">
                        {index + 1}
                      </span>
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-12">
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
              <span>Request Our HIPAA Compliance Report</span>
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
          <p className="text-gray-500 mt-4 text-sm">
            All our systems meet or exceed HIPAA security requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default HIPAAComplianceSection;