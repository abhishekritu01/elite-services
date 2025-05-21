'use client';
import { useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaChartLine, FaClinicMedical, FaHandHoldingUsd, FaHeadset, FaShieldAlt, FaUserTie } from 'react-icons/fa';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      hoverText: "Trusted by hundreds of practices"
    },
    { 
      value: "98%", 
      label: "Clean Claims", 
      icon: <FaChartLine className="text-white" />, 
      bgColor: "bg-green-600",
      hoverText: "Industry-leading first-pass acceptance rate"
    },
    { 
      value: "500+", 
      label: "Providers", 
      icon: <FaUserTie className="text-white" />, 
      bgColor: "bg-purple-600",
      hoverText: "Serving practices across all specialties"
    },
    { 
      value: "24/7", 
      label: "Support", 
      icon: <FaHeadset className="text-white" />, 
      bgColor: "bg-orange-600",
      hoverText: "Dedicated account managers always available"
    }
  ];

  const benefits = [
    { icon: <FaUserTie className="text-blue-600" />, text: "Certified Experts" },
    { icon: <FaHandHoldingUsd className="text-green-600" />, text: "No Hidden Fees" },
    { icon: <FaShieldAlt className="text-purple-600" />, text: "HIPAA Secure" }
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven results for healthcare providers
          </p>
        </div>

        {/* Side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <Image
                src="/elite/undraw_join_6quk.svg"
                alt="Medical billing expertise"
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group"
                >
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mb-3`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {stat.label}
                  </p>
                  <div className="absolute inset-0 bg-white p-5 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-600">
                      {stat.hoverText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits bar */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
