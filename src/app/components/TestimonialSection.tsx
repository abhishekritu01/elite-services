'use client';

import { motion } from 'framer-motion';
import {
  FaClinicMedical,
  FaHospital,
  FaQuoteLeft,
  FaUserMd
} from 'react-icons/fa';
import { IoIosTrendingUp, IoMdRibbon } from 'react-icons/io';
import {
  RiArrowRightLine,
  // RiMedalFill,
  RiShieldCheckFill,
  RiStarFill
} from 'react-icons/ri';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Since switching to their RCM services, our collections increased and denials dropped. Their team's expertise transformed our revenue cycle.",
      author: "Dr. John Smith",
      position: "Multi-Specialty Clinic, TX",
      highlight: "28% increase | 40% fewer denials",
      icon: <FaClinicMedical className="text-blue-500" />,
      achievements: [
        "98% clean claim rate",
        "15 day payment turnaround",
        "24/7 support access"
      ]
    },
    {
      quote: "Their team reduced our AR days, improving cash flow dramatically. We've seen an increase in collections while reducing administrative costs.",
      author: "Sarah Johnson",
      position: "ABC Hospital, Florida",
      highlight: "60 → 15 AR days | 35% more collections",
      icon: <FaHospital className="text-green-500" />,
      achievements: [
        "Full compliance",
        "Custom reporting",
        "Dedicated account manager"
      ]
    },
    {
      quote: "As a small practice, we struggled with billing. Now we're collecting 98% of what we bill with zero additional staff. This service pays for itself.",
      author: "Dr. Michael Chen",
      position: "Private Practice, CA",
      highlight: "98% collection rate",
      icon: <FaUserMd className="text-purple-500" />,
      achievements: [
        "No upfront costs",
        "Specialty-specific coding",
        "Monthly performance reviews"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: star * 0.1 }}
                className="text-amber-400"
              >
                <RiStarFill />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4 relative overflow-hidden"
          >
            <motion.div 
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
            <RiShieldCheckFill className="mr-2" />
            <span className="font-medium relative z-10">TRUSTED BY 500+ PROVIDERS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
            >
              Proven Results
            </motion.span> From Healthcare Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            See how we&ldquo;ve helped practices and hospitals of all sizes streamline revenue cycles and increase collections
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full flex items-start justify-end p-2">
                  {testimonial.icon}
                </div>
                
                <div className="flex flex-col h-full">
                  <FaQuoteLeft className="text-blue-400 text-2xl mb-4 opacity-70" />
                  <p className="text-gray-700 text-lg mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="mt-auto">
                    {/* <div className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium rounded-full inline-block">
                      {testimonial.highlight}
                    </div> */}
                    
                    {/* <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2">ACHIEVEMENTS:</h4>
                      <ul className="space-y-2">
                        {testimonial.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <RiMedalFill className="text-amber-400 mr-2" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div> */}
                    
                    <div className="mt-6 flex items-center">
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="ml-auto text-blue-400"
                      >
                        <RiArrowRightLine className="text-xl" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
            </span>
            
            <span className="relative flex items-center">
              <span>Read More Success Stories</span>
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
            transition={{ delay: 0.9 }}
            className="text-gray-500 mt-4 flex items-center justify-center"
          >
            <RiStarFill className="text-amber-400 mr-2" />
            <span>Rated 4.9/5 by 500+ healthcare providers</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;






// 'use client';

// import { motion } from 'framer-motion';
// import {
//   FaClinicMedical,
//   FaHospital,
//   FaQuoteLeft,
//   FaUserMd
// } from 'react-icons/fa';
// import { IoIosTrendingUp, IoMdRibbon } from 'react-icons/io';
// import {
//   RiArrowRightLine,
//   RiMedalFill,
//   RiShieldCheckFill,
//   RiStarFill
// } from 'react-icons/ri';

