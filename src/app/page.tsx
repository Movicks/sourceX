'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import BookDemo from '@/components/BookDemo';
import ContactSection from '@/components/contact/ContactSection';
import CredibilityMetrics from '@/components/MetricStrip';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for the glowing effect
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to('.glow-effect', {
      opacity: 0.8,
      scale: 1.1,
      duration: 3,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <div ref={containerRef} className="text-white overflow-hidden">
      <Header />
      <HeroSection />
      <ContactSection/>
      <CredibilityMetrics/>
      <BookDemo/>
      <Footer/>
    </div>
  );
}
