"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAnalytics } from "@/lib/hooks/use-analytics";
import { sendContactEmail } from "@/app/api/send/action";


// Inner component with analytics functionality
function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "Web Application"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

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
          projectType: "Web Application"
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
    <section id="Contact" className="bg-gray-50 dark:bg-gray-900/20 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="red_gradient">Let's Build Something Impactful</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Have a business challenge that needs a technical solution? I'm ready to help transform your vision into reality with code that delivers results.
          </p>
        </motion.div>

        {/* Main Content - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Project Info & Discovery Call */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6">
            
            {/* Project Info Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Let's Discuss Your Project</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  I partner with businesses and entrepreneurs to create digital solutions that solve real problems and drive measurable growth. Whether you need an AI-powered web application, a performance-optimized website, or strategic technical guidance, I'm here to help.
                </p>
                
                <div className="h-px bg-gray-100 dark:bg-gray-700"></div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Looking for:</h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-center text-gray-700 dark:text-gray-300 text-xs">
                      <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>AI Integration Projects</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300 text-xs">
                      <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Next.js/React Web Applications</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300 text-xs">
                      <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Performance Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Calendar Booking Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Schedule a Discovery Call</h3>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Prefer a quick conversation? Book a 15-minute call to discuss your project needs and how I can help bring your ideas to life.
              </p>
              
              <a 
                href="https://cal.com/abdullahsaeed/15min?user=abdullahsaeed" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('booking_click', { source: 'contact_section' })}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-colors w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a 15-min Discovery Call
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">Send Me a Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all"
                      >
                        <option value="Web Application">Web Application</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Performance Optimization">Performance Optimization</option>
                        <option value="Consultation">Technical Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all"
                      placeholder="Tell me about your project and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-4 rounded-lg text-white font-medium transition-all duration-300 
                      ${isSubmitting ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <svg className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Message Sent</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for reaching out! I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3.5 rounded-lg text-white font-medium bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Full Width Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Find Me At</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a 
              href="https://github.com/AbdullahSaeed1211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/10 dark:bg-black/30 group-hover:scale-110 transition-transform">
                <FaGithub className="text-2xl text-gray-800 dark:text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm mt-1">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/abdullah-saeed1211/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform">
                <FaLinkedinIn className="text-2xl text-blue-700 dark:text-blue-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm mt-1">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:example@example.com" 
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 group-hover:scale-110 transition-transform">
                <HiMail className="text-2xl text-red-600 dark:text-red-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm mt-1">Email</span>
            </a>
            
            <a 
              href="https://twitter.com/abdullahsaeed_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform">
                <FaTwitter className="text-2xl text-blue-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm mt-1">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
