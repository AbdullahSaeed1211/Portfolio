"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: "about-me",
    title: "Where It All Started",
    excerpt: "My journey from Minecraft redstone to machine learning research",
    date: "December 2024",
    readTime: "5 min read",
    author: "Abdullah Saeed",
    featured: true,
    coverImage: "/assets/images/AboutMe.png"
  }
];

export default function BlogPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="red_gradient dark:from-red-400 dark:to-red-600">Blog</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts on software engineering, AI, machine learning, and the journey of building things.
        </p>
      </motion.div>

      {/* Featured Post */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Featured Article
          </h2>
        </div>

        <Link href="/blog/about-me" className="block group">
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 flex flex-col md:flex-row">
            {/* Cover Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
              <img
                src={blogPosts[0].coverImage}
                alt={blogPosts[0].title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                {blogPosts[0].title}
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex items-center text-red-400 font-medium group-hover:translate-x-2 transition-transform">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Future Posts Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            More Articles Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'm working on more in-depth articles about software engineering, AI development, and my experiences building real-world applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
