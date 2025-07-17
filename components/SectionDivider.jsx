"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = ({ 
  className = "",
  variant = "default" // default, dots, waves, minimal
}) => {
  const variants = {
    default: (
      <div className="relative flex items-center justify-center py-8">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bg-background px-4"
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
        </motion.div>
      </div>
    ),
    
    dots: (
      <div className="flex items-center justify-center space-x-2 py-8">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
          />
        ))}
      </div>
    ),
    
    waves: (
      <div className="relative py-8 overflow-hidden">
        <svg
          className="w-full h-8"
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            d="M0,20 Q100,10 200,20 T400,20"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgb(59, 130, 246)" />
              <stop offset="75%" stopColor="rgb(6, 182, 212)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    
    minimal: (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "25%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto my-8"
      />
    )
  };

  return (
    <div className={`w-full ${className}`}>
      {variants[variant]}
    </div>
  );
};

export default SectionDivider; 