/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"], // Add any other external domains as needed
  },
  env: {
    // We're not setting the value here as it will be read from .env.local
    // This just ensures Next.js is aware of this environment variable
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
}

module.exports = nextConfig;
  