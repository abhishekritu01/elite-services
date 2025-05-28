'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaShieldAlt,
  // FaChartLine,
  // FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { 
  RiMedal2Fill,
  RiArrowRightUpLine,
  RiInstagramFill,
  RiWhatsappFill,
  RiLinkedinFill,
  RiTwitterFill
} from 'react-icons/ri';
import { IoMdRibbon } from 'react-icons/io';
import { useEffect, useRef} from 'react';

const Footer = () => {
  // const [startCount, setStartCount] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // setStartCount(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  /*
  // Uncomment this section to display performance metrics
  const performanceMetrics = [
    { icon: <FaShieldAlt className="text-blue-400" />, value: 98, suffix: "%", label: "Claim Accuracy", duration: 1500 },
    { icon: <FaChartLine className="text-green-400" />, value: 27, suffix: "%", label: "Revenue Increase", duration: 1200 },
    { icon: <FaClock className="text-purple-400" />, value: 15, suffix: " Days", label: "Avg. Payment", duration: 1000 }
  ];

  const CountUpNumber = ({ value, suffix, duration }: { value: number, suffix: string, duration: number }) => {
    const [count, setCount] = useState(0);
    const startTime = useRef<number | null>(null);

    useEffect(() => {
      if (!startCount) return;
      
      const animateCount = (timestamp: number) => {
        if (!startTime.current) startTime.current = timestamp;
        const progress = Math.min((timestamp - startTime.current) / duration, 1);
        const currentCount = Math.floor(progress * value);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }, [startCount, value, duration]);

    return (
      <motion.span 
        className="text-2xl font-bold text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}{suffix}
      </motion.span>
    );
  };
  */

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-500">
      {/* Animated background elements */}
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Performance metrics */}
        {/*
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-800"
        >
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
            >
              <div className="p-3 rounded-full bg-gray-700">
                {metric.icon}
              </div>
              <div>
                <CountUpNumber 
                  value={metric.value} 
                  suffix={metric.suffix} 
                  duration={metric.duration} 
                />
                <p className="text-gray-300 text-sm">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <IoMdRibbon className="text-blue-400 text-3xl" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                RevenueMed
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Specialized revenue cycle management solutions for modern healthcare providers.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
              >
                <RiMedal2Fill className="text-amber-400" />
                <span className="text-xs font-medium">Certified RCM Experts</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
              >
                <FaShieldAlt className="text-blue-400" />
                <span className="text-xs font-medium">HIPAA Compliant</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Sales & Support</p>
                  <p className="text-white font-medium">(844) 722-3363</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-white font-medium">solutions@revenuemed.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Headquarter</p>
                  <p className="text-white font-medium">Boston, MA • Austin, TX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">India Office</p>
                  <p className="text-white font-medium">Mysore, Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Case Studies</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Our Process</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Compliance</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Careers</span>
              </motion.a>
            </div>

            {/* Social */}






            <div className=" pt-4 flex flex-col items-center space-y-2">
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <RiLinkedinFill className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <RiTwitterFill className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <RiInstagramFill className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <RiWhatsappFill className="text-xl" />
                </motion.a>
              </div>
            </div>





            
          </motion.div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <div>
            © {new Date().getFullYear()} RevenueMed Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">HIPAA</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;






// 'use client';

// import { motion, useAnimation, useInView } from 'framer-motion';
// import { 
//   FaShieldAlt,
//   // FaChartLine,
//   // FaClock,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope
// } from 'react-icons/fa';
// import { 
//   RiMedal2Fill,
//   RiArrowRightUpLine,
//   RiInstagramFill,
//   RiWhatsappFill,
//   RiLinkedinFill,
//   RiTwitterFill
// } from 'react-icons/ri';
// import { IoMdRibbon } from 'react-icons/io';
// import { useEffect, useRef, useState } from 'react';

// const Footer = () => {
//   const [startCount, setStartCount] = useState(false);
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   useEffect(() => {
//     if (isInView) {
//       setStartCount(true);
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   // const performanceMetrics = [
//   //   { icon: <FaShieldAlt className="text-blue-400" />, value: 98, suffix: "%", label: "Claim Accuracy", duration: 1500 },
//   //   { icon: <FaChartLine className="text-green-400" />, value: 27, suffix: "%", label: "Revenue Increase", duration: 1200 },
//   //   { icon: <FaClock className="text-purple-400" />, value: 15, suffix: " Days", label: "Avg. Payment", duration: 1000 }
//   // ];

//   const CountUpNumber = ({ value, suffix, duration }: { value: number, suffix: string, duration: number }) => {
//     const [count, setCount] = useState(0);
//     const startTime = useRef<number | null>(null);

//     useEffect(() => {
//       if (!startCount) return;
      
//       const animateCount = (timestamp: number) => {
//         if (!startTime.current) startTime.current = timestamp;
//         const progress = Math.min((timestamp - startTime.current) / duration, 1);
//         const currentCount = Math.floor(progress * value);
//         setCount(currentCount);
        
//         if (progress < 1) {
//           requestAnimationFrame(animateCount);
//         }
//       };

//       requestAnimationFrame(animateCount);
//     }, [startCount, value, duration]);

//     return (
//       <motion.span 
//         className="text-2xl font-bold text-white"
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {count}{suffix}
//       </motion.span>
//     );
//   };

//   return (
//     <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
//       {/* Animated background elements */}
//       <motion.div 
//         animate={{
//           scale: [1, 1.05, 1],
//           opacity: [0.03, 0.06, 0.03]
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent"
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Performance metrics */}
//         {/* <motion.div 
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-800"
//         >
//           {performanceMetrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
//             >
//               <div className="p-3 rounded-full bg-gray-700">
//                 {metric.icon}
//               </div>
//               <div>
//                 <CountUpNumber 
//                   value={metric.value} 
//                   suffix={metric.suffix} 
//                   duration={metric.duration} 
//                 />
//                 <p className="text-gray-300 text-sm">{metric.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* Rest of the footer content remains the same */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
//           {/* Company info */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="space-y-6"
//           >
//             <div className="flex items-center space-x-3">
//               <IoMdRibbon className="text-blue-400 text-3xl" />
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//                 RevenueMed
//               </span>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               Specialized revenue cycle management solutions for modern healthcare providers.
//             </p>
            
//             {/* Trust badges */}
//             <div className="flex flex-wrap gap-3 pt-4">
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
//               >
//                 <RiMedal2Fill className="text-amber-400" />
//                 <span className="text-xs font-medium">Certified RCM Experts</span>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
//               >
//                 <FaShieldAlt className="text-blue-400" />
//                 <span className="text-xs font-medium">HIPAA Compliant</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Contact information */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="space-y-6"
//           >
//             <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
//               Get In Touch
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <FaPhoneAlt className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Sales & Support</p>
//                   <p className="text-white font-medium">(844) 722-3363</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Email Us</p>
//                   <p className="text-white font-medium">solutions@revenuemed.com</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Headquarter</p>
//                   <p className="text-white font-medium">Boston, MA • Austin, TX</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">India Office</p>
//                   <p className="text-white font-medium">Mysore, Karnataka</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick links */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             className="space-y-6"
//           >
//             <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
//               Quick Links
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Case Studies</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Our Process</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Compliance</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Careers</span>
//               </motion.a>
//             </div>

//             {/* Social */}
//             <div className="pt-4">
//               <div className="flex space-x-4">
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiLinkedinFill className="text-xl" />
//                 </motion.a>
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiTwitterFill className="text-xl" />
//                 </motion.a>
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiInstagramFill className="text-xl" />
//                 </motion.a>
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiWhatsappFill className="text-xl" />
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
//         >
//           <div>
//             © {new Date().getFullYear()} RevenueMed Solutions. All rights reserved.
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
//             <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
//             <a href="#" className="hover:text-gray-300 transition-colors">HIPAA</a>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





























// 'use client';

// import { motion, useAnimation, useInView } from 'framer-motion';
// import { 
//   FaShieldAlt,
//   FaChartLine,
//   FaClock,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope
// } from 'react-icons/fa';
// import { 
//   RiMedal2Fill,
//   RiArrowRightUpLine,
//   RiLinkedinFill,
//   RiTwitterFill
// } from 'react-icons/ri';
// import { IoMdRibbon } from 'react-icons/io';
// import { useEffect, useRef, useState } from 'react';

// const Footer = () => {
//   const [startCount, setStartCount] = useState(false);
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   useEffect(() => {
//     if (isInView) {
//       setStartCount(true);
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const performanceMetrics = [
//     { icon: <FaShieldAlt className="text-blue-400" />, value: 98, suffix: "%", label: "Claim Accuracy", duration: 1500 },
//     { icon: <FaChartLine className="text-green-400" />, value: 27, suffix: "%", label: "Revenue Increase", duration: 1200 },
//     { icon: <FaClock className="text-purple-400" />, value: 15, suffix: " Days", label: "Avg. Payment", duration: 1000 }
//   ];

//   const CountUpNumber = ({ value, suffix, duration }: { value: number, suffix: string, duration: number }) => {
//     const [count, setCount] = useState(0);
//     const startTime = useRef<number | null>(null);

//     useEffect(() => {
//       if (!startCount) return;
      
//       const animateCount = (timestamp: number) => {
//         if (!startTime.current) startTime.current = timestamp;
//         const progress = Math.min((timestamp - startTime.current) / duration, 1);
//         const currentCount = Math.floor(progress * value);
//         setCount(currentCount);
        
//         if (progress < 1) {
//           requestAnimationFrame(animateCount);
//         }
//       };

//       requestAnimationFrame(animateCount);
//     }, [startCount, value, duration]);

//     return (
//       <motion.span 
//         className="text-2xl font-bold text-white"
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {count}{suffix}
//       </motion.span>
//     );
//   };

//   return (
//     <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
//       {/* Animated background elements */}
//       <motion.div 
//         animate={{
//           scale: [1, 1.05, 1],
//           opacity: [0.03, 0.06, 0.03]
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent"
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Performance metrics */}
//         <motion.div 
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-800"
//         >
//           {performanceMetrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
//             >
//               <div className="p-3 rounded-full bg-gray-700">
//                 {metric.icon}
//               </div>
//               <div>
//                 <CountUpNumber 
//                   value={metric.value} 
//                   suffix={metric.suffix} 
//                   duration={metric.duration} 
//                 />
//                 <p className="text-gray-300 text-sm">{metric.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Rest of the footer content remains the same */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
//           {/* Company info */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="space-y-6"
//           >
//             <div className="flex items-center space-x-3">
//               <IoMdRibbon className="text-blue-400 text-3xl" />
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//                 RevenueMed
//               </span>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               Specialized revenue cycle management solutions for modern healthcare providers.
//             </p>
            
//             {/* Trust badges */}
//             <div className="flex flex-wrap gap-3 pt-4">
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
//               >
//                 <RiMedal2Fill className="text-amber-400" />
//                 <span className="text-xs font-medium">Certified RCM Experts</span>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full"
//               >
//                 <FaShieldAlt className="text-blue-400" />
//                 <span className="text-xs font-medium">HIPPA Compliant</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Contact information */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="space-y-6"
//           >
//             <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
//               Get In Touch
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <FaPhoneAlt className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Sales & Support</p>
//                   <p className="text-white font-medium">(844) 722-3363</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Email Us</p>
//                   <p className="text-white font-medium">solutions@revenuemed.com</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Headquarters</p>
//                   <p className="text-white font-medium">Boston, MA • Austin, TX</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick links */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             className="space-y-6"
//           >
//             <h3 className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
//               Quick Links
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Case Studies</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Our Process</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Compliance</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 5 }}
//                 href="#"
//                 className="flex items-center text-gray-400 hover:text-white transition-colors group"
//               >
//                 <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span>Careers</span>
//               </motion.a>
//             </div>

//             {/* Social */}
//             <div className="pt-4">
//               <div className="flex space-x-4">
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiLinkedinFill className="text-xl" />
//                 </motion.a>
//                 <motion.a
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="text-gray-400 hover:text-blue-400 transition-colors"
//                 >
//                   <RiTwitterFill className="text-xl" />
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
//         >
//           <div>
//             © {new Date().getFullYear()} RevenueMed Solutions. All rights reserved.
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
//             <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
//             <a href="#" className="hover:text-gray-300 transition-colors">HIPPA</a>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;