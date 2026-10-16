"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiExpress,
  SiFirebase,
  SiAxios,
  SiNestjs,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FiDatabase,
  FiServer,
  FiShield,
  FiTerminal,
  FiBookOpen,
  FiCpu,
  FiZap,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  glowColor: string;
  level?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core programming languages for typed, scalable engineering",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", glowColor: "rgba(247, 223, 30, 0.25)" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", glowColor: "rgba(49, 120, 198, 0.25)" },
      { name: "SQL", icon: FiDatabase, color: "#00d8ff", glowColor: "rgba(0, 216, 255, 0.25)" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern component-driven UI frameworks and reactive architectures",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb", glowColor: "rgba(97, 218, 251, 0.25)" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", glowColor: "rgba(255, 255, 255, 0.25)" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "High-performance server runtimes, microservices, and API routing",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", glowColor: "rgba(51, 153, 51, 0.25)" },
      { name: "Express.js", icon: SiExpress, color: "#9ca3af", glowColor: "rgba(156, 163, 175, 0.25)" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e", glowColor: "rgba(224, 35, 78, 0.25)" },
      { name: "REST APIs", icon: FiServer, color: "#fb923c", glowColor: "rgba(251, 146, 60, 0.25)" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Document, relational, and structured data persistence layers",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", glowColor: "rgba(71, 162, 72, 0.25)" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", glowColor: "rgba(65, 105, 225, 0.25)" },
      { name: "SQL", icon: FiDatabase, color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.25)" },
    ],
  },
  {
    id: "auth",
    title: "Authentication",
    description: "Identity management, token issuance, and access authorization",
    skills: [
      { name: "Firebase Auth", icon: SiFirebase, color: "#ffca28", glowColor: "rgba(255, 202, 40, 0.25)" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff", glowColor: "rgba(214, 58, 255, 0.25)" },
      { name: "Better Auth", icon: FiShield, color: "#10b981", glowColor: "rgba(16, 185, 129, 0.25)" },
    ],
  },
  {
    id: "ai",
    title: "AI-Assisted Dev",
    description: "Leveraging cutting-edge AI paradigms for accelerated delivery",
    skills: [
      { name: "AI Code Generation", icon: HiSparkles, color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.25)" },
      { name: "Debugging Assistance", icon: FiTerminal, color: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.25)" },
      { name: "Code Explanation", icon: FiBookOpen, color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.25)" },
      { name: "Problem Solving", icon: FiCpu, color: "#818cf8", glowColor: "rgba(129, 140, 248, 0.25)" },
      { name: "Dev Productivity Workflows", icon: FiZap, color: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.25)" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Version control, collaboration, and client networking",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032", glowColor: "rgba(240, 80, 50, 0.25)" },
      { name: "GitHub", icon: SiGithub, color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.25)" },
      { name: "Axios", icon: SiAxios, color: "#5a29e4", glowColor: "rgba(90, 41, 228, 0.25)" },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoriesToRender =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with Animated Gradient Underline */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-3"
          >
            <span>Capabilities &amp; Tech Stack</span>
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
              Skills
            </span>
          </motion.h2>

          {/* Animated gradient underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3.5 h-1 bg-gradient-to-r from-[#4f8ef7] via-[#6e77fa] to-[#8b5cf6] rounded-full shadow-sm shadow-blue-500/50"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] text-white shadow-md shadow-blue-500/25 scale-105"
                : "border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-[#161b27]/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] text-white shadow-md shadow-blue-500/25 scale-105"
                : "border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-[#161b27]/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grouped Grid Layout */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {categoriesToRender.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#161b27]/40 backdrop-blur-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Animated Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200/80 dark:border-slate-800/80 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] shadow-sm shadow-blue-500/50" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges Grid: 2 cols mobile -> 4 cols tablet -> 6 cols desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#1e2535]/70 backdrop-blur-md cursor-default transition-all duration-300 hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:shadow-xl text-center"
                        style={
                          {
                            "--glow-color": skill.glowColor,
                          } as React.CSSProperties
                        }
                      >
                        {/* Glowing Background Pulse on Hover */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${skill.glowColor} 0%, transparent 70%)`,
                          }}
                        />

                        {/* Icon */}
                        <div
                          className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                          }}
                        >
                          <Icon
                            className="w-7 h-7 transition-colors duration-300"
                            style={{ color: skill.color }}
                          />
                        </div>

                        {/* Name Label */}
                        <span className="relative z-10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
