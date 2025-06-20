"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  RiCheckboxCircleFill,
  RiHistoryFill,
  RiLightbulbFlashFill,
  RiLineChartLine,
  RiMedalFill,
  RiShieldCheckFill,
  RiStarFill,
  RiTeamFill,
  RiUserHeartLine,
} from "react-icons/ri";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"story" | "mission" | "team">(
    "story"
  );
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  // const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      value: "14+",
      label: "Years Experience",
      icon: <RiHistoryFill className="text-blue-500" />,
    },
    {
      value: "200+",
      label: "Certified Professionals",
      icon: <RiTeamFill className="text-green-500" />,
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: <RiUserHeartLine className="text-purple-500" />,
    },
    {
      value: "24-48h",
      label: "Faster Turnaround",
      icon: <RiLineChartLine className="text-amber-500" />,
    },
  ];

  const benefits = [
    {
      title: "Multi-Specialty Expertise",
      description:
        "Experience across 20+ medical specialties with tailored solutions",
      icon: <RiMedalFill className="text-blue-500" />,
    },
    {
      title: "HIPAA-Compliant Processes",
      description: "Enterprise-grade security protecting patient data",
      icon: <RiShieldCheckFill className="text-green-500" />,
    },
    {
      title: "Real-Time Reporting",
      description: "Transparent dashboards with live performance metrics",
      icon: <RiLineChartLine className="text-purple-500" />,
    },
    {
      title: "Proactive Denial Prevention",
      description: "Identify and fix root causes before claims are denied",
      icon: <RiLightbulbFlashFill className="text-amber-500" />,
    },
  ];

  const leadershipTeam = [
    {
      name: "Dr. Arjun Sachidanand",
      title: "Chairman & Founder",
      // organization: 'Sudhanand Group',
      bio: "Visionary leader with extensive experience in healthcare and business, driving the organization to industry leadership.",
      img: "/ArjunSachidanand.jpeg",
      alt: "Portrait of Dr. Arjun Sachidanand",
    },
    {
      name: "Dr. Sini Arjun",
      title: "Managing Director",
      // organization: 'Sudhanand Group',
      bio: "Dynamic leader passionate about innovation and excellence, committed to delivering exceptional value to clients.",
      img: "/sinimam.jpg",
      alt: "Portrait of Dr. Sini Arjun",
    },
    {
      name: "Abhinandan S. Rao",
      title: "VP – New Initiatives & Investments",
      // organization: 'Sudhanand Group',
      bio: "Strategic thinker focused on exploring new opportunities and driving innovation for organizational growth.",
      img: "/Abhinandan S-Photoroom.png",
      alt: "Portrait of Abhinandan S. Rao",
    },
    {
      name: "Capt. Raghu M. Das",
      title: "Chief Operations Officer",
      // organization: 'Sudhanand Group',
      bio: "Seasoned operations professional ensuring excellence in service delivery and operational management.",
      img: "/captain.png",
      alt: "Portrait of Capt. Raghu M. Das",
    },
    {
      name: "Keshav Murthy",
      title: "VP - Internal Audit & Finance",
      // organization: 'Sudhanand Group',
      bio: "Finance expert maintaining financial integrity and transparency through rigorous audit processes.",
      img: "/Keshav murthy.png",
      alt: "Portrait of Keshav Murthy",
    },
    {
      name: "Vijay Asrani",
      title: "VP - Internal Finance",
      // organization: 'Sudhanand Group',
      bio: "Financial strategist overseeing operations and driving performance through sound fiscal management.",
      img: "/vijay.png",
      alt: "Portrait of Vijay Asrani",
    },
    {
      name: "Syed Abdul Wahab",
      title: "Facility & Project Manager",
      // organization: 'SBPL',
      bio: "Skilled manager delivering high-quality projects on time and within budget for operational success.",
      img: "/abdul.jpeg",
      alt: "Portrait of Syed Abdul Wahab",
    },
  ];

  // const leadership = [
  //   {
  //     name: "Dr. Sarah Johnson",
  //     title: "CEO & Founder",
  //     bio: "Board-certified physician with 20+ years in healthcare administration",
  //     img: "/leadership/ceo.jpg"
  //   },
  //   {
  //     name: "Michael Chen",
  //     title: "COO",
  //     bio: "Healthcare operations expert specializing in RCM optimization",
  //     img: "/leadership/coo.jpg"
  //   },
  //   {
  //     name: "Lisa Rodriguez",
  //     title: "Coding Director",
  //     bio: "AAPC-certified coding specialist with 15 years experience",
  //     img: "/leadership/coding-director.jpg"
  //   }
  // ];

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-gray-50 to-white my-8">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
              >
                <RiStarFill className="mr-2" />
                <span className="font-medium">TRUSTED PARTNER</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted Medical Billing Partner
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
                >
                  {" "}
                  Since 2024
                </motion.span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combining cutting-edge technology with deep healthcare expertise
                to simplify revenue cycle management
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story & Mission */}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6 sm:mb-8">
            <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveTab("story")}
                className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm flex items-center ${
                  activeTab === "story"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <RiHistoryFill className="mr-1 sm:mr-2" />
                Our Story
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm flex items-center ${
                  activeTab === "mission"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <RiLightbulbFlashFill className="mr-1 sm:mr-2" />
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm flex items-center ${
                  activeTab === "team"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <RiTeamFill className="mr-1 sm:mr-2" />
                Leadership Team
              </button>
            </nav>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                x:
                  activeTab === "story"
                    ? -20
                    : activeTab === "mission"
                    ? 20
                    : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x:
                  activeTab === "story"
                    ? -20
                    : activeTab === "mission"
                    ? 20
                    : 0,
              }}
              transition={{ duration: 0.3 }}
              className="py-2 sm:py-4"
            >
              {/* Story Tab */}
              {activeTab === "story" && (
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full md:w-1/2"
                  >
                    <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/Our story.jpg"
                        alt="Our office"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain md:object-cover"
                        priority
                      />
                    </div>
                  </motion.div>

                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      About Us:
                    </h2>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      At RCM, we believe billing should never be a barrier to
                      delivering exceptional patient care. Founded and led by
                      physicians who understand the realities of modern
                      healthcare, our mission is to remove the financial and
                      administrative friction that keeps providers from doing
                      what they do best caring for patients.
                    </p>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      Headquartered in Idea Gateway Inc, New York , USA with a
                      regional office in Mysore, India. We partner with
                      healthcare organizations of all sizes across the U.S.,
                      from solo practices to large group facilities. We deliver
                      smart, seamless, end-to-end revenue cycle solutions that
                      ensure consistent, optimized cash flow.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      We&apos;re more than a billing service. We&apos;re a team of
                      clinically minded professionals, financial strategists,
                      and technology specialists, all working together to help
                      practices not just survive but thrive.
                    </p>
                  </div>
                </div>
              )}

              {/* Mission Tab */}
              {activeTab === "mission" && (
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="w-full md:w-1/2 md:order-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Our Driving Purpose
                    </h2>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      <span className="text-blue-600 font-medium">
                        To simplify medical billing
                      </span>{" "}
                      so healthcare providers can focus on what matters most -
                      delivering exceptional patient care without the
                      administrative headaches.
                    </p>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      We believe that when providers are freed from billing
                      complexities, they can practice at the top of their
                      license, improving both patient outcomes and practice
                      financial health.
                    </p>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        Every system we build, every process we optimize, and
                        every claim we submit is done with one goal - to help
                        healthcare providers thrive in an increasingly complex
                        system.
                      </p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full md:w-1/2 order-1 md:order-2"
                  >
                    <div className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src="/Mission.png"
                        alt="Our mission"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Team Tab */}
              {activeTab === "team" && (
                <div className="mx-auto mt-6 sm:mt-8 md:mt-12 px-0 sm:px-0 max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl lg:mx-0"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                      Meet <span className="text-blue-600">Our Leadership</span>
                    </h2>
                  </motion.div>

                  <div className="mx-auto mt-8 sm:mt-12 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      {leadershipTeam.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                          className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl min-h-[250px] sm:min-h-[280px] md:h-[320px]"
                        >
                          {/* Default View */}
                          <motion.div
                            initial={{ opacity: 1 }}
                            whileHover={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10 text-center"
                          >
                            <motion.div
                              whileHover={{ y: -10 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="mb-3 sm:mb-4"
                            >
                              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 mx-auto">
                                <Image
                                  src={member.img}
                                  alt={member.alt}
                                  fill
                                  className="rounded-full border-4 border-white shadow-md object-fill"
                                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 150px"
                                />
                              </div>
                            </motion.div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                              {member.name}
                            </h4>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                              <p className="whitespace-pre-line text-blue-600">
                                {member.title}
                              </p>
                            </div>
                          </motion.div>

                          {/* Hover View - Slide Up Bio */}
                          <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 sm:p-6 text-center z-20"
                          >
                            <div className="relative h-12 w-12 sm:h-16 sm:w-16 mb-3 sm:mb-4 mx-auto">
                              <Image
                                src={member.img}
                                alt={member.alt}
                                fill
                                className="rounded-full border-4 border-white shadow-md object-fill"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-[150px] sm:max-h-[180px]">
                              {member.bio}
                            </p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('story')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'story'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <RiHistoryFill className="mr-2" />
                Our Story
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'mission'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <RiLightbulbFlashFill className="mr-2" />
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'team'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <RiTeamFill className="mr-2" />
                Leadership Team
              </button>
            </nav>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'story' ? -20 : activeTab === 'mission' ? 20 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'story' ? -20 : activeTab === 'mission' ? 20 : 0 }}
              transition={{ duration: 0.3 }}
              className="py-4"
            >
              {activeTab === 'story' && (
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className=" w-full md:w-1/2"
                  >
                    
                      <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                     
                      <Image
                        src="/Our story.jpg"
                        alt="Our office"
                        fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain md:object-cover"
          priority
                      />
                    </div>
                  </motion.div>

                  <div className="w-full md:w-1/2 ">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us:</h2>
                    <p className="text-gray-600 mb-6">
                      At RCM, we believe billing should never be a barrier to delivering exceptional patient care. Founded and led by physicians who understand the realities of modern healthcare, our mission is to remove the financial and administrative friction that keeps providers from doing what they do best caring for patients.
Headquartered in Idea Gateway Inc, New York , USA with a regional office in Mysore, India. We partner with healthcare organizations of all sizes across the U.S., from solo practices to large group facilities. We deliver smart, seamless, end-to-end revenue cycle solutions that ensure consistent, optimized cash flow.
                    </p>
                    <p className="text-gray-600 mb-4">
                      We&apos;re more than a billing service. We&apos;re a team of clinically minded professionals, financial strategists, and technology specialists, all working together to help practices not just survive but thrive.
                    </p>
                    <p className="text-gray-600">
                     At RCM, you&apos;re not outsourcing to a generic vendor. You&apos;re aligning with a team that speaks your language, shares your priorities, and is committed to protecting the business side of your practice.
                    </p>
                  </div>
                  
                </div>
              )}

              {activeTab === 'mission' && (
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 md:order-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Driving Purpose</h2>
                    <p className="text-gray-600 mb-6">
                      <span className="text-blue-600 font-medium">To simplify medical billing</span> so healthcare providers can focus on what matters most -
                      delivering exceptional patient care without the administrative headaches.
                    </p>
                    <p className="text-gray-600 mb-6">
                      We believe that when providers are freed from billing complexities, they can practice at the top of their license,
                      improving both patient outcomes and practice financial health.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-blue-600 font-medium">
                        &quot;Every system we build, every process we optimize, and every claim we submit is done with one goal -
                        to help healthcare providers thrive in an increasingly complex system.&quot;
                      </p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="md:w-1/2 order-1 md:order-2"
                  >
                   
                     <div className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src="/Mission.png"
                        alt="Our mission"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </motion.div>
                </div>
              )}

{activeTab === 'team' && (
  <div className="mx-auto mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl lg:mx-0"
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Meet <span className="text-blue-600">Our Leadership</span>
      </h2>
    </motion.div>

    <div className="mx-auto mt-12 sm:mt-20 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {leadershipTeam.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl min-h-[280px] sm:h-[320px]"
          >
            
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10 text-center"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="mb-3 sm:mb-4"
              >
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 mx-auto">
                  <Image
                    src={member.img}
                    alt={member.alt}
                    fill
                    className="rounded-full border-4 border-white shadow-md object-fill"
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
                  />
                </div>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <div className="text-sm text-gray-600 mt-1 sm:mt-2">
                <p className="whitespace-pre-line text-blue-600">
                  {member.title}
                </p>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 sm:p-6 text-center z-20"
            >
              <div className="relative h-16 w-16 mb-3 sm:mb-4 mx-auto">
                <Image
                  src={member.img}
                  alt={member.alt}
                  fill
                  className="rounded-full border-4 border-white shadow-md object-fill"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-[180px]">
                {member.bio}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)}
</motion.div>
          </AnimatePresence>
        </div> */}

        {/* Stats Section */}
        <motion.div
          className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Practices <span className="text-blue-200">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
              >
                {" "}
                Differentiators
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in medical billing and revenue cycle management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  hoveredBenefit === index
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start">
                  <motion.div
                    animate={{
                      scale: hoveredBenefit === index ? 1.1 : 1,
                      rotate: hoveredBenefit === index ? 5 : 0,
                    }}
                    className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4"
                  >
                    {benefit.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Dedicated Account Managers",
              "Custom Workflow Integrations",
              "Scalable Solutions",
              "Flexible Engagement Models",
              "Real-Time Dashboards",
              "Proactive Denial Prevention",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-center bg-gray-50 px-4 py-3 rounded-lg"
              >
                <RiCheckboxCircleFill className="text-green-500 mr-3" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Certifications &
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
              >
                {" "}
                Compliance
              </motion.span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "HIPAA Compliant",
                  description:
                    "Exceeds all healthcare privacy and security requirements",
                  icon: (
                    <RiShieldCheckFill className="text-blue-500 text-4xl mx-auto mb-4" />
                  ),
                },
                {
                  title: "SOC 2 Certified",
                  description:
                    "Rigorous standards for data security and availability",
                  icon: (
                    <RiMedalFill className="text-green-500 text-4xl mx-auto mb-4" />
                  ),
                },
                {
                  title: "AAPC Partner",
                  description:
                    "Recognized educational partner for coding excellence",
                  icon: (
                    <RiTeamFill className="text-purple-500 text-4xl mx-auto mb-4" />
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

// 'use client';
// import { AnimatePresence, motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';
// import {
//   RiCheckboxCircleFill,
//   RiHistoryFill,
//   RiLightbulbFlashFill,
//   RiLineChartLine,
//   RiMedalFill,
//   RiShieldCheckFill,
//   RiStarFill,
//   RiTeamFill,
//   RiUserHeartLine
// } from 'react-icons/ri';
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';

// const Page = () => {
//   const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'team'>('story');
//   const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

//   const stats = [
//     { value: "15+", label: "Years Experience", icon: <RiHistoryFill className="text-blue-500" /> },
//     { value: "200+", label: "Certified Professionals", icon: <RiTeamFill className="text-green-500" /> },
//     { value: "98%", label: "Client Retention", icon: <RiUserHeartLine className="text-purple-500" /> },
//     { value: "24-48h", label: "Claim Turnaround", icon: <RiLineChartLine className="text-amber-500" /> }
//   ];

//   const benefits = [
//     {
//       title: "Multi-Specialty Expertise",
//       description: "Experience across 20+ medical specialties with tailored solutions",
//       icon: <RiMedalFill className="text-blue-500" />
//     },
//     {
//       title: "HIPPA-Compliant Processes",
//       description: "Enterprise-grade security protecting patient data",
//       icon: <RiShieldCheckFill className="text-green-500" />
//     },
//     {
//       title: "Real-Time Reporting",
//       description: "Transparent dashboards with live performance metrics",
//       icon: <RiLineChartLine className="text-purple-500" />
//     },
//     {
//       title: "Proactive Denial Prevention",
//       description: "Identify and fix root causes before claims are denied",
//       icon: <RiLightbulbFlashFill className="text-amber-500" />
//     }
//   ];

//   const leadership = [
//     {
//       name: "Dr. Sarah Johnson",
//       title: "CEO & Founder",
//       bio: "Board-certified physician with 20+ years in healthcare administration",
//       img: "/leadership/ceo.jpg"
//     },
//     {
//       name: "Michael Chen",
//       title: "COO",
//       bio: "Healthcare operations expert specializing in RCM optimization",
//       img: "/leadership/coo.jpg"
//     },
//     {
//       name: "Lisa Rodriguez",
//       title: "Coding Director",
//       bio: "AAPC-certified coding specialist with 15 years experience",
//       img: "/leadership/coding-director.jpg"
//     }
//   ];

//   return (
//  <>
//  <NavBar />
//     <div className="bg-gradient-to-b from-gray-50 to-white my-8">
//       {/* Hero Section */}
//       <div className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4"
//             >
//               <RiStarFill className="mr-2" />
//               <span className="font-medium">TRUSTED PARTNER</span>
//             </motion.div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Your Trusted Medical Billing Partner
//             <span className="text-blue-600">Since 2024</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Combining cutting-edge technology with deep healthcare expertise to simplify revenue cycle management
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Story & Mission */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="-mb-px flex space-x-8">
//             <button
//               onClick={() => setActiveTab('story')}
//               className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
//                 activeTab === 'story'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <RiHistoryFill className="mr-2" />
//               Our Story
//             </button>
//             <button
//               onClick={() => setActiveTab('mission')}
//               className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
//                 activeTab === 'mission'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <RiLightbulbFlashFill className="mr-2" />
//               Our Mission
//             </button>
//             <button
//               onClick={() => setActiveTab('team')}
//               className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
//                 activeTab === 'team'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <RiTeamFill className="mr-2" />
//               Leadership Team
//             </button>
//           </nav>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: activeTab === 'story' ? -20 : activeTab === 'mission' ? 20 : 0 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: activeTab === 'story' ? -20 : activeTab === 'mission' ? 20 : 0 }}
//             transition={{ duration: 0.3 }}
//             className="py-4"
//           >
//             {activeTab === 'story' && (
//               <div className="flex flex-col md:flex-row gap-8 items-center">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="md:w-1/2"
//                 >
//                   <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
//                     <Image
//                       src="/about/office.jpg"
//                       alt="Our office"
//                       layout="fill"
//                       objectFit="cover"
//                     />
//                   </div>
//                 </motion.div>
//                 <div className="md:w-1/2">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Humble Beginnings</h2>
//                   <p className="text-gray-600 mb-6">
//                     Founded in 2024, we started as a small team of medical coders with a vision to transform healthcare revenue cycle management.
//                     What began in a modest office with just 5 employees has grown into a nationally recognized RCM leader serving 500+ providers.
//                   </p>
//                   <p className="text-gray-600">
//                     Through our commitment to technology innovation and clinical expertise, we&apos;ve redefined what medical billing partners can achieve -
//                     helping practices increase collections by an average of 27% while reducing administrative burdens.
//                   </p>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'mission' && (
//               <div className="flex flex-col md:flex-row gap-8 items-center">
//                 <div className="md:w-1/2 order-2 md:order-1">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Driving Purpose</h2>
//                   <p className="text-gray-600 mb-6">
//                     <span className="text-blue-600 font-medium">To simplify medical billing</span> so healthcare providers can focus on what matters most -
//                     delivering exceptional patient care without the administrative headaches.
//                   </p>
//                   <p className="text-gray-600 mb-6">
//                     We believe that when providers are freed from billing complexities, they can practice at the top of their license,
//                     improving both patient outcomes and practice financial health.
//                   </p>
//                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//                     <p className="text-blue-600 font-medium">
//                       &quot;Every system we build, every process we optimize, and every claim we submit is done with one goal -
//                       to help healthcare providers thrive in an increasingly complex system.&quot;
//                     </p>
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="md:w-1/2 order-1 md:order-2"
//                 >
//                   <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
//                     <Image
//                       src="/about/mission.jpg"
//                       alt="Our mission"
//                       layout="fill"
//                       objectFit="cover"
//                     />
//                   </div>
//                 </motion.div>
//               </div>
//             )}

//             {activeTab === 'team' && (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {leadership.map((member, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
//                     >
//                       <div className="relative h-64 bg-gray-100">
//                         <Image
//                           src={member.img}
//                           alt={member.name}
//                           layout="fill"
//                           objectFit="cover"
//                         />
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//                         <p className="text-blue-600 mb-3">{member.title}</p>
//                         <p className="text-gray-600">{member.bio}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">
//             Why Practices <span className="text-blue-200">Choose Us</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-xl p-6 text-center shadow-lg"
//               >
//                 <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
//                   {stat.icon}
//                 </div>
//                 <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
//                 <p className="text-gray-700">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             Our <span className="text-blue-600">Differentiators</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             What sets us apart in medical billing and revenue cycle management
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               onHoverStart={() => setHoveredBenefit(index)}
//               onHoverEnd={() => setHoveredBenefit(null)}
//               className={`p-6 rounded-xl border-2 transition-all ${
//                 hoveredBenefit === index
//                   ? 'border-blue-500 bg-blue-50 shadow-lg'
//                   : 'border-gray-200 bg-white'
//               }`}
//             >
//               <div className="flex items-start">
//                 <motion.div
//                   animate={{
//                     scale: hoveredBenefit === index ? 1.1 : 1,
//                     rotate: hoveredBenefit === index ? 5 : 0
//                   }}
//                   className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4"
//                 >
//                   {benefit.icon}
//                 </motion.div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[
//             "Dedicated Account Managers",
//             "Custom Workflow Integrations",
//             "Scalable Solutions",
//             "Flexible Engagement Models",
//             "Real-Time Dashboards",
//             "Proactive Denial Prevention"
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 + index * 0.05 }}
//               className="flex items-center bg-gray-50 px-4 py-3 rounded-lg"
//             >
//               <RiCheckboxCircleFill className="text-green-500 mr-3" />
//               <span className="text-gray-700">{item}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Certifications */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12">
//             Certifications & <span className="text-blue-600">Compliance</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "HIPAA Compliant",
//                 description: "Exceeds all healthcare privacy and security requirements",
//                 icon: <RiShieldCheckFill className="text-blue-500 text-4xl mx-auto mb-4" />
//               },
//               {
//                 title: "SOC 2 Certified",
//                 description: "Rigorous standards for data security and availability",
//                 icon: <RiMedalFill className="text-green-500 text-4xl mx-auto mb-4" />
//               },
//               {
//                 title: "AAPC Partner",
//                 description: "Recognized educational partner for coding excellence",
//                 icon: <RiTeamFill className="text-purple-500 text-4xl mx-auto mb-4" />
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//               >
//                 {item.icon}
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//  <Footer />
//  </>
//   );
// };

// export default Page;
