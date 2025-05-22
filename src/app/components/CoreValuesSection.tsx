// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   RiFlag2Fill,
//   RiEye2Fill,
//   RiHeart2Fill,
//   RiShieldCheckFill,
//   RiTeamFill,
//   RiLightbulbFill,
//   RiMoneyDollarCircleFill
// } from 'react-icons/ri';
// import { useState } from 'react';

// const CoreValuesSection = () => {
//   const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

//   const coreValues = [
//     {
//       title: "Practice-First Focus",
//       description: "Your clinical priorities drive our processes",
//       icon: <RiHeart2Fill className="text-red-500" />
//     },
//     {
//       title: "Integrity & Precision",
//       description: "Honest, accurate handling of every transaction",
//       icon: <RiShieldCheckFill className="text-blue-500" />
//     },
//     {
//       title: "Collaborative Spirit",
//       description: "Working together for optimal outcomes",
//       icon: <RiTeamFill className="text-green-500" />
//     },
//     {
//       title: "Innovation & Growth",
//       description: "Continuous improvement to stay ahead",
//       icon: <RiLightbulbFill className="text-purple-500" />
//     },
//     {
//       title: "Responsible Financial Management",
//       description: "Protecting and optimizing your revenue",
//       icon: <RiMoneyDollarCircleFill className="text-amber-500" />
//     }
//   ];

//   return (
//     <div className="bg-white py-12 md:py-16">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex bg-gray-100 rounded-full p-1">
//             <button
//               onClick={() => setActiveTab('mission')}
//               className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
//                 activeTab === 'mission' 
//                   ? 'bg-blue-600 text-white shadow'
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               <RiFlag2Fill className="mr-2" />
//               Mission
//             </button>
//             <button
//               onClick={() => setActiveTab('vision')}
//               className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
//                 activeTab === 'vision'
//                   ? 'bg-blue-600 text-white shadow'
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               <RiEye2Fill className="mr-2" />
//               Vision
//             </button>
//             <button
//               onClick={() => setActiveTab('values')}
//               className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
//                 activeTab === 'values'
//                   ? 'bg-blue-600 text-white shadow'
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               <RiHeart2Fill className="mr-2" />
//               Values
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="text-center"
//           >
//             {activeTab === 'mission' && (
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <RiFlag2Fill className="text-blue-600 text-2xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                   To ensure your medical practice thrives through consistent, reliable revenue powered by accurate billing and seamless revenue cycle management. We turn complexity into clarity, so your team can focus on delivering outstanding care, not chasing payments.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'vision' && (
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <RiEye2Fill className="text-blue-600 text-2xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                   A healthcare environment where providers are free from administrative burdens, and patient care comes first. We aim to be the go-to billing partner that simplifies operations and strengthens the financial backbone of every practice we serve.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'values' && (
//               <div>
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <RiHeart2Fill className="text-blue-600 text-2xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//                   {coreValues.map((value, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all"
//                     >
//                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
//                         {value.icon}
//                       </div>
//                       <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
//                       <p className="text-sm text-gray-600">{value.description}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CoreValuesSection;










// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   RiFlag2Fill,
//   RiEye2Fill,
//   RiHeart2Fill,
//   RiShieldCheckFill,
//   RiTeamFill,
//   RiLightbulbFill,
//   RiMoneyDollarCircleFill,
//   RiArrowRightLine,
//   RiFlaskFill
// } from 'react-icons/ri';
// import { useState } from 'react';

// const CoreValuesSection = () => {
//   const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
//   const [hoveredValue, setHoveredValue] = useState<number | null>(null);

//   const coreValues = [
//     {
//       title: "Practice-First Focus",
//       description: "Your clinical priorities drive our processes",
//       icon: <RiHeart2Fill className="text-red-500" />,
//       color: "bg-red-50"
//     },
//     {
//       title: "Integrity & Precision",
//       description: "Honest, accurate handling of every transaction",
//       icon: <RiShieldCheckFill className="text-blue-500" />,
//       color: "bg-blue-50"
//     },
//     {
//       title: "Collaborative Spirit",
//       description: "Working together for optimal outcomes",
//       icon: <RiTeamFill className="text-green-500" />,
//       color: "bg-green-50"
//     },
//     {
//       title: "Innovation & Growth",
//       description: "Continuous improvement to stay ahead",
//       icon: <RiLightbulbFill className="text-purple-500" />,
//       color: "bg-purple-50"
//     },
//     {
//       title: "Responsible Financial Management",
//       description: "Protecting and optimizing your revenue",
//       icon: <RiMoneyDollarCircleFill className="text-amber-500" />,
//       color: "bg-amber-50"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Animated Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <motion.div 
//             animate={{
//               rotate: [0, 5, -5, 0],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
//           >
//             <RiFlaskFill className="mr-2" />
//             <span className="font-medium">OUR FOUNDATION</span>
//           </motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Drives Us</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             The principles guiding every decision we make
//           </p>
//         </motion.div>

