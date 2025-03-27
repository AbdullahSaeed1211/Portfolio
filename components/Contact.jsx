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
    <section id="contact" className="bg-gray-50 py-20">
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
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Have a business challenge that needs a technical solution? I'm ready to help transform your vision into reality with code that delivers results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Discuss Your Project</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  I partner with businesses and entrepreneurs to create digital solutions that solve real problems and drive measurable growth. Whether you need an AI-powered web application, a performance-optimized website, or strategic technical guidance, I'm here to help.
                </p>
                
                <div className="h-px bg-gray-100"></div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Looking for:</h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-center text-gray-700 text-xs">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI Integration Projects
                    </li>
                    <li className="flex items-center text-gray-700 text-xs">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Next.js/React Web Applications
                    </li>
                    <li className="flex items-center text-gray-700 text-xs">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://github.com/AbdullahSaeed1211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-gray-700 font-medium text-xs">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/abdullah-saeed1211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <FaLinkedinIn className="text-lg text-blue-700" />
                  <span className="text-gray-700 font-medium text-xs">LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:example@example.com" 
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <HiMail className="text-lg text-red-600" />
                  <span className="text-gray-700 font-medium text-xs">Email</span>
                </a>
                
                <a 
                  href="https://twitter.com/abdullahsaeed_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <FaTwitter className="text-lg text-blue-400" />
                  <span className="text-gray-700 font-medium text-xs">Twitter</span>
                </a>
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
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="Web Application">Web Application</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Performance Optimization">Performance Optimization</option>
                      <option value="Consultation">Technical Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Tell me about your project and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg text-white font-medium transition-all duration-300 
                      ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out! I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
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
