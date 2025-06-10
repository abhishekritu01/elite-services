'use client';
import {  motion } from 'framer-motion';
import {
  RiBillLine,
  RiShieldStarFill,
  RiUserHeartLine
} from 'react-icons/ri';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CaseStudiesSection = () => {
  const caseStudies = {
    clinic: {
      title: "Multi-Specialty Clinic Billing",
      icon: <RiBillLine className="text-blue-600" />,
      location: "Texas, USA",
      challenge: "The clinic was facing frequent claim denials and delays in reimbursement due to inconsistent coding practices and a lack of clarity around payer-specific requirements.",
      solution: "We conducted a thorough review of their billing workflow and identified key areas for improvement. Our team introduced accurate specialty-specific coding practices, standardized the claim submission process, and implemented a robust follow-up system for denied claims.",
      result: "The clinic saw a noticeable improvement in payment timelines and a significant drop in claim denials. Their administrative burden reduced, and the overall revenue cycle became more efficient.",
      stats: [
        { value: "40%", label: "Reduction in Denials" },
        { value: "15 Days", label: "Faster Payments" },
      ]
    },
    practice: {
      title: "Solo Practitioner Growth",
      icon: <RiUserHeartLine className="text-teal-600" />,
      location: "California, USA",
      challenge: "Dr. Lee struggled to keep up with the billing workload while also managing patient care. The practice had several unresolved claims and lacked a streamlined billing system.",
      solution: "We provided end-to-end billing support, including claim submission, follow-up, and denial management. We also trained her office staff and introduced an easy-to-use billing software integrated with her practice management system.",
      result: "The practice became more organized, with fewer billing issues and better control over cash flow. Dr. Lee was able to focus more on her patients, with confidence that her billing was in expert hands.",
      stats: [
        { value: "100%", label: "Claims Resolved" },
        { value: "30%", label: "Revenue Increase" }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
     < NavBar/>
     {/* Case Studies Content */}
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
              <span className="font-medium">Proven Results</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Real World
              </span> Success Stories
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped healthcare providers optimize their revenue cycles
            </p>
          </div>

          {/* Case Studies Grid - Always showing full content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(caseStudies).map(([key, study]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-sm text-gray-500">{study.location}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                      <p className="text-gray-600">{study.result}</p>
                    </div>

                    {study.stats.length > 0 && (
                      <div className="flex gap-3">
                        {study.stats.map((stat, i) => (
                          <div key={i} className="bg-blue-50 px-3 py-2 rounded-lg">
                            <p className="text-blue-600 font-bold">{stat.value}</p>
                            <p className="text-xs text-gray-600">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudiesSection;