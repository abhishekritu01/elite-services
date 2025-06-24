"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoIosTrendingUp, IoMdRibbon, IoIosVolumeOff, IoIosVolumeHigh } from "react-icons/io";
import { FaPlay, FaPause, FaExpand, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

const SimpleRCMOverview = () => {

    // Video controls state
  const [isMuted, setIsMuted] = useState(true); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });
 const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check for mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle visibility changes
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.log("Autoplay was prevented:", err);
            setIsPlaying(false);
          });
      }
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = !!document.fullscreenElement;
      setIsFullscreen(fullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Handle fullscreen
  const toggleFullscreen = async () => {
    try {
      if (!videoContainerRef.current) return;
      
      if (!document.fullscreenElement) {
        await videoContainerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };
    
  useEffect(() => {
    // Store the current ref value in a variable
    const currentTimeout = controlsTimeoutRef.current;
    return () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  }, []);
    
  return (
    <div className="max-w-full mx-auto py-8 bg-white  md:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* RCM Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Revenue Cycle Management
          </h2>
          <p className="text-gray-600 mb-4">
            Revenue Cycle Management (RCM) is the financial process that
            healthcare facilities use to track patient care episodes from
            registration to final payment.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                End-to-end claims processing from patient registration to
                payment collection
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Reduces claim denials and improves cash flow
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Ensuring maximum reimbursement
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Compliance with healthcare regulations and payer requirements
              </span>
            </li>
          </ul>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="/rcm-cycle">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-8 py-4 overflow-hidden border border-transparent text-sm md:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg group"
              >
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-inset-4" />
                </span>

                <span className="relative flex items-center">
                  <span>Learn More About RCM</span>
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
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
            </Link>
          </div>
        </motion.div>

    {/* Video Player Component */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden relative group order-1 md:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: isMobile ? 1 : 1.02 }}
          ref={videoContainerRef}
        >
          <div className="aspect-square flex items-center justify-center relative">
            <video
              className="w-full h-full object-fill rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              src="/Sinimedsvdo.mp4"
              loop
              muted={isMuted}
              ref={videoRef}
              onClick={togglePlay}
              playsInline
            />
            
            {/* Regular Video Controls - always visible on mobile */}
            {!isFullscreen && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center"
                initial={{ opacity: 1 }}
                animate={controls}
              >
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <FaPause className="h-4 w-4" />
                    ) : (
                      <FaPlay className="h-4 w-4" />
                    )}
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <IoIosVolumeOff className="h-4 w-4" />
                    ) : (
                      <IoIosVolumeHigh className="h-4 w-4" />
                    )}
                  </button>
                </div>
                
                {!isMobile && (
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                      className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                      aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                    >
                      {isFullscreen ? (
                        <FaTimes className="h-4 w-4" />
                      ) : (
                        <FaExpand className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
            
            {/* Fullscreen Video Controls - always visible in fullscreen mode */}
            {isFullscreen && !isMobile && (
              <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-gradient-to-t from-black/80 to-transparent">
                <div className="container mx-auto px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <FaPause className="h-5 w-5" />
                        ) : (
                          <FaPlay className="h-5 w-5" />
                        )}
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <IoIosVolumeOff className="h-5 w-5" />
                        ) : (
                          <IoIosVolumeHigh className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                      className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                      aria-label="Exit fullscreen"
                    >
                      <FaTimes className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Large play button overlay when paused */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                <button
                  className="p-4 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                  aria-label="Play"
                >
                  <FaPlay className="h-8 w-8" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default SimpleRCMOverview;