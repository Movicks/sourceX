'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

// Links
const navLinks = [
  { name: 'Pricing', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Blogs', href: '#' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute z-50 w-full px-2 md:px-4 lg:px-5 lg:pt-4"
    >
      <div className="py-2 lg:py-2 flex items-center justify-between px-2 md:px-4 w-full fixed top-0 left-0 z-50">
        
        {/* Logo */}
        <motion.div 
          className={`flex items-center rounded-tl-full rounded-br-full px-3 py-2 lg:px-13 lg:py-1 
            transition-all duration-600 ease-in-out
            ${isScrolled ? "border-2 border-blue-900/80 bg-[#000204] lg:px-13 overflow-hidden" : "border-2 border-blue-900/80 lg:border-none overflow-hidden bg-[#000204] lg:bg-transparent"}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/icons/weblogo.jpg" width={200} height={20} alt='logo' className='max-w-[10rem] md:min-w-[13rem] lg:min-w-[15rem]' />
        </motion.div>

        {/* Desktop Navigation */}
        <nav 
          className={`hidden md:flex items-center justify-center text-md space-x-8 rounded-tl-full rounded-br-full 
            md:px-8 lg:px-13 py-5 lg:py-3 text-center 
            transition-all duration-600 ease-in-out
            ${isScrolled ? "border-2 border-blue-900/80 bg-[#000204]" : "bg-transparent"}`}
        >
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-300 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side buttons + Mobile Menu Button */}
        <div 
          className={`flex items-center space-x-4 rounded-tl-full rounded-br-full px-4 lg:px-13 py-3 lg:py-1 
            transition-all duration-600 ease-in-out
            ${isScrolled ? "border-2 border-blue-900/80 bg-[#000204] px-8 lg:px-13" : "bg-transparent"}`}
        >
          <button className="hidden md:inline bg-gray-200 uppercase text-black px-4 rounded-tl-full rounded-br-full py-2 rounded-lg text-md font-medium hover:bg-gray-100 whitespace-nowrap">
            Contact Us
          </button>
          {/* Mobile Menu Toggler */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                type: "tween",
                ease: "easeInOut",
                duration: 0.2   
              }}
              className="fixed top-0 left-0 h-full w-62 bg-[#000204] border-r-2 border-blue-900/80 z-50 py-6 px-4 flex flex-col space-y-8"
            >
              <motion.div 
                className="flex items-center space-x-2 py-2 lg:px-13 lg:py-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
               <motion.div 
                  className={`flex items-center space-x-2 lg:py-2 -ml-2 lg:px-13 
                    transition-all duration-600 ease-in-out`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image src="/icons/weblogo.jpg" width={200} height={20} alt='logo' />
                </motion.div>
              </motion.div>
              
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="block text-gray-300 hover:text-white text-lg"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex flex-col justify-end space-y-3 pt-4 border-t-2 border-blue-900/80 h-full pb-6">
                <button className="inline md:hidden bg-white h-[2.8rem] text-lg text-black px-4 rounded-lg font-medium hover:bg-gray-100 rounded-tl-full rounded-br-full">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