// const TestimonialSection = () => {
//   const testimonials = [
//     {
//       quote: "Since switching to their RCM services, our collections increased by 28% and denials dropped by 40%. Their team's expertise transformed our revenue cycle in just 90 days.",
//       author: "Dr. John Smith",
//       position: "Multi-Specialty Clinic, TX",
//       highlight: "28% increase | 40% fewer denials",
//       icon: <FaClinicMedical className="text-blue-500" />,
//       achievements: [
//         "98% clean claim rate",
//         "15 day payment turnaround",
//         "24/7 support access"
//       ]
//     },
//     {
//       quote: "Their team reduced our AR days from 60 to 15, improving cash flow dramatically. We've seen a 35% increase in collections while reducing administrative costs.",
//       author: "Sarah Johnson",
//       position: "ABC Hospital, Florida",
//       highlight: "60 → 15 AR days | 35% more collections",
//       icon: <FaHospital className="text-green-500" />,
//       achievements: [
//         "Full compliance",
//         "Custom reporting",
//         "Dedicated account manager"
//       ]
//     },
//     {
//       quote: "As a small practice, we struggled with billing. Now we're collecting 98% of what we bill with zero additional staff. This service pays for itself.",
//       author: "Dr. Michael Chen",
//       position: "Private Practice, CA",
//       highlight: "98% collection rate",
//       icon: <FaUserMd className="text-purple-500" />,
//       achievements: [
//         "No upfront costs",
//         "Specialty-specific coding",
//         "Monthly performance reviews"
//       ]
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//             delay: 5
//           }}
//           className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"
//         />
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header with floating badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 relative"
//         >
//           <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-2">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <motion.div
//                 key={star}
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: star * 0.1 }}
//                 className="text-amber-400"
//               >
//                 <RiStarFill />
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.div 
//             initial={{ scale: 0.9 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring" }}
//             className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4 relative overflow-hidden"
//           >
//             <motion.div 
//               animate={{
//                 x: ['-100%', '100%'],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
//             />
//             <RiShieldCheckFill className="mr-2" />
//             <span className="font-medium relative z-10">TRUSTED BY 500+ PROVIDERS</span>
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             <motion.span
//               animate={{
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
//             >
//               Proven Results
//             </motion.span> From Healthcare Leaders
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//           >
//             See how we&ldquo;ve helped practices and hospitals of all sizes streamline revenue cycles and increase collections
//           </motion.p>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="relative group"
//             >
//               <motion.div
//                 whileHover={{ 
//                   y: -10,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
//                 }}
//                 className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full flex items-start justify-end p-2">
//                   {testimonial.icon}
//                 </div>
                
//                 <div className="flex flex-col h-full">
//                   <FaQuoteLeft className="text-blue-400 text-2xl mb-4 opacity-70" />
//                   <p className="text-gray-700 text-lg mb-6 italic">
//                     &quot;{testimonial.quote}&quot;
//                   </p>
                  
//                   <div className="mt-auto">
//                     <div className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium rounded-full inline-block">
//                       {testimonial.highlight}
//                     </div>
                    
//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       <h4 className="text-xs font-semibold text-gray-500 mb-2">ACHIEVEMENTS:</h4>
//                       <ul className="space-y-2">
//                         {testimonial.achievements.map((achievement, i) => (
//                           <motion.li
//                             key={i}
//                             initial={{ x: -20, opacity: 0 }}
//                             whileInView={{ x: 0, opacity: 1 }}
//                             transition={{ delay: i * 0.1 + 0.3 }}
//                             className="flex items-center text-sm text-gray-700"
//                           >
//                             <RiMedalFill className="text-amber-400 mr-2" />
//                             {achievement}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div className="mt-6 flex items-center">
//                       <div>
//                         <p className="font-bold text-gray-900">{testimonial.author}</p>
//                         <p className="text-gray-500 text-sm">{testimonial.position}</p>
//                       </div>
//                       <motion.div
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.6 }}
//                         className="ml-auto text-blue-400"
//                       >
//                         <RiArrowRightLine className="text-xl" />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Enhanced CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="text-center"
//         >
//           <motion.button 
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
//           >
//             <span className="absolute inset-0 overflow-hidden">
//               <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
//             </span>
            
//             <span className="relative flex items-center">
//               <span>Read More Success Stories</span>
//               <motion.span
//                 animate={{
//                   x: [0, 4, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//                 className="ml-3"
//               >
//                 <IoIosTrendingUp className="text-xl" />
//               </motion.span>
//             </span>
            
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="absolute -right-4 -top-4 text-blue-300 opacity-30 text-6xl"
//             >
//               <IoMdRibbon />
//             </motion.div>
//           </motion.button>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             className="text-gray-500 mt-4 flex items-center justify-center"
//           >
//             <RiStarFill className="text-amber-400 mr-2" />
//             <span>Rated 4.9/5 by 500+ healthcare providers</span>
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;