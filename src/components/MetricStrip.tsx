"use client";

import { cn } from "@/hooks/cn";
import useInView from "@/hooks/useInView";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const metrics = [
  {
    value: 17_000_000,
    suffix: "+",
    label: "Professionals upskilled in AI via our platforms",
    link: "#proof-professionals",
  },
  {
    value: 435,
    suffix: "+",
    label: "AI Opportunities identified for businesses",
    link: "#proof-opportunities",
  },
  {
    value: 55,
    suffix: "+",
    label: "Bespoke AI solutions developed",
    link: "#proof-bespoke",
  },
];

export default function CredibilityMetrics() {
  const { ref, inView } = useInView({ threshold: 0.1 });



  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white min-h-100 py-16 px-container overflow-hidden"
    >
      {/* Background cinematic layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/5 to-transparent skew-x-12" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-tr from-white/5 to-transparent skew-x-12" />
      </div>

      {/* Headline */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 relative z-10">
        We don’t sell <span className="text-accent">AI</span>. We sell{" "}
        <span className="italic text-accent">Results.</span>
      </h2>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center relative z-10">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-4">
            <div
            style={{
                transitionDelay: `${index * 0.2}s`
            }}
              className={
                cn(
                    "text-5xl font-bold text-white duration-600",
                    {
                        "opacity-100 translate-y-0":inView,
                        "opacity-0 translate-y-20":!inView
                    },
                    
                )
              }
            >
              <AnimatedCounter to={metric.value} suffix={metric.suffix} shown={inView}/>
            </div>
            <hr className="mx-auto border-accent w-24" />
            <p className="text-sm sm:text-base max-w-xs mx-auto">
              <a
                href={metric.link}
                className="hover:text-gold transition-colors underline underline-offset-4"
              >
                {metric.label}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  shown?:boolean
};

export function AnimatedCounter({ to, suffix = "",shown }: AnimatedCounterProps) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 2,
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) =>
    formatNumber(Math.floor(latest)) + suffix
  );

  useEffect(() => {
    if(!shown){motionValue.set(0)}else{ motionValue.set(to);}
   
  }, [motionValue, to,shown]);

  return (
    <motion.span>
      {displayValue}
    </motion.span>
  );
}

function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return `${value}`;
}
