"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import { FiCalendar, FiMapPin, FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-3"
          >
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3.5 h-1 bg-gradient-to-r from-[#4f8ef7] via-[#6e77fa] to-[#8b5cf6] rounded-full shadow-sm shadow-blue-500/50"
          />
        </div>

        {/* Card: Slide-in animation from left on scroll */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group p-[2px] rounded-3xl bg-gradient-to-r from-[#4f8ef7] via-[#8b5cf6] to-[#4f8ef7] shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />

          {/* Inner Card Container */}
          <div className="relative rounded-[22px] bg-white/95 dark:bg-[#161b27]/95 backdrop-blur-2xl p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-start gap-5 sm:gap-6">
              {/* Graduation Cap Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#4f8ef7] to-[#8b5cf6] p-[2px] shrink-0 shadow-lg shadow-blue-500/25">
                <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#0d1117] flex items-center justify-center text-[#4f8ef7] dark:text-[#5fa5f9]">
                  <HiAcademicCap className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-110 duration-300" />
                </div>
              </div>

              {/* Degree & Institution Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>2022 – 2026</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Bachelor of Science in Computer Science &amp; Engineering (CSE)
                </h3>

                <h4 className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span>University of Liberal Arts Bangladesh (ULAB)</span>
                </h4>

                <p className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <FiMapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>Dhaka, Bangladesh</span>
                </p>

                {/* Coursework highlights */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 flex items-center gap-1 mr-1">
                    <FiBookOpen className="w-3.5 h-3.5" />
                    Key Focus:
                  </span>
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Web Engineering",
                    "Object-Oriented Programming",
                    "Operating Systems",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Pill Badge */}
            <div className="md:self-center shrink-0">
              <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Currently Enrolled</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
