import { kiroProject } from './kiiro';
import { testimonialNudgerProject } from './testimonialNudger';
import { dubbbyProject } from './dubbby';
import { minorProjects } from './minorProjects';

// Get projects from minorProjects
const guidanceWelfareProject = minorProjects.find(p => p.id === "guidancewelfare");
const simplyMortgageProject = minorProjects.find(p => p.id === "simply");
const lotusProServicesProject = minorProjects.find(p => p.id === "lotusproservices");
const brainWiseProject = minorProjects.find(p => p.id === "brainwise");
const blogSquirrelProject = minorProjects.find(p => p.id === "blogsquirrel");
const sproutlyProject = minorProjects.find(p => p.id === "sproutly");

// Other minor projects (excluding the ones we specifically pulled out)
const otherMinorProjects = minorProjects.filter(p => 
  !["guidancewelfare", "simply", "lotusproservices", "brainwise", "blogsquirrel", "sproutly", "pantry-panic", "speakspeare"].includes(p.id)
);

// Feature projects are the ones with detailed case studies
export const featureProjects = [
  kiroProject,
  testimonialNudgerProject,
  dubbbyProject
];

// All projects combined for listing in the new requested order
export const allProjects = [
  guidanceWelfareProject,       // 1. Guidance Welfare Foundation (Featured)
  brainWiseProject,             // 2. BrainWise (Research Platform)
  kiroProject,                  // 3. Kiiro
  simplyMortgageProject,        // 4. Simply Mortgages
  lotusProServicesProject,      // 5. Lotus Pro Services
  dubbbyProject,                // 6. Dubbby
  sproutlyProject,              // 7. Sproutly
  testimonialNudgerProject,     // 8. Testimonial Nudger
  blogSquirrelProject,          // 9. BlogSquirrel
  ...otherMinorProjects         // 10. Rest as is
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