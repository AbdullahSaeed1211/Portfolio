export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/assets/', '/public/', '/llms.txt'],
        disallow: ['/api/', '/_next/', '/node_modules/', '/package.json', '/next.config.js', '/tailwind.config.js', '/jsconfig.json', '/components.json'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'GPTBot', 'ClaudeBot', 'CCBot', 'Google-Extended'],
        allow: ['/'],
      }
    ],
    sitemap: 'https://abdullahsaeed.me/sitemap.xml',
  }
}
