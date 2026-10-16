"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, scale: 1.015 }}
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#161b27]/80 backdrop-blur-xl p-6 sm:p-7 shadow-lg shadow-black/5 dark:shadow-blue-950/20 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top subtle glow strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4f8ef7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Category & Featured Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-500 dark:text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <FiArrowRight className="w-5 h-5 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-500 transition-all duration-300" />
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#1e2535]/80 text-slate-700 dark:text-slate-300 transition-colors group-hover:border-slate-300 dark:group-hover:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Row */}
      <div
        className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 mt-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Live Demo Link */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] hover:opacity-90 shadow-md shadow-blue-500/20 transition-all"
          aria-label={`Visit live demo for ${project.title}`}
        >
          <FiExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        {/* GitHub Repository Links */}
        {project.githubRepo && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 transition-all"
            aria-label={`View GitHub repository for ${project.title}`}
          >
            <FiGithub className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}

        {project.clientRepo && (
          <a
            href={project.clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="Client Repository"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 transition-all"
            aria-label={`View Client Code for ${project.title}`}
          >
            <FiGithub className="w-3.5 h-3.5" />
            <span>Client</span>
          </a>
        )}

        {project.serverRepo && (
          <a
            href={project.serverRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="Server Repository"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-[#1e2535] text-slate-700 dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-500 transition-all"
            aria-label={`View Server Code for ${project.title}`}
          >
            <FiGithub className="w-3.5 h-3.5" />
            <span>Server</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
