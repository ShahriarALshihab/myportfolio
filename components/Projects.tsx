"use client";

import { motion } from "framer-motion";
import { FiFolderPlus, FiLayers } from "react-icons/fi";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-3"
          >
            <FiLayers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            My{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3.5 h-1 bg-gradient-to-r from-[#4f8ef7] via-[#6e77fa] to-[#8b5cf6] rounded-full shadow-sm shadow-blue-500/50"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            A curated collection of full-stack web applications showcasing responsive UIs, robust
            backends, and real-world functionality.
          </motion.p>
        </div>

        {/* Card Grid: 1 col mobile -> 2 col tablet -> 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}

          {/* Placeholder: More projects coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.15 }}
            className="rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-800 bg-white/30 dark:bg-[#161b27]/30 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center min-h-[320px] group hover:border-blue-500/40 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <FiFolderPlus className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
              More Projects Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Currently crafting new full-stack solutions with Next.js App Router, TypeScript, and AI integrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
