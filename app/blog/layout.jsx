import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, AI, and technology",
  alternates: {
    canonical: "https://abdullahsaeed.me/blog",
  }
};

export default function BlogLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
