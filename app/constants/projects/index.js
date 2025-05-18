import { kiroProject } from './kiiro';
import { testimonialNudgerProject } from './testimonialNudger';
import { dubbbyProject } from './dubbby';
import { minorProjects } from './minorProjects';

// Get simply mortgage and other specific projects from minorProjects
const simplyMortgageProject = minorProjects.find(p => p.id === "simply");
const lotusProServicesProject = minorProjects.find(p => p.id === "lotusproservices");
const brainWiseProject = minorProjects.find(p => p.id === "brainwise");
const blogSquirrelProject = minorProjects.find(p => p.id === "blogsquirrel");

// Other minor projects (excluding the ones we specifically pulled out)
const otherMinorProjects = minorProjects.filter(p => 
  !["simply", "lotusproservices", "brainwise", "blogsquirrel"].includes(p.id)
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
  testimonialNudgerProject,      // 3. Testimonial Nudger
  dubbbyProject,                // 4. Dubbby
  brainWiseProject,             // 5. BrainWise
  kiroProject,                  // 6. Kiiro
  blogSquirrelProject,          // 7. BlogSquirrel
  ...otherMinorProjects         // 8. Rest as is
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