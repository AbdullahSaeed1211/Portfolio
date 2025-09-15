"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAnalytics } from "@/lib/hooks/use-analytics";
import { sendContactEmail } from "@/app/api/send/action";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";


// Inner component with analytics functionality
function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "Job Opportunity"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const { trackEvent } = useAnalytics();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Track the form submission attempt
    trackEvent('contact_form_submit', {
      source: 'contact_section'
    });
    
    setIsSubmitting(true);
    
    try {
      // Call our server action to send email with Resend
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        // Track success
        trackEvent('contact_form_success', {
          source: 'contact_section'
        });
        
        // Reset form and show success state
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          inquiryType: "Job Opportunity"
        });
      } else {
        // Track error
        trackEvent('contact_form_error', {
          source: 'contact_section',
          error_type: 'api_error'
        });
        
        setError(result.error || "Failed to send your message. Please try again.");
      }
    } catch (err) {
      // Track unexpected error
      trackEvent('contact_form_error', {
        source: 'contact_section',
        error_type: 'unexpected_error'
      });
      
      setError("An unexpected error occurred. Please try again later.");
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Open to Opportunities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight">
            <span className="text-black dark:text-white">
              Let's {` `}
            </span>
            <span className="italic text-blue-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Passionate Computer Science student graduating June 2025, seeking full-stack developer roles where I can contribute my expertise in AI-powered applications, scalable web solutions, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Main Content - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Professional Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6">

            {/* Resume & Availability Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl shadow-sm border border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Full-Stack Developer</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Computer Science student at Amity University (graduating June 2025) with hands-on experience in AI-powered web applications, scalable architectures, and innovative problem-solving. Based in India, open to remote opportunities worldwide.
                </p>

                <div className="h-px bg-blue-200 dark:bg-blue-700"></div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">India (Remote)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Start Date:</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Immediately</span>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('resume_download', { source: 'contact_section' })}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>

            {/* Interview Preparation Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl shadow-sm border border-green-200/50 dark:border-green-800/50">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Interview Ready</h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Prepared for technical interviews at top companies. Let's discuss your process and ensure I'm the perfect fit for your team.
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Strengths:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI/ML & Computer Vision Integration
                  </div>
                  <div className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full-Stack Web Development (Next.js, React, TypeScript)
                  </div>
                  <div className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Database Design & API Development
                  </div>
                  <div className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Optimization & Scalability
                  </div>
                  <div className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Leadership & Technical Workshops
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">Reach Out</h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                          placeholder="Your full name"
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                          placeholder="your.email@example.com"
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Inquiry Type - Full Width */}
                  <div className="relative">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Internship">Internship Opportunity</option>
                        <option value="Freelance Project">Freelance Project</option>
                        <option value="Technical Interview">Technical Interview Practice</option>
                        <option value="Mentorship">Mentorship/Networking</option>
                        <option value="Collaboration">Open Source Collaboration</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        placeholder="What's this about?"
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-vertical placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        placeholder="Tell me about the opportunity, role requirements, or how I can help your team..."
                      ></textarea>
                      <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden
                      ${isSubmitting
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg active:scale-[0.98]'
                      }`}
                  >
                    {!isSubmitting && (
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                    {isSubmitting && (
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Message Sent Successfully! 🎉</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Thank you for reaching out! I'll review your message and get back to you within 24 hours.
                    <br />
                    <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 block">
                      You can also find me on LinkedIn for faster responses.
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Send Another Message
                    </button>

                    <a
                      href="https://www.linkedin.com/in/abdullah-saeed1211/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Schedule a Call Section - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto mb-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-xl border border-blue-200/50 dark:border-blue-800/50 shadow-sm">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Schedule a Call</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Available for 15-minute introductory calls to discuss job opportunities, mentorship, or potential project collaborations.
              </p>

              <a
                href="https://cal.com/abdullahsaeed/15min?user=abdullahsaeed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('booking_click', { source: 'contact_section' })}
                className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book 15-min Intro Call
              </a>
            </div>
          </div>
        </motion.div>

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          trackEvent={trackEvent}
        />

        {/* Full Width Social Links Section */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="w-full"
>
  <div className="text-center mb-8">
    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
      Let's Connect
    </h3>
    <p className="text-muted-foreground text-sm">
      Find me across the web or drop me a line
    </p>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
    <motion.a 
      href="https://github.com/AbdullahSaeed1211" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 border border-border transition-all duration-300 overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-black/5 dark:from-gray-400/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
        <FaGithub className="text-xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        GitHub
      </span>
    </motion.a>
    
    <motion.a 
      href="https://www.linkedin.com/in/abdullah-saeed1211/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 border border-border transition-all duration-300 overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-all duration-300">
        <FaLinkedinIn className="text-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        LinkedIn
      </span>
    </motion.a>
    
    <motion.a 
      href="mailto:example@example.com" 
      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 border border-border transition-all duration-300 overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/50 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-all duration-300">
        <HiMail className="text-xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        Email
      </span>
    </motion.a>
    
    <motion.a 
      href="https://twitter.com/abdullahsaeed_" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 border border-border transition-all duration-300 overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/50 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-all duration-300">
        <FaTwitter className="text-xl text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        Twitter
      </span>
    </motion.a>
  </div>
</motion.div>
</div>
</section>
  );
}

// Resume Modal Component
const ResumeModal = ({ isOpen, onClose, trackEvent }) => {
  const resumeUrl = "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view";

  const handleViewResume = () => {
    trackEvent('resume_view_modal', { source: 'contact_section' });
    window.open(resumeUrl, '_blank');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 p-0 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Resume Preview</h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleViewResume}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </button>
                <Dialog.Close asChild>
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            {/* Resume iframe */}
            <div className="flex-1 p-6">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title="Resume Preview"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Main component with Suspense
const Contact = () => {
  return (
    <Suspense fallback={
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gradient-to-r from-red-100 to-red-200 mx-auto rounded"></div>
            <div className="h-4 w-96 bg-gray-200 mt-3 max-w-2xl mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-40"></div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96"></div>
            </div>
          </div>
        </div>
      </section>
    }>
      <ContactContent />
    </Suspense>
  );
};

export default Contact;
