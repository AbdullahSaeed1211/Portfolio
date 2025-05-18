// This file is now a compatibility layer for the new project structure
// It imports from the new projects directory and exports in the old format

import projectExports from './projects';
const { allProjects, getProjectById } = projectExports;

// Create a map of projects for the old format
export const projectDetails = allProjects.reduce((acc, project) => {
  // Use the id as the key for the map
  acc[project.id] = {
    completionDate: project.metadata?.completionDate || "",
    category: project.metadata?.category || "",
    duration: project.metadata?.duration || "",
    purpose: project.metadata?.purpose || "",
    projectLink: project.projectLink || "",
    projectLinkGithub: project.projectLinkGithub || "",
    detailedDescription: project.detailedDescription || "",
    techStack: project.techStack || [],
    keyFeatures: project.keyFeatures || [],
    problemSolution: project.problemSolution || null,
    colorScheme: project.caseStudy?.colorScheme || null,
    metrics: project.caseStudy?.results?.metrics || null
  };
  return acc;
}, {});

// Export the new project functions for direct access
export { getProjectById, allProjects };

// Export default for backwards compatibility
export default projectDetails;