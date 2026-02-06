import { kiroProject } from './kiiro';
import { testimonialNudgerProject } from './testimonialNudger';
import { dubbbyProject } from './dubbby';
import { minorProjects } from './minorProjects';

// Get projects from minorProjects
const guidanceWelfareProject = minorProjects.find(p => p.id === "guidancewelfare");
const simplyMortgageProject = minorProjects.find(p => p.id === "simply");
const lotusProServicesProject = minorProjects.find(p => p.id === "lotusproservices");
const care4BrainProject = minorProjects.find(p => p.id === "care4brain");
const blogSquirrelProject = minorProjects.find(p => p.id === "blogsquirrel");
const sproutlyProject = minorProjects.find(p => p.id === "sproutly");
const pantryPanicProject = minorProjects.find(p => p.id === "pantry-panic");
const speakspeareProject = minorProjects.find(p => p.id === "speakspeare");

// Other minor projects (excluding the ones we specifically pulled out)
const otherMinorProjects = minorProjects.filter(p => 
  !["guidancewelfare", "simply", "lotusproservices", "care4brain", "blogsquirrel", "sproutly", "pantry-panic", "speakspeare"].includes(p.id)
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
  care4BrainProject,             // 2. Care4Brain (Research Platform)
  kiroProject,                  // 3. Kiiro
  simplyMortgageProject,        // 4. Simply Mortgages
  sproutlyProject,              // 5. Sproutly
  lotusProServicesProject,      // 6. Lotus Pro Services
  dubbbyProject,                // 7. Dubbby
  testimonialNudgerProject,     // 8. Testimonial Nudger
  blogSquirrelProject,          // 9. BlogSquirrel
  pantryPanicProject,           // 10. Pantry Panic
  speakspeareProject,           // 11. SpeakSpeare
  ...otherMinorProjects         // 12. Rest as is
].filter(Boolean); // Remove any undefined entries (in case a project wasn't found)

// Export individual projects for direct access
export {
  kiroProject,
  testimonialNudgerProject,
  dubbbyProject,
  guidanceWelfareProject,
  care4BrainProject,
  simplyMortgageProject,
  sproutlyProject,
  lotusProServicesProject,
  blogSquirrelProject,
  pantryPanicProject,
  speakspeareProject,
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