//         {/* Interactive Tabs */}
//         <div className="flex justify-center mb-12">
//           <motion.div 
//             className="inline-flex bg-gray-100 rounded-full p-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[
//               { id: 'mission', icon: <RiFlag2Fill />, label: 'Mission' },
//               { id: 'vision', icon: <RiEye2Fill />, label: 'Vision' },
//               { id: 'values', icon: <RiHeart2Fill />, label: 'Values' }
//             ].map((tab) => (
//               <motion.button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id as 'mission' | 'vision' | 'values')}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-5 py-2 text-sm font-medium rounded-full flex items-center ${
//                   activeTab === tab.id 
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="ml-2">{tab.label}</span>
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>

//         {/* Content with Advanced Animations */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, type: "spring" }}
//             className="relative"
//           >
//             {/* Floating background elements */}
//             <motion.div 
//               animate={{
//                 x: [0, 10, 0],
//                 y: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-20"
//             />
//             <motion.div 
//               animate={{
//                 x: [0, -10, 0],
//                 y: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 2
//               }}
//               className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-100 rounded-full opacity-20"
//             />

//             {activeTab === 'mission' && (
//               <motion.div 
//                 className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
//                 initial={{ scale: 0.98 }}
//                 animate={{ scale: 1 }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
//                 <div className="flex flex-col md:flex-row items-center">
//                   <motion.div
//                     animate={{
//                       rotate: [0, 5, -5, 0],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                     className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8"
//                   >
//                     <RiFlag2Fill className="text-blue-600 text-4xl" />
//                   </motion.div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
//                     <p className="text-lg text-gray-600">
//                       To ensure your medical practice thrives through consistent, reliable revenue powered by accurate billing and seamless revenue cycle management. We turn complexity into clarity, so your team can focus on delivering outstanding care, not chasing payments.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === 'vision' && (
//               <motion.div 
//                 className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
//                 initial={{ scale: 0.98 }}
//                 animate={{ scale: 1 }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
//                 <div className="flex flex-col md:flex-row items-center">
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.05, 1],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                     className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8"
//                   >
//                     <RiEye2Fill className="text-green-600 text-4xl" />
//                   </motion.div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
//                     <p className="text-lg text-gray-600">
//                       A healthcare environment where providers are free from administrative burdens, and patient care comes first. We aim to be the go-to billing partner that simplifies operations and strengthens the financial backbone of every practice we serve.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === 'values' && (
//               <div>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-center mb-10"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
//                   >
//                     <RiHeart2Fill className="text-purple-600 text-3xl" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Core Values</h3>
//                   <p className="text-gray-600 max-w-2xl mx-auto">
//                     The principles that guide every interaction and decision
//                   </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//                   {coreValues.map((value, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, margin: "-50px" }}
//                       transition={{ delay: index * 0.1, type: "spring" }}
//                       whileHover={{ 
//                         y: -10,
//                         boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//                       }}
//                       onHoverStart={() => setHoveredValue(index)}
//                       onHoverEnd={() => setHoveredValue(null)}
//                       className={`relative rounded-xl overflow-hidden border transition-all ${
//                         hoveredValue === index 
//                           ? 'border-blue-300 shadow-lg' 
//                           : 'border-gray-200'
//                       }`}
//                     >
//                       <div className={`absolute inset-0 ${value.color} opacity-20`}></div>
//                       <div className="relative p-6">
//                         <motion.div
//                           animate={{
//                             scale: hoveredValue === index ? 1.2 : 1,
//                             rotate: hoveredValue === index ? 10 : 0
//                           }}
//                           className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}
//                         >
//                           {value.icon}
//                         </motion.div>
//                         <h4 className="font-bold text-gray-900 text-lg mb-2">{value.title}</h4>
//                         <p className="text-gray-600 text-sm">{value.description}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>

  
//       </div>
//     </div>
//   );
// };

// export default CoreValuesSection;









'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  RiArrowRightLine,
  RiEye2Fill,
  RiFlag2Fill,
  RiHandHeartLine,
  RiHeart2Fill,
  RiLightbulbFill,
  RiMedalFill,
  RiMoneyDollarCircleFill,
  RiShieldCheckFill,
  RiTeamFill,
  RiUserHeartLine
} from 'react-icons/ri';

