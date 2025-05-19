import { kiroProject } from './kiiro';
import { testimonialNudgerProject } from './testimonialNudger';
import { dubbbyProject } from './dubbby';
import { minorProjects } from './minorProjects';

// Get projects from minorProjects
const simplyMortgageProject = minorProjects.find(p => p.id === "simply");
const lotusProServicesProject = minorProjects.find(p => p.id === "lotusproservices");
const brainWiseProject = minorProjects.find(p => p.id === "brainwise");
const blogSquirrelProject = minorProjects.find(p => p.id === "blogsquirrel");
const sproutlyProject = minorProjects.find(p => p.id === "sproutly");

// Other minor projects (excluding the ones we specifically pulled out)
const otherMinorProjects = minorProjects.filter(p => 
  !["simply", "lotusproservices", "brainwise", "blogsquirrel", "sproutly", "pantry-panic", "speakspeare"].includes(p.id)
);

// Feature projects are the ones with detailed case studies
export const featureProjects = [
  kiroProject,
  testimonialNudgerProject,
  dubbbyProject
];

// All projects combined for listing in the new requested order
export const allProjects = [
  simplyMortgageProject,         // 1. Simply Mortgages
  lotusProServicesProject,       // 2. Lotus Pro Services
  dubbbyProject,                // 3. Dubbby
  brainWiseProject,             // 4. BrainWise
  sproutlyProject,              // 5. Sproutly
  kiroProject,                  // 6. Kiiro
  testimonialNudgerProject,     // 7. Testimonial Nudger
  blogSquirrelProject,          // 8. BlogSquirrel
  ...otherMinorProjects         // 9. Rest as is
].filter(Boolean); // Remove any undefined entries (in case a project wasn't found)

// Export individual projects for direct access
export {
  kiroProject,
  testimonialNudgerProject,
  dubbbyProject,
  minorProjects
};

// Helper function to get a project by ID
export const getProjectById = (id) => {
  return allProjects.find(project => project.id === id) || null;
};

// Default export for convenience
export default {
  featureProjects,
  allProjects,
  getProjectById
}; 