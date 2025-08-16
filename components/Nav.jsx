"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { navLinks } from "@app/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAnalytics } from "@/lib/hooks/use-analytics";

// Inner component for analytics functionality
function NavbarContent() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { trackEvent } = useAnalytics();

  const handleNav = () => {
    setNav(!nav);
  };

  // Track navigation item clicks
  const handleNavClick = (section) => {
    trackEvent('navigation_click', { 
      section_name: section,
      source: 'navbar' 
    });
    
    // Close mobile menu if open
    if (nav) {
      setNav(false);
    }
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Handle navigation shadow on scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  // Handle section detection for active indicator
  useEffect(() => {
    const sections = ['home', 'About', 'Projects', 'Skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  useEffect(() => {
    if (nav) {
      controls.start("open");
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      controls.start("closed");
      document.body.style.overflow = "auto";
    }
  }, [nav, controls]);

  const animateItems = nav ? "open" : "closed";

  return (
    <div className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        className={`rounded-full backdrop-blur-md bg-white/10 dark:bg-black/20 border border-blue-200/20 dark:border-blue-500/20 ${
          shadow ? "shadow-lg" : ""
        } py-1.5 px-4 max-w-2xl mx-auto w-auto`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/assets/icons/HeroRocket.svg"
              alt="logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <h1 className="font-bold text-xs bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Abdullah Saeed
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === (link.href === "/" ? "home" : link.href.replace("#", ""));
              return (
                <Link
                  href={link.href}
                  key={index}
                  rel={link.rel}
                  target={link.target}
                  className={`relative font-medium text-xs transition-colors duration-300 px-2.5 py-1 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => handleNavClick(link.text)}
                >
                  {link.text}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
            <a 
              href="https://cal.com/abdullahsaeed/15min?user=abdullahsaeed" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleNavClick('Book a call')}
            >
              <Button variant="gradient" size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-[10px] px-3 py-0.5 h-auto text-white ml-1">
                Book a call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost"
              size="icon"
              onClick={handleNav}
              aria-label="Menu"
              className="text-foreground h-8 w-8"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {nav && (
        <motion.div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleNav}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        className="fixed top-2 right-4 bottom-4 w-[260px] bg-background/90 backdrop-blur-md z-50 md:hidden p-5 flex flex-col border border-blue-200/20 dark:border-blue-500/20 rounded-2xl shadow-lg"
        variants={menuVariants}
        initial="closed"
        animate={nav ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="flex items-center gap-1.5" onClick={() => setNav(false)}>
            <Image
              src="/assets/icons/HeroRocket.svg"
              alt="logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <h1 className="font-bold text-xs bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Abdullah Saeed</h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNav}
            className="w-7 h-7 text-foreground"
            aria-label="Close menu"
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="flex flex-col space-y-1.5 mt-3">
          {navLinks.map((link, index) => {
            const isActive = activeSection === (link.href === "/" ? "home" : link.href.replace("#", ""));
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  onClick={() => handleNavClick(link.text)}
                  className={`flex items-center space-x-2 py-1.5 px-3 rounded-full ${
                    isActive 
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" 
                      : "text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span className="text-xs font-medium">{link.text}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-auto pt-4 border-t border-border">
          <a 
            href="https://cal.com/abdullahsaeed" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => handleNavClick('Book a call')}
          >
            <Button variant="gradient" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm py-1.5">
              Book a call
            </Button>
          </a>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/AbdullahSaeed1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-saeed1211/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Main component with Suspense
const Navbar = () => {
  return (
    <Suspense fallback={<div className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4">
      <div className="rounded-full backdrop-blur-md bg-white/10 dark:bg-black/20 border border-blue-200/20 dark:border-blue-500/20 py-1.5 px-4 max-w-2xl mx-auto w-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5"></div>
            <div className="h-4 w-20 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded"></div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="h-3 w-14 bg-gray-100 dark:bg-gray-800 rounded"></div>
            ))}
            <div className="h-6 w-16 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-full ml-1"></div>
          </div>
          <div className="md:hidden flex items-center">
            <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>}>
      <NavbarContent />
    </Suspense>
  );
};

export default Navbar;
