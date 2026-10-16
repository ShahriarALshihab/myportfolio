"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shahriar.al.shihab@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate EmailJS or Nodemailer for real email delivery
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>Let&apos;s Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] bg-clip-text text-transparent">
              Touch
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
            Have a project in mind, an opportunity to discuss, or just want to say hi? Feel free to
            reach out directly or send a message below.
          </motion.p>
        </div>

        {/* Both Sides Animate on Scroll */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I am actively seeking full-time opportunities, high-impact collaborations, and
                contract projects. Let&apos;s build something great together.
              </p>

              {/* Email Card with Copy button */}
              <div className="group relative p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 shadow-sm flex items-center justify-between gap-4">
                <a
                  href="mailto:shahriar.al.shihab@gmail.com"
                  id="contact-email-link"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                      Email
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      shahriar.al.shihab@gmail.com
                    </p>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <FiCheck className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href="tel:+8801750617596"
                id="contact-phone-link"
                className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 shadow-sm flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                    Phone
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                    +880 1750617596
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#161b27]/80 backdrop-blur-xl transition-all duration-300 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                Connect On Social Platforms
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/shahriar-al-shihab"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-[#161b27] text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all font-medium text-sm shadow-sm"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/ShahriarALshihab"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-btn"
                  aria-label="GitHub profile"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-[#161b27] text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all font-medium text-sm shadow-sm"
                >
                  <SiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#161b27]/80 backdrop-blur-2xl p-7 sm:p-10 shadow-xl shadow-black/5 dark:shadow-blue-950/20 relative">
              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 shadow-md"
                    role="alert"
                  >
                    <FiCheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div className="text-sm">
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="opacity-90">
                        Thank you for reaching out. Shahriar will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 font-semibold mb-2"
                    >
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e2535] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email-input"
                      className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 font-semibold mb-2"
                    >
                      Your Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email-input"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e2535] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 font-semibold mb-2"
                  >
                    Subject <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e2535] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 font-semibold mb-2"
                  >
                    Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e2535] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit button with loading state */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4f8ef7] to-[#8b5cf6] hover:opacity-95 shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
