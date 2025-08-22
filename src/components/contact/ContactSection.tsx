import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Backgrounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-blue-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-violet-500/20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-5 lg:space-y-10"
          >
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Cut cost, not quality, with Chesta AI Agent
              </span>
            </h1>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Stop overpaying to waste your customers’ time.{" "}
              <span className="font-medium">Chesta AI Agent</span> delivers human-like conversations
              that boost your bottom line.
            </p>

            <ul className="grid w-full grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200 sm:max-w-lg">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />24/7, multilingual support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />Under 1 min avg. resolution</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />Seamless CRM integration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />Enterprise-grade security</li>
            </ul>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-gray-900/70"
          >
            <div className="mb-6">
              <h1 className="text-xl lg:text-xl 2xl:text-2xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Book a demo
                </span>
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Tell us about your team and we’ll tailor your walkthrough.</p>
            </div>
            <ContactForm />
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">By submitting this form, you agree to our Terms and acknowledge our Privacy Policy.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
