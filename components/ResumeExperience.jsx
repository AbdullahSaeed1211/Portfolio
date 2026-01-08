"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FileText, Calendar, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardHover = {
  scale: 1.02,
  y: -5,
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
};

const ResumeExperience = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={item} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Professional Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my professional experience, education, and research contributions
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {/* Freelance Fullstack Developer */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/kiiro.jpeg"
                        alt="Kiiro.cx"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Kiiro.cx
                        </h4>
                        <p className="text-muted-foreground font-medium">Freelance Fullstack Developer</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Remote</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Apr 2025 – Present</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      End-to-End Web Development & Client Management
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Blue Rocket LLC */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/bluerocket.jpeg"
                        alt="Blue Rocket LLC"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Blue Rocket LLC
                        </h4>
                        <p className="text-muted-foreground font-medium">Software Development Engineer Intern</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Delhi, India</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Mar 2025</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      AI-Powered Document Processing & OCR Systems
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Python', 'FastAPI', 'Mistral OCR', 'NLP', 'PDF Processing'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Headstarter AI */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/headstarter.jpeg"
                        alt="Headstarter AI"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Headstarter AI & HIT AI
                        </h4>
                        <p className="text-muted-foreground font-medium">Software Engineering Fellow</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Remote</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Jul 2024 – Sep 2024</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      AI Web Applications & SaaS Development
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'Flask', 'Python', 'Gemini API', 'LangChain', 'Stripe', 'AWS S3', 'MongoDB'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mirch Media */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/mirchmedia.jpeg"
                        alt="Mirch Media"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Mirch Media
                        </h4>
                        <p className="text-muted-foreground font-medium">Web Developer Intern</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">New York (Remote)</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Mar 2024 – Aug 2024</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      Frontend Development & Design Implementation
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['React', 'Figma', 'JavaScript', 'CSS3', 'Performance Optimization'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {/* Georgia Tech */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/gtech.png"
                        alt="Georgia Institute of Technology"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Georgia Institute of Technology
                        </h4>
                        <p className="text-muted-foreground font-medium">Master of Science in Computer Science</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Atlanta, GA</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Spring 2026 – Present</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      Artificial Intelligence
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Amity University */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/exp/amity.png"
                        alt="Amity University"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Amity University
                        </h4>
                        <p className="text-muted-foreground font-medium">B.Tech in Computer Science & Engineering</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Uttar Pradesh, India</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">2021 – June 2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-foreground/80 font-medium">CGPA: 8.48/10.00 (First Division)</p>
                      <p className="text-muted-foreground text-sm">
                        Focus: AI, Machine Learning, Software Engineering, Database Systems
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Research Publications Section */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Research Publications</h3>
            </div>

            <div className="space-y-6">
              {/* Brain Tumor Detection Paper */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        Enhanced Brain Tumor Detection via ResNet50 Classification and Residual U-Net Segmentation
                      </h4>
                      <p className="text-muted-foreground font-medium">IEEE CICTN 2025</p>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      Deep Learning & Medical Imaging
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['ResNet50', 'U-Net', 'TensorFlow', 'Medical AI', 'Computer Vision', 'PyTorch'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Semantic Web Paper */}
              <motion.div
                variants={item}
                whileHover={cardHover}
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        AI-Enabled Semantic Web
                      </h4>
                      <p className="text-muted-foreground font-medium">IEEE ICDT 2024</p>
                    </div>

                    <p className="text-foreground/80 font-medium">
                      Semantic Indexing & Knowledge Graphs
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Semantic Web', 'Knowledge Graphs', 'AI Algorithms', 'Information Retrieval', 'Python'].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeExperience;
