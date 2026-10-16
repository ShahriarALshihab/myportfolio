"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiHeart } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white/70 dark:bg-[#0a0a0f] border-t border-slate-200/80 dark:border-slate-800/80 pt-16 pb-12 overflow-hidden transition-colors">
      {/* Gradient Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4f8ef7] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/#home"
              className="flex items-center gap-2 text-xl font-bold tracking-tight mb-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4f8ef7] to-[#8b5cf6] p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white dark:bg-[#0d1117] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono text-sm font-extrabold bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] bg-clip-text text-transparent">
                    SA
                  </span>
                </div>
              </div>
              <span className="font-mono text-lg font-bold tracking-wide text-slate-900 dark:text-white">
                Shahriar<span className="text-[#4f8ef7]">.dev</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Full Stack Developer specializing in high-performance web applications with React,
              Next.js, and Node.js.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a
              href="/#home"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="/#about"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#skills"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="/#projects"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="/#education"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Education
            </a>
            <a
              href="/#contact"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ShahriarALshihab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-sm"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahriar-al-shihab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-sm"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-sm group"
            >
              <FiArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 Shahriar Al Shihab. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with <FiHeart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
