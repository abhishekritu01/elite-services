'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

interface DropdownItem {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
     { name: 'About', href: '/about' },
    // { 
    //   name: 'Services', 
    //   href: '#services',
    //   dropdown: [
    //     { icon: <FaFileInvoiceDollar />, name: 'Medical Billing', desc: 'End-to-end billing solutions' },
    //     { icon: <FaChartLine />, name: 'Revenue Cycle', desc: 'Optimize your revenue flow' },
    //     { icon: <FaUserMd />, name: 'Provider Solutions', desc: 'Tailored for practitioners' }
    //   ]
    // },
    { name: 'Services', href: '/services' },
    { name: 'HIPPA', href: '/hippa' },
    { name: 'Contact', href: '/contact' }
  ];

  // Animation variants
  const navbarVariants = {
    scrolled: {
      height: '70px',
      padding: '0.5rem 0',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(8px)',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    normal: {
      height: '90px',
      padding: '1.5rem 0',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: 'none',
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    scrolled: { scale: 0.9 },
    normal: { scale: 1 }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    },
    closed: { 
      opacity: 0,
      y: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const navItemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0, duration: 0.4 }
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 top-0 left-0 px-4 sm:px-6 lg:px-8"
      initial="normal"
      animate={scrolled ? "scrolled" : "normal"}
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo with scaling animation */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            variants={logoVariants}
            animate={scrolled ? "scrolled" : "normal"}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MedBill<span className="text-gray-800">Pro</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 h-full">
            {navLinks.map((link, index) => (
              <div key={index} className="relative h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group ${activeDropdown === index ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                  // whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  }}
                >
                  {link.name}
                  {link.dropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="ml-1" />
                    </motion.span>
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="absolute left-0 top-full mt-0 w-64 origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <div className="py-1">
                          {link.dropdown.map((item, i) => (
                            <motion.a
                              key={i}
                              href="#"
                              className="flex items-start px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 group"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-blue-500 mr-3 mt-0.5">{item.icon}</span>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.a
              href="#contact"
              className="ml-4 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="mr-2" /> Contact Us
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-40 mt-16"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-auto h-full">
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={navItemVariants}>
                  {link.dropdown ? (
                    <div className="mb-2">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full flex justify-between items-center px-3 py-3 text-base font-medium rounded-md ${activeDropdown === index ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span>{link.name}</span>
                        <motion.span
                          animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            className="pl-4 mt-1 space-y-1"
                            variants={dropdownVariants}
                          >
                            {link.dropdown.map((item, i) => (
                              <motion.a
                                key={i}
                                href="#"
                                className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-blue-50 hover:text-blue-600 flex items-start"
                                whileHover={{ x: 5 }}
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="text-blue-500 mr-3 mt-0.5">{item.icon}</span>
                                <div>
                                  <p>{item.name}</p>
                                  <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.a
                href="#contact"
                className="block w-full mt-4 px-4 py-3 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 flex items-center justify-center"
                variants={navItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
              >
                <FaPhoneAlt className="mr-2" /> Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;