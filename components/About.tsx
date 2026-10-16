"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiAward } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";

const highlights = [
  {
    icon: FiCode,
    title: "Full-Stack Architecture",
    description: "Building end-to-end web apps with modern React, Next.js App Router, and Node.js REST APIs.",
  },
  {
    icon: FiLayers,
    title: "Database Design & Auth",
    description: "Architecting efficient data schemas in MongoDB & PostgreSQL, paired with JWT & Firebase Auth.",
  },
  {
    icon: FiCpu,
    title: "AI-Augmented Velocity",
    description: "Leveraging cutting-edge AI dev workflows for rapid prototyping, robust debugging, and optimization.",
  },
  {
    icon: FiAward,
    title: "Engineering Foundation",
    description: "Pursuing B.Sc. in Computer Science & Engineering at ULAB (2022–2026) with strong DSA core.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-3"
          >
            <span>Overview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/70 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-black/5 dark:shadow-blue-950/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
              Passionate developer bridging design and scalable engineering
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
              Hello! I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Shahriar Al Shihab</span>, a full-stack developer based in Dhaka, Bangladesh. Currently completing my B.Sc. in Computer Science &amp; Engineering at the University of Liberal Arts Bangladesh (ULAB), I build responsive, production-ready applications with strong attention to both user interface fidelity and backend reliability.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
              My core technology stack revolves around <span className="text-slate-900 dark:text-white font-medium">React, Next.js (App Router), Node.js, Express, and MongoDB</span>. I take pride in crafting smooth interactive experiences with Framer Motion, robust REST APIs, and leveraging modern AI-assisted engineering workflows to ship features faster and with higher code quality.
            </p>

            {/* Quick Tech Badges */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", icon: SiReact, color: "text-cyan-400" },
                  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800 dark:text-white" },
                  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
                  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200"
                  >
                    <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Highlight Metric / Skill Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/60 backdrop-blur-md hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:text-[#4f8ef7] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
