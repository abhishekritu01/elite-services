'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiCustomerService2Fill,
  RiMessage3Fill,
  RiCalendarEventFill,
  RiLiveFill,
  RiArrowRightLine,
  RiCheckboxCircleFill,
  RiCloseLine,
  RiPhoneFill,
  RiMailFill,
  RiMapPin2Fill
} from 'react-icons/ri';
import {FaPhoneAlt} from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';
import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'call'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the form data to your backend here
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    {
      icon: <RiCustomerService2Fill className="text-blue-500" />,
      title: "Billing Support",
      description: "Questions about payments, claims, or reimbursements"
    },
    {
      icon: <RiCalendarEventFill className="text-green-500" />,
      title: "Implementation",
      description: "Onboarding and system setup assistance"
    },
    {
      icon: <RiMessage3Fill className="text-purple-500" />,
      title: "Live Chat",
      description: "Instant messaging with our team",
      comingSoon: true
    },
    {
      icon: <RiLiveFill className="text-amber-500" />,
      title: "Technical Support",
      description: "Help with software or integration issues"
    }
  ];

  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4">
            <RiCustomerService2Fill className="mr-2" />
            <span className="font-medium">CONTACT US</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team is ready to help with your medical billing needs
          </p>
        </div>

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 px-6 py-4 font-medium text-sm flex items-center justify-center ${
                      activeTab === 'form'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <RiMailFill className="mr-2" />
                    Contact Form
                  </button>
                  <button
                    onClick={() => setActiveTab('call')}
                    className={`flex-1 px-6 py-4 font-medium text-sm flex items-center justify-center ${
                      activeTab === 'call'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <RiPhoneFill className="mr-2" />
                    Call Us
                  </button>
                </div>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <RiCheckboxCircleFill className="text-green-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We&ldquo;ll respond to your inquiry within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : activeTab === 'form' ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Send Message
                        <RiArrowRightLine className="ml-2" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <RiPhoneFill className="text-blue-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Call Our Support Team
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Available Monday-Friday, 8am-8pm EST
                    </p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">
                      1-800-MED-BILL
                    </div>

<motion.a
    href="tel:18006332455"
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)"
    }}
    whileTap={{ scale: 0.95 }}
    className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-transparent md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group w-full"
  >
    <span className="absolute inset-0 overflow-hidden">
      <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
    </span>

    <span className="relative flex items-center">
      <span>Call Now</span>
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
        <FaPhoneAlt className="text-xl" />
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
  </motion.a>
                    {/* <a
                      href="tel:18006332455"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full"
                    >
                      Call Now
                    </a> */}




                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Services Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How Can We Help You?
              </h2>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className={`p-4 rounded-lg border ${
                      service.comingSoon 
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        : 'border-blue-100 bg-blue-50 cursor-pointer hover:bg-blue-100'
                    }`}
                    onClick={() => service.comingSoon && setShowComingSoon(true)}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4 shadow-sm">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 flex items-center">
                          {service.title}
                          {service.comingSoon && (
                            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Our Office
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <RiMapPin2Fill className="text-gray-500 mt-1 mr-3" />
                    <p className="text-gray-600">
                      123 Medical Drive, Suite 400<br />
                      Boston, MA 02115
                    </p>
                  </div>
                  <div className="flex items-center">
                    <RiPhoneFill className="text-gray-500 mr-3" />
                    <p className="text-gray-600">1-800-MED-BILL</p>
                  </div>
                  <div className="flex items-center">
                    <RiMailFill className="text-gray-500 mr-3" />
                    <p className="text-gray-600">support@medbillsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Modal */}
        <AnimatePresence>
          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowComingSoon(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Feature Coming Soon!
                  </h3>
                  <button
                    onClick={() => setShowComingSoon(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <RiCloseLine className="text-xl" />
                  </button>
                </div>
                <div className="text-center py-6">
                  <RiMessage3Fill className="text-blue-500 text-5xl mx-auto mb-4" />
                  <p className="text-gray-600 mb-6">
                    Our Live Chat feature is currently in development and will be available next quarter.
                    Please use our contact form or call us for immediate assistance.
                  </p>
                  <button
                    onClick={() => setShowComingSoon(false)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Understood
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;