'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const hiddenTextRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouseX(e.clientX - rect.left) // get X relative to button
  }

  useEffect(() => {
    if (cloudsRef.current) {
      const clouds = cloudsRef.current.children;
      Array.from(clouds).forEach((cloud) => {
        gsap.to(cloud, {
          opacity: isHovered ? 0.03 : Math.random() * 0.4 + 0.2,
          scale: isHovered ? 0.6 : Math.random() * 0.8 + 0.4,
          duration: 2,
          ease: 'power2.out'
        });
      });
    }
    
    if (hiddenTextRef.current) {
      gsap.to(hiddenTextRef.current, {
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 20,
        duration: 1.5,
        ease: 'power2.out'
      });
    }
  }, [isHovered]);

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full min-h-screen object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-3 md:px-6 lg:px-20 text-start">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[1.9rem] md:text-5xl xl:text-[3.5rem] Heading font-bold mb-5 md:mb-3 2xl:mb-6 leading-tight mt-31 lg:mt-40 2xl:mt-35 text-center 2xl:text-start"
        >
          <p className="font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              The AI Transformation Partner<br className='hidden lg:block'/> Your Competition Fears
              </span>
          </p>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-md xl:text-xl text-gray-400 mb-5 md:mb-3 2xl:mb-6 leading-relaxed text-center 2xl:text-start"
        >
          <span className='max-w-[60rem] 2xl:max-w-[30rem] whitespace-break-spaces lg:text-[1.4rem]'>We audit your workflows, build custom AI solutions, and deliver <br className='hidden 2xl:block'/>measurable ROI - making you the most efficient and profitable <br className='hidden 2xl:block'/>version of your business.</span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-md xl:text-xl text-gray-400 mb-5 md:mb-6 leading-relaxed text-center 2xl:text-start"
        >
          <span className='max-w-[40rem] 2xl:max-w-[30rem] whitespace-break-spaces lg:text-[1.4rem]'>“Not just another AI automation agency. We are your competitive advantage.”</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center 2xl:justify-start"
        >
          
          <AnimatedButton Value="SEE RESULTS" className='relative w-full lg:max-w-[18rem] h-[3rem] flex items-center justify-center overflow-hidden rounded-tl-full rounded-br-full px-4 py-3 font-semibold transition-all duration-300 shadow-md hover:shadow-lg gap-8 text-white'>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </AnimatedButton>
          <motion.button whileTap={{ scale: 0.95 }} onMouseMove={ handleMouseMove } className="relative w-full lg:max-w-[18rem] h-[3.1rem] flex items-center justify-center bg-gray-200 text-black md:bg-[#000204] md:border-2 border-blue-900/80 md:text-white gap-8 overflow-hidden rounded-tl-full rounded-br-full px-4 py-3 font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="md:text-white uppercase">Get My Free AI Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform md:text-white" />
          </motion.button>
        </motion.div>
        
        {/* Visual Montage */}
        <div
          className="md:mt-10 xl:mt-20 xl:mb-10 relative hidden md:block"
        >
          <div className="flex justify-center lg:justify-start 2xl:justify-end items-start xl:-mt-12 bg-scondary max-w-[90rem] 2xl:min-w-[63.3rem] xl:max-w-[63.3rem] rounded-xl">
          <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;