"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSimple = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/assets/icons/HeroRocket.svg"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="font-medium">Abdullah Saeed</span>
          </div>
          
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Abdullah Saeed. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/AbdullahSaeed1211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdullah-saeed1211/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@abdullahsaeed.dev" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple; 