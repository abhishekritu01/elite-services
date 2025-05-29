
'use client'
import Link from 'next/link'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHandsHelping, FaBalanceScale } from 'react-icons/fa';
import { HiTrendingUp } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';

// const navItems = [
//     { name: "Home", link: "/" },
//     { name: "Careers", link: "/careers" },
//     { name: "About Us", link: "/about" },
// ];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CareerSection = () => {
    return (
        <>
            <div className="bg-white">
                <NavBar />
                <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
                    {/* Animated gradient background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                    >
                        <svg
                            className="relative left-[calc(50%-11rem)] -top-[10rem] h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#gradient)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="gradient"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F97316" />
                                    <stop offset={1} stopColor="#FB923C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="text-center"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                            >
                                Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="mt-8 text-lg font-medium text-gray-600 sm:text-xl"
                            >
                                At SiniMeds,  we are transforming the healthcare industry—one claim, one insight, and one solution at a time. As a trusted leader in Revenue Cycle Management (RCM) and Healthcare Analytics, we enable healthcare providers to focus on what matters most: patient care.
                            </motion.p>
                            <motion.p
                                variants={fadeInUp}
                                className="mt-8 text-lg font-medium text-gray-600 sm:text-xl"
                            >Behind our success is a team of driven, passionate, and innovative professionals. If you&apos;re looking to build a meaningful career in a fast-growing, technology-driven industry, we want to hear from you.
                            </motion.p>
                            <motion.div
                                variants={fadeInUp}
                                className="mt-10 flex items-center justify-center gap-x-6"
                            >
                                <Link
                                    href="/career/apply"
                                    className="relative inline-flex items-center justify-center px-4 py-3 overflow-hidden text-sm font-semibold text-white border border-transparent rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 group"
                                    passHref
                                >
                                    <motion.span
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="block w-full h-full"
                                    >
                                        <span className="absolute inset-0 overflow-hidden">
                                            <span className="absolute -inset-2 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-inset-1" />
                                        </span>
                                        <span className="relative">View Open Positions</span>
                                    </motion.span>
                                </Link>
                                <Link
                                    href="/about"
                                    className="flex items-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                                >
                                    Learn About Us
                                    <FaArrowRight className="ml-1 text-purple-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className="mt-16 bg-gradient-to-br grey p-8 rounded-2xl shadow-sm border border-blue-600"
                            >
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Work With Us?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <FaHandsHelping className="text-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-600">Make a Real Impact: Help improve healthcare outcomes by optimizing revenue and reducing costs.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HiTrendingUp className="text-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-600">Grow With Us: Advance your career through learning, mentorship, and internal mobility.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MdLightbulbOutline className="text-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-600">Innovate Daily: Work with modern tech and visionary teams in a collaborative setting.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaBalanceScale className="text-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-600">Balance Matters: Enjoy flexibility, wellness programs, and a supportive work culture.</p>
                                    </div>
                                    {/* <div className="flex items-start gap-3 md:col-span-2">
                  <FaHandsHelping className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Enjoy flexible work arrangements and competitive benefits.</p>
                </div> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default CareerSection