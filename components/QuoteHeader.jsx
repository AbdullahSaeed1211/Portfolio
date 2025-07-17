"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteHeader = ({ 
  quote, 
  author, 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`relative mb-12 ${className}`}
    >
      {/* Quote Container */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="inline-flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30"
        >
          <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>

        {/* Quote Text */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-700 dark:text-gray-200 italic mb-4"
        >
          "{quote}"
        </motion.blockquote>

        {/* Author */}
        <motion.cite
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
          className="block text-sm sm:text-base font-medium text-muted-foreground not-italic"
        >
          — {author}
        </motion.cite>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: delay + 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800/50 to-transparent mx-auto mt-8"
        />
      </div>
    </motion.div>
  );
};

export default QuoteHeader; 