"use client";

import React from "react";
import { motion } from "framer-motion";

const BlurFade = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  direction = "up", 
  once = true,
  ...props 
}) => {
  // Set initial and animate values based on direction
  const getAnimationProps = () => {
    const distance = 30;
    
    switch (direction) {
      case "up":
        return { 
          initial: { y: distance, opacity: 0, filter: "blur(5px)" },
          animate: { y: 0, opacity: 1, filter: "blur(0px)" }
        };
      case "down":
        return { 
          initial: { y: -distance, opacity: 0, filter: "blur(5px)" },
          animate: { y: 0, opacity: 1, filter: "blur(0px)" }
        };
      case "left":
        return { 
          initial: { x: distance, opacity: 0, filter: "blur(5px)" },
          animate: { x: 0, opacity: 1, filter: "blur(0px)" }
        };
      case "right":
        return { 
          initial: { x: -distance, opacity: 0, filter: "blur(5px)" },
          animate: { x: 0, opacity: 1, filter: "blur(0px)" }
        };
      default:
        return { 
          initial: { y: distance, opacity: 0, filter: "blur(5px)" },
          animate: { y: 0, opacity: 1, filter: "blur(0px)" }
        };
    }
  };

  const { initial, animate } = getAnimationProps();

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade; 