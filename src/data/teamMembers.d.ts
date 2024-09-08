import { TeamMember } from '../types/TeamMember'; // Import the TeamMember type for type safety.

declare module '../data/teamMembers' {
  const teamMembers: TeamMember[];
  export default teamMembers;
}

// Declare a module for the file '../data/teamMembers'. 
// This allows TypeScript to understand what this module exports, particularly when the actual module lacks type definitions.
// Then declared that this module exports a constant called `teamMembers` which is an array of `TeamMember` objects.
// Then export the `teamMembers` constant as the default export.
