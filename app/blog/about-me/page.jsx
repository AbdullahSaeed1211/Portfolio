"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function AboutMeBlogPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Back to Blog Link */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.article
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Article Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>December 2024</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Abdullah Saeed</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="red_gradient dark:from-red-400 dark:to-red-600">Where It All Started</span>
        </h1>

        {/* Cover Image */}
        <motion.div
          className="relative w-full h-80 lg:h-96 mb-8 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/assets/images/AboutMe.png"
            alt="My journey from Minecraft to software engineering"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              In the pixelated world of Minecraft, my first lines of 'code' were intricate redstone contraptions – automated sorters, complex transportation systems, and self-sustaining farms. What began as childhood play became my earliest lesson in computational thinking, where every circuit and comparator revealed the elegant logic underlying technological innovation.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              The Spark of Curiosity
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Little did I know that these virtual engineering experiments would spark a lifelong passion for understanding how systems work and how to build them better. That curiosity evolved into developing real applications, exploring AI research, and creating solutions that solve actual problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              What started as playful experimentation with redstone circuits became the foundation for my approach to software engineering – always asking "how does this work?" and "how can it work better?"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              From Play to Purpose
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              This journey from Minecraft redstone to machine learning research exemplifies how curiosity-driven learning can lead to meaningful contributions in technology. The same systematic thinking that went into building automated farms in Minecraft now informs my approach to building scalable web applications and AI-powered solutions.
            </p>

            <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-xl border border-red-200 dark:border-red-800 mb-8">
              <p className="text-red-800 dark:text-red-200 font-medium italic">
                "Every great developer was once a curious beginner. The difference is in never losing that spark of wonder."
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Today, I approach every project with the same curiosity that drove me to build complex redstone contraptions as a child. Whether it's optimizing a machine learning model or architecting a scalable web application, I believe the best solutions come from understanding the problem deeply and approaching it with systematic creativity.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-8 rounded-2xl border border-red-200 dark:border-red-800 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Interested in my work?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you're passionate about building technology that makes a difference, I'd love to connect and explore potential opportunities together.
            </p>
            <div className="flex gap-4">
              <Link
                href="/#Contact"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium"
              >
                Let's Connect
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                Read More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}
