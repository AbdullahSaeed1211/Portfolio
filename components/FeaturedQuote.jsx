"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Lightbulb, Eye, TreePine } from "lucide-react";

const FeaturedQuote = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [
    { Icon: TreePine, label: "Forest" },
    { Icon: Eye, label: "Vision" },
    { Icon: Lightbulb, label: "Insight" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-200/30 dark:bg-emerald-800/30 blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-teal-200/30 dark:bg-teal-800/30 blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-200/20 dark:bg-cyan-800/20 blur-2xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Philosophy Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
            <div className="relative w-5 h-5">
              {icons.map(({ Icon }, index) => (
                <Icon
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                    currentIcon === index 
                      ? 'opacity-100 scale-100 rotate-0' 
                      : 'opacity-0 scale-75 rotate-45'
                  }`}
                />
              ))}
            </div>
            Thinking About
          </div>
          </motion.div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Large Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white opacity-20"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-gray-800 dark:text-gray-100 italic mb-8 relative z-10"
            >
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                "Preoccupied with a single leaf... you won't see the tree. 
                Preoccupied with a single tree... you'll miss the entire forest. 
                Don't be preoccupied with a single spot. 
                See everything in its entirety... effortlessly. 
                That is what it means to truly 'see'."
              </span>
            </motion.blockquote>

            {/* Author */}
            <motion.cite
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="block text-lg sm:text-xl font-semibold text-emerald-700 dark:text-emerald-300 not-italic mb-8"
            >
              — Takehiko Inoue
            </motion.cite>
          </motion.div>

          

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1.8 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent mx-auto mt-12 max-w-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedQuote; 