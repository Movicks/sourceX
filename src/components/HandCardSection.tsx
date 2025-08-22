import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles, ArrowRight, Calendar } from "lucide-react";
import AnimatedButton from "./AnimatedButton";


export default function BeforeAfterCTA({
  beforePoints = [
    "Spreadsheet juggling",
    "Copy-paste across tools",
    "Reviews take days",
  ],
  afterPoints = [
    "Unified AI workflow",
    "Smart routing + automations",
    "Approvals in minutes",
  ],
  handImageSrc,
  startHref = "/",
}: {
  beforePoints?: string[];
  afterPoints?: string[];
  handImageSrc?: string;
  zeegUrl?: string;
  startHref?: string;
}) {

  const listVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.08, delayChildren: 0.02 },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }),
    []
  );

  return (
    <section className="w-full bg-neutral-950 text-white">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            <p className="font-semibold leading-tight tracking-tight text-gray-900">
              <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
               Before & After - See the AI Difference
              </span>
            </p>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 text-neutral-300 max-w-2xl mx-auto"
          >
            Side-by-side comparison of your current process vs an AI-powered workflow.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="relative rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 md:p-8 overflow-hidden"
          >
            <Badge tone="danger" label="Before" icon={<XCircle className="h-4 w-4" />} />

            {/* Mocked UI */}
            <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-900/60">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-neutral-400">Legacy Workflow</span>
              </div>
              <div className="p-4 space-y-3 text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Manual steps & waiting
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Siloed tools & context switching
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Risk of human error
                </div>
              </div>
            </div>

            {/* Bullets */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 space-y-3"
            >
              {beforePoints.map((point, i) => (
                <motion.li
                  key={`before-${i}`}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-neutral-300"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700">
                    <XCircle className="h-3.5 w-3.5" />
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative rounded-2xl bg-accent border border-neutral-800 p-6 md:p-8 overflow-hidden"
          >
            <Badge tone="success" label="With AI" icon={<Sparkles className="h-4 w-4" />} />

            {/* Mocked UI */}
            <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
                <div className="h-2 w-2 rounded-full bg-sky-400" />
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="ml-2 text-sm text-neutral-300">AI Workflow</span>
              </div>
              <div className="p-4 space-y-3 text-sm text-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Automated tasks + guardrails
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Unified hub & insights
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-neutral-700" />
                  Faster cycle times
                </div>
              </div>
            </div>

            {/* Bullets */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 space-y-3"
            >
              {afterPoints.map((point, i) => (
                <motion.li
                  key={`after-${i}`}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-neutral-100">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Post-Section CTA */}
        <div className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Visual: Hand + Glowing Card */}
              <div className="relative order-2 lg:order-1">
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -inset-8 opacity-60 [filter:blur(56px)]" aria-hidden>
                  <div className="absolute inset-0 bg-[conic-gradient(at_top_left,theme(colors.indigo.500),theme(colors.sky.400),theme(colors.emerald.400),theme(colors.indigo.500))]" />
                </div>

                <div className="relative aspect-[4/3] w-full">
                  {handImageSrc ? (
                    <Image
                      src={handImageSrc}
                      alt="Hand holding a card"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  ) : (
                    <div className="h-full w-full rounded-2xl border border-neutral-800 bg-neutral-950/40 grid place-items-center">
                      <span className="text-neutral-400 text-sm">Add your hand image (handImageSrc)</span>
                    </div>
                  )}

                  {/* Floating "Source X" Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="absolute bottom-6 left-6 right-6 mx-auto max-w-xs rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="absolute -inset-1 rounded-2xl opacity-80 [mask-image:linear-gradient(to_bottom,white,transparent)] bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 blur-2xl" />
                      <div className="relative p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-widest text-white/80">Source X</span>
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div className="mt-6 text-xl font-semibold tracking-tight">AI Access Card</div>
                        <div className="mt-1 text-xs text-white/70">Unlock workflows, automate ops</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Copy + CTAs */}
              <div className="order-1 lg:order-2">
                <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-gray-900">
                    <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                        Step into the future of your business.
                    </span>
                </p>
                <p className="mt-3 text-neutral-300 max-w-prose">
                  Replace busywork with intelligent automation. Orchestrate data, approvals, and decisions with an AI copilot built for speed, accuracy, and control.
                </p>

                <div className="mt-6 flex flex-wrap md:flex-nowrap items-center gap-3 w-full">
                  <button
                    className="group w-full md:max-w-[13rem] h-[3.1rem] flex items-center justify-center bg-gray-200 text-black md:bg-[#000204] md:border-2 border-blue-900/80 md:text-white gap-8 overflow-hidden rounded-tl-full rounded-br-full px-4 py-3 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Calendar className="h-4 w-4" /> Book Demo
                  </button>

                    <AnimatedButton Value="" className="w-full md:max-w-[13rem] h-[3.1rem] inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-900 md:px-8">
                        Start with AI <ArrowRight className="h-4 w-4" />
                    </AnimatedButton>
                </div>

                <p className="mt-3 text-xs text-neutral-400">No long setup. See value in minutes.</p>
              </div>
            </div>        
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label, tone = "neutral", icon }: { label: string; tone?: "neutral" | "danger" | "success"; icon?: React.ReactNode }) {
  const toneClasses =
    tone === "danger"
      ? "bg-red-500/15 text-red-300 border-red-500/30"
      : tone === "success"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : "bg-white/10 text-white border-white/20";

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${toneClasses}`}>
      {icon}
      <span className="font-medium tracking-wide">{label}</span>
    </div>
  );
}
