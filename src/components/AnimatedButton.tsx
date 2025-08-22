import React from 'react'
import { motion } from 'framer-motion';

export default function AnimatedButton({Value, children, className}:{Value:string, children?:React.ReactNode, className?:string}) {
  return (
    <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          type="submit"
          className={`group relative w-full items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 rounded-tl-full rounded-br-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
        >
          <span
            className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25), transparent 60%)",
            }}
            onMouseMove={(e) => {
              const target = e.currentTarget as HTMLSpanElement;
              const rect = target.getBoundingClientRect();
              target.style.setProperty("--x", `${e.clientX - rect.left}px`);
              target.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
          />
          {Value} {children}
    </motion.button>
  )
}
