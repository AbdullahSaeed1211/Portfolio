/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    domains: ["github.com"],
    formats: ['image/webp', 'image/avif'],
  },

  // Basic SEO optimizations
  poweredByHeader: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, s-maxage=1800'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      }
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/#Projects',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig;
  