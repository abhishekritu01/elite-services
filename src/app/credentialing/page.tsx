'use client'
import { motion } from "framer-motion"
import { FaShieldAlt, FaFileAlt, FaSyncAlt, FaChartLine, FaHandshake, FaUserCheck, FaCalendarAlt, FaCogs } from "react-icons/fa"
import { GiProcessor } from "react-icons/gi"
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { IoMdRibbon } from "react-icons/io"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Page = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "CAQH Management",
      description: "Complete registration, validation, and ongoing maintenance of your CAQH profiles"
    },
    {
      icon: <MdOutlineHealthAndSafety className="text-3xl text-purple-600" />,
      title: "Medicare/Medicaid",
      description: "Streamlined enrollment and revalidation processes"
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-500" />,
      title: "Commercial Insurance",
      description: "Efficient enrollment and recredentialing with all major payors"
    },
    {
      icon: <FaUserCheck className="text-3xl text-indigo-600" />,
      title: "NPI Registration",
      description: "Type I and Type II NPI registration services"
    }
  ]

  const processSteps = [
    {
      icon: <FaFileAlt className="text-2xl text-blue-600" />,
      title: "Application Preparation",
      description: "We handle all forms according to each insurer's specific requirements"
    },
    {
      icon: <GiProcessor className="text-2xl text-purple-600" />,
      title: "Processing",
      description: "Our proprietary system expedites submission and tracking"
    },
    {
      icon: <FaSyncAlt className="text-2xl text-blue-500" />,
      title: "Follow-up",
      description: "Continuous communication with payors until completion"
    },
    {
      icon: <FaChartLine className="text-2xl text-indigo-600" />,
      title: "Revenue Activation",
      description: "Get your providers billing faster with our efficient process"
    }
  ]

  return (
    <><NavBar />
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6 mt-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaShieldAlt className="mr-2" /> Provider Credentialing
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Provider Enrollment</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            With 20+ years of healthcare expertise, we streamline credentialing so your providers can start generating revenue faster.
          </motion.p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeIn}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Why Credentialing Matters</h3>
              <p className="text-gray-600 mb-6 relative z-10">
                Each provider must navigate a complex web of applications, verifications, and approvals before they can bill insurance. 
                With varying requirements across hundreds of payors, this process often delays revenue by 3-6 months.
              </p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaCogs className="text-blue-600 text-xs" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">The Challenge:</span> Manual processes, inconsistent requirements, and endless follow-ups
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <FaChartLine className="text-purple-600 text-xs" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">Our Solution:</span> Proprietary software + 20 years of expertise = 60% faster enrollments
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Differentiators</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-xs" />
                    </div>
                  </div>
                  <span className="ml-3">Average 45-day enrollment turnaround (vs. 90-180 days industry standard)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <FaFileAlt className="text-white text-xs" />
                    </div>
                  </div>
                  <span className="ml-3">98% first-time submission acceptance rate</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <FaSyncAlt className="text-white text-xs" />
                    </div>
                  </div>
                  <span className="ml-3">Automated renewal tracking prevents credentialing lapses</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proven Process</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200/50 hover:shadow-lg transition-all backdrop-blur-sm"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Comprehensive</span> Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200/50 hover:shadow-lg transition-all backdrop-blur-sm"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Ready to streamline your credentialing process?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
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
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Page