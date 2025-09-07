import { allProjects } from '@/app/constants/projects';

export default function sitemap() {
  const baseUrl = 'https://abdullahsaeed.me';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#About`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#Projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#Skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#Contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic project pages
  const projectPages = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(project.metadata?.completionDate || '2024-12-20'),
    changeFrequency: 'monthly',
    priority: project.id === 'guidancewelfare' || project.id === 'brainwise' || project.id === 'kiiro' ? 0.9 : 0.8,
  }));

  return [...staticPages, ...projectPages];
}
