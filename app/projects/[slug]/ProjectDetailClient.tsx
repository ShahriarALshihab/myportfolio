"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiCalendar,
  FiUserCheck,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Project } from "@/data/projects";

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#9ca3af" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  "Firebase Auth": { icon: SiFirebase, color: "#ffca28" },
  JWT: { icon: SiJsonwebtokens, color: "#d63aff" },
};

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href="/#projects"
          id="back-to-projects-btn"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/70 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-200 group"
        >
          <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Main Project Card / Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#161b27]/80 backdrop-blur-2xl p-5 sm:p-8 md:p-10 shadow-2xl shadow-black/5 dark:shadow-blue-950/20 relative overflow-hidden"
      >
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4f8ef7] via-[#8b5cf6] to-[#4f8ef7]" />

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-amber-500/20 bg-amber-500/10 text-amber-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Featured Project
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {project.timeline && (
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            )}
            {project.role && (
              <span className="flex items-center gap-1.5">
                <FiUserCheck className="w-3.5 h-3.5" />
                {project.role}
              </span>
            )}
          </div>
        </div>

        {/* Project Title (Large, Gradient) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 break-words">
          <span className="bg-gradient-to-r from-[#4f8ef7] via-[#6e77fa] to-[#8b5cf6] bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>

        {/* Short Summary Lead */}
        <p className="text-base sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-6 sm:mb-8 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Project Action Buttons (Live Demo + GitHub) */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-slate-200 dark:border-slate-800">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="detail-live-demo-btn"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>

          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              id="detail-github-repo-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              id="detail-client-repo-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FiGithub className="w-4 h-4" />
              <span>Client Repo (Frontend)</span>
            </a>
          )}

          {project.serverRepo && (
            <a
              href={project.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              id="detail-server-repo-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FiGithub className="w-4 h-4" />
              <span>Server Repo (Backend)</span>
            </a>
          )}
        </div>

        {/* Section: Project Overview & Deep Dive */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Section: Key Highlights & Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Key Architectural Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#1e2535]/50 backdrop-blur-sm"
                  >
                    <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Tech Stack with Colored Icon Badges */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4f8ef7]" />
              Technologies &amp; Libraries
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => {
                const techMeta = techIconMap[tech];
                const Icon = techMeta?.icon || FiLayers;
                const iconColor = techMeta?.color || "#4f8ef7";

                return (
                  <div
                    key={tech}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e2535] shadow-sm hover:border-blue-500/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 shrink-0" style={{ color: iconColor }} />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
