"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiArrowDown, FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiCode, HiSparkles } from "react-icons/hi";



const roles = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Backend Engineer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [imgError, setImgError] = useState(false);


  useEffect(() => {
    const fullRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length + 1 === fullRole.length) {

          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >

      {!imgError ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Shahriar Al Shihab Work Environment"
            fill
            priority
            quality={85}
            className="object-cover object-center filter blur-[2px] scale-105 transition-opacity duration-700"
            onError={() => setImgError(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4ff]/95 via-[#f0f4ff]/85 to-[#f0f4ff]/70 dark:from-[#0a0a0f]/95 dark:via-[#0a0a0f]/85 dark:to-[#0a0a0f]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4ff] via-transparent to-[#f0f4ff]/40 dark:from-[#0a0a0f] dark:via-transparent dark:to-[#0a0a0f]/50" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-[#f0f4ff] dark:bg-[#0a0a0f]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      )}


      <div className="absolute top-28 right-12 lg:right-24 hidden lg:block z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-4 rounded-2xl bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-xl border border-white/40 dark:border-blue-500/20 shadow-xl shadow-blue-500/10 flex items-center gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <HiSparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Status</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              Available for Hire
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-32 left-8 lg:left-20 hidden lg:block z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-4 rounded-2xl bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-xl border border-white/40 dark:border-purple-500/20 shadow-xl shadow-purple-500/10 flex items-center gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
            <HiCode className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Specialization</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Next.js & Full-Stack
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center sm:items-start"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                &lt; Hello World /&gt;
              </span>
            </div>
          </motion.div>


          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
          >
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] via-[#6e77fa] to-[#8b5cf6] bg-clip-text text-transparent">
              Shahriar Al Shihab
            </span>
          </motion.h1>


          <motion.div
            variants={itemVariants}
            className="h-10 sm:h-12 flex items-center justify-center sm:justify-start gap-1 font-mono text-xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6"
          >
            <span>I am a </span>
            <span className="text-[#4f8ef7] dark:text-[#5fa5f9] underline decoration-[#8b5cf6]/40 underline-offset-8">
              {currentText}
            </span>
            <span className="inline-block w-[3px] h-6 sm:h-8 bg-[#4f8ef7] ml-0.5 animate-pulse" />
          </motion.div>


          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-center sm:text-left"
          >
            Passionate full-stack developer crafting modern, scalable web experiences with React,
            Next.js, and Node.js. I build things that live on the internet.
          </motion.p>


          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-10 w-full"
          >

            <a
              href="/Shahriar Al Shihab_cv.pdf"
              download="Shahriar_Al_Shihab(CV).pdf"
              id="hero-download-cv-btn"
              className="relative group overflow-hidden px-6 py-3.5 rounded-full font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] transition-transform duration-300 group-hover:scale-105" />

              <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[100%]" />
              <FiDownload className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="relative z-10 text-sm font-semibold tracking-wide">Download CV</span>
            </a>

            {/* View Projects CTA */}
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="px-6 py-3.5 rounded-full font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 text-sm font-semibold"
            >
              <span>Explore Projects</span>
              <FiExternalLink className="w-4 h-4 text-blue-500" />
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-slate-600 dark:text-slate-400"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
              Find Me On
            </span>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ShahriarALshihab"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                aria-label="Shahriar Al Shihab on GitHub"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-al-shihab"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                aria-label="Shahriar Al Shihab on LinkedIn"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 tracking-widest uppercase transition-colors group-hover:text-blue-500">
            Scroll Down
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-colors shadow-sm"
          >
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
