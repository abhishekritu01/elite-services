'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  RiShieldCheckLine,
  RiShieldStarFill,
  RiFileTextLine,
  RiRefreshLine,
  RiGlobalLine,
  RiLockLine,
  RiUserSharedLine,
  RiTeamLine
} from 'react-icons/ri';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PrivacyPolicySection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [hoverCard, setHoverCard] = useState<string | null>(null);

  const policySections = {
    collection: {
      title: "1. Information We Collect",
      icon: <RiFileTextLine className="text-blue-600" />,
      items: [
        "Personal Information: Name, address, phone number, email, and other contact details.",
        "Health Information: Medical records, diagnoses, treatment information, and insurance details (Protected Health Information or PHI).",
        "Billing Information: Claim data, billing codes, payer information, payment details.",
        "Technical Data: IP address, browser type, operating system, and usage data when interacting with our systems."
      ],
      bgColor: "bg-blue-50"
    },
    usage: {
      title: "2. How We Use Your Information",
      icon: <RiTeamLine className="text-purple-600" />,
      items: [
        "To perform medical billing and coding services",
        "To verify insurance eligibility and coverage",
        "To submit claims to payers and follow up on reimbursement",
        "To communicate with healthcare providers, payers, and authorized parties",
        "To improve our services, technology, and compliance protocols",
        "To comply with legal obligations and respond to lawful requests"
      ],
      bgColor: "bg-purple-50"
    },
    sharing: {
      title: "3. Data Sharing and Disclosure",
      icon: <RiUserSharedLine className="text-teal-600" />,
      items: [
        "With authorized healthcare providers to facilitate billing",
        "With insurance companies and third-party payers for reimbursement",
        "With clearinghouses or software vendors involved in claim submission",
        "With regulatory or legal authorities when required by law",
        "With business associates under HIPAA-compliant agreements",
        "We do not sell or rent your personal or health information"
      ],
      bgColor: "bg-teal-50"
    },
    security: {
      title: "4. Data Security",
      icon: <RiLockLine className="text-amber-600" />,
      items: [
        "Encrypted data transmission and storage",
        "Secure access controls and authentication",
        "Regular system audits and vulnerability assessments",
        "Staff training on data protection and HIPAA compliance",
        "Physical safeguards for all data storage facilities"
      ],
      bgColor: "bg-amber-50"
    },
    rights: {
      title: "5. Your Rights",
      icon: <RiShieldCheckLine className="text-green-600" />,
      items: [
        "Request access to your personal or health information",
        "Request corrections to inaccurate data",
        "Request restrictions on certain uses or disclosures",
        "Obtain an accounting of disclosures",
        "File a complaint if you believe your privacy rights have been violated"
      ],
      bgColor: "bg-green-50"
    },
    thirdParty: {
      title: "6. Third-Party Links and Tools",
      icon: <RiGlobalLine className="text-red-600" />,
      items: [
        "Our website or software may contain links to third-party services.",
        "We are not responsible for their privacy practices.",
        "We encourage you to review their policies before engaging."
      ],
      bgColor: "bg-red-50"
    },
    updates: {
      title: "7. Policy Updates",
      icon: <RiRefreshLine className="text-indigo-600" />,
      items: [
        "We may update this Privacy Policy periodically.",
        "All changes will be posted on our website with the updated effective date.",
        "Continued use of our services implies acceptance of the revised terms."
      ],
      bgColor: "bg-indigo-50"
    }
  };

  const handleCardHover = (key: string | null) => {
    setHoverCard(key);
  };

  const handleCardClick = (key: string) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
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
              <span className="font-medium">Privacy Commitment</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Privacy Policy
              </span> & Data Protection
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to protecting your personal and health information
            </p>
          </div>

          {/* Policy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(policySections).map(([key, section]) => (
              <div
                key={key}
                onMouseEnter={() => handleCardHover(key)}
                onMouseLeave={() => handleCardHover(null)}
                onClick={() => handleCardClick(key)}
                className="relative cursor-pointer"
              >
                <motion.div
                  initial={false}
                  animate={{
                    height: activeCard === key || hoverCard === key ? 'auto' : '180px',
                    transition: { type: "spring", damping: 25, stiffness: 100 }
                  }}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                    activeCard === key || hoverCard === key ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <div className={`absolute inset-0 ${section.bgColor} opacity-0 ${
                    activeCard === key || hoverCard === key ? 'opacity-10' : ''
                  } transition-opacity duration-300`} />
                  
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    </div>

                    <AnimatePresence>
                      {(activeCard === key || hoverCard === key) ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pb-4"
                        >
                          <ul className="space-y-3">
                            {section.items.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start text-gray-600"
                              >
                                <span className="text-blue-500 mr-2">•</span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.ul
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-2"
                        >
                          {section.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start text-gray-600">
                              <span className="text-blue-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicySection;











// 'use client';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import {
//   RiShieldCheckLine,
//   RiShieldStarFill,
//   RiFileTextLine,
//   RiRefreshLine,
//   RiGlobalLine,
//   RiLockLine,
//   RiUserSharedLine,
//   RiTeamLine
// } from 'react-icons/ri';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';


// const PrivacyPolicySection = () => {
//   const [activeCard, setActiveCard] = useState<string | null>(null);

//   const policySections = {
//     collection: {
//       title: "1. Information We Collect",
//       icon: <RiFileTextLine className="text-blue-600" />,
//       items: [
//         "Personal Information: Name, address, phone number, email, and other contact details.",
//         "Health Information: Medical records, diagnoses, treatment information, and insurance details (Protected Health Information or PHI).",
//         "Billing Information: Claim data, billing codes, payer information, payment details.",
//         "Technical Data: IP address, browser type, operating system, and usage data when interacting with our systems."
//       ]
//     },
//     usage: {
//       title: "2. How We Use Your Information",
//       icon: <RiTeamLine className="text-purple-600" />,
//       items: [
//         "To perform medical billing and coding services",
//         "To verify insurance eligibility and coverage",
//         "To submit claims to payers and follow up on reimbursement",
//         "To communicate with healthcare providers, payers, and authorized parties",
//         "To improve our services, technology, and compliance protocols",
//         "To comply with legal obligations and respond to lawful requests"
//       ]
//     },
//     sharing: {
//       title: "3. Data Sharing and Disclosure",
//       icon: <RiUserSharedLine className="text-teal-600" />,
//       items: [
//         "With authorized healthcare providers to facilitate billing",
//         "With insurance companies and third-party payers for reimbursement",
//         "With clearinghouses or software vendors involved in claim submission",
//         "With regulatory or legal authorities when required by law",
//         "With business associates under HIPAA-compliant agreements",
//         "We do not sell or rent your personal or health information"
//       ]
//     },
//     security: {
//       title: "4. Data Security",
//       icon: <RiLockLine className="text-amber-600" />,
//       items: [
//         "Encrypted data transmission and storage",
//         "Secure access controls and authentication",
//         "Regular system audits and vulnerability assessments",
//         "Staff training on data protection and HIPAA compliance",
//         "Physical safeguards for all data storage facilities"
//       ]
//     },
//     rights: {
//       title: "5. Your Rights",
//       icon: <RiShieldCheckLine className="text-green-600" />,
//       items: [
//         "Request access to your personal or health information",
//         "Request corrections to inaccurate data",
//         "Request restrictions on certain uses or disclosures",
//         "Obtain an accounting of disclosures",
//         "File a complaint if you believe your privacy rights have been violated"
//       ]
//     },
//     thirdParty: {
//       title: "6. Third-Party Links and Tools",
//       icon: <RiGlobalLine className="text-red-600" />,
//       items: [
//         "Our website or software may contain links to third-party services.",
//         "We are not responsible for their privacy practices.",
//         "We encourage you to review their policies before engaging."
//       ]
//     },
//     updates: {
//       title: "7. Policy Updates",
//       icon: <RiRefreshLine className="text-indigo-600" />,
//       items: [
//         "We may update this Privacy Policy periodically.",
//         "All changes will be posted on our website with the updated effective date.",
//         "Continued use of our services implies acceptance of the revised terms."
//       ]
//     }
//   };

//   const handleCardInteraction = (key: string) => {
//     setActiveCard(activeCard === key ? null : key);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <NavBar/>
      
//       <main className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring" }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
//             >
//               <RiShieldStarFill className="mr-2" />
//               <span className="font-medium">Privacy Commitment</span>
//             </motion.div>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                 Privacy Policy
//               </span> & Data Protection
//             </h2>

//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our commitment to protecting your personal and health information
//             </p>
//           </div>

//           {/* Policy Sections */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(policySections).map(([key, section]) => (
//               <div
//                 key={key}
//                 onClick={() => handleCardInteraction(key)}
//                 className="relative cursor-pointer"
//               >
//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: activeCard === key ? 'auto' : '180px',
//                     transition: { type: "spring", damping: 25, stiffness: 100 }
//                   }}
//                   className={`bg-white rounded-xl shadow-lg overflow-hidden border ${activeCard === key ? 'border-blue-500' : 'border-gray-200'}`}
//                 >
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
//                         {section.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
//                     </div>

//                     <AnimatePresence>
//                       {activeCard === key ? (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="pb-4"
//                         >
//                           <ul className="space-y-3">
//                             {section.items.map((item, i) => (
//                               <motion.li
//                                 key={i}
//                                 initial={{ x: -10, opacity: 0 }}
//                                 animate={{ x: 0, opacity: 1 }}
//                                 transition={{ delay: i * 0.05 }}
//                                 className="flex items-start text-gray-600"
//                               >
//                                 <span className="text-blue-500 mr-2">•</span>
//                                 {item}
//                               </motion.li>
//                             ))}
//                           </ul>
//                         </motion.div>
//                       ) : (
//                         <motion.ul
//                           initial={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           className="space-y-2"
//                         >
//                           {section.items.slice(0, 3).map((item, i) => (
//                             <li key={i} className="flex items-start text-gray-600">
//                               <span className="text-blue-500 mr-2">•</span>
//                               {item}
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// };

// export default PrivacyPolicySection;