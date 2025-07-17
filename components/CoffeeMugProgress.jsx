"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export const CoffeeMugProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [coffeeLevel, setCoffeeLevel] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show after scrolling 10%
      setIsVisible(progress > 10);
      
      // Coffee decreases as we scroll (more work = less coffee!)
      setCoffeeLevel(Math.max(0, 100 - progress));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2">
      {/* Coffee Level Text Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-full border border-amber-200 dark:border-amber-700/50"
      >
        {coffeeLevel > 70 ? "☕ Full" : coffeeLevel > 40 ? "☕ Half" : coffeeLevel > 10 ? "☕ Low" : "☕ Empty"}
      </motion.div>

      {/* Coffee Mug with Progress */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Mug SVG */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          className="drop-shadow-lg"
        >
          {/* Mug body */}
          <rect
            x="20"
            y="30"
            width="45"
            height="50"
            rx="5"
            fill="#8B4513"
            stroke="#654321"
            strokeWidth="2"
          />
          
          {/* Mug handle */}
          <path
            d="M 65 45 Q 80 45 80 55 Q 80 65 65 65"
            fill="none"
            stroke="#654321"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Coffee fill (animated based on scroll) */}
          <rect
            x="22"
            y={30 + (48 * (100 - coffeeLevel) / 100)}
            width="41"
            height={48 * coffeeLevel / 100}
            rx="3"
            fill={coffeeLevel > 50 ? "#6F4E37" : coffeeLevel > 20 ? "#8B4513" : "#CD853F"}
            className="transition-all duration-300"
          />
          
          {/* Coffee foam/bubbles */}
          {coffeeLevel > 80 && (
            <>
              <circle cx="35" cy="35" r="2" fill="#F5DEB3" opacity="0.8" />
              <circle cx="45" cy="32" r="1.5" fill="#F5DEB3" opacity="0.6" />
              <circle cx="55" cy="36" r="1" fill="#F5DEB3" opacity="0.7" />
            </>
          )}
          
          {/* Steam when coffee level is high */}
          {coffeeLevel > 60 && (
            <g className="animate-pulse">
              <path
                d="M 35 25 Q 35 20 40 22 Q 40 18 35 20"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 45 25 Q 45 20 50 22 Q 50 18 45 20"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
              />
            </g>
          )}
        </svg>
        
        {/* Progress ring around mug */}
        <svg
          className="absolute inset-0 -rotate-90"
          width="60"
          height="60"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
            opacity="0.3"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg">
          ☕ {Math.round(scrollProgress)}% • Click to scroll to top
        </div>
      </div>
    </div>
  );
};

export default CoffeeMugProgress; 