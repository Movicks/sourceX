'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const hiddenTextRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouseX(e.clientX - rect.left) // get X relative to button
  }

  useEffect(() => {
    // Animate floating clouds
    if (cloudsRef.current) {
      const clouds = cloudsRef.current.children;
      Array.from(clouds).forEach((cloud, index) => {
        gsap.set(cloud, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.8,
          scale: Math.random() * 0.8 + 0.4,
          opacity: Math.random() * 0.4 + 0.2
        });
        
        gsap.to(cloud, {
          x: `+=${Math.random() * 300 - 150}`,
          y: `+=${Math.random() * 150 - 75}`,
          duration: Math.random() * 25 + 35,
          repeat: -1,
          yoyo: true,
          ease: 'none'
        });
        
        gsap.to(cloud, {
          scale: Math.random() * 0.4 + 0.6,
          duration: Math.random() * 10 + 12,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        });
      });
    }

    // Animate particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, index) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.7 + 0.3
        });
        
        gsap.to(particle, {
          y: '-=300',
          x: `+=${Math.random() * 20 - 40}`,
          duration: Math.random() * 18 + 25,
          repeat: -1,
          ease: 'none',
          delay: Math.random() * 8
        });
        
        gsap.to(particle, {
          opacity: Math.random() * 0.9 + 0.4,
          duration: Math.random() * 5 + 4,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        });
      });
    }

    // Animate the central beam
    if (beamRef.current) {
      gsap.fromTo(beamRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 4, ease: 'power2.out', delay: 1.5 }
      );
      
      gsap.to(beamRef.current, {
        filter: 'brightness(1.3) saturate(1.2)',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, []);

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

      {/* Floating Particles */}
      {/* <div ref={particlesRef} className="absolute inset-0 pointer-events-none ">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'bg-blue-400/70' : 
              i % 5 === 1 ? 'bg-purple-400/70' : 
              i % 5 === 2 ? 'bg-cyan-400/70' : 
              i % 5 === 3 ? 'bg-white/60' : 'bg-indigo-400/70'
            }`}
            style={{
              width: `${Math.random() * 1 + 5}px`,
              height: `${Math.random() * 1 + 5}px`,
              filter: 'blur(1px)',
              boxShadow: '0 0 15px currentColor'
            }}
          />
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-3 md:px-6 lg:px-20 text-start">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[1.9rem] md:text-5xl xl:text-[3.5rem] Heading font-bold mb-5 md:mb-6 leading-tight mt-31 lg:mt-33 xl:mt-35 text-center lg:text-start"
        >
          <span className="block gradient-text bg-clip-text text-transparent">
            The AI Transformation Partner<br className='hidden lg:block'/> Your Competition Fears
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-md xl:text-xl text-gray-400 mb-5 md:mb-6 leading-relaxed text-center lg:text-start"
        >
          <span className='max-w-[30rem] whitespace-break-spaces lg:text-[1.4rem]'>We audit your workflows, build custom AI solutions, and deliver <br className='hidden lg:block'/>measurable ROI - making you the most efficient and profitable <br className='hidden lg:block'/>version of your business.</span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-md xl:text-xl text-gray-400 mb-5 md:mb-6 leading-relaxed text-center lg:text-start"
        >
          <span className='max-w-[30rem] whitespace-break-spaces lg:text-[1.4rem]'>“Not just another AI automation agency. We are your competitive advantage.”</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <motion.button whileTap={{ scale: 0.95 }} onMouseMove={ handleMouseMove } className="relative w-full lg:max-w-[18rem] h-[3rem] flex items-center justify-center text-black gap-8 overflow-hidden rounded-tl-full rounded-br-full px-4 py-1 bg-gray-200 font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="md:text-black">SEE RESULTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform md:text-black" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onMouseMove={ handleMouseMove } className="relative w-full lg:max-w-[18rem] h-[3.1rem] flex items-center justify-center bg-gray-200 text-black md:bg-[#000204] md:border-2 border-blue-900/80 md:text-white gap-8 overflow-hidden rounded-tl-full rounded-br-full px-4 py-3 font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="md:text-white uppercase">Get My Free AI Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform md:text-white" />
          </motion.button>
        </motion.div>
        
        {/* Visual Montage */}
        <div
          className="md:mt-10 xl:mt-20 xl:mb-10 relative hidden md:block"
        >
          <div className="flex justify-center xl:justify-end items-start xl:-mt-12 bg-scondary max-w-[75rem] xl:min-w-[63.3rem] xl:max-w-[63.3rem] rounded-xl">
          <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;