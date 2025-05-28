import React from "react";
import { motion } from "framer-motion";
import { BarChart3, BrainCog, ScanSearch } from "lucide-react";

const features = [
  {
    title: "Smart Claim Scrubbing",
    description: "Catch errors before submission using ML-powered validation.",
    icon: <ScanSearch className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Predictive Denial Management",
    description: "AI analyzes trends to reduce denials by 40%.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Automated Coding",
    description: "Use NLP to auto-code clinical documentation in seconds.",
    icon: <BrainCog className="w-8 h-8 text-indigo-600" />,
  },
];

export default function AiSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          AI-Powered Revenue Optimization
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Boost claim accuracy, reduce denials, and streamline billing with our cutting-edge AI solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
