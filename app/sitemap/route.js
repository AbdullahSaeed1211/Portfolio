import { allProjects } from '@/app/constants/projects';

export async function GET() {
  const baseUrl = 'https://abdullahsaeed.me';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic project pages
  const projectPages = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(project.metadata?.completionDate || '2024-12-20'),
    changeFrequency: 'monthly',
    priority: project.id === 'guidancewelfare' || project.id === 'care4brain' || project.id === 'kiiro' ? 0.9 : 0.8,
  }));

  const sitemapData = [...staticPages, ...projectPages];

  // Generate XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=900, s-maxage=900'
    }
  });
}