const CoreValuesSection = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const coreValues = [
    {
      title: "Patient-Centered",
      description: "Your patients are our priority - we optimize billing so you can focus on care",
      icon: <RiUserHeartLine className="text-red-500" />,
      color: "bg-red-50",
      testimonial: "Reduced our billing errors by 75% in 3 months"
    },
    {
      title: "Compliance First",
      description: "HIPAA-compliant processes that protect your practice",
      icon: <RiShieldCheckFill className="text-blue-500" />,
      color: "bg-blue-50",
      testimonial: "Never had a compliance issue in 5+ years"
    },
    {
      title: "Partnership",
      description: "We're an extension of your team, not just a vendor",
      icon: <RiTeamFill className="text-green-500" />,
      color: "bg-green-50",
      testimonial: "Their team feels like our own billing department"
    },
    {
      title: "Innovation",
      description: "AI-powered claims processing for faster payments",
      icon: <RiLightbulbFill className="text-purple-500" />,
      color: "bg-purple-50",
      testimonial: "Cut our payment time from 45 to 18 days"
    },
    {
      title: "Revenue Focused",
      description: "Maximizing collections while minimizing your workload",
      icon: <RiMoneyDollarCircleFill className="text-amber-500" />,
      color: "bg-amber-50",
      testimonial: "Increased our collections by 22% first year"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header with Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Floating background elements */}
          <motion.div 
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-20 -z-10"
          />
          <motion.div 
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-0 right-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-20 -z-10"
          />
          
          <motion.div 
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center px-5 py-3 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-sm"
          >
            <RiMedalFill className="mr-2 text-lg" />
            <span className="font-medium">TRUSTED BY 1,000+ PRACTICES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            More Than <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Billing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&quot;re your partners in building a financially healthy practice
          </p>
        </motion.div>

        {/* Interactive Tabs with Glow Effect */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="inline-flex bg-gray-100 rounded-full p-1 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 bg-[length:200%_auto] opacity-0 hover:opacity-100 transition-opacity"
            />
            
            {[
              { id: 'mission', icon: <RiFlag2Fill />, label: 'Our Mission' },
              { id: 'vision', icon: <RiEye2Fill />, label: 'Our Vision' },
              { id: 'values', icon: <RiHeart2Fill />, label: 'Our Values' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'mission' | 'vision' | 'values')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 text-sm font-medium rounded-full flex items-center relative z-10 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 bg-white'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Content with Advanced Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative"
          >
            {activeTab === 'mission' && (
              <motion.div 
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-8 lg:mb-0 lg:mr-12 shadow-inner"
                  >
                    <RiFlag2Fill className="text-blue-600 text-5xl" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      To remove the financial burdens of medical practice so you can focus on what matters most - patient care. We combine cutting-edge technology with human expertise to maximize your revenue while minimizing your administrative headaches.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-blue-700 font-medium flex items-center">
                        <RiHandHeartLine className="mr-2 text-blue-600" />
                        &quot;They reduced our denied claims by 68% in the first quarter&quot; - Dr. Sarah Chen, Family Practice
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'vision' && (
              <motion.div 
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -15, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-8 lg:mb-0 lg:mr-12 shadow-inner"
                  >
                    <RiEye2Fill className="text-green-600 text-5xl" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      We envision a healthcare system where providers spend less time on paperwork and more time with patients. Through intelligent automation and personalized service, we&ldquo;re creating a future where medical practices thrive financially while delivering exceptional care.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <p className="text-green-700 font-medium">
                          &ldquo;Payment time cut from 45 to 12 days&ldquo; - Cardiology Group
                        </p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                        <p className="text-teal-700 font-medium">
                          &ldquo;98.7% clean claim rate&ldquo; - Pediatric Associates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner"
                  >
                    <RiHeart2Fill className="text-purple-600 text-4xl" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    The principles that guide every decision and interaction
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      onHoverStart={() => setHoveredValue(index)}
                      onHoverEnd={() => setHoveredValue(null)}
                      className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                        hoveredValue === index 
                          ? 'border-blue-300 shadow-xl' 
                          : 'border-gray-200 shadow-md'
                      }`}
                    >
                      <div className={`absolute inset-0 ${value.color} opacity-10`}></div>
                      <div className="relative p-6 h-full flex flex-col">
                        <motion.div
                          animate={{
                            scale: hoveredValue === index ? 1.3 : 1,
                            rotate: hoveredValue === index ? [0, 15, -15, 0] : 0
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                          }}
                          className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 mx-auto`}
                        >
                          {value.icon}
                        </motion.div>
                        <h4 className="font-bold text-gray-900 text-xl mb-3 text-center">{value.title}</h4>
                        <p className="text-gray-600 text-center mb-4 flex-1">{value.description}</p>
                        {hoveredValue === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-white/80 rounded-lg p-3 mt-4 border border-gray-200"
                          >
                            <p className="text-sm text-gray-700 italic">&ldquo;{value.testimonial}&ldquo;</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-xl group"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
            </span>
            
            <span className="relative flex items-center">
              <span>See How We Can Help Your Practice</span>
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="ml-3"
              >
                <RiArrowRightLine className="text-xl" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CoreValuesSection;