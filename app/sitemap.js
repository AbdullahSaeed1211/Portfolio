import { allProjects } from '@/app/constants/projects';

export default function sitemap() {
  const baseUrl = 'https://abdullahsaeed.me';

  // Core static routes
  const routes = ['', '/uses', '/blog', '/blog/about-me'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